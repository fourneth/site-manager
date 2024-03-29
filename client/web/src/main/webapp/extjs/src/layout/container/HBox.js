/**
 * A layout that arranges items horizontally across a Container. This layout optionally divides available horizontal
 * space between child items containing a numeric `flex` configuration.
 *
 * This layout may also be used to set the heights of child items by configuring it with the {@link #align} option.
 *
 *     @example
 *     Ext.create('Ext.Panel', {
 *         width: 500,
 *         height: 300,
 *         title: "HBoxLayout Panel",
 *         layout: {
 *             type: 'hbox',
 *             align: 'stretch'
 *         },
 *         renderTo: document.body,
 *         items: [{
 *             xtype: 'panel',
 *             title: 'Inner Panel One',
 *             flex: 2
 *         },{
 *             xtype: 'panel',
 *             title: 'Inner Panel Two',
 *             flex: 1
 *         },{
 *             xtype: 'panel',
 *             title: 'Inner Panel Three',
 *             flex: 1
 *         }]
 *     });
 */
Ext.define('Ext.layout.container.HBox', {

    /* Begin Definitions */

    alias: ['layout.hbox'],
    extend: 'Ext.layout.container.Box',
    alternateClassName: 'Ext.layout.HBoxLayout',

    /* End Definitions */

    /**
     * @cfg {String} align
     * Controls how the child items of the container are aligned. Acceptable configuration values for this property are:
     *
     * - **top** : **Default** child items are aligned vertically at the **top** of the container
     * - **middle** : child items are aligned vertically in the **middle** of the container
     * - **stretch** : child items are stretched vertically to fill the height of the container
     * - **stretchmax** : child items are stretched vertically to the height of the largest item.
     */
    align: 'top', // top, middle, stretch, strechmax

    type : 'hbox',

    direction: 'horizontal',

    horizontal: true,

    names: {
        // parallel
        lr: 'lr',
        left: 'left',// 'before',
        leftCap: 'Left',
        right: 'right',// 'after',
        position: 'left',
        width: 'width',
        contentWidth: 'contentWidth',
        minWidth: 'minWidth',
        maxWidth: 'maxWidth',
        widthCap: 'Width',
        widthModel: 'widthModel',
        widthIndex: 0,
        x: 'x',
        scrollLeft: 'scrollLeft',
        overflowX: 'overflowX',
        hasOverflowX: 'hasOverflowX',
        invalidateScrollX: 'invalidateScrollX',

        // perpendicular
        center: 'middle',
        top: 'top',
        topPosition: 'top',
        bottom: 'bottom',
        height: 'height',
        contentHeight: 'contentHeight',
        minHeight: 'minHeight',
        maxHeight: 'maxHeight',
        heightCap: 'Height',
        heightModel: 'heightModel',
        heightIndex: 1,
        y: 'y',
        scrollTop: 'scrollTop',
        overflowY: 'overflowY',
        hasOverflowY: 'hasOverflowY',
        invalidateScrollY: 'invalidateScrollY',

        // Methods
        getWidth: 'getWidth',
        getHeight: 'getHeight',
        setWidth: 'setWidth',
        setHeight: 'setHeight',
        gotWidth: 'gotWidth',
        gotHeight: 'gotHeight',
        setContentWidth: 'setContentWidth',
        setContentHeight: 'setContentHeight',
        setWidthInDom: 'setWidthInDom',
        setHeightInDom: 'setHeightInDom'
    },

    sizePolicy: {
        flex: {
            '': {
                setsWidth: 1,
                setsHeight: 0
            },
            stretch: {
                setsWidth: 1,
                setsHeight: 1
            },
            stretchmax: {
                readsHeight: 1,
                setsWidth: 1,
                setsHeight: 1
            }
        },
        '': {
            setsWidth: 0,
            setsHeight: 0
        },
        stretch: {
            setsWidth: 0,
            setsHeight: 1
        },
        stretchmax: {
            readsHeight: 1,
            setsWidth: 0,
            setsHeight: 1
        }
    }            
});
