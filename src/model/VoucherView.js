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
    define(['ApiClient', 'model/BigDecimal', 'model/Transaction', 'model/User', 'model/VoucherCreationTypeEnum', 'model/VoucherResult', 'model/VoucherStatusEnum', 'model/VoucherType', 'model/WeekDayEnum'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BigDecimal'), require('./Transaction'), require('./User'), require('./VoucherCreationTypeEnum'), require('./VoucherResult'), require('./VoucherStatusEnum'), require('./VoucherType'), require('./WeekDayEnum'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.VoucherView = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.BigDecimal, root.Cyclos471Api.Transaction, root.Cyclos471Api.User, root.Cyclos471Api.VoucherCreationTypeEnum, root.Cyclos471Api.VoucherResult, root.Cyclos471Api.VoucherStatusEnum, root.Cyclos471Api.VoucherType, root.Cyclos471Api.WeekDayEnum);
  }
}(this, function(ApiClient, BigDecimal, Transaction, User, VoucherCreationTypeEnum, VoucherResult, VoucherStatusEnum, VoucherType, WeekDayEnum) {
  'use strict';




  /**
   * The VoucherView model module.
   * @module model/VoucherView
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>VoucherView</code>.
   * Details of a voucher 
   * @alias module:model/VoucherView
   * @class
   * @implements module:model/VoucherResult
   */
  var exports = function() {
    var _this = this;

    VoucherResult.call(_this);









  };

  /**
   * Constructs a <code>VoucherView</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoucherView} obj Optional instance to populate.
   * @return {module:model/VoucherView} The populated <code>VoucherView</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      VoucherResult.constructFromObject(data, obj);
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('creationType')) {
        obj['creationType'] = VoucherCreationTypeEnum.constructFromObject(data['creationType']);
      }
      if (data.hasOwnProperty('buy')) {
        obj['buy'] = Transaction.constructFromObject(data['buy']);
      }
      if (data.hasOwnProperty('redeemDate')) {
        obj['redeemDate'] = ApiClient.convertToType(data['redeemDate'], 'Date');
      }
      if (data.hasOwnProperty('redeem')) {
        obj['redeem'] = Transaction.constructFromObject(data['redeem']);
      }
      if (data.hasOwnProperty('canCancel')) {
        obj['canCancel'] = ApiClient.convertToType(data['canCancel'], 'Boolean');
      }
      if (data.hasOwnProperty('showConfiguration')) {
        obj['showConfiguration'] = ApiClient.convertToType(data['showConfiguration'], 'Boolean');
      }
      if (data.hasOwnProperty('showQrCode')) {
        obj['showQrCode'] = ApiClient.convertToType(data['showQrCode'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The voucher title when it was created.
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * The voucher description when it was created.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Indicates how a voucher was created Possible values are: * generated: The voucher was generated by an administrator * bought: The voucher was bought by an user 
   * @member {module:model/VoucherCreationTypeEnum} creationType
   */
  exports.prototype['creationType'] = undefined;
  /**
   * The transaction which bought this voucher, if any and visible. 
   * @member {module:model/Transaction} buy
   */
  exports.prototype['buy'] = undefined;
  /**
   * The date the voucher was redeemer, if any.
   * @member {Date} redeemDate
   */
  exports.prototype['redeemDate'] = undefined;
  /**
   * The transaction which redeemed this voucher, if any and visible. 
   * @member {module:model/Transaction} redeem
   */
  exports.prototype['redeem'] = undefined;
  /**
   * Can the authenticated user cancel this voucher?
   * @member {Boolean} canCancel
   */
  exports.prototype['canCancel'] = undefined;
  /**
   * Should the voucher configuration be shown to users? This flag is `true` when there are multiple available configurations. 
   * @member {Boolean} showConfiguration
   */
  exports.prototype['showConfiguration'] = undefined;
  /**
   * Should the voucher token be shown as QR-code for users?
   * @member {Boolean} showQrCode
   */
  exports.prototype['showQrCode'] = undefined;

  // Implement VoucherResult interface:
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



  return exports;
}));

