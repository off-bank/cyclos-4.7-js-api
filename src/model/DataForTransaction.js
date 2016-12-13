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
    define(['ApiClient', 'model/AccountKind', 'model/AccountWithStatus', 'model/IdentificationMethodEnum', 'model/PrincipalTypeInput', 'model/TransactionTypeData', 'model/TransferType', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountKind'), require('./AccountWithStatus'), require('./IdentificationMethodEnum'), require('./PrincipalTypeInput'), require('./TransactionTypeData'), require('./TransferType'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.DataForTransaction = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.AccountKind, root.Cyclos471Api.AccountWithStatus, root.Cyclos471Api.IdentificationMethodEnum, root.Cyclos471Api.PrincipalTypeInput, root.Cyclos471Api.TransactionTypeData, root.Cyclos471Api.TransferType, root.Cyclos471Api.User);
  }
}(this, function(ApiClient, AccountKind, AccountWithStatus, IdentificationMethodEnum, PrincipalTypeInput, TransactionTypeData, TransferType, User) {
  'use strict';




  /**
   * The DataForTransaction model module.
   * @module model/DataForTransaction
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>DataForTransaction</code>.
   * Contains basic configuration data used when performing a transaction. The path that returns it will normally receive the main transaction owner (system or user), plus 2 other optional parameters: - The other subject (system or user) that will either receive or perform   the payment. - The payment type. There are 3 possibilities when returning: - When the other subject wasn&#39;t selected. In this case, will contain very   few information, mostly the accounts. - The other subject is selected, but not a payment type. If so, the   payment types will be returned, but not information on how to pick   the subject user, or the accounts. - Both other subject and payment type are selected: In this case   only the payment type data will be returned 
   * @alias module:model/DataForTransaction
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>DataForTransaction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataForTransaction} obj Optional instance to populate.
   * @return {module:model/DataForTransaction} The populated <code>DataForTransaction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accounts')) {
        obj['accounts'] = ApiClient.convertToType(data['accounts'], [AccountWithStatus]);
      }
      if (data.hasOwnProperty('fromKind')) {
        obj['fromKind'] = AccountKind.constructFromObject(data['fromKind']);
      }
      if (data.hasOwnProperty('fromUser')) {
        obj['fromUser'] = User.constructFromObject(data['fromUser']);
      }
      if (data.hasOwnProperty('toKind')) {
        obj['toKind'] = AccountKind.constructFromObject(data['toKind']);
      }
      if (data.hasOwnProperty('toUser')) {
        obj['toUser'] = User.constructFromObject(data['toUser']);
      }
      if (data.hasOwnProperty('paymentTypeData')) {
        obj['paymentTypeData'] = TransactionTypeData.constructFromObject(data['paymentTypeData']);
      }
      if (data.hasOwnProperty('paymentTypes')) {
        obj['paymentTypes'] = ApiClient.convertToType(data['paymentTypes'], [TransferType]);
      }
      if (data.hasOwnProperty('allowAutocomplete')) {
        obj['allowAutocomplete'] = ApiClient.convertToType(data['allowAutocomplete'], 'Boolean');
      }
      if (data.hasOwnProperty('allowContacts')) {
        obj['allowContacts'] = ApiClient.convertToType(data['allowContacts'], 'Boolean');
      }
      if (data.hasOwnProperty('principalTypes')) {
        obj['principalTypes'] = ApiClient.convertToType(data['principalTypes'], [PrincipalTypeInput]);
      }
      if (data.hasOwnProperty('defaultIdMethod')) {
        obj['defaultIdMethod'] = IdentificationMethodEnum.constructFromObject(data['defaultIdMethod']);
      }
      if (data.hasOwnProperty('defaultPrincipalType')) {
        obj['defaultPrincipalType'] = ApiClient.convertToType(data['defaultPrincipalType'], 'String');
      }
    }
    return obj;
  }

  /**
   * Only returned when the payment type is not selected. Contains the possible accounts which can be used either as source (when performing the payment) or destination (when receiving the payment, on POS). 
   * @member {Array.<module:model/AccountWithStatus>} accounts
   */
  exports.prototype['accounts'] = undefined;
  /**
   * Indicates the account kind that will perform the payment
   * @member {module:model/AccountKind} fromKind
   */
  exports.prototype['fromKind'] = undefined;
  /**
   * Only returned if `fromKind` is `user`. Is the payer user. 
   * @member {module:model/User} fromUser
   */
  exports.prototype['fromUser'] = undefined;
  /**
   * Indicates the account kind that will receive the payment
   * @member {module:model/AccountKind} toKind
   */
  exports.prototype['toKind'] = undefined;
  /**
   * Only returned if `toKind` is `user`. Is the payee user. 
   * @member {module:model/User} toUser
   */
  exports.prototype['toUser'] = undefined;
  /**
   * Contains the detailed data for the selected (or first) payment type 
   * @member {module:model/TransactionTypeData} paymentTypeData
   */
  exports.prototype['paymentTypeData'] = undefined;
  /**
   * Only returned when the payment type is not selected. Contains the allowed payment types for a payment between the selected from and to owners. 
   * @member {Array.<module:model/TransferType>} paymentTypes
   */
  exports.prototype['paymentTypes'] = undefined;
  /**
   * Only returned when no subject is selected. Indicates whether the payee can be obtaining by freely searching users 
   * @member {Boolean} allowAutocomplete
   */
  exports.prototype['allowAutocomplete'] = undefined;
  /**
   * Only returned when no subject is selected. Indicates whether the payee can be obtaining from the contact list 
   * @member {Boolean} allowContacts
   */
  exports.prototype['allowContacts'] = undefined;
  /**
   * Only returned when no subject is selected. The possible principal types that can be used to locate the payee 
   * @member {Array.<module:model/PrincipalTypeInput>} principalTypes
   */
  exports.prototype['principalTypes'] = undefined;
  /**
   * Only returned when no subject is selected. The default option for the identification method when performing a payment. Possible values are: * autocomplete: The client application should search for an user and pass in the id * contacts: The client application should access the contact list of the authenticated user and pass the id * principalType: The client application should pass in an identification (principal) of the user, such as login name, e-mail and so on 
   * @member {module:model/IdentificationMethodEnum} defaultIdMethod
   */
  exports.prototype['defaultIdMethod'] = undefined;
  /**
   * Only returned when no subject is selected. If the `defaultIdMethod` is `principalType`, contains the internal name or id of the principal type that should be the default. If there is a default, the user should be provided with the option to choose which principal type he's using. If there is no default, all possible principal types will be attempted. In this case, the UI will normally not show the option for which principal type should be used. 
   * @member {String} defaultPrincipalType
   */
  exports.prototype['defaultPrincipalType'] = undefined;



  return exports;
}));

