Ext.define('fourneth.ims.procurement.ProcurementStore', {
    extend: 'Ext.data.Store',
    model: 'fourneth.ims.procurement.ProcurementModel',
    autoLoad: true,
    proxy: {
        type: 'localstorage',
        id: 'procurementAdd'
    }
});