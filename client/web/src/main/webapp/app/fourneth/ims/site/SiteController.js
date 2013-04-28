Ext.define('fourneth.ims.site.SiteController',{
    extend:'Ext.app.Controller',

    views:[
        'fourneth.ims.site.SiteEdit',
        'fourneth.ims.site.SiteList',
        'fourneth.ims.view.layout.Menubar'
    ],
    srotes:['fourneth.ims.site.SiteStore'],
    models:['fourneth.ims.site.SiteModel'],

    init:function(){
        this.control({
            'north button[action=siteAdd]' : {
                click : this.addSite
            },
            'siteEdit button[action=siteSave]' : {
                click : this.updateSite
            },
            'siteList' : {
                itemdblclick : this.editSite
            }
        }
        )
    },
    editSite : function(grid, record) {
        var view = Ext.widget('siteEdit');
        view.down('form').loadRecord(record);
    },
    addSite : function(button) {
        var view = Ext.widget('siteEdit');
    },
    updateSite : function(button) {
        var win = button.up('form');
        var form1 = win.down('form').getForm();
        //check of the form has any errors
        if (form1.isValid()) {
            //get the record
            var record = form1.getRecord();
            console.log('record is '+record+'')
            //get the form values
            var values = form1.getValues();
            console.log('record is '+values+'')
            //if a new record
            if(!record){
                console.log('start newRecord is');
                var newRecord = new fourneth.ims.site.SiteModel(values);
                this.getStore('fourneth.ims.site.SiteStore').add(newRecord);
            }
            //existing record
            else {
                record.set(values);
            }
            win.close();
            //save the data to the Web local Storage
            //            this.getProductsStore().sync();
            //                this.getUsersStore().sync();
            this.getStore('fourneth.ims.site.SiteStore').sync();
        }
    }
})