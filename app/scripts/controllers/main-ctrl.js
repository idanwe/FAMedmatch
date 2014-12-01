'use strict';

/**
 * @ngdoc function
 * @name medMatchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the medMatchApp
 */
angular.module('medMatchApp')
  .controller('MainCtrl', function ($scope, $famous) {
    var Transitionable = $famous['famous/transitions/Transitionable'];
    var Timer = $famous['famous/utilities/Timer'];

    $scope.spinner = {
      speed: 55
    };
    $scope.rotateY = new Transitionable(0);

    //run function on every tick of the Famo.us engine
    Timer.every(function(){
      var adjustedSpeed = parseFloat($scope.spinner.speed) / 1200;
      $scope.rotateY.set($scope.rotateY.get() + adjustedSpeed);
    }, 1);

  });
