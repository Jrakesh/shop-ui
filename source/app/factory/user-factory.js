app.factory('userServices', function () {
       return{
           login: function(Restangular)
           {
               return Restangular.service('services_without_token/login');
           },
          logout: function (Restangular)
          {
              return Restangular.one('users/logout');
          },
          resetPassword: function (Restangular)
          {
            return Restangular.service('services_without_token/forgot_password');
          },
          data: function(Restangular)
          {
            return Restangular.all('services_without_token/signup');
          }
       }
});
