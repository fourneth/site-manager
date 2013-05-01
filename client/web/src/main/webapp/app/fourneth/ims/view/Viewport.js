Ext.define('fourneth.ims.view.Viewport', {
    extend: 'Ext.Viewport',
    layout: 'absolute',
    requires: [
        'fourneth.ims.login.LoginForm',
        'fourneth.ims.service.Common',
        'fourneth.ims.view.layout.BaseLayout'
    ],
    initComponent: function () {
        var me = this;
        if (fourneth.ims.service.Common.alreadyLoggedIn()) {
            me.layout = 'fit';
            Ext.apply(me, {
                items: [
                    {
                        xtype: 'baselayout'
                    }
                ]
            });

        } else {
            Ext.apply(me, {
                items: [
                    {
                        x: 300,
                        y: 150,
                        xtype: 'loginForm'
                    }
                ]
            });
        }

        me.callParent(arguments);
    }
});
