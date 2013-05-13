Ext.define('fourneth.ims.procurementOfficerView.view.procurementSummary.SummaryView',{
    extend:'Ext.grid.Panel',
    alias:'widget.summaryViewProcurementOfficer',
    store: Ext.create('fourneth.ims.procurement.ProcurementStore'),

    initComponent: function() {
        Ext.apply(this, {
            cls: 'item-ct',
            flex: 2,
            border: false,
            autoScroll: true,
            layout: {
                type : 'hbox',
                align: 'middle',
                pack : 'center',
                availableSpaceOffset: Ext.getScrollbarSize().width
            }

            /*items: [{
                xtype: 'image',
                itemId: 'imgCt',
                src: Ext.BLANK_IMAGE_URL,
                margin: '0 20 0 0',
                width : 250,
                height: 308
            }, {
                xtype: 'component',
                tpl: [
                    '<div class="name">{name} <span>${price}</span></div>',
                    '<div class="author">By {author}</div>',
                    '<div class="detail">{detail}</div>'
                ],
                itemId: 'contentCt',
                width: 500,
                border: false
            }]*/
        },
            this.columns = [
                {
                    header: 'procurmentRequestNo',
                    dataIndex: 'procurmentRequestNo',
                    flex: 1
//                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

                },
                {
                    header: 'datePrepared',
                    dataIndex: 'datePrepared',
                    flex: 1
//                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

                },
                {
                    header: 'to',
                    dataIndex: 'to',
                    flex: 1
//                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

                },
                {
                    header: 'from',
                    dataIndex: 'from',
                    flex: 1
//                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

                },
                {
                    header: 'quotationFor',
                    dataIndex: 'quotationFor',
                    flex: 1
//                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

                },
                {
                    header: 'first',
                    dataIndex: 'first',
                    flex: 1
//                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

                },
                {
                    header: 'requiredItems',
                    dataIndex: 'requiredItems',
                    flex: 1
//                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

                },
                {
                    header: 'approved',
                    dataIndex: 'approved',
                    flex: 1
//                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

                },
                {
                    header: 'requestIncomplete',
                    dataIndex: 'requestIncomplete',
                    flex: 1
//                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

                },
                {
                    header: 'rejected',
                    dataIndex: 'rejected',
                    flex: 1
//                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

                },
                {
                    header: 'fileNo',
                    dataIndex: 'fileNo',
                    flex: 1
//                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

                }
            ]
        );
        this.callParent(arguments);
    },

    bind: function(record) {
        this.child('#imgCt').setSrc(record.get('image'));
        this.child('#contentCt').update(record.getData());
    }

})