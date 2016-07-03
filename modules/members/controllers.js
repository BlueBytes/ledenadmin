membersApp = angular.module('MembersApp',[]);

/**
 *memberslist controller 
 */
membersApp.controller('membersListCtrl', ['$scope','usersService', function($scope, usersService){

	$scope.users = [];
	$scope.types = {
		availableTypes:[
		{id:0, type: "member", name: "members"},
		{id:1, type: "donor"}, 
		{id:2, type: "ex-member"}, 
		{id:3, type: "other"}],
		selectedType: {id:0, type: "member"}
	};
	$scope.obj = null;
	
    /*
    *   This function uses the fetchUsers service to retrieve the users from the API.
    *   
    */
	$scope.fetchUsers = function(){
		
        // Fetch the users
	    $scope.obj = usersService.fetchUsers();

	    // Since the users are fetched asynchronously, a watch is added. The watch function is executed when the obj.content changes.

		$scope.$watch('obj.content', function(newValue, oldValue){
		    $scope.users = $scope.obj.content;
		});
	};

    // This function retrieves the data from the object into an array.
    // The data on the frontpage is then automatically updated by angular
	$scope.convertToArray = function () {
	    tempUsersArray = new Array(0);
	    var i = 0;
	    for (key in $scope.obj.content) {
	        if (key.startsWith("User_")) {
	            tempUsersArray.length++;
	            var object = $scope.obj.content[key];
	            tempUsersArray[i] = object;
	            i++;
	        }
	        $scope.users = tempUsersArray;
	    }
	}
	
	$scope.fetchUsers();
}]);


/**
 *member controller 
 */
membersApp.controller('memberCtrl', ['$scope','$location','$routeParams','usersService', function($scope, $location, $routeParams, usersService){
	$scope.obj = null;
	$scope.state;
	$scope.user;
	
	
	
	$scope.cancel = function()
	{
		$location.path('/members');
	};
	
	$scope.confirm = function(user, userDataPersonal)
	{
		if($scope.state == 'new')
		{
		    usersService.postUser(user, $scope.userDataPersonal);
		}
		else if($scope.state == 'edit')
		{
			
		}
	};
	
	// Determine the state of this template
	// viewMember, addMember or editMember
	var location = $location.url().slice(0,11);
	
	switch (location) {
	    case '/viewMember':
		    $scope.state = 'view';
		    break;
	    case '/newMember':
	    	$scope.state = 'new';
	    	break;
	    case '/editMember':
	    	$scope.state = 'edit';
	    	break;
	}
	
	// set which fields need to be shown and which field can be edited
	if($scope.state == 'view')
	{
	    $scope.showElements = {
			id: {view: true},
			surname: {view: true, edit: false},
			initials: {view: true, edit: false},
			firstname: {view: true, edit: false},
			nameprefix: {view: true, edit: false},
			gender: {view: true, edit: false},
			address: {view: true, edit: false},
			zipcode: {view: true, edit: false},
			city: {view: true, edit: false},
			fixedphone: {view: true, edit: false},
			mobilephone: {view: true, edit: false},
			email: {view: true, edit: false},
			dateofbirth: {view: true, edit: false},
			study: {view: true, edit: false},
			studentnumber: {view: true, edit: false},
			
			// organisation
			startlevel: {view: true, edit: false},
			partner: {view: true, edit: false},
			iban: {view: true, edit: false},
			accountholder: {view: true, edit: false},
			automatictransfer: {view: true, edit: false},
			subscriptiondate: {view: true, edit: false},
			groups: {view: true, edit: false},
			username: {view: true, edit: false},
			photo: {view: true, edit: false},
			isanonumous: {view: true, edit: false},
			remarks: {view: true, edit: false},
			confirm: {view: false},
			cancel: {view: true, value: "Back"},
			title: "View member"
		};
	}
	if($scope.state == 'new')
	{
		$scope.showElements = {
			id : {view: false},
			surname : {view: true, edit: true},
			initials : {view: true, edit: true},
			firstname: {view: true, edit: true},
			nameprefix: {view: true, edit: true},
			gender: {view: true, edit: true},
			address: {view: true, edit: true},
			zipcode: {view: true, edit: true},
			city: {view: true, edit: true},
			fixedphone: {view: true, edit: true},
			mobilephone: {view: true, edit: true},
			email: {view: true, edit: true},
			dateofbirth: {view: true, edit: true},
			study: {view: true, edit: true},
			studentnumber: {view: true, edit: true},
			
			// organisation
			startlevel: {view: true, edit: true},
			partner: {view: true, edit: true},
			iban: {view: true, edit: true},
			accountholder: {view: true, edit: true},
			automatictransfer: {view: true, edit: true},
			subscriptiondate: {view: true, edit: true},
			groups: {view: true, edit: true},
			username: {view: true, edit: true},
			photo: {view: true, edit: true},
			isanonumous: {view: true, edit: true},
			remarks: {view: true, edit: true},
			confirm: {view: true, value: "Add"},
			cancel: {view: true, value: "Cancel"},
			title:"New member"
		};	
	}
		if($scope.state == 'edit')
	{
		$scope.showElements = {
			id : {view: true},
			surname : {view: true, edit: true},
			initials : {view: true, edit: true},
			firstname: {view: true, edit: true},
			nameprefix: {view: true, edit: true},
			gender: {view: true, edit: true},
			address: {view: true, edit: true},
			zipcode: {view: true, edit: true},
			city: {view: true, edit: true},
			fixedphone: {view: true, edit: true},
			mobilephone: {view: true, edit: true},
			email: {view: true, edit: true},
			dateofbirth: {view: true, edit: true},
			study: {view: true, edit: true},
			studentnumber: {view: true, edit: true},
			
			// organisation
			startlevel: {view: true, edit: true},
			partner: {view: true, edit: true},
			iban: {view: true, edit: true},
			accountholder: {view: true, edit: true},
			automatictransfer: {view: true, edit: true},
			subscriptiondate: {view: true, edit: true},
			groups: {view: true, edit: true},
			username: {view: true, edit: true},
			photo: {view: true, edit: true},
			isanonumous: {view: true, edit: true},
			remarks: {view: true, edit: true},
			confirm: {view: true, value: "Update"},
			cancel: {view: true, value: "Back"},
			title: "Edit member"
		};
	}
	
	if($scope.state == 'view' || $scope.state == 'edit')
	{
		$scope.userID = $routeParams.userID;
		$scope.obj = usersService.fetchUser($scope.userID);
		$scope.user = $scope.obj.content;
		$scope.$watch('obj.content', function (newValue, oldValue) {
			$scope.user = $scope.obj.content;
		});

		$scope.objPersonal = usersService.fetchUserDatePersonal($scope.userID)
		$scope.$watch('objPersonal.content', function (newValue, oldValue) {
		    $scope.userDataPersonal = $scope.objPersonal.content;
		})
	}
}]);

/**
membersApp.controller('editMemberCtrl', ['$scope','$location','$routeParams','usersService', function($scope, $location, $routeParams, usersService){
	$scope.userID = $routeParams.userID;
	$scope.user = null; 
	$scope.fetchUser($scope.userID);
}]);

membersApp.controller('deleteMemberCtrl', ['$scope','$location','$routeParams','usersService', function($scope, $location, $routeParams, usersService){
	$scope.userID = $routeParams.userID;
	$scope.user = null; 
	$scope.fetchUser($scope.userID);	
}]);

membersApp.controller('unregisterMemberCtrl', ['$scope','$location','$routeParams','usersService', function($scope, $location, $routeParams, usersService){
	
	$scope.unregisterMember = function(user)
	{
		var updateURL = url + '/' + user.id;
		user.type = "ex-member";
		usersService.editUser(user);
	};
	
	$scope.userID = $routeParams.userID;
	$scope.user = null; 
	$scope.fetchUser($scope.userID);
}]);*/