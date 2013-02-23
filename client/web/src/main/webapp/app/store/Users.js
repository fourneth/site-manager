Ext.define('ExtMVC.store.Users', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.User',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'login?view=sencha&json=true',
        method: 'GET',
        reader: {
            type: 'json',
            root: 'model',
            successProperty: 'model.success'
        }
    }

});