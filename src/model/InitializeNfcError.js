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
    define(['ApiClient', 'model/BaseNfcError', 'model/ErrorKind', 'model/InitializeNfcErrorCode', 'model/TokenDetailed'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BaseNfcError'), require('./ErrorKind'), require('./InitializeNfcErrorCode'), require('./TokenDetailed'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.InitializeNfcError = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.BaseNfcError, root.Cyclos471Api.ErrorKind, root.Cyclos471Api.InitializeNfcErrorCode, root.Cyclos471Api.TokenDetailed);
  }
}(this, function(ApiClient, BaseNfcError, ErrorKind, InitializeNfcErrorCode, TokenDetailed) {
  'use strict';




  /**
   * The InitializeNfcError model module.
   * @module model/InitializeNfcError
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>InitializeNfcError</code>.
   * Error when initialize a NFC card
   * @alias module:model/InitializeNfcError
   * @class
   * @implements module:model/BaseNfcError
   * @param exceptionType {String} The server exception class name (not intended to be shown to  final users. Only for logging purposes) 
   */
  var exports = function(exceptionType) {
    var _this = this;

    BaseNfcError.call(_this, exceptionType);

  };

  /**
   * Constructs a <code>InitializeNfcError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InitializeNfcError} obj Optional instance to populate.
   * @return {module:model/InitializeNfcError} The populated <code>InitializeNfcError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      BaseNfcError.constructFromObject(data, obj);
      if (data.hasOwnProperty('code')) {
        obj['code'] = InitializeNfcErrorCode.constructFromObject(data['code']);
      }
    }
    return obj;
  }

  /**
   * Application-specific error codes for an initialize NFC error  Possible values are: * tokenInUse: The token specified for initialization is already in use (exists and it is active) * unexpected: An unexpected error has occurred. See the `exceptionType` and `exceptionMessage` fields for the internal information. 
   * @member {module:model/InitializeNfcErrorCode} code
   */
  exports.prototype['code'] = undefined;

  // Implement BaseNfcError interface:
  /**
   * Error types associated to the HTTP Status 500 Possible values are: * payment: An error has occurred when making a payment * pos: An error has occurred when receiving a payment on a POS operation * buyVoucher: An error has occurred when buying a voucher  * redeemVoucher: An error has occurred when redeeming a voucher  * otp: An error has occurred requesting an OTP * initializeNfc: An error has occurred when initializing a NFC token * personalizeNfc: An error has occurred when personalizing a NFC token * nfcAuth: An error has occurred when making an external NFC authentication * general: An unexpected error has occurred 
   * @member {module:model/ErrorKind} kind
   */
exports.prototype['kind'] = undefined;

  /**
   * The server exception class name (not intended to be shown to  final users. Only for logging purposes) 
   * @member {String} exceptionType
   */
exports.prototype['exceptionType'] = undefined;

  /**
   * The server exception message (not intended to be shown to  final users. Only for logging purposes) 
   * @member {String} exceptionMessage
   */
exports.prototype['exceptionMessage'] = undefined;

  /**
   * NFC Token reference.
   * @member {module:model/TokenDetailed} token
   */
exports.prototype['token'] = undefined;



  return exports;
}));


