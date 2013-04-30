Ext.define('fourneth.ims.serviceProvider.ServiceProviderStore', {
    extend: 'Ext.data.Store',
    model: 'fourneth.ims.serviceProvider.ServiceProviderModel'  ,
    autoLoad: true,
    proxy: {
        type: 'localstorage',
        id:'serviceProvierAdd'
    }
});