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
    instance = new Cyclos471Api.PerformPayment();
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

  describe('PerformPayment', function() {
    it('should create an instance of PerformPayment', function() {
      // uncomment below and update the code to test PerformPayment
      //var instane = new Cyclos471Api.PerformPayment();
      //expect(instance).to.be.a(Cyclos471Api.PerformPayment);
    });

    it('should have the property scheduling (base name: "scheduling")', function() {
      // uncomment below and update the code to test the property scheduling
      //var instane = new Cyclos471Api.PerformPayment();
      //expect(instance).to.be();
    });

    it('should have the property installmentsCount (base name: "installmentsCount")', function() {
      // uncomment below and update the code to test the property installmentsCount
      //var instane = new Cyclos471Api.PerformPayment();
      //expect(instance).to.be();
    });

    it('should have the property firstInstallmentDate (base name: "firstInstallmentDate")', function() {
      // uncomment below and update the code to test the property firstInstallmentDate
      //var instane = new Cyclos471Api.PerformPayment();
      //expect(instance).to.be();
    });

    it('should have the property installments (base name: "installments")', function() {
      // uncomment below and update the code to test the property installments
      //var instane = new Cyclos471Api.PerformPayment();
      //expect(instance).to.be();
    });

    it('should have the property occurrencesCount (base name: "occurrencesCount")', function() {
      // uncomment below and update the code to test the property occurrencesCount
      //var instane = new Cyclos471Api.PerformPayment();
      //expect(instance).to.be();
    });

    it('should have the property firstOccurrenceDate (base name: "firstOccurrenceDate")', function() {
      // uncomment below and update the code to test the property firstOccurrenceDate
      //var instane = new Cyclos471Api.PerformPayment();
      //expect(instance).to.be();
    });

    it('should have the property occurrenceInterval (base name: "occurrenceInterval")', function() {
      // uncomment below and update the code to test the property occurrenceInterval
      //var instane = new Cyclos471Api.PerformPayment();
      //expect(instance).to.be();
    });

  });

}));