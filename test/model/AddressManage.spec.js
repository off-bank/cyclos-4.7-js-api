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
    instance = new Cyclos471Api.AddressManage();
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

  describe('AddressManage', function() {
    it('should create an instance of AddressManage', function() {
      // uncomment below and update the code to test AddressManage
      //var instane = new Cyclos471Api.AddressManage();
      //expect(instance).to.be.a(Cyclos471Api.AddressManage);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Cyclos471Api.AddressManage();
      //expect(instance).to.be();
    });

    it('should have the property addressLine1 (base name: "addressLine1")', function() {
      // uncomment below and update the code to test the property addressLine1
      //var instane = new Cyclos471Api.AddressManage();
      //expect(instance).to.be();
    });

    it('should have the property addressLine2 (base name: "addressLine2")', function() {
      // uncomment below and update the code to test the property addressLine2
      //var instane = new Cyclos471Api.AddressManage();
      //expect(instance).to.be();
    });

    it('should have the property street (base name: "street")', function() {
      // uncomment below and update the code to test the property street
      //var instane = new Cyclos471Api.AddressManage();
      //expect(instance).to.be();
    });

    it('should have the property buildingNumber (base name: "buildingNumber")', function() {
      // uncomment below and update the code to test the property buildingNumber
      //var instane = new Cyclos471Api.AddressManage();
      //expect(instance).to.be();
    });

    it('should have the property complement (base name: "complement")', function() {
      // uncomment below and update the code to test the property complement
      //var instane = new Cyclos471Api.AddressManage();
      //expect(instance).to.be();
    });

    it('should have the property zip (base name: "zip")', function() {
      // uncomment below and update the code to test the property zip
      //var instane = new Cyclos471Api.AddressManage();
      //expect(instance).to.be();
    });

    it('should have the property poBox (base name: "poBox")', function() {
      // uncomment below and update the code to test the property poBox
      //var instane = new Cyclos471Api.AddressManage();
      //expect(instance).to.be();
    });

    it('should have the property neighborhood (base name: "neighborhood")', function() {
      // uncomment below and update the code to test the property neighborhood
      //var instane = new Cyclos471Api.AddressManage();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instane = new Cyclos471Api.AddressManage();
      //expect(instance).to.be();
    });

    it('should have the property region (base name: "region")', function() {
      // uncomment below and update the code to test the property region
      //var instane = new Cyclos471Api.AddressManage();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new Cyclos471Api.AddressManage();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "location")', function() {
      // uncomment below and update the code to test the property location
      //var instane = new Cyclos471Api.AddressManage();
      //expect(instance).to.be();
    });

    it('should have the property defaultAddress (base name: "defaultAddress")', function() {
      // uncomment below and update the code to test the property defaultAddress
      //var instane = new Cyclos471Api.AddressManage();
      //expect(instance).to.be();
    });

    it('should have the property hidden (base name: "hidden")', function() {
      // uncomment below and update the code to test the property hidden
      //var instane = new Cyclos471Api.AddressManage();
      //expect(instance).to.be();
    });

  });

}));
