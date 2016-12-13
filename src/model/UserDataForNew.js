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
    define(['ApiClient', 'model/AddressConfigurationForUserRegistration', 'model/AgreementContent', 'model/CaptchaProviderEnum', 'model/CustomFieldDetailed', 'model/PasswordInput', 'model/PasswordTypeRegistration', 'model/PhoneConfigurationForUserRegistration', 'model/ProfileFieldActions', 'model/UserBasicData', 'model/UserNew'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AddressConfigurationForUserRegistration'), require('./AgreementContent'), require('./CaptchaProviderEnum'), require('./CustomFieldDetailed'), require('./PasswordInput'), require('./PasswordTypeRegistration'), require('./PhoneConfigurationForUserRegistration'), require('./ProfileFieldActions'), require('./UserBasicData'), require('./UserNew'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.UserDataForNew = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.AddressConfigurationForUserRegistration, root.Cyclos471Api.AgreementContent, root.Cyclos471Api.CaptchaProviderEnum, root.Cyclos471Api.CustomFieldDetailed, root.Cyclos471Api.PasswordInput, root.Cyclos471Api.PasswordTypeRegistration, root.Cyclos471Api.PhoneConfigurationForUserRegistration, root.Cyclos471Api.ProfileFieldActions, root.Cyclos471Api.UserBasicData, root.Cyclos471Api.UserNew);
  }
}(this, function(ApiClient, AddressConfigurationForUserRegistration, AgreementContent, CaptchaProviderEnum, CustomFieldDetailed, PasswordInput, PasswordTypeRegistration, PhoneConfigurationForUserRegistration, ProfileFieldActions, UserBasicData, UserNew) {
  'use strict';




  /**
   * The UserDataForNew model module.
   * @module model/UserDataForNew
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>UserDataForNew</code>.
   * Contains data used to register an user
   * @alias module:model/UserDataForNew
   * @class
   * @implements module:model/UserBasicData
   */
  var exports = function() {
    var _this = this;

    UserBasicData.call(_this);








  };

  /**
   * Constructs a <code>UserDataForNew</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserDataForNew} obj Optional instance to populate.
   * @return {module:model/UserDataForNew} The populated <code>UserDataForNew</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      UserBasicData.constructFromObject(data, obj);
      if (data.hasOwnProperty('allowSetSendActivationEmail')) {
        obj['allowSetSendActivationEmail'] = ApiClient.convertToType(data['allowSetSendActivationEmail'], 'Boolean');
      }
      if (data.hasOwnProperty('generatedUsername')) {
        obj['generatedUsername'] = ApiClient.convertToType(data['generatedUsername'], 'Boolean');
      }
      if (data.hasOwnProperty('addressConfiguration')) {
        obj['addressConfiguration'] = AddressConfigurationForUserRegistration.constructFromObject(data['addressConfiguration']);
      }
      if (data.hasOwnProperty('phoneConfiguration')) {
        obj['phoneConfiguration'] = PhoneConfigurationForUserRegistration.constructFromObject(data['phoneConfiguration']);
      }
      if (data.hasOwnProperty('passwordTypes')) {
        obj['passwordTypes'] = ApiClient.convertToType(data['passwordTypes'], [PasswordTypeRegistration]);
      }
      if (data.hasOwnProperty('captchaType')) {
        obj['captchaType'] = CaptchaProviderEnum.constructFromObject(data['captchaType']);
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = UserNew.constructFromObject(data['user']);
      }
      if (data.hasOwnProperty('agreements')) {
        obj['agreements'] = ApiClient.convertToType(data['agreements'], [AgreementContent]);
      }
    }
    return obj;
  }

  /**
   * Whether the current user is allowed to skip the activateion e-mail 
   * @member {Boolean} allowSetSendActivationEmail
   */
  exports.prototype['allowSetSendActivationEmail'] = undefined;
  /**
   * Indicates whether the login name is generated
   * @member {Boolean} generatedUsername
   */
  exports.prototype['generatedUsername'] = undefined;
  /**
   * Configuration for registering addresses
   * @member {module:model/AddressConfigurationForUserRegistration} addressConfiguration
   */
  exports.prototype['addressConfiguration'] = undefined;
  /**
   * Configuration for registering phones
   * @member {module:model/PhoneConfigurationForUserRegistration} phoneConfiguration
   */
  exports.prototype['phoneConfiguration'] = undefined;
  /**
   * The password types that should be registered together with the user 
   * @member {Array.<module:model/PasswordTypeRegistration>} passwordTypes
   */
  exports.prototype['passwordTypes'] = undefined;
  /**
   * description: >   The captcha provider used to requested a captcha for registration,   or null if no captcha is needed. Possible values are: * internal: Default provider using images 
   * @member {module:model/CaptchaProviderEnum} captchaType
   */
  exports.prototype['captchaType'] = undefined;
  /**
   * The object that can be altered and posted back to register the user 
   * @member {module:model/UserNew} user
   */
  exports.prototype['user'] = undefined;
  /**
   * The agreements that needs to be accepted by the user to be able to register. Only returned for public registrations. 
   * @member {Array.<module:model/AgreementContent>} agreements
   */
  exports.prototype['agreements'] = undefined;

  // Implement UserBasicData interface:
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

