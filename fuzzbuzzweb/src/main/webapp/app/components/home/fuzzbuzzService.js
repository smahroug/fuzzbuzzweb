angular.module('fuzzbuzzHomeService', [])

.factory('homeService', function($http,$log){
	
		
		var calculateFuzzBuzz = function(fuzzBuzzNumber){
	        return $http({method:"GET", url:"api/calculate/"+fuzzBuzzNumber}).then(function(result){
	            return result.data;
	        });
			
		};
	
	return { calculateFuzzBuzz: calculateFuzzBuzz };
	
});


