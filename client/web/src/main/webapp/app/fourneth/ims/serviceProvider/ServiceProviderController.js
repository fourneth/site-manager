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
})