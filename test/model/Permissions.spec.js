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
    instance = new Cyclos471Api.Permissions();
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

  describe('Permissions', function() {
    it('should create an instance of Permissions', function() {
      // uncomment below and update the code to test Permissions
      //var instane = new Cyclos471Api.Permissions();
      //expect(instance).to.be.a(Cyclos471Api.Permissions);
    });

    it('should have the property users (base name: "users")', function() {
      // uncomment below and update the code to test the property users
      //var instane = new Cyclos471Api.Permissions();
      //expect(instance).to.be();
    });

    it('should have the property accounts (base name: "accounts")', function() {
      // uncomment below and update the code to test the property accounts
      //var instane = new Cyclos471Api.Permissions();
      //expect(instance).to.be();
    });

    it('should have the property marketplace (base name: "marketplace")', function() {
      // uncomment below and update the code to test the property marketplace
      //var instane = new Cyclos471Api.Permissions();
      //expect(instance).to.be();
    });

    it('should have the property userRecords (base name: "userRecords")', function() {
      // uncomment below and update the code to test the property userRecords
      //var instane = new Cyclos471Api.Permissions();
      //expect(instance).to.be();
    });

    it('should have the property systemRecords (base name: "systemRecords")', function() {
      // uncomment below and update the code to test the property systemRecords
      //var instane = new Cyclos471Api.Permissions();
      //expect(instance).to.be();
    });

  });

}));
