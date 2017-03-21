'use strict';

describe('Controller: RecipecardCtrl', function () {

	// load the controller's module
	beforeEach(module('bucheron'));

	var RecipecardCtrl,
		scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		RecipecardCtrl = $controller('RecipecardCtrl', {
			$scope: scope
			// place here mocked dependencies
		});
	}));

	it('should attach a list of awesomeThings to the scope', function () {
		expect(RecipecardCtrl.awesomeThings.length).toBe(3);
	});
});
