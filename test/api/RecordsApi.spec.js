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
    instance = new Cyclos471Api.RecordsApi();
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

  describe('RecordsApi', function() {
    describe('createRecord', function() {
      it('should call createRecord successfully', function(done) {
        //uncomment below and update the code to test createRecord
        //instance.createRecord(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRecord', function() {
      it('should call deleteRecord successfully', function(done) {
        //uncomment below and update the code to test deleteRecord
        //instance.deleteRecord(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRecordDataForEdit', function() {
      it('should call getRecordDataForEdit successfully', function(done) {
        //uncomment below and update the code to test getRecordDataForEdit
        //instance.getRecordDataForEdit(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRecordDataForGeneralSearch', function() {
      it('should call getRecordDataForGeneralSearch successfully', function(done) {
        //uncomment below and update the code to test getRecordDataForGeneralSearch
        //instance.getRecordDataForGeneralSearch(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRecordDataForNew', function() {
      it('should call getRecordDataForNew successfully', function(done) {
        //uncomment below and update the code to test getRecordDataForNew
        //instance.getRecordDataForNew(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRecordDataForOwnerSearch', function() {
      it('should call getRecordDataForOwnerSearch successfully', function(done) {
        //uncomment below and update the code to test getRecordDataForOwnerSearch
        //instance.getRecordDataForOwnerSearch(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRecordDataForSharedSearch', function() {
      it('should call getRecordDataForSharedSearch successfully', function(done) {
        //uncomment below and update the code to test getRecordDataForSharedSearch
        //instance.getRecordDataForSharedSearch(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRecordTypeByOwner', function() {
      it('should call getRecordTypeByOwner successfully', function(done) {
        //uncomment below and update the code to test getRecordTypeByOwner
        //instance.getRecordTypeByOwner(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listRecordTypesByOwner', function() {
      it('should call listRecordTypesByOwner successfully', function(done) {
        //uncomment below and update the code to test listRecordTypesByOwner
        //instance.listRecordTypesByOwner(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listRecordTypesForGeneralSearch', function() {
      it('should call listRecordTypesForGeneralSearch successfully', function(done) {
        //uncomment below and update the code to test listRecordTypesForGeneralSearch
        //instance.listRecordTypesForGeneralSearch(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchGeneralRecords', function() {
      it('should call searchGeneralRecords successfully', function(done) {
        //uncomment below and update the code to test searchGeneralRecords
        //instance.searchGeneralRecords(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchOwnerRecords', function() {
      it('should call searchOwnerRecords successfully', function(done) {
        //uncomment below and update the code to test searchOwnerRecords
        //instance.searchOwnerRecords(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchSharedRecords', function() {
      it('should call searchSharedRecords successfully', function(done) {
        //uncomment below and update the code to test searchSharedRecords
        //instance.searchSharedRecords(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateRecord', function() {
      it('should call updateRecord successfully', function(done) {
        //uncomment below and update the code to test updateRecord
        //instance.updateRecord(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('viewRecord', function() {
      it('should call viewRecord successfully', function(done) {
        //uncomment below and update the code to test viewRecord
        //instance.viewRecord(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
