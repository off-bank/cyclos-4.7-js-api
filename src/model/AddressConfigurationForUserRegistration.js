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
    define(['ApiClient', 'model/AddressConfiguration', 'model/AddressFieldEnum', 'model/AddressNew', 'model/AvailabilityEnum'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AddressConfiguration'), require('./AddressFieldEnum'), require('./AddressNew'), require('./AvailabilityEnum'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.AddressConfigurationForUserRegistration = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.AddressConfiguration, root.Cyclos471Api.AddressFieldEnum, root.Cyclos471Api.AddressNew, root.Cyclos471Api.AvailabilityEnum);
  }
}(this, function(ApiClient, AddressConfiguration, AddressFieldEnum, AddressNew, AvailabilityEnum) {
  'use strict';




  /**
   * The AddressConfigurationForUserRegistration model module.
   * @module model/AddressConfigurationForUserRegistration
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>AddressConfigurationForUserRegistration</code>.
   * Contains extended address configuration used on user registration
   * @alias module:model/AddressConfigurationForUserRegistration
   * @class
   * @implements module:model/AddressConfiguration
   */
  var exports = function() {
    var _this = this;

    AddressConfiguration.call(_this);


  };

  /**
   * Constructs a <code>AddressConfigurationForUserRegistration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddressConfigurationForUserRegistration} obj Optional instance to populate.
   * @return {module:model/AddressConfigurationForUserRegistration} The populated <code>AddressConfigurationForUserRegistration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      AddressConfiguration.constructFromObject(data, obj);
      if (data.hasOwnProperty('address')) {
        obj['address'] = AddressNew.constructFromObject(data['address']);
      }
      if (data.hasOwnProperty('availability')) {
        obj['availability'] = AvailabilityEnum.constructFromObject(data['availability']);
      }
    }
    return obj;
  }

  /**
   * Contains the default values for a new address
   * @member {module:model/AddressNew} address
   */
  exports.prototype['address'] = undefined;
  /**
   * The availability for addresses Possible values are: * disabled: The data is disabled * optional: The data is enabled and optional * required: The data is enabled and required 
   * @member {module:model/AvailabilityEnum} availability
   */
  exports.prototype['availability'] = undefined;

  // Implement AddressConfiguration interface:
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


