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
    define(['ApiClient', 'model/InternalNamedEntity', 'model/PasswordInputMethodEnum', 'model/PasswordModeEnum', 'model/SendMediumEnum'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InternalNamedEntity'), require('./PasswordInputMethodEnum'), require('./PasswordModeEnum'), require('./SendMediumEnum'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.PasswordInput = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.InternalNamedEntity, root.Cyclos471Api.PasswordInputMethodEnum, root.Cyclos471Api.PasswordModeEnum, root.Cyclos471Api.SendMediumEnum);
  }
}(this, function(ApiClient, InternalNamedEntity, PasswordInputMethodEnum, PasswordModeEnum, SendMediumEnum) {
  'use strict';




  /**
   * The PasswordInput model module.
   * @module model/PasswordInput
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>PasswordInput</code>.
   * Contains all information for a password entry. Passwords in Cyclos may be entered as regular texts or as virtual keyboards. For &#x60;virtualKeyboard&#x60;, a number of information is sent, such as an unique id, the number of buttons to be displayed, the number of rows that should visually hold those buttons, the sequences of characters that should be displayed on each button. When sending the value of a password of type virtual keyboard, unique id should be sent, together with the entire sequence for each button, all separated by pipes. So, suppose a very simple (and weakly configured) example where the id is &#x60;987654321&#x60; and the sequences are: &#x60;[[\&quot;abc\&quot;, \&quot;def\&quot;, \&quot;fgh\&quot;], [\&quot;ijk\&quot;, \&quot;lmn\&quot;, \&quot;opq\&quot;]]&#x60;. This describes 2 sequences of 3 buttons each. First, the buttons with the options &#x60;abc&#x60;, &#x60;def&#x60; and &#x60;fgh&#x60; should be shown. Suppose the user chooses the second one. Then the button labels should be changed to &#x60;ijk&#x60;, &#x60;lmn&#x60; and &#x60;opq&#x60;. Now the user picks the first one. The value sent to the server should be &#x60;987654321|def|ijk&#x60;.  
   * @alias module:model/PasswordInput
   * @class
   * @implements module:model/InternalNamedEntity
   */
  var exports = function() {
    var _this = this;

    InternalNamedEntity.call(_this);










  };

  /**
   * Constructs a <code>PasswordInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PasswordInput} obj Optional instance to populate.
   * @return {module:model/PasswordInput} The populated <code>PasswordInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      InternalNamedEntity.constructFromObject(data, obj);
      if (data.hasOwnProperty('inputMethod')) {
        obj['inputMethod'] = PasswordInputMethodEnum.constructFromObject(data['inputMethod']);
      }
      if (data.hasOwnProperty('mode')) {
        obj['mode'] = PasswordModeEnum.constructFromObject(data['mode']);
      }
      if (data.hasOwnProperty('hasActivePassword')) {
        obj['hasActivePassword'] = ApiClient.convertToType(data['hasActivePassword'], 'Boolean');
      }
      if (data.hasOwnProperty('confirmationPasswordOncePerSession')) {
        obj['confirmationPasswordOncePerSession'] = ApiClient.convertToType(data['confirmationPasswordOncePerSession'], 'Boolean');
      }
      if (data.hasOwnProperty('minLength')) {
        obj['minLength'] = ApiClient.convertToType(data['minLength'], 'Number');
      }
      if (data.hasOwnProperty('maxLength')) {
        obj['maxLength'] = ApiClient.convertToType(data['maxLength'], 'Number');
      }
      if (data.hasOwnProperty('otpSendMediums')) {
        obj['otpSendMediums'] = ApiClient.convertToType(data['otpSendMediums'], [SendMediumEnum]);
      }
      if (data.hasOwnProperty('numberOfButtons')) {
        obj['numberOfButtons'] = ApiClient.convertToType(data['numberOfButtons'], 'Number');
      }
      if (data.hasOwnProperty('buttonsPerRow')) {
        obj['buttonsPerRow'] = ApiClient.convertToType(data['buttonsPerRow'], 'Number');
      }
      if (data.hasOwnProperty('buttons')) {
        obj['buttons'] = ApiClient.convertToType(data['buttons'], [['String']]);
      }
    }
    return obj;
  }

  /**
   * The explanation for the value that should be sent for `virtualKeyboard`  cases is given above, in the description of this type. Possible values are: * textBox: A simple string should be requested * virtualKeyboard: A series of buttons should be presented to allow enter the password. 
   * @member {module:model/PasswordInputMethodEnum} inputMethod
   */
  exports.prototype['inputMethod'] = undefined;
  /**
   * Indicates how a password is handled Possible values are: * manual: Passwords are manually typed by users * generated: Passwords are always generated * otp: One Time Passwords. are always generated and can be used only once * script: Passwords are not stored in Cyclos, but handed-over for a script to verify them.    Is normally used to implement single-sign-on with other apps. 
   * @member {module:model/PasswordModeEnum} mode
   */
  exports.prototype['mode'] = undefined;
  /**
   * Only returned when there is an authenticated user (not for login). Describes whether the user has created a password of this type. If not, a proper message can be shown to the user indicating that this password needs to be created. 
   * @member {Boolean} hasActivePassword
   */
  exports.prototype['hasActivePassword'] = undefined;
  /**
   * Only returned when there is an authenticated user (not for login). Determines whether this password, when used as confirmation, should be requested only once until the user logs out. 
   * @member {Boolean} confirmationPasswordOncePerSession
   */
  exports.prototype['confirmationPasswordOncePerSession'] = undefined;
  /**
   * For text passwords, the minimum password length
   * @member {Number} minLength
   */
  exports.prototype['minLength'] = undefined;
  /**
   * For text passwords, the maximum password length
   * @member {Number} maxLength
   */
  exports.prototype['maxLength'] = undefined;
  /**
   * Only for `otp`, the available mediums for the password to be sent Possibles values for each array element are: * email: The user will receive an email with the information * sms: The user will receive a sms with the information (only if there is at least one phone enabled for sms) 
   * @member {Array.<module:model/SendMediumEnum>} otpSendMediums
   */
  exports.prototype['otpSendMediums'] = undefined;
  /**
   * Only for `virtualKeyboard`, is the number of buttons to be displayed 
   * @member {Number} numberOfButtons
   */
  exports.prototype['numberOfButtons'] = undefined;
  /**
   * Only for `virtualKeyboard`, is the number of buttons that should be displayed on each row 
   * @member {Number} buttonsPerRow
   */
  exports.prototype['buttonsPerRow'] = undefined;
  /**
   * Only for `virtualKeyboard`, contains the sequences of buttons that should be displayed for the user. The explanation for the value that should be sent on virtual keyboard mode is shown above, in the description of this type. 
   * @member {Array.<Array.<String>>} buttons
   */
  exports.prototype['buttons'] = undefined;

  // Implement InternalNamedEntity interface:
  /**
   * Entity identifier
   * @member {String} id
   */
exports.prototype['id'] = undefined;

  /**
   * The entity name
   * @member {String} name
   */
exports.prototype['name'] = undefined;

  /**
   * The entity internal name, which can be seen as an extra identifier 
   * @member {String} internalName
   */
exports.prototype['internalName'] = undefined;



  return exports;
}));


