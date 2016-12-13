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
    instance = new Cyclos471Api.CustomFieldPossibleValue();
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

  describe('CustomFieldPossibleValue', function() {
    it('should create an instance of CustomFieldPossibleValue', function() {
      // uncomment below and update the code to test CustomFieldPossibleValue
      //var instane = new Cyclos471Api.CustomFieldPossibleValue();
      //expect(instance).to.be.a(Cyclos471Api.CustomFieldPossibleValue);
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instane = new Cyclos471Api.CustomFieldPossibleValue();
      //expect(instance).to.be();
    });

    it('should have the property _default (base name: "default")', function() {
      // uncomment below and update the code to test the property _default
      //var instane = new Cyclos471Api.CustomFieldPossibleValue();
      //expect(instance).to.be();
    });

    it('should have the property internalName (base name: "internalName")', function() {
      // uncomment below and update the code to test the property internalName
      //var instane = new Cyclos471Api.CustomFieldPossibleValue();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instane = new Cyclos471Api.CustomFieldPossibleValue();
      //expect(instance).to.be();
    });

  });

}));
