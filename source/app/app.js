var app = angular.module('app', [
    'ngAnimate',
    'ngCookies',
    'angularModalService',
    'restangular',
    'base64',
	'toastr',
	'angularSpinner',
	'LocalStorageModule',
    'ngDialog',
    'constantMessage',
    'nsPopover',
    '720kb.datepicker',
	'ngMessages'
]);

app.run(['Restangular','$location', 'cookie', function(Restangular, $location, cookie) {
    Restangular.oneUrl('baseURL', $location.$$absUrl.split('#')[0] + 'package.json').get().then(function (response){
		Restangular.setBaseUrl(response.baseURL);
		Restangular.setDefaultHeaders({
			'Content-Type' : 'application/json',
			'Access-Control-Allow-Origin' : '*',
			'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE',
			'Access-Control-Allow-Headers' : 'Accept, X-Requested-With',
			'Api-Key' : '1e26686d806d82144a71ea9a99d1b3169adaad917',
			'Authentication-Token' : cookie.getCookieId('auth-token')
		});
	})
}]);

// for local storage configuration

app.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('app')
    .setStorageType('localStorage')
    .setNotify(true, true)
});

var constantMessageList = angular.module('constantMessage', []);
constantMessageList.constant('APP_CONSTANT',{
	FLOW_SUCCESS: 'New flow created',
	SAVE_SUCCESS: 'Successfully saved',
	FURTHER_OPERATION: 'You need to signin to continue in more details',
	DUPLICATE_OPTION: 'Option keys and values cannot be same.',
	DUPLICATE_SEQUENCE: 'Sequence cannot be same and should be in range',
	NEED_OPTION: 'Atleast one option needed.',
	ADD_SUCCESS: 'Successfully Added',
	SELECTION_INFO: 'If you are selected dependent answer questionnaire then question should be selected by you.',
	DELETE_SUCCESS: 'Successfully deleted',
	EDIT_SUCCESS: 'Successfully edited',
	ERROR: 'Something went wrong.',
	INVALID_RANGE: 'Starting point should be less than ending point',
	CREATE_QUESTION: 'Question should be created'
});
