/* global angular */

/* using angular-ui-router for routing */
angular.module('developerDashboard', ['winjs', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
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
  });
