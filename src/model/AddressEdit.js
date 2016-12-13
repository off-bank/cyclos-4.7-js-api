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
    define(['ApiClient', 'model/AddressManage', 'model/GeographicalCoordinate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AddressManage'), require('./GeographicalCoordinate'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.AddressEdit = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.AddressManage, root.Cyclos471Api.GeographicalCoordinate);
  }
}(this, function(ApiClient, AddressManage, GeographicalCoordinate) {
  'use strict';




  /**
   * The AddressEdit model module.
   * @module model/AddressEdit
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>AddressEdit</code>.
   * Fields for editing an address. The actually used and required fields depend on the user configuration.
   * @alias module:model/AddressEdit
   * @class
   * @implements module:model/AddressManage
   */
  var exports = function() {
    var _this = this;

    AddressManage.call(_this);

  };

  /**
   * Constructs a <code>AddressEdit</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddressEdit} obj Optional instance to populate.
   * @return {module:model/AddressEdit} The populated <code>AddressEdit</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      AddressManage.constructFromObject(data, obj);
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The version stamp for the current object, used for optimistic locking. When saving, the same version as previously received needs to be passed back. If no one else has saved the object, the version will match and the object will be updated. However, if someone other has saved the object, the version will no longer match, and an error will be raised. This is used to prevent multiple users (or processes) from updating the same object and unwilingly overridding the property values, leading to data loss.  
   * @member {Number} version
   */
  exports.prototype['version'] = undefined;

  // Implement AddressManage interface:
  /**
   * The address name
   * @member {String} name
   */
exports.prototype['name'] = undefined;

  /**
   * The first line of the descriptive address 
   * @member {String} addressLine1
   */
exports.prototype['addressLine1'] = undefined;

  /**
   * The second line of the descriptive address 
   * @member {String} addressLine2
   */
exports.prototype['addressLine2'] = undefined;

  /**
   * The street name 
   * @member {String} street
   */
exports.prototype['street'] = undefined;

  /**
   * The numeric identifier for a land parcel, house, building or other 
   * @member {String} buildingNumber
   */
exports.prototype['buildingNumber'] = undefined;

  /**
   * The complement (like apartment number)   
   * @member {String} complement
   */
exports.prototype['complement'] = undefined;

  /**
   * A zip code that identifies a specific geographic (postal) delivery area 
   * @member {String} zip
   */
exports.prototype['zip'] = undefined;

  /**
   * The post-office box, is an uniquely addressable box 
   * @member {String} poBox
   */
exports.prototype['poBox'] = undefined;

  /**
   * The neighborhood name  
   * @member {String} neighborhood
   */
exports.prototype['neighborhood'] = undefined;

  /**
   * The city name 
   * @member {String} city
   */
exports.prototype['city'] = undefined;

  /**
   * The region or state 
   * @member {String} region
   */
exports.prototype['region'] = undefined;

  /**
   * The country, represented as 2-letter, uppercase, ISO 3166-1 code 
   * @member {String} country
   */
exports.prototype['country'] = undefined;

  /**
   * The geolocation of the current address
   * @member {module:model/GeographicalCoordinate} location
   */
exports.prototype['location'] = undefined;

  /**
   * Indicates whether this is the default address for the user
   * @member {Boolean} defaultAddress
   */
exports.prototype['defaultAddress'] = undefined;

  /**
   * Whether this address should be hidden for other users
   * @member {Boolean} hidden
   */
exports.prototype['hidden'] = undefined;



  return exports;
}));

