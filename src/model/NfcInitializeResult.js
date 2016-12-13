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
    root.Cyclos471Api.NfcInitializeResult = factory(root.Cyclos471Api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NfcInitializeResult model module.
   * @module model/NfcInitializeResult
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>NfcInitializeResult</code>.
   * Contains the keys that should be stored on the NFC tag 
   * @alias module:model/NfcInitializeResult
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>NfcInitializeResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NfcInitializeResult} obj Optional instance to populate.
   * @return {module:model/NfcInitializeResult} The populated <code>NfcInitializeResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('tagKey')) {
        obj['tagKey'] = ApiClient.convertToType(data['tagKey'], 'String');
      }
      if (data.hasOwnProperty('applicationKey')) {
        obj['applicationKey'] = ApiClient.convertToType(data['applicationKey'], 'String');
      }
      if (data.hasOwnProperty('operationalKey')) {
        obj['operationalKey'] = ApiClient.convertToType(data['operationalKey'], 'String');
      }
    }
    return obj;
  }

  /**
   * The PICC Master Key that should be used to seal the NFC tag, encoded as hex. 
   * @member {String} tagKey
   */
  exports.prototype['tagKey'] = undefined;
  /**
   * The Application Master Key that should be used on the application entry of the NFC tag, encoded as hex. 
   * @member {String} applicationKey
   */
  exports.prototype['applicationKey'] = undefined;
  /**
   * The Application Key used to operate with the tag, encoded as hex. Used when making a payment or to assign an already initialized tag to a user. 
   * @member {String} operationalKey
   */
  exports.prototype['operationalKey'] = undefined;



  return exports;
}));

