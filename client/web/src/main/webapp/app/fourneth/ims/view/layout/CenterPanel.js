var _center_panel;

Ext.define('fourneth.ims.view.layout.CenterPanel', {
        extend: 'Ext.tab.Panel',
        alias: 'widget.center',
        requires : ['fourneth.ims.login.LoginDetails'],
        margins: '0 0 0 5',
        bodyPadding: 10,

        initComponent : function () {
            console.log('center panel init function');
            _center_panel = this;       1   +9

            this.callParent(arguments);
        }
    }
);