'use strict';

/**
 * @ngdoc function
 * @name RecipesModule.SkillLevelsModule.component:skillLevelFilter
 * @description
 * # skillLevelFilter
 * Component of the RecipesModule. Displays a dropdown button with options for skill levels (constant)
 * that then calls an action which changes the filtering of recipes in the recipes store.
 */
function SkillLevelFilterController($scope, $element, $attrs, skillLevels, RecipesActions) {
	$scope.skillLevelFilter = 'All';

	$scope.skillLevels = _.map(skillLevels, function(val) {
		return val;
	});

	$scope.setSkillLevelFilter = function(level) {
		$scope.skillLevelFilter = level;
		RecipesActions.setSkillLevelFilter(level);
	};
}

angular.module('RecipesModule.SkillLevelsModule')
	.component('skillLevelFilter', {
		templateUrl: 'views/skill-level-filter.html',
		controller: SkillLevelFilterController
	});