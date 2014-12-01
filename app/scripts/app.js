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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })

    $urlRouterProvider.otherwise('/');
  });
