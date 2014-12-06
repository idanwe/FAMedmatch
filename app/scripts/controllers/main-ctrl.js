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

    $scope.generateDayArray = function (week) {
      var dayArray = [];
      var dayOfWeek;
      var dayOfMonth;
      var isPreviousMonth;
      var isNextMonth;

      for (dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
        dayOfMonth = week.startDate + (dayOfWeek - week.startDay);
        isPreviousMonth = dayOfWeek < week.startDay;
        isNextMonth = dayOfMonth > week.daysInMonth;
        if (isPreviousMonth || isNextMonth) {
          dayArray.push('');
        } else {
          dayArray.push(dayOfMonth);
        }
      }

      return dayArray;
    };
  });
