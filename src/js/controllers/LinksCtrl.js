/* global angular */

angular.module('developerDashboard')
  .controller('LinksCtrl', function ($scope, $state, $window, links) {
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
      case 'shared':
        $scope.title = 'Shared Bookmarks';
        break;
      case 'private':
        $scope.title = 'Private Bookmarks';
        break;
      default:
        $scope.title = 'Developer Tools';
        break;
    }

    // bind link list
    $scope.links = links;

    // open a new window with invoked link's url
    $scope.openLinkWithIndex = function (index) {
      $window.open(links[index].url);
    };
  });