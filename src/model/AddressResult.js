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
    define(['ApiClient', 'model/Address', 'model/GeographicalCoordinate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./GeographicalCoordinate'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.AddressResult = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.Address, root.Cyclos471Api.GeographicalCoordinate);
  }
}(this, function(ApiClient, Address, GeographicalCoordinate) {
  'use strict';




  /**
   * The AddressResult model module.
   * @module model/AddressResult
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>AddressResult</code>.
   * Information of an address as returned on list
   * @alias module:model/AddressResult
   * @class
   * @implements module:model/Address
   */
  var exports = function() {
    var _this = this;

    Address.call(_this);

  };

  /**
   * Constructs a <code>AddressResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddressResult} obj Optional instance to populate.
   * @return {module:model/AddressResult} The populated <code>AddressResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      Address.constructFromObject(data, obj);
      if (data.hasOwnProperty('defaultAddress')) {
        obj['defaultAddress'] = ApiClient.convertToType(data['defaultAddress'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Indicates whether this is the default address for the user
   * @member {Boolean} defaultAddress
   */
  exports.prototype['defaultAddress'] = undefined;

  // Implement Address interface:
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



  return exports;
}));


