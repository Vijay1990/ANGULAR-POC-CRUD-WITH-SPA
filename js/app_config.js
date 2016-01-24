ContactApp.config(['$routeProvider',function($routeProvider){	
	$routeProvider.
	when('/contacts',{
		templateUrl: './js/partials/contact-list.html',
		controller: 'ContactCtrl'
	}).
	otherwise({
		redirectTo: '/contacts'
	});
}]);