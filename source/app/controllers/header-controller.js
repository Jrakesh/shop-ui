app.controller('headerCtrl', [ '$scope', function($scope) {

	$scope.menus = [ {
		name : 'Home',
		url : 'source/views/home.html',
		classes : 'active',
		iconClasses : 'fa fa-home'
	},
	{
		name : 'Contact',
		url : 'source/views/contact.html',
		classes : '',
		iconClasses : 'fa fa-phone-square'
	}, 
	{
		name : 'Login',
		url : 'source/views/signin.html',
		classes : '',
		iconClasses : 'fa fa-sign-in'
	} ];

} ]);
