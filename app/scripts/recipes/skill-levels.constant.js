'use strict';

/**
 * @ngdoc service
 * @name RecipesModule.SkillLevelsModule.skillLevels
 * @description
 * # skillLevels
 * Constant in the RecipesModule.SkillLevelsModule.
 */
angular.module('RecipesModule.SkillLevelsModule')
	.constant('skillLevels', {
		'Beg.': 'Beginner',
		'Int.': 'Intermediate',
		'Adv.': 'Advanced'
	});
