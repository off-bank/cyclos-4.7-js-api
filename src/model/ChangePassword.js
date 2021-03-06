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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.ChangePassword = factory(root.Cyclos471Api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ChangePassword model module.
   * @module model/ChangePassword
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>ChangePassword</code>.
   * Contains fields used as parameters when changing an user&#39;s password 
   * @alias module:model/ChangePassword
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ChangePassword</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChangePassword} obj Optional instance to populate.
   * @return {module:model/ChangePassword} The populated <code>ChangePassword</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('oldPassword')) {
        obj['oldPassword'] = ApiClient.convertToType(data['oldPassword'], 'String');
      }
      if (data.hasOwnProperty('newPassword')) {
        obj['newPassword'] = ApiClient.convertToType(data['newPassword'], 'String');
      }
      if (data.hasOwnProperty('forceChange')) {
        obj['forceChange'] = ApiClient.convertToType(data['forceChange'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The current password value. Required when the user is changing his own password. Not used when admins / brokers are changing the password of an user they manage. 
   * @member {String} oldPassword
   */
  exports.prototype['oldPassword'] = undefined;
  /**
   * The new password value. Required.
   * @member {String} newPassword
   */
  exports.prototype['newPassword'] = undefined;
  /**
   * Indicates whether the new password needs to be changed on the next login. Only used when admins / brokers are changing the password of an user they manage. 
   * @member {Boolean} forceChange
   */
  exports.prototype['forceChange'] = undefined;



  return exports;
}));


