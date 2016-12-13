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
    define(['ApiClient', 'model/AddressBasicData', 'model/AddressEdit', 'model/AddressFieldEnum', 'model/PasswordInput'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AddressBasicData'), require('./AddressEdit'), require('./AddressFieldEnum'), require('./PasswordInput'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.AddressDataForEdit = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.AddressBasicData, root.Cyclos471Api.AddressEdit, root.Cyclos471Api.AddressFieldEnum, root.Cyclos471Api.PasswordInput);
  }
}(this, function(ApiClient, AddressBasicData, AddressEdit, AddressFieldEnum, PasswordInput) {
  'use strict';




  /**
   * The AddressDataForEdit model module.
   * @module model/AddressDataForEdit
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>AddressDataForEdit</code>.
   * Contains data for editing a new address 
   * @alias module:model/AddressDataForEdit
   * @class
   * @implements module:model/AddressBasicData
   */
  var exports = function() {
    var _this = this;

    AddressBasicData.call(_this);



  };

  /**
   * Constructs a <code>AddressDataForEdit</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddressDataForEdit} obj Optional instance to populate.
   * @return {module:model/AddressDataForEdit} The populated <code>AddressDataForEdit</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      AddressBasicData.constructFromObject(data, obj);
      if (data.hasOwnProperty('address')) {
        obj['address'] = AddressEdit.constructFromObject(data['address']);
      }
      if (data.hasOwnProperty('edit')) {
        obj['edit'] = ApiClient.convertToType(data['edit'], 'Boolean');
      }
      if (data.hasOwnProperty('managePrivacy')) {
        obj['managePrivacy'] = ApiClient.convertToType(data['managePrivacy'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The address that is being edited. This value can be modified and sent back on `PUT /addresses/{id}`. 
   * @member {module:model/AddressEdit} address
   */
  exports.prototype['address'] = undefined;
  /**
   * Can the authenticated user edit this address?
   * @member {Boolean} edit
   */
  exports.prototype['edit'] = undefined;
  /**
   * Can the authenticated user manage the privacy of this address?
   * @member {Boolean} managePrivacy
   */
  exports.prototype['managePrivacy'] = undefined;

  // Implement AddressBasicData interface:
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

  /**
   * If a confirmation password is used, contains the definitions on how to request that password from the user. This confirmation password is required when performing sensible actions. Sometimes this is dynamic, for example, the confirmation might be configured to be used only once per session, or operations like payments may have a limit per day to be without confirmation (pinless). 
   * @member {module:model/PasswordInput} confirmationPasswordInput
   */
exports.prototype['confirmationPasswordInput'] = undefined;



  return exports;
}));

