Ext.define('CECBLayout.view.layout.EmpList' ,{
    extend: 'Ext.grid.Panel',
    store : Ext.create('CECBLayout.store.Employees'),
    alias: 'widget.empList',

    stateful: true,
    collapsible: true,
    multiSelect: true,
    stateId: 'stateGrid',

    dockedItems: [{
        xtype: 'pagingtoolbar',
        store : Ext.create('CECBLayout.store.Employees'),
        dock: 'bottom',
        displayInfo: true,
        items: [
            {
                xtype: 'tbseparator'
            },
            {
                xtype : 'button',
                text: 'Create Employee',
                action: 'empAdd'
            }
        ]
    }],

    initComponent: function() {
        this.columns = [
            {
                header: 'empId',
                dataIndex: 'empId',
                flex: 1,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.username.view']

            },
            {
                header: 'cecbId',
                dataIndex: 'cecbId',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'empName',
                dataIndex: 'empName',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'empAddress',
                dataIndex: 'empAddress',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'empDesignation',
                dataIndex: 'empDesignation',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'empRole',
                dataIndex: 'empRole',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'empGender',
                dataIndex: 'empGender',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'empNIC',
                dataIndex: 'empNIC',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'empNationality',
                dataIndex: 'empNationality',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'empContactNo',
                dataIndex: 'empContactNo',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'empEmail',
                dataIndex: 'empEmail',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            }
        ];
        this.callParent(arguments);
    }

});