Ext.define('ExtMVC.model.User', {
    extend: 'Ext.data.Model',
    fields: ['username', 'isAdmin', 'authenticated', 'loggedOut']
});