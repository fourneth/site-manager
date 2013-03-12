//Layout
Ext.Loader.setConfig({enabled: true});
//Ext.syncRequire('Ext.app.EventBus');
/*    Ext.application(
    {
        name: 'fourneth.ims',
        appFolder: 'app/fourneth/ims',
        controllers:
        [
            //'fourneth.ims.login.LoginController'
//            'fourneth.ims.procurement.ProcController'
            'fourneth.ims.procLayout.procController'
//            'fourneth.ims.procurementNew.NewController'
        ],
        autoCreateViewport: true
    });*/
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
Ext.application({
    name: 'Ext4Example',

    controllers: [
        'Stocks'
    ],

    autoCreateViewport: true
});
