Ext.define('fourneth.ims.procurementNew.NewForm',{
    extend:'Ext.form.FormPanel',
    alias: 'widget.newProc',
    id:'newProc',
    nam:'newProc',
    renderTo: 'editor-grid',
    width: 600,
    height: 400,
    title: 'Employee Salaries',
    frame: true,

    initComponent:function() {

        this.items =
        [
             columns =
             [
                 {
                     header: 'Name',
                     dataIndex: 'name',
                     flex: 1,
                     editor:
                 {
                 // defaults to textfield if no xtype is supplied
                 allowBlank: false
                 }
                 },
                 {
                     header: 'Email',
                     dataIndex: 'email',
                     width: 160,
                     editor:
                         {
                             allowBlank: false,
                             vtype: 'email'
                         }
                 },
                 {
                     xtype: 'datecolumn',
                     header: 'Start Date',
                     dataIndex: 'start',
                     width: 90,
                     editor:
                     {
                         xtype: 'datefield',
                         allowBlank: false,
                         format: 'm/d/Y',
                         minValue: '01/01/2006',
                         minText: 'Cannot have a start date before the company existed!',
                         maxValue: Ext.Date.format(new Date(), 'm/d/Y')
                     }
                 },
                 {
                     xtype: 'numbercolumn',
                     header: 'Salary',
                     dataIndex: 'salary',
                     format: '$0,0',
                     width: 90,
                     editor:
                     {
                         xtype: 'numberfield',
                         allowBlank: false,
                         minValue: 1,
                         maxValue: 150000
                     }
                 },
                 {
                     xtype: 'checkcolumn',
                     header: 'Active?',
                     dataIndex: 'active',
                     width: 60,
                     editor:
                     {
                         xtype: 'checkbox',
                         cls: 'x-grid-checkheader-editor'
                     }
                 }
             ],
             tbar =
             [
                 {
                     text: 'Add Employee',
                     iconCls: 'employee-add',
                     handler : function()
                     {
                         rowEditing.cancelEdit();
                         // Create a model instance
                         var r = Ext.create('Employee',
                         {
                             name: 'New Guy',
                             email: 'new@sencha-test.com',
                             start: new Date(),
                             salary: 50000,
                             active: true
                         });
                         store.insert(0, r);
                         rowEditing.startEdit(0, 0);
                     }
                 },
                 {
                     itemId: 'removeEmployee',
                     text: 'Remove Employee',
                     iconCls: 'employee-remove',
                     handler: function()
                     {
                         var sm = grid.getSelectionModel();
                         rowEditing.cancelEdit();
                         store.remove(sm.getSelection());
                         if (store.getCount() > 0)
                         {
                            sm.select(0);
                         }
                     },
                     disabled: true
                 }
             ]
        ]
        this.callParent(arguments);
    }


})