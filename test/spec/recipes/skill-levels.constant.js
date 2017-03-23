'use strict';

describe('Service: skillLevels', function () {

	// load the service's module
	beforeEach(module('bucheron'));

	// instantiate service
	var skillLevels;
	beforeEach(inject(function (_skillLevels_) {
		skillLevels = _skillLevels_;
	}));

	it('should do something', function () {
		expect(!!skillLevels).toBe(true);
	});

});
