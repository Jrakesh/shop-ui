app.factory('roleServices', function () {
    return{
        get_all_role: function (Restangular)
        {
            return Restangular.one('users_role/get_all_role');
        },
        get_all_privilege: function (Restangular)
        {
            return Restangular.one('users_role/get_all_privilege');
        },
        create_role: function (Restangular)
        {
            return Restangular.service("users_role/create_role");
        },
        create_privilege: function (Restangular)
        {
            return Restangular.service("users_role/create_privilege");
        },
        delete_role: function (Restangular)
        {
            return Restangular.service("users_role/delete_role");
        },
        delete_privilege: function (Restangular)
        {
            return Restangular.service("users_role/delete_privilege");
        },
        edit_role: function (Restangular)
        {
            return Restangular.service("users_role/edit_role");
        },
        edit_privilege: function (Restangular)
        {
            return Restangular.service("users_role/edit_privilege");
        },
        get_user_role: function (Restangular)
        {
            return Restangular.service('users_role/get_user_role');
        },
        change_user_role: function (Restangular)
        {
            return Restangular.service('users_role/change_user_role');
        },
        get_privilege_by_role: function (Restangular)
        {
            return Restangular.service('users_role/get_privilege_by_role');
        },
        change_role_privileges: function (Restangular)
        {
            return Restangular.service('users_role/change_role_privileges');
        }
    }
});
