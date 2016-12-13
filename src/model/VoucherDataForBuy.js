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
    define(['ApiClient', 'model/AccountWithStatus', 'model/BigDecimal', 'model/CustomFieldDetailed', 'model/PasswordInput', 'model/VoucherBasicData', 'model/VoucherType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountWithStatus'), require('./BigDecimal'), require('./CustomFieldDetailed'), require('./PasswordInput'), require('./VoucherBasicData'), require('./VoucherType'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.VoucherDataForBuy = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.AccountWithStatus, root.Cyclos471Api.BigDecimal, root.Cyclos471Api.CustomFieldDetailed, root.Cyclos471Api.PasswordInput, root.Cyclos471Api.VoucherBasicData, root.Cyclos471Api.VoucherType);
  }
}(this, function(ApiClient, AccountWithStatus, BigDecimal, CustomFieldDetailed, PasswordInput, VoucherBasicData, VoucherType) {
  'use strict';




  /**
   * The VoucherDataForBuy model module.
   * @module model/VoucherDataForBuy
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>VoucherDataForBuy</code>.
   * Data used to buy a voucher
   * @alias module:model/VoucherDataForBuy
   * @class
   * @implements module:model/VoucherBasicData
   */
  var exports = function() {
    var _this = this;

    VoucherBasicData.call(_this);


  };

  /**
   * Constructs a <code>VoucherDataForBuy</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoucherDataForBuy} obj Optional instance to populate.
   * @return {module:model/VoucherDataForBuy} The populated <code>VoucherDataForBuy</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      VoucherBasicData.constructFromObject(data, obj);
      if (data.hasOwnProperty('account')) {
        obj['account'] = AccountWithStatus.constructFromObject(data['account']);
      }
      if (data.hasOwnProperty('fixedAmount')) {
        obj['fixedAmount'] = ApiClient.convertToType(data['fixedAmount'], BigDecimal);
      }
    }
    return obj;
  }

  /**
   * The account from which the buy will be debited
   * @member {module:model/AccountWithStatus} account
   */
  exports.prototype['account'] = undefined;
  /**
   * Returned if the payment type for this voucher uses a fixed amount 
   * @member {module:model/BigDecimal} fixedAmount
   */
  exports.prototype['fixedAmount'] = undefined;

  // Implement VoucherBasicData interface:
  /**
   * The voucher title
   * @member {String} title
   */
exports.prototype['title'] = undefined;

  /**
   * The voucher description
   * @member {String} description
   */
exports.prototype['description'] = undefined;

  /**
   * The voucher type
   * @member {module:model/VoucherType} type
   */
exports.prototype['type'] = undefined;

  /**
   * The custom fields associated with this voucher type 
   * @member {Array.<module:model/CustomFieldDetailed>} customFields
   */
exports.prototype['customFields'] = undefined;

  /**
   * If a confirmation password is used, contains the definitions on how to request that password from the user. This confirmation password is required when performing sensible actions. Sometimes this is dynamic, for example, the confirmation might be configured to be used only once per session, or operations like payments may have a limit per day to be without confirmation (pinless). 
   * @member {module:model/PasswordInput} confirmationPasswordInput
   */
exports.prototype['confirmationPasswordInput'] = undefined;



  return exports;
}));


