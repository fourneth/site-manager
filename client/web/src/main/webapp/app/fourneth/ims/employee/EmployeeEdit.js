Ext.define('fourneth.ims.employee.EmployeeEdit', {
        extend: 'Ext.form.Panel',
        alias : 'widget.empEdit',
        title : 'Employee Master form',
        layout: 'fit',
        autoShow: true,
        autoScroll:true,

        fieldDefaults: {
            labelAlign: 'left',
            labelWidth: 200
        },

//    width:950,
        closable:true,

        initComponent: function() {
            this.items = [
                {
                    xtype: 'form',
//                anchor:100,
                    defaultType:'textfield',
                    autoScroll:true,
                    items: [
                        {
                            name : 'id',
//                        width:900,
                            fieldLabel: 'Employee ID',
                            allowBlank: true,
                            msgTarget: 'side'
                        },
                        {
                            name : 'organizationId',
//                        width:900,
                            fieldLabel: 'Organization ID',
                            allowBlank: true,
                            msgTarget: 'side'
                        },
                        {
                            name : 'firstName',
//                        width:900,
                            fieldLabel: 'CECB Id',
                            allowBlank: false,
                            msgTarget: 'side'
                        },
                        {
                            name : 'lastName',
//                        width:900,
                            fieldLabel: 'Name',
                            allowBlank: false,
                            msgTarget: 'side'
                        }
                    ]
                }
            ];
            this.buttons = [
                {
                    text: 'Save',
                    action: 'empSave'
                },
                {
                    text: 'Cancel',
                    scope: this,
                    handler: this.close
                }
            ];

            this.callParent(arguments);

        }
    }

);