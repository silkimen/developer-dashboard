angular.module('developerDashboard')
	.factory('menu', [function () {
		var menu = {};

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