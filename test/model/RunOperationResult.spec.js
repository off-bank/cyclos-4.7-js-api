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
    instance = new Cyclos471Api.RunOperationResult();
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

  describe('RunOperationResult', function() {
    it('should create an instance of RunOperationResult', function() {
      // uncomment below and update the code to test RunOperationResult
      //var instane = new Cyclos471Api.RunOperationResult();
      //expect(instance).to.be.a(Cyclos471Api.RunOperationResult);
    });

    it('should have the property resultType (base name: "resultType")', function() {
      // uncomment below and update the code to test the property resultType
      //var instane = new Cyclos471Api.RunOperationResult();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new Cyclos471Api.RunOperationResult();
      //expect(instance).to.be();
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instane = new Cyclos471Api.RunOperationResult();
      //expect(instance).to.be();
    });

    it('should have the property notification (base name: "notification")', function() {
      // uncomment below and update the code to test the property notification
      //var instane = new Cyclos471Api.RunOperationResult();
      //expect(instance).to.be();
    });

    it('should have the property notificationLevel (base name: "notificationLevel")', function() {
      // uncomment below and update the code to test the property notificationLevel
      //var instane = new Cyclos471Api.RunOperationResult();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new Cyclos471Api.RunOperationResult();
      //expect(instance).to.be();
    });

    it('should have the property columns (base name: "columns")', function() {
      // uncomment below and update the code to test the property columns
      //var instane = new Cyclos471Api.RunOperationResult();
      //expect(instance).to.be();
    });

    it('should have the property rows (base name: "rows")', function() {
      // uncomment below and update the code to test the property rows
      //var instane = new Cyclos471Api.RunOperationResult();
      //expect(instance).to.be();
    });

  });

}));
