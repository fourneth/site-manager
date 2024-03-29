/**
 * Used as a view by {@link Ext.tree.Panel TreePanel}.
 */
Ext.define('Ext.tree.View', {
    extend: 'Ext.view.Table',
    alias: 'widget.treeview',

    requires: [
        'Ext.data.NodeStore'
    ],

    loadingCls: Ext.baseCSSPrefix + 'grid-tree-loading',
    expandedCls: Ext.baseCSSPrefix + 'grid-tree-node-expanded',
    leafCls: Ext.baseCSSPrefix + 'grid-tree-node-leaf',

    expanderSelector: '.' + Ext.baseCSSPrefix + 'tree-expander',
    checkboxSelector: '.' + Ext.baseCSSPrefix + 'tree-checkbox',
    expanderIconOverCls: Ext.baseCSSPrefix + 'tree-expander-over',

    // Class to add to the node wrap element used to hold nodes when a parent is being
    // collapsed or expanded. During the animation, UI interaction is forbidden by testing
    // for an ancestor node with this class.
    nodeAnimWrapCls: Ext.baseCSSPrefix + 'tree-animator-wrap',

    blockRefresh: true,
    
    /**
     * @cfg
     * @inheritdoc
     */
    loadMask: false,

    /** 
     * @cfg {Boolean} rootVisible
     * False to hide the root node.
     */
    rootVisible: true,

    /**
     * @cfg {Boolean} deferInitialRefresh
     * Must be false for Tree Views because the root node must be rendered in order to be updated with its child nodes.
     */
    deferInitialRefresh: false,

    /** 
     * @cfg {Boolean} animate
     * True to enable animated expand/collapse (defaults to the value of {@link Ext#enableFx Ext.enableFx})
     */

    expandDuration: 250,
    collapseDuration: 250,

    toggleOnDblClick: true,

    stripeRows: false,

    // fields that will trigger a change in the ui that aren't likely to be bound to a column
    uiFields: ['expanded', 'loaded', 'checked', 'expandable', 'leaf', 'icon', 'iconCls', 'loading', 'qtip', 'qtitle'],

    initComponent: function() {
        var me = this,
            treeStore = me.panel.getStore();

        if (me.initialConfig.animate === undefined) {
            me.animate = Ext.enableFx;
        }

        me.store = new Ext.data.NodeStore({
            treeStore: treeStore,
            recursive: true,
            rootVisible: me.rootVisible,
            listeners: {
                beforeexpand: me.onBeforeExpand,
                expand: me.onExpand,
                beforecollapse: me.onBeforeCollapse,
                collapse: me.onCollapse,
                write: me.onStoreWrite,
                datachanged: me.onStoreDataChanged,
                scope: me
            }
        });

        if (me.node) {
            me.setRootNode(me.node);
        }
        me.animQueue = {};
        me.animWraps = {};
        me.addEvents(
            /**
             * @event afteritemexpand
             * Fires after an item has been visually expanded and is visible in the tree. 
             * @param {Ext.data.NodeInterface} node         The node that was expanded
             * @param {Number} index                        The index of the node
             * @param {HTMLElement} item                    The HTML element for the node that was expanded
             */
            'afteritemexpand',
            /**
             * @event afteritemcollapse
             * Fires after an item has been visually collapsed and is no longer visible in the tree. 
             * @param {Ext.data.NodeInterface} node         The node that was collapsed
             * @param {Number} index                        The index of the node
             * @param {HTMLElement} item                    The HTML element for the node that was collapsed
             */
            'afteritemcollapse'
        );
        me.callParent(arguments);
        me.on({
            element: 'el',
            scope: me,
            delegate: me.expanderSelector,
            mouseover: me.onExpanderMouseOver,
            mouseout: me.onExpanderMouseOut
        });
        me.on({
            element: 'el',
            scope: me,
            delegate: me.checkboxSelector,
            click: me.onCheckboxChange
        });
    },
    
    getMaskStore: function(){
        return this.panel.getStore();    
    },

    afterComponentLayout: function(){
        this.callParent(arguments);
        var stretcher = this.stretcher;
        if (stretcher) {
            stretcher.setWidth((this.getWidth() - Ext.getScrollbarSize().width));
        }
    },

    processUIEvent: function(e) {
        // If the clicked node is part of an animation, ignore the click.
        // This is because during a collapse animation, the associated Records
        // will already have been removed from the Store, and the event is not processable.
        if (e.getTarget('.' + this.nodeAnimWrapCls, this.el)) {
            return false;
        }
        return this.callParent(arguments);
    },

    onClear: function(){
        this.store.removeAll();    
    },

    setRootNode: function(node) {
        var me = this;        
        me.store.setNode(node);
        me.node = node;
    },

    onCheckboxChange: function(e, t) {
        var me = this,
            item = e.getTarget(me.getItemSelector(), me.getTargetEl());

        if (item) {
            me.onCheckChange(me.getRecord(item));
        }
    },

    onCheckChange: function(record){
        var checked = record.get('checked');
        if (Ext.isBoolean(checked)) {
            checked = !checked;
            record.set('checked', checked);
            this.fireEvent('checkchange', record, checked);
        }
    },

    getChecked: function() {
        var checked = [];
        this.node.cascadeBy(function(rec){
            if (rec.get('checked')) {
                checked.push(rec);
            }
        });
        return checked;
    },

    isItemChecked: function(rec){
        return rec.get('checked');
    },

    /**
     * @private
     */
    createAnimWrap: function(record, index) {
        var thHtml = '',
            headerCt = this.panel.headerCt,
            headers = headerCt.getGridColumns(),
            i = 0, len = headers.length, item,
            node = this.getNode(record),
            tmpEl, nodeEl;

        for (; i < len; i++) {
            item = headers[i];
            thHtml += '<th style="width: ' + (item.hidden ? 0 : item.getDesiredWidth()) + 'px; height: 0px;"></th>';
        }

        nodeEl = Ext.get(node);        
        tmpEl = nodeEl.insertSibling({
            tag: 'tr',
            html: [
                '<td colspan="' + headerCt.getColumnCount() + '">',
                    '<div class="' + this.nodeAnimWrapCls + '">',
                        '<table class="' + Ext.baseCSSPrefix + 'grid-table" style="width: ' + headerCt.getFullWidth() + 'px;"><tbody>',
                            thHtml,
                        '</tbody></table>',
                    '</div>',
                '</td>'
            ].join('')
        }, 'after');

        return {
            record: record,
            node: node,
            el: tmpEl,
            expanding: false,
            collapsing: false,
            animating: false,
            animateEl: tmpEl.down('div'),
            targetEl: tmpEl.down('tbody')
        };
    },

    /**
     * @private
     * Returns the animation wrapper element for the specified parent node, used to wrap the child nodes as
     * they slide up or down during expand/collapse.
     * 
     * @param parent The parent node to be expanded or collapsed
     * 
     * @param [bubble=true] If the passed parent node does not already have a wrap element created, by default
     * this function will bubble up to each parent node looking for a valid wrap element to reuse, returning 
     * the first one it finds. This is the appropriate behavior, e.g., for the collapse direction, so that the
     * entire expanded set of branch nodes can collapse as a single unit.
     * 
     * However for expanding each parent node should instead always create its own animation wrap if one 
     * doesn't exist, so that its children can expand independently of any other nodes -- this is crucial 
     * when executing the "expand all" behavior. If multiple nodes attempt to reuse the same ancestor wrap
     * element concurrently during expansion it will lead to problems as the first animation to complete will
     * delete the wrap el out from under other running animations. For that reason, when expanding you should
     * always pass `bubble: false` to be on the safe side.
     * 
     * If the passed parent has no wrap (or there is no valid ancestor wrap after bubbling), this function 
     * will return null and the calling code should then call {@link #createAnimWrap} if needed.
     * 
     * @return {Ext.Element} The wrapping element as created in {@link #createAnimWrap}, or null
     */
    getAnimWrap: function(parent, bubble) {
        if (!this.animate) {
            return null;
        }

        var wraps = this.animWraps,
            wrap = wraps[parent.internalId];

        if (bubble !== false) {
            while (!wrap && parent) {
                parent = parent.parentNode;
                if (parent) {
                    wrap = wraps[parent.internalId];
                }
            }
        }
        return wrap;
    },

    doAdd: function(nodes, records, index) {
        // If we are adding records which have a parent that is currently expanding
        // lets add them to the animation wrap
        var me = this,
            record = records[0],
            parent = record.parentNode,
            a = me.all.elements,
            relativeIndex = 0,
            animWrap = me.getAnimWrap(parent),
            targetEl, children, len;

        if (!animWrap || !animWrap.expanding) {
            return me.callParent(arguments);
        }

        // We need the parent that has the animWrap, not the nodes parent
        parent = animWrap.record;

        // If there is an anim wrap we do our special magic logic
        targetEl = animWrap.targetEl;
        children = targetEl.dom.childNodes;

        // We subtract 1 from the childrens length because we have a tr in there with the th'es
        len = children.length - 1;

        // The relative index is the index in the full flat collection minus the index of the wraps parent
        relativeIndex = index - me.indexOf(parent) - 1;

        // If we are adding records to the wrap that have a higher relative index then there are currently children
        // it means we have to append the nodes to the wrap
        if (!len || relativeIndex >= len) {
            targetEl.appendChild(nodes);
        }
        // If there are already more children then the relative index it means we are adding child nodes of
        // some expanded node in the anim wrap. In this case we have to insert the nodes in the right location
        else {
            // +1 because of the tr with th'es that is already there
            Ext.fly(children[relativeIndex + 1]).insertSibling(nodes, 'before', true);
        }

        // We also have to update the CompositeElementLite collection of the DataView
        Ext.Array.insert(a, index, nodes);

        // If we were in an animation we need to now change the animation
        // because the targetEl just got higher.
        if (animWrap.isAnimating) {
            me.onExpand(parent);
        }
    },

    beginBulkUpdate: function(){
        this.bulkUpdate = true;  
    },

    endBulkUpdate: function(){
        this.bulkUpdate = false;
    },

    onRemove : function(ds, record, index) {
        var me = this,
            bulk = me.bulkUpdate;
            
        if (me.viewReady) {
            me.doRemove(record, index);
            if (!bulk) {
                me.updateIndexes(index);
            }
            if (me.store.getCount() === 0){
                me.refresh();
            }
            if (!bulk) {
                me.fireEvent('itemremove', record, index);
            }
        }
    },

    doRemove: function(record, index) {
        // If we are adding records which have a parent that is currently expanding
        // lets add them to the animation wrap
        var me = this,
            all = me.all,
            animWrap = me.getAnimWrap(record),
            item = all.item(index),
            node = item ? item.dom : null;

        if (!node || !animWrap || !animWrap.collapsing) {
            return me.callParent(arguments);
        }

        animWrap.targetEl.appendChild(node);
        all.removeElement(index);
    },

    onBeforeExpand: function(parent, records, index) {
        var me = this,
            animWrap;

        if (!me.rendered || !me.animate) {
            return;
        }

        if (me.getNode(parent)) {
            animWrap = me.getAnimWrap(parent, false);
            if (!animWrap) {
                animWrap = me.animWraps[parent.internalId] = me.createAnimWrap(parent);
                animWrap.animateEl.setHeight(0);
            }
            else if (animWrap.collapsing) {
                // If we expand this node while it is still expanding then we
                // have to remove the nodes from the animWrap.
                animWrap.targetEl.select(me.itemSelector).remove();
            } 
            animWrap.expanding = true;
            animWrap.collapsing = false;
        }
    },

    onExpand: function(parent) {
        var me = this,
            queue = me.animQueue,
            id = parent.getId(),
            node = me.getNode(parent),
            index = node ? me.indexOf(node) : -1,
            animWrap,
            animateEl, 
            targetEl;        

        if (me.singleExpand) {
            me.ensureSingleExpand(parent);
        }

        // The item is not visible yet
        if (index === -1) {
            return;
        }

        animWrap = me.getAnimWrap(parent, false);

        if (!animWrap) {
            me.isExpandingOrCollapsing = false;
            me.fireEvent('afteritemexpand', parent, index, node);
            return;
        }

        animateEl = animWrap.animateEl;
        targetEl = animWrap.targetEl;

        animateEl.stopAnimation();
        // @TODO: we are setting it to 1 because quirks mode on IE seems to have issues with 0
        queue[id] = true;
        animateEl.slideIn('t', {
            duration: me.expandDuration,
            listeners: {
                scope: me,
                lastframe: function() {
                    // Move all the nodes out of the anim wrap to their proper location
                    animWrap.el.insertSibling(targetEl.query(me.itemSelector), 'before');
                    animWrap.el.remove();
                    me.refreshSize();
                    delete me.animWraps[animWrap.record.internalId];
                    delete queue[id];
                }
            },
            callback: function() {
                me.isExpandingOrCollapsing = false;
                me.fireEvent('afteritemexpand', parent, index, node);
            }
        });

        animWrap.isAnimating = true;
    },

    onBeforeCollapse: function(parent, records, index) {
        var me = this,
            animWrap;

        if (!me.rendered || !me.animate) {
            return;
        }

        if (me.getNode(parent)) {
            animWrap = me.getAnimWrap(parent);
            if (!animWrap) {
                animWrap = me.animWraps[parent.internalId] = me.createAnimWrap(parent, index);
            }
            else if (animWrap.expanding) {
                // If we collapse this node while it is still expanding then we
                // have to remove the nodes from the animWrap.
                animWrap.targetEl.select(this.itemSelector).remove();
            }
            animWrap.expanding = false;
            animWrap.collapsing = true;
        }
    },

    onCollapse: function(parent) {
        var me = this,
            queue = me.animQueue,
            id = parent.getId(),
            node = me.getNode(parent),
            index = node ? me.indexOf(node) : -1,
            animWrap = me.getAnimWrap(parent),
            animateEl, targetEl;

        // The item has already been removed by a parent node
        if (index === -1) {
            return;
        }

        if (!animWrap) {
            me.isExpandingOrCollapsing = false;
            me.fireEvent('afteritemcollapse', parent, index, node);
            return;
        }

        animateEl = animWrap.animateEl;
        targetEl = animWrap.targetEl;

        queue[id] = true;

        // @TODO: we are setting it to 1 because quirks mode on IE seems to have issues with 0
        animateEl.stopAnimation();
        animateEl.slideOut('t', {
            duration: me.collapseDuration,
            listeners: {
                scope: me,
                lastframe: function() {
                    animWrap.el.remove();
                    me.refreshSize();
                    delete me.animWraps[animWrap.record.internalId];
                    delete queue[id];
                }             
            },
            callback: function() {
                me.isExpandingOrCollapsing = false;
                me.fireEvent('afteritemcollapse', parent, index, node);
            }
        });
        animWrap.isAnimating = true;
    },

    /**
     * Checks if a node is currently undergoing animation
     * @private
     * @param {Ext.data.Model} node The node
     * @return {Boolean} True if the node is animating
     */
    isAnimating: function(node) {
        return !!this.animQueue[node.getId()];    
    },

    collectData: function(records) {
        var data = this.callParent(arguments),
            rows = data.rows,
            len = rows.length,
            i = 0,
            row, record;

        for (; i < len; i++) {
            row = rows[i];
            record = records[i];
            if (record.get('qtip')) {
                row.rowAttr = 'data-qtip="' + record.get('qtip') + '"';
                if (record.get('qtitle')) {
                    row.rowAttr += ' ' + 'data-qtitle="' + record.get('qtitle') + '"';
                }
            }
            if (record.isExpanded()) {
                row.rowCls = (row.rowCls || '') + ' ' + this.expandedCls;
            }
            if (record.isLeaf()) {
                row.rowCls = (row.rowCls || '') + ' ' + this.leafCls;
            }
            if (record.isLoading()) {
                row.rowCls = (row.rowCls || '') + ' ' + this.loadingCls;
            }
        }

        return data;
    },

    /**
     * Expands a record that is loaded in the view.
     * @param {Ext.data.Model} record The record to expand
     * @param {Boolean} [deep] True to expand nodes all the way down the tree hierarchy.
     * @param {Function} [callback] The function to run after the expand is completed
     * @param {Object} [scope] The scope of the callback function.
     */
    expand: function(record, deep, callback, scope) {
        return record.expand(deep, callback, scope);
    },

    /**
     * Collapses a record that is loaded in the view.
     * @param {Ext.data.Model} record The record to collapse
     * @param {Boolean} [deep] True to collapse nodes all the way up the tree hierarchy.
     * @param {Function} [callback] The function to run after the collapse is completed
     * @param {Object} [scope] The scope of the callback function.
     */
    collapse: function(record, deep, callback, scope) {
        return record.collapse(deep, callback, scope);
    },

    /**
     * Toggles a record between expanded and collapsed.
     * @param {Ext.data.Model} record
     * @param {Boolean} [deep] True to collapse nodes all the way up the tree hierarchy.
     * @param {Function} [callback] The function to run after the expand/collapse is completed
     * @param {Object} [scope] The scope of the callback function.
     */
    toggle: function(record, deep, callback, scope) {
        var me = this,
            doAnimate = !!this.animate;

        // Block toggling if we are already animating an expand or collapse operation.
        if (!doAnimate || !this.isExpandingOrCollapsing) {
            if (!record.isLeaf()) {
                this.isExpandingOrCollapsing = doAnimate;
            }
            if (record.isExpanded()) {
                me.collapse(record, deep, callback, scope);
            } else {
                me.expand(record, deep, callback, scope);
            }
        }
    },

    onItemDblClick: function(record, item, index) {
        var me = this,
            editingPlugin = me.editingPlugin;
            
        me.callParent(arguments);
        if (me.toggleOnDblClick && record.isExpandable() && !(editingPlugin && editingPlugin.clicksToEdit === 2)) {
            me.toggle(record);
        }
    },

    onBeforeItemMouseDown: function(record, item, index, e) {
        if (e.getTarget(this.expanderSelector, item)) {
            return false;
        }
        return this.callParent(arguments);
    },

    onItemClick: function(record, item, index, e) {
        if (e.getTarget(this.expanderSelector, item) && record.isExpandable()) {
            this.toggle(record, e.ctrlKey);
            return false;
        }
        return this.callParent(arguments);
    },

    onExpanderMouseOver: function(e, t) {
        e.getTarget(this.cellSelector, 10, true).addCls(this.expanderIconOverCls);
    },

    onExpanderMouseOut: function(e, t) {
        e.getTarget(this.cellSelector, 10, true).removeCls(this.expanderIconOverCls);
    },

    /**
     * Gets the base TreeStore from the bound TreePanel.
     */
    getTreeStore: function() {
        return this.panel.store;
    },    

    ensureSingleExpand: function(node) {
        var parent = node.parentNode;
        if (parent) {
            parent.eachChild(function(child) {
                if (child !== node && child.isExpanded()) {
                    child.collapse();
                }
            });
        }
    },

    shouldUpdateCell: function(column, changedFieldNames){
        if (changedFieldNames) {
            var i = 0,
                len = changedFieldNames.length;
                
            for (; i < len; ++i) {
                if (Ext.Array.contains(this.uiFields, changedFieldNames[i])) {
                    return true;
                }
            }
        }
        return this.callParent(arguments);
    },

    /**
     * Re-fires the NodeStore's "write" event as a TreeStore event
     * @private
     * @param {Ext.data.NodeStore} store
     * @param {Ext.data.Operation} operation
     */
    onStoreWrite: function(store, operation) {
        var treeStore = this.panel.store;
        treeStore.fireEvent('write', treeStore, operation);
    },

    /**
     * Re-fires the NodeStore's "datachanged" event as a TreeStore event
     * @private
     * @param {Ext.data.NodeStore} store
     * @param {Ext.data.Operation} operation
     */
    onStoreDataChanged: function(store, operation) {
        var treeStore = this.panel.store;
        treeStore.fireEvent('datachanged', treeStore);
    }
});
