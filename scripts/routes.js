// define routes
angular.module('MainApp').config(['$routeProvider', function($routeProvider){
//mainApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/dashboard',{
			templateUrl: 'modules/dashboard/views/index.html',
			module: 'DashboardApp',
			controller: 'dashboardCtrl'
		}).
		when('/members', {
			templateUrl: 'modules/members/views/index.html',
			module: 'MembersApp',
			controller: 'membersCtrl'
		}).
		otherwise({
			redirectTo: '/dashboard'
		});
}]);
