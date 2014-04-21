'use strict';

describe('Filter: productUrl', function () {

  // load the filter's module
  beforeEach(module('printIO'));

  // initialize a new instance of the filter before each test
  var productUrl;
  beforeEach(inject(function ($filter) {
    productUrl = $filter('productUrl');
  }));

  it('should return the input prefixed with "productUrl filter:"', function () {
    var text = 'angularjs';
    expect(productUrl(text)).toBe('productUrl filter: ' + text);
  });

});
