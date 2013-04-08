Ext.define('CECBLayout.view.layout.ProcEdit', {
    extend: 'Ext.window.Window',
    alias : 'widget.itemEdit',
    title : 'Procurement Add',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'username',
                        fieldLabel: 'username',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        xtype: 'textfield',
                        name : 'password',
                        fieldLabel: 'password',
                        allowBlank: false,
                        msgTarget: 'side'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});