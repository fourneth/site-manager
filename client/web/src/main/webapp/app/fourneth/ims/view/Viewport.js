Ext.define('fourneth.ims.view.Viewport', {
    extend: 'Ext.Viewport',
    layout: 'fit',
    requires: [
        'fourneth.ims.login.LoginForm',
        'fourneth.ims.service.Common',
        'fourneth.ims.view.layout.BaseLayout',
        'fourneth.ims.procurementOfficerView.Header',
        'fourneth.ims.procurementOfficerView.view.procurementSummary.SummaryView',
        'fourneth.ims.procurementOfficerView.view.review.List'
//        'fourneth.ims.procurementAdminView.AdminBaseLayout'
//        'fourneth.ims.procurementAdminView.AdminMenuBar',
//        'fourneth.ims.procurementAdminView.AdminCenterPanel'
    ] ,
    //prev one
    initComponent: function () {
        var me = this;
        if (fourneth.ims.service.Common.alreadyLoggedIn()) {
            me.layout = 'fit';
            Ext.apply(me, {
                items: [
                    {
                        xtype: 'baselayout'
//                        xtype:'adminBaselayout'
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
    /*initComponent: function() {
        var me = this;

        Ext.apply(me, {
            items: [
                {
                    xtype: 'panel',
                    border: false,
                    id    : 'viewport',

                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },

                    dockedItems: [
                        Ext.create('fourneth.ims.view.layout.MenuBar'),
                        Ext.create('fourneth.ims.procurementOfficerView.view.procurementSummary.SideBar')
                    ],

                    items: [
                        Ext.create('fourneth.ims.procurement.ProcurementList'),
                        Ext.create('fourneth.ims.procurementOfficerView.view.review.List')
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }*/
});
