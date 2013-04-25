Ext.define('CECBLayout.store.Sites', {
    extend: 'Ext.data.Store',
    model: 'CECBLayout.model.Site'  ,
    autoLoad: true,
//    data : [['123', '123pass'], ['1234', '1234pass']]
    proxy: {
        type: 'localstorage',
        id:'myProxyKey'
    }
});