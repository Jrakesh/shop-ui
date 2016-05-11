app.factory('shopServices', function () {
    return{
        create: function(Restangular)
        {
            console.log('hi');
            return Restangular.service('shops/create');
        },
        get_all_details: function (Restangular)
        {
            return Restangular.one('shops/get_all_details');
        }
    }
});
