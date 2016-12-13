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
    define(['ApiClient', 'model/AdBasicData', 'model/AdCategoryWithChildren', 'model/AdEdit', 'model/Address', 'model/CustomFieldDetailed'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AdBasicData'), require('./AdCategoryWithChildren'), require('./AdEdit'), require('./Address'), require('./CustomFieldDetailed'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.AdDataForEdit = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.AdBasicData, root.Cyclos471Api.AdCategoryWithChildren, root.Cyclos471Api.AdEdit, root.Cyclos471Api.Address, root.Cyclos471Api.CustomFieldDetailed);
  }
}(this, function(ApiClient, AdBasicData, AdCategoryWithChildren, AdEdit, Address, CustomFieldDetailed) {
  'use strict';




  /**
   * The AdDataForEdit model module.
   * @module model/AdDataForEdit
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>AdDataForEdit</code>.
   * Contains data for editing a new phone 
   * @alias module:model/AdDataForEdit
   * @class
   * @implements module:model/AdBasicData
   */
  var exports = function() {
    var _this = this;

    AdBasicData.call(_this);

  };

  /**
   * Constructs a <code>AdDataForEdit</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdDataForEdit} obj Optional instance to populate.
   * @return {module:model/AdDataForEdit} The populated <code>AdDataForEdit</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      AdBasicData.constructFromObject(data, obj);
      if (data.hasOwnProperty('advertisement')) {
        obj['advertisement'] = AdEdit.constructFromObject(data['advertisement']);
      }
    }
    return obj;
  }

  /**
   * The advertisement that is being edited
   * @member {module:model/AdEdit} advertisement
   */
  exports.prototype['advertisement'] = undefined;

  // Implement AdBasicData interface:
  /**
   * The possible advertisement custom fields 
   * @member {Array.<module:model/CustomFieldDetailed>} customFields
   */
exports.prototype['customFields'] = undefined;

  /**
   * Indicates whether advertisements require an authorization from the administration in order to be published for other users to see 
   * @member {Boolean} requiresAuthorization
   */
exports.prototype['requiresAuthorization'] = undefined;

  /**
   * The advertisement categoriesn each with its children, forming a tree 
   * @member {Array.<module:model/AdCategoryWithChildren>} categories
   */
exports.prototype['categories'] = undefined;

  /**
   * The addresses of the advertisement owner, so specific ones can be linked to the advertisement. 
   * @member {Array.<module:model/Address>} addresses
   */
exports.prototype['addresses'] = undefined;



  return exports;
}));

