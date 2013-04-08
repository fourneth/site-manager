Ext.define('CECBLayout.view.layout.CenterPanel',{
    extend:'Ext.panel.Panel',
    alias:'widget.center',
    requires : ['CECBLayout.view.login.Form', 'CECBLayout.view.user.List',
    'CECBLayout.view.layout.ProcEdit'],
    margins: '0 0 0 5',
    title:'PRForm',
    bodyPadding:10,

    items: [
        /*{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'username',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            fieldLabel: 'password'
        },
        {
            xtype:'button',
            text:'Save'
        } ,*/
//        {xtype : 'loginForm'},
        {xtype : 'itemList'}
//        {xtype:'itemEdit'}
    ]
},
    function(){
        console.log("List view was created");
    }
);