'use strict';

describe('Service: RecipesActions', function () {

	// load the service's module
	beforeEach(module('RecipesModule'));

	// instantiate service
	var RecipesActions;
	beforeEach(inject(function (_RecipesActions_) {
		RecipesActions = _RecipesActions_;
	}));

	it('should do something', function () {
		expect(!!RecipesActions).toBe(true);
	});

});
