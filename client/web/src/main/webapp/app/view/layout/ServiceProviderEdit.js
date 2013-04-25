Ext.define('CECBLayout.view.layout.ServiceProviderEdit', {
    extend: 'Ext.window.Window',
    alias : 'widget.serviceProviderEdit',
//    renderTo:'CECBLayout.view.layout.CenterPanel',
    title : 'Service Provider Master form',
    layout: 'fit',
    autoShow: true,
    width:950,
    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                anchor: 100,
                items: [

                {
                    xtype: 'fieldset',
                    title: 'Service Category',
                    items: [
                        {
                            xtype: 'textfield',
                            width: 900,
                            name: 'serviceCategory',
                            fieldLabel: 'Category',
                            allowBlank: false,
                            msgTarget: 'side'
                        }
                    ]
                },
            {
                xtype: 'fieldset',
                title: 'Organization',
                defaultType:'textfield',
                Width:900,
                items: [
                    {
                        name: 'orgAddress',
                        width:900,
                        fieldLabel: 'Address',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name: 'orgCategory',
                        width:900,
                        fieldLabel: 'Category',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name: 'orgManager',
                        width:900,
                        fieldLabel: 'Manager Name',
                        allowBlank: false,
                        msgTarget: 'side'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Payment',
                defaultType:'textfield',
                items: [
                    {
                        name: 'paymentTerm',
                        width:900,
                        fieldLabel: 'Payment Term',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name: 'creditTerm',
                        width:900,
                        fieldLabel: 'Credit Term',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name: 'creditPeriod',
                        width:900,
                        fieldLabel: 'Credit Period',
                        allowBlank: false,
                        msgTarget: 'side'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Contact Person',
                defaultType:'textfield',
                items: [
                    {
                        name: 'conName',
                        width:900,
                        fieldLabel: 'Name',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name: 'conAddress',
                        width:900,
                        fieldLabel: 'Address',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name: 'conNumber',
                        width:900,
                        fieldLabel: 'Contact Number',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name: 'conFax',
                        width:900,
                        fieldLabel: 'Fax Number',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name: 'conEmail',
                        width:900,
                        fieldLabel: 'Email Address',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name: 'conWeb',
                        width:900,
                        fieldLabel: 'Web Address',
                        allowBlank: false,
                        msgTarget: 'side'
                    }
                ]
            }
        ]
            }
        ];
        this.buttons = [
            {
                text: 'Save',
                action: 'serviceProviderSave'
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