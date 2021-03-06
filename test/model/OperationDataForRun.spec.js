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
    instance = new Cyclos471Api.OperationDataForRun();
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

  describe('OperationDataForRun', function() {
    it('should create an instance of OperationDataForRun', function() {
      // uncomment below and update the code to test OperationDataForRun
      //var instane = new Cyclos471Api.OperationDataForRun();
      //expect(instance).to.be.a(Cyclos471Api.OperationDataForRun);
    });

    it('should have the property informationText (base name: "informationText")', function() {
      // uncomment below and update the code to test the property informationText
      //var instane = new Cyclos471Api.OperationDataForRun();
      //expect(instance).to.be();
    });

    it('should have the property confirmationText (base name: "confirmationText")', function() {
      // uncomment below and update the code to test the property confirmationText
      //var instane = new Cyclos471Api.OperationDataForRun();
      //expect(instance).to.be();
    });

    it('should have the property customSubmitLabel (base name: "customSubmitLabel")', function() {
      // uncomment below and update the code to test the property customSubmitLabel
      //var instane = new Cyclos471Api.OperationDataForRun();
      //expect(instance).to.be();
    });

    it('should have the property formParameters (base name: "formParameters")', function() {
      // uncomment below and update the code to test the property formParameters
      //var instane = new Cyclos471Api.OperationDataForRun();
      //expect(instance).to.be();
    });

    it('should have the property hasFileUpload (base name: "hasFileUpload")', function() {
      // uncomment below and update the code to test the property hasFileUpload
      //var instane = new Cyclos471Api.OperationDataForRun();
      //expect(instance).to.be();
    });

    it('should have the property confirmationPasswordInput (base name: "confirmationPasswordInput")', function() {
      // uncomment below and update the code to test the property confirmationPasswordInput
      //var instane = new Cyclos471Api.OperationDataForRun();
      //expect(instance).to.be();
    });

    it('should have the property resultType (base name: "resultType")', function() {
      // uncomment below and update the code to test the property resultType
      //var instane = new Cyclos471Api.OperationDataForRun();
      //expect(instance).to.be();
    });

    it('should have the property rowAction (base name: "rowAction")', function() {
      // uncomment below and update the code to test the property rowAction
      //var instane = new Cyclos471Api.OperationDataForRun();
      //expect(instance).to.be();
    });

    it('should have the property allowExport (base name: "allowExport")', function() {
      // uncomment below and update the code to test the property allowExport
      //var instane = new Cyclos471Api.OperationDataForRun();
      //expect(instance).to.be();
    });

    it('should have the property allowPrint (base name: "allowPrint")', function() {
      // uncomment below and update the code to test the property allowPrint
      //var instane = new Cyclos471Api.OperationDataForRun();
      //expect(instance).to.be();
    });

    it('should have the property searchAutomatically (base name: "searchAutomatically")', function() {
      // uncomment below and update the code to test the property searchAutomatically
      //var instane = new Cyclos471Api.OperationDataForRun();
      //expect(instance).to.be();
    });

    it('should have the property rowLocation (base name: "rowLocation")', function() {
      // uncomment below and update the code to test the property rowLocation
      //var instane = new Cyclos471Api.OperationDataForRun();
      //expect(instance).to.be();
    });

    it('should have the property rowOperation (base name: "rowOperation")', function() {
      // uncomment below and update the code to test the property rowOperation
      //var instane = new Cyclos471Api.OperationDataForRun();
      //expect(instance).to.be();
    });

    it('should have the property rowUrl (base name: "rowUrl")', function() {
      // uncomment below and update the code to test the property rowUrl
      //var instane = new Cyclos471Api.OperationDataForRun();
      //expect(instance).to.be();
    });

  });

}));
