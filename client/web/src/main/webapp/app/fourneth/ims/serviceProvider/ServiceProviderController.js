Ext.define('fourneth.ims.serviceProvider.ServiceProviderController',{
    extend:'Ext.app.Controller',

    views:[
        'fourneth.ims.serviceProvider.ServiceProviderEdit',
        'fourneth.ims.serviceProvider.ServiceProviderList',
        'fourneth.ims.view.layout.MenuBar'
    ],
    stores:['fourneth.ims.serviceProvider.ServiceProviderStore'],
    models:['fourneth.ims.serviceProvider.ServiceProviderModel'],

    init:function(){
        this.control({
            'north button[action=serviceProviderAdd]' : {
                click : this.addSurProvider
            },
            'serviceProviderEdit button[action=serviceProviderSave]' : {
                click : this.updateSurProvider
            },
            'serviceProviderList' : {
                itemdblclick : this.editSurProvider
            }
        })
    },
    editSurProvider : function(grid, record) {
        var view = Ext.widget('serviceProviderEdit');
        view.down('form').loadRecord(record);
    },
    updateSurProvider : function(button) {
        var win = button.up('form');
        var form1 = win.down('form').getForm();
        //check of the form has any errors
        if (form1.isValid()) {
            //get the record
            var record = form1.getRecord();
            //get the form values
            var values = form1.getValues();
            //if a new record
            if(!record){
                var newRecord = new fourneth.ims.serviceProvider.ServiceProviderModel(values);
                this.getStore('fourneth.ims.serviceProvider.ServiceProviderStore').add(newRecord);
//                console.log('this is '+this.getUsersStore().add(newRecord)+' ');

            }
            //existing record
            else {
                record.set(values);
            }
            win.close();
            //save the data to the Web local Storage
            this.getStore('fourneth.ims.serviceProvider.ServiceProviderStore').sync();
        }
    },
    addSurProvider : function(button) {
        var view = Ext.widget('serviceProviderEdit');
    }
})