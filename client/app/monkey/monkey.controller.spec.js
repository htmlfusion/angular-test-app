'use strict';

describe('Controller: MonkeyCtrl', function () {

  // load the controller's module
  beforeEach(module('testProjApp'));

  var MonkeyCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MonkeyCtrl = $controller('MonkeyCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
