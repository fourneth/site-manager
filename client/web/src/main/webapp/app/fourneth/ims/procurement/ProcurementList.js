Ext.define('fourneth.ims.procurement.ProcurementList', {
    extend: 'Ext.grid.Panel',
    store: Ext.create('fourneth.ims.procurement.ProcurementStore'),
    alias: 'widget.procList',
    id: 'procList',
    title:'Procurement Summary',

    stateful: true,
    collapsible: true,
    multiSelect: true,
    stateId: 'stateGrid',

    dockedItems: [
        {
            xtype: 'pagingtoolbar',
            store: Ext.create('fourneth.ims.procurement.ProcurementStore'),
            dock: 'bottom',
            displayInfo: true
        }
    ],

    initComponent: function () {
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
                flex: 1,
                hidden:true
//                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },

            {
                header: 'fileNo',
                dataIndex: 'fileNo',
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

            }
        ];
        this.callParent(arguments);
    }

});