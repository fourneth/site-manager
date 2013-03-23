/**
 * The main application viewport, which displays the whole application
 * @extends Ext.Viewport
 */
//Grid
/*Ext.define('Ext4Example.view.Viewport', {
    extend: 'Ext.Viewport',
    layout: 'fit',

    requires: [
        'Ext4Example.view.stock.StockGrid',
        'Ext4Example.view.stock.StockForm'
    ],

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            items: [{
                    xtype: 'stockpanel'
                }]});

        me.callParent(arguments);
    }
});*/
//Layout MVC
Ext.define('CECBLayout.view.Viewport',{
    extend:'Ext.Viewport',
    layout:'fit',

    requires:['CECBLayout.view.layout.BaseLayout'],
    initComponent: function(){
        var me = this;

        Ext.apply(me, {
            items:[{
                xtype:'baselayout'
            }]
        });
        me.callParent(arguments);
    }
});
