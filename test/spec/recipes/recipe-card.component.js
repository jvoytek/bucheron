'use strict';

describe('Component: recipeCard', function () {
	var ctrl,
		scope;

	beforeEach(module('RecipesModule'));

	beforeEach(inject(function($componentController, $rootScope) {
		scope = $rootScope.$new();
		ctrl = $componentController('recipeCard', {
			$scope: scope,
			$element: angular.element('<recipe-card></recipe-card>'),
			$attrs: {}
		}, {
			recipe: {
				name: 'Cheesy McCheese Face',
				imageSource: 'images/cheese-1.png'
			}
		});
	}));

	it('should set recipe on scope', inject(function () {
		ctrl.$onInit();
		expect(scope.recipe.name).toBe('Cheesy McCheese Face');
		expect(scope.recipe.imageSource).toBe('images/cheese-1.png');
	}));
});
