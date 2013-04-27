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
        'approved',
        'requestIncomplete',
        'rejected',
        'fileNo',
        'amountBeforeVAT',
        'vatRegNo',
        'availabilityOfItem',
        'deliveryPeriod'
    ]
});