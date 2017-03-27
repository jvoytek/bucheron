'use strict';

describe('Component: recipeTimeDisplay', function () {

	beforeEach(module('RecipesModule'));

	it('should set a range of times with units', inject(function ($rootScope, $componentController, $compile) {
		var scope = $rootScope.$new();
			scope.times = [
			{
				'X-time': 3,
				'X-time-range': 'min',
				'unit': 'week'
			},
			{
				'X-time': 5,
				'X-time-range': 'max',
				'unit': 'week'
			}
		];

		var element = $compile('<recipe-time-display times="times"></recipe-time-display>')(scope);

		//ctrl.$onInit();
		scope.$apply();
		expect(element.text()).toBe('3-5 weeks');
	}));

	it('should set a max time with units', inject(function ($rootScope, $componentController, $compile) {
		var scope = $rootScope.$new();
		scope.times = [
			{
				'X-time': 5,
				'X-time-range': 'max',
				'unit': 'week'
			}
		];

		var element = $compile('<recipe-time-display times="times"></recipe-time-display>')(scope);

		scope.$apply();
		expect(element.text()).toBe('5 weeks');
	}));

	it('should not pluralize the units if there is only one of them...', inject(function ($rootScope, $componentController, $compile) {
		var scope = $rootScope.$new();
		scope.times = [
			{
				'X-time': 1,
				'X-time-range': 'max',
				'unit': 'day'
			}
		];

		var element = $compile('<recipe-time-display times="times"></recipe-time-display>')(scope);

		scope.$apply();
		expect(element.text()).toBe('1 day');
	}));

	it('should do nothing if we don\'t pass times', inject(function ($rootScope, $componentController, $compile) {
		var scope = $rootScope.$new();
		scope.times = [
			{
				'X-time': 5,
				'X-time-range': 'max',
				'unit': 'week'
			}
		];

		var element = $compile('<recipe-time-display></recipe-time-display>')(scope);

		scope.$apply();
		expect(element.text()).toBe('');
	}));


});
