describe('Testing AngularJS Test Suite', function() {
	beforeEach(module('myApp'));

	describe('Testing AngularJS HomeController', function() {
		
		var scope, ctrl;

		beforeEach(inject(function($controller, $rootScope) {
			scope = $rootScope.$new;
			ctrl = $controller('HomeController', {$scope:scope});
		}));

		afterEach(function() {
			//cleanup code
		})

		it("Should set correct Header value", function() {
			expect(scope.message).toBeDefined();
			expect(scope.message).toBe("Home Page");
		});

		it("Should add 2 destinations to the destinations list", function() {
			expect(scope.destinations).toBeDefined();
			expect(scope.destinations.length).toBe(0);

			scope.newDestination = {
				city: "London",
				country: "England"
			}

			scope.saveDestination();

			expect(scope.destinations.length).toBe(1);
			expect(scope.destinations[0].city).toBe("London");
			expect(scope.destinations[0].country).toBe("England");

			scope.newDestination = {
				city: "Frankfurt",
				country: "Germany"
			}

			scope.saveDestination();

			expect(scope.destinations.length).toBe(2);
			expect(scope.destinations[1].city).toBe("Frankfurt");
			expect(scope.destinations[1].country).toBe("Germany");
			expect(scope.destinations[0].city).toBe("London");
			expect(scope.destinations[0].country).toBe("England");

		})

	});
});