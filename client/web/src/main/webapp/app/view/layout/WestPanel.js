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
            html: '<p>Some settings in here.</p>',
            iconCls: 'settings'
        },
        {
            title: 'Information',
            html: '<p>Some info in here.</p>',
            iconCls: 'info'
        }
    ]
})