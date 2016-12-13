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
    define(['ApiClient', 'model/AddressFieldEnum'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AddressFieldEnum'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.AddressConfiguration = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.AddressFieldEnum);
  }
}(this, function(ApiClient, AddressFieldEnum) {
  'use strict';




  /**
   * The AddressConfiguration model module.
   * @module model/AddressConfiguration
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>AddressConfiguration</code>.
   * Contains configuration information related to addresses
   * @alias module:model/AddressConfiguration
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>AddressConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddressConfiguration} obj Optional instance to populate.
   * @return {module:model/AddressConfiguration} The populated <code>AddressConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('useMap')) {
        obj['useMap'] = ApiClient.convertToType(data['useMap'], 'Boolean');
      }
      if (data.hasOwnProperty('enabledFields')) {
        obj['enabledFields'] = ApiClient.convertToType(data['enabledFields'], [AddressFieldEnum]);
      }
      if (data.hasOwnProperty('requiredFields')) {
        obj['requiredFields'] = ApiClient.convertToType(data['requiredFields'], [AddressFieldEnum]);
      }
    }
    return obj;
  }

  /**
   * Indicates whether maps are enabled in Cyclos
   * @member {Boolean} useMap
   */
  exports.prototype['useMap'] = undefined;
  /**
   * Contains the address fields that are enabled in Cyclos Possibles values for each array element are: * addressLine1: The first line of the descriptive address * addressLine2: The second line of the descriptive address * street: The street name * buildingNumber: The numeric identifier for a land parcel, house, building or other * complement: The complement (like apartment number)   * zip: A zip code that identifies a specific geographic (postal) delivery area * poBox: The post-office box, is an uniquely addressable box * neighborhood: The neighborhood name  * city: The city name * region: The region or state * country: The country, represented as 2-letter, uppercase, ISO 3166-1 code 
   * @member {Array.<module:model/AddressFieldEnum>} enabledFields
   */
  exports.prototype['enabledFields'] = undefined;
  /**
   * Contains the address fields that are required in Cyclos Possibles values for each array element are: * addressLine1: The first line of the descriptive address * addressLine2: The second line of the descriptive address * street: The street name * buildingNumber: The numeric identifier for a land parcel, house, building or other * complement: The complement (like apartment number)   * zip: A zip code that identifies a specific geographic (postal) delivery area * poBox: The post-office box, is an uniquely addressable box * neighborhood: The neighborhood name  * city: The city name * region: The region or state * country: The country, represented as 2-letter, uppercase, ISO 3166-1 code 
   * @member {Array.<module:model/AddressFieldEnum>} requiredFields
   */
  exports.prototype['requiredFields'] = undefined;



  return exports;
}));

