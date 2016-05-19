app.controller('userCtrl',['$scope', '$rootScope', 'Restangular','userServices', 'helper', 'toastr', 'cookie', 'localStorageService','APP_CONSTANT', '$interval', function ($scope, $rootScope, Restangular, userServices, helper, toastr, cookie, localStorageService, APP_CONSTANT, $interval){
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

    $scope.signIn = function(email, password) {
        $scope.isDisabled = true;
        angular.element(document.getElementsByClassName('spinner-section')).removeClass('hidden-section');
        helper.startSpin();
        var data = {
            email: email,
            password: password
        };
        userServices.login(Restangular).post(data).then(function (response) {
            if (response.data) {
                var user_response = response.data;
                $rootScope.userPrivileges = user_response.privileges;
                cookie.set('auth-token', user_response.authentication_token);
                cookie.set('user-privilege', user_response.privileges);
                cookie.set('user-name', user_response.user.first_name + ' ' +  user_response.user.last_name);
                helper.stopSpin();
                toastr.success("Successfully login");
                $scope.setMainContentUrl("source/views/dashboard.html");
                location.reload();
            }
            if (response.status == -1) {
                angular.element(document.getElementsByClassName('spinner-section')).addClass('hidden-section');
                helper.stopSpin();
                toastr.error(response.error.message);
                $scope.isDisabled = false;
            }
        });
	};
    $scope.signUp = function (first_name, last_name, email, password, dob, sex) {
        $scope.isDisabled = true;
        helper.startSpin();
        var dob_split = dob.split("-");
        var date_of_birth = dob_split[2] + "/" + dob_split[1] + "/" + dob_split[0];
        var data= {
            first_name: first_name,
            last_name: last_name,
            sex: sex,
            date: date_of_birth,
            email: email,
            password: password
        };
        userServices.signup(Restangular).post(data).then(function(response) {
            if(response.status == 0){
        		helper.stopSpin();
				toastr.success(response.data.message);
                $scope.setMainContentUrl("source/views/user/signin.html");
			}
			if(response.status == -1){
				helper.stopSpin();
                toastr.error(response.error.message);
                $scope.isDisabled = false;
			}
        })
    };

    $scope.logout = function() {
        $scope.isDisabled = true;
        helper.startSpin();
        userServices.logout(Restangular).get().then(function (response) {
            localStorageService.clearAll();
            cookie.remove("auth-token");
            cookie.remove("user-privilege");
            cookie.remove("user-name");
            toastr.success(response.data.message);
            helper.stopSpin();
            $scope.setMainContentUrl("source/views/google-map.html");
            location.reload();
        });
    };

    //
    // $scope.forgotPassword = function(email) {
    //     $scope.isDisabled = true;
    //     angular.element(document.getElementsByClassName('spinner-section')).removeClass('hidden-section');
    //     helper.startSpin();
    //     var emailData = {
    //             email: email
    //     };
    //     userServices.resetPassword(Restangular).post(emailData).then(function (response) {
    //         if(response.status == 0) {
    //             toastr.success(response.data.message);
    //             helper.stopSpin();
    //             $scope.setPageMainContent('source/views/mail-sent-acknowledgement.html');
    //         }
    //         else {
    //             helper.stopSpin();
    //             toastr.error(response.error.message);
    //             $scope.isDisabled = false;
    //         }
    //     });
    // };

}]);
