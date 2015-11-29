/* global angular */

var app = angular.module('developerDashboard', ['winjs']);

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