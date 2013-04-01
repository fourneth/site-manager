Ext.define('CECBLayout.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    requires : ['CECBLayout.store.Users', 'CECBLayout.model.LoggedInUser'],
    alias: 'widget.userlist',
    store : Ext.create('CECBLayout.store.Users'),
    title: 'All Users',

    stateful: true,
    collapsible: true,
    multiSelect: true,
    stateId: 'stateGrid',

    columns: [
        {
            text     : 'Username',
            flex     : 1,
            sortable : false,
            dataIndex: 'username',
            hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.username.view']

        },
        {
            text     : 'User\'s Password',
            width    : 75,
            sortable : true,
            dataIndex: 'password',
            hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

        }
    ]


});