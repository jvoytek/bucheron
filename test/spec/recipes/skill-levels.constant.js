'use strict';

describe('Service: skillLevels', function () {

	// load the service's module
	beforeEach(module('RecipesModule'));

	// instantiate service
	var skillLevels;
	beforeEach(inject(function (_skillLevels_) {
		skillLevels = _skillLevels_;
	}));

	it('should do something', function () {
		expect(skillLevels['Beg.']).toBe('Beginner');
		expect(skillLevels['Int.']).toBe('Intermediate');
		expect(skillLevels['Adv.']).toBe('Advanced');
	});

});
