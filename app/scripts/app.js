'use strict';

/**
 * @ngdoc overview
 * @name bucheron
 * @description
 * # bucheron
 *
 * Main module of the application.
 */
angular
	.module('bucheron', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch',
		'ui.router',
		'RecipesModule'
	])
	.config(function ($stateProvider, $locationProvider) {
		$locationProvider.html5Mode(true);

		$stateProvider
			.state('main', {
				url: '/',
				'views': {
					'header': {
						templateUrl: 'views/header-default.html',
						controller: 'HeaderCtrl'
					},
					'main': {
						templateUrl: 'views/main.html',
						controller: 'MainCtrl',
						controllerAs: 'main'
					}
				}
			})
			.state('recipes', {
				url: '/recipes',
				'views': {
					'header': {
						templateUrl: 'views/header-default.html',
						controller: 'HeaderCtrl'
					},
					'main': {
						templateUrl: 'views/recipes.html',
						controller: 'RecipesController'
					}
				}
			});
	});
