/**
 * Layout class for {@link Ext.form.field.ComboBox} fields. Handles sizing the input field.
 * @private
 */
Ext.define('Ext.layout.component.field.ComboBox', {
    extend: 'Ext.layout.component.field.Trigger',
    alias: 'layout.combobox',
    requires: ['Ext.util.TextMetrics'],

    type: 'combobox',

    startingWidth: null,

    getTextWidth: function () {
        var me = this,
            owner = me.owner,
            store = owner.store,
            field = owner.displayField,
            storeLn = store.data.length,
            value = '',
            i = 0, n = 0, ln, item, width;

        for (; i < storeLn; i++) {
            item = store.getAt(i).data[field];
            ln = item.length;
            // compare the current item's length with the current longest length and store the value
            if (ln > n) {
                n = ln;
                value = item;
            }
        }

        width = Math.max(me.callParent(arguments), owner.inputEl.getTextWidth(value + owner.growAppend));

        // it's important to know the starting width else the inputEl could be resized smaller than the boundlist
        // NOTE that when removing items from the store that the startingWidth needs to be recalculated
        if (!me.startingWidth || owner.removingRecords) {
            me.startingWidth = width;

            // also, if the width is less than growMin reset the default boundlist width
            // or it will appear wider than the component if the trigger is clicked
            if (width < owner.growMin) {
                owner.defaultListConfig.minWidth = owner.growMin;
            }

            owner.removingRecords = false;
        }
 
        // only resize if the new width is greater than the starting width
        return (width < me.startingWidth) ? me.startingWidth : width;
    }
});
