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
    instance = new Cyclos471Api.VoucherResult();
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

  describe('VoucherResult', function() {
    it('should create an instance of VoucherResult', function() {
      // uncomment below and update the code to test VoucherResult
      //var instane = new Cyclos471Api.VoucherResult();
      //expect(instance).to.be.a(Cyclos471Api.VoucherResult);
    });

    it('should have the property buyer (base name: "buyer")', function() {
      // uncomment below and update the code to test the property buyer
      //var instane = new Cyclos471Api.VoucherResult();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "creationDate")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instane = new Cyclos471Api.VoucherResult();
      //expect(instance).to.be();
    });

    it('should have the property expirationDate (base name: "expirationDate")', function() {
      // uncomment below and update the code to test the property expirationDate
      //var instane = new Cyclos471Api.VoucherResult();
      //expect(instance).to.be();
    });

    it('should have the property redeemer (base name: "redeemer")', function() {
      // uncomment below and update the code to test the property redeemer
      //var instane = new Cyclos471Api.VoucherResult();
      //expect(instance).to.be();
    });

    it('should have the property redeemDate (base name: "redeemDate")', function() {
      // uncomment below and update the code to test the property redeemDate
      //var instane = new Cyclos471Api.VoucherResult();
      //expect(instance).to.be();
    });

    it('should have the property redeemAfterDate (base name: "redeemAfterDate")', function() {
      // uncomment below and update the code to test the property redeemAfterDate
      //var instane = new Cyclos471Api.VoucherResult();
      //expect(instance).to.be();
    });

    it('should have the property redeemOnWeekDays (base name: "redeemOnWeekDays")', function() {
      // uncomment below and update the code to test the property redeemOnWeekDays
      //var instane = new Cyclos471Api.VoucherResult();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new Cyclos471Api.VoucherResult();
      //expect(instance).to.be();
    });

  });

}));
