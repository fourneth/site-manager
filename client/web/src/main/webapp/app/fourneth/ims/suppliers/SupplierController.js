Ext.define('fourneth.ims.suppliers.SupplierController', {
    extend: 'Ext.app.Controller',

    view: [
        'fourneth.ims.suppliers.SupplierEdit',
        'fourneth.ims.suppliers.SupplierList',
        'fourneth.ims.view.layout.MenuBar'
    ],
    stores: ['fourneth.ims.suppliers.SupplierStore'],
    models: ['fourneth.ims.suppliers.SupplierModel'],

    init: function () {
        this.control({
            'north button[action=supAdd]': {
                click: this.addSup
            },
            'supEdit button[action=supSave]': {
                click: this.updateSup

            },
            'supList': {
                itemdblclick: this.editSup
            }
        })
    },
    editSup: function (grid, record) {
        var view = Ext.widget('supEdit');
        view.down('form').loadRecord(record);
    },
    updateSup: function (button) {
        var win = button.up('form');
        var form1 = win.down('form').getForm();
        if (form1.isValid()) {
            var record = form1.getRecord();
            var values = form1.getValues();
            if (!record) {
                var newRecord = new fourneth.ims.suppliers.SupplierModel(values);
                this.getStore('fourneth.ims.suppliers.SupplierStore').add(newRecord);
            }
            else {
                record.set(values);
            }
            win.close();
            this.getStore('fourneth.ims.suppliers.SupplierStore').sync();


        }
    },
    addSup: function () {
        Ext.widget('supEdit');
    }
}
);