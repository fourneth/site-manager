Ext.define('fourneth.ims.view.layout.BaseLayout', {
    extend: 'Ext.form.FormPanel',
    alias: 'widget.baselayout',
    requires: [
        'fourneth.ims.view.layout.CenterPanel',
        'fourneth.ims.view.layout.EastPanel',
        'fourneth.ims.view.layout.WestPanel',
        'fourneth.ims.view.layout.SouthPanel',
        'fourneth.ims.view.layout.MenuBar'
    ],

    id: 'baselayout',
    name: 'baselayout',
    frame: false,
    frameHeader: false,
    layout: 'border',
    autoScroll: true,

    fieldDefaults: {
        labelAlign: 'left',
        msgTarget: 'side'
    },

    items: [{
            xtype: 'north',
            region: 'north'
        },{
            region: 'center',
            xtype: 'center'
        }
    ]
})