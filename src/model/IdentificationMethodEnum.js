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
    root.Cyclos471Api.IdentificationMethodEnum = factory(root.Cyclos471Api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class IdentificationMethodEnum.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "autocomplete"
     * @const
     */
    "autocomplete": "autocomplete",
    /**
     * value: "contacts"
     * @const
     */
    "contacts": "contacts",
    /**
     * value: "principalType"
     * @const
     */
    "principalType": "principalType"  };

  /**
   * Returns a <code>IdentificationMethodEnum</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/IdentificationMethodEnum} The enum <code>IdentificationMethodEnum</code> value.
   */
  exports.constructFromObject = function(object) {
    return exports[object];
  }

  return exports;
}));


