app.controller('mainCtrl', [ '$scope', '$rootScope', 'cookie', function($scope, $rootScope, cookie) {

	$scope.initialize = function(){
		$scope.is_user_logged_in();
	};

	$scope.setMainContentUrl = function(url){
		$scope.is_user_logged_in();
		$scope.contentUrl = url;
	}

	$scope.is_user_logged_in = function () {
		$rootScope.userPrivileges = [];
		$rootScope.userName = '';
		$scope.userProfile = false;
		$scope.isRole = false;

		if(cookie.getCookieId("auth-token") == undefined)
		{
			$scope.contentUrl = "source/views/google-map.html";
		}
		else
		{
			$rootScope.userPrivileges = cookie.getCookieId('user-privilege');
			$rootScope.userName = cookie.getCookieId('user-name');
			$scope.userProfile = true;
			$scope.isUserRole = isRole();
			$scope.isUserAddRole = isAddRole();
			$scope.isUserUpdateRole = isUpdateRole();
			$scope.contentUrl = 'source/views/dashboard.html';
		}
	}

	function isUserRolePrivilegeExist ( privilege ) {
		return ($scope.userPrivileges.indexOf(privilege) != -1)
	}

	function isAddRole () {
		if (isUserRolePrivilegeExist('Add privilege')
				|| isUserRolePrivilegeExist('Add role')
					|| isUserRolePrivilegeExist('Delete privilege')
						|| isUserRolePrivilegeExist('Delete role')
							|| isUserRolePrivilegeExist('Edit privilege')
								|| isUserRolePrivilegeExist('Edit role')
									|| isUserRolePrivilegeExist('Read privilege')
										|| isUserRolePrivilegeExist('Read role')) {

			return true;
		}

		return false;
	}

	function isUpdateRole () {
		if (isUserRolePrivilegeExist('Update role privilege') || isUserRolePrivilegeExist('Update user role')) {
			return true;
		}

		return false;
	}

	function isRole () {
		if (isAddRole() || isUpdateRole()) {
			return true;
		}

		return false;
	}
} ]);