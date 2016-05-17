app.controller('roleCtrl',['$scope','Restangular','roleServices', 'helper', 'toastr', 'cookie', 'localStorageService','APP_CONSTANT', function ($scope, Restangular, roleServices, helper, toastr, cookie, localStorageService, APP_CONSTANT){
    $scope.isDisabled = false;

    $scope.init = function () {
        userServices.get_details(Restangular).get().then(function (response) {
            $scope.isDisabled = true;
            helper.startSpin();
            if(response.status == 0){
                console.log(response.data);
                $scope.userProfileInfo = response.data;
                helper.stopSpin();
            }
            if(response.status == -1){
                helper.stopSpin();
                toastr.error(response.error.message);
                $scope.isDisabled = false;
            }
        });
    }
}]);
