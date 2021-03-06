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
    define(['ApiClient', 'model/NamedEntity', 'model/PhoneKind'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NamedEntity'), require('./PhoneKind'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.Phone = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.NamedEntity, root.Cyclos471Api.PhoneKind);
  }
}(this, function(ApiClient, NamedEntity, PhoneKind) {
  'use strict';




  /**
   * The Phone model module.
   * @module model/Phone
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>Phone</code>.
   * A phone reference
   * @alias module:model/Phone
   * @class
   * @implements module:model/NamedEntity
   */
  var exports = function() {
    var _this = this;

    NamedEntity.call(_this);





  };

  /**
   * Constructs a <code>Phone</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Phone} obj Optional instance to populate.
   * @return {module:model/Phone} The populated <code>Phone</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      NamedEntity.constructFromObject(data, obj);
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('extension')) {
        obj['extension'] = ApiClient.convertToType(data['extension'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = PhoneKind.constructFromObject(data['type']);
      }
      if (data.hasOwnProperty('normalizedNumber')) {
        obj['normalizedNumber'] = ApiClient.convertToType(data['normalizedNumber'], 'String');
      }
    }
    return obj;
  }

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

  // Implement NamedEntity interface:
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



  return exports;
}));


