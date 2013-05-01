Ext.define('fourneth.ims.employee.EmployeeController', {
        extend: 'Ext.app.Controller',

        views: [
            'fourneth.ims.employee.EmployeeEdit',
            'fourneth.ims.employee.EmployeeList',
            'fourneth.ims.view.layout.MenuBar'
        ],
        stores: ['fourneth.ims.employee.EmployeeStore'],
        models: ['fourneth.ims.employee.EmployeeModel'],

        init: function () {
            this.control({
                'north button[action=empAdd]': {
                    click: this.addEmp
                },
                'empEdit button[action=empSave]': {
                    click: this.updateEmp
                },
                'empList': {
                    itemdblclick: this.editEmp
                }
            })
        },
        addEmp: function () {
            Ext.widget('empEdit');
        },
        updateEmp: function (button) {
            var win = button.up('form');
            var form1 = win.down('form').getForm();
            console.log('pass form1', form1);
            //check of the form has any errors
            if (form1.isValid()) {
                //get the record
                var record = form1.getRecord();
                //get the form values
                var values = form1.getValues();
                //if a new record
                if (!record) {
                    var newRecord = new fourneth.ims.employee.EmployeeModel(values);
                    this.getStore('fourneth.ims.employee.EmployeeStore').add(newRecord);

                }
                //existing record
                else {
                    record.set(values);
                }
                win.close();
                //save the data to the Web local Storage
                this.getStore('fourneth.ims.employee.EmployeeStore').sync();
            }
        },
        editEmp: function () {
            var view = Ext.widget('empEdit');
            view.down('form').loadRecord(record);
        }
    }
);