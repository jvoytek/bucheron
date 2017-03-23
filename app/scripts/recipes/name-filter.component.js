'use strict';

/**
 * @ngdoc function
 * @name RecipesModule.component:nameFilter
 * @description
 * # nameFilter
 * Component of the RecipesModule. Displays a textbox into which the user can type changes are de-bounced
 * and after a certain amount of inaction the recipe action is called which in turn changes the filtering of recipes in the recipes store.
 */
function NameFilterController($scope, $element, $attrs, RecipesActions) {

	$scope.setNameFilter = function(name) {
		RecipesActions.setNameFilter(name);
	};

}

angular.module('RecipesModule')
	.component('nameFilter', {
		templateUrl: 'views/name-filter.html',
		controller: NameFilterController
	});