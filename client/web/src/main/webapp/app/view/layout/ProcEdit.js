Ext.define('CECBLayout.view.layout.ProcEdit', {
    extend: 'Ext.window.Window',
    alias : 'widget.procEdit',
    title : 'Procurement Add',
    layout: 'fit',
    autoShow: true,
    scroll:true,
    collapsible: true,
    bodyPadding: 5,
    width: 600,

    initComponent: function() {
        this.items = [
            {
                fieldDefaults: {
                    labelAlign: 'top',
                    msgTarget: 'side'
                },
                defaults: {
                anchor: '100%'           },
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'procurmentRequestNo',
                        fieldLabel: 'REQUISITION/PROCURMENT REQUEST NO.',
                        allowBlank: false
                    },
                    {
                        xtype: 'textfield',
                        name : 'datePrepared',
                        fieldLabel: 'DATE PREPARED',
                        allowBlank: false
                    },{
                        xtype:'textfield',
                        name:'jobNumber',
                        fieldLabel:'JOB/PROJECT NUMBER',
                        allowBlank:true
                    },{
                        xtype:'textfield',
                        name:'to',
                        fieldLabel:'TO(Contracting office, Name and Location)',
                        allowBlank:true
                    },{
                        xtype:'textfield',
                        name:'from',
                        fieldLabel:'From(Requisitioning office, Name and Location)',
                        allowBlank:true
                    },{
                        xtype:'textfield',
                        name:'estimatedProjectCost',
                        fieldLabel:'Estimated Project Cost',
                        allowBlank:true
                    },{
                        xtype:'tabpanel',
                        plain:true,
                        activeTab: 0,
                        height:235,
                        defaults:{
                            bodyPadding: 10
                        },
                        items:[
                            {
                                title:'Project/Site Details',
                                defaults: {
                                    width: 230
                                },
                                defaultType: 'textfield',

                                items: [{
                                    fieldLabel: 'First Name',
                                    name: 'first'
                                }]
                            },{
                                cls: 'x-plain',
                                title: 'Required Items',
                                layout: 'fit',
                                items: {
                                    xtype: 'htmleditor',
                                    name: 'requiredItems'
                                }
                            },{
                                title:'Recommendation',
                                items:[
                                    {
                                        xtype:'checkbox',
                                        fieldLabel:'Approved',
                                        name:'approved',
                                        labelAlign:'left'
                                    },{
                                        xtype:'checkbox',
                                        fieldLabel:'Request Incomplete ',
                                        name:'requestIncomplete',
                                        labelAlign:'left'
                                    },{
                                        xtype:'checkbox',
                                        fieldLabel:'Rejected',
                                        name:'rejected',
                                        labelAlign:'left'
                                    },{
                                        xtype:'checkbox',
                                        fieldLabel:'Approved',
                                        labelAlign:'left'
                                    }]
                            }
                        ]
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'save'
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