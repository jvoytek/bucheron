'use strict';

describe('Controller: RecipesController', function () {

	// load the controller's module
	beforeEach(module('RecipesModule'));

	var RecipesCtrl,
		scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		RecipesCtrl = $controller('RecipesController', {
			$scope: scope
			// place here mocked dependencies
		});
	}));

	it('should get the list of recipes on "recipes.changed"', inject(function (RecipesStore) {
		RecipesStore.testing.setRecipes([[{name:'First Recipe'},{name: 'Second Recipe'}]]);
		scope.$broadcast('recipes.changed');
		expect(scope.recipesArray.length).toBe(1);
		expect(scope.recipesArray[0].length).toBe(2);
	}));
});
