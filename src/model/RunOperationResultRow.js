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
    root.Cyclos471Api.RunOperationResultRow = factory(root.Cyclos471Api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RunOperationResultRow model module.
   * @module model/RunOperationResultRow
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>RunOperationResultRow</code>.
   * A row returned when the custom operation resultType is &#x60;resultPage&#x60;. Even though by a swagger limitation the definition has &#x60;additionalProperties&#x60; as &#x60;string&#x60;, the actual type of each cell depend on the script. That means cells could be booleans, numbers or even other objects, beside string.  
   * @alias module:model/RunOperationResultRow
   * @class
   * @extends Object
   */
  var exports = function() {
    var _this = this;

    return _this;
  };

  /**
   * Constructs a <code>RunOperationResultRow</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RunOperationResultRow} obj Optional instance to populate.
   * @return {module:model/RunOperationResultRow} The populated <code>RunOperationResultRow</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, String);

    }
    return obj;
  }




  return exports;
}));

