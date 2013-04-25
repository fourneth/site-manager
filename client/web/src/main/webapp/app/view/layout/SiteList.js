Ext.define('CECBLayout.view.layout.SiteList' ,{
    extend: 'Ext.grid.Panel',
    store : Ext.create('CECBLayout.store.Sites'),
//    requires : ['CECBLayout.store.Users', 'CECBLayout.model.LoggedInUser'],
    alias: 'widget.siteList',

    stateful: true,
    collapsible: true,
    multiSelect: true,
    stateId: 'stateGrid',

    dockedItems: [{
        xtype: 'pagingtoolbar',
        store : Ext.create('CECBLayout.store.Sites'),
        dock: 'bottom',
        displayInfo: true,
        items: [
            {
                xtype: 'tbseparator'
            },
            {
                xtype : 'button',
                text: 'Create Site',
                action: 'siteAdd'
            }
        ]
    }],

    initComponent: function() {
        this.columns = [
            {
                header: 'projectName',
                dataIndex: 'projectName',
                flex: 1,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.username.view']

            },
            {
                header: 'projectValue',
                dataIndex: 'projectValue',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'commencementDate',
                dataIndex: 'commencementDate',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'duration',
                dataIndex: 'duration',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'completionDate',
                dataIndex: 'completionDate',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'timeElapsed',
                dataIndex: 'timeElapsed',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'daysRemaining',
                dataIndex: 'daysRemaining',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'dateOfSuspension',
                dataIndex: 'dateOfSuspension',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'reCommenceDate',
                dataIndex: 'reCommenceDate',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'newCompletionDate',
                dataIndex: 'newCompletionDate',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'remainingDay',
                dataIndex: 'remainingDay',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'bondSubmitted',
                dataIndex: 'bondSubmitted',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'insuranceDetails',
                dataIndex: 'insuranceDetails',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'projectConstructionProgram',
                dataIndex: 'projectConstructionProgram',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'projectProcurementProgram',
                dataIndex: 'projectProcurementProgram',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'financialStates',
                dataIndex: 'financialStates',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'projectCompletedDate',
                dataIndex: 'projectCompletedDate',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'defectLiabilityExpiryDate',
                dataIndex: 'defectLiabilityExpiryDate',
                flex: 2,
                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            }
        ];
        this.callParent(arguments);
    }

});