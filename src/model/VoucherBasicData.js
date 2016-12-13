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
    define(['ApiClient', 'model/CustomFieldDetailed', 'model/PasswordInput', 'model/VoucherType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomFieldDetailed'), require('./PasswordInput'), require('./VoucherType'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.VoucherBasicData = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.CustomFieldDetailed, root.Cyclos471Api.PasswordInput, root.Cyclos471Api.VoucherType);
  }
}(this, function(ApiClient, CustomFieldDetailed, PasswordInput, VoucherType) {
  'use strict';




  /**
   * The VoucherBasicData model module.
   * @module model/VoucherBasicData
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>VoucherBasicData</code>.
   * Contains common data for either buying or redeeming a voucher
   * @alias module:model/VoucherBasicData
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>VoucherBasicData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoucherBasicData} obj Optional instance to populate.
   * @return {module:model/VoucherBasicData} The populated <code>VoucherBasicData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = VoucherType.constructFromObject(data['type']);
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], [CustomFieldDetailed]);
      }
      if (data.hasOwnProperty('confirmationPasswordInput')) {
        obj['confirmationPasswordInput'] = PasswordInput.constructFromObject(data['confirmationPasswordInput']);
      }
    }
    return obj;
  }

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


