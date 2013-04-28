Ext.define('fourneth.ims.view.layout.MenuBar', {
    extend: 'Ext.form.FormPanel',
    requires: ['Ext.menu.*', 'fourneth.ims.employee.EmployeeEdit', 'fourneth.ims.login.LoginDetails'],
    alias: 'widget.north',
//    margins: '5 5 5 5',
    height: 30,
    columnWidth: .15,
    items: [
        Ext.create('Ext.toolbar.Toolbar', {
            items: [
                {
                    text: 'Procurement',
                    menu: Ext.create('Ext.menu.Menu', {
                        id: 'mainMenu',
                        style: {
                            overflow: 'visible'     // For the Combo popup
                        },
                        items: [
                            {
                                text: 'Create',
                                handler: function () {
                                    console.log('create button clicked');
                                }
                            },
                            {
                                text: 'Create Procurement',
                                action: 'procAdd',
                                handler: function () {
                                    var view = Ext.getCmp('procList');
                                    _center_panel.add(view);
                                }
                            },
                            {
                                text: 'Create Site',
                                action: 'siteAdd'
                            },
                            {
                                text: 'Create Employee',
                                action: 'empAdd',
                                handler: function () {
                                    console.log('Employee create');
                                    Ext.widget('empEdit').renderLink('fourneth/ims/view/layout/CenterPanel')
                                }
                            },
                            {
                                text: 'Create Suppliers',
                                action: 'supAdd'
                            },
                            {
                                text: 'Create Service Provider',
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
