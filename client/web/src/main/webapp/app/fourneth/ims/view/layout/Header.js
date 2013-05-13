/**
 * The application header displayed at the top of the viewport
 * @extends Ext.Component
 */
Ext.define('fourneth.ims.view.layout.Header', {
    extend: 'Ext.Component',
    
    dock: 'top',
    baseCls: 'app-header',
    
    initComponent: function() {
        Ext.applyIf(this, {
            html: 'Loading Nested Data Example'
        });
                
        this.callParent(arguments);
    }
});