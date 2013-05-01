Ext.define('fourneth.ims.procurement.ProcurementEdit', {
    extend: 'Ext.form.Panel',
    alias: 'widget.procurementEdit',
    id: 'procurementEdit',
    title: 'Procurement Add',
    layout: 'fit',
    closable: true,
    frame:true,

    initComponent: function () {
        this.items = [
            {
                fieldDefaults: {
                    labelAlign: 'top',
                    msgTarget: 'side'
                },
                autoScroll: true,
                defaults: {
                    anchor: '100%' },
                xtype: 'form',
                items: [
                    {
                        xtype: 'fieldset',
                        defaults: {
                            anchor: '60%'
                        },
                        margin: 10,
                        items: [
                            {
                                xtype: 'textfield',
                                name: 'procurmentRequestNo',
                                fieldLabel: 'REQUISITION/PROCURMENT REQUEST NO.',
                                allowBlank: false
                            },
                            {
                                xtype: 'textfield',
                                name: 'to',
                                fieldLabel: 'TO(Contracting office, Name and Location)',
                                allowBlank: true
                            },
                            {
                                xtype: 'textfield',
                                name: 'from',
                                fieldLabel: 'From(Requisitioning office, Name and Location)',
                                allowBlank: true
                            },
                            {
                                xtype: 'textfield',
                                name: 'datePrepared',
                                fieldLabel: 'DATE PREPARED',
                                allowBlank: false
                            },
                            {
                                xtype: 'textfield',
                                name: 'fileNo',
                                fieldLabel: 'File No'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        margin: 10,
//                        defaults: {
//                            anchor: '100%' },
                        items: [
                            {
                                xtype: 'textfield',
                                name: 'projectName',
                                fieldLabel: 'Project Name',
                                allowBlank: true
                            },
                            {
                                xtype: 'textfield',
                                name: 'quotationFor',
                                fieldLabel: 'Quotation for',
                                allowBlank: true
                            }
                        ]
                    },
                    {
                        xtype: 'tabpanel',
                        plain: true,
                        activeTab: 0,
                        height: 235,
                        margin: 10,
                        defaults: {
                            bodyPadding: 10
                        },
                        items: [
                            {
                                cls: 'x-plain',
                                title: 'Required Items',
                                autoScroll: true,
                                layout: {
                                    type: 'vbox',
                                    align: 'left'
                                },

                                items: [
                                    {
                                        xtype: 'htmleditor',
                                        name: 'requiredItems'
                                    },
                                    {
                                        xtype: 'textfield',
                                        name: 'amountBeforeVAT',
                                        fieldLabel: 'Amount Before VAT',
                                        labelAlign: 'left'
                                    },
                                    {
                                        xtype: 'textfield',
                                        name: 'vatRegNo',
                                        fieldLabel: 'Vat Reg No',
                                        labelAlign: 'left'
                                    },
                                    {
                                        xtype: 'textfield',
                                        name: 'availabilityOfItem',
                                        fieldLabel: 'Availability Of Item',
                                        labelAlign: 'left'
                                    },
                                    {
                                        xtype: 'textfield',
                                        name: 'deliveryPeriod',
                                        fieldLabel: 'Delivery Period',
                                        labelAlign: 'left'
                                    }
                                ]
                            },
                            {
                                title: 'Project/Site Details',
//                                defaults: {
//                                    width: 230
//                                },
                                defaultType: 'textfield',

                                items: [
                                    {
                                        fieldLabel: 'First Name',
                                        name: 'first'

                                    }
                                ]
                            },
                            {
                                title: 'Recommendation',
                                items: [
                                    {
                                        xtype: 'checkbox',
                                        fieldLabel: 'Approved',
                                        name: 'approved',
                                        labelAlign: 'left'
                                    },
                                    {
                                        xtype: 'checkbox',
                                        fieldLabel: 'Request Incomplete ',
                                        name: 'requestIncomplete',
                                        labelAlign: 'left'
                                    },
                                    {
                                        xtype: 'checkbox',
                                        fieldLabel: 'Rejected',
                                        name: 'rejected',
                                        labelAlign: 'left'
                                    }
                                ]
                            },
                            {
                                title: 'Suppliers',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        fieldLabel: 'Name & Address '
                                    },
                                    {
                                        xtype: 'textfield',
                                        fieldLabel: 'Contact No.(if available)'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'procSave'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});