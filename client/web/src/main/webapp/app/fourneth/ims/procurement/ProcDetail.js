Ext.define('ProcDetail', {
    extend :
        'Ext.data.Model',

    fields :
        [{name:'first'}, {name:'company'},{name:'last'}, {name:'email'},
         {name:'firstn'},{name:'lastn'},{name:'companyn'},{name:'emailn'},
         {name:'home'},{name:'business'},{name:'mobile'},{name:'fax'}
        ]
   /* fields :
        [{name: 'username'}, {name : 'password'}]*/
})