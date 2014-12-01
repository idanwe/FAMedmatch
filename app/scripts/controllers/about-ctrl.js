'use strict';

/**
 * @ngdoc function
 * @name medMatchApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the medMatchApp
 */
angular.module('medMatchApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
