Ext.define('CECBLayout.store.Users', {
    extend: 'Ext.data.Store',
    model: 'CECBLayout.model.User'  ,
    autoLoad: true,
//    data : [['123', '123pass'], ['1234', '1234pass']]
    proxy: {
        type: 'localstorage',
        id:'myProxyKey'
    }
});