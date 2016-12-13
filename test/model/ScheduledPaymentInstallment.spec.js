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
    instance = new Cyclos471Api.ScheduledPaymentInstallment();
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

  describe('ScheduledPaymentInstallment', function() {
    it('should create an instance of ScheduledPaymentInstallment', function() {
      // uncomment below and update the code to test ScheduledPaymentInstallment
      //var instane = new Cyclos471Api.ScheduledPaymentInstallment();
      //expect(instance).to.be.a(Cyclos471Api.ScheduledPaymentInstallment);
    });

    it('should have the property _number (base name: "number")', function() {
      // uncomment below and update the code to test the property _number
      //var instane = new Cyclos471Api.ScheduledPaymentInstallment();
      //expect(instance).to.be();
    });

    it('should have the property dueDate (base name: "dueDate")', function() {
      // uncomment below and update the code to test the property dueDate
      //var instane = new Cyclos471Api.ScheduledPaymentInstallment();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new Cyclos471Api.ScheduledPaymentInstallment();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new Cyclos471Api.ScheduledPaymentInstallment();
      //expect(instance).to.be();
    });

    it('should have the property by (base name: "by")', function() {
      // uncomment below and update the code to test the property by
      //var instane = new Cyclos471Api.ScheduledPaymentInstallment();
      //expect(instance).to.be();
    });

    it('should have the property transferId (base name: "transferId")', function() {
      // uncomment below and update the code to test the property transferId
      //var instane = new Cyclos471Api.ScheduledPaymentInstallment();
      //expect(instance).to.be();
    });

    it('should have the property transferDate (base name: "transferDate")', function() {
      // uncomment below and update the code to test the property transferDate
      //var instane = new Cyclos471Api.ScheduledPaymentInstallment();
      //expect(instance).to.be();
    });

  });

}));