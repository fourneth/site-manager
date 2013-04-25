Ext.define('CECBLayout.view.layout.SupEdit', {
    extend: 'Ext.window.Window',
    alias : 'widget.supEdit',
    title : 'Supplier Master form',
    layout: 'fit',
    autoShow: true,
    width:950,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                anchor:100,
                defaultType:'textfield',
                items: [
                    {
                        name : 'supId',
                        width:900,
                        fieldLabel: 'ID',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'supName',
                        width:900,
                        fieldLabel: 'Name',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'supAddress',
                        width:900,
                        fieldLabel: 'Address',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'supCategory',
                        width:900,
                        fieldLabel: 'Category',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'supContact',
                        width:900,
                        fieldLabel: 'Contact Number',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'supEmail',
                        width:900,
                        fieldLabel: 'Email Address',
                        allowBlank: false,
                        msgTarget: 'side'
                    }
                ]
            }
        ];
        this.buttons = [
            {
                text: 'Save',
                action: 'supSave'
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