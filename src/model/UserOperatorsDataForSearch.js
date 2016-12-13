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
    define(['ApiClient', 'model/BasicProfileFieldInput', 'model/CustomFieldDetailed', 'model/EntityReference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BasicProfileFieldInput'), require('./CustomFieldDetailed'), require('./EntityReference'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.UserOperatorsDataForSearch = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.BasicProfileFieldInput, root.Cyclos471Api.CustomFieldDetailed, root.Cyclos471Api.EntityReference);
  }
}(this, function(ApiClient, BasicProfileFieldInput, CustomFieldDetailed, EntityReference) {
  'use strict';




  /**
   * The UserOperatorsDataForSearch model module.
   * @module model/UserOperatorsDataForSearch
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>UserOperatorsDataForSearch</code>.
   * @alias module:model/UserOperatorsDataForSearch
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>UserOperatorsDataForSearch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserOperatorsDataForSearch} obj Optional instance to populate.
   * @return {module:model/UserOperatorsDataForSearch} The populated <code>UserOperatorsDataForSearch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('canCreateNew')) {
        obj['canCreateNew'] = ApiClient.convertToType(data['canCreateNew'], 'Boolean');
      }
      if (data.hasOwnProperty('groups')) {
        obj['groups'] = ApiClient.convertToType(data['groups'], [EntityReference]);
      }
      if (data.hasOwnProperty('fieldsInList')) {
        obj['fieldsInList'] = ApiClient.convertToType(data['fieldsInList'], ['String']);
      }
      if (data.hasOwnProperty('basicFields')) {
        obj['basicFields'] = ApiClient.convertToType(data['basicFields'], [BasicProfileFieldInput]);
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], [CustomFieldDetailed]);
      }
    }
    return obj;
  }

  /**
   * Indicates whether the authenticated user can create more operators  for the specified user 
   * @member {Boolean} canCreateNew
   */
  exports.prototype['canCreateNew'] = undefined;
  /**
   * The operator groups this user owns
   * @member {Array.<module:model/EntityReference>} groups
   */
  exports.prototype['groups'] = undefined;
  /**
   * The internal names of either basic or custom profile fields that are configured to be shown on the list. This actually defines the fields that will be loaded on the result. It is possible that no fields are configured to be returned on list. In this case, the result objects will have the 'display' property loaded with what is configured to be the user formatting field(s).  
   * @member {Array.<String>} fieldsInList
   */
  exports.prototype['fieldsInList'] = undefined;
  /**
   * The basic profile fields in the result list
   * @member {Array.<module:model/BasicProfileFieldInput>} basicFields
   */
  exports.prototype['basicFields'] = undefined;
  /**
   * The custom profile fields in the result list
   * @member {Array.<module:model/CustomFieldDetailed>} customFields
   */
  exports.prototype['customFields'] = undefined;



  return exports;
}));

