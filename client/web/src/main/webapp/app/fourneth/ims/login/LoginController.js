Ext.define('fourneth.ims.login.LoginController', {
    extend :
        'Ext.app.Controller',

    models :
        ['fourneth.ims.login.LoginDetail'],

    views :
        ['fourneth.ims.login.LoginForm'],

    refs :
        [ { ref: 'loginForm', selector: 'loginForm' } ],

    init : function () {
        this.control({'loginForm button[action=login]' : {click : this.onSubmit}})
    },

    onSubmit : function (btn) {
        var form     = btn.up('form').getForm();
        var username = form.findField('username');
        var password = form.findField('password');

    }
});
