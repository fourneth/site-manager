Ext.define('fourneth.ims.login.LoginController', {
    extend: 'Ext.app.Controller',
    requires: ['fourneth.ims.service.ApiClient'],

    models: ['fourneth.ims.login.LoginDetails'],

    views: ['fourneth.ims.login.LoginForm'],

    refs: [
        { ref: 'loginForm', selector: 'loginForm' }
    ],

    init: function () {
        this.control(
            {'loginForm button[action=login]': {click: this.onSubmit}}
        );
    },

    onSubmit: function (btn) {
        var form = btn.up('form').getForm();
        var username = form.findField('username');
        var password = form.findField('password');
        var record = form.getRecord();
        var values = form.getValues();
        var loginResponse = fourneth.ims.service.ApiClient.loginRequest({'username': username.getValue(), 'password': password.getValue()});
        if (loginResponse.success) {
            fourneth.ims.service.Common.storeLoginDetails({empty: "true"});
            //direct this guy to home page
            fourneth.ims.service.Common.goToHomePage(this);

        } else {
            Ext.Msg.show({
                title: 'Save Changes?',
                msg: 'You are closing a tab that has unsaved changes. Would you like to save your changes?',
                buttons: Ext.Msg.YESNOCANCEL,
                icon: Ext.Msg.QUESTION,
                callback: function (itemId) {
                    console.log('this is the callback');
                    console.log(itemId);
                }
            });

        }
    },

    onClose: function (btn) {
        //todo close the browser
    }
});
