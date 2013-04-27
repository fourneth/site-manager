Ext.define('fourneth.ims.suppliers.SupplierStore', {
    extend: 'Ext.data.Store',
    model: 'fourneth.ims.suppliers.SupplierModel'  ,
    autoLoad: true,
//    data : [['123', '123pass'], ['1234', '1234pass']]
    proxy: {
        type: 'localstorage',
        id:'myProxyKey'
    }
});