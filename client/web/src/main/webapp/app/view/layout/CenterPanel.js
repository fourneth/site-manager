Ext.define('CECBLayout.view.layout.CenterPanel',{
    extend:'Ext.panel.Panel',
    alias:'widget.center',
    requires : ['CECBLayout.view.login.Form', 'CECBLayout.view.user.List'],
    margins: '0 0 0 5',

    region: 'center',
    items: [
        {xtype : 'loginForm'}        ,
        {xtype : 'userlist'}
    ]
});