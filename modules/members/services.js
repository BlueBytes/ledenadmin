angular.module('MembersApp').factory('usersService', ['$http', function($http){
		
    var url = "http://test.bluetoes.net/api/user";
	
	var factory = {};
	
	var status;
	var statusText;
	
	/**
	 * Fetches the users from the API 
	 */
	factory.fetchUsers = function(){
		
		var users = {content:null};
	
		$http.get(url).then(function succesCallback(response){
			status = response.status;
			statusText = response.statusText;
			users.content = response.data.Users;
		}, function errorCallback(response){
			status = response.status;
			statusText = response.statusText;
		});
		
		return users;
	};
	
	/**
	 * Fetches a single user from the API 
	 */
	factory.fetchUser = function(ID){
		var user = {content:null};
		
		$http.get(url + '/' + ID).then(function succesCallback(response){
			status = response.status;
			statusText = response.statusText;
			user.content = response.data;
		}, function errorCallback(response){
			status = response.status;
			statusText = response.statusText;
		});
		
		return user;
	};
	
	/**
	 * Add a new user
	 */	
	factory.postUser = function(user){
		//var newUser = {email : $scope.newEmail, type : $scope.selectedType.type};
		
		$http.post(url, user).then(function succesCallback(response){
			status = response.status;
			statusText = response.statusText;
		}, function errorCallback(response){
			status = response.status;
			statusText = response.statusText;
		});
	};
	
	/**
	 * Update a user
	 */
	factory.editUser = function(user){
		var updateURL = url + '/' + user.id;
		//var updatedUser = {email : user.email, type : user.type};
		
		$http.put(updateURL, user).then(function succesCallback(response){
			status = response.status;
			statusText = response.statusText;
		}, function errorCallBack(response){
			status = response.status;
			statusText = response.statusText;
		});
	};
	
	/**
	 * Delete a user
	 */
	factory.deleteUser = function(user){
		var deleteURL = url + '/' + user.id;
		$http.delete(deleteURL, {id: user.id}).then(function succesCallback(response){
			status = response.status;
			statusText = response.statusText;
		}, function errorCallBack(response){
			status = response.status;
			statusText = response.statusText;
		});
	};
	
	return factory;;	
}]);

