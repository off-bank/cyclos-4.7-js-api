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
    define(['ApiClient', 'model/AdManage', 'model/BigDecimal', 'model/DatePeriod'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AdManage'), require('./BigDecimal'), require('./DatePeriod'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.AdEdit = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.AdManage, root.Cyclos471Api.BigDecimal, root.Cyclos471Api.DatePeriod);
  }
}(this, function(ApiClient, AdManage, BigDecimal, DatePeriod) {
  'use strict';




  /**
   * The AdEdit model module.
   * @module model/AdEdit
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>AdEdit</code>.
   * Parameters for editing an existing advertisement
   * @alias module:model/AdEdit
   * @class
   * @implements module:model/AdManage
   */
  var exports = function() {
    var _this = this;

    AdManage.call(_this);

  };

  /**
   * Constructs a <code>AdEdit</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdEdit} obj Optional instance to populate.
   * @return {module:model/AdEdit} The populated <code>AdEdit</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      AdManage.constructFromObject(data, obj);
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

  // Implement AdManage interface:
  /**
   * The advertisement title
   * @member {String} name
   */
exports.prototype['name'] = undefined;

  /**
   * The advertisement description content, formatted as HTML 
   * @member {String} description
   */
exports.prototype['description'] = undefined;

  /**
   * The date period this advertisement is published
   * @member {module:model/DatePeriod} publicationPeriod
   */
exports.prototype['publicationPeriod'] = undefined;

  /**
   * Either internal name or id of categories this ad belongs to. In most cases an advertisement will have a single category, but this depends on the Cyclos configuration. 
   * @member {Array.<String>} categories
   */
exports.prototype['categories'] = undefined;

  /**
   * Either internal name or id of the advertisement's price currency 
   * @member {String} currency
   */
exports.prototype['currency'] = undefined;

  /**
   * The regular price
   * @member {module:model/BigDecimal} price
   */
exports.prototype['price'] = undefined;

  /**
   * The promotional price, if any
   * @member {module:model/BigDecimal} promotionalPrice
   */
exports.prototype['promotionalPrice'] = undefined;

  /**
   * The promotional period, the one when `promotionalPrice` is valid 
   * @member {module:model/DatePeriod} promotionalPeriod
   */
exports.prototype['promotionalPeriod'] = undefined;

  /**
   * Holds the custom field values, keyed by field internal name or id. The format of the value depends on the custom field type. Example: `{..., \"customValues\": {\"gender\": \"male\", \"birthDate\": \"1980-10-27\"}}` 
   * @member {Object.<String, String>} customValues
   */
exports.prototype['customValues'] = undefined;

  /**
   * Ids of addresses (belogining to the ad owner) this ad is available at. 
   * @member {Array.<String>} addresses
   */
exports.prototype['addresses'] = undefined;



  return exports;
}));


