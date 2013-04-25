Ext.define('CECBLayout.view.layout.MenuBar' ,{
    extend: 'Ext.form.FormPanel',
    requires  : [ 'Ext.menu.*'],
    alias : 'widget.north',

    margins: '5 5 5 5',
//    title:'Menu Bar is here',
    height: 30,
    columnWidth:.15,

//    defaultType: 'textfield'
//    defaults: {
//        width: 240,
//        labelWidth: 90
//    }
    items : [
        Ext.create('Ext.toolbar.Toolbar', {
            items : [
                {
                    text:'Procurement',
                    menu: Ext.create('Ext.menu.Menu', {
                        id: 'mainMenu',
                        style: {
                            overflow: 'visible'     // For the Combo popup
                        },
                        items: [
                            {
                                text: 'Create',
                                handler : function () {
                                    console.log('create button clicked')

                                }
//                            checkHandler: onItemCheck
                            },
                            {
                                xtype : 'button',
                                text  : 'Create Procurement',
                                action: 'procAdd'
                            },{
                                xtype : 'button',
                                text  : 'Create Site',
                                action: 'siteAdd'
                            },{
                                xtype : 'button',
                                text  : 'Create Employee',
                                action: 'empAdd'
                            },{
                                xtype : 'button',
                                text  : 'Create Suppliers',
                                action: 'supAdd'
                            },{
                                xtype : 'button',
                                text  : 'Create Service Provider',
                                action: 'serviceProviderAdd'
                            }
                            ,

                            '-'
                        ]
                    })
                }
            ]
        })
    ]
});