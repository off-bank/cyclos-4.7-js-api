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
    define(['ApiClient', 'model/Group'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Group'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.GeneralOperatorsDataForSearch = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.Group);
  }
}(this, function(ApiClient, Group) {
  'use strict';




  /**
   * The GeneralOperatorsDataForSearch model module.
   * @module model/GeneralOperatorsDataForSearch
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>GeneralOperatorsDataForSearch</code>.
   * @alias module:model/GeneralOperatorsDataForSearch
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>GeneralOperatorsDataForSearch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GeneralOperatorsDataForSearch} obj Optional instance to populate.
   * @return {module:model/GeneralOperatorsDataForSearch} The populated <code>GeneralOperatorsDataForSearch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('userGroups')) {
        obj['userGroups'] = ApiClient.convertToType(data['userGroups'], [Group]);
      }
    }
    return obj;
  }

  /**
   * The groups the authenticated user can use to filter users. Admins can always filter by groups, while users depend on a permission, which can be to only view group sets, only groups or none. 
   * @member {Array.<module:model/Group>} userGroups
   */
  exports.prototype['userGroups'] = undefined;



  return exports;
}));


