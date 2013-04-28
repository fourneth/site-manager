Ext.define('fourneth.ims.view.layout.WestPanel',{
    extend:'Ext.form.FormPanel',
    alias:'widget.west',
    requires :[
        'fourneth.ims.site.SiteList',
        'fourneth.ims.employee.EmployeeList',
        'fourneth.ims.suppliers.SupplierList' ,
        'fourneth.ims.serviceProvider.ServiceProviderList',
        'fourneth.ims.procurement.ProcurementList'
    ],
    stateId: 'navigation-panel',
    id: 'west-panel',
    title: 'West',
    split: true,
    width: 200,
    minWidth: 175,
    maxWidth: 400,
    collapsible: true,
    animCollapse: true,
    margins: '0 0 0 5',
    layout: 'accordion',
    init:function(){},
    items: [
        {
            contentEl: 'west',
            title: 'Navigation',
            iconCls: 'nav'
        },
        {
            title: 'Settings',
            iconCls: 'settings'
        },
        {
            title: 'Information',
            iconCls: 'info'
        },
        {
            title: 'Site Information',
            items:[{
                xtype:'siteList',
                region:'siteList'
            }],
            iconCls: 'info'
        },
        {
            title: 'Employee Information',
            items:[{xtype:'empList'}],
            iconCls: 'info'
        },
        {
            title: 'Supplier Information',
            items:[{xtype:'supList'}],
            iconCls: 'info'
        },
        {
            title: 'Survice Provider Information',
            items:[{xtype:'serviceProviderList'}],
            iconCls: 'info'
        },
        {
            title: 'Procurement Request',
            items:[{xtype:'procList'}],
            iconCls: 'info'
        }

    ]
})