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
    instance = new Cyclos471Api.VouchersApi();
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

  describe('VouchersApi', function() {
    describe('buyVouchers', function() {
      it('should call buyVouchers successfully', function(done) {
        //uncomment below and update the code to test buyVouchers
        //instance.buyVouchers(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserVouchersDataForSearch', function() {
      it('should call getUserVouchersDataForSearch successfully', function(done) {
        //uncomment below and update the code to test getUserVouchersDataForSearch
        //instance.getUserVouchersDataForSearch(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVoucherDataForBuy', function() {
      it('should call getVoucherDataForBuy successfully', function(done) {
        //uncomment below and update the code to test getVoucherDataForBuy
        //instance.getVoucherDataForBuy(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVoucherDataForRedeem', function() {
      it('should call getVoucherDataForRedeem successfully', function(done) {
        //uncomment below and update the code to test getVoucherDataForRedeem
        //instance.getVoucherDataForRedeem(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVoucherInitialDataForRedeem', function() {
      it('should call getVoucherInitialDataForRedeem successfully', function(done) {
        //uncomment below and update the code to test getVoucherInitialDataForRedeem
        //instance.getVoucherInitialDataForRedeem(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVoucherQrCode', function() {
      it('should call getVoucherQrCode successfully', function(done) {
        //uncomment below and update the code to test getVoucherQrCode
        //instance.getVoucherQrCode(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('redeemVoucher', function() {
      it('should call redeemVoucher successfully', function(done) {
        //uncomment below and update the code to test redeemVoucher
        //instance.redeemVoucher(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchUserVouchers', function() {
      it('should call searchUserVouchers successfully', function(done) {
        //uncomment below and update the code to test searchUserVouchers
        //instance.searchUserVouchers(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('viewVoucher', function() {
      it('should call viewVoucher successfully', function(done) {
        //uncomment below and update the code to test viewVoucher
        //instance.viewVoucher(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
