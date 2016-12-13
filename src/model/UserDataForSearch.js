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
    define(['ApiClient', 'model/BaseUserDataForSearch', 'model/BasicProfileFieldInput', 'model/CustomFieldDetailed', 'model/Group', 'model/SearchByDistanceData', 'model/UserStatusEnum'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BaseUserDataForSearch'), require('./BasicProfileFieldInput'), require('./CustomFieldDetailed'), require('./Group'), require('./SearchByDistanceData'), require('./UserStatusEnum'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.UserDataForSearch = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.BaseUserDataForSearch, root.Cyclos471Api.BasicProfileFieldInput, root.Cyclos471Api.CustomFieldDetailed, root.Cyclos471Api.Group, root.Cyclos471Api.SearchByDistanceData, root.Cyclos471Api.UserStatusEnum);
  }
}(this, function(ApiClient, BaseUserDataForSearch, BasicProfileFieldInput, CustomFieldDetailed, Group, SearchByDistanceData, UserStatusEnum) {
  'use strict';




  /**
   * The UserDataForSearch model module.
   * @module model/UserDataForSearch
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>UserDataForSearch</code>.
   * Contains data with the configuration for searching users 
   * @alias module:model/UserDataForSearch
   * @class
   * @implements module:model/BaseUserDataForSearch
   */
  var exports = function() {
    var _this = this;

    BaseUserDataForSearch.call(_this);



  };

  /**
   * Constructs a <code>UserDataForSearch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserDataForSearch} obj Optional instance to populate.
   * @return {module:model/UserDataForSearch} The populated <code>UserDataForSearch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      BaseUserDataForSearch.constructFromObject(data, obj);
      if (data.hasOwnProperty('fieldsInList')) {
        obj['fieldsInList'] = ApiClient.convertToType(data['fieldsInList'], ['String']);
      }
      if (data.hasOwnProperty('statuses')) {
        obj['statuses'] = ApiClient.convertToType(data['statuses'], [UserStatusEnum]);
      }
      if (data.hasOwnProperty('groupsForRegistration')) {
        obj['groupsForRegistration'] = ApiClient.convertToType(data['groupsForRegistration'], [Group]);
      }
    }
    return obj;
  }

  /**
   * The internal names of either basic or custom profile fields that are configured to be shown on the list. This actually defines the fields that will be loaded on the result. It is possible that no fields are configured to be returned on list. In this case, the result objects will have the 'display' property loaded with what is configured to be the user formatting field(s).  
   * @member {Array.<String>} fieldsInList
   */
  exports.prototype['fieldsInList'] = undefined;
  /**
   * The possible user statuses the authenticated user can use to filter the search. Only administrators or brokers over their members can filter by status (also depends on permissions) Possibles values for each array element are: * active: The user is active and can use the system normally. * blocked: The user has been blocked from accessing the system. Other users still see him/her. * disabled: The user has been disabled - he/she cannot access the system and is invisible by other users. * removed: The user was permanently removed. It's profile is kept for historical purposes. * pending: The user registration is pending a confirmation. Probably the user has received an e-mail with a link that must be followed to complete the activation. The user is invisible by other users. 
   * @member {Array.<module:model/UserStatusEnum>} statuses
   */
  exports.prototype['statuses'] = undefined;
  /**
   * Possible groups an administrator or broker can use to register users 
   * @member {Array.<module:model/Group>} groupsForRegistration
   */
  exports.prototype['groupsForRegistration'] = undefined;

  // Implement BaseUserDataForSearch interface:
  /**
   * The internal names of either basic or custom profile fields or which  can be used as search filters (separated fields, not keywords)  
   * @member {Array.<String>} fieldsInSearch
   */
exports.prototype['fieldsInSearch'] = undefined;

  /**
   * The list of basic profile fields that can be used either as search filters (if the internal names are present in the `fieldsInSearch` property) or on the result list (if the internal names are present in the `fieldsInList` property) 
   * @member {Array.<module:model/BasicProfileFieldInput>} basicFields
   */
exports.prototype['basicFields'] = undefined;

  /**
   * The list of custom profile fields that can be used either as search filters (if the internal names are present in the `fieldsInSearch` property) or on the result list (if the internal names are present in the `fieldsInList` property) 
   * @member {Array.<module:model/CustomFieldDetailed>} customFields
   */
exports.prototype['customFields'] = undefined;

  /**
   * The groups the authenticated user can use to filter users. Admins can always filter by groups, while users depend on a permission, which can be to only view group sets, only groups or none. 
   * @member {Array.<module:model/Group>} groups
   */
exports.prototype['groups'] = undefined;

  /**
   * The internal names (or ids, if missing) of the groups which should be presented by default on user search 
   * @member {Array.<String>} defaultGroups
   */
exports.prototype['defaultGroups'] = undefined;

  /**
   * Data for searching users by distance
   * @member {module:model/SearchByDistanceData} searchByDistanceData
   */
exports.prototype['searchByDistanceData'] = undefined;



  return exports;
}));


