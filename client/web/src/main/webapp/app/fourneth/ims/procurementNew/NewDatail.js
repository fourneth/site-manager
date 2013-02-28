Ext.define('NewDatail', {
    extend: 'Ext.data.Model',
    fields: [
        'name',
        'email',
        { name: 'start', type: 'date', dateFormat: 'n/j/Y' },
        { name: 'salary', type: 'float' },
        { name: 'active', type: 'bool' }
    ]
});