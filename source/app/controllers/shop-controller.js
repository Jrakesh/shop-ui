app.controller('shopCtrl',['$scope','Restangular','shopServices', 'toastr', function ($scope, Restangular, shopServices, toastr){
    $scope.isDisabled = false;

    var cities = [
        {
            city : 'Location 1',
            desc : 'Test',
            lat : 52.238983,
            long : -0.888509
        },
        {
            city : 'Location 2',
            desc : 'Test',
            lat : 52.238168,
            long : -52.238168
        },
        {
            city : 'Location 3',
            desc : 'Test',
            lat : 52.242452,
            long : -0.889882
        },
        {
            city : 'Location 4',
            desc : 'Test',
            lat : 52.247234,
            long : -0.893567
        },
        {
            city : 'Location 5',
            desc : 'Test',
            lat : 52.241874,
            long : -0.883568
        }
    ];

    $scope.create = function(name, address, latitude, longitude) {
        var data = {
            name: name,
            address: address,
            latitude: latitude,
            longitude: longitude
        };
        shopServices.create(Restangular).post(data).then(function (response) {
            if (response.status == 0) {
                toastr.success(response.data.message);
            } else {
                toastr.error(response.error.message);
            }
        });

    };

    $scope.init = function() {
        // shopServices.get_all_details(Restangular).get().then(function (response) {
        //     if (response.status == 0) {
        //         console.log(response.data);
        //     } else {
        //         toastr.error(response.error.message);
        //     }
        // });
        alert('hi');
        function initialize() {
            var mapProp = {
                center:new google.maps.LatLng(51.508742,-0.120850),
                zoom:5,
                mapTypeId:google.maps.MapTypeId.ROADMAP
            };
            var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    };
}]);
