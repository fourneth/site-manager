Ext.define('fourneth.ims.site.SiteAdminView',{
    extend:'Ext.form.Panel',
    alias:'widget.siteAdminView',

    title: 'Site Information',
    xtype: 'form',
    id: 'siteAdminView',
    collapsible: true,
    bodyPadding: 5,
    width: 600,
    fieldDefaults: {
        labelAlign: 'top',
        msgTarget: 'side'
    },
    defaults: {
        anchor: '100%'
    },
    items: [{
        xtype: 'container',
        layout:'hbox',
        items:[{
            xtype: 'container',
            flex: 1,
            border:false,
            layout: 'anchor',
            defaultType: 'textfield',
            items: [{
                xtype:'combobox',
                store:Ext.create('fourneth.ims.site.SiteStore'),
                displayField:'projectName',
                fieldLabel: 'Site ID',
                allowBlank: false,
                name: 'siteID',
                anchor:'95%'
            }, {
                fieldLabel: 'Site Name',
                name: 'siteName',
                anchor:'95%'
            }]
        },{
            xtype: 'container',
            flex: 1,
            layout: 'anchor',
            defaultType: 'textfield',
            items: [{
                fieldLabel: 'Project Duration',
                allowBlank: false,
                name: 'projectDuration',
                anchor:'95%'
            },{
                fieldLabel: 'Email',
                allowBlank: false,
                name: 'email',
                vtype:'email',
                anchor:'95%'
            }]
        }]
    },
        {
            xtype:'tabpanel',
            plain:true,
            activeTab: 0,
            height:235,
            defaults:{
                bodyPadding: 10
            },
            items:[{
                title:'Additional Details',
                defaults: {
                    width: 900
                },
                defaultType: 'textfield',
                items:[{
                    xtype: 'container',
                    anchor: '100%',
                    layout: 'hbox',
                    items:[{
                        xtype: 'container',
                        flex: 1,
                        layout: 'anchor',
                        items: [{
                            xtype:'textfield',
                            fieldLabel: 'First Name',
                            allowBlank: false,
                            name: 'first',
                            anchor:'95%'
                        }, {
                            xtype:'textfield',
                            fieldLabel: 'Company',
                            name: 'company',
                            anchor:'95%'
                        }]
                    },{
                        xtype: 'container',
                        flex: 1,
                        layout: 'anchor',
                        items: [{
                            xtype:'textfield',
                            fieldLabel: 'Last Name',
                            allowBlank: false,
                            name: 'last',
                            anchor:'100%'
                        },{
                            xtype:'textfield',
                            fieldLabel: 'Email',
                            allowBlank: false,
                            name: 'email',
                            vtype:'email',
                            anchor:'100%'
                        }]
                    }]
                }]

                /*items: [{
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
                }]*/
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
            }]}]
})