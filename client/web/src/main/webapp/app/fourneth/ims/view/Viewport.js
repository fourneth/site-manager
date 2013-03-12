/**
 * The main application viewport, which displays the whole application
 * @extends Ext.Viewport
 */
Ext.define('fourneth.ims.view.Viewport', {
    extend: 'Ext.Viewport',    
    layout: 'fit',
    requires:
    [
        //'fourneth.ims.login.LoginForm',
//        'fourneth.ims.procurement.ProcForm'
        'fourneth.ims.procLayout.procForm'
//        'fourneth.ims.procurementNew.NewController'
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            items:
            [ { //xtype: 'loginForm',
                // xtype: 'procform'
                 xtype: 'procForm'
//                    xtype: 'newProc'
                } ]
        });
        me.callParent(arguments);
    }
});
