app.controller('authCtrl',['$scope','Restangular','userServices', 'helper', 'toastr', 'cookie', 'localStorageService','APP_CONSTANT', function ($scope, Restangular, userServices, helper, toastr, cookie, localStorageService, APP_CONSTANT){
    $scope.isDisabled = false;

    $scope.signIn = function(email, password) {
        $scope.isDisabled = true;
        angular.element(document.getElementsByClassName('spinner-section')).removeClass('hidden-section');
        helper.startSpin();
        var data = {
            email: email,
            password: password,
            guest_auth_token: (cookie.getCookieId('guest-token'))
        };
        userServices.login(Restangular).post(data).then(function (response) {
            if (response.data) {
                if (localStorageService.isSupported) {
                    localStorageService.set(name, (response.data.first_name + ' ' + response.data.last_name));
                }
                cookie.remove("guest-token");
                cookie.set('auth-token', response.data.authentication_token);
                cookie.set('is_admin', response.data.is_admin);
                helper.stopSpin();
                $scope.setMainContentUrl("source/views/clear-user-data.html");
            }
            if (response.status == -1) {
                angular.element(document.getElementsByClassName('spinner-section')).addClass('hidden-section');
                helper.stopSpin();
                if (response.error.code == -106) {
                    toastr.error(response.error.message);
                }
                $scope.isDisabled = false;
            }
        });
	};

	$scope.signUp = function (firstname, email, password) {
        $scope.isDisabled = true;
        helper.startSpin();
        var data= {
		email: email,
                password: password,
                first_name: firstname,
				is_admin: 0
        };
        userServices.data(Restangular).post(data).then(function(response) {

            if(response.status == 0){
        		helper.stopSpin();
				toastr.success(response.data.message);
        		$scope.signIn(email, password);
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
            cookie.remove("is_admin");
            cookie.remove("admin-portal");
            cookie.remove("new-flow-token");
            helper.stopSpin();
            $scope.setMainContentUrl("source/views/startegy.html");
        });
    };

    $scope.forgotPassword = function(email) {
        $scope.isDisabled = true;
        angular.element(document.getElementsByClassName('spinner-section')).removeClass('hidden-section');
        helper.startSpin();
        var emailData = {
                email: email
        };
        userServices.resetPassword(Restangular).post(emailData).then(function (response) {
            if(response.status == 0) {
                toastr.success(response.data.message);
                helper.stopSpin();
                $scope.setPageMainContent('source/views/mail-sent-acknowledgement.html');
            }
            else {
                helper.stopSpin();
                toastr.error(response.error.message);
                $scope.isDisabled = false;
            }
        }); 
    };

}]);
