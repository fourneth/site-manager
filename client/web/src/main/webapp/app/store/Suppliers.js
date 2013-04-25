Ext.define('CECBLayout.store.Suppliers', {
    extend: 'Ext.data.Store',
    model: 'CECBLayout.model.Supplier'  ,
    autoLoad: true,
//    data : [['123', '123pass'], ['1234', '1234pass']]
    proxy: {
        type: 'localstorage',
        id:'myProxyKey'
    }
});