Ext.define('AppName.view.EmployeeGrid', {
    alias:'employeegrid',
    extend:'Ext.grid.Panel',
    width: 700,
    height: 500,
    title: 'Bufffered Grid of 5,000 random records',
    store: 'Employee',
    loadMask: true,
    disableSelection: true,
    viewConfig: { trackOver: false },
    columns:[{
        xtype: 'rownumberer',
        width: 40,
        sortable: false
    },{
        text: 'Name',
        flex:1 ,
        sortable: true,
        dataIndex: 'name'
    },{
        text: 'Rating',
        width: 125,
        sortable: true,
        dataIndex: 'rating'
    },{
        text: 'Salary',
        width: 125,
        sortable: true,
        dataIndex: 'salary',
        align: 'right',
        renderer: Ext.util.Format.usMoney
    }]
}); 