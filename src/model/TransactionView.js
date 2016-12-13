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
    define(['ApiClient', 'model/AccountKind', 'model/Authorization', 'model/AuthorizationLevelData', 'model/AuthorizationPermissions', 'model/AuthorizationStatusEnum', 'model/BigDecimal', 'model/Currency', 'model/CustomFieldValue', 'model/EntityReference', 'model/ExternalPaymentStatusEnum', 'model/PasswordInput', 'model/PaymentRequestStatusEnum', 'model/RecurringPaymentOccurrence', 'model/RecurringPaymentStatusEnum', 'model/ScheduledPaymentInstallment', 'model/ScheduledPaymentStatusEnum', 'model/TimeInterval', 'model/Transaction', 'model/TransactionKind', 'model/TransactionSubjectsEnum', 'model/Transfer', 'model/TransferType', 'model/TransferView', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountKind'), require('./Authorization'), require('./AuthorizationLevelData'), require('./AuthorizationPermissions'), require('./AuthorizationStatusEnum'), require('./BigDecimal'), require('./Currency'), require('./CustomFieldValue'), require('./EntityReference'), require('./ExternalPaymentStatusEnum'), require('./PasswordInput'), require('./PaymentRequestStatusEnum'), require('./RecurringPaymentOccurrence'), require('./RecurringPaymentStatusEnum'), require('./ScheduledPaymentInstallment'), require('./ScheduledPaymentStatusEnum'), require('./TimeInterval'), require('./Transaction'), require('./TransactionKind'), require('./TransactionSubjectsEnum'), require('./Transfer'), require('./TransferType'), require('./TransferView'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.TransactionView = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.AccountKind, root.Cyclos471Api.Authorization, root.Cyclos471Api.AuthorizationLevelData, root.Cyclos471Api.AuthorizationPermissions, root.Cyclos471Api.AuthorizationStatusEnum, root.Cyclos471Api.BigDecimal, root.Cyclos471Api.Currency, root.Cyclos471Api.CustomFieldValue, root.Cyclos471Api.EntityReference, root.Cyclos471Api.ExternalPaymentStatusEnum, root.Cyclos471Api.PasswordInput, root.Cyclos471Api.PaymentRequestStatusEnum, root.Cyclos471Api.RecurringPaymentOccurrence, root.Cyclos471Api.RecurringPaymentStatusEnum, root.Cyclos471Api.ScheduledPaymentInstallment, root.Cyclos471Api.ScheduledPaymentStatusEnum, root.Cyclos471Api.TimeInterval, root.Cyclos471Api.Transaction, root.Cyclos471Api.TransactionKind, root.Cyclos471Api.TransactionSubjectsEnum, root.Cyclos471Api.Transfer, root.Cyclos471Api.TransferType, root.Cyclos471Api.TransferView, root.Cyclos471Api.User);
  }
}(this, function(ApiClient, AccountKind, Authorization, AuthorizationLevelData, AuthorizationPermissions, AuthorizationStatusEnum, BigDecimal, Currency, CustomFieldValue, EntityReference, ExternalPaymentStatusEnum, PasswordInput, PaymentRequestStatusEnum, RecurringPaymentOccurrence, RecurringPaymentStatusEnum, ScheduledPaymentInstallment, ScheduledPaymentStatusEnum, TimeInterval, Transaction, TransactionKind, TransactionSubjectsEnum, Transfer, TransferType, TransferView, User) {
  'use strict';




  /**
   * The TransactionView model module.
   * @module model/TransactionView
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>TransactionView</code>.
   * Details about a transaction 
   * @alias module:model/TransactionView
   * @class
   * @implements module:model/Transaction
   */
  var exports = function() {
    var _this = this;

    Transaction.call(_this);



































  };

  /**
   * Constructs a <code>TransactionView</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransactionView} obj Optional instance to populate.
   * @return {module:model/TransactionView} The populated <code>TransactionView</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      Transaction.constructFromObject(data, obj);
      if (data.hasOwnProperty('channel')) {
        obj['channel'] = EntityReference.constructFromObject(data['channel']);
      }
      if (data.hasOwnProperty('accessClient')) {
        obj['accessClient'] = EntityReference.constructFromObject(data['accessClient']);
      }
      if (data.hasOwnProperty('usersWhichCanAddToContacts')) {
        obj['usersWhichCanAddToContacts'] = TransactionSubjectsEnum.constructFromObject(data['usersWhichCanAddToContacts']);
      }
      if (data.hasOwnProperty('usersWhichCanViewProfile')) {
        obj['usersWhichCanViewProfile'] = TransactionSubjectsEnum.constructFromObject(data['usersWhichCanViewProfile']);
      }
      if (data.hasOwnProperty('by')) {
        obj['by'] = User.constructFromObject(data['by']);
      }
      if (data.hasOwnProperty('receivedBy')) {
        obj['receivedBy'] = User.constructFromObject(data['receivedBy']);
      }
      if (data.hasOwnProperty('received')) {
        obj['received'] = ApiClient.convertToType(data['received'], 'Boolean');
      }
      if (data.hasOwnProperty('customValues')) {
        obj['customValues'] = ApiClient.convertToType(data['customValues'], [CustomFieldValue]);
      }
      if (data.hasOwnProperty('confirmationPasswordInput')) {
        obj['confirmationPasswordInput'] = PasswordInput.constructFromObject(data['confirmationPasswordInput']);
      }
      if (data.hasOwnProperty('authorizationLevelData')) {
        obj['authorizationLevelData'] = AuthorizationLevelData.constructFromObject(data['authorizationLevelData']);
      }
      if (data.hasOwnProperty('authorizationPermissions')) {
        obj['authorizationPermissions'] = AuthorizationPermissions.constructFromObject(data['authorizationPermissions']);
      }
      if (data.hasOwnProperty('authorizations')) {
        obj['authorizations'] = ApiClient.convertToType(data['authorizations'], [Authorization]);
      }
      if (data.hasOwnProperty('transfer')) {
        obj['transfer'] = TransferView.constructFromObject(data['transfer']);
      }
      if (data.hasOwnProperty('scheduledPaymentStatus')) {
        obj['scheduledPaymentStatus'] = ScheduledPaymentStatusEnum.constructFromObject(data['scheduledPaymentStatus']);
      }
      if (data.hasOwnProperty('dueAmount')) {
        obj['dueAmount'] = ApiClient.convertToType(data['dueAmount'], BigDecimal);
      }
      if (data.hasOwnProperty('installments')) {
        obj['installments'] = ApiClient.convertToType(data['installments'], [ScheduledPaymentInstallment]);
      }
      if (data.hasOwnProperty('recurringPaymentStatus')) {
        obj['recurringPaymentStatus'] = RecurringPaymentStatusEnum.constructFromObject(data['recurringPaymentStatus']);
      }
      if (data.hasOwnProperty('nextOccurrenceDate')) {
        obj['nextOccurrenceDate'] = ApiClient.convertToType(data['nextOccurrenceDate'], 'Date');
      }
      if (data.hasOwnProperty('occurrenceInterval')) {
        obj['occurrenceInterval'] = TimeInterval.constructFromObject(data['occurrenceInterval']);
      }
      if (data.hasOwnProperty('occurrencesCount')) {
        obj['occurrencesCount'] = ApiClient.convertToType(data['occurrencesCount'], 'Number');
      }
      if (data.hasOwnProperty('occurrences')) {
        obj['occurrences'] = ApiClient.convertToType(data['occurrences'], [RecurringPaymentOccurrence]);
      }
      if (data.hasOwnProperty('originalTransfer')) {
        obj['originalTransfer'] = Transfer.constructFromObject(data['originalTransfer']);
      }
      if (data.hasOwnProperty('chargebackTransfer')) {
        obj['chargebackTransfer'] = Transfer.constructFromObject(data['chargebackTransfer']);
      }
      if (data.hasOwnProperty('comments')) {
        obj['comments'] = ApiClient.convertToType(data['comments'], 'String');
      }
      if (data.hasOwnProperty('expirationDate')) {
        obj['expirationDate'] = ApiClient.convertToType(data['expirationDate'], 'Date');
      }
      if (data.hasOwnProperty('paymentRequestStatus')) {
        obj['paymentRequestStatus'] = PaymentRequestStatusEnum.constructFromObject(data['paymentRequestStatus']);
      }
      if (data.hasOwnProperty('processDate')) {
        obj['processDate'] = ApiClient.convertToType(data['processDate'], 'Date');
      }
      if (data.hasOwnProperty('transaction')) {
        obj['transaction'] = Transaction.constructFromObject(data['transaction']);
      }
      if (data.hasOwnProperty('smsCode')) {
        obj['smsCode'] = ApiClient.convertToType(data['smsCode'], 'String');
      }
      if (data.hasOwnProperty('scheduled')) {
        obj['scheduled'] = ApiClient.convertToType(data['scheduled'], 'Boolean');
      }
      if (data.hasOwnProperty('installmentsCount')) {
        obj['installmentsCount'] = ApiClient.convertToType(data['installmentsCount'], 'Number');
      }
      if (data.hasOwnProperty('firstInstallmentIsImmediate')) {
        obj['firstInstallmentIsImmediate'] = ApiClient.convertToType(data['firstInstallmentIsImmediate'], 'Boolean');
      }
      if (data.hasOwnProperty('externalPaymentStatus')) {
        obj['externalPaymentStatus'] = ExternalPaymentStatusEnum.constructFromObject(data['externalPaymentStatus']);
      }
      if (data.hasOwnProperty('toPrincipalType')) {
        obj['toPrincipalType'] = EntityReference.constructFromObject(data['toPrincipalType']);
      }
      if (data.hasOwnProperty('toPrincipalValue')) {
        obj['toPrincipalValue'] = ApiClient.convertToType(data['toPrincipalValue'], 'String');
      }
    }
    return obj;
  }

  /**
   * The channel this transaction was performed on
   * @member {module:model/EntityReference} channel
   */
  exports.prototype['channel'] = undefined;
  /**
   * The access client in use when this transaction was performed 
   * @member {module:model/EntityReference} accessClient
   */
  exports.prototype['accessClient'] = undefined;
  /**
   * Reference to none, one of (from or to) or both subjects of a transaction (or transfer)  Possible values are: * none: Reference to none of the transaction subjects * from: Reference to the transaction from * to: Reference to the transaction to * both: Reference to both from and to subjects of the transaction 
   * @member {module:model/TransactionSubjectsEnum} usersWhichCanAddToContacts
   */
  exports.prototype['usersWhichCanAddToContacts'] = undefined;
  /**
   * Reference to none, one of (from or to) or both subjects of a transaction (or transfer)  Possible values are: * none: Reference to none of the transaction subjects * from: Reference to the transaction from * to: Reference to the transaction to * both: Reference to both from and to subjects of the transaction 
   * @member {module:model/TransactionSubjectsEnum} usersWhichCanViewProfile
   */
  exports.prototype['usersWhichCanViewProfile'] = undefined;
  /**
   * The user that actually performed the action. May be different than the from, for example, an administrator can perform payments in behalf of other users 
   * @member {module:model/User} by
   */
  exports.prototype['by'] = undefined;
  /**
   * The operator that actually received the payment.  Only available if some other user has paid directly to it  or the operator has received the payment vía POS. 
   * @member {module:model/User} receivedBy
   */
  exports.prototype['receivedBy'] = undefined;
  /**
   * True if the payment was received vía POS. 
   * @member {Boolean} received
   */
  exports.prototype['received'] = undefined;
  /**
   * The list of custom field values
   * @member {Array.<module:model/CustomFieldValue>} customValues
   */
  exports.prototype['customValues'] = undefined;
  /**
   * If a confirmation password is used, contains the definitions on how to request that password from the user. This confirmation password is required when performing sensible actions. Sometimes this is dynamic, for example, the confirmation might be configured to be used only once per session, or operations like payments may have a limit per day to be without confirmation (pinless). 
   * @member {module:model/PasswordInput} confirmationPasswordInput
   */
  exports.prototype['confirmationPasswordInput'] = undefined;
  /**
   * Only returned if the `kind` is either `payment`, `scheduledPayment` or `recurringPayment` and the transaction is pending for authorization. Contains data related to the current autorization level that can be authorized / denied. 
   * @member {module:model/AuthorizationLevelData} authorizationLevelData
   */
  exports.prototype['authorizationLevelData'] = undefined;
  /**
   * Permissions the authenticated user has over this payment regarding authorizations.
   * @member {module:model/AuthorizationPermissions} authorizationPermissions
   */
  exports.prototype['authorizationPermissions'] = undefined;
  /**
   * Contains the details of the authorizations this payment has (for the previous levels). To see the final status of the payment please check the `authorizationStatus` property.  
   * @member {Array.<module:model/Authorization>} authorizations
   */
  exports.prototype['authorizations'] = undefined;
  /**
   * Only returned if the `kind` is `payment`. This is the transfer generated when the payment was processed. Will be null if the went through authorization and was not authorized. Only returned if this `TransactionView` is not already in a `TransactionView`.  
   * @member {module:model/TransferView} transfer
   */
  exports.prototype['transfer'] = undefined;
  /**
   * The status of a scheduled payment Possible values are: * open: The scheduled payment has open installments * closed: The scheduled payment is closed * blocked: The scheduled payment is blocked - won't have any installment processed until being unblocked again * canceled: The scheduled payment, as well as all open installments were canceled 
   * @member {module:model/ScheduledPaymentStatusEnum} scheduledPaymentStatus
   */
  exports.prototype['scheduledPaymentStatus'] = undefined;
  /**
   * Only returned if the `kind` is `scheduledPayment`. Means the amount that is still needs to be paid until the last installment. 
   * @member {module:model/BigDecimal} dueAmount
   */
  exports.prototype['dueAmount'] = undefined;
  /**
   * Only returned if the `kind` is `scheduledPayment`. Contains the installment references. 
   * @member {Array.<module:model/ScheduledPaymentInstallment>} installments
   */
  exports.prototype['installments'] = undefined;
  /**
   * The status of a recurring payment Possible values are: * open: The recurring payment is open, as there are more future occurrences * closed: The recurring payment is closed, as the last scheduled occurrence was processed * canceled: The recurring payment was manually canceled 
   * @member {module:model/RecurringPaymentStatusEnum} recurringPaymentStatus
   */
  exports.prototype['recurringPaymentStatus'] = undefined;
  /**
   * Only returned if the `kind` is `recurringPayment`. The scheduled date for the next occurrence. 
   * @member {Date} nextOccurrenceDate
   */
  exports.prototype['nextOccurrenceDate'] = undefined;
  /**
   * Only returned if the `kind` is `recurringPayment`. The interval between occurrences. 
   * @member {module:model/TimeInterval} occurrenceInterval
   */
  exports.prototype['occurrenceInterval'] = undefined;
  /**
   * Only returned if the `kind` is `recurringPayment`. The programmed number of occurrences. If not set, means the payment will be processed until manually canceled. 
   * @member {Number} occurrencesCount
   */
  exports.prototype['occurrencesCount'] = undefined;
  /**
   * Only returned if the `kind` is `recurringPayment`. A list with all occurrences this payment has. 
   * @member {Array.<module:model/RecurringPaymentOccurrence>} occurrences
   */
  exports.prototype['occurrences'] = undefined;
  /**
   * Only returned if the `kind` is `chargeback`. This is the original transfer that has been charged back. 
   * @member {module:model/Transfer} originalTransfer
   */
  exports.prototype['originalTransfer'] = undefined;
  /**
   * Only returned if the `kind` is `chargeback`. This is the transfer which performed the chargeback. 
   * @member {module:model/Transfer} chargebackTransfer
   */
  exports.prototype['chargebackTransfer'] = undefined;
  /**
   * Only returned if the `kind` is either `paymentRequest` or `externalPayment`. The comments the user informed when performing the payment. 
   * @member {String} comments
   */
  exports.prototype['comments'] = undefined;
  /**
   * Only returned if the `kind` is either `paymentRequest` or `externalPayment`. The deadline for the payment to be processed. If no user is registered with either e-mail or mobile phone matching this external payment, it is canceled. 
   * @member {Date} expirationDate
   */
  exports.prototype['expirationDate'] = undefined;
  /**
   * The status of a payment request Possible values are: * open: The payment request is open and can be accepted * scheduled: The payment request has been accepted, and scheduled for processing on a future date * processed: The payment request was processed, and either a direct or scheduled payment was created from it * denied: The payment request was denied by the receiver * canceled: The payment request was canceled * expired: The payment request has expired - the received did not respond until the expiration date 
   * @member {module:model/PaymentRequestStatusEnum} paymentRequestStatus
   */
  exports.prototype['paymentRequestStatus'] = undefined;
  /**
   * Only returned if the `kind` is either `paymentRequest` and `status` is `processed`. The date the payment request was confirmed. 
   * @member {Date} processDate
   */
  exports.prototype['processDate'] = undefined;
  /**
   * Only returned if the `kind` is either `paymentRequest` and `status` is `processed`. Reference to the transaction that was generated when processing this payment request. 
   * @member {module:model/Transaction} transaction
   */
  exports.prototype['transaction'] = undefined;
  /**
   * Only returned if the `kind` is either `paymentRequest` and `status` is not `processed`. The code that can be used by the receiver to confirm this payment request via SMS operation. 
   * @member {String} smsCode
   */
  exports.prototype['smsCode'] = undefined;
  /**
   * Only returned if the `kind` is `paymentRequest`. Indicates whether a scheduled payment (`true`) or a regular payment (`false`) will be generated once this payment request is confirmed. 
   * @member {Boolean} scheduled
   */
  exports.prototype['scheduled'] = undefined;
  /**
   * Only returned if the `kind` is `paymentRequest` and `scheduled` is `true`. Indicates the number of installments to be generated. 
   * @member {Number} installmentsCount
   */
  exports.prototype['installmentsCount'] = undefined;
  /**
   * Only returned if the `kind` is `paymentRequest` and `scheduled` is `true`. Indicates whether the first installment should be processed immediately when the payment request is confirmed. 
   * @member {Boolean} firstInstallmentIsImmediate
   */
  exports.prototype['firstInstallmentIsImmediate'] = undefined;
  /**
   * The status of an external payment Possible values are: * pending: The external payment is pending, awaiting the destination user to be activated in Cyclos * expired: The external payment has expired without the destination user activation * processed: The external payment was processed, and the destination payment was created * failed: The external payment has failed processing * canceled: The external payment was canceled 
   * @member {module:model/ExternalPaymentStatusEnum} externalPaymentStatus
   */
  exports.prototype['externalPaymentStatus'] = undefined;
  /**
   * Only returned if the `kind` is `externalPayment`. Is the user identification method for this external payment (for example, e-mail or mobile phone). 
   * @member {module:model/EntityReference} toPrincipalType
   */
  exports.prototype['toPrincipalType'] = undefined;
  /**
   * Only returned if the `kind` is `externalPayment`. Is the user identification value for this external payment (for example, the e-mail or mobile phone values). 
   * @member {String} toPrincipalValue
   */
  exports.prototype['toPrincipalValue'] = undefined;

  // Implement Transaction interface:
  /**
   * Entity identifier
   * @member {String} id
   */
exports.prototype['id'] = undefined;

  /**
   * The transaction number identifying this balance transfer. The currency configuration has the definition on whether transaction numbers are enabled and which format they have. 
   * @member {String} transactionNumber
   */
exports.prototype['transactionNumber'] = undefined;

  /**
   * The transaction kind. For example, if the front end has distinct views for a regular payment, scheduled payment and so on, this information is useful to determine the actual view. Possible values are: * payment: A direct payment * recurringPayment: A payment which is processed again periodically * scheduledPayment: A scheduled payment which is either a payment scheduled for a future date or has multiple installments * paymentRequest: A request for another user to accept a payment  * externalPayment: A payment to an external user * chargeback: Chargeback of a given transfer * import: An imported transaction * order: Transaction generated by confirming an order 
   * @member {module:model/TransactionKind} kind
   */
exports.prototype['kind'] = undefined;

  /**
   * The transfer date and time
   * @member {Date} date
   */
exports.prototype['date'] = undefined;

  /**
   * The transfer amount. May be positive or negative.
   * @member {module:model/BigDecimal} amount
   */
exports.prototype['amount'] = undefined;

  /**
   * The from account kind
   * @member {module:model/AccountKind} fromKind
   */
exports.prototype['fromKind'] = undefined;

  /**
   * The user that performed this transaction. Is only returned if `fromKind` is `user`. 
   * @member {module:model/User} fromUser
   */
exports.prototype['fromUser'] = undefined;

  /**
   * The to account kind
   * @member {module:model/AccountKind} toKind
   */
exports.prototype['toKind'] = undefined;

  /**
   * The user that performed this transaction. Is only returned if `toKind` is `user`. 
   * @member {module:model/User} toUser
   */
exports.prototype['toUser'] = undefined;

  /**
   * The transaction type
   * @member {module:model/TransferType} type
   */
exports.prototype['type'] = undefined;

  /**
   * The transaction currency. Is only returned if this object is not embedded in a `TransferView`. 
   * @member {module:model/Currency} currency
   */
exports.prototype['currency'] = undefined;

  /**
   * The status regarding authorization a transaction is in. If configured, transactions can require one or more levels of authorization in order to be processed. If a transaction has the this status null, it means it never went through the authorization process.  Possible values are: * pending: The transaction is pending authorization * canceled: The authorization submission was canceled by the submitter * denied: The authorization was denied * authorized: The transaction was fully authorized and is processed 
   * @member {module:model/AuthorizationStatusEnum} authorizationStatus
   */
exports.prototype['authorizationStatus'] = undefined;

  /**
   * The transaction description. Is optional.
   * @member {String} description
   */
exports.prototype['description'] = undefined;



  return exports;
}));

