Ext.require([
    'Ext.window.Window',
    'Ext.chart.*'
]);

Ext.onReady(function () {
    var chart;
    var generateData = (function() {
        var data = [], i = 0,
            last = false,
            date = new Date(2011, 1, 1),
            seconds = +date,
            min = Math.min,
            max = Math.max,
            random = Math.random;
        return function() {
            data = data.slice();
            data.push({
                date:  Ext.Date.add(date, Ext.Date.DAY, i++),
                visits: min(100, max(last? last.visits + (random() - 0.5) * 20 : random() * 100, 0)),
                views: min(100, max(last? last.views + (random() - 0.5) * 10 : random() * 100, 0)),
                veins: min(100, max(last? last.veins + (random() - 0.5) * 20 : random() * 100, 0))
            });
            last = data[data.length -1];
            return data;
        };
    })();

    var group = false,
        groupOp = [{
            dateFormat: 'M d',
            groupBy: 'year,month,day'
        }, {
            dateFormat: 'M',
            groupBy: 'year,month'
        }];

    function regroup() {
        group = !group;
        var axis = chart.axes.get(1),
            selectedGroup = groupOp[+group];
        axis.dateFormat = selectedGroup.dateFormat;
        axis.groupBy = selectedGroup.groupBy;

        chart.redraw();
    }

    var store = Ext.create('Ext.data.JsonStore', {
        fields: ['date', 'visits', 'views', 'veins'],
        data: generateData()
    });

    var intr = setInterval(function() {
        var gs = generateData();
        var toDate = timeAxis.toDate,
            lastDate = gs[gs.length - 1].date,
            markerIndex = chart.markerIndex || 0;
        if (+toDate < +lastDate) {
            markerIndex = 1;
            timeAxis.toDate = lastDate;
            timeAxis.fromDate = Ext.Date.add(Ext.Date.clone(timeAxis.fromDate), Ext.Date.DAY, 1);
            chart.markerIndex = markerIndex;
        }
        store.loadData(gs);
    }, 100);

    Ext.create('Ext.Window', {
        width: 800,
        height: 600,
        minHeight: 400,
        minWidth: 550,
        maximizable: true,
        title: 'Live Updated Chart',
        layout: 'fit',
        items: [{
            xtype: 'chart',
            style: 'background:#fff',
            store: store,
            id: 'chartCmp',
            axes: [{
                type: 'Numeric',
                grid: true,
                minimum: 0,
                maximum: 100,
                position: 'left',
                fields: ['views', 'visits', 'veins'],
                title: 'Number of Hits',
                grid: {
                    odd: {
                        fill: '#dedede',
                        stroke: '#ddd',
                        'stroke-width': 0.5
                    }
                }
            }, {
                type: 'Time',
                position: 'bottom',
                fields: 'date',
                title: 'Day',
                dateFormat: 'M d',
                groupBy: 'year,month,day',
                aggregateOp: 'sum',

                constrain: true,
                fromDate: new Date(2011, 1, 1),
                toDate: new Date(2011, 1, 7)
            }],
            series: [{
                type: 'line',
                axis: ['left', 'bottom'],
                xField: 'date',
                yField: 'visits',
                label: {
                    display: 'none',
                    field: 'visits',
                    renderer: function(v) { return v >> 0; },
                    'text-anchor': 'middle'
                },
                markerConfig: {
                    radius: 5,
                    size: 5
                }
            },{
                type: 'line',
                axis: ['left', 'bottom'],
                xField: 'date',
                yField: 'views',
                label: {
                    display: 'none',
                    field: 'visits',
                    renderer: function(v) { return v >> 0; },
                    'text-anchor': 'middle'
                },
                markerConfig: {
                    radius: 5,
                    size: 5
                }
            },{
                type: 'line',
                axis: ['left', 'bottom'],
                xField: 'date',
                yField: 'veins',
                label: {
                    display: 'none',
                    field: 'visits',
                    renderer: function(v) { return v >> 0; },
                    'text-anchor': 'middle'
                },
                markerConfig: {
                    radius: 5,
                    size: 5
                }
            }]
        }]
    }).show();
    chart = Ext.getCmp('chartCmp');
    var timeAxis = chart.axes.get(1);
});
