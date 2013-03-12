Ext.define('AppName.store.Employee', {
    extend:'Ext.data.Store',
    buffered: true,
    pageSize: 5000,
    model: 'Employee',
    proxy: { type: 'memory' }
});