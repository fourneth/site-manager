Ext.define('CECBLayout.view.layout.MenuBar' ,{
    extend: 'Ext.form.FormPanel',
    alias : 'widget.north',

    margin: '0 0 0 10',
    title:'Menu Bar is here',
    height: 32,
    columnWidth:.15,

    defaultType: 'textfield',
    defaults: {
        width: 240,
        labelWidth: 90
    }
})