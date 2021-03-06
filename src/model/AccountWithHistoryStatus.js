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
    define(['ApiClient', 'model/AccountHistoryStatus', 'model/AccountWithCurrency', 'model/Currency', 'model/EntityReference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountHistoryStatus'), require('./AccountWithCurrency'), require('./Currency'), require('./EntityReference'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.AccountWithHistoryStatus = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.AccountHistoryStatus, root.Cyclos471Api.AccountWithCurrency, root.Cyclos471Api.Currency, root.Cyclos471Api.EntityReference);
  }
}(this, function(ApiClient, AccountHistoryStatus, AccountWithCurrency, Currency, EntityReference) {
  'use strict';




  /**
   * The AccountWithHistoryStatus model module.
   * @module model/AccountWithHistoryStatus
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>AccountWithHistoryStatus</code>.
   * Account data plus account history status information
   * @alias module:model/AccountWithHistoryStatus
   * @class
   * @implements module:model/AccountWithCurrency
   */
  var exports = function() {
    var _this = this;

    AccountWithCurrency.call(_this);

  };

  /**
   * Constructs a <code>AccountWithHistoryStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountWithHistoryStatus} obj Optional instance to populate.
   * @return {module:model/AccountWithHistoryStatus} The populated <code>AccountWithHistoryStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      AccountWithCurrency.constructFromObject(data, obj);
      if (data.hasOwnProperty('status')) {
        obj['status'] = AccountHistoryStatus.constructFromObject(data['status']);
      }
    }
    return obj;
  }

  /**
   * The account history status
   * @member {module:model/AccountHistoryStatus} status
   */
  exports.prototype['status'] = undefined;

  // Implement AccountWithCurrency interface:
  /**
   * Entity identifier
   * @member {String} id
   */
exports.prototype['id'] = undefined;

  /**
   * The account number
   * @member {String} number
   */
exports.prototype['number'] = undefined;

  /**
   * Reference to the account type
   * @member {module:model/EntityReference} type
   */
exports.prototype['type'] = undefined;

  /**
   * Reference to the currency
   * @member {module:model/Currency} currency
   */
exports.prototype['currency'] = undefined;



  return exports;
}));


