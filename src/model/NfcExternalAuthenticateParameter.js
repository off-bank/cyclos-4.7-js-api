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
    define(['ApiClient', 'model/NfcTagKeyEnum', 'model/NfcTokenParameter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NfcTagKeyEnum'), require('./NfcTokenParameter'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.NfcExternalAuthenticateParameter = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.NfcTagKeyEnum, root.Cyclos471Api.NfcTokenParameter);
  }
}(this, function(ApiClient, NfcTagKeyEnum, NfcTokenParameter) {
  'use strict';




  /**
   * The NfcExternalAuthenticateParameter model module.
   * @module model/NfcExternalAuthenticateParameter
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>NfcExternalAuthenticateParameter</code>.
   * Parameters for an external authentication 
   * @alias module:model/NfcExternalAuthenticateParameter
   * @class
   * @implements module:model/NfcTokenParameter
   */
  var exports = function() {
    var _this = this;

    NfcTokenParameter.call(_this);


  };

  /**
   * Constructs a <code>NfcExternalAuthenticateParameter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NfcExternalAuthenticateParameter} obj Optional instance to populate.
   * @return {module:model/NfcExternalAuthenticateParameter} The populated <code>NfcExternalAuthenticateParameter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      NfcTokenParameter.constructFromObject(data, obj);
      if (data.hasOwnProperty('key')) {
        obj['key'] = NfcTagKeyEnum.constructFromObject(data['key']);
      }
      if (data.hasOwnProperty('tagChallenge')) {
        obj['tagChallenge'] = ApiClient.convertToType(data['tagChallenge'], 'String');
      }
    }
    return obj;
  }

  /**
   * The NFC key over which the authentication is performed. Defaults to `operational`.         Possible values are: * piccMaster: The PICC master key, used to format the tag * appMaster: The application master key, used by Cyclos to create the application on the tag * operational: A key stored within the application that is used to guarantee the presence of the card in sensitive operations, such as receive payment (POS) or personalize the tag 
   * @member {module:model/NfcTagKeyEnum} key
   */
  exports.prototype['key'] = undefined;
  /**
   * The challenge generated by the NFC tag, encoded as hex
   * @member {String} tagChallenge
   */
  exports.prototype['tagChallenge'] = undefined;

  // Implement NfcTokenParameter interface:
  /**
   * Either the identifier or internal name of fhe NFC token type
   * @member {String} type
   */
exports.prototype['type'] = undefined;

  /**
   * The token value. Is normally the internal tag idenfifier, encoded as hex   
   * @member {String} token
   */
exports.prototype['token'] = undefined;



  return exports;
}));


