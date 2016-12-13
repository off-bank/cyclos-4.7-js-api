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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountPermissions', 'model/MarketplacePermissions', 'model/RecordType', 'model/UsersPermissions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountPermissions'), require('./MarketplacePermissions'), require('./RecordType'), require('./UsersPermissions'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.Permissions = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.AccountPermissions, root.Cyclos471Api.MarketplacePermissions, root.Cyclos471Api.RecordType, root.Cyclos471Api.UsersPermissions);
  }
}(this, function(ApiClient, AccountPermissions, MarketplacePermissions, RecordType, UsersPermissions) {
  'use strict';




  /**
   * The Permissions model module.
   * @module model/Permissions
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>Permissions</code>.
   * Contains all permissions and configurations an user or guest can perform in the REST API 
   * @alias module:model/Permissions
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Permissions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Permissions} obj Optional instance to populate.
   * @return {module:model/Permissions} The populated <code>Permissions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('users')) {
        obj['users'] = UsersPermissions.constructFromObject(data['users']);
      }
      if (data.hasOwnProperty('accounts')) {
        obj['accounts'] = ApiClient.convertToType(data['accounts'], [AccountPermissions]);
      }
      if (data.hasOwnProperty('marketplace')) {
        obj['marketplace'] = MarketplacePermissions.constructFromObject(data['marketplace']);
      }
      if (data.hasOwnProperty('userRecords')) {
        obj['userRecords'] = ApiClient.convertToType(data['userRecords'], [RecordType]);
      }
      if (data.hasOwnProperty('systemRecords')) {
        obj['systemRecords'] = ApiClient.convertToType(data['systemRecords'], [RecordType]);
      }
    }
    return obj;
  }

  /**
   * Permissions over other users
   * @member {module:model/UsersPermissions} users
   */
  exports.prototype['users'] = undefined;
  /**
   * Permissions over each owned account
   * @member {Array.<module:model/AccountPermissions>} accounts
   */
  exports.prototype['accounts'] = undefined;
  /**
   * Permissions for marketplace
   * @member {module:model/MarketplacePermissions} marketplace
   */
  exports.prototype['marketplace'] = undefined;
  /**
   * List of user record types the user has access
   * @member {Array.<module:model/RecordType>} userRecords
   */
  exports.prototype['userRecords'] = undefined;
  /**
   * List of system record types the user has access
   * @member {Array.<module:model/RecordType>} systemRecords
   */
  exports.prototype['systemRecords'] = undefined;



  return exports;
}));


