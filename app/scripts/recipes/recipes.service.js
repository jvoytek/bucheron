'use strict';

/**
 * @ngdoc service
 * @name RecipesModule.RecipesService
 * @description
 * # recipes
 * Service for getting recipes in the RecipesModule.
 */
angular.module('RecipesModule')
	.factory('RecipesService', function ($http, $rootScope) {
		var recipesArray;

		function _addScrapedRecipes() {
			$http({
				method: 'GET',
				url: '/recipes/cheese-making-com.json'
			}).then(function(response) {
				recipesArray = _.concat(recipesArray, response.data);
				_broadcastRecipesUpdated();
			});
		}
		// Service logic
		function _fetchRecipes() {
			$http({
				method: 'GET',
				url: '/recipes/recipes.json'
			}).then(function(response) {
				recipesArray = response.data;
				_addScrapedRecipes();
			});
		}

		function _broadcastRecipesUpdated() {
			$rootScope.$broadcast('recipes.updated');
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
