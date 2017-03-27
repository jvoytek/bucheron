'use strict';

describe('Component: recipeCard', function () {
	var ctrl,
		scope;

	beforeEach(module('RecipesModule'));

	beforeEach(inject(function($componentController, $rootScope) {
		scope = $rootScope.$new();
		ctrl = $componentController('skillLevelFilter', {
			$scope: scope,
			$element: angular.element('<skill-level-filter></skill-level-filter>'),
			$attrs: {}
		});

	}));

	it('should initialize with a list of skill levels', inject(function () {
		expect(scope.skillLevels[0]).toBe('Beginner');
		expect(scope.skillLevels[1]).toBe('Intermediate');
		expect(scope.skillLevels[2]).toBe('Advanced');
	}));

	it('setSkillLevelFilter should set the skill level', inject(function (RecipesStore, RecipesActions) {
		RecipesActions.setRecipes([
			{
				name:'Cheesy McCheese Face',
				skillLevel: 'Int.'
			},
			{
				name:'String Cheese',
				skillLevel: 'Int.'
			}]);

		scope.setSkillLevelFilter('Intermediate');
		expect(scope.skillLevelFilter).toBe('Intermediate');
		expect(RecipesStore.testing.getSkillLevelFilter()).toBe('Int.');
	}));
});
