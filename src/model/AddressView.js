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
    define(['ApiClient', 'model/AddressResult', 'model/GeographicalCoordinate', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AddressResult'), require('./GeographicalCoordinate'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.AddressView = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.AddressResult, root.Cyclos471Api.GeographicalCoordinate, root.Cyclos471Api.User);
  }
}(this, function(ApiClient, AddressResult, GeographicalCoordinate, User) {
  'use strict';




  /**
   * The AddressView model module.
   * @module model/AddressView
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>AddressView</code>.
   * Detailed information when viewing an address
   * @alias module:model/AddressView
   * @class
   * @implements module:model/AddressResult
   */
  var exports = function() {
    var _this = this;

    AddressResult.call(_this);


  };

  /**
   * Constructs a <code>AddressView</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddressView} obj Optional instance to populate.
   * @return {module:model/AddressView} The populated <code>AddressView</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      AddressResult.constructFromObject(data, obj);
      if (data.hasOwnProperty('user')) {
        obj['user'] = User.constructFromObject(data['user']);
      }
      if (data.hasOwnProperty('hidden')) {
        obj['hidden'] = ApiClient.convertToType(data['hidden'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The user which owns this address
   * @member {module:model/User} user
   */
  exports.prototype['user'] = undefined;
  /**
   * Indicates whether this address should be hidden for other users   
   * @member {Boolean} hidden
   */
  exports.prototype['hidden'] = undefined;

  // Implement AddressResult interface:
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

  /**
   * Indicates whether this is the default address for the user
   * @member {Boolean} defaultAddress
   */
exports.prototype['defaultAddress'] = undefined;



  return exports;
}));


