'use strict';

/**
 * @ngdoc function
 * @name RecipesModule.controller:RecipesController
 * @description
 * # RecipesController
 * Controller of the RecipesModule
 */
angular.module('RecipesModule')
	.controller('RecipesController', function ($scope, RecipesService, RecipesStore) {


		function _getNewRecipes() {
			$scope.recipesArray = RecipesStore.getRecipes();
			$scope.numRecipes = RecipesStore.getNumRecipes();
		}

		$scope.$on('recipes.changed', _getNewRecipes);

		_getNewRecipes();
	});
