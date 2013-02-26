Ext.define('fourneth.ims.procurement.ProcForm',{
    extend:'Ext.form.FormPanel',
    alias: 'widget.procform',

    xtype:'form',
    layout:'form',
    collapsible:true,
    id:'procform',
    name: 'procform',
    frame: true,

    title: 'Procurement Request',
    bodyPadding: '5px 5px 0',
    width: 600,
    height: 150,
    fieldDefaults: {
        labelAlign: 'top',
        msgTarget: 'side'
    },
    defaults: {
        anchor: '100%'
    },

    initComponent:function() {
        this.buttons = [
        {
                text: 'Save',
                handler: function()
                {
                    this.up('form').getForm().isValid();
                }
        },
        {
                text: 'Cancel',
                handler: function()
                {
                    this.up('form').getForm().reset();
                }
        }];

        this.items = [
        {
            xtype: 'container',
            layout:'hbox',
            items:
            [
                {
                    xtype: 'container',
                    flex: 1,
                    border:false,
                    layout: 'anchor',
                    defaultType: 'textfield',
                    items:
                    [
                        {
                            fieldLabel: 'First Name',
                            allowBlank: false,
                            name: 'first',
                            anchor:'95%'
                        },
                        {
                            fieldLabel: 'Company',
                            name: 'company',
                            anchor:'95%'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 1,
                    layout: 'anchor',
                    defaultType: 'textfield',
                    items:
                    [
                        {
                            fieldLabel: 'Last Name',
                            //afterLabelTextTpl: required,
                            allowBlank: false,
                            name: 'last',
                            anchor:'95%'
                        },
                        {
                            fieldLabel: 'Email',
                            //afterLabelTextTpl: required,
                            allowBlank: false,
                            name: 'email',
                            vtype:'email',
                            anchor:'95%'
                        }
                    ]
                }
            ]
        },
        {
            xtype:'tabpanel',
            plain:true,
            activeTab: 0,
            height:235,
            defaults:
            {
                bodyPadding: 10
            },
            items:
            [
                {
                    title:'Personal Details',
                    defaults:
                    {
                        width: 230
                    },
                    defaultType: 'textfield',

                    items:
                    [
                        {
                            fieldLabel: 'First Name',
                            name: 'firstn',
                            value: 'Jamie'
                        },
                        {
                            fieldLabel: 'Last Name',
                            name: 'lastn',
                            value: 'Avins'
                        },
                        {
                            fieldLabel: 'Company',
                            name: 'companyn',
                            value: 'Ext JS'
                        },
                        {
                            fieldLabel: 'Email',
                            name: 'emailn',
                            vtype:'email'
                        }
                    ]
                },
                {
                    title:'Phone Numbers',
                    defaults:
                    {
                        width: 230
                    },
                    defaultType: 'textfield',

                    items:
                    [
                        {
                            fieldLabel: 'Home',
                            name: 'home',
                            value: '(888) 555-1212'
                        },
                        {
                            fieldLabel: 'Business',
                            name: 'business'
                        },
                        {
                            fieldLabel: 'Mobile',
                            name: 'mobile'
                        },
                        {
                            fieldLabel: 'Fax',
                            name: 'fax'
                        }
                    ]
                },
                {
                    cls: 'x-plain',
                    title: 'Biography',
                    layout: 'fit',
                    items:
                    {
                        xtype: 'htmleditor',
                        name: 'bio2',
                        fieldLabel: 'Biography'
                    }
                }
            ]
        }];
        /*this.items = [
            {
                fieldLabel: 'Username',
                name: 'username',
                id: 'username',
                inputType: 'text',
                allowBlank: false
            },
            {
                fieldLabel: 'Password',
                name: 'password',
                vtype : 'string',
                allowBlank: false
            }
        ]*/
        this.callParent(arguments);
    }
})