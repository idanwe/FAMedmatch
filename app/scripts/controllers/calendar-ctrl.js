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
    $scope.getSize = function () {
      // Here we should calculate the real size of each month
      // because we use "paginated" scrollview and due to
      // you can't set "true" size to element in FA scrollview
      // for real implementation look at
      //  * https://github.com/Famous/famous-angular/issues/239
      //  * http://stackoverflow.com/questions/26445552/scroll-view-not-scrolling-with-surface-fa-size-undefined-true/26534407#26534407
      return [undefined, 350];
    };

    // should move to mmWeek
    $scope.weekGridOptions = {
      dimensions: [7, 1]
    };
  });
