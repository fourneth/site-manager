Ext.define('fourneth.ims.view.layout.SouthPanel', {
        extend: 'Ext.form.FormPanel',
        alias: 'widget.south',

        contentEl: 'south',
        split: true,
        height: 100,
        minSize: 100,
        maxSize: 200,
        collapsible: true,
        collapsed: true,
        title: 'South',
        margins: '0 0 0 0'
    },

    function () {
        console.log("South Panel was Rendered");


    })