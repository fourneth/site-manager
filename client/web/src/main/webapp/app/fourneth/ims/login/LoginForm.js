Ext.define('fourneth.ims.login.LoginForm', {
    extend: 'Ext.form.FormPanel',
    alias: 'widget.loginForm',
    name: 'loginForm',
    frame: true,
    title: 'Password Verification',
    bodyPadding: '5px 5px 0',
    width: 350,
    height: 150,
    fieldDefaults: {
        labelWidth: 125,
        msgTarget: 'side',
        autoFitErrors: false
    },
    defaults: {
        width: 300,
        inputType: 'password'
    },
    defaultType: 'textfield',

    initComponent: function () {
        this.buttons = [
            {
                name: 'loginButton',
                text: 'Login',
                action: 'login'
            },
            {
                name: 'closeButton',
                text: 'Close',
                action: 'close',
                visible: false
            }
        ];

        this.items = [
            {
                fieldLabel: 'Username',
                name: 'username',
                id: 'username',
                inputType: 'text',
                allowBlank: false
            },
            {
                fieldLabel: 'Password',
                name: 'password',
                vtype: 'string',
                allowBlank: false
            }
        ];

        this.callParent(arguments);
    }
});
