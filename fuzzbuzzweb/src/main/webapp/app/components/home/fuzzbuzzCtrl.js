angular.module('fuzzbuzzHomeCtrl', []).controller('homeCtrl', ['$scope', 'homeService', function($scope, homeService){

	$scope.fuzzBuzzNumber;
	$scope.fuzzBuzzReslut;
	
	$scope.calculateFuzzBuzz = function(){
		var myDataPromise = homeService.calculateFuzzBuzz($scope.fuzzBuzzNumber);
	    myDataPromise.then(function(result) {  
	    	$scope.fuzzBuzzReslut = result ;
	    });
	};
	$scope.resetFuzzBuzz = function(){
		$scope.fuzzBuzzNumber= null;
		$scope.fuzzBuzzReslut = null;
	}
}]).directive('onlyDigits', function () {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function (scope, element, attr, ctrl) {
          function inputValue(val) {
            if (val) {
              var digits = val.replace(/[^0-9]/g, '');

              if (digits !== val) {
                ctrl.$setViewValue(digits);
                ctrl.$render();
              }
              return parseInt(digits,10);
            }
            return undefined;
          }            
          ctrl.$parsers.push(inputValue);
        }
      };
  }).directive("limitTo", [function() {
	    return {
	        restrict: "A",
	        link: function(scope, elem, attrs) {
	            var limit = parseInt(attrs.limitTo);
	            angular.element(elem).on("keypress", function(e) {
	                if (this.value.length == limit) e.preventDefault();
	            });
	        }
	    }
	}]);