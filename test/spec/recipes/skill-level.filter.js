'use strict';

describe('Filter: skillLevel', function () {

	// load the filter's module
	beforeEach(module('RecipesModule'));

	// initialize a new instance of the filter before each test
	var skillLevel;
	beforeEach(inject(function ($filter) {
		skillLevel = $filter('skillLevel');
	}));

	it('should return the unabbreviated version of skill levels"', function () {
		expect( skillLevel('Beg.')).toBe('Beginner');
		expect( skillLevel('Int.')).toBe('Intermediate');
		expect( skillLevel('Adv.')).toBe('Advanced');
	});

});
