Ext.define('CECBLayout.store.Procurements', {
    extend: 'Ext.data.Store',
    model: 'CECBLayout.model.Procurement'  ,
    autoLoad: true,
    proxy: {
        type: 'localstorage',
        id:'myProxyKey'
    }
});