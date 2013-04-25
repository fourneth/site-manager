Ext.define('CECBLayout.controller.Layouts',{
    extend:'Ext.app.Controller',
    views:[
        'layout.BaseLayout',
        'layout.MenuBar',
        'layout.SouthPanel',
        'layout.EastPanel',
        'layout.WestPanel',
        'layout.CenterPanel',
        'layout.ProcEdit' ,
        'layout.SiteEdit',
        'layout.SiteList',
        'layout.EmpEdit',
        'layout.EmpList',
        'layout.SupEdit',
        'layout.SupList',
        'layout.ServiceProviderEdit',
        'layout.ServiceProviderList'
    ],
    stores:['Users','Sites','Employees','Suppliers','ServiceProviders','Procurements'],
    models:['User','Site','Employee','Supplier','ServiceProvider','Procurement'] ,
    init:function(){
        console.log('controller initialized');
        this.control({
            'container > panel' : {
                render : this.onPanelRendered
            },
            'itemList' : {
                itemdblclick : this.editItem
            },
            'itemList button[action=add]' : {
                click : this.addItem
            },
            'itemEdit button[action=save]' : {
                click : this.updateItem
            },
            'north button[action=add]' : {
                click : this.addItem
            },
            //Site function
            'north button[action=siteAdd]' : {
                click : this.addSite
            },
            'siteEdit button[action=siteSave]' : {
                click : this.updateSite
            },
            'siteList' : {
                itemdblclick : this.editSite
            },
            //Employee Function
            'north button[action=empAdd]' : {
                click : this.addEmp
            },
            'empEdit button[action=empSave]' : {
                click : this.updateEmp
            },
            'empList' : {
                itemdblclick : this.editEmp
            } ,
            //Supplier Function
            'north button[action=supAdd]' : {
                click : this.addSup
            },
            'supEdit button[action=supSave]' : {
                click : this.updateSup
            },
            'supList' : {
                itemdblclick : this.editSup
            },
            //Service Providers
            'north button[action=serviceProviderAdd]' : {
                click : this.addSurProvider
            },
            'serviceProviderEdit button[action=serviceProviderSave]' : {
                click : this.updateSurProvider
            },
            'serviceProviderList' : {
                itemdblclick : this.editSurProvider
            },
            //Procurement Request
/*            'north button[action=procAdd]' : {
                click : this.addProcurement
            },
            'button[action=serviceProviderSave]' : {
                click : this.updateSurProvider
            },
            'serviceProviderList' : {
                itemdblclick : this.editSurProvider
            }*/
        });
    } ,

    onPanelRendered : function() {
        console.log('The panel was rendered');
    },

    editItem : function(grid, record) {
        var view = Ext.widget('itemEdit');
        view.down('form').loadRecord(record);
    },
    updateItem : function(button) {
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
                var newRecord = new CECBLayout.model.User(values);
                console.log('newRecord is '+newRecord+' ');
//                this.getProductsStore().add(newRecord);
                this.getUsersStore().add(newRecord);
//                console.log('this is '+this.getUsersStore().add(newRecord)+' ');

            }
            //existing record
            else {
                record.set(values);
            }
            win.close();
            //save the data to the Web local Storage
//            this.getProductsStore().sync();
            this.getUsersStore().sync();
        }
    },
    addItem : function(button) {
        var view = Ext.widget('itemEdit');
    },
    //Site Events
        editSite : function(grid, record) {
                var view = Ext.widget('siteEdit');
                view.down('form').loadRecord(record);
            },
        addSite : function(button) {
            var view = Ext.widget('siteEdit');
        },
        updateSite : function(button) {
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
                        var newRecord = new CECBLayout.model.Site(values);
                        console.log('newRecord is '+newRecord+' ');
    //                this.getProductsStore().add(newRecord);
    //                    this.getUsersStore().add(newRecord);
                        this.getSitesStore().add(newRecord);
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
                    this.getSitesStore().sync();
                }
            },
    //Employee Events
        editEmp : function(grid, record) {
            var view = Ext.widget('empEdit');
            view.down('form').loadRecord(record);
        },
        updateEmp : function(button) {
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
                    var newRecord = new CECBLayout.model.Employee(values);
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
        addEmp : function(button) {
            var view = Ext.widget('empEdit');
        },
    //Supplier Events
        editSup : function(grid, record) {
            var view = Ext.widget('supEdit');
            view.down('form').loadRecord(record);
        },
        updateSup : function(button) {
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
                    var newRecord = new CECBLayout.model.Supplier(values);
                    console.log('newRecord is '+newRecord+' ');
//                this.getProductsStore().add(newRecord);
//                    this.getUsersStore().add(newRecord);
//                    this.getEmployeesStore().add(newRecord);
                    this.getSuppliersStore().add(newRecord);
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
//                this.getEmployeesStore().sync();
                this.getSuppliersStore().sync();
            }
        },
        addSup : function(button) {
            var view = Ext.widget('supEdit');
        },
    //Service Provider
        editSurProvider : function(grid, record) {
            var view = Ext.widget('serviceProviderEdit');
            view.down('form').loadRecord(record);
        },
        updateSurProvider : function(button) {
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
                    var newRecord = new CECBLayout.model.ServiceProvider(values);
                    console.log('newRecord is '+newRecord+' ');
                    this.getServiceProvidersStore().add(newRecord);
//                console.log('this is '+this.getUsersStore().add(newRecord)+' ');

                }
                //existing record
                else {
                    record.set(values);
                }
                win.close();
                //save the data to the Web local Storage
                this.getServiceProvidersStore().sync();
            }
        },
        addSurProvider : function(button) {
            var view = Ext.widget('serviceProviderEdit');
        }

    },
    function(){
    console.log("Users Controller created");
})