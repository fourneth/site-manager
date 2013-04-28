var _app;

Ext.application(
    {
        name: 'fourneth.ims',
        appFolder: 'app/fourneth/ims',
        controllers:
            [
                'fourneth.ims.login.LoginController',
                'fourneth.ims.employee.EmployeeController',
                'fourneth.ims.suppliers.SupplierController',
                'fourneth.ims.site.SiteController',
                'fourneth.ims.serviceProvider.ServiceProviderController',
                'fourneth.ims.procurement.ProcurementController'
            ],

        requires : [
            'fourneth.ims.login.LoginDetails',
            'fourneth.ims.employee.EmployeeModel',
            'fourneth.ims.employee.EmployeeStore'

        ],

        autoCreateViewport: true,

        init : function(application) {
            _app = this;
            console.log(fourneth.ims.login.LoginDetails.permissions['general.permission']);
        }
    });
//Employee
/*Ext.application({
 requires:[
 'Ext.grid.*',
 'Ext.data.*',
 'Ext.util.*',
 'Ext.grid.PagingScroller',
 'AppName.view.EmployeeGrid',
 'Ext.container.Viewport'
 ],
 name:'AppName',
 appFolder:'app',
 models:['Employee'],
 stores:['Employee'],
 controllers:['Employee'],
 launch:function () {
 Ext.onReady(function(){
 Ext.create('Ext.container.Viewport', {
 layout: 'fit',
 items:[{xtype:'emplyeegrid'}]
 });
 });
 }
 });*/
//Grid
/*Ext.application({
 name: 'Ext4Example',

 controllers: [
 'Stocks'
 ],

 autoCreateViewport: true
 });*/
//Layout MVC(Crome)
/*
 Ext.application({
 name:'CECBLayout',
 requires : ['CECBLayout.model.LoggedInUser'],
 controllers:[
 'Layouts'],
 autoCreateViewport: true,

 init : function(application) {
 console.log(CECBLayout.model.LoggedInUser.permissions['general.permission']);
 }
 });
*/
