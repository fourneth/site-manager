Ext.define('CECBLayout.controller.Layouts',{
    extend:'Ext.app.Controller',
    views:[
        'layout.BaseLayout',
        'layout.MenuBar',
        'layout.SouthPanel',
        'layout.EastPanel',
        'layout.WestPanel',
        'layout.CenterPanel',
        'layout.ProcEdit'
    ],
    stores:['Users'],
    models:['User'] ,
    init:function(){
        console.log('controller initialized');
        this.control({
            'container > panel' : {
                render : this.onPanelRendered
            },
            'itemList' : {
                itemdblclick : this.editItem
            },
            'itemList button[action=add]' : {
                click : this.addItem
            },
            'itemEdit button[action=save]' : {
                click : this.updateItem
            },
            'north button[action=add]' : {
                click : this.addItem
            }
        });
    } ,

    onPanelRendered : function() {
        console.log('The panel was rendered');
    },

    editItem : function(grid, record) {
        var view = Ext.widget('itemEdit');
        view.down('form').loadRecord(record);
    },

    updateItem : function(button) {
        var win = button.up('window');
        var form = win.down('form').getForm();
        //check of the form has any errors
        if (form.isValid()) {
            //get the record
            var record = form.getRecord();
            console.log('record is '+record+'')
            //get the form values
            var values = form.getValues();
            console.log('record is '+values+'')
            //if a new record
            if(!record){
                console.log('start newRecord is');
                var newRecord = new CECBLayout.model.User(values);
                console.log('newRecord is '+newRecord+' ');
//                this.getProductsStore().add(newRecord);
                this.getUsersStore().add(newRecord);
//                console.log('this is '+this.getUsersStore().add(newRecord)+' ');

            }
            //existing record
            else {
                record.set(values);
            }
            win.close();
            //save the data to the Web local Storage
//            this.getProductsStore().sync();
            this.getUsersStore().sync();
        }
    },

    addItem : function(button) {
        var view = Ext.widget('itemEdit');
    }},function(){
    console.log("Users Controller created");
})