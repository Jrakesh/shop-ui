app.controller('userCtrl',['$scope','Restangular','userServices', 'helper', 'toastr', 'cookie', 'localStorageService','APP_CONSTANT', '$interval', function ($scope, Restangular, userServices, helper, toastr, cookie, localStorageService, APP_CONSTANT, $interval){
    $scope.isDisabled = false;

    $scope.init = function () {
        alert("Hiii...");
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
                if (localStorageService.isSupported) {
                    localStorageService.set(name, (response.data.first_name + ' ' + response.data.last_name));
                }
                cookie.set('auth-token', response.data.authentication_token);
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
				if(response.error.code == -104)
				{
					toastr.error(response.error.message);
				}
                $scope.isDisabled = false;
			}
        })
    };

    $scope.logout = function() {
        helper.startSpin();
        userServices.logout(Restangular).get().then(function (response) {
            localStorageService.clearAll();
            cookie.remove("auth-token");
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
