Ext.define('fourneth.ims.employee.EmployeeController',{
    extend:'Ext.app.Controller',

    views:[
        'fourneth.ims.employee.EmployeeEdit',
        'fourneth.ims.employee.EmployeeList',
        'fourneth.ims.view.layout.MenuBar'
    ],
    stores:['fourneth.ims.employee.EmployeeStore'],
    models:['fourneth.ims.employee.EmployeeModel'],

    init:function(){
        this.control({
            'north button[action=empAdd]':{
                click: this.addEmp
            },
            'empEdit button[action=empSave]':{
                click:this.updateEmp
            },
            'empList':{
                itemdblclick:this.editEmp
            }
        })
    },
    addEmp:function(){

    },
    updateEmp:function(button) {
        console.log('start updateEmp()');
        var win = button.up('form');
        console.log('pass win',win);
        var employeeEditForm = win.down('form').getForm();
        console.log('pass employeeEditForm',employeeEditForm);
        //check of the form has any errors
        if (employeeEditForm.isValid()) {
            //get the record
            console.log('employeeEditForm is valid');
            var record = employeeEditForm.getRecord();
            console.log('record is '+record+'');
            //get the form values
            var values = employeeEditForm.getValues();
            console.log('value is '+values+'');
            //if a new record
            if(!record){
                console.log('start newRecord is');
                var newRecord = new fourneth.ims.employee.EmployeeModel(values);
                console.log('newRecord is '+newRecord+' ');
                this.getStore('fourneth.ims.employee.EmployeeStore').add(newRecord);
//                console.log('this is '+this.getUsersStore().add(newRecord)+' ');

            }
            //existing record
            else {
                record.set(values);
            }
            win.close();
            //save the data to the Web local Storage
            this.getStore('fourneth.ims.employee.EmployeeStore').sync();
        } else {
            Ext.MessageBox.alert('Error', 'Please correct errors before saving.');
//            Ext.example.msg('Correct the errors', 'Please complete from before proceeding.');
        }
    },
    editEmp:function(){
        var view = Ext.widget('empEdit');
        view.down('form').loadRecord(record);
    }
}
);