/**
 * The main application viewport, which displays the whole application
 * @extends Ext.Viewport
 */
//Grid
 Ext.define('CECBLayout.view.Viewport',{
 extend:'Ext.Viewport',
 layout:'absolute',

 requires:[
 'CECBLayout.view.layout.BaseLayout',
 'CECBLayout.view.login.Form'],
 initComponent: function(){
 var me = this;

 Ext.apply(me, {
 items:[{
 //                xtype:'baselayout'
 xtype:'loginForm'
 }]
 });
 me.callParent(arguments);
 }
 });
//Layout MVC
/*
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
*/
