angular.module('developerDashboard')
	.controller('MainCtrl', [
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