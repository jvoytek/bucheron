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

	this.$onInit = function() {
		var recipeName = ctrl.recipe.name;
		$scope.recipe = ctrl.recipe;
		$scope.descriptionTempalte = 'recipes/' + recipeName.toLowerCase().replace(' ', '-') + '.html';
		$scope.imageSource = ctrl.recipe.imageSource;
	};
}

angular.module('RecipesModule')
	.component('recipeCard', {
		templateUrl: 'views/recipe-card.html',
		controller: RecipeCardController,
		bindings: {
			recipe: '='
		}
	});