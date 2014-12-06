'use strict';

/**
 * @ngdoc service
 * @name medMatchApp.monthService
 * @description
 * # monthService
 * Service in the medMatchApp.
 */
angular.module('medMatchApp')
  .service('MonthService', function (dateService) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    function Month (month, year) {
      this.weeks = [];
      this.month = month;
      this.name = dateService.getMonthName(this.month);
      this.year = year;
      this.firstDay = new Date(this.year, this.month, 1).getDay();
      this.daysInMonth = new Date(this.year, this.month + 1, 0).getDate();

      // update month name
      // this.weeks[0].setContent('&nbsp;' + DateConstants.monthNames[this.month].substr(0, 3).toUpperCase());
      // this.monthNameMod.setTransform(Transform.translate(this.firstDay * (window.innerWidth / 7), 0, 1));

      // update weeks of month
      for (var i = 0; i < 6; i++) {
        this.weeks.push({
          startDay: i ? 0 : this.firstDay,
          startDate: i ? (7 - (this.firstDay) + ((i - 1) * 7)) + 1 : 1,
          daysInMonth: this.daysInMonth,
          month: this.month,
          year: this.year,
          week: i + 1
        });
      }
    }

    return Month;

  });
