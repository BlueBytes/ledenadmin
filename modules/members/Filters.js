angular.module('MembersApp').filter('members', function(){
	return function(items)
	{
		var filtered = [];
		
		for(var i = 0; i < items.length; i++){
			var item = items[i];
			if(item.type == 'member'){
				filtered.push(item);
			}
		}
		return filtered;
	};
});

angular.module('MembersApp').filter('exMembers', function(){
	return function(items)
	{
		var filtered = [];
		
		for(var i = 0; i < items.length; i++){
			var item = items[i];
			if(item.type == 'ex-member'){
				filtered.push(item);
			}
		}
		return filtered;
	};
});

angular.module('MembersApp').filter('donors', function(){
	return function(items)
	{
		var filtered = [];
		
		for(var i = 0; i < items.length; i++){
			var item = items[i];
			if(item.type == 'donor'){
				filtered.push(item);
			}
		}
		return filtered;
	};
});

angular.module('MembersApp').filter('others', function(){
	return function(items)
	{
		var filtered = [];
		
		for(var i = 0; i < items.length; i++){
			var item = items[i];
			if(item.type == 'other'){
				filtered.push(item);
			}
		}
		return filtered;
	};
});