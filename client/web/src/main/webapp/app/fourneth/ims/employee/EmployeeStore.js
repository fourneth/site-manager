Ext.define('fourneth.ims.employee.EmployeeStore', {
    extend: 'Ext.data.Store',
    model: 'fourneth.ims.employee.EmployeeModel'  ,
    autoLoad: true,
    proxy: {
        type: 'rest',
        url: '/ims/employees',
        reader: {
            type: 'json',
            root: 'users'
        }
    }

});