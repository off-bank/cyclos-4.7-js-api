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
    define(['ApiClient', 'model/AdKind', 'model/AdManage', 'model/BigDecimal', 'model/DatePeriod'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AdKind'), require('./AdManage'), require('./BigDecimal'), require('./DatePeriod'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.AdNew = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.AdKind, root.Cyclos471Api.AdManage, root.Cyclos471Api.BigDecimal, root.Cyclos471Api.DatePeriod);
  }
}(this, function(ApiClient, AdKind, AdManage, BigDecimal, DatePeriod) {
  'use strict';




  /**
   * The AdNew model module.
   * @module model/AdNew
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>AdNew</code>.
   * Parameters for creating a new advertisement
   * @alias module:model/AdNew
   * @class
   * @implements module:model/AdManage
   */
  var exports = function() {
    var _this = this;

    AdManage.call(_this);




  };

  /**
   * Constructs a <code>AdNew</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdNew} obj Optional instance to populate.
   * @return {module:model/AdNew} The populated <code>AdNew</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      AdManage.constructFromObject(data, obj);
      if (data.hasOwnProperty('kind')) {
        obj['kind'] = AdKind.constructFromObject(data['kind']);
      }
      if (data.hasOwnProperty('submitForAuthorization')) {
        obj['submitForAuthorization'] = ApiClient.convertToType(data['submitForAuthorization'], 'Boolean');
      }
      if (data.hasOwnProperty('hidden')) {
        obj['hidden'] = ApiClient.convertToType(data['hidden'], 'Boolean');
      }
      if (data.hasOwnProperty('images')) {
        obj['images'] = ApiClient.convertToType(data['images'], ['String']);
      }
    }
    return obj;
  }

  /**
   * The advertisement kind to be created. Currently only `simple` advertisements can be managed through this API. The default is `simple`. Possible values are: * simple: A simple advertisement that can be viewed, but not directly bought * webshop: An advertisement that is part of an web-shop. Can be bought, there is stock management, etc. 
   * @member {module:model/AdKind} kind
   */
  exports.prototype['kind'] = undefined;
  /**
   * Only useful when authorization is required (`AdDataForNew`/`AdDataForEdit`.`requiresAuthorization` flag is `true`). Indicates whether the advertisement will be initially submitted for authorization (status = `pending`) or kept in the `draft` status.  
   * @member {Boolean} submitForAuthorization
   */
  exports.prototype['submitForAuthorization'] = undefined;
  /**
   * Only useful when authorization is not required (`AdDataForNew`/`AdDataForEdit`.`requiresAuthorization` flag is `false`). Indicates whether the initial status for the advertisement should be `hidden` (when `true`) or `active` (when `false`).  
   * @member {Boolean} hidden
   */
  exports.prototype['hidden'] = undefined;
  /**
   * The ids of previously uploaded user temporary images to be initially used as advertisement images 
   * @member {Array.<String>} images
   */
  exports.prototype['images'] = undefined;

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

