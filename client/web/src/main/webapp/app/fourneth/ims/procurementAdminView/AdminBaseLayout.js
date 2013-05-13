Ext.define('fourneth.ims.procurementAdminView.AdminBaseLayout', {
    extend: 'Ext.form.FormPanel',
    alias: 'widget.adminBaselayout',
    requires: [
        'fourneth.ims.procurementAdminView.AdminCenterPanel',
        'fourneth.ims.procurementAdminView.AdminMenuBar'
    ],

    id: 'adminBaselayout',
    name: 'adminBaselayout',
    frame: false,
    frameHeader: false,
    layout: 'border',
    autoScroll: true,

    fieldDefaults: {
        labelAlign: 'left',
        msgTarget: 'side'
    },

    items: [{
        xtype: 'adminNorth',
        region: 'adminNorth'
    },{
        region: 'adminCenter',
        xtype: 'adminCenter'
    }
    ]
})