/* global angular */

var app = angular.module('developerDashboard', ['winjs', 'ui.router']);

/* using angular-ui-router for routing */
app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: '/home.html',
				controller: 'HomeCtrl'
			})
			.state('tools', {
				url: '/tools',
				templateUrl: '/links.html',
				controller: 'LinksCtrl'
			})
			.state('shared', {
				url: '/shared',
				templateUrl: '/links.html',
				controller: 'LinksCtrl'
			})
			.state('private', {
				url: '/private',
				templateUrl: '/links.html',
				controller: 'LinksCtrl'
			})
			.state('settings', {
				url: '/settings',
				templateUrl: '/settings.html',
				controller: 'SettingsCtrl'
			});

		$urlRouterProvider.otherwise('home');
	}
]);

app.factory('menu', [function () {
		var menu = {};

		// create some mockup menu items
		menu.items = [
		{
			'label': 'Home',
			'icon': 'home',
			'target': 'home'
		}, {
			'label': 'Development Tools',
			'icon': 'outlinestar',
			'target': 'tools'
		}, {
			'label': 'Shared Bookmarks',
			'icon': 'people',
			'target': 'shared'
		}, {
			'label': 'Private Bookmarks',
			'icon': 'contact',
			'target': 'private'
		}, {
			'label': 'Settings',
			'icon': 'settings',
			'target': 'settings'
		}];

		return menu;
}]);

app.controller('MainCtrl', [
	'$scope',
	'menu',
	function ($scope, menu) {
		$scope.splitViewInstance = document.getElementById('splitView');
		$scope.greeter = 'Hello, world!';
		$scope.menu = menu.items;
	}
]);

app.controller('HomeCtrl', [
	'$scope',
	function ($scope) {
		$scope.title='Developer Dashboard';
		// just an empty controller, waiting to be filled with magic stuff
	}
]);

app.controller('LinksCtrl', [
	'$scope',
	function ($scope) {
		$scope.title='Links';
		// just an empty controller, waiting to be filled with magic stuff
	}
]);

app.controller('SettingsCtrl', [
	'$scope',
	function ($scope) {
		$scope.title='Settings';
		// just an empty controller, waiting to be filled with magic stuff
	}
]);