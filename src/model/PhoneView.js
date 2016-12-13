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
    define(['ApiClient', 'model/PhoneKind', 'model/PhoneResult', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PhoneKind'), require('./PhoneResult'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.PhoneView = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.PhoneKind, root.Cyclos471Api.PhoneResult, root.Cyclos471Api.User);
  }
}(this, function(ApiClient, PhoneKind, PhoneResult, User) {
  'use strict';




  /**
   * The PhoneView model module.
   * @module model/PhoneView
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>PhoneView</code>.
   * Detailed information when viewing a phone
   * @alias module:model/PhoneView
   * @class
   * @implements module:model/PhoneResult
   */
  var exports = function() {
    var _this = this;

    PhoneResult.call(_this);






  };

  /**
   * Constructs a <code>PhoneView</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PhoneView} obj Optional instance to populate.
   * @return {module:model/PhoneView} The populated <code>PhoneView</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      PhoneResult.constructFromObject(data, obj);
      if (data.hasOwnProperty('user')) {
        obj['user'] = User.constructFromObject(data['user']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('extension')) {
        obj['extension'] = ApiClient.convertToType(data['extension'], 'String');
      }
      if (data.hasOwnProperty('enabledForSms')) {
        obj['enabledForSms'] = ApiClient.convertToType(data['enabledForSms'], 'Boolean');
      }
      if (data.hasOwnProperty('verified')) {
        obj['verified'] = ApiClient.convertToType(data['verified'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The user which owns this phone
   * @member {module:model/User} user
   */
  exports.prototype['user'] = undefined;
  /**
   * The phone name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The formatted number
   * @member {String} number
   */
  exports.prototype['number'] = undefined;
  /**
   * The number extension, only for landLine phones, and is only used if the phone configuration states that extensions are enabled.  
   * @member {String} extension
   */
  exports.prototype['extension'] = undefined;
  /**
   * Only applicable if this represents a mobile phone. Whether this mobile phone is enabled for SMS, both receiving notifications and sending SMS operations. Can only be set if the mobile phone is verified. 
   * @member {Boolean} enabledForSms
   */
  exports.prototype['enabledForSms'] = undefined;
  /**
   * Only applicable if this represents a mobile phone. Whether this mobile is verified. Can only be directly set by administrators. Regular users need to verify it. 
   * @member {Boolean} verified
   */
  exports.prototype['verified'] = undefined;

  // Implement PhoneResult interface:
  /**
   * Entity identifier
   * @member {String} id
   */
exports.prototype['id'] = undefined;

  /**
   * The phone name
   * @member {String} name
   */
exports.prototype['name'] = undefined;

  /**
   * The formatted number
   * @member {String} number
   */
exports.prototype['number'] = undefined;

  /**
   * The number extension, only for landLine phones, and is only used if the phone configuration states that extensions are enabled.  
   * @member {String} extension
   */
exports.prototype['extension'] = undefined;

  /**
   * Type of phone Possible values are: * mobile: A mobile phone * landLine: A landline phone 
   * @member {module:model/PhoneKind} type
   */
exports.prototype['type'] = undefined;

  /**
   * The number, normalized to the E.164 format
   * @member {String} normalizedNumber
   */
exports.prototype['normalizedNumber'] = undefined;

  /**
   * Indicates whether this phone is verified. Is only returned if `kind` is `mobile` and the authenticated user manages the owner of this phone. 
   * @member {Boolean} verified
   */
exports.prototype['verified'] = undefined;

  /**
   * Indicates whether this phone is verified and enabled for SMS. Is only returned if `kind` is `mobile` and the authenticated user manages the owner of this phone. 
   * @member {Boolean} enabledForSms
   */
exports.prototype['enabledForSms'] = undefined;

  /**
   * Indicates whether this phone is hidden for other users. Is only returned if `kind` is `mobile` and the authenticated user manages the owner of this phone. 
   * @member {Boolean} hidden
   */
exports.prototype['hidden'] = undefined;

  /**
   * The date the verification code was sent, if any. Is only returned if `kind` is `mobile` and the authenticated user manages the owner of this phone. 
   * @member {Date} verificationCodeSendDate
   */
exports.prototype['verificationCodeSendDate'] = undefined;



  return exports;
}));


