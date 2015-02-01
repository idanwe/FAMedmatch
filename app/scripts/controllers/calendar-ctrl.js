'use strict';

/**
 * @ngdoc function
 * @name medMatchApp.controller:CalendarCtrl
 * @description
 * # CalendarCtrl
 * Controller of the medMatchApp
 */
angular.module('medMatchApp')
  .controller('CalendarCtrl', function ($scope, $famous) {
    var EventHandler = $famous['famous/core/EventHandler'];

    $scope.monthScrollViewEventHandler = new EventHandler();

    $scope.getMonthGridOptions = function (month) {
      return { dimensions: [1, month.numOfWeeks] };
    };

    // Init

    // should move to mmWeek
    $scope.weekGridOptions = {
      dimensions: [7, 1]
    };
  });
