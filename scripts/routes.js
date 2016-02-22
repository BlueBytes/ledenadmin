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
			controller: 'membersListCtrl'
		}).
		when('/newMember', {
			templateUrl: 'modules/members/views/member.html',
			module: 'MembersApp',
			controller: 'memberCtrl'
		}).
		when('/editMember/:userID', {
			templateUrl: 'modules/members/views/member.html',
			module: 'MembersApp',
			controller: 'memberCtrl'
		}).
		when('/viewMember/:userID', {
			templateUrl: 'modules/members/views/member.html',
			module: 'MembersApp',
			controller: 'memberCtrl'
		}).
		when('/unregisterMember/:userID', {
			templateUrl: 'modules/members/views/unregisterMember.html',
			module: 'MembersApp',
			controller: 'unregisterMemberCtrl'
		}).
		when('/exMembers', {
			templateUrl: 'modules/members/views/exMembersList.html',
			module: 'MembersApp',
			controller: 'membersListCtrl'
		}).
		when('/deleteMember/:userID', {
			templateUrl: 'modules/members/views/deleteMember.html',
			module: 'MembersApp',
			controller: 'deleteMemberCtrl'
		}).
		otherwise({
			redirectTo: '/dashboard'
		});
}]);
