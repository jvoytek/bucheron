'use strict';

/**
 * @ngdoc service
 * @name RecipesModule.RecipesService
 * @description
 * # recipes
 * Service for getting recipes in the RecipesModule.
 */
angular.module('RecipesModule')
	.factory('RecipesService', function ($http, RecipesActions) {
		var recipesArray;

		function _addScrapedRecipes() {
			$http({
				method: 'GET',
				url: '/recipes/cheese-making-com.json'
			}).then(function(response) {
				recipesArray = _.concat(recipesArray, response.data);
				_dispatchRecipesUpdated();
			});
		}

		function _normalizeYamlRecipes(recipes) {
			angular.forEach(recipes, function(recipe){
				if (recipe.recipe_name) {
					recipe.name = recipe.recipe_name;
					recipe.skillLevel = recipe['X-skill-level'];
					recipe.imageSource = recipe['X-image-url'];
				}
			});
			return recipes;
		}

		// Service logic
		function _fetchRecipes() {
			$http({
				method: 'GET',
				url: '/recipes/recipes.json'
			}).then(function(response) {
				recipesArray = _normalizeYamlRecipes(response.data);
				_addScrapedRecipes();
			});
		}

		function _dispatchRecipesUpdated() {
			RecipesActions.setRecipes(recipesArray);
		}

		function _getRecipes() {
			return recipesArray;
		}

		_fetchRecipes();

		// Public API here
		return {
			getRecipes: _getRecipes
		};
	});
