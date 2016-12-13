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
    instance = new Cyclos471Api.UsersApi();
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

  describe('UsersApi', function() {
    describe('createUser', function() {
      it('should call createUser successfully', function(done) {
        //uncomment below and update the code to test createUser
        //instance.createUser(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDataForMapDirectory', function() {
      it('should call getDataForMapDirectory successfully', function(done) {
        //uncomment below and update the code to test getDataForMapDirectory
        //instance.getDataForMapDirectory(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGroupsForUserRegistration', function() {
      it('should call getGroupsForUserRegistration successfully', function(done) {
        //uncomment below and update the code to test getGroupsForUserRegistration
        //instance.getGroupsForUserRegistration(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserDataForEdit', function() {
      it('should call getUserDataForEdit successfully', function(done) {
        //uncomment below and update the code to test getUserDataForEdit
        //instance.getUserDataForEdit(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserDataForNew', function() {
      it('should call getUserDataForNew successfully', function(done) {
        //uncomment below and update the code to test getUserDataForNew
        //instance.getUserDataForNew(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserDataForSearch', function() {
      it('should call getUserDataForSearch successfully', function(done) {
        //uncomment below and update the code to test getUserDataForSearch
        //instance.getUserDataForSearch(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchMapDirectory', function() {
      it('should call searchMapDirectory successfully', function(done) {
        //uncomment below and update the code to test searchMapDirectory
        //instance.searchMapDirectory(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchUsers', function() {
      it('should call searchUsers successfully', function(done) {
        //uncomment below and update the code to test searchUsers
        //instance.searchUsers(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateUser', function() {
      it('should call updateUser successfully', function(done) {
        //uncomment below and update the code to test updateUser
        //instance.updateUser(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('viewUser', function() {
      it('should call viewUser successfully', function(done) {
        //uncomment below and update the code to test viewUser
        //instance.viewUser(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));