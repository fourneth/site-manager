Ext.define('CECBLayout.view.layout.SupList' ,{
    extend: 'Ext.grid.Panel',
    store : Ext.create('CECBLayout.store.Suppliers'),
    alias: 'widget.supList',

    stateful: true,
    collapsible: true,
    multiSelect: true,
    stateId: 'stateGrid',

    dockedItems: [{
        xtype: 'pagingtoolbar',
        store : Ext.create('CECBLayout.store.Suppliers'),
        dock: 'bottom',
        displayInfo: true,
        items: [
            {
                xtype: 'tbseparator'
            },
            {
                xtype : 'button',
                text: 'Create Suppliers',
                action: 'supAdd'
            }
        ]
    }],

    initComponent: function() {
        this.columns = [
            {
                header: 'supId',
                dataIndex: 'supId',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'supName',
                dataIndex: 'supName',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'supAddress',
                dataIndex: 'supAddress',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'supCategory',
                dataIndex: 'supCategory',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'supContact',
                dataIndex: 'supContact',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'supEmail',
                dataIndex: 'supEmail',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            }
        ];
        this.callParent(arguments);
    }

});