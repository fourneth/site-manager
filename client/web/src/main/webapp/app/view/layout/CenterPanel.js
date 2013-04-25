Ext.define('CECBLayout.view.layout.CenterPanel',{
    extend:'Ext.tab.Panel',
    alias:'widget.center',
    requires : ['CECBLayout.view.login.Form', 'CECBLayout.view.user.List',
    'CECBLayout.view.layout.ProcEdit'],
    margins: '0 0 0 5',
    title:'PRForm',
    bodyPadding:10,

    items: [
//        {xtype : 'serviceProviderList'},
//        {xtype:'serviceProviderEdit'}
    ]
},
    function(){
        console.log("List view was created");
    }
);