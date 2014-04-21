'use strict';

describe('Service: Printio', function () {

  // load the service's module
  beforeEach(module('printIO'));

  // instantiate service
  var Printio;
  beforeEach(inject(function (_Printio_) {
    Printio = _Printio_;
  }));

  it('should do something', function () {
    expect(!!Printio).toBe(true);
  });

});
