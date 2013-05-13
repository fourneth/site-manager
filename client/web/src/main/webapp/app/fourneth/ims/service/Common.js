Ext.define('fourneth.ims.service.Common', {

    statics : {
        alreadyLoggedIn : function() {
            var item = window.localStorage.getItem('ims.loggedInUser');
            return item != null;
        },

        storeLoginDetails : function (employee) {
            window.localStorage.setItem('ims.loggedInUser', employee);
        },

        goToHomePage : function (controller) {
            window.location = window.location;
        }
    }
});