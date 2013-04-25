Ext.define('CECBLayout.view.login.Form' ,{
    extend: 'Ext.form.FormPanel',
    alias : 'widget.loginForm',

    name: 'loginform',
    frame: true,
    title: 'Password Verification',
    bodyPadding: '5px 5px 0',
    width: 350,
    height: 150,
    renderTo : 'whole-page',
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

    initComponent: function() {
        this.buttons = [
            {
                name: 'loginButton',
                text: 'Login',
                action: 'login'
            },
            {
                name: 'logoutButton',
                text: 'Logout',
                action: 'logout',
                visible: false
            }
        ];

        this.items = [
            {
                fieldLabel: 'Username',
                name: 'username',
                id: 'username',
                inputType: 'text'
            },
            {
                fieldLabel: 'Password',
                name: 'password'
            }
        ];

        this.callParent(arguments);
    }
});