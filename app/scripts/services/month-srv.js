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

    function generateDays (week) {
      var days = [];
      var dayOfWeek;
      var dayOfMonth;
      var isPreviousMonth;
      var isNextMonth;

      for (dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
        dayOfMonth = week.startDate + (dayOfWeek - week.startDay);
        isPreviousMonth = dayOfWeek < week.startDay;
        isNextMonth = dayOfMonth > week.daysInMonth;
        if (isPreviousMonth || isNextMonth) {
          days.push('');
        } else {
          days.push(dayOfMonth);
        }
      }

      return days;
    };

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
        var week = {
          startDay: i ? 0 : this.firstDay,
          startDate: i ? (7 - (this.firstDay) + ((i - 1) * 7)) + 1 : 1,
          daysInMonth: this.daysInMonth,
          month: this.month,
          year: this.year,
          week: i + 1,
        };

        week.days = generateDays(week);
        this.weeks.push(week);
      }
    }

    return Month;

  });
