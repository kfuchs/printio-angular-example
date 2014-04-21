'use strict';

describe('Controller: ProductDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('printIoApp'));

  var ProductdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductdetailsCtrl = $controller('ProductDetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
