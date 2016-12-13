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
    define(['ApiClient', 'model/InternalNamedEntity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InternalNamedEntity'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.Agreement = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.InternalNamedEntity);
  }
}(this, function(ApiClient, InternalNamedEntity) {
  'use strict';




  /**
   * The Agreement model module.
   * @module model/Agreement
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>Agreement</code>.
   * An agreement the user must accept in order to use the system 
   * @alias module:model/Agreement
   * @class
   * @implements module:model/InternalNamedEntity
   */
  var exports = function() {
    var _this = this;

    InternalNamedEntity.call(_this);


  };

  /**
   * Constructs a <code>Agreement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Agreement} obj Optional instance to populate.
   * @return {module:model/Agreement} The populated <code>Agreement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      InternalNamedEntity.constructFromObject(data, obj);
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('contentVersion')) {
        obj['contentVersion'] = ApiClient.convertToType(data['contentVersion'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The HTML formatted content of the agreement
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * The content version (when updated, the version changes) 
   * @member {Number} contentVersion
   */
  exports.prototype['contentVersion'] = undefined;

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


