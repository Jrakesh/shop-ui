app.factory('roleServices', function () {
    return{
        create: function(Restangular)
        {
            return Restangular.service('shops/create');
        },
        get_all_details: function (Restangular)
        {
            return Restangular.one('shops/get_all_details');
        },
        delete: function (Restangular)
        {
            return Restangular.service("shops/delete");
        },
        edit: function (Restangular)
        {
            return Restangular.service("shops/edit");
        }
    }
});
