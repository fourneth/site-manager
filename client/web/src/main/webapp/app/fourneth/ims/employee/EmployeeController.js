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
            'empEdit butoon[action=empSave]':{
                click:this.updateEmp
            },
            'empList':{
                itemdblclick:this.editEmp
            }
        })
    },
    addEmp:function(button){
        var view = Ext.widget('empEdit');
    },
    updateEmp:function(button) {
        console.log('start updateEmp()');
        var win = button.up('form');
        console.log('pass win',win);
        var form1 = win.down('form').getForm();
        console.log('pass form1',form1);
        //check of the form has any errors
        if (form1.isValid()) {
            //get the record
            console.log('form1 is valid');
            var record = form1.getRecord();
            console.log('record is '+record+'')
            //get the form values
            var values = form1.getValues();
            console.log('value is '+values+'')
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
        }
    },
    editEmp:function(button){
        var view = Ext.widget('empEdit');
        view.down('form').loadRecord(record);
    }
},
    function(){
        console.log('Employee Control is renderd');
    }
)