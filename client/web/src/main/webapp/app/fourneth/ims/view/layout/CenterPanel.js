var _center_panel;
Ext.define('fourneth.ims.view.layout.CenterPanel', {
        extend: 'Ext.tab.Panel',
        alias: 'widget.center',
        requires : [
            'fourneth.ims.login.LoginDetails',
//            'fourneth.ims.procurementOfficerView.Header',
            'fourneth.ims.procurementOfficerView.view.procurementSummary.SummaryView',
            'fourneth.ims.procurementOfficerView.view.review.List',
            'fourneth.ims.procurementOfficerView.view.procurementSummary.SideBar'
//            'fourneth.ims.site.SiteAdminView'
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
//                            Ext.create('fourneth.ims.site.SiteAdminView'),
                            Ext.create('fourneth.ims.procurement.ProcurementList'),
                            Ext.create('fourneth.ims.procurementOfficerView.view.review.List')

                        ]
                    }
                ]
        }),
                this.callParent(arguments);
    }}
);