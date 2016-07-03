angular.module('MembersApp').factory('usersService', ['$http', function($http){
		
    var url = "http://test.bluetoes.net/api/";
	
	var factory = {};
	
	var status;
	var statusText;
	
	/**
	 * Fetches the users from the API 
	 */
	factory.fetchUsers = function(){
		
		var users = {content:null};
	
		$http.get(url + 'user').then(function succesCallback(response){
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
		
		$http.get(url + 'user'+ '/' + ID).then(function succesCallback(response){
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
    *   Fetches the personal data of a single user
    */
	factory.fetchUserDatePersonal = function (ID) {
	    var userPersonal = { content: null }

	    $http.get(url + 'userdatapersonal/' + ID).then(function succesCallback(response) {
	        status = response.status;
	        statusText = response.statusText;
	        userPersonal.content = response.data;
	    },
            function errorCallback(response) {
                status = response.status;
                statusText = response.statusText;
            }
        );
	    return userPersonal;
	};
	
	/**
	 * Add a new user
	 */	
	factory.postUser = function(user, userDataPersonal){
	    //var newUser = {email : $scope.newEmail, type : $scope.selectedType.type};
	    //user.Id = null;
	    user.Type = 'member';
		
		$http.post(url + 'user', user).then(function succesCallback(response){
			status = response.status;
			statusText = response.statusText;
			userDataPersonal.UserId = response.data
            //postDataPersonal(userDataPersonal.UserId)
		}, function errorCallback(response){
			status = response.status;
			statusText = response.statusText;
		});
	};

    /**
    *   This function will post the personal data to the database
    */
	postDataPersonal = function (userDataPersonal) {
	    var UpdateURL = url + 'userdatapersonal/' + userDataPersonal.UserId;

	    $http.put(updateURL, userDataPersonal).then(function succesCallback(response) {
	        status = response.status;
	        statusText = response.statusText;
	    }, function errorCallback(response) {
	        status = response.status;
	        statusText = response.statusText;
	    });
	}
	
	/**
	 * Update a user
	 */
	factory.editUser = function(user){
		var updateURL = url + 'user' + '/' + user.id;
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
		var deleteURL = url + 'user' + '/' + user.id;
		$http.delete(deleteURL, {id: user.id}).then(function succesCallback(response){
			status = response.status;
			statusText = response.statusText;
		}, function errorCallBack(response){
			status = response.status;
			statusText = response.statusText;
		});
	};
	
	return factory;	
}]);

