Ext.define('fourneth.ims.employee.EmployeeStore', {
    extend: 'Ext.data.Store',
    model: 'fourneth.ims.employee.EmployeeModel'  ,
    autoLoad: true,
    proxy: {
        type: 'rest',
        url: '/ims/employees',
        batchActions : true,
        reader: {
            type: 'json',
            root: 'users'
        },
        writer: {
            type: 'json'
        }
    }

});