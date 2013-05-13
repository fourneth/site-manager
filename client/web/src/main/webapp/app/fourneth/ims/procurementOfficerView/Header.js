Ext.define('fourneth.ims.procurementOfficerView.Header',{
    /*extend: 'Ext.Component',

    dock: 'top',
    baseCls: 'app-header',

    initComponent: function() {
        Ext.applyIf(this, {
            html: 'Loading Nested Data Example'
        });

        this.callParent(arguments);
    }*/


    extend: 'Ext.form.FormPanel',
    requires: [
        'Ext.menu.*',
        'fourneth.ims.procurement.ProcurementEdit',
        'fourneth.ims.login.LoginDetails',
        'fourneth.ims.site.SiteEdit'
    ],
    alias: 'widget.north',
    height: 30,
    columnWidth: .15,
    items: [
        Ext.create('Ext.toolbar.Toolbar', {
            items: [
                {
                    text: 'File',
                    menu: Ext.create('Ext.menu.Menu', {
                        id: 'mainMenuInHeader',
                        style: {
                            overflow: 'visible'     // For the Combo popup
                        },
                        items: [
                            {
                                text: 'Create Procurement',
                                action: 'procAdd',
                                handler: function () {
                                    var view = Ext.getCmp('procurementEdit');
                                    if(view == null){
                                        view = Ext.create('fourneth.ims.procurement.ProcurementEdit');
                                    }
                                    _center_panel.add(view);
                                }
                            },
                            {
                                text: 'Create Site',
                                action: 'siteAdd',

                                handler:function(){
                                    var view = Ext.getCmp('siteEdit');
                                    if(view == null){
                                        _center_panel.add(Ext.create('fourneth.ims.site.SiteEdit'));
                                    }
//                                    _center_panel.add(view);
                                    console.log('site view',view);

                                }
                            },
                            {
                                text: 'Create Employee',
                                action: 'empAdd',
                                handler: function () {
                                    var view = Ext.getCmp('empEdit');
                                    if(view == null){
                                        view = Ext.create('fourneth.ims.employee.EmployeeEdit');
                                    }
                                    _center_panel.add(view);
                                }
                            },
                            {
                                text: 'View Employees',
                                action: 'employeeList',
                                handler: function () {
                                    var view = Ext.getCmp('employeeList');
                                    view = view === null ? Ext.getCmp('fourneth.ims.employee.EmployeeList') : view;
                                    if(view == null){
                                        view = Ext.create('fourneth.ims.employee.EmployeeList');
                                    }
                                    _center_panel.add(view);
                                }
                            },
                            {
                                text: 'Create Suppliers',
                                action: 'supAdd',
                                handler:function(){
                                    var view = Ext.getCmp('supEdit');
                                    if(view == null){
                                        view = Ext.create('fourneth.ims.suppliers.SupplierEdit');
                                    }
                                    _center_panel.add(view);
                                }
                            },
                            {
                                text: 'Create Service Provider',
                                action: 'serviceProviderAdd',
                                handler: function () {

                                    var view = Ext.getCmp('serviceProviderEdit');
                                    if (view == null) {
                                        view = Ext.create('fourneth.ims.serviceProvider.ServiceProviderEdit');
                                    }
                                    _center_panel.add(view);
                                }
                            }
                            ,

                            '-'
                        ]
                    })
                }
            ]
        })
    ]
})