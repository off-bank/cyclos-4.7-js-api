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
    define(['ApiClient', 'model/AdCategoryWithChildren', 'model/AdKind', 'model/BasicProfileFieldInput', 'model/Currency', 'model/CustomFieldDetailed', 'model/SearchByDistanceData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AdCategoryWithChildren'), require('./AdKind'), require('./BasicProfileFieldInput'), require('./Currency'), require('./CustomFieldDetailed'), require('./SearchByDistanceData'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.BasicAdDataForSearch = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.AdCategoryWithChildren, root.Cyclos471Api.AdKind, root.Cyclos471Api.BasicProfileFieldInput, root.Cyclos471Api.Currency, root.Cyclos471Api.CustomFieldDetailed, root.Cyclos471Api.SearchByDistanceData);
  }
}(this, function(ApiClient, AdCategoryWithChildren, AdKind, BasicProfileFieldInput, Currency, CustomFieldDetailed, SearchByDistanceData) {
  'use strict';




  /**
   * The BasicAdDataForSearch model module.
   * @module model/BasicAdDataForSearch
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>BasicAdDataForSearch</code>.
   * Common definitions for searching advertisements
   * @alias module:model/BasicAdDataForSearch
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>BasicAdDataForSearch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BasicAdDataForSearch} obj Optional instance to populate.
   * @return {module:model/BasicAdDataForSearch} The populated <code>BasicAdDataForSearch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('visibleKinds')) {
        obj['visibleKinds'] = ApiClient.convertToType(data['visibleKinds'], [AdKind]);
      }
      if (data.hasOwnProperty('categories')) {
        obj['categories'] = ApiClient.convertToType(data['categories'], [AdCategoryWithChildren]);
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], [CustomFieldDetailed]);
      }
      if (data.hasOwnProperty('fieldsInBasicSearch')) {
        obj['fieldsInBasicSearch'] = ApiClient.convertToType(data['fieldsInBasicSearch'], ['String']);
      }
      if (data.hasOwnProperty('fieldsInAdvancedSearch')) {
        obj['fieldsInAdvancedSearch'] = ApiClient.convertToType(data['fieldsInAdvancedSearch'], ['String']);
      }
      if (data.hasOwnProperty('fieldsInList')) {
        obj['fieldsInList'] = ApiClient.convertToType(data['fieldsInList'], ['String']);
      }
      if (data.hasOwnProperty('basicProfileFields')) {
        obj['basicProfileFields'] = ApiClient.convertToType(data['basicProfileFields'], [BasicProfileFieldInput]);
      }
      if (data.hasOwnProperty('customProfileFields')) {
        obj['customProfileFields'] = ApiClient.convertToType(data['customProfileFields'], [CustomFieldDetailed]);
      }
      if (data.hasOwnProperty('currencies')) {
        obj['currencies'] = ApiClient.convertToType(data['currencies'], [Currency]);
      }
      if (data.hasOwnProperty('searchByDistanceData')) {
        obj['searchByDistanceData'] = SearchByDistanceData.constructFromObject(data['searchByDistanceData']);
      }
    }
    return obj;
  }

  /**
   * The advertisement kinds that can be searched by the authenticated user Possibles values for each array element are: * simple: A simple advertisement that can be viewed, but not directly bought * webshop: An advertisement that is part of an web-shop. Can be bought, there is stock management, etc. 
   * @member {Array.<module:model/AdKind>} visibleKinds
   */
  exports.prototype['visibleKinds'] = undefined;
  /**
   * The advertisement categoriesn each with its children, forming a tree 
   * @member {Array.<module:model/AdCategoryWithChildren>} categories
   */
  exports.prototype['categories'] = undefined;
  /**
   * The list of custom profile fields that are either to be used as search filter (if its internal name is present on either  `fieldsInBasicSearch` or `fieldsInAdvancedSearch`) and / or in the result list (if its internal name is present on `fieldsInList`).  
   * @member {Array.<module:model/CustomFieldDetailed>} customFields
   */
  exports.prototype['customFields'] = undefined;
  /**
   * The internal names of the custom fields that should be used as search filters in the basic section (separated fields, not keywords) 
   * @member {Array.<String>} fieldsInBasicSearch
   */
  exports.prototype['fieldsInBasicSearch'] = undefined;
  /**
   * The internal names of the custom fields that should be used as search filters in the advanced section (separated fields, not keywords) 
   * @member {Array.<String>} fieldsInAdvancedSearch
   */
  exports.prototype['fieldsInAdvancedSearch'] = undefined;
  /**
   * The internal names of the custom fields that will be returned together with each advertisement, and should be shown in the result list. This fature is planned, but not yet available. 
   * @member {Array.<String>} fieldsInList
   */
  exports.prototype['fieldsInList'] = undefined;
  /**
   * The list of basic user profile fields that can be used as search filters. Only returned if searching user advertisements. 
   * @member {Array.<module:model/BasicProfileFieldInput>} basicProfileFields
   */
  exports.prototype['basicProfileFields'] = undefined;
  /**
   * The list of custom user profile fields that can be used as search filters. Only returned if searching user advertisements. 
   * @member {Array.<module:model/CustomFieldDetailed>} customProfileFields
   */
  exports.prototype['customProfileFields'] = undefined;
  /**
   * The currencies the authenticated user may use to filter by price  
   * @member {Array.<module:model/Currency>} currencies
   */
  exports.prototype['currencies'] = undefined;
  /**
   * Data for searching advertisements by distance
   * @member {module:model/SearchByDistanceData} searchByDistanceData
   */
  exports.prototype['searchByDistanceData'] = undefined;



  return exports;
}));

