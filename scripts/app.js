// define all modules with no dependencies
angular.module('MembersApp',[]);
angular.module('DashboardApp',[]);

// define main module and inject other modules as dependencies
var mainApp = angular.module('MainApp',
	[
		'DashboardApp',
		'MembersApp',
		'ngRoute'
	]
);