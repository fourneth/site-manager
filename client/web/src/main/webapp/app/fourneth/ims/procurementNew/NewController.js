Ext.define('fourneth.ims.procurementNew.NewController', {
    extend :
        'Ext.app.Controller',

    models :
        ['fourneth.ims.procurementNew.NewDetail'],

    views :
        ['fourneth.ims.procurementNew.NewForm'],

    refs :
        [ { ref: 'newProc', selector: 'newProc' } ],

    //==========================================================================================================
    int: function()
    {
    grid: Ext.create('Ext.grid.Panel', {
        store: Ext.create('Ext.data.Store', {
            autoDestroy: true,
            model: 'Employee',
            proxy:
                {
                    type: 'memory'
                },
            data: (function(){
                    var lasts = ['Jones', 'Smith', 'Lee', 'Wilson', 'Black', 'Williams', 'Lewis', 'Johnson', 'Foot', 'Little', 'Vee', 'Train', 'Hot', 'Mutt'],
                        firsts = ['Fred', 'Julie', 'Bill', 'Ted', 'Jack', 'John', 'Mark', 'Mike', 'Chris', 'Bob', 'Travis', 'Kelly', 'Sara'],
                        lastLen = lasts.length,
                        firstLen = firsts.length,
                        usedNames = {},
                        data = [],
                        s = new Date(2007, 0, 1),
                        now = new Date(),
                        getRandomInt = Ext.Number.randomInt,

                        generateName = function()
                        {
                            var name = firsts[getRandomInt(0, firstLen - 1)] + ' ' + lasts[getRandomInt(0, lastLen - 1)];
                            if (usedNames[name])
                            {
                                return generateName();
                            }
                            usedNames[name] = true;
                            return name;
                        };

                    while (s.getTime() < now.getTime())
                    {
                        var ecount = getRandomInt(0, 3);
                        for (var i = 0; i < ecount; i++)
                        {
                            var name = generateName();
                            data.push
                            (
                                {
                                start : Ext.Date.add(Ext.Date.clearTime(s, true), Ext.Date.DAY, getRandomInt(0, 27)),
                                name : name,
                                email: name.toLowerCase().replace(' ', '.') + '@sencha-test.com',
                                active: getRandomInt(0, 1),
                                salary: Math.floor(getRandomInt(35000, 85000) / 1000) * 1000
                                }
                            );
                        }
                        s = Ext.Date.add(s, Ext.Date.MONTH, 1);
                    }

                    return data;
                })(),
            sorters:
                [
                    {
                        property: 'start',
                        direction: 'ASC'
                    }
                ]
        }),
        plugins: [Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToMoveEditor: 1,
            autoCancel: false
        })],
        listeners:
        {
            'selectionchange': function(view, records)
            {
                grid.down('#removeEmployee').setDisabled(!records.length);
            }
        }
    })
}
})


