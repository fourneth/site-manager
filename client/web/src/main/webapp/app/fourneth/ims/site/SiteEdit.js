Ext.define('fourneth.ims.site.SiteEdit', {
    extend: 'Ext.form.Panel',
    alias : 'widget.siteEdit',
    id:'siteEdit',
    title : 'Site Master form',
    layout: 'fit',
    autoShow: true,
    autoScroll:true,
    scroll:true,
    width:950,
    closable:true,
//    collapsible: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                anchor:100,
                defaultType:'textfield',
                autoScroll:true,
                margin:5,
                items: [
                    {
                        name : 'projectName',
                        width:900,
                        fieldLabel: 'Project Name',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'projectValue',
                        width:900,
                        fieldLabel: 'Project Value',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'commencementDate',
                        width:900,
                        fieldLabel: 'Commencement Date',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'duration',
                        width:900,
                        fieldLabel: 'Duration',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'completionDate',
                        width:900,
                        fieldLabel: 'Completion Date',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'timeElapsed',
                        width:900,
                        fieldLabel: 'Time Elapsed',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'daysRemaining',
                        width:900,
                        fieldLabel: 'Days Remaining',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'dateOfSuspension',
                        width:900,
                        fieldLabel: 'Date Of Suspension',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'reCommenceDate',
                        width:900,
                        fieldLabel: 'Re Commence Date',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'newCompletionDate',
                        width:900,
                        fieldLabel: 'New Completion Date',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'remainingDays',
                        width:900,
                        fieldLabel: 'Remaining Days',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'bondSubmitted',
                        width:900,
                        fieldLabel: 'Bond Submitted',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'insuranceDetails',
                        width:900,
                        fieldLabel: 'Insurance Details',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'projectConstructionProgram',
                        width:900,
                        fieldLabel: 'Project Construction Program(Updated)',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'projectProcurementProgram',
                        width:900,
                        fieldLabel: 'Project Procurement Program',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'financialStates',
                        width:900,
                        fieldLabel: 'Financial States',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'projectCompletedDate',
                        width:900,
                        fieldLabel: 'Project Completed Date',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        name : 'defectLiabilityExpiryDate',
                        width:900,
                        fieldLabel: 'Defect Liability Expiration Date',
                        allowBlank: false,
                        msgTarget: 'side'
                    }

                ]

            }
        ];
        this.buttons = [
            {
                text: 'Save',
                action: 'siteSave'
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