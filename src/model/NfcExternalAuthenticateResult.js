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
    root.Cyclos471Api.NfcExternalAuthenticateResult = factory(root.Cyclos471Api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NfcExternalAuthenticateResult model module.
   * @module model/NfcExternalAuthenticateResult
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>NfcExternalAuthenticateResult</code>.
   * Result for a NFC external authenticate 
   * @alias module:model/NfcExternalAuthenticateResult
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>NfcExternalAuthenticateResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NfcExternalAuthenticateResult} obj Optional instance to populate.
   * @return {module:model/NfcExternalAuthenticateResult} The populated <code>NfcExternalAuthenticateResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cyclosChallenge')) {
        obj['cyclosChallenge'] = ApiClient.convertToType(data['cyclosChallenge'], 'String');
      }
      if (data.hasOwnProperty('sessionKey')) {
        obj['sessionKey'] = ApiClient.convertToType(data['sessionKey'], 'String');
      }
    }
    return obj;
  }

  /**
   * The Cyclos-generated challenge encoded as hex. This challenge has to be encrypted by the NFC tag 
   * @member {String} cyclosChallenge
   */
  exports.prototype['cyclosChallenge'] = undefined;
  /**
   * The session key to be used on subsequent NFC operations, encoded as hex 
   * @member {String} sessionKey
   */
  exports.prototype['sessionKey'] = undefined;



  return exports;
}));


