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
    instance = new Cyclos471Api.PasswordRegistration();
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

  describe('PasswordRegistration', function() {
    it('should create an instance of PasswordRegistration', function() {
      // uncomment below and update the code to test PasswordRegistration
      //var instane = new Cyclos471Api.PasswordRegistration();
      //expect(instance).to.be.a(Cyclos471Api.PasswordRegistration);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new Cyclos471Api.PasswordRegistration();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instane = new Cyclos471Api.PasswordRegistration();
      //expect(instance).to.be();
    });

    it('should have the property checkConfirmation (base name: "checkConfirmation")', function() {
      // uncomment below and update the code to test the property checkConfirmation
      //var instane = new Cyclos471Api.PasswordRegistration();
      //expect(instance).to.be();
    });

    it('should have the property confirmationValue (base name: "confirmationValue")', function() {
      // uncomment below and update the code to test the property confirmationValue
      //var instane = new Cyclos471Api.PasswordRegistration();
      //expect(instance).to.be();
    });

    it('should have the property forceChange (base name: "forceChange")', function() {
      // uncomment below and update the code to test the property forceChange
      //var instane = new Cyclos471Api.PasswordRegistration();
      //expect(instance).to.be();
    });

  });

}));