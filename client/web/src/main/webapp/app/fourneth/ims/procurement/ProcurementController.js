Ext.define('fourneth.ims.procurement.ProcurementController', {
    extend: 'Ext.app.Controller',

    views: [
        'fourneth.ims.procurement.ProcurementEdit',
        'fourneth.ims.procurement.ProcurementList',
        'fourneth.ims.view.layout.MenuBar'
    ],

    stores: [
        'fourneth.ims.procurement.ProcurementStore'
    ],

    models: [
        'fourneth.ims.procurement.ProcurementModel'
    ],

    init: function () {
        this.control({
            'north button[action=procAdd]': {
                click: this.addProcurement
            },
            'procurementEdit button[action=procSave]': {
                click: this.updateProcurement
            },
            'serviceProviderList': {
                itemdblclick: this.editProcurement
            }
        })
    },

    editProcurement: function (grid, record) {
        var view = Ext.widget('procurementEdit');
        view.down('form').loadRecord(record);
    },

    updateProcurement: function (button) {
        var win = button.up('form');
        var form1 = win.down('form').getForm();
        //check of the form has any errors
        if (form1.isValid()) {
            //get the record
            var record = form1.getRecord();
            //get the form values
            var values = form1.getValues();
            //if a new record
            if (!record) {
                var newRecord = new fourneth.ims.procurement.ProcurementModel(values);
                this.getStore('fourneth.ims.procurement.ProcurementStore').add(newRecord);
//                console.log('this is '+this.getUsersStore().add(newRecord)+' ');

            }
            //existing record
            else {
                record.set(values);
            }
            win.close();
            //save the data to the Web local Storage
            this.getStore('fourneth.ims.procurement.ProcurementStore').sync();
        }
    },

    addProcurement: function () {
        Ext.widget('procurementEdit');
    }

});