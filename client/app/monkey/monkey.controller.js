'use strict';

angular.module('testProjApp')
  .controller('MonkeyCtrl', function ($scope, $timeout, $http, $resource) {
    $scope.message = {text: 'hello'};
    $scope.companies = [
      {name: 'cola'},
      {name: 'stuff'}
    ];

    $scope.dosomething = function(){
      $scope.message.text = 'bar';
    };

    setTimeout(function(){
      $scope.message.text= 'done';
      $scope.$apply();
    },2000);

  });
