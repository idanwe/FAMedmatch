'use strict';

/**
 * @ngdoc function
 * @name medMatchApp.controller:DayCtrl
 * @description
 * # DayCtrl
 * Controller of the medMatchApp
 */
angular.module('medMatchApp')
  .controller('DayCtrl', function ($scope, $famous) {
    var EventHandler = $famous['famous/core/EventHandler'];

    $scope.dayScrollViewEventHandler = new EventHandler();
  });

