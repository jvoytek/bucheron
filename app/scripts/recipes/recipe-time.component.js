'use strict';

/**
 * @ngdoc function
 * @name RecipesModule.component:RecipeCard
 * @description
 * # RecipeCard
 * Component of the RecipesModule. Displays a recipe card with basic details of the recipe.
 */
function RecipeTimeDisplayController($scope) {
	var ctrl = this;

	function _setUnits() {
		$scope.units = ctrl.times[0].unit += ctrl.times[0]['X-time'] > 1 ? 's' : '';
	}

	function _setMinMax() {
		angular.forEach(ctrl.times, function(time){
			if(time['X-time-range'] === 'min')
				$scope.min = time['X-time'];
			if(time['X-time-range'] === 'max')
				$scope.max = time['X-time'];
		});
	}

	this.$onInit = function() {
		if(!ctrl.times)
			return;
		_setMinMax();
		_setUnits();
	};
}

angular.module('RecipesModule')
	.component('recipeTimeDisplay', {
		template: '<span ng-if="min">{{min}}-{{max}} {{units}}</span><span ng-if="!min">{{max}} {{units}}</span>',
		controller: RecipeTimeDisplayController,
		bindings: {
			times: '='
		}
	});