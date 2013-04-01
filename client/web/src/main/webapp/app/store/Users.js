Ext.define('CECBLayout.store.Users', {
    extend: 'Ext.data.ArrayStore',
    model: 'CECBLayout.model.User'  ,
    data : [['123', '123pass'], ['1234', '1234pass']]

//    autoLoad: true,
//
//    proxy: {
//        type: 'ajax',
//        url: 'login?view=sencha&json=true',
//        method: 'GET',
//        reader: {
//            type: 'json',
//            root: 'model',
//            successProperty: 'model.success'
//        }
//    }

});