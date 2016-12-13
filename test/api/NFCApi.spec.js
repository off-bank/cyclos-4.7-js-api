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
    instance = new Cyclos471Api.NFCApi();
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

  describe('NFCApi', function() {
    describe('cancelNfc', function() {
      it('should call cancelNfc successfully', function(done) {
        //uncomment below and update the code to test cancelNfc
        //instance.cancelNfc(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNfcDataForInitialize', function() {
      it('should call getNfcDataForInitialize successfully', function(done) {
        //uncomment below and update the code to test getNfcDataForInitialize
        //instance.getNfcDataForInitialize(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNfcDataForPersonalize', function() {
      it('should call getNfcDataForPersonalize successfully', function(done) {
        //uncomment below and update the code to test getNfcDataForPersonalize
        //instance.getNfcDataForPersonalize(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNfcToken', function() {
      it('should call getNfcToken successfully', function(done) {
        //uncomment below and update the code to test getNfcToken
        //instance.getNfcToken(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOtpForPersonalizeNfc', function() {
      it('should call getOtpForPersonalizeNfc successfully', function(done) {
        //uncomment below and update the code to test getOtpForPersonalizeNfc
        //instance.getOtpForPersonalizeNfc(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('initializeNfc', function() {
      it('should call initializeNfc successfully', function(done) {
        //uncomment below and update the code to test initializeNfc
        //instance.initializeNfc(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('nfcExternalAuth', function() {
      it('should call nfcExternalAuth successfully', function(done) {
        //uncomment below and update the code to test nfcExternalAuth
        //instance.nfcExternalAuth(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('personalizeNfc', function() {
      it('should call personalizeNfc successfully', function(done) {
        //uncomment below and update the code to test personalizeNfc
        //instance.personalizeNfc(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
