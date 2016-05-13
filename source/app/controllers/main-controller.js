app.controller('mainCtrl', [ '$scope', 'cookie', function($scope, cookie) {

	$scope.contentUrl = "source/views/google-map.html";

	$scope.initialize = function(){
		$scope.contentUrl = "source/views/google-map.html";
	};

	$scope.setMainContentUrl = function(url){
		$scope.contentUrl = url;
	}
} ]);