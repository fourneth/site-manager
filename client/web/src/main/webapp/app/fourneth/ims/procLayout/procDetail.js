Ext.define('ProcDetail', {
    extend :
        'Ext.data.Model',

 /*   fields :
        [
            {name:'button'}, {name:'west'},{name:'Setting'}, {name:'Information'},
            {name:'center1'},{name:'center2'},{name:'Property Grid'}
        ]
  */
        fields: [
            'name',
            'email',
            { name: 'start', type: 'date', dateFormat: 'n/j/Y' },
            { name: 'salary', type: 'float' },
            { name: 'active', type: 'bool' }
        ]

})