Ext.define('fourneth.ims.procurement.ProcController', {
    extend :
        'Ext.app.Controller',

    models :
        ['fourneth.ims.procurement.ProcDetail'],

    views :
        ['fourneth.ims.procurement.ProcForm'],

    refs :
        [ { ref: 'procform', selector: 'procform' } ]
});
