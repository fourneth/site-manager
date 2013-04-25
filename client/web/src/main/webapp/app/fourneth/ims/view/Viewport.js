Ext.define('fourneth.ims.view.Viewport', {
    extend: 'Ext.Viewport',
    layout: 'absolute',
    requires:
        [
            'fourneth.ims.login.LoginForm',
            'fourneth.ims.service.Common',
            'fourneth.ims.procurement.ProcurementForm'
//        'fourneth.ims.procLayout.procForm'
//        'fourneth.ims.procurementNew.NewController'
    ],
    initComponent: function() {
        var me = this;
        if (fourneth.ims.service.Common.alreadyLoggedIn()) {
            me.layout = 'fit';
            Ext.apply(me, {
                items:
                    [ {
                        xtype: 'procurementForm'
                    } ]
            });

        } else {
            Ext.apply(me, {
                items:
                    [ {
                        x: 300,
                        y: 150,
                        xtype: 'loginForm'
                    } ]
            });
        }

        me.callParent(arguments);
    }
});
