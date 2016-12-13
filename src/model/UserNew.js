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
    define(['ApiClient', 'model/AddressNew', 'model/CaptchaResponse', 'model/PasswordRegistration', 'model/PhoneNew', 'model/UserManage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AddressNew'), require('./CaptchaResponse'), require('./PasswordRegistration'), require('./PhoneNew'), require('./UserManage'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.UserNew = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.AddressNew, root.Cyclos471Api.CaptchaResponse, root.Cyclos471Api.PasswordRegistration, root.Cyclos471Api.PhoneNew, root.Cyclos471Api.UserManage);
  }
}(this, function(ApiClient, AddressNew, CaptchaResponse, PasswordRegistration, PhoneNew, UserManage) {
  'use strict';




  /**
   * The UserNew model module.
   * @module model/UserNew
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>UserNew</code>.
   * Contains data used to register an user. All basic profile fields (full name, login name, e-mail, phones, addresses and image) can be enabled or disabled on Cyclos, via products. Also, the available custom fields and whether they can be hidden depend on the products the selected group has. 
   * @alias module:model/UserNew
   * @class
   * @implements module:model/UserManage
   */
  var exports = function() {
    var _this = this;

    UserManage.call(_this);









  };

  /**
   * Constructs a <code>UserNew</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserNew} obj Optional instance to populate.
   * @return {module:model/UserNew} The populated <code>UserNew</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      UserManage.constructFromObject(data, obj);
      if (data.hasOwnProperty('group')) {
        obj['group'] = ApiClient.convertToType(data['group'], 'String');
      }
      if (data.hasOwnProperty('addresses')) {
        obj['addresses'] = ApiClient.convertToType(data['addresses'], [AddressNew]);
      }
      if (data.hasOwnProperty('mobilePhones')) {
        obj['mobilePhones'] = ApiClient.convertToType(data['mobilePhones'], [PhoneNew]);
      }
      if (data.hasOwnProperty('landLinePhones')) {
        obj['landLinePhones'] = ApiClient.convertToType(data['landLinePhones'], [PhoneNew]);
      }
      if (data.hasOwnProperty('passwords')) {
        obj['passwords'] = ApiClient.convertToType(data['passwords'], [PasswordRegistration]);
      }
      if (data.hasOwnProperty('images')) {
        obj['images'] = ApiClient.convertToType(data['images'], ['String']);
      }
      if (data.hasOwnProperty('captcha')) {
        obj['captcha'] = CaptchaResponse.constructFromObject(data['captcha']);
      }
      if (data.hasOwnProperty('acceptAgreement')) {
        obj['acceptAgreement'] = ApiClient.convertToType(data['acceptAgreement'], 'Boolean');
      }
      if (data.hasOwnProperty('skipActivationEmail')) {
        obj['skipActivationEmail'] = ApiClient.convertToType(data['skipActivationEmail'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The initial user group
   * @member {String} group
   */
  exports.prototype['group'] = undefined;
  /**
   * Addresses to be registered together with the user
   * @member {Array.<module:model/AddressNew>} addresses
   */
  exports.prototype['addresses'] = undefined;
  /**
   * Mobile phones to be registered together with the user
   * @member {Array.<module:model/PhoneNew>} mobilePhones
   */
  exports.prototype['mobilePhones'] = undefined;
  /**
   * Land-line phones to be registered together with the user
   * @member {Array.<module:model/PhoneNew>} landLinePhones
   */
  exports.prototype['landLinePhones'] = undefined;
  /**
   * The initial passwords of the user
   * @member {Array.<module:model/PasswordRegistration>} passwords
   */
  exports.prototype['passwords'] = undefined;
  /**
   * The ids of previously uploaded user temporary images to be initially used as profile images 
   * @member {Array.<String>} images
   */
  exports.prototype['images'] = undefined;
  /**
   * The captcha response is required on public registrations, and ignored when administrators / brokers register another user.
   * @member {module:model/CaptchaResponse} captcha
   */
  exports.prototype['captcha'] = undefined;
  /**
   * When there are agreements that need to be accepted for registration, this property must be passed with the value true
   * @member {Boolean} acceptAgreement
   */
  exports.prototype['acceptAgreement'] = undefined;
  /**
   * When set to true, the activation e-mail is not sent to the registered user. Can only be used when an administrator / broker is registering an user, and ignored on public registrations (the e-mail is always sent on public registrations).
   * @member {Boolean} skipActivationEmail
   */
  exports.prototype['skipActivationEmail'] = undefined;

  // Implement UserManage interface:
  /**
   * The user's full name
   * @member {String} name
   */
exports.prototype['name'] = undefined;

  /**
   * The user's login name
   * @member {String} username
   */
exports.prototype['username'] = undefined;

  /**
   * The user's e-mail
   * @member {String} email
   */
exports.prototype['email'] = undefined;

  /**
   * Holds the custom field values, keyed by field internal name or id. The format of the value depends on the custom field type. In order to lookup the custom fields, use either the `GET /users/data-for-new` (when creating) or `GET /users/{user}/data-for-edit` (when modifying) an user, and lookup each field by either internal name. Example: `{..., \"customValues\": {\"gender\": \"male\", \"birthDate\": \"1980-10-27\"}}` 
   * @member {Object.<String, String>} customValues
   */
exports.prototype['customValues'] = undefined;

  /**
   * An array with the internal names of either the basic or custom fields that should be hidden from other users. Currently the only basic profile field that can be hidden is email. Any other will be considered a custom field, and should be the same key as used in the 'customValues' property. 
   * @member {Array.<String>} hiddenFields
   */
exports.prototype['hiddenFields'] = undefined;



  return exports;
}));


