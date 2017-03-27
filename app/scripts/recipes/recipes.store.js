'use strict';

/**
 * @ngdoc service
 * @name RecipesModule.RecipesStore
 * @description
 * # RecipesStore
 * Store for recipes
 */
angular.module('RecipesModule')
	.factory('RecipesStore', function ($rootScope, Dispatcher, $filter, skillLevels) {
		var recipesArray,
			filteredRecipesArray,
			searchFilter = $filter('filter'),
			CARDS_PER_ROW = 4,
			skillLevelFilter = '',
			nameFilter = '',
			numRecipes;

		// Service logic
		function _getChunkedRecipes(recipes, chunkLength) {
			if(!recipes)
				return;

			var chunkedArray = [];
			for (var i = 0; i < recipes.length; i += chunkLength) {
				chunkedArray.push(recipes.slice(i, i + chunkLength));
			}

			return chunkedArray;
		}

		function _filterRecipes() {
			var filteredRecipes = searchFilter(recipesArray, {'skillLevel': skillLevelFilter, 'name':nameFilter});
			numRecipes = filteredRecipes.length;
			filteredRecipesArray = _getChunkedRecipes(filteredRecipes, CARDS_PER_ROW);
		}

		function _setRecipes(recipes) {
			recipesArray = recipes;
		}

		function _getRecipes() {
			return filteredRecipesArray;
		}

		function _getNumRecipes() {
			return numRecipes;
		}

		function _broadcastRecipesChanged() {
			$rootScope.$broadcast('recipes.changed');
		}

		function _getAbbreviatedLevel(level) {
			return _.findKey(skillLevels, function(val) { return val === level; });
		}

		function _changeSkillLevelFilter(level) {
			skillLevelFilter = _getAbbreviatedLevel(level);
		}

		function _changeNameFilter(name) {
			nameFilter = name;
		}

		// Dispatching
		var dispatchToken = Dispatcher.register(function (payload) {

			if (payload.actionType === 'recipes.updated') {
				_setRecipes(payload.recipes);
				_filterRecipes();
				_broadcastRecipesChanged();
			}

			if (payload.actionType === 'recipes.filter.level.change') {
				_changeSkillLevelFilter(payload.level);
				_filterRecipes();
				_broadcastRecipesChanged();
			}

			if (payload.actionType === 'recipes.filter.name.change') {
				_changeNameFilter(payload.name);
				_filterRecipes();
				_broadcastRecipesChanged();
			}
		});
			// Public API here
		return {
			testing: {
				getNameFilter : function() { return nameFilter; },
				getSkillLevelFilter : function() { return skillLevelFilter; }
			},
			dispatchToken: dispatchToken,
			getRecipes: _getRecipes,
			getNumRecipes: _getNumRecipes
		};
	});
