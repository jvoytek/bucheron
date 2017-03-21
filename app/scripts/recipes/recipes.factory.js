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

		// Service logic
		function _fetchRecipes() {
			$http({
				method: 'GET',
				url: '/recipes/recipes.json'
			}).then(function(response) {
				console.log(response.data);
				recipesArray = response.data;
				_broadcastRecipesUpdated();
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
