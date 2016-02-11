angular.module('MembersApp',[]).controller('membersCtrl', ['$scope','$http','$location','$routeParams', function($scope, $http, $location, $routeParams){
	$scope.hello = "Hello World!!";
	var url = "http://test.bluetoes.net/toes-api/public/user"; 
	$scope.users = [];
	$scope.status = null;
	$scope.statusText = null;
	$scope.types = [{id:0, type: "member"},{id:1, type: "donor"}, {id:2, type: "ex-member"}, {id:3, type: "other"}];
	
	/**
	 * Fetch a single user from the API 
	 */
	$scope.fetchUser = function(ID){
		$http.get(url + '/' + ID).then(function succesCallback(response){
			$scope.user = response.data;
		}, function errorCallback(response){
			$scope.status = response.status;
			$scope.statusText = response.statusText;
		});
	};
	
	/**
	 * Fetch users from the API
	 */
	$scope.fetchUsers = function(){
		$http.get(url).then(function succesCallback(response){
			//$scope.status = response.status;
			//$scope.statusText = response.statusText;
			$scope.users = response.data._embedded.user;
		}, function errorCallback(response){
			$scope.status = response.status;
			$scope.statusText = response.statusText;
		});
	};
	
	/**
	 * Add a new user
	 */	
	$scope.postUser = function(){
		var newUser = {email : $scope.newEmail, type : $scope.selectedType.type};
		
		$http.post(url, newUser).then(function succesCallback(response){
			$scope.status = response.status;
			$scope.statusText = response.statusText;
			$location.path('/members');
		}, function errorCallback(response){
			$scope.status = response.status;
			$scope.statusText = response.statusText;
		});
	};
	
	/**
	 * Update a user
	 */
	$scope.editUser = function(user){
		var updateURL = url + '/' + user.id;
		var updatedUser = {email : user.email, type : user.type}
		
		$http.put(updateURL, updatedUser).then(function succesCallback(response){
			$scope.status = response.status;
			$scope.statusText = response.statusText;
			$location.path('/members');
		}, function errorCallBack(response){
			$scope.status = response.status;
			$scope.statusText = response.statusText;
		});
	};
	
	/**
	 * unregister a member 
	 */
	$scope.unregisterMember = function(user)
	{
		var updateURL = url + '/' + user.id;
		user.type = "ex-member";
		$scope.editUser(user);
	}
	
	/**
	 * Delete a user
	 */
	$scope.deleteUser = function(user){
		var deleteURL = url + '/' + user.id;
		$http.delete(deleteURL, {id: user.id}).then(function succesCallback(response){
			$scope.status = response.status;
			$scope.statusText = response.statusText;
			$scope.fetchUsers();
		}, function errorCallBack(response){
			$scope.status = response.status;
			$scope.statusText = response.statusText;
		});
	};
	
	$scope.cancel = function()
	{
		$location.path('/members');
	}
	
	$scope.userID = $routeParams.userID;
	$scope.user = null; 
	$scope.fetchUser($scope.userID);
	$scope.fetchUsers();
}]);