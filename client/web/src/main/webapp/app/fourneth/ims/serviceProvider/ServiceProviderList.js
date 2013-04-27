Ext.define('fourneth.ims.serviceProvider.ServiceProviderList' ,{
    extend: 'Ext.grid.Panel',
    store : Ext.create('fourneth.ims.serviceProvider.ServiceProviderStore'),
    alias: 'widget.serviceProviderList',

    stateful: true,
    collapsible: true,
    multiSelect: true,
    stateId: 'stateGrid',

    dockedItems: [{
        xtype: 'pagingtoolbar',
        store : Ext.create('fourneth.ims.serviceProvider.ServiceProviderStore'),
        dock: 'bottom',
        displayInfo: true,
        items: [
            {
                xtype: 'tbseparator'
            },
            {
                xtype : 'button',
                text: 'Create Service Provider',
                action: 'serviceProviderAdd'
            }
        ]
    }],

    initComponent: function() {
        this.columns = [
            {
                header: 'serviceCategory',
                dataIndex: 'serviceCategory',
                flex: 1
//                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'orgAddress',
                dataIndex: 'orgAddress',
                flex: 1
//                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'orgCategory',
                dataIndex: 'orgCategory',
                flex: 1
//                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'orgManager',
                dataIndex: 'orgManager',
                flex: 1
//                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'paymentTerm',
                dataIndex: 'paymentTerm',
                flex: 1
//                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'creditTerm',
                dataIndex: 'creditTerm',
                flex: 1
//                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'creditPeriod',
                dataIndex: 'creditPeriod',
                flex: 1
//                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'conName',
                dataIndex: 'conName',
                flex: 1
//                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'conAddress',
                dataIndex: 'conAddress',
                flex: 1
//                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'conNumber',
                dataIndex: 'conNumber',
                flex: 1
//                hidden  : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'conFax',
                dataIndex: 'conFax',
                flex: 1
//                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'conEmail',
                dataIndex: 'conEmail',
                flex: 1
//                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            },
            {
                header: 'conWeb',
                dataIndex: 'conWeb',
                flex: 1
//                hidden   : CECBLayout.model.LoggedInUser.permissions['view.user.list.password.view']

            }
        ];
        this.callParent(arguments);
    }

});