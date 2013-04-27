Ext.define('fourneth.ims.employee.EmployeeEdit', {
    extend: 'Ext.window.Window',
    alias : 'widget.empEdit',
    title : 'Employee Master form',
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
                        name : 'empId',
                        width:900,
                        fieldLabel: 'Employee ID',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'cecbId',
                        width:900,
                        fieldLabel: 'CECB Id',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'empName',
                        width:900,
                        fieldLabel: 'Name',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'empAddress',
                        width:900,
                        fieldLabel: 'Address',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'empDesignation',
                        width:900,
                        fieldLabel: 'Designation',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'empRole',
                        width:900,
                        fieldLabel: 'Role',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'empGender',
                        width:900,
                        fieldLabel: 'Gender',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'empNIC',
                        width:900,
                        fieldLabel: 'NIC',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'empNationality',
                        width:900,
                        fieldLabel: 'Nationality',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'empContactNo',
                        width:900,
                        fieldLabel: 'Contact No',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'empEmail',
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
},
    function(){
        console.log('Employee Edit Rendered');
    }

);