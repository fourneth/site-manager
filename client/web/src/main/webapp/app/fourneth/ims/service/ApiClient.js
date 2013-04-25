Ext.define('fourneth.ims.service.ApiClient', {

    statics : {
        loginRequest : function (request) {

            console.log('sending ajax request to api');

            var response = null;

            Ext.Ajax.request({
                url: '/ims/login',
                form : 'post_form',
                method : 'POST',
                async : false,
                headers : {
                    'Content-Type' : 'application/json'
                },
                params : request ,
                success : function (resp) {
                    console.log("login response ", resp.responseText);
                    response = resp;
                }
            });

            console.log('ajax request sent', Ext.decode(response.responseText).id);

            return {permissions : {}, success : request['username'] == 'dgm@cecb.lk'}
        }
    }
});

