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
    define(['ApiClient', 'model/Error', 'model/ErrorKind', 'model/OtpErrorCode', 'model/OutboundSmsStatusEnum'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Error'), require('./ErrorKind'), require('./OtpErrorCode'), require('./OutboundSmsStatusEnum'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.OtpError = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.Error, root.Cyclos471Api.ErrorKind, root.Cyclos471Api.OtpErrorCode, root.Cyclos471Api.OutboundSmsStatusEnum);
  }
}(this, function(ApiClient, Error, ErrorKind, OtpErrorCode, OutboundSmsStatusEnum) {
  'use strict';




  /**
   * The OtpError model module.
   * @module model/OtpError
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>OtpError</code>.
   * Error when requesting a new One-time-Password (OTP)
   * @alias module:model/OtpError
   * @class
   * @implements module:model/Error
   * @param exceptionType {String} The server exception class name (not intended to be shown to  final users. Only for logging purposes) 
   */
  var exports = function(exceptionType) {
    var _this = this;

    Error.call(_this, exceptionType);


  };

  /**
   * Constructs a <code>OtpError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OtpError} obj Optional instance to populate.
   * @return {module:model/OtpError} The populated <code>OtpError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      Error.constructFromObject(data, obj);
      if (data.hasOwnProperty('code')) {
        obj['code'] = OtpErrorCode.constructFromObject(data['code']);
      }
      if (data.hasOwnProperty('smsStatus')) {
        obj['smsStatus'] = OutboundSmsStatusEnum.constructFromObject(data['smsStatus']);
      }
    }
    return obj;
  }

  /**
   * Application-specific error codes for an OTP error. Possible values are: * errorSendingSms: An error has occurred trying to send the OTP through SMS. * unexpected: An unexpected error has occurred.  
   * @member {module:model/OtpErrorCode} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Only if code is `errorSendingSms` Possible values are: * success: The SMS message was successfully sent * invalid: The parameters for sending an SMS message were invalid * maxMessagesReached: The maximum SMS messages for the user (or guest) have been reached * gatewayUreachable: Network problem, or gateway server down * timeout: Timeout while connecting or waiting for a gateway server reply * rejected: The gateway has rejected the SMS message * unexpected: An unexpected error has occurred 
   * @member {module:model/OutboundSmsStatusEnum} smsStatus
   */
  exports.prototype['smsStatus'] = undefined;

  // Implement Error interface:
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



  return exports;
}));


