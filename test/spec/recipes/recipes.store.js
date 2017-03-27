'use strict';

describe('Service: RecipesStore', function () {

	// load the service's module
	beforeEach(module('RecipesModule'));

	// instantiate service
	var RecipesStore;
	beforeEach(inject(function (_RecipesStore_) {
		RecipesStore = _RecipesStore_;
	}));

	it('getRecipes should NOT return recipes before "recipes.updated"', function () {
		expect(RecipesStore.getRecipes()).toBe(undefined);
		expect(RecipesStore.getNumRecipes()).toBe(undefined);
	});

	it('getRecipes should return recipes after "recipes.updated"', inject(function (RecipesActions) {
		RecipesActions.setRecipes([
			{
				name:'Cheesy McCheese Face',
				skillLevel: 'Int.'
			},
			{
				name:'String Cheese',
				skillLevel: 'Int.'
			}]);
		expect(RecipesStore.getRecipes().length).toBe(1);
		expect(RecipesStore.getRecipes()[0].length).toBe(2);
		expect(RecipesStore.getNumRecipes()).toBe(2);
	}));

	it('dispatch actionType "recipes.filter.level.change" should change the skillLevelFilter', inject(function (RecipesActions, RecipesStore) {
		RecipesActions.setRecipes([
			{
				name:'Cheesy McCheese Face',
				skillLevel: 'Int.'
			},
			{
				name:'String Cheese',
				skillLevel: 'Int.'
			}]);
		RecipesActions.setSkillLevelFilter('Intermediate');
		expect(RecipesStore.testing.getSkillLevelFilter()).toBe('Int.');
	}));

	it('dispatch actionType "recipes.filter.name.change" should change the nameFilter', inject(function (RecipesActions, RecipesStore) {
		RecipesActions.setRecipes([
			{
				name:'Cheesy McCheese Face',
				skillLevel: 'Int.'
			},
			{
				name:'String Cheese',
				skillLevel: 'Int.'
			}]);
		RecipesActions.setNameFilter('Cheesy');
		expect(RecipesStore.testing.getNameFilter()).toBe('Cheesy');
	}));

});
