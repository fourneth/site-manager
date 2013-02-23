
Ext.Loader.setConfig({enabled: true});
//Ext.Loader.setPath('fourneth.ims', 'app/fourneth/ims');

Ext.syncRequire('Ext.app.EventBus');

    Ext.application(
    {
        name: 'fourneth.ims',
        appFolder: 'app/fourneth/ims',
        controllers:
        [
            'fourneth.ims.login.LoginController'
        ],

        autoCreateViewport: true


    });
//neel edited 6.51 2/22/2013
  /*  Ext.override(Ext.app.EventBus,{
        constructor: function()
        {
            this.mixins.observable.constructor.call(this);


            this.bus = {};


            var me = this;
            Ext.override(Ext.Component,
            {
                fireEvent: function(ev)
                {

                    if (Ext.util.Observable.prototype.fireEvent.apply(this, arguments) !== false && !this.eventsSuspended)
                    {

                        return me.dispatch.call(me, ev, this, arguments);
                    }
                    return false;
                }
            });
        }
    });*/

