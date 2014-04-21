'use strict';

describe('Filter: productImages', function () {

  // load the filter's module
  beforeEach(module('printIoApp'));

  // initialize a new instance of the filter before each test
  var productImages;
  beforeEach(inject(function ($filter) {
    productImages = $filter('productImages');
  }));

  it('should return the input prefixed with "productImages filter:"', function () {
    var text = 'angularjs';
    expect(productImages(text)).toBe('productImages filter: ' + text);
  });

});
