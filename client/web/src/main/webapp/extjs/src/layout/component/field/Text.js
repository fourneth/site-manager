/**
 * Layout class for {@link Ext.form.field.Text} fields. Handles sizing the input field.
 * @private
 */
Ext.define('Ext.layout.component.field.Text', {
    extend: 'Ext.layout.component.field.Field',
    alias: 'layout.textfield',
    requires: ['Ext.util.TextMetrics'],

    type: 'textfield',
    
    canGrowWidth: true,

    beginLayoutCycle: function(ownerContext) {
        var me = this;
        
        me.callParent(arguments);
        
        // Clear height, in case a previous layout cycle stretched it.
        if (ownerContext.shrinkWrap) {
            ownerContext.inputContext.el.setStyle('height', '');
        }
    },

    measureContentWidth: function (ownerContext) {
        var me = this,
            owner = me.owner,
            width = me.callParent(arguments),
            inputContext = ownerContext.inputContext,
            inputEl, value, calcWidth, max, min;

        if (owner.grow && me.canGrowWidth && !ownerContext.state.growHandled) {
            inputEl = owner.inputEl;

            // Find the width that contains the whole text value
            value = Ext.util.Format.htmlEncode(inputEl.dom.value || (owner.hasFocus ? '' : owner.emptyText) || '');
            value += owner.growAppend;
            calcWidth = inputEl.getTextWidth(value) + inputContext.getFrameInfo().width;

            max = owner.growMax;
            min = Math.min(max, width);
            max = Math.max(owner.growMin, max, min);

            // Constrain
            calcWidth = Ext.Number.constrain(calcWidth, owner.growMin, max);
            inputContext.setWidth(calcWidth);
            ownerContext.state.growHandled = true;
            
            // Now that we've set the inputContext, we need to recalculate the width
            inputContext.domBlock(me, 'width');
            width = NaN;
        }
        return width;
    },
    
    publishInnerHeight: function(ownerContext, height) {
        ownerContext.inputContext.setHeight(height - this.measureLabelErrorHeight(ownerContext));
    },

    beginLayoutFixed: function(ownerContext, width, suffix) {
        var me = this,
            ieInputWidthAdjustment = me.ieInputWidthAdjustment;

        if (ieInputWidthAdjustment) {
            // adjust for IE 6/7 strict content-box model
            // RTL: This might have to be padding-left unless the senses of the padding styles switch when in RTL mode.
            me.owner.bodyEl.setStyle('padding-right', ieInputWidthAdjustment + 'px');
            if(suffix === 'px') {
                width -= ieInputWidthAdjustment;
            }
        }

        me.callParent(arguments);
    }
});
