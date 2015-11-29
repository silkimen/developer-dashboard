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

app.factory('links', [function () {
	var links = [];

	// some arbitrary mock data taken from microsoft's sample http://try.buildwinjs.com/playground/
	var linksArray = [
		{ title: 'Marvelous Mint', text: 'Gelato', icon: 'img/fruits/60Mint.png', url: 'http://google.com/search?q=Marvelous+Mint' },
		{ title: 'Succulent Strawberry', text: 'Sorbet', icon: 'img/fruits/60Strawberry.png', url: 'http://google.com/search?q=Succulent+Strawberry' },
		{ title: 'Banana Blast', text: 'Low-fat frozen yogurt', icon: 'img/fruits/60Banana.png', url: 'http://google.com/search?q=Banana+Blast' },
		{ title: 'Lavish Lemon Ice', text: 'Sorbet', icon: 'img/fruits/60Lemon.png', url: 'http://google.com/search?q=Lavish+Lemon+Ice' },
		{ title: 'Creamy Orange', text: 'Sorbet', icon: 'img/fruits/60Orange.png', url: 'http://google.com/search?q=Creamy+Orange' },
		{ title: 'Very Vanilla', text: 'Ice Cream', icon: 'img/fruits/60Vanilla.png', url: 'http://google.com/search?q=Very+Vanilla' },
		{ title: 'Banana Blast', text: 'Low-fat frozen yogurt', icon: 'img/fruits/60Banana.png', url: 'http://google.com/search?q=Banana+Blast' },
		{ title: 'Lavish Lemon Ice', text: 'Sorbet', icon: 'img/fruits/60Lemon.png', url: 'http://google.com/search?q=Lavish+Lemon+Ice' }
	];

	// generate 160 mock items
	for (var i = 0; i < 20; i++) {
		linksArray.forEach(function (item) {
			links.push(item);
		});
	}

	return links;
}]);

app.controller('MainCtrl', [
	'$scope',
	'$state',
	'menu',
	function ($scope, $state, menu) {
		$scope.splitViewInstance = document.getElementById('splitView');
		$scope.menu = menu.items;
		$scope.switchToView = function (view) {
			// acquire WinJS winControl on the instance to close the pane
			$scope.splitViewInstance.winControl.closePane();
			// change state to show target view
			$state.go(view);
		};
	}
]);

app.controller('HomeCtrl', [
	'$scope',
	function ($scope) {
		$scope.title = 'Developer Dashboard';
		// just an empty controller, waiting to be filled with magic stuff
	}
]);

app.controller('LinksCtrl', [
	'$scope',
	'$state',
	'$window',
	'links',
	function ($scope, $state, $window, links) {
		// enable horizontal scrolling by mouse wheel
		angular.element(document).ready(function () {
			var listView = document.getElementById('listview');
			
			listView.addEventListener('mousewheel', function (ev) {
				var scroller = listView.querySelector('.win-horizontal');
				
				if (scroller) {
					scroller.scrollLeft -= ev.wheelDelta;
					ev.preventDefault();
				}
			});
    });
		
		// determine title by state name
		switch ($state.current.name) {
			case 'tools':
				$scope.title = 'Developer Tools';
				break;
			case 'shared':
				$scope.title = 'Shared Bookmarks';
				break;
			case 'private':
				$scope.title = 'Private Bookmarks';
				break;
		}
		
		// bind link list
		$scope.links = links;
		
		// open a new window with invoked link's url
		$scope.openLinkWithIndex = function (index) {
			$window.open(links[index].url);
		}
	}
]);

app.controller('SettingsCtrl', [
	'$scope',
	function ($scope) {
		$scope.title = 'Settings';
		// just an empty controller, waiting to be filled with magic stuff
	}
]);