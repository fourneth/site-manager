Ext.define('fourneth.ims.view.layout.MenuBar', {
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
                    text: 'Procurement',
                    iconCls:'nav',
                    menu: Ext.create('Ext.menu.Menu', {
                        id: 'mainMenu',
                        style: {
                            overflow: 'visible'     // For the Combo popup
                        },
                        items: [
                            {
                            text: 'Create Site',
                            action: 'siteAdd',iconCls: 'settings',
                            handler:function(){
                                var view = Ext.getCmp('siteEdit');
                                if(view == null){
                                    _center_panel.add(Ext.create('fourneth.ims.site.SiteEdit'));
                                }
                                _center_panel.add(view);
                                console.log('site view',view);

                            }
                        },
                            {
                                text: 'Create Suppliers',
                                action: 'supAdd',iconCls: 'settings',
                                handler:function(){
                                    var view = Ext.getCmp('supEdit');
                                    if(view == null){
                                        view = Ext.create('fourneth.ims.suppliers.SupplierEdit');
                                    }
                                    _center_panel.add(view);
                                }
                            },
                            {
                                text: 'Create Employee',
                                action: 'empAdd', iconCls: 'settings',
                                handler: function () {
                                    var view = Ext.getCmp('empEdit');
                                    if(view == null){
                                        view = Ext.create('fourneth.ims.employee.EmployeeEdit');
                                    }
                                    _center_panel.add(view);
                                }
                            },
                            {
                                text: 'Create Procurement',
                                action: 'procAdd', iconCls: 'settings',
//                                hidden:true,
                                handler: function () {

                                    var view = Ext.getCmp('procurementEdit');
                                    if(view == null){
                                        view = Ext.create('fourneth.ims.procurement.ProcurementEdit');

                                    }
                                    _center_panel.add(view);
                                    console.log('xxxxx',view);
                                }
                            },
                            {
                                text: 'Create Service Provider',
                                action: 'serviceProviderAdd', iconCls: 'settings',
                                handler: function () {

                                    var view = Ext.getCmp('serviceProviderEdit');
                                    if (view == null) {
                                        view = Ext.create('fourneth.ims.serviceProvider.ServiceProviderEdit');
                                    }
                                    _center_panel.add(view);
                                }
                            },
                            {
                                text: 'View Site', iconCls: 'info',
                                handler:function(){
                                    var view = Ext.getCmp('siteList');
                                    if(view == null){
                                        _center_panel.add(Ext.create('fourneth.ims.site.SiteList'));
                                    }
                                    _center_panel.add(view);
                                }
                            },
                            {
                                text: 'View Employees',
                                action: 'employeeList',iconCls: 'info',
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
                                text: 'View Service Provider', iconCls: 'info',
                                handler: function () {

                                    var view = Ext.getCmp('serviceProviderList');
                                    if (view == null) {
                                        view = Ext.create('fourneth.ims.serviceProvider.ServiceProviderList');
                                    }
                                    _center_panel.add(view);
                                }
                            },{
                                text: 'View  Suppliers Summary',iconCls: 'info',
                                handler:function(){
                                    var view = Ext.getCmp('supList');
                                    if(view == null){
                                        view = Ext.create('fourneth.ims.suppliers.SupplierList');
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
});
