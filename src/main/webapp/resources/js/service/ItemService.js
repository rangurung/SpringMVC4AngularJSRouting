'use strict';

App.factory('ItemService', ['$http', '$q', function($http, $q){

	return {
		
			fetchAllItems: function(category) {
					return $http.get('http://localhost:8080/SpringMVC4AngularJSRoutingExample/item/'+category)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while fetching Items');
										return $q.reject(errResponse);
									}
							);
			},
		    
			fetchSpecificItem: function(category,id) {
				return $http.get('http://localhost:8080/SpringMVC4AngularJSRoutingExample/item/'+category+'/'+id)
						.then(
								function(response){
									return response.data;
								}, 
								function(errResponse){
									console.error('Error while fetching specific Item');
									return $q.reject(errResponse);
								}
						);
			}
	};

}]);
