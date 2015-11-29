/* global angular */

var app = angular.module('developerDashboard', ['winjs']);

app.controller('MainCtrl', [
	'$scope',
	function ($scope) {
		$scope.splitViewInstance = document.getElementById('splitView');
		$scope.greeter = 'Hello, world!';
	}
]);