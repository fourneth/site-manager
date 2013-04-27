Ext.define('fourneth.ims.site.SiteStore', {
    extend: 'Ext.data.Store',
    model: 'fourneth.ims.site.SiteModel'  ,
    autoLoad: true,
    proxy: {
        type: 'localstorage',
        id:'myProxyKey'
    }
});