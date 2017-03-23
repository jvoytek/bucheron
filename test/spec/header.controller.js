'use strict';

describe('Controller: HeaderCtrl', function () {

	// load the controller's module
	beforeEach(module('bucheron'));

	var HeaderCtrl,
		scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();

		HeaderCtrl = $controller('HeaderCtrl', {
			$scope: scope,
			// place here mocked dependencies
			$state: {'current':
				{name: 'about'}
			}
		});
	}));

	it('should set the state name on scope', function () {
		expect(scope.stateName).toBe('about');
	});
});
