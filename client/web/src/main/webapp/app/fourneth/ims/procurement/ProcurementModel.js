Ext.define('fourneth.ims.procurement.ProcurementModel', {
    extend: 'Ext.data.Model',
    fields: [
        'procurmentRequestNo',
        'datePrepared',
        'projectName',
        'to',
        'from',
        'quotationFor',
        'first',
        'requiredItems',
        'fileNo',
        'approved',
        'requestIncomplete',
        'rejected',
        'amountBeforeVAT',
        'vatRegNo',
        'availabilityOfItem',
        'deliveryPeriod'
    ]
});