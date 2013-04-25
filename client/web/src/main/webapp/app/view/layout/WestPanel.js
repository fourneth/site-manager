Ext.define('CECBLayout.view.layout.WestPanel',{
    extend:'Ext.form.FormPanel',
    alias:'widget.west',

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
            items:[{xtype:'siteList'}],
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
        }

    ]
})