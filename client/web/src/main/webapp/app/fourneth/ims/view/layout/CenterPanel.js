var _center_panel;

Ext.define('fourneth.ims.view.layout.CenterPanel', {
        extend: 'Ext.tab.Panel',
        alias: 'widget.center',
        requires : ['fourneth.ims.login.LoginDetails'],
        title: 'PR    ddd  Form',
        header : false,
//        bodyPadding: 1,

        initComponent : function () {
            _center_panel = this;
            this.callParent(arguments);
        }
    }
);