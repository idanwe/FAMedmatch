'use strict';

/**
 * @ngdoc service
 * @name medMatchApp.monthsService
 * @description
 * # monthsService
 * Service in the medMatchApp.
 */
angular.module('medMatchApp')
  .service('MonthsBuffer', function (dateService, MonthService) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var options = {
      maxMonthViews: 12
    };

    function MonthsBuffer () {
      var date = new Date();
      var month = date.getMonth();
      var year = date.getFullYear();
      var nextMonths = [];
      var previousMonths = [];
      var nextMonth;
      var prevMonth;
      var months;
      var i;

      for (i = 0; i < Math.floor(options.maxMonthViews / 2); i++) {
        nextMonths.push({ month: month, year: year });
        nextMonth = dateService.calcNextMonth(month, year);
        month = nextMonth.month;
        year = nextMonth.year;
      }

      month = date.getMonth();
      year = date.getFullYear();

      for (i = 0; i < Math.floor(options.maxMonthViews / 2); i++) {
        prevMonth = dateService.calcPreviousMonth(month, year);
        month = prevMonth.month;
        year = prevMonth.year;
        previousMonths.push({ month: month, year: year });
      }

      months = _.union(previousMonths.reverse(), nextMonths);
      this.months = months.map(function (m) {
        return new MonthService(m.month, m.year);
      });

      return this.months;
    }

    return MonthsBuffer;

  });
