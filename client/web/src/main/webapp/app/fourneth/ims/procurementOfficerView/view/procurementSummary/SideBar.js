Ext.define('fourneth.ims.procurementOfficerView.view.procurementSummary.SideBar',{
    extend:'Ext.view.View',
    alias:'widget.sideBarProcurementOfficer',

    initComponent:function(){
        Ext.apply(this, {
            id: 'sideBarProcurementOfficer',

            dock: 'left',
            width: 180,
            border: false,
            cls: 'sidebar-list',

            selModel: {
                deselectOnContainerClick: false
            },

            store: '',
            itemSelector: '.product',
            tpl: [
                '<div class="sideBarProcurementOfficer-title">Approved</div>',
                '<tpl for=".">',
                '<div class="product">{name}</div>',
                '</tpl>'
            ]
        });

        this.callParent(arguments);
    }
})