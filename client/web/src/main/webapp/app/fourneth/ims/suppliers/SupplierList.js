Ext.define('fourneth.ims.suppliers.SupplierList', {
    extend: 'Ext.grid.Panel',
    store: Ext.create('fourneth.ims.suppliers.SupplierStore'),
    alias: 'widget.supList',
    id: 'supList',
    stateful: true,
    collapsible: true,
    multiSelect: true,
    stateId: 'stateGrid',
    title:'Supplers Summary',

    dockedItems: [
        {
            xtype: 'pagingtoolbar',
            store: Ext.create('fourneth.ims.suppliers.SupplierStore'),
            dock: 'bottom',
            displayInfo: true,
            items: [
                {
                    xtype: 'tbseparator'
                },
                {
                    xtype: 'button',
                    text: 'Create Suppliers',
                    action: 'supAdd'
                }
            ]
        }
    ],

    initComponent: function () {
        this.columns = [
            {
                header: 'supId',
                dataIndex: 'supId',
                flex: 2
//                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'supName',
                dataIndex: 'supName',
                flex: 2
//                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'supAddress',
                dataIndex: 'supAddress',
                flex: 2
//                hidden  : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'supCategory',
                dataIndex: 'supCategory',
                flex: 2
//                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'supContact',
                dataIndex: 'supContact',
                flex: 2
//                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'supEmail',
                dataIndex: 'supEmail',
                flex: 2
//                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            }
        ];
        this.callParent(arguments);
    }

});