Ext.define('fourneth.ims.employee.EmployeeStore', {
    extend: 'Ext.data.Store',
    model: 'fourneth.ims.employee.EmployeeModel'  ,
    autoLoad: true,
//    data : [['123', '123pass'], ['1234', '1234pass']]
    proxy: {
        type: 'localstorage',
        id:'myProxyKey'
    }
});