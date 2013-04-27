Ext.define('fourneth.ims.view.layout.CenterPanel',{
    extend:'Ext.tab.Panel',
    alias:'widget.center',
//    requires : ['fourneth.ims..view.login.Form', 'fourneth.ims.view.user.List',
//    'fourneth.ims.view.layout.ProcEdit'],
    margins: '0 0 0 5',
    title:'PRForm',
    bodyPadding:10,

    items: [
//        {xtype : 'serviceProviderList'},
//        {xtype:'serviceProviderEdit'}
    ] ,
        init:function(){

        }
},
    function(){
        console.log("Center Panel was Rendered");
    }
);