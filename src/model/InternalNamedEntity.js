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
    define(['ApiClient', 'model/NamedEntity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NamedEntity'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.InternalNamedEntity = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.NamedEntity);
  }
}(this, function(ApiClient, NamedEntity) {
  'use strict';




  /**
   * The InternalNamedEntity model module.
   * @module model/InternalNamedEntity
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>InternalNamedEntity</code>.
   * Basic definition of a persistent entity which has both a name and an internal name 
   * @alias module:model/InternalNamedEntity
   * @class
   * @implements module:model/NamedEntity
   */
  var exports = function() {
    var _this = this;

    NamedEntity.call(_this);

  };

  /**
   * Constructs a <code>InternalNamedEntity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InternalNamedEntity} obj Optional instance to populate.
   * @return {module:model/InternalNamedEntity} The populated <code>InternalNamedEntity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      NamedEntity.constructFromObject(data, obj);
      if (data.hasOwnProperty('internalName')) {
        obj['internalName'] = ApiClient.convertToType(data['internalName'], 'String');
      }
    }
    return obj;
  }

  /**
   * The entity internal name, which can be seen as an extra identifier 
   * @member {String} internalName
   */
  exports.prototype['internalName'] = undefined;

  // Implement NamedEntity interface:
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



  return exports;
}));


