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
    define(['ApiClient', 'model/BigDecimal', 'model/BuyVoucherErrorCode', 'model/Currency', 'model/Error', 'model/ErrorKind', 'model/PaymentError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BigDecimal'), require('./BuyVoucherErrorCode'), require('./Currency'), require('./Error'), require('./ErrorKind'), require('./PaymentError'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.BuyVoucherError = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.BigDecimal, root.Cyclos471Api.BuyVoucherErrorCode, root.Cyclos471Api.Currency, root.Cyclos471Api.Error, root.Cyclos471Api.ErrorKind, root.Cyclos471Api.PaymentError);
  }
}(this, function(ApiClient, BigDecimal, BuyVoucherErrorCode, Currency, Error, ErrorKind, PaymentError) {
  'use strict';




  /**
   * The BuyVoucherError model module.
   * @module model/BuyVoucherError
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>BuyVoucherError</code>.
   * Error when buying a voucher
   * @alias module:model/BuyVoucherError
   * @class
   * @implements module:model/Error
   * @param exceptionType {String} The server exception class name (not intended to be shown to  final users. Only for logging purposes) 
   */
  var exports = function(exceptionType) {
    var _this = this;

    Error.call(_this, exceptionType);







  };

  /**
   * Constructs a <code>BuyVoucherError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BuyVoucherError} obj Optional instance to populate.
   * @return {module:model/BuyVoucherError} The populated <code>BuyVoucherError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      Error.constructFromObject(data, obj);
      if (data.hasOwnProperty('code')) {
        obj['code'] = BuyVoucherErrorCode.constructFromObject(data['code']);
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = Currency.constructFromObject(data['currency']);
      }
      if (data.hasOwnProperty('amountLeftForBuying')) {
        obj['amountLeftForBuying'] = ApiClient.convertToType(data['amountLeftForBuying'], BigDecimal);
      }
      if (data.hasOwnProperty('dateAllowedAgain')) {
        obj['dateAllowedAgain'] = ApiClient.convertToType(data['dateAllowedAgain'], 'Date');
      }
      if (data.hasOwnProperty('currentOpenAmount')) {
        obj['currentOpenAmount'] = ApiClient.convertToType(data['currentOpenAmount'], BigDecimal);
      }
      if (data.hasOwnProperty('maxOpenAmount')) {
        obj['maxOpenAmount'] = ApiClient.convertToType(data['maxOpenAmount'], BigDecimal);
      }
      if (data.hasOwnProperty('paymentError')) {
        obj['paymentError'] = PaymentError.constructFromObject(data['paymentError']);
      }
    }
    return obj;
  }

  /**
   * Possible errors when buying a voucher Possible values are: * maxAmountForPeriod: The maximum allowed buy amount for a period (example, a month) has been exceeded * maxOpenAmount: The maximum open amount for this voucher type for the buyer user has been exceeded * notAllowedForUser: The user attempting to buy vouchers is not allowed to buy vouchers of this type * payment: There was an error when performing the payment * maxTotalOpenAmount: The maximum total open amount for this voucher type, for all users, has been exceeded * unexpected: An unexpected error has occurred. See the `exceptionType` and `exceptionMessage` fields for the internal information. 
   * @member {module:model/BuyVoucherErrorCode} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Currency reference. Only if `code` is `maxAmountForPeriod` or `maxTotalOpenAmount`           
   * @member {module:model/Currency} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * Indicates the maximum amount the user can buy this time without exceeding the maximum. Only if `code` is `maxAmountForPeriod`. 
   * @member {module:model/BigDecimal} amountLeftForBuying
   */
  exports.prototype['amountLeftForBuying'] = undefined;
  /**
   * Indicates the date this user will be able to buy vouchers again for this type. Only if `code` is `maxAmountForPeriod`. 
   * @member {Date} dateAllowedAgain
   */
  exports.prototype['dateAllowedAgain'] = undefined;
  /**
   * Indicates the current total amount that is open. Only if `code` is `maxOpenAmount` or `maxTotalOpenAmount`. 
   * @member {module:model/BigDecimal} currentOpenAmount
   */
  exports.prototype['currentOpenAmount'] = undefined;
  /**
   * Indicates the maximum total open amount. Only if `code` is `maxOpenAmount` or `maxTotalOpenAmount`. 
   * @member {module:model/BigDecimal} maxOpenAmount
   */
  exports.prototype['maxOpenAmount'] = undefined;
  /**
   * The `PaymentError` generated when the voucher payment was being created. Only if `code` is `payment`. 
   * @member {module:model/PaymentError} paymentError
   */
  exports.prototype['paymentError'] = undefined;

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


