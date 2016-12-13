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
    instance = new Cyclos471Api.Auth();
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

  describe('Auth', function() {
    it('should create an instance of Auth', function() {
      // uncomment below and update the code to test Auth
      //var instane = new Cyclos471Api.Auth();
      //expect(instance).to.be.a(Cyclos471Api.Auth);
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instane = new Cyclos471Api.Auth();
      //expect(instance).to.be();
    });

    it('should have the property global (base name: "global")', function() {
      // uncomment below and update the code to test the property global
      //var instane = new Cyclos471Api.Auth();
      //expect(instance).to.be();
    });

    it('should have the property role (base name: "role")', function() {
      // uncomment below and update the code to test the property role
      //var instane = new Cyclos471Api.Auth();
      //expect(instance).to.be();
    });

    it('should have the property systemAdministrator (base name: "systemAdministrator")', function() {
      // uncomment below and update the code to test the property systemAdministrator
      //var instane = new Cyclos471Api.Auth();
      //expect(instance).to.be();
    });

    it('should have the property aliasOperator (base name: "aliasOperator")', function() {
      // uncomment below and update the code to test the property aliasOperator
      //var instane = new Cyclos471Api.Auth();
      //expect(instance).to.be();
    });

    it('should have the property permissions (base name: "permissions")', function() {
      // uncomment below and update the code to test the property permissions
      //var instane = new Cyclos471Api.Auth();
      //expect(instance).to.be();
    });

    it('should have the property sessionToken (base name: "sessionToken")', function() {
      // uncomment below and update the code to test the property sessionToken
      //var instane = new Cyclos471Api.Auth();
      //expect(instance).to.be();
    });

    it('should have the property accessClient (base name: "accessClient")', function() {
      // uncomment below and update the code to test the property accessClient
      //var instane = new Cyclos471Api.Auth();
      //expect(instance).to.be();
    });

    it('should have the property principalType (base name: "principalType")', function() {
      // uncomment below and update the code to test the property principalType
      //var instane = new Cyclos471Api.Auth();
      //expect(instance).to.be();
    });

    it('should have the property principal (base name: "principal")', function() {
      // uncomment below and update the code to test the property principal
      //var instane = new Cyclos471Api.Auth();
      //expect(instance).to.be();
    });

    it('should have the property expiredPassword (base name: "expiredPassword")', function() {
      // uncomment below and update the code to test the property expiredPassword
      //var instane = new Cyclos471Api.Auth();
      //expect(instance).to.be();
    });

    it('should have the property pendingAgreements (base name: "pendingAgreements")', function() {
      // uncomment below and update the code to test the property pendingAgreements
      //var instane = new Cyclos471Api.Auth();
      //expect(instance).to.be();
    });

  });

}));