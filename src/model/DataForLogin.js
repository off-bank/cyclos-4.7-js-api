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
    define(['ApiClient', 'model/CaptchaProviderEnum', 'model/PasswordInput', 'model/PrincipalTypeInput', 'model/SendMediumEnum'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CaptchaProviderEnum'), require('./PasswordInput'), require('./PrincipalTypeInput'), require('./SendMediumEnum'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.DataForLogin = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.CaptchaProviderEnum, root.Cyclos471Api.PasswordInput, root.Cyclos471Api.PrincipalTypeInput, root.Cyclos471Api.SendMediumEnum);
  }
}(this, function(ApiClient, CaptchaProviderEnum, PasswordInput, PrincipalTypeInput, SendMediumEnum) {
  'use strict';




  /**
   * The DataForLogin model module.
   * @module model/DataForLogin
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>DataForLogin</code>.
   * Contains data useful for a login form, as well as forgot password 
   * @alias module:model/DataForLogin
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>DataForLogin</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataForLogin} obj Optional instance to populate.
   * @return {module:model/DataForLogin} The populated <code>DataForLogin</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('principalTypes')) {
        obj['principalTypes'] = ApiClient.convertToType(data['principalTypes'], [PrincipalTypeInput]);
      }
      if (data.hasOwnProperty('defaultPrincipalType')) {
        obj['defaultPrincipalType'] = ApiClient.convertToType(data['defaultPrincipalType'], 'String');
      }
      if (data.hasOwnProperty('loginPasswordInput')) {
        obj['loginPasswordInput'] = PasswordInput.constructFromObject(data['loginPasswordInput']);
      }
      if (data.hasOwnProperty('forgotPasswordCaptchaProvider')) {
        obj['forgotPasswordCaptchaProvider'] = CaptchaProviderEnum.constructFromObject(data['forgotPasswordCaptchaProvider']);
      }
      if (data.hasOwnProperty('forgotPasswordMediums')) {
        obj['forgotPasswordMediums'] = ApiClient.convertToType(data['forgotPasswordMediums'], [SendMediumEnum]);
      }
    }
    return obj;
  }

  /**
   * The identification methods accepted for login
   * @member {Array.<module:model/PrincipalTypeInput>} principalTypes
   */
  exports.prototype['principalTypes'] = undefined;
  /**
   * The internal name of the identification method that is marked as default for the current channel configuration. This is optional, and if there is no default, all possible identification methods will be attempted for login. 
   * @member {String} defaultPrincipalType
   */
  exports.prototype['defaultPrincipalType'] = undefined;
  /**
   * Contains data for the password used on login
   * @member {module:model/PasswordInput} loginPasswordInput
   */
  exports.prototype['loginPasswordInput'] = undefined;
  /**
   * If the forgot password request requires a captcha, will be the  provider used to request one. Otherwise will be null. Possible values are: * internal: Default provider using images 
   * @member {module:model/CaptchaProviderEnum} forgotPasswordCaptchaProvider
   */
  exports.prototype['forgotPasswordCaptchaProvider'] = undefined;
  /**
   * If the forgot password request is enabled, returns the mediums the user can choose to receive the confirmation key or code.  If nothing is returned, forgot password is not enabled. Possibles values for each array element are: * email: The user will receive an email with the information * sms: The user will receive a sms with the information (only if there is at least one phone enabled for sms) 
   * @member {Array.<module:model/SendMediumEnum>} forgotPasswordMediums
   */
  exports.prototype['forgotPasswordMediums'] = undefined;



  return exports;
}));


