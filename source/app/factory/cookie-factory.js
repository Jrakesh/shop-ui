app.factory('cookie', ['$cookies', function ($cookies) {
        var key ;
        return {
            key : key,
            set: function (key,value) {
                $cookies.put(key, value);
            },
            getCookieId:function(key){
                var value = $cookies.get(key);
                return value;
            },
            remove: function (key) {
                $cookies.remove(key);
            },
            exist: function(key) {
                if(typeof(this.getCookieId(key))=='undefined') {
                    return false;
                }
                return true;
            }
        };
    }])
;