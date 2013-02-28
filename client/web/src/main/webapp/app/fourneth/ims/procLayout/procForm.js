Ext.define('fourneth.ims.procLayout.procForm',
{
    extend:'Ext.form.FormPanel',
    alias: 'widget.procForm',

    id: 'procform1',
    name:'procform1',
    fram:true,
    title:'CECB Project',
    layout: 'border',

    initComponent:function(){

    Ext.QuickTips.init();
    Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));

    this.items =
    [
        Ext.create('Ext.Component',
            {
                region: 'north',
                height: 32,
                autoEl:
                {
                    tag: 'div',
                    html:'<p>north - generally for menus, toolbars and/or advertisements</p>'
                }
            }),
            {
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
            },
            {
                xtype: 'tabpanel',
                region: 'east',
                title: 'East Side',
                dockedItems:
                [
                    {
                        dock: 'top',
                        xtype: 'toolbar',
                        items:
                        [ '->',
                            {
                                xtype: 'button',
                                text: 'test',
                                tooltip: 'Test Button'
                            }
                        ]
                    }
                ],
                animCollapse: true,
                collapsible: true,
                split: true,
                width: 225,
                minSize: 175,
                maxSize: 400,
                margins: '0 5 0 0',
                activeTab: 1,
                tabPosition: 'bottom',
                items:
                [
                    {
                        html: '<p>A TabPanel component can be a region.</p>',
                        title: 'A Tab',
                        autoScroll: true
                    },
                    Ext.create('Ext.grid.PropertyGrid',
                        {
                            title: 'Property Grid',
                            closable: true,
                            source:
                            {
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
            },
            {
                region: 'west',
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
                items:
                [
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
            },
        Ext.create('Ext.tab.Panel',
            {
                region: 'center',
                deferredRender: false,
                activeTab: 0,
                items:
                [
                    {
                        contentEl: 'center1',
                        title: 'Close Me',
                        closable: true,
                        autoScroll: true
                    },
                    {
                        contentEl: 'center2',
                        title: 'Center Panel',
                        closable: true,
                        autoScroll: true
                    }
                ]
            })
    ]
       /* Ext.get("hideit").on('click', function()
        {
            var w = Ext.getCmp('west-panel');
            w.collapsed ? w.expand() : w.collapse();
        });*/

        this.callParent(arguments);

    }
})
