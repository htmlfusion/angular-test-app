'use strict';

angular.module('testProjApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('monkey', {
        url: '/monkey',
        templateUrl: 'app/monkey/monkey.html',
        controller: 'MonkeyCtrl'
      });
  });