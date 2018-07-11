angular.module('myApp').
	controller('AppController', function($scope) {
		$scope.showPanel = false;
		$scope.onClick = function() {
			if($scope.showPanel) {
				$scope.showPanel = false;
			} else {
				$scope.showPanel = true;
			}
		}
	})