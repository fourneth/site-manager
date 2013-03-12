Ext.define('App.view.book.DetailPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.detailPanel',
    bookTplMarkup: [
        '<b>Title:</b> {title}<br/>',
        '<b>Pages:</b> {pages}<br/>',
        '<b>No Chapters:</b> {numChapters}<br/>',
        '<b>Topic:</b> {topic}<br/>',
        '<b>Publisher:</b> {publisher}<br/>',
        '<b>ISBN:</b> {isbn}<br/>',
        '<b>ISBN 13:</b> {isbn13}<br/>'],
    startingMarkup: 'Please select a book to see additional details.',
    bodyPadding: 7,
    initComponent: function() {
        this.tpl = Ext.create('Ext.Template', this.bookTplMarkup);
        this.html = this.startingMarkup;
        this.bodyStyle = {
            background: '#ffffff'
        };
        this.callParent(arguments);
    },
    updateDetail: function(data) {
        this.tpl.overwrite(this.body, data);
    }
});