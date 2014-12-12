'use strict';

/**
 * @ngdoc function
 * @name medMatchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the medMatchApp
 */
angular.module('medMatchApp')
  .controller('MainCtrl', function ($scope, $famous, MonthsBuffer) {
    var EventHandler = $famous['famous/core/EventHandler'];
    $scope.scrollViewEventHandler = new EventHandler();

    $scope.monthGridOptions = {
      dimensions: [1, 6]
    };

    $scope.months = new MonthsBuffer();

    // should move to mmWeek
    $scope.weekGridOptions = {
      dimensions: [7, 1]
    };



  });
