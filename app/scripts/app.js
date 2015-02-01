'use strict';

/**
 * @ngdoc overview
 * @name medMatchApp
 * @description
 * # medMatchApp
 *
 * Main module of the application.
 */
angular
  .module('medMatchApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'famous.angular'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        views: {
          '': {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          },
          'calendar@main': {
            controller: 'CalendarCtrl',
            templateUrl: 'views/calendar.html'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  });
