'use strict';

/**
 * @ngdoc function
 * @name RecipesModule.controller:RecipesController
 * @description
 * # RecipesController
 * Controller of the RecipesModule
 */
angular.module('RecipesModule')
	.controller('RecipesController', function ($scope, RecipesService) {

		function _getNewRecipes() {
			$scope.recipesArray = RecipesService.getRecipes();
		}

		$scope.$on('recipes.updated', _getNewRecipes);

		_getNewRecipes();
	});
