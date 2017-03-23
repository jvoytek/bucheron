'use strict';

/**
 * @ngdoc service
 * @name RecipesModule.RecipesActions
 * @description
 * # RecipesActions
 * Actions to interact with recipes across controllers, components, etc.
 */
angular.module('RecipesModule.RecipesActionsModule')
	.factory('RecipesActions', function (Dispatcher) {
		// Service logic

		function _setSkillLevelFilter(level) {
			Dispatcher.dispatch({
				actionType: 'recipes.filter.level.change',
				level: level
			});
		}

		function _setNameFilter(name) {
			Dispatcher.dispatch({
				actionType: 'recipes.filter.name.change',
				name: name
			});
		}

		function _setRecipes(recipes) {
			Dispatcher.dispatch({
				actionType: 'recipes.updated',
				recipes: recipes
			});
		}

		// Public API here
		return {
			setSkillLevelFilter: _setSkillLevelFilter,
			setNameFilter: _setNameFilter,
			setRecipes: _setRecipes
		};
	});
