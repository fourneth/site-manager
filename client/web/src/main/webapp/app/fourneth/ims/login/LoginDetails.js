Ext.define('LoginDetails', {
    extend :
        'Ext.data.Model',

    statics : {
        permissions : {
            'view.user.list.username.view' : false,
            'view.user.list.password.view' : false,
            'general.permission'           : false
        },

        isAllowed : function(expectedRole) {
            var given = this.statics().permissions[expectedRole];
            return given != null;
        },

        isNotAllowed : function(expectedRole) {
            var given = this.statics().permissions[expectedRole];
            return given == null;
        }
    }

    fields :
        [{name: 'username'}, {name : 'password'}]
});