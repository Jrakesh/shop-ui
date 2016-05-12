app.factory('guestServices', function () {
       return{
           create_guest_token: function(Restangular)
           {
               return Restangular.one('services_without_token/get_guest_auth_token');
           }
       }
});
