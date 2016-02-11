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
			templateUrl: 'modules/members/views/membersList.html',
			module: 'MembersApp',
			controller: 'membersCtrl'
		}).
		when('/addMember', {
			templateUrl: 'modules/members/views/addMember.html',
			module: 'MembersApp',
			controller: 'membersCtrl'
		}).
		when('/editMember/:userID', {
			templateUrl: 'modules/members/views/editMember.html',
			module: 'MembersApp',
			controller: 'membersCtrl'
		}).
		when('/unregisterMember/:userID', {
			templateUrl: 'modules/members/views/unregisterMember.html',
			module: 'MembersApp',
			controller: 'membersCtrl'
		}).
		when('/exMembers', {
			templateUrl: 'modules/members/views/exMembersList.html',
			module: 'MembersApp',
			controller: 'membersCtrl'
		}).
		when('/deleteMember/:userID', {
			templateUrl: 'modules/members/views/deleteMember.html',
			module: 'MembersApp',
			controller: 'membersCtrl'
		}).
		otherwise({
			redirectTo: '/dashboard'
		});
}]);
