'use strict';

var Dispatcher = require('../../../bower_components/flux/dist/Flux.js').Dispatcher;
/**
 * @ngdoc service
 * @name dispatch.Dispatcher
 * @description Very simple factory that returns the global Dispatcher function. Could be used in the future to modify the prototype of Dispatcher as needed.
 * # Dispatcher
 * Factory in the dispatchModule.
 */
angular.module('dispatchModule', [])
	.factory('Dispatcher', function () {
		return new Dispatcher();
	});
