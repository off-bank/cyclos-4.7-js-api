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
    define(['ApiClient', 'model/AccountWithOwner', 'model/BigDecimal', 'model/CustomFieldValue', 'model/InternalTransactionPreview', 'model/PasswordInput', 'model/PerformPayment', 'model/ScheduledPaymentInstallmentPreview', 'model/TransferFeePreview'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountWithOwner'), require('./BigDecimal'), require('./CustomFieldValue'), require('./InternalTransactionPreview'), require('./PasswordInput'), require('./PerformPayment'), require('./ScheduledPaymentInstallmentPreview'), require('./TransferFeePreview'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.PaymentPreview = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.AccountWithOwner, root.Cyclos471Api.BigDecimal, root.Cyclos471Api.CustomFieldValue, root.Cyclos471Api.InternalTransactionPreview, root.Cyclos471Api.PasswordInput, root.Cyclos471Api.PerformPayment, root.Cyclos471Api.ScheduledPaymentInstallmentPreview, root.Cyclos471Api.TransferFeePreview);
  }
}(this, function(ApiClient, AccountWithOwner, BigDecimal, CustomFieldValue, InternalTransactionPreview, PasswordInput, PerformPayment, ScheduledPaymentInstallmentPreview, TransferFeePreview) {
  'use strict';




  /**
   * The PaymentPreview model module.
   * @module model/PaymentPreview
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>PaymentPreview</code>.
   * Preview of either a direct or scheduled payment
   * @alias module:model/PaymentPreview
   * @class
   * @implements module:model/InternalTransactionPreview
   */
  var exports = function() {
    var _this = this;

    InternalTransactionPreview.call(_this);








  };

  /**
   * Constructs a <code>PaymentPreview</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentPreview} obj Optional instance to populate.
   * @return {module:model/PaymentPreview} The populated <code>PaymentPreview</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      InternalTransactionPreview.constructFromObject(data, obj);
      if (data.hasOwnProperty('mainAmount')) {
        obj['mainAmount'] = ApiClient.convertToType(data['mainAmount'], BigDecimal);
      }
      if (data.hasOwnProperty('fees')) {
        obj['fees'] = ApiClient.convertToType(data['fees'], [TransferFeePreview]);
      }
      if (data.hasOwnProperty('installments')) {
        obj['installments'] = ApiClient.convertToType(data['installments'], [ScheduledPaymentInstallmentPreview]);
      }
      if (data.hasOwnProperty('payment')) {
        obj['payment'] = PerformPayment.constructFromObject(data['payment']);
      }
      if (data.hasOwnProperty('ARate')) {
        obj['ARate'] = ApiClient.convertToType(data['ARate'], BigDecimal);
      }
      if (data.hasOwnProperty('DRate')) {
        obj['DRate'] = ApiClient.convertToType(data['DRate'], BigDecimal);
      }
      if (data.hasOwnProperty('previousDRate')) {
        obj['previousDRate'] = ApiClient.convertToType(data['previousDRate'], BigDecimal);
      }
      if (data.hasOwnProperty('transferDRate')) {
        obj['transferDRate'] = ApiClient.convertToType(data['transferDRate'], BigDecimal);
      }
    }
    return obj;
  }

  /**
   * Depending on the configured fees, it could happen that the main amount is deducted from fees amount. This reflects the new main amount. If no fees deduct, it will be the same as `totalAmount`. 
   * @member {module:model/BigDecimal} mainAmount
   */
  exports.prototype['mainAmount'] = undefined;
  /**
   * Only returned for direct payments. Contains the fees that would be paid by the payer if the payment is confirmed. 
   * @member {Array.<module:model/TransferFeePreview>} fees
   */
  exports.prototype['fees'] = undefined;
  /**
   * Only returned for scheduled payments. Contains the previews of each installment, if the payment is confirmed. 
   * @member {Array.<module:model/ScheduledPaymentInstallmentPreview>} installments
   */
  exports.prototype['installments'] = undefined;
  /**
   * Depending on the configuration, some script might alter the payment object, for example, filling in custom fields. This object can be used to show the actual data to the user, and to be posted again to the `POST /{owner}/payments/` path. 
   * @member {module:model/PerformPayment} payment
   */
  exports.prototype['payment'] = undefined;
  /**
   * The balance aging counter used for this payment
   * @member {module:model/BigDecimal} ARate
   */
  exports.prototype['ARate'] = undefined;
  /**
   * The balance maturity used for this payment
   * @member {module:model/BigDecimal} DRate
   */
  exports.prototype['DRate'] = undefined;
  /**
   * The number of days until the present balance reaches its maturity  
   * @member {module:model/BigDecimal} previousDRate
   */
  exports.prototype['previousDRate'] = undefined;
  /**
   * The maturity used for this payment
   * @member {module:model/BigDecimal} transferDRate
   */
  exports.prototype['transferDRate'] = undefined;

  // Implement InternalTransactionPreview interface:
  /**
   * If configured in the payment type, is a message to be shown to the user before confirming the transaction 
   * @member {String} confirmationMessage
   */
exports.prototype['confirmationMessage'] = undefined;

  /**
   * If a confirmation password is used, contains the definitions on how to request that password from the user. This confirmation password is required when performing sensible actions. Sometimes this is dynamic, for example, the confirmation might be configured to be used only once per session, or operations like payments may have a limit per day to be without confirmation (pinless). 
   * @member {module:model/PasswordInput} confirmationPasswordInput
   */
exports.prototype['confirmationPasswordInput'] = undefined;

  /**
   * A reference to the origin account
   * @member {module:model/AccountWithOwner} fromAccount
   */
exports.prototype['fromAccount'] = undefined;

  /**
   * The final total transaction amount
   * @member {module:model/BigDecimal} totalAmount
   */
exports.prototype['totalAmount'] = undefined;

  /**
   * The list of custom field values, in a detailed view
   * @member {Array.<module:model/CustomFieldValue>} customValues
   */
exports.prototype['customValues'] = undefined;

  /**
   * Indicates whether the transaction would be initially pending authorization in order to be processed 
   * @member {Boolean} pendingAuthorization
   */
exports.prototype['pendingAuthorization'] = undefined;

  /**
   * A reference to the destination account
   * @member {module:model/AccountWithOwner} toAccount
   */
exports.prototype['toAccount'] = undefined;



  return exports;
}));


