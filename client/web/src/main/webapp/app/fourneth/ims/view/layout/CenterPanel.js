var _center_panel;

Ext.define('fourneth.ims.view.layout.CenterPanel', {
        extend: 'Ext.tab.Panel',
        alias: 'widget.center',
        requires : ['fourneth.ims.login.LoginDetails'],
//        margins: '0 0 0 5',
        title: 'PR    ddd  Form',
        header : false,
        bodyPadding: 1,

        items: [
//        {xtype : 'serviceProviderList'},
//        {xtype:'serviceProviderEdit'}
        ],
        initComponent : function () {
            console.log('center panel init function');
//            fourneth.ims.login.LoginDetails.views['centerPanel'] = this;
            _center_panel = this;
            this.callParent(arguments);
        }
    }
);