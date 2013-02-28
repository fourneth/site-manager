Ext.define('fourneth.ims.procLayout.procController', {
    extend :
        'Ext.app.Controller',

    models :
        ['fourneth.ims.procLayout.procDetail'],

    views :
        ['fourneth.ims.procLayout.procForm'],

    refs :
        [ { ref: 'procform1', selector: 'procform1' } ]
});
