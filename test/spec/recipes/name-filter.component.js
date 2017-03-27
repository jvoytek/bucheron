'use strict';

describe('Component: nameFilter', function () {
	var ctrl,
		scope;

	beforeEach(module('RecipesModule'));

	beforeEach(inject(function($componentController, $rootScope) {
		scope = $rootScope.$new();
		ctrl = $componentController('nameFilter', {
			$scope: scope,
			$element: angular.element('<div></div>'),
			$attrs: {}
		});
	}));

	it('should set the name filter', inject(function (RecipesStore, RecipesActions) {
		RecipesActions.setRecipes([{name:'Cheese 1', skillLevel:'Beg.'}]);
		scope.setNameFilter('Intermediate');
		expect(RecipesStore.testing.getNameFilter()).toBe('Intermediate');
	}));
});
