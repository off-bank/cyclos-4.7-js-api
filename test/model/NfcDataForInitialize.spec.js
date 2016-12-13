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
    instance = new Cyclos471Api.NfcDataForInitialize();
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

  describe('NfcDataForInitialize', function() {
    it('should create an instance of NfcDataForInitialize', function() {
      // uncomment below and update the code to test NfcDataForInitialize
      //var instane = new Cyclos471Api.NfcDataForInitialize();
      //expect(instance).to.be.a(Cyclos471Api.NfcDataForInitialize);
    });

    it('should have the property initilizeTypes (base name: "initilizeTypes")', function() {
      // uncomment below and update the code to test the property initilizeTypes
      //var instane = new Cyclos471Api.NfcDataForInitialize();
      //expect(instance).to.be();
    });

    it('should have the property personalizeTypes (base name: "personalizeTypes")', function() {
      // uncomment below and update the code to test the property personalizeTypes
      //var instane = new Cyclos471Api.NfcDataForInitialize();
      //expect(instance).to.be();
    });

  });

}));
