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
    root.Cyclos471Api.DataForChangeForgottenPassword = factory(root.Cyclos471Api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DataForChangeForgottenPassword model module.
   * @module model/DataForChangeForgottenPassword
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>DataForChangeForgottenPassword</code>.
   * Definitions for an user to confirm a forgotten password request
   * @alias module:model/DataForChangeForgottenPassword
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>DataForChangeForgottenPassword</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataForChangeForgottenPassword} obj Optional instance to populate.
   * @return {module:model/DataForChangeForgottenPassword} The populated <code>DataForChangeForgottenPassword</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('generated')) {
        obj['generated'] = ApiClient.convertToType(data['generated'], 'Boolean');
      }
      if (data.hasOwnProperty('securityQuestion')) {
        obj['securityQuestion'] = ApiClient.convertToType(data['securityQuestion'], 'String');
      }
    }
    return obj;
  }

  /**
   * Indicates whether the password that is being affected is generated (when `true`) or manual (when `false`). 
   * @member {Boolean} generated
   */
  exports.prototype['generated'] = undefined;
  /**
   * If configured in Cyclos, and defined by the user, will be the security question that needs to be answered in order to complete the forgotten password reset request. 
   * @member {String} securityQuestion
   */
  exports.prototype['securityQuestion'] = undefined;



  return exports;
}));


