Ext.define('CECBLayout.store.ServiceProviders', {
    extend: 'Ext.data.Store',
    model: 'CECBLayout.model.ServiceProvider'  ,
    autoLoad: true,
//    data : [['123', '123pass'], ['1234', '1234pass']]
    proxy: {
        type: 'localstorage',
        id:'myProxyKey'
    }
});