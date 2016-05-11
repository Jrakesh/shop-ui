app.controller('mainCtrl', [ '$scope', 'cookie', function($scope, cookie) {

	$scope.contentUrl = "source/views/startegy.html";

	$scope.initialize = function(){
		if(cookie.getCookieId("auth-token") == undefined)
		{
			$scope.contentUrl = "source/views/startegy.html";
		}
	 	else
		{
			$scope.contentUrl = 'source/views/clear-user-data.html';
		}
	};

	$scope.setMainContentUrl = function(url){
		$scope.contentUrl = url;
	}
} ]);