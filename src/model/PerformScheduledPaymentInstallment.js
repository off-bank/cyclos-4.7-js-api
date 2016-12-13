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
    define(['ApiClient', 'model/BigDecimal'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BigDecimal'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.PerformScheduledPaymentInstallment = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.BigDecimal);
  }
}(this, function(ApiClient, BigDecimal) {
  'use strict';




  /**
   * The PerformScheduledPaymentInstallment model module.
   * @module model/PerformScheduledPaymentInstallment
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>PerformScheduledPaymentInstallment</code>.
   * An installment definition when performing a scheduled payment
   * @alias module:model/PerformScheduledPaymentInstallment
   * @class
   * @param dueDate {Date} The installment due date
   * @param amount {module:model/BigDecimal} The installment amount
   */
  var exports = function(dueDate, amount) {
    var _this = this;

    _this['dueDate'] = dueDate;
    _this['amount'] = amount;
  };

  /**
   * Constructs a <code>PerformScheduledPaymentInstallment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PerformScheduledPaymentInstallment} obj Optional instance to populate.
   * @return {module:model/PerformScheduledPaymentInstallment} The populated <code>PerformScheduledPaymentInstallment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('dueDate')) {
        obj['dueDate'] = ApiClient.convertToType(data['dueDate'], 'Date');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], BigDecimal);
      }
    }
    return obj;
  }

  /**
   * The installment due date
   * @member {Date} dueDate
   */
  exports.prototype['dueDate'] = undefined;
  /**
   * The installment amount
   * @member {module:model/BigDecimal} amount
   */
  exports.prototype['amount'] = undefined;



  return exports;
}));


