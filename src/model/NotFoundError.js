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
    root.Cyclos471Api.NotFoundError = factory(root.Cyclos471Api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NotFoundError model module.
   * @module model/NotFoundError
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>NotFoundError</code>.
   * Error returned when some expected data was not found
   * @alias module:model/NotFoundError
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>NotFoundError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotFoundError} obj Optional instance to populate.
   * @return {module:model/NotFoundError} The populated <code>NotFoundError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entityType')) {
        obj['entityType'] = ApiClient.convertToType(data['entityType'], 'String');
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
    }
    return obj;
  }

  /**
   * The name of the entity being attempted, but not found
   * @member {String} entityType
   */
  exports.prototype['entityType'] = undefined;
  /**
   * The identifier used to attempt to find the entity, such as id, internal name, principal, etc   
   * @member {String} key
   */
  exports.prototype['key'] = undefined;



  return exports;
}));

