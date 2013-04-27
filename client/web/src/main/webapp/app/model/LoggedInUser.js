Ext.define('CECBLayout.model.LoggedInUser' ,
    {
        statics : {
            permissions : {
                'view.user.list.username.view' : false,
                'view.user.list.password.view' : false,
                'general.permission'           : false
            },

            views : {},

            isAllowed : function(expectedRole) {
                var given = this.statics().permissions[expectedRole];
                return given != null;
            },

            isNotAllowed : function(expectedRole) {
                var given = this.statics().permissions[expectedRole];
                return given == null;
            }
        }
    });