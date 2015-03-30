'use strict';

angular.module('testProjApp')
  .directive('card', function () {
    return {
      templateUrl: 'components/card/card.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        console.log(attrs);
      },
      scope: {
        data: '=',
        size: '@'
      }
    };
  });