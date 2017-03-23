'use strict';

/**
 * @ngdoc filter
 * @name RecipesModule.SkillLevelsModule.filter:skillLevel
 * @function
 * @description
 * # skillLevel
 * Filter in the RecipesModule.SkillLevelsModule.
 */
angular.module('RecipesModule.SkillLevelsModule')
	.filter('skillLevel', function (skillLevels) {
		return function (input) {
			return skillLevels[input];
		};
	});
