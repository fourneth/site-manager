var _center_panel;
Ext.define('fourneth.ims.procurementAdminView.AdminCenterPanel', {
        extend: 'Ext.tab.Panel',
        alias: 'widget.adminCenter',
        requires : [
            'fourneth.ims.login.LoginDetails',
            'fourneth.ims.procurementOfficerView.Header',
            'fourneth.ims.procurementOfficerView.view.procurementSummary.SummaryView',
            'fourneth.ims.procurementOfficerView.view.review.List',
            'fourneth.ims.procurementOfficerView.view.procurementSummary.SideBar'
        ],
        header: false,
        bodyPadding: 1,
        frame:true,
        title:'Procurement Summary',

        initComponent : function () {
            _center_panel = this;
            console.log('CenterPanel Started');
            var me = this;
            Ext.apply (me, {
                //according to login officer view
                items: [
                    {
                        layout: {
                            type: 'vbox',
                            align: 'stretch'
                        },

                        dockedItems: [
//                            Ext.create('fourneth.ims.procurementOfficerView.Header'),
                            Ext.create('fourneth.ims.procurementOfficerView.view.procurementSummary.SideBar')
                        ],

                        items: [
                            Ext.create('fourneth.ims.procurementOfficerView.view.review.List'),
                            Ext.create('fourneth.ims.procurement.ProcurementList')
                        ]
                    }
                ]

                //according to admin login

                /*items: [
                    {
                        layout: {
                            type: 'vbox',
                            align: 'stretch'
                        },

                        dockedItems: [
//                            Ext.create('fourneth.ims.procurementOfficerView.Header'),
                            Ext.create('fourneth.ims.procurementOfficerView.view.procurementSummary.SideBar')
                        ],

                        items: [

                            Ext.create('fourneth.ims.procurement.ProcurementList'),
                            Ext.create('fourneth.ims.procurementOfficerView.view.review.List')
                        ]
                    }
                ]*/
            }),
                this.callParent(arguments);
        }}
);