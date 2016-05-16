app.controller('mainCtrl', [ '$scope', 'cookie', function($scope, cookie) {

	$scope.contentUrl = "source/views/google-map.html";

	$scope.initialize = function(){
		$scope.is_user_logged_in();
	};

	$scope.setMainContentUrl = function(url){
		$scope.is_user_logged_in();
		$scope.contentUrl = url;
	}

	$scope.is_user_logged_in = function () {
		if(cookie.getCookieId("auth-token") == undefined)
		{
			$scope.userProfile = false;
			$scope.contentUrl = "source/views/google-map.html";
		}
		else
		{
			$scope.userProfile = true;
			$scope.contentUrl = 'source/views/dashboard.html';
		}
	}
} ]);