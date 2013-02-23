Ext.define('AM.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',

    title: 'All Users',

    initComponent: function() {

         // create instance immediately
         Ext.create('Ext.Component', {
         region: 'north',
         height: 32, // give north and south regions a height
         autoEl: {
         tag: 'div',
         html:'<p>north - generally for menus, toolbars and/or advertisements</p>'
         }
         }), {
         // lazily created panel (xtype:'panel' is default)
         region: 'south',
         contentEl: 'south',
         split: true,
         height: 100,
         minSize: 100,
         maxSize: 200,
         collapsible: true,
         collapsed: true,
         title: 'South',
         margins: '0 0 0 0'
         }, {
         xtype: 'tabpanel',
         region: 'east',
         title: 'East Side',
         dockedItems: [{
         dock: 'top',
         xtype: 'toolbar',
         items: [ '->', {
         xtype: 'button',
         text: 'test',
         tooltip: 'Test Button'
         }]
         }],
         animCollapse: true,
         collapsible: true,
         split: true,
         width: 225, // give east and west regions a width
         minSize: 175,
         maxSize: 400,
         margins: '0 5 0 0',
         activeTab: 1,
         tabPosition: 'bottom',
         items: [{
         html: '<p>A TabPanel component can be a region.</p>',
         title: 'A Tab',
         autoScroll: true
         }, Ext.create('Ext.grid.PropertyGrid', {
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
         })]
         }, {
         region: 'west',
         stateId: 'navigation-panel',
         id: 'west-panel', // see Ext.getCmp() below
         title: 'West',
         split: true,
         width: 200,
         minWidth: 175,
         maxWidth: 400,
         collapsible: true,
         animCollapse: true,
         margins: '0 0 0 5',
         layout: 'accordion',
         items: [{
         contentEl: 'west',
         title: 'Navigation',
         iconCls: 'nav' // see the HEAD section for style used
         }, {
         title: 'Settings',
         html: '<p>Some settings in here.</p>',
         iconCls: 'settings'
         }, {
         title: 'Information',
         html: '<p>Some info in here.</p>',
         iconCls: 'info'
         }]
         },
         // in this instance the TabPanel is not wrapped by another panel
         // since no title is needed, this Panel is added directly
         // as a Container
         Ext.create('Ext.tab.Panel', {
         region: 'center', // a center region is ALWAYS required for border layout
         deferredRender: false,
         activeTab: 0,     // first tab initially active
         items: [{
         contentEl: 'center1',
         title: 'Close Me',
         closable: true,
         autoScroll: true
         }, {
         contentEl: 'center2',
         title: 'Center Panel',
         autoScroll: true
         }]
         })
    }
});