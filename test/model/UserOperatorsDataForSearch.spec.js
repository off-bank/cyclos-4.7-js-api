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
    instance = new Cyclos471Api.UserOperatorsDataForSearch();
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

  describe('UserOperatorsDataForSearch', function() {
    it('should create an instance of UserOperatorsDataForSearch', function() {
      // uncomment below and update the code to test UserOperatorsDataForSearch
      //var instane = new Cyclos471Api.UserOperatorsDataForSearch();
      //expect(instance).to.be.a(Cyclos471Api.UserOperatorsDataForSearch);
    });

    it('should have the property canCreateNew (base name: "canCreateNew")', function() {
      // uncomment below and update the code to test the property canCreateNew
      //var instane = new Cyclos471Api.UserOperatorsDataForSearch();
      //expect(instance).to.be();
    });

    it('should have the property groups (base name: "groups")', function() {
      // uncomment below and update the code to test the property groups
      //var instane = new Cyclos471Api.UserOperatorsDataForSearch();
      //expect(instance).to.be();
    });

    it('should have the property fieldsInList (base name: "fieldsInList")', function() {
      // uncomment below and update the code to test the property fieldsInList
      //var instane = new Cyclos471Api.UserOperatorsDataForSearch();
      //expect(instance).to.be();
    });

    it('should have the property basicFields (base name: "basicFields")', function() {
      // uncomment below and update the code to test the property basicFields
      //var instane = new Cyclos471Api.UserOperatorsDataForSearch();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new Cyclos471Api.UserOperatorsDataForSearch();
      //expect(instance).to.be();
    });

  });

}));
