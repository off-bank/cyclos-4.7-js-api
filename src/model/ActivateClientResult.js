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
    define(['ApiClient', 'model/EntityReference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EntityReference'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.ActivateClientResult = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.EntityReference);
  }
}(this, function(ApiClient, EntityReference) {
  'use strict';




  /**
   * The ActivateClientResult model module.
   * @module model/ActivateClientResult
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>ActivateClientResult</code>.
   * Data about an access client activation
   * @alias module:model/ActivateClientResult
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ActivateClientResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActivateClientResult} obj Optional instance to populate.
   * @return {module:model/ActivateClientResult} The populated <code>ActivateClientResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
      if (data.hasOwnProperty('accessClient')) {
        obj['accessClient'] = EntityReference.constructFromObject(data['accessClient']);
      }
      if (data.hasOwnProperty('accessClientType')) {
        obj['accessClientType'] = EntityReference.constructFromObject(data['accessClientType']);
      }
    }
    return obj;
  }

  /**
   * The generated access client token. It should be passed using the `Access-Client-Token` header. If a prefix was informed on activation, it will not be returned, here, but should be sent prepending the returned token 
   * @member {String} token
   */
  exports.prototype['token'] = undefined;
  /**
   * A reference to the activated access client
   * @member {module:model/EntityReference} accessClient
   */
  exports.prototype['accessClient'] = undefined;
  /**
   * A reference to the access client type
   * @member {module:model/EntityReference} accessClientType
   */
  exports.prototype['accessClientType'] = undefined;



  return exports;
}));

