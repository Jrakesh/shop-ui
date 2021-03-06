app.controller('shopCtrl',['$scope','Restangular','shopServices', 'toastr', 'ngDialog', function ($scope, Restangular, shopServices, toastr, ngDialog){
    $scope.isDisabled = false;

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
                location.reload();
            } else {
                toastr.error(response.error.message);
            }
        });
    };

    $scope.delete = function(shop_id) {
        ngDialog.openConfirm({
            template: 'confirmationPopUp'
        }).then(
            function(value) {
                //You need to implement the saveForm() method which should return a promise object
                var data = {
                    id: shop_id
                };
                shopServices.delete(Restangular).post(data).then(function (response) {
                    if (response.status == 0) {
                        var shop_details = [];
                        $scope.shop_details_for_table.forEach(function(shop, index) {
                            if (shop.id != shop_id) {
                                shop_details.push(shop);
                            }
                        });
                        $scope.shop_details_for_table = shop_details;
                        toastr.success(response.data.message);
                    } else {
                        toastr.error(response.error.message);
                    }
                });
            },
            function(value) {
                //Cancel or do nothing
            }
        );
    }

    $scope.edit = function(shop_id) {
        for (i = 0; i < $scope.shop_details_for_table.length; i++) {
            if ($scope.shop_details_for_table[i].id == shop_id) {
                $scope.edit_shop = $scope.shop_details_for_table[i];
                break;
            }
        }

        var shop_before_edit = angular.copy($scope.shop_details_for_table);

        ngDialog.openConfirm({
            template: 'updatePopUp',
            scope: $scope
            }).then(
                function(value) {
                    //You need to implement the saveForm() method which should return a promise object
                    var data = {
                        id: shop_id,
                        name: $scope.edit_shop.name,
                        address: $scope.edit_shop.address,
                        latitude: $scope.edit_shop.latitude,
                        longitude: $scope.edit_shop.longitude
                    };
                    shopServices.edit(Restangular).post(data).then(function (response) {
                        if (response.status == 0) {
                            for (i = 0; i < $scope.shop_details_for_table.length; i++) {
                                if ($scope.shop_details_for_table[i].id == shop_id) {
                                    $scope.shop_details_for_table[i] = $scope.edit_shop;
                                    break;
                                }
                            }
                            toastr.success(response.data.message);
                        } else {
                            toastr.error(response.error.message);
                        }
                    });
                },
            function(value) {
                //Cancel or do nothing
                $scope.shop_details_for_table = shop_before_edit;
            }
        );
    }

    $scope.createShopTable = function () {
        $scope.shop_details_for_table.forEach(function(shop, index) {
            var shop_detail = [];
            var merge_address_and_name = "<h5> " + shop.name + " </h5><p> " + shop.address + "</p>";
            shop_detail.push(merge_address_and_name);
            shop_detail.push(parseFloat(shop.latitude));
            shop_detail.push(parseFloat(shop.longitude));
            shop_detail.push(index + 1);
            $scope.shop_details.push(shop_detail);
        });
    }

    $scope.init = function() {
        shopServices.get_all_details(Restangular).get().then(function (response) {
            if (response.status == 0) {
                if (response.data.length) {
                    $scope.shop_details = [];
                    $scope.shop_details_for_table = response.data;
                    $scope.createShopTable();
                    document.getElementById("map-canvas").innerHTML = "";

                    var locations = $scope.shop_details;
                    var map = new google.maps.Map(document.getElementById('map-canvas'), {
                        zoom: 10,
                        center: new google.maps.LatLng(-39.92, 151.25),
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    });
                    var infowindow = new google.maps.InfoWindow();
                    var marker, i;
                    var markers = new Array();
                    for (i = 0; i < locations.length; i++) {
                        marker = new google.maps.Marker({
                            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                            map: map
                        });
                        markers.push(marker);
                        google.maps.event.addListener(marker, 'click', (function(marker, i) {
                            return function() {
                                infowindow.setContent(locations[i][0]);
                                infowindow.open(map, marker);
                            }
                        })(marker, i));
                    }
                    function AutoCenter() {
                        //  Create a new viewpoint bound
                        var bounds = new google.maps.LatLngBounds();
                        //  Go through each...
                        $.each(markers, function (index, marker) {
                            bounds.extend(marker.position);
                        });
                        //  Fit these bounds to the map
                        map.fitBounds(bounds);
                    }
                    AutoCenter();
                } else {
                    var div = document.getElementById('map-canvas');
                    div.innerHTML = div.innerHTML + '<h2 class="text-warning">No shop available to show on map. Please add at least one shop.</h2>';
                }
            } else {
                toastr.error(response.error.message);
            }
        });
    };
}]);
