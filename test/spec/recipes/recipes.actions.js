'use strict';

describe('Service: RecipesActions', function () {

	// load the service's module
	beforeEach(module('RecipesModule'));

	// instantiate service
	var RecipesActions;
	beforeEach(inject(function (_RecipesActions_) {
		RecipesActions = _RecipesActions_;
	}));

	it('setSkillLevelFilter should dispatch a "recipes.filter.level.change" action', inject(function (Dispatcher) {
		Dispatcher.register(function (payload) {
			if (payload.actionType === 'recipes.filter.level.change') {
				expect(payload.level).toBe('Intermediate');
			}
		});
		RecipesActions.setSkillLevelFilter('Intermediate');
	}));

	it('setNameFilter should dispatch a "recipes.filter.name.change" action', inject(function (Dispatcher) {
		Dispatcher.register(function (payload) {
			if (payload.actionType === 'recipes.filter.name.change') {
				expect(payload.name).toBe('Cheesy');
			}
		});
		RecipesActions.setNameFilter('Cheesy');
	}));

	it('setRecipes should dispatch a "recipes.updated" action', inject(function (Dispatcher) {
		Dispatcher.register(function (payload) {
			if (payload.actionType === 'recipes.updated') {
				expect(payload.recipes.length).toBe(2);
			}
		});
		RecipesActions.setRecipes([
			{
				name:'Cheesy McCheese Face',
				skillLevel: 'Int.'
			},
			{
				name:'String Cheese',
				skillLevel: 'Int.'
			}]);
	}));

});
