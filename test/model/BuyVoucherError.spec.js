/**
 * Cyclos 4.7.1 API
 * The REST API for Cyclos 4.7.1
 *
 * OpenAPI spec version: 4.7.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Cyclos471Api);
  }
}(this, function(expect, Cyclos471Api) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Cyclos471Api.BuyVoucherError();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('BuyVoucherError', function() {
    it('should create an instance of BuyVoucherError', function() {
      // uncomment below and update the code to test BuyVoucherError
      //var instane = new Cyclos471Api.BuyVoucherError();
      //expect(instance).to.be.a(Cyclos471Api.BuyVoucherError);
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new Cyclos471Api.BuyVoucherError();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new Cyclos471Api.BuyVoucherError();
      //expect(instance).to.be();
    });

    it('should have the property amountLeftForBuying (base name: "amountLeftForBuying")', function() {
      // uncomment below and update the code to test the property amountLeftForBuying
      //var instane = new Cyclos471Api.BuyVoucherError();
      //expect(instance).to.be();
    });

    it('should have the property dateAllowedAgain (base name: "dateAllowedAgain")', function() {
      // uncomment below and update the code to test the property dateAllowedAgain
      //var instane = new Cyclos471Api.BuyVoucherError();
      //expect(instance).to.be();
    });

    it('should have the property currentOpenAmount (base name: "currentOpenAmount")', function() {
      // uncomment below and update the code to test the property currentOpenAmount
      //var instane = new Cyclos471Api.BuyVoucherError();
      //expect(instance).to.be();
    });

    it('should have the property maxOpenAmount (base name: "maxOpenAmount")', function() {
      // uncomment below and update the code to test the property maxOpenAmount
      //var instane = new Cyclos471Api.BuyVoucherError();
      //expect(instance).to.be();
    });

    it('should have the property paymentError (base name: "paymentError")', function() {
      // uncomment below and update the code to test the property paymentError
      //var instane = new Cyclos471Api.BuyVoucherError();
      //expect(instance).to.be();
    });

  });

}));
