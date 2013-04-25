Ext.define('CECBLayout.store.Employees', {
    extend: 'Ext.data.Store',
    model: 'CECBLayout.model.Employee'  ,
    autoLoad: true,
//    data : [['123', '123pass'], ['1234', '1234pass']]
    proxy: {
        type: 'localstorage',
        id:'myProxyKey'
    }
});