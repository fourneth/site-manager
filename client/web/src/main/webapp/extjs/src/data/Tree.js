/**
 * @class Ext.data.Tree
 *
 * This class is used as a container for a series of nodes. The nodes themselves maintain
 * the relationship between parent/child. The tree itself acts as a manager. It gives functionality
 * to retrieve a node by its identifier: {@link #getNodeById}.
 *
 * The tree also relays events from any of it's child nodes, allowing them to be handled in a
 * centralized fashion. In general this class is not used directly, rather used internally
 * by other parts of the framework.
 *
 */
Ext.define('Ext.data.Tree', {
    alias: 'data.tree',

    mixins: {
        observable: "Ext.util.Observable"
    },

    /**
     * @property {Ext.data.NodeInterface}
     * The root node for this tree
     */
    root: null,

    /**
     * Creates new Tree object.
     * @param {Ext.data.NodeInterface} root (optional) The root node
     */
    constructor: function(root) {
        var me = this;

        me.mixins.observable.constructor.call(me);

        if (root) {
            me.setRootNode(root);
        }
    },

    /**
     * Returns the root node for this tree.
     * @return {Ext.data.NodeInterface}
     */
    getRootNode : function() {
        return this.root;
    },

    /**
     * Sets the root node for this tree.
     * @param {Ext.data.NodeInterface} node
     * @return {Ext.data.NodeInterface} The root node
     */
    setRootNode : function(node) {
        var me = this;

        me.root = node;

        if (me.fireEvent('beforeappend', null, node) !== false) {
            node.set('root', true);
            node.updateInfo();
            // root node should never be phantom or dirty, so commit it
            node.commit();

            node.on({
                scope: me,
                insert: me.onNodeInsert,
                append: me.onNodeAppend,
                remove: me.onNodeRemove
            });

            me.relayEvents(node, [
                /**
                 * @event append
                 * @inheritdoc Ext.data.NodeInterface#append
                 */
                "append",

                /**
                 * @event remove
                 * @inheritdoc Ext.data.NodeInterface#remove
                 */
                "remove",

                /**
                 * @event move
                 * @inheritdoc Ext.data.NodeInterface#move
                 */
                "move",

                /**
                 * @event insert
                 * @inheritdoc Ext.data.NodeInterface#insert
                 */
                "insert",

                /**
                 * @event beforeappend
                 * @inheritdoc Ext.data.NodeInterface#beforeappend
                 */
                "beforeappend",

                /**
                 * @event beforeremove
                 * @inheritdoc Ext.data.NodeInterface#beforeremove
                 */
                "beforeremove",

                /**
                 * @event beforemove
                 * @inheritdoc Ext.data.NodeInterface#beforemove
                 */
                "beforemove",

                /**
                 * @event beforeinsert
                 * @inheritdoc Ext.data.NodeInterface#beforeinsert
                 */
                "beforeinsert",

                /**
                 * @event expand
                 * @inheritdoc Ext.data.NodeInterface#expand
                 */
                "expand",

                /**
                 * @event collapse
                 * @inheritdoc Ext.data.NodeInterface#collapse
                 */
                "collapse",

                /**
                 * @event beforeexpand
                 * @inheritdoc Ext.data.NodeInterface#beforeexpand
                 */
                "beforeexpand",

                /**
                 * @event beforecollapse
                 * @inheritdoc Ext.data.NodeInterface#beforecollapse
                 */
                "beforecollapse" ,

                /**
                 * @event sort
                 * @inheritdoc Ext.data.NodeInterface#event-sort
                 */
                "sort",

                /**
                 * @event rootchange
                 * Fires whenever the root node is changed in the tree.
                 * @param {Ext.data.Model} root The new root
                 */
                "rootchange"
            ]);

            me.nodeHash = {};
            me.registerNode(node);
            me.fireEvent('append', null, node);
            me.fireEvent('rootchange', node);
        }

        return node;
    },

    /**
     * Flattens all the nodes in the tree into an array.
     * @private
     * @return {Ext.data.NodeInterface[]} The flattened nodes.
     */
    flatten: function(){
        return Ext.Object.getValues(this.nodeHash);
    },

    /**
     * Fired when a node is inserted into the root or one of it's children
     * @private
     * @param {Ext.data.NodeInterface} parent The parent node
     * @param {Ext.data.NodeInterface} node The inserted node
     */
    onNodeInsert: function(parent, node) {
        this.registerNode(node, true);
    },

    /**
     * Fired when a node is appended into the root or one of it's children
     * @private
     * @param {Ext.data.NodeInterface} parent The parent node
     * @param {Ext.data.NodeInterface} node The appended node
     */
    onNodeAppend: function(parent, node) {
        this.registerNode(node, true);
    },

    /**
     * Fired when a node is removed from the root or one of it's children
     * @private
     * @param {Ext.data.NodeInterface} parent The parent node
     * @param {Ext.data.NodeInterface} node The removed node
     */
    onNodeRemove: function(parent, node) {
        this.unregisterNode(node, true);
    },

    /**
     * Fired when a node's id changes.  Updates the node's id in the node hash.
     * @private
     * @param {Ext.data.NodeInterface} node 
     * @param {Number} oldId The old id
     * @param {Number} newId The new id
     */
    onNodeIdChanged: function(node, oldId, newId) {
        var nodeHash = this.nodeHash;
    
        nodeHash[newId] = node;
        delete nodeHash[oldId || node.internalId];
    },

    /**
     * Gets a node in this tree by its id.
     * @param {String} id
     * @return {Ext.data.NodeInterface} The match node.
     */
    getNodeById : function(id) {
        return this.nodeHash[id];
    },

    /**
     * Registers a node with the tree
     * @private
     * @param {Ext.data.NodeInterface} The node to register
     * @param {Boolean} [includeChildren] True to unregister any child nodes
     */
    registerNode : function(node, includeChildren) {
        var me = this;

        me.nodeHash[node.getId() || node.internalId] = node;
        node.on('idchanged', me.onNodeIdChanged, me);
        if (includeChildren === true) {
            node.eachChild(function(child){
                me.registerNode(child, true);
            });
        }
    },

    /**
     * Unregisters a node with the tree
     * @private
     * @param {Ext.data.NodeInterface} The node to unregister
     * @param {Boolean} [includeChildren] True to unregister any child nodes
     */
    unregisterNode : function(node, includeChildren) {
        delete this.nodeHash[node.getId() || node.internalId];
        if (includeChildren === true) {
            node.eachChild(function(child){
                this.unregisterNode(child, true);
            }, this);
        }
    },

    /**
     * Sorts this tree
     * @private
     * @param {Function} sorterFn The function to use for sorting
     * @param {Boolean} recursive True to perform recursive sorting
     */
    sort: function(sorterFn, recursive) {
        this.getRootNode().sort(sorterFn, recursive);
    },

     /**
     * Filters this tree
     * @private
     * @param {Function} sorterFn The function to use for filtering
     * @param {Boolean} recursive True to perform recursive filtering
     */
    filter: function(filters, recursive) {
        this.getRootNode().filter(filters, recursive);
    }
});