angular.module('gpsApp').config(
		[ '$locationProvider', '$routeProvider',
				function config($locationProvider, $routeProvider) {
					$locationProvider.hashPrefix('');

					$routeProvider

					.when('/question', {
						template : '<question></question>',
						title : 'Pour vivre un GPS'
					})

					.otherwise('/question');

				} ]).run(
		[
				'$location',
				'$rootScope',
				function($location, $rootScope) {
					$rootScope.$on('$routeChangeSuccess', function(event,
							current, previous) {
						$rootScope.title = current.$$route.title;
					})
				} ]);