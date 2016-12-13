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
    root.Cyclos471Api.AuthorizationPermissions = factory(root.Cyclos471Api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AuthorizationPermissions model module.
   * @module model/AuthorizationPermissions
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>AuthorizationPermissions</code>.
   * Permissions the user has over a pending payment.
   * @alias module:model/AuthorizationPermissions
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>AuthorizationPermissions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuthorizationPermissions} obj Optional instance to populate.
   * @return {module:model/AuthorizationPermissions} The populated <code>AuthorizationPermissions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('authorize')) {
        obj['authorize'] = ApiClient.convertToType(data['authorize'], 'Boolean');
      }
      if (data.hasOwnProperty('deny')) {
        obj['deny'] = ApiClient.convertToType(data['deny'], 'Boolean');
      }
      if (data.hasOwnProperty('cancel')) {
        obj['cancel'] = ApiClient.convertToType(data['cancel'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The payment can be authorized.
   * @member {Boolean} authorize
   */
  exports.prototype['authorize'] = undefined;
  /**
   * The payment can be denied.
   * @member {Boolean} deny
   */
  exports.prototype['deny'] = undefined;
  /**
   * The payment can be cenceled regardless the current authorization level.
   * @member {Boolean} cancel
   */
  exports.prototype['cancel'] = undefined;



  return exports;
}));


