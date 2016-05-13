app.controller('googleMapCtrl', [ '$scope', function($scope) {
	$scope.mainContentUrl = "source/views/home.html";

	$scope.setPageMainContent = function(mainPageUrl) {
		$scope.mainContentUrl = mainPageUrl;
	};
} ]);