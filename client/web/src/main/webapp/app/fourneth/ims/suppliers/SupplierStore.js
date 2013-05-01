Ext.define('fourneth.ims.suppliers.SupplierStore', {
        extend: 'Ext.data.Store',
        model: 'fourneth.ims.suppliers.SupplierModel',
        autoLoad: true,
//        storeId:'supplierStore',
        proxy: {
            type: 'localstorage',
            id: 'supplierAdd'
        }
    },
    function () {
        console.log('Supplier Store load');
    });