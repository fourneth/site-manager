var _center_panel;

Ext.define('fourneth.ims.view.layout.CenterPanel', {
        extend: 'Ext.tab.Panel',
        alias: 'widget.center',
        requires : ['fourneth.ims.login.LoginDetails'],
        header: false,
        bodyPadding: 1,
        frame:true,

        initComponent : function () {
            _center_panel = this;
            this.callParent(arguments);
        }
    }
);