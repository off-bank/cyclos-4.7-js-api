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
    define(['ApiClient', 'model/BigDecimal', 'model/User', 'model/Voucher', 'model/VoucherStatusEnum', 'model/VoucherType', 'model/WeekDayEnum'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BigDecimal'), require('./User'), require('./Voucher'), require('./VoucherStatusEnum'), require('./VoucherType'), require('./WeekDayEnum'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.VoucherResult = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.BigDecimal, root.Cyclos471Api.User, root.Cyclos471Api.Voucher, root.Cyclos471Api.VoucherStatusEnum, root.Cyclos471Api.VoucherType, root.Cyclos471Api.WeekDayEnum);
  }
}(this, function(ApiClient, BigDecimal, User, Voucher, VoucherStatusEnum, VoucherType, WeekDayEnum) {
  'use strict';




  /**
   * The VoucherResult model module.
   * @module model/VoucherResult
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>VoucherResult</code>.
   * Result of a voucher search 
   * @alias module:model/VoucherResult
   * @class
   * @implements module:model/Voucher
   */
  var exports = function() {
    var _this = this;

    Voucher.call(_this);








  };

  /**
   * Constructs a <code>VoucherResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoucherResult} obj Optional instance to populate.
   * @return {module:model/VoucherResult} The populated <code>VoucherResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      Voucher.constructFromObject(data, obj);
      if (data.hasOwnProperty('buyer')) {
        obj['buyer'] = User.constructFromObject(data['buyer']);
      }
      if (data.hasOwnProperty('creationDate')) {
        obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
      }
      if (data.hasOwnProperty('expirationDate')) {
        obj['expirationDate'] = ApiClient.convertToType(data['expirationDate'], 'Date');
      }
      if (data.hasOwnProperty('redeemer')) {
        obj['redeemer'] = User.constructFromObject(data['redeemer']);
      }
      if (data.hasOwnProperty('redeemDate')) {
        obj['redeemDate'] = ApiClient.convertToType(data['redeemDate'], 'Date');
      }
      if (data.hasOwnProperty('redeemAfterDate')) {
        obj['redeemAfterDate'] = ApiClient.convertToType(data['redeemAfterDate'], 'Date');
      }
      if (data.hasOwnProperty('redeemOnWeekDays')) {
        obj['redeemOnWeekDays'] = ApiClient.convertToType(data['redeemOnWeekDays'], [WeekDayEnum]);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = VoucherType.constructFromObject(data['type']);
      }
    }
    return obj;
  }

  /**
   * The voucher buyer. Is not returned when the voucher was generated or when searching for bought vouchers of an user. 
   * @member {module:model/User} buyer
   */
  exports.prototype['buyer'] = undefined;
  /**
   * The date a voucher was generated or bought
   * @member {Date} creationDate
   */
  exports.prototype['creationDate'] = undefined;
  /**
   * The date a voucher expires
   * @member {Date} expirationDate
   */
  exports.prototype['expirationDate'] = undefined;
  /**
   * The voucher redeemer. Is not returned when the voucher was not yet redeemed or when searching for redeemed vouchers of an user. 
   * @member {module:model/User} redeemer
   */
  exports.prototype['redeemer'] = undefined;
  /**
   * The date a voucher was redeemed (if so)
   * @member {Date} redeemDate
   */
  exports.prototype['redeemDate'] = undefined;
  /**
   * The date after which the voucher can be redeemed. Is only returned if the voucher `status` is `open`. 
   * @member {Date} redeemAfterDate
   */
  exports.prototype['redeemAfterDate'] = undefined;
  /**
   * The days of the week a voucher can be redeemed. Is only returned if the voucher `status` is `open`. Possibles values for each array element are: * sun: Sunday * mon: Monday * tue: Tuesday * wed: Wednesday * thu: Thursday * fri: Friday * sat: Saturday 
   * @member {Array.<module:model/WeekDayEnum>} redeemOnWeekDays
   */
  exports.prototype['redeemOnWeekDays'] = undefined;
  /**
   * The voucher type
   * @member {module:model/VoucherType} type
   */
  exports.prototype['type'] = undefined;

  // Implement Voucher interface:
  /**
   * Entity identifier
   * @member {String} id
   */
exports.prototype['id'] = undefined;

  /**
   * The voucher statuses Possible values are: * open: The voucher has been generated / bought, and is open * expired: The voucher has expired without being redeemed * canceled: The voucher was canceled, and cannot be further used * redeemed: The voucher has been redeemed, and the corresponding payment was done 
   * @member {module:model/VoucherStatusEnum} status
   */
exports.prototype['status'] = undefined;

  /**
   * The voucher amount
   * @member {module:model/BigDecimal} amount
   */
exports.prototype['amount'] = undefined;

  /**
   * The voucher token
   * @member {String} token
   */
exports.prototype['token'] = undefined;



  return exports;
}));


