app.controller('clearUserDataCtrl', ['$scope', 'Restangular', 'questionServices', 'toastr', function($scope, Restangular, questionServices, toastr) {
	$scope.deleteCurrentAnswer = function() {
		questionServices.clear_user_data(Restangular).get().then(function (response) {
			if(response.data) {
				toastr.success(response.data.message);
			}
			else {
				toastr.error("No answer saved.");
			}
		});
	}
	$scope.goToQuestion = function() {
		$scope.setMainContentUrl("source/views/questions.html");
	}
}]);