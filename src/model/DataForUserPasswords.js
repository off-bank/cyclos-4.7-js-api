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
    define(['ApiClient', 'model/PasswordInput', 'model/PasswordStatusAndPermissions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PasswordInput'), require('./PasswordStatusAndPermissions'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.DataForUserPasswords = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.PasswordInput, root.Cyclos471Api.PasswordStatusAndPermissions);
  }
}(this, function(ApiClient, PasswordInput, PasswordStatusAndPermissions) {
  'use strict';




  /**
   * The DataForUserPasswords model module.
   * @module model/DataForUserPasswords
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>DataForUserPasswords</code>.
   * Contains the data used to manage passwords of an user
   * @alias module:model/DataForUserPasswords
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>DataForUserPasswords</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataForUserPasswords} obj Optional instance to populate.
   * @return {module:model/DataForUserPasswords} The populated <code>DataForUserPasswords</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('confirmationPasswordInput')) {
        obj['confirmationPasswordInput'] = PasswordInput.constructFromObject(data['confirmationPasswordInput']);
      }
      if (data.hasOwnProperty('passwords')) {
        obj['passwords'] = ApiClient.convertToType(data['passwords'], [PasswordStatusAndPermissions]);
      }
    }
    return obj;
  }

  /**
   * If a confirmation password is used, contains the definitions on how to request that password from the user. This confirmation password is required when performing sensible actions. Sometimes this is dynamic, for example, the confirmation might be configured to be used only once per session, or operations like payments may have a limit per day to be without confirmation (pinless). 
   * @member {module:model/PasswordInput} confirmationPasswordInput
   */
  exports.prototype['confirmationPasswordInput'] = undefined;
  /**
   * The status and permissions for each password
   * @member {Array.<module:model/PasswordStatusAndPermissions>} passwords
   */
  exports.prototype['passwords'] = undefined;



  return exports;
}));


