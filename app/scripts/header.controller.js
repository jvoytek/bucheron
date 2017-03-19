'use strict';

/**
 * @ngdoc function
 * @name bucheron.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the bucheron
 */
angular.module('bucheron')
	.controller('HeaderCtrl', function ($scope, $state) {
		$scope.stateName = $state.current.name;
	});
