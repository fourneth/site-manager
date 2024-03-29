/**
 * Simple header class which is used for on {@link Ext.panel.Panel} and {@link Ext.window.Window}.
 */
Ext.define('Ext.panel.Header', {
    extend: 'Ext.container.Container',
    uses: ['Ext.panel.Tool', 'Ext.draw.Component', 'Ext.util.CSS', 'Ext.layout.component.Body', 'Ext.Img'],
    alias: 'widget.header',

    /**
     * @property {Boolean} isHeader
     * `true` in this class to identify an objact as an instantiated Header, or subclass thereof.
     */
    isHeader       : true,
    defaultType    : 'tool',
    indicateDrag   : false,
    weight         : -1,
    componentLayout: 'body',

    /**
     * @cfg {String} [titleAlign='left']
     * May be `"left"`, `"right"` or `"center"`.
     *
     * The alignment of the title text within the available space between the icon and the tools.
     */
    titleAlign: 'left',

    childEls: [
        'body'
    ],

    renderTpl: [
        '<div id="{id}-body" class="{baseCls}-body {bodyCls}',
        '<tpl for="uiCls"> {parent.baseCls}-body-{parent.ui}-{.}</tpl>"',
        '<tpl if="bodyStyle"> style="{bodyStyle}"</tpl>>',
            '{%this.renderContainer(out,values)%}',
        '</div>'
    ],

    headingTpl: '<span id="{id}-textEl" class="{cls}-text {cls}-text-{ui}">{title}</span>',

    shrinkWrap: 3,

    /**
     * @cfg {String} title
     * The title text to display.
     */

    /**
     * @cfg {String} iconCls
     * CSS class for an icon in the header. Used for displaying an icon to the left of a title.
     */
    
    /**
     * @cfg {String} icon
     * Path to image for an icon in the header. Used for displaying an icon to the left of a title.
     */

    initComponent: function() {
        var me = this,
            ruleStyle,
            rule,
            style,
            ui,
            tempEl;
            
        me.addEvents(
            /**
             * @event click
             * Fires when the header is clicked. This event will not be fired 
             * if the click was on a {@link Ext.panel.Tool}
             * @param {Ext.panel.Header} this
             * @param {Ext.EventObject} e
             */
            'click',
            
            /**
             * @event dblclick
             * Fires when the header is double clicked. This event will not 
             * be fired if the click was on a {@link Ext.panel.Tool}
             * @param {Ext.panel.Header} this
             * @param {Ext.EventObject} e
             */
            'dblclick'
        );

        me.indicateDragCls = me.baseCls + '-draggable';
        me.title = me.title || '&#160;';
        me.tools = me.tools || [];
        me.items = me.items || [];
        me.orientation = me.orientation || 'horizontal';
        me.dock = (me.dock) ? me.dock : (me.orientation == 'horizontal') ? 'top' : 'left';

        //add the dock as a ui
        //this is so we support top/right/left/bottom headers
        me.addClsWithUI([me.orientation, me.dock]);

        if (me.indicateDrag) {
            me.addCls(me.indicateDragCls);
        }

        // Add Icon
        if (!Ext.isEmpty(me.iconCls) || !Ext.isEmpty(me.icon)) {
            me.initIconCmp();
            me.items.push(me.iconCmp);
        }

        // Add Title
        if (me.orientation == 'vertical') {
            me.layout = {
                type : 'vbox',
                align: 'center'
            };
            me.textConfig = {
                width: 16,
                cls: me.baseCls + '-text',
                type: 'text',
                text: me.title,
                rotate: {
                    degrees: 90
                }
            };
            ui = me.ui;
            if (Ext.isArray(ui)) {
                ui = ui[0];
            }
            ruleStyle = '.' + me.baseCls + '-text-' + ui;
            if (Ext.scopeResetCSS) {
                ruleStyle = '.' + Ext.baseCSSPrefix + 'reset ' + ruleStyle;
            }
            rule = Ext.util.CSS.getRule(ruleStyle);

            // We might have been disallowed access to the stylesheet: https://sencha.jira.com/browse/EXTJSIV-5084
            if (rule) {
                style = rule.style;
            } else {
                style = (tempEl = Ext.resetElement.createChild({style: 'position:absolute', cls: me.baseCls + '-text-' + ui})).getStyles('fontFamily', 'fontWeight', 'fontSize', 'color');
                tempEl.remove();
            }
            if (style) {
                Ext.apply(me.textConfig, {
                    'font-family': style.fontFamily,
                    'font-weight': style.fontWeight,
                    'font-size': style.fontSize,
                    fill: style.color
                });
            }
            me.titleCmp = new Ext.draw.Component({
                width     : 16,
                ariaRole  : 'heading',
                focusable : false,
                viewBox   : false,
                flex      : 1,
                id        : me.id + '_hd',
                autoSize  : true,
                items     : me.textConfig,
                xhooks: {
                    setSize: function (width) {
                        // don't pass 2nd arg (height) on to setSize or we break 'flex:1'
                        this.callParent([width]);
                    }
                },
                // this is a bit of a cheat: we are not selecting an element of titleCmp
                // but rather of titleCmp.items[0]
                childEls  : [
                    { name: 'textEl', select: '.' + me.baseCls + '-text' }
                ]
            });
        } else {
            me.layout = {
                type : 'hbox',
                align: 'middle'
            };
            me.titleCmp = new Ext.Component({
                ariaRole  : 'heading',
                focusable : false,
                noWrap    : true,
                flex      : 1,
                id        : me.id + '_hd',
                style     : 'text-align:' + me.titleAlign,
                cls       : me.baseCls + '-text-container',
                renderTpl : me.getTpl('headingTpl'),
                renderData: {
                    title: me.title,
                    cls  : me.baseCls,
                    ui   : me.ui
                },
                childEls  : ['textEl']
            });
        }
        me.items.push(me.titleCmp);

        // Add Tools
        me.items = me.items.concat(me.tools);
        me.callParent();
        
        me.on({
            dblclick: me.onDblClick,
            click: me.onClick,
            element: 'el',
            scope: me
        });
    },

    initIconCmp: function() {
        var me = this,
            cfg = {
                focusable: false,
                src: Ext.BLANK_IMAGE_URL,
                cls: [me.baseCls + '-icon', me.iconCls],
                id: me.id + '-iconEl',
                iconCls: me.iconCls
            };
            
        if (!Ext.isEmpty(me.icon)) {
            delete cfg.iconCls;
            cfg.src = me.icon;
        }
        
        me.iconCmp = new Ext.Img(cfg);
    },

    afterRender: function() {
        this.el.unselectable();
        this.callParent();
    },

    // inherit docs
    addUIClsToElement: function(cls) {
        var me = this,
            result = me.callParent(arguments),
            classes = [me.baseCls + '-body-' + cls, me.baseCls + '-body-' + me.ui + '-' + cls],
            array, i;

        if (me.bodyCls) {
            array = me.bodyCls.split(' ');

            for (i = 0; i < classes.length; i++) {
                if (!Ext.Array.contains(array, classes[i])) {
                    array.push(classes[i]);
                }
            }

            me.bodyCls = array.join(' ');
        } else {
            me.bodyCls = classes.join(' ');
        }

        return result;
    },

    // inherit docs
    removeUIClsFromElement: function(cls) {
        var me = this,
            result = me.callParent(arguments),
            classes = [me.baseCls + '-body-' + cls, me.baseCls + '-body-' + me.ui + '-' + cls],
            array, i;

        if (me.bodyCls) {
            array = me.bodyCls.split(' ');

            for (i = 0; i < classes.length; i++) {
                Ext.Array.remove(array, classes[i]);
            }

            me.bodyCls = array.join(' ');
        }

        return result;
    },

    // inherit docs
    addUIToElement: function() {
        var me = this,
            array, cls;

        me.callParent(arguments);

        cls = me.baseCls + '-body-' + me.ui;
        if (me.rendered) {
            if (me.bodyCls) {
                me.body.addCls(me.bodyCls);
            } else {
                me.body.addCls(cls);
            }
        } else {
            if (me.bodyCls) {
                array = me.bodyCls.split(' ');

                if (!Ext.Array.contains(array, cls)) {
                    array.push(cls);
                }

                me.bodyCls = array.join(' ');
            } else {
                me.bodyCls = cls;
            }
        }

        if (me.titleCmp && me.titleCmp.rendered && me.titleCmp.textEl) {
            me.titleCmp.textEl.addCls(me.baseCls + '-text-' + me.ui);
        }
    },

    // inherit docs
    removeUIFromElement: function() {
        var me = this,
            array, cls;

        me.callParent(arguments);

        cls = me.baseCls + '-body-' + me.ui;
        if (me.rendered) {
            if (me.bodyCls) {
                me.body.removeCls(me.bodyCls);
            } else {
                me.body.removeCls(cls);
            }
        } else {
            if (me.bodyCls) {
                array = me.bodyCls.split(' ');
                Ext.Array.remove(array, cls);
                me.bodyCls = array.join(' ');
            } else {
                me.bodyCls = cls;
            }
        }

        if (me.titleCmp && me.titleCmp.rendered && me.titleCmp.textEl) {
            me.titleCmp.textEl.removeCls(me.baseCls + '-text-' + me.ui);
        }
    },

    onClick: function(e) {
        this.fireClickEvent('click', e);
    },
    
    onDblClick: function(e){
        this.fireClickEvent('dblclick', e);
    },
    
    fireClickEvent: function(type, e){
        var toolCls = '.' + Ext.panel.Tool.prototype.baseCls;
        if (!e.getTarget(toolCls)) {
            this.fireEvent(type, this, e);
        }    
    },

    getFocusEl: function() {
        return this.el;
    },

    getTargetEl: function() {
        return this.body || this.frameBody || this.el;
    },

    /**
     * Sets the title of the header.
     * @param {String} title The title to be set
     */
    setTitle: function(title) {
        var me = this,
            sprite,
            surface;
        if (me.rendered) {
            if (me.titleCmp.rendered) {
                if (me.titleCmp.surface) {
                    me.title = title || '';
                    sprite = me.titleCmp.surface.items.items[0];
                    surface = me.titleCmp.surface;

                    surface.remove(sprite);
                    me.textConfig.type = 'text';
                    me.textConfig.text = title;
                    sprite = surface.add(me.textConfig);
                    sprite.setAttributes({
                        rotate: {
                            degrees: 90
                        }
                    }, true);
                    me.titleCmp.autoSizeSurface();
                } else {
                    me.title = title;
                    me.titleCmp.textEl.update(me.title || '&#160;');
                }
                me.titleCmp.updateLayout();
            } else {
                me.titleCmp.on({
                    render: function() {
                        me.setTitle(title);
                    },
                    single: true
                });
            }
        } else {
            me.title = title;
        }
    },

    /**
     * @private
     * Used when shrink wrapping a Panel to either content width or header width.
     * This returns the minimum width required to display the header, icon and tools.
     * **This is only intended for use with horizontal headers.**
     */
    getMinWidth: function() {
        var me = this,
            textEl = me.titleCmp.textEl.dom,
            result,
            tools = me.tools,
            l, i;

        // Measure text width as inline element so it doesn't stretch
        textEl.style.display = 'inline';
        result = textEl.offsetWidth;
        textEl.style.display = '';

        // Add tools width
        if (tools && (l = tools.length)) {
            for (i = 0; i < l; i++) {
                if (tools[i].el) {
                    result += tools[i].el.dom.offsetWidth;
                }
            }
        }

        // Add iconWidth
        if (me.iconCmp) {
            result += me.iconCmp.el.dom.offsetWidth;
        }

        // Return with some space between title and tools/end of header.
        return result + 10;
    },

    /**
     * Sets the CSS class that provides the icon image for this header.  This method will replace any existing
     * icon class if one has already been set.
     * @param {String} cls The new CSS class name
     */
    setIconCls: function(cls) {
        var me = this,
            isEmpty = !cls || !cls.length,
            iconCmp = me.iconCmp;
        
        me.iconCls = cls;
        if (!me.iconCmp && !isEmpty) {
            me.initIconCmp();
            me.insert(0, me.iconCmp);
        } else if (iconCmp) {
            if (isEmpty) {
                me.iconCmp.destroy();
                delete me.iconCmp;
            } else {
                iconCmp.removeCls(iconCmp.iconCls);
                iconCmp.addCls(cls);
                iconCmp.iconCls = cls;
            }
        }
    },
    
    /**
     * Sets the image path that provides the icon image for this header.  This method will replace any existing
     * icon if one has already been set.
     * @param {String} icon The new icon path
     */
    setIcon: function(icon) {
        var me = this,
            isEmpty = !icon || !icon.length,
            iconCmp = me.iconCmp;
        
        me.icon = icon;
        if (!me.iconCmp && !isEmpty) {
            me.initIconCmp();
            me.insert(0, me.iconCmp);
        } else if (iconCmp) {
            if (isEmpty) {
                me.iconCmp.destroy();
                delete me.iconCmp;
            } else {
                iconCmp.setSrc(me.icon);
            }
        }
    },

    /**
     * Add a tool to the header
     * @param {Object} tool
     */
    addTool: function(tool) {
        this.tools.push(this.add(tool));
    },

    /**
     * @protected
     * Set up the `tools.<tool type>` link in the owning Panel.
     * Bind the tool to its owning Panel.
     * @param component
     * @param index
     */
    onAdd: function(component, index) {
        this.callParent(arguments);
        if (component instanceof Ext.panel.Tool) {
            component.bindTo(this.ownerCt);
            this.tools[component.type] = component;
        }
    },

    /**
     * Add bodyCls to the renderData object
     * @return {Object} Object with keys and values that are going to be applied to the renderTpl
     * @private
     */
    initRenderData: function() {
        return Ext.applyIf(this.callParent(), {
            bodyCls: this.bodyCls
        });
    }
});
