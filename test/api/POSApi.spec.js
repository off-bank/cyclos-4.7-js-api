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
    instance = new Cyclos471Api.POSApi();
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

  describe('POSApi', function() {
    describe('calculateReceivePaymentInstallments', function() {
      it('should call calculateReceivePaymentInstallments successfully', function(done) {
        //uncomment below and update the code to test calculateReceivePaymentInstallments
        //instance.calculateReceivePaymentInstallments(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dataForReceivePayment', function() {
      it('should call dataForReceivePayment successfully', function(done) {
        //uncomment below and update the code to test dataForReceivePayment
        //instance.dataForReceivePayment(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('previewReceivePayment', function() {
      it('should call previewReceivePayment successfully', function(done) {
        //uncomment below and update the code to test previewReceivePayment
        //instance.previewReceivePayment(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('receivePayment', function() {
      it('should call receivePayment successfully', function(done) {
        //uncomment below and update the code to test receivePayment
        //instance.receivePayment(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('receivePaymentOtp', function() {
      it('should call receivePaymentOtp successfully', function(done) {
        //uncomment below and update the code to test receivePaymentOtp
        //instance.receivePaymentOtp(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
