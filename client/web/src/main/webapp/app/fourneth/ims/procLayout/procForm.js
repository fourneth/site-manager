Ext.define('fourneth.ims.procLayout.procForm',
{
    extend:'Ext.form.FormPanel',
    alias: 'widget.procForm',
    id: 'procform1',
    name:'procform1',
    fram:true,
    title:'CECB Project',
    layout: 'border',
    autoScroll: true,

    initComponent:function(){

    Ext.QuickTips.init();
    Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));

        this.items =
            [
                Ext.create('Ext.Component',{
                        region: 'north',
                        height: 32,
                        autoEl:
                        {
                            tag: 'div',
                            html: '<p>north - generally for menus, toolbars and/or advertisements</p>'
                        }
                    }),
                {
                    region: 'south',
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
                {
                    region: 'east',
                    xtype: 'tabpanel',
                    title: 'Procurement Notifications',
                    dockedItems: [
                        {
                            dock: 'top',
                            xtype: 'toolbar',
                            items: [ '->',
                                {
                                    xtype: 'button',
                                    text: 'test',
                                    tooltip: 'Test Button'
                                }
                            ]
                        }
                    ],
                    animCollapse: true,
                    collapsible: true,
                    split: true,
                    width: 300,
                    minSize: 175,
                    maxSize: 400,
                    margins: '0 5 0 0',
                    activeTab: 1,
                    tabPosition: 'bottom',
                    items: [
                        {
                            html: '<p>A TabPanel component can be a region.</p>',
                            title: 'Approved',
                            autoScroll: true,
                            closable:true
                        },{
                                html: '<p>A TabPanel component can be a region.</p>',
                                title: 'Rejected',
                                autoScroll: true,
                                closable:true
                        },{
                                html: '<p>A TabPanel component can be a region.</p>',
                                title: 'Pending',
                                autoScroll: true,
                                closable:true,
                                split: true,
                                width: 200,
                                minWidth: 175,
                                maxWidth: 400,
                                collapsible: true,
                                animCollapse: true,
                                margins: '0 0 0 5',
                                layout: 'accordion',
                                items: [
                                    {
                                        contentEl: 'west',
                                        title: 'Up to 3 Week',
                                        //iconCls: 'nav',
                                        html:"neel0"
                                    },
                                    {
                                        title: 'Up to 4 Week ',
                                        html: '<p>neel1.</p>'
                                        //iconCls: 'settings'
                                    },
                                    {
                                        title: 'after 4 Week',
                                        html: '<p>neel2.</p>'
                                        //iconCls: 'info'
                                    }
                                ]

                        },
                        Ext.create('Ext.grid.PropertyGrid',
                            {
                                title: 'Property Grid',
                                closable: true,
                                source: {
                                    "(name)": "Properties Grid",
                                    "grouping": false,
                                    "autoFitColumns": true,
                                    "productionQuality": false,
                                    "created": Ext.Date.parse('10/15/2006', 'm/d/Y'),
                                    "tested": false,
                                    "version": 0.01,
                                    "borderWidth": 1
                                }
                            })
                    ]
                },
                {
                    region: 'west',
                    stateId: 'navigation-panel',
                    id: 'west-panel',
                    title: 'West',
                    split: true,
                    width: 200,
                    minWidth: 175,
                    maxWidth: 400,
                    collapsible: true,
                    animCollapse: true,
                    margins: '0 0 0 5',
                    layout: 'accordion',
                    items: [
                        {
                            contentEl: 'west',
                            title: 'Navigation',
                            iconCls: 'nav'
                        },
                        {
                            title: 'Settings',
                            html: '<p>Some settings in here.</p>',
                            iconCls: 'settings'
                        },
                        {
                            title: 'Information',
                            html: '<p>Some info in here.</p>',
                            iconCls: 'info'
                        }
                    ]
                },
                Ext.create('Ext.tab.Panel',{
                        region: 'center',
                        items: [
                            {
                                xtype:'tabpanel',
                                title: 'Procurement Request',
                                bodyPadding: '5px 5px 0',
                                closable: true,
                                frame: true,
                                defaults:{anchor: '100%',bodyPadding: 10},
                                items:[
                                    {
                                        title:'BPC Approval form',
                                        closable: true,
                                        autoScroll:true,
                                        defaults:{width: 230},
                                        items:[
                                            {
                                                xtype: 'fieldset',
                                                collapsible: true,
                                                collapsed: true,
                                                title: '<p></p><b> 1 BRIFF DESCRIPTION OF THE JOB </b> </p>',
                                                layout: 'anchor',
                                                width:870,
                                                defaults:
                                                {
                                                    xtype: 'textfield',
                                                    labelWidth: 175,
                                                    anchor: '100%',
                                                    labelStyle: 'padding-left:4px;'
                                                },
                                                items:[
                                                    {
                                                        defaultType: 'textfield',
                                                        fieldLabel: '1.1 Job Code',
                                                        name: 'jobCode',
                                                        anchor:'95%'
                                                    },
                                                    {
                                                        defaultType: 'textfield',
                                                        fieldLabel: '1.2 Description of the job',
                                                        name: 'desriptionOfTheJob',
                                                            anchor:'95%'
                                                    },
                                                    {
                                                        defaultType: 'textfield',
                                                        fieldLabel: '1.3 Client',
                                                        name: 'client',
                                                        anchor:'95%'
                                                    },
                                                    {
                                                        defaultType: 'textfield',
                                                        fieldLabel: '1.4 Estimated Project Cost',
                                                         name: 'estimatedProjectCost',
                                                        anchor:'95%'
                                                    }]
                                            },
                                            {
                                                xtype: 'fieldset',
                                                title: '<p></p><b> 2 RELATED DOCUMENTS FOR CALLING QUOTATIONS/BIDS </b> </p>',
                                                layout: 'anchor',
                                                width:870,
                                                collapsible: true,
                                                collapsed: true,
                                                defaults:
                                                    {
                                                    xtype: 'textfield',
                                                    labelWidth: 175,
                                                    anchor: '100%',
                                                    labelStyle: 'padding-left:4px;'
                                                },
                                                items:[
                                                    {
                                                        fieldLabel: '2.1 Work Description in respect of this work/supply',
                                                        name: 'WDRW'
                                                    },
                                                    {
                                                        fieldLabel: '2.2 Availability of Funds',
                                                        name: 'availabilityFunds'
                                                    },
                                                    {
                                                        fieldLabel: '2.3 Requirement form Site SE/RE  ',
                                                        name: 'requirementFromSiteSe'
                                                    },
                                                    {
                                                        fieldLabel: '2.4 Engineer`s Estimate',
                                                        name: 'engineerEstimate',
                                                        fieldLabel: '2.5 Bidding document with list of issuance',
                                                        name: 'BDLI'
                                                    },
                                                    {
                                                        fieldLabel: '2.6 Document Prepared at the Opening with Sealed Quotations/Bids Received',
                                                        name: 'DPOSQ'
                                                    },
                                                    {
                                                        fieldLabel: '2.7 Tender Evaluation Report by the TEC',
                                                        name: 'TERT'
                                                    }]
                                            },{
                                                xtype: 'fieldset',
                                                    title: '<p></p><b> 3 SUPPORTING DOCUMENTS IF ANY </b> </p>',
                                                    layout: 'anchor',
                                                    width:870,
                                                    defaults: {
                                                        xtype: 'textfield',
                                                        labelWidth: 175,
                                                        anchor: '100%',
                                                        labelStyle: 'padding-left:4px;'
                                                    },
                                                    collapsible: true,
                                                    collapsed: true,
                                                    items:[{
                                                        fieldLabel: '3.1 Negotiation if any',
                                                        name: 'negotiationAny'},{
                                                        fieldLabel: '3.2 Other Clarifications if any',
                                                        name: 'otherClarificationsAny'}]
                                                },{
                                                    xtype: 'fieldset',
                                                    title: '<p></p><b> 4 OFFICER FORWARDING THE DOCUMENT </b> </p>',
                                                    layout: 'anchor',
                                                    width:870,
                                                    defaults: {
                                                        xtype: 'label',
                                                        labelWidth: 175,
                                                        anchor: '100%',
                                                        labelStyle: 'padding-left:4px;'
                                                    },
                                                    collapsible: true,
                                                    collapsed: true,
                                                    items:[{
                                                        html: '<p>The above documents were checked by me and is in order. Forwarded for approval of BPCI</p><br>' +
                                                            '  <p>Name of TEC Member:' +
                                                            '  <br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Signature:</p>'}]
                                                },{
                                                    xtype: 'fieldset',
                                                    title: '<p></p><b> 5 AUTHORIZATION FROM BPCI</b> </p>',
                                                    layout: 'anchor',
                                                    width:870,
                                                    defaults: {
                                                        labelWidth: 175,
                                                        anchor: '100%',
                                                        labelStyle: 'padding-left:4px;'
                                                    },
                                                    collapsible: true,
                                                    collapsed: true,
                                                    items:[{
                                                        xtype:'textfield',
                                                        fieldLabel: '5.1 Comments if any'},{
                                                        xtype:'textfield',
                                                        fieldLabel: '&nbsp &nbsp &nbsp Name of the Supplier'},{
                                                        xtype:'textfield',
                                                        fieldLabel: '&nbsp &nbsp &nbsp Amount without VAT:Rs'},{
                                                        xtype:'textfield',
                                                        fieldLabel: '&nbsp &nbsp &nbsp VAT Component:Rs'},{
                                                        xtype:'label',
                                                        html:'<p>Purchase/Supply Authorized/ Not Authorized<br><br><br><br><br><br></p>'},{
                                                        xtype:'label',
                                                        html:'............................................. &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  ' +
                                                            '.............................................. &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp' +
                                                            '..............................................<br>'
                                                    },{
                                                        xtype:'label',
                                                        html:'DgM(H)<br>Chairman,BPCI &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp' +
                                                            'PM/APM/RE(............)Member,BPCI &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp' +
                                                            'Accts.Assistant '
                                                    }]
                                                },{
                                                    xtype: 'fieldset',
                                                    title: '<p></p><b> 6 APPROVAL</b> </p>',
                                                    layout: 'anchor',
                                                    width:870,
                                                    defaults: {
                                                        labelWidth: 175,
                                                        anchor: '100%',
                                                        labelStyle: 'padding-left:4px;'
                                                    },
                                                    collapsible: true,
                                                    collapsed: true,
                                                    items:[{
                                                        xtype: 'container',
                                                        layout: 'hbox',
                                                        margin: '0 0 10',
                                                        title:'6. APPROVAL',
                                                        items: [{
                                                            xtype: 'fieldset',
                                                            flex: 1,
                                                            layout: 'anchor',
                                                            defaults: {
                                                                anchor: '100%',
                                                                hideEmptyLabel: false
                                                            },
                                                            items: [{
                                                                xtype: 'label',
                                                                html:'6.1 Payment Approved<br> &nbsp &nbsp &nbsp(Applicable for single payment)' +
                                                                    '<br><br><br><br><br><br><br><br>'
                                                            },{
                                                                xtype:'label',
                                                                html:'&nbsp &nbsp &nbsp..........................................<br>' +
                                                                    '&nbsp &nbsp &nbsp DGM/PM/A[M(H)'
                                                            }]
                                                        }, {
                                                            xtype: 'component',
                                                            width: 10
                                                        }, {
                                                            xtype: 'fieldset',
                                                            flex: 1,
                                                            layout: 'anchor',
                                                            defaults: {
                                                                anchor: '100%',
                                                                hideEmptyLabel: false
                                                            },
                                                            items: [{
                                                                xtype: 'label',
                                                                html:'(Applicable for part payments if any)' +
                                                                     '<br><br><br><br><br><br><br><br><br><br><br>'
                                                            }]
                                                        }]
                                                    }]
                                                }]
                                    },
                                    Ext.widget({
                                                title: 'Request of Quotation Calling',
                                                xtype: 'form',
                                                id: 'requestQuotationCalling',
                                                collapsible: true,
                                                closable: true,
                                                autoScroll:true,
                                                bodyPadding: 5,
                                                width: 600,
                                                fieldDefaults: {
                                                    labelAlign: 'top',
                                                    msgTarget: 'side'
                                                },
                                                defaults: {
                                                    anchor: '100%'
                                                },
                                                items: [
                                                    {
                                                    xtype: 'container',
                                                    layout:'hbox',
                                                    items:[{
                                                        xtype: 'container',
                                                        flex: 1,
                                                        border:false,
                                                        layout: 'anchor',
                                                        defaultType: 'textfield',
                                                        items: [{
                                                            fieldLabel: 'TO:',
                                                            xtype: 'combobox',
                                                            name: 'to',
                                                            labelWidth: 50,
                                                            width: 100,
                                                            store:Ext.create('Ext.data.ArrayStore', {
                                                                fields: ['abbr'],
                                                                data :  ['']                                                               }),
                                                            valueField: 'abbr',
                                                            displayField: 'abbr',
                                                            typeAhead: true,
                                                            queryMode: 'local',
                                                            allowBlank: false,
                                                            forceSelection: true,
                                                            anchor:'95%'
                                                        },{
                                                            fieldLabel: 'From:',
                                                            xtype: 'combobox',
                                                            name: 'form',
                                                            labelWidth: 50,
                                                            width: 100,
                                                            store:Ext.create('Ext.data.ArrayStore', {
                                                                fields: ['abbr'],
                                                                data :  ['neel lal']                                                               }),
                                                            valueField: 'abbr',
                                                            displayField: 'abbr',
                                                            typeAhead: true,
                                                            queryMode: 'local',
                                                            allowBlank: false,
                                                            forceSelection: true,
                                                            anchor:'95%'
                                                        },{
                                                            fieldLabel: 'File No:',
                                                            allowBlank: false,
                                                            name: 'fileNo',
                                                            anchor:'95%'
                                                        },{
                                                            fieldLabel: 'Date:',
                                                            xtype:'datefield',
                                                            allowBlank: false,
                                                            name: 'date',
                                                            anchor:'95%'
                                                        },{
                                                            fieldLabel: 'Date of Issues:',
                                                            xtype:'datefield',
                                                            allowBlank: false,
                                                            name: 'date',
                                                            anchor:'95%'
                                                        }]
                                                    }]
                                                },
                                                    {
                                                        xtype:'tabpanel',
                                                        plain:true,
                                                        activeTab: 0,
                                                        height:235,
                                                        anchor:'95%',
                                                        defaults:{
                                                            bodyPadding: 10
                                                        },
                                                        items:[{
                                                            title:'Personal Details',
                                                            defaults: {
                                                                width: 230
                                                            },
                                                            defaultType: 'textfield',

                                                            items: [{
                                                                fieldLabel: 'First Name',
                                                                name: 'first',
                                                                value: 'Jamie'
                                                            },{
                                                                fieldLabel: 'Last Name',
                                                                name: 'last',
                                                                value: 'Avins'
                                                            },{
                                                                fieldLabel: 'Company',
                                                                name: 'company',
                                                                value: 'Ext JS'
                                                            }, {
                                                                fieldLabel: 'Email',
                                                                name: 'email',
                                                                vtype:'email'
                                                            }]
                                                        },{
                                                            title:'Phone Numbers',
                                                            defaults: {
                                                                width: 230
                                                            },
                                                            defaultType: 'textfield',

                                                            items: [{
                                                                fieldLabel: 'Home',
                                                                name: 'home',
                                                                value: '(888) 555-1212'
                                                            },{
                                                                fieldLabel: 'Business',
                                                                name: 'business'
                                                            },{
                                                                fieldLabel: 'Mobile',
                                                                name: 'mobile'
                                                            },{
                                                                fieldLabel: 'Fax',
                                                                name: 'fax'
                                                            }]
                                                        },{
                                                            cls: 'x-plain',
                                                            title: 'Biography',
                                                            layout: 'fit',
                                                            items: {
                                                                xtype: 'htmleditor',
                                                                name: 'bio2',
                                                                fieldLabel: 'Biography'
                                                            }
                                                        }]
                                                    }

                                                ]
                                            })],
                                buttons:[
                                    {
                                        text: 'Save',
                                        handler: function()
                                        {
                                            this.up('form').getForm().isValid();
                                        }
                                    },
                                    {
                                        text: 'Cancel',
                                        handler: function(){
                                            this.up('form').getForm().reset();
                                        }
                                    }]
                            }
                        ]
                    })
            ];

        this.callParent(arguments);

    }
})
