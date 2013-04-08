Ext.define('CECBLayout.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    store : Ext.create('CECBLayout.store.Users'),
//    requires : ['CECBLayout.store.Users', 'CECBLayout.model.LoggedInUser'],
    alias: 'widget.itemList',
    title: 'All Users',

    stateful: true,
    collapsible: true,
    multiSelect: true,
    stateId: 'stateGrid',

    dockedItems: [{
        xtype: 'pagingtoolbar',
        store : Ext.create('CECBLayout.store.Users'),
        dock: 'bottom',
        displayInfo: true,
        items: [
            {
                xtype: 'tbseparator'
            },
            {
                xtype : 'button',
                text: 'Add Procurement',
                action: 'add'
            }
        ]
    }],

    initComponent: function() {
    this.columns = [
        {
            header: 'username',
            dataIndex: 'username',
            flex: 1,
            hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.username.view']

        },
        {
            header: 'password',
            dataIndex: 'password',
            flex: 2,
            hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

        }
    ];
        this.callParent(arguments);
    }

});