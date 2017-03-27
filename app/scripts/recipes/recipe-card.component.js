'use strict';

/**
 * @ngdoc function
 * @name RecipesModule.component:RecipeCard
 * @description
 * # RecipeCard
 * Component of the RecipesModule. Displays a recipe card with basic details of the recipe.
 */
function RecipeCardController($scope) {
	var ctrl = this;

	function _initializeScopedVariables() {
		$scope.recipe = ctrl.recipe;
	}

	this.$onInit = function() {
		_initializeScopedVariables();
	};

}

angular.module('RecipesModule')
	.component('recipeCard', {
		templateUrl: 'views/recipe-card.html',
		controller: RecipeCardController,
		bindings: {
			recipe: '<'
		}
	});