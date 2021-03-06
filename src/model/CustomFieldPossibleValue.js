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
    define(['ApiClient', 'model/EntityReference', 'model/InternalNamedEntity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EntityReference'), require('./InternalNamedEntity'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.CustomFieldPossibleValue = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.EntityReference, root.Cyclos471Api.InternalNamedEntity);
  }
}(this, function(ApiClient, EntityReference, InternalNamedEntity) {
  'use strict';




  /**
   * The CustomFieldPossibleValue model module.
   * @module model/CustomFieldPossibleValue
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>CustomFieldPossibleValue</code>.
   * Represents a single possible value of an enumerated (single or multi selection) custom field 
   * @alias module:model/CustomFieldPossibleValue
   * @class
   * @implements module:model/InternalNamedEntity
   */
  var exports = function() {
    var _this = this;

    InternalNamedEntity.call(_this);




  };

  /**
   * Constructs a <code>CustomFieldPossibleValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomFieldPossibleValue} obj Optional instance to populate.
   * @return {module:model/CustomFieldPossibleValue} The populated <code>CustomFieldPossibleValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      InternalNamedEntity.constructFromObject(data, obj);
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('default')) {
        obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
      }
      if (data.hasOwnProperty('internalName')) {
        obj['internalName'] = ApiClient.convertToType(data['internalName'], 'String');
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = EntityReference.constructFromObject(data['category']);
      }
    }
    return obj;
  }

  /**
   * The display value
   * @member {String} value
   */
  exports.prototype['value'] = undefined;
  /**
   * Indicates if this possible value is the default one.
   * @member {Boolean} default
   */
  exports.prototype['default'] = undefined;
  /**
   * The entity internal name, which can be seen as an extra identifier 
   * @member {String} internalName
   */
  exports.prototype['internalName'] = undefined;
  /**
   * The internal name (if available) or id of the possible value category. Optional, and never used if custom field type is dynamic selection. 
   * @member {module:model/EntityReference} category
   */
  exports.prototype['category'] = undefined;

  // Implement InternalNamedEntity interface:
  /**
   * Entity identifier
   * @member {String} id
   */
exports.prototype['id'] = undefined;

  /**
   * The entity name
   * @member {String} name
   */
exports.prototype['name'] = undefined;

  /**
   * The entity internal name, which can be seen as an extra identifier 
   * @member {String} internalName
   */
exports.prototype['internalName'] = undefined;



  return exports;
}));


