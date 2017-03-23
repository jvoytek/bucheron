'use strict';

describe('Service: RecipesStore', function () {

	// load the service's module
	beforeEach(module('bucheron'));

	// instantiate service
	var RecipesStore;
	beforeEach(inject(function (_RecipesStore_) {
		RecipesStore = _RecipesStore_;
	}));

	it('should do something', function () {
		expect(!!RecipesStore).toBe(true);
	});

});
