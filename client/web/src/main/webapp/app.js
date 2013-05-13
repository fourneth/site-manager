var _app;
Ext.application(
    {
        name: 'fourneth.ims',
        appFolder: 'app/fourneth/ims',
        controllers: [
            'fourneth.ims.login.LoginController',
            'fourneth.ims.employee.EmployeeController',
            'fourneth.ims.suppliers.SupplierController',
            'fourneth.ims.site.SiteController',
            'fourneth.ims.serviceProvider.ServiceProviderController',
            'fourneth.ims.procurement.ProcurementController'
        ],

        requires: [
            'fourneth.ims.login.LoginDetails',
            'fourneth.ims.employee.EmployeeModel',
            'fourneth.ims.employee.EmployeeStore'
        ],

        autoCreateViewport: true,

        init: function (application) {
            _app = this;
            console.log(fourneth.ims.login.LoginDetails.permissions['general.permission']);
        }
    },
    console.log('app.js rendered'));
