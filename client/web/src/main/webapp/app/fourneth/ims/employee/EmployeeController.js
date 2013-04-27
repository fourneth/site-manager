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
    updateEmp:function(button){
        var win = button.up('window');
        var form = win.down('form').getForm();
        //check of the form has any errors
        if (form.isValid()) {
            //get the record
            var record = form.getRecord();
            console.log('record is '+record+'')
            //get the form values
            var values = form.getValues();
            console.log('record is '+values+'')
            //if a new record
            if(!record){
                console.log('start newRecord is');
//                var newRecord = new CECBLayout.model.Employee(values);
                var newRecord = new fourneth.ims.employee.EmployeeModel(values);
                console.log('newRecord is '+newRecord+' ');
//                this.getProductsStore().add(newRecord);
//                    this.getUsersStore().add(newRecord);
                this.getEmployeesStore().add(newRecord);
//                console.log('this is '+this.getUsersStore().add(newRecord)+' ');

            }
            //existing record
            else {
                record.set(values);
            }
            win.close();
            //save the data to the Web local Storage
//            this.getProductsStore().sync();
//                this.getUsersStore().sync();
            this.getEmployeesStore().sync();
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