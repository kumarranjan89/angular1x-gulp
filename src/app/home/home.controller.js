angular.module('myApp')
	.controller('HomeController', ['$scope', function($scope) {
		$scope.message = "Home Page";

		$scope.destinations = [];
		$scope.newDestination = {
			city: undefined,
			country: undefined
		};

		$scope.saveDestination = function() {
			$scope.destinations.push({
				city: $scope.newDestination.city,
				country: $scope.newDestination.country
			});
			$scope.newDestination.city = "";
			$scope.newDestination.country = "";
		}
	}])