Ext.define('CECBLayout.view.layout.BaseLayout',{
    extend:'Ext.form.FormPanel',
    alias:'widget.baselayout',

    id:'baselayout',
    name:'baselayout',
    fram:true,
    title:'CECB_Project',
    layout:'border',
    autoScroll:true,

    fieldDefaults:{
        labelAlign:'left',
        msgTarget:'side'
    },

    items:[{
        xtype:'north',
        region:'north'
    },{
        xtype:'south',
        region:'south'

    },{
        region: 'east',
        xtype: 'east'
    },{
        region: 'west',
        xtype:'west'
    },{
        region:'center',
        xtype:'center'
    }]
})