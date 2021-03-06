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
    define(['ApiClient', 'model/PasswordInput', 'model/PhoneBasicData', 'model/PhoneEdit'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PasswordInput'), require('./PhoneBasicData'), require('./PhoneEdit'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.PhoneDataForEdit = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.PasswordInput, root.Cyclos471Api.PhoneBasicData, root.Cyclos471Api.PhoneEdit);
  }
}(this, function(ApiClient, PasswordInput, PhoneBasicData, PhoneEdit) {
  'use strict';




  /**
   * The PhoneDataForEdit model module.
   * @module model/PhoneDataForEdit
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>PhoneDataForEdit</code>.
   * Contains data for editing a new phone 
   * @alias module:model/PhoneDataForEdit
   * @class
   * @implements module:model/PhoneBasicData
   */
  var exports = function() {
    var _this = this;

    PhoneBasicData.call(_this);



  };

  /**
   * Constructs a <code>PhoneDataForEdit</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PhoneDataForEdit} obj Optional instance to populate.
   * @return {module:model/PhoneDataForEdit} The populated <code>PhoneDataForEdit</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      PhoneBasicData.constructFromObject(data, obj);
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = PhoneEdit.constructFromObject(data['phone']);
      }
      if (data.hasOwnProperty('edit')) {
        obj['edit'] = ApiClient.convertToType(data['edit'], 'Boolean');
      }
      if (data.hasOwnProperty('managePrivacy')) {
        obj['managePrivacy'] = ApiClient.convertToType(data['managePrivacy'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The phone that is being edited. This value can be modified and sent back on `PUT /phones/{id}`. 
   * @member {module:model/PhoneEdit} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * Can the authenticated user edit this phone?
   * @member {Boolean} edit
   */
  exports.prototype['edit'] = undefined;
  /**
   * Can the authenticated user manage the privacy of this phone?
   * @member {Boolean} managePrivacy
   */
  exports.prototype['managePrivacy'] = undefined;

  // Implement PhoneBasicData interface:
  /**
   * Only returned for land line phones. Indicates whether the extension is enabled. 
   * @member {Boolean} extensionEnabled
   */
exports.prototype['extensionEnabled'] = undefined;

  /**
   * Only returned for mobile phones. Indicates whether outbound SMS is enabled in Cyclos 
   * @member {Boolean} smsEnabled
   */
exports.prototype['smsEnabled'] = undefined;

  /**
   * If a confirmation password is used, contains the definitions on how to request that password from the user. This confirmation password is required when performing sensible actions. Sometimes this is dynamic, for example, the confirmation might be configured to be used only once per session, or operations like payments may have a limit per day to be without confirmation (pinless). 
   * @member {module:model/PasswordInput} confirmationPasswordInput
   */
exports.prototype['confirmationPasswordInput'] = undefined;



  return exports;
}));


