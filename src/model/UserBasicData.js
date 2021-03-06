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
    define(['ApiClient', 'model/CustomFieldDetailed', 'model/PasswordInput', 'model/ProfileFieldActions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomFieldDetailed'), require('./PasswordInput'), require('./ProfileFieldActions'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.UserBasicData = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.CustomFieldDetailed, root.Cyclos471Api.PasswordInput, root.Cyclos471Api.ProfileFieldActions);
  }
}(this, function(ApiClient, CustomFieldDetailed, PasswordInput, ProfileFieldActions) {
  'use strict';




  /**
   * The UserBasicData model module.
   * @module model/UserBasicData
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>UserBasicData</code>.
   * Contains properties shared by both UserDataForNew and UserDataForEdit 
   * @alias module:model/UserBasicData
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>UserBasicData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserBasicData} obj Optional instance to populate.
   * @return {module:model/UserBasicData} The populated <code>UserBasicData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('emailRequired')) {
        obj['emailRequired'] = ApiClient.convertToType(data['emailRequired'], 'Boolean');
      }
      if (data.hasOwnProperty('profileFieldActions')) {
        obj['profileFieldActions'] = ApiClient.convertToType(data['profileFieldActions'], {'String': ProfileFieldActions});
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
   * Indicates whether the e-mail is required
   * @member {Boolean} emailRequired
   */
  exports.prototype['emailRequired'] = undefined;
  /**
   * An object, keyed by profile field internal name (either one of the basic profile fields or custom fields), containing other objects that defines the allowed actions over these profile fields 
   * @member {Object.<String, module:model/ProfileFieldActions>} profileFieldActions
   */
  exports.prototype['profileFieldActions'] = undefined;
  /**
   * The available custom field definitions
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


