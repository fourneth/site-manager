Ext.define('CECBLayout.view.layout.EastPanel',{
    extend:'Ext.tab.Panel',
    alias:'widget.east',

//    xtype:'east',
    title: 'Procurement Notifications',
    dockedItems: [
//        {
//            dock: 'bottom',
//            xtype: 'toolbar',
//            items: [ '->',
//                {
//                    xtype: 'button',
//                    text: 'test',
//                    tooltip: 'Test Button'
//                }
//            ]
//        }
    ],
    animCollapse: true,
    collapsible: true,
    split: true,
    width: 300,
    minSize: 175,
    maxSize: 400,
    margins: '0 5 0 0',
//    activeTab: 1,
    tabPosition: 'top',
    items: [
        {
            html: '<p>A TabPanel component can be a region.</p>',
            title: 'Approved',
            autoScroll: true,
            closable:true,
            items:[{xtype:'itemList'}]
        },{
            html: '<p>A TabPanel component can be a region.</p>',
            title: 'Rejected',
            autoScroll: true,
            closable:true
        },{
            html: '<p>A TabPanel component can be a region.</p>',
            title: 'Pending',
            autoScroll: false,
            closable:true,
            split: true,
            minWidth: 175,
            maxWidth: 400,
            animCollapse: true,
            margins: '0 0 0 5',
            layout: 'accordion',

            items: [
                {
//                    contentEl: 'west',
                    title: 'Up to 3 Week',
                    html:"neel0"

                },
                {
                    title: 'Up to 4 Week ',
                    html: '<p>neel1.</p>'
                },
                {
                    title: 'after 4 Week',
                    html: '<p>neel2.</p>'
                }
            ]

        },
        Ext.create('Ext.grid.PropertyGrid',
            {
                title: 'Property Grid',
                closable: true,
                source: {
                    "(name)": "Properties Grid",
                    "grouping": false,
                    "autoFitColumns": true,
                    "productionQuality": false,
                    "created": Ext.Date.parse('10/15/2006', 'm/d/Y'),
                    "tested": false,
                    "version": 0.01,
                    "borderWidth": 1
                }
            })
    ]
})