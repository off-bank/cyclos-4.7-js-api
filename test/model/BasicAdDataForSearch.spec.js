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
    instance = new Cyclos471Api.BasicAdDataForSearch();
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

  describe('BasicAdDataForSearch', function() {
    it('should create an instance of BasicAdDataForSearch', function() {
      // uncomment below and update the code to test BasicAdDataForSearch
      //var instane = new Cyclos471Api.BasicAdDataForSearch();
      //expect(instance).to.be.a(Cyclos471Api.BasicAdDataForSearch);
    });

    it('should have the property visibleKinds (base name: "visibleKinds")', function() {
      // uncomment below and update the code to test the property visibleKinds
      //var instane = new Cyclos471Api.BasicAdDataForSearch();
      //expect(instance).to.be();
    });

    it('should have the property categories (base name: "categories")', function() {
      // uncomment below and update the code to test the property categories
      //var instane = new Cyclos471Api.BasicAdDataForSearch();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new Cyclos471Api.BasicAdDataForSearch();
      //expect(instance).to.be();
    });

    it('should have the property fieldsInBasicSearch (base name: "fieldsInBasicSearch")', function() {
      // uncomment below and update the code to test the property fieldsInBasicSearch
      //var instane = new Cyclos471Api.BasicAdDataForSearch();
      //expect(instance).to.be();
    });

    it('should have the property fieldsInAdvancedSearch (base name: "fieldsInAdvancedSearch")', function() {
      // uncomment below and update the code to test the property fieldsInAdvancedSearch
      //var instane = new Cyclos471Api.BasicAdDataForSearch();
      //expect(instance).to.be();
    });

    it('should have the property fieldsInList (base name: "fieldsInList")', function() {
      // uncomment below and update the code to test the property fieldsInList
      //var instane = new Cyclos471Api.BasicAdDataForSearch();
      //expect(instance).to.be();
    });

    it('should have the property basicProfileFields (base name: "basicProfileFields")', function() {
      // uncomment below and update the code to test the property basicProfileFields
      //var instane = new Cyclos471Api.BasicAdDataForSearch();
      //expect(instance).to.be();
    });

    it('should have the property customProfileFields (base name: "customProfileFields")', function() {
      // uncomment below and update the code to test the property customProfileFields
      //var instane = new Cyclos471Api.BasicAdDataForSearch();
      //expect(instance).to.be();
    });

    it('should have the property currencies (base name: "currencies")', function() {
      // uncomment below and update the code to test the property currencies
      //var instane = new Cyclos471Api.BasicAdDataForSearch();
      //expect(instance).to.be();
    });

    it('should have the property searchByDistanceData (base name: "searchByDistanceData")', function() {
      // uncomment below and update the code to test the property searchByDistanceData
      //var instane = new Cyclos471Api.BasicAdDataForSearch();
      //expect(instance).to.be();
    });

  });

}));
