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
    root.Cyclos471Api.TransferStatusFlow = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.EntityReference, root.Cyclos471Api.InternalNamedEntity);
  }
}(this, function(ApiClient, EntityReference, InternalNamedEntity) {
  'use strict';




  /**
   * The TransferStatusFlow model module.
   * @module model/TransferStatusFlow
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>TransferStatusFlow</code>.
   * A transfer status flow determines a status a transfer may have. For each flow the transfer participates (can be multiple) the transfer will have a status. The transition between states is also defined on the flow. 
   * @alias module:model/TransferStatusFlow
   * @class
   * @implements module:model/InternalNamedEntity
   */
  var exports = function() {
    var _this = this;

    InternalNamedEntity.call(_this);

  };

  /**
   * Constructs a <code>TransferStatusFlow</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransferStatusFlow} obj Optional instance to populate.
   * @return {module:model/TransferStatusFlow} The populated <code>TransferStatusFlow</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      InternalNamedEntity.constructFromObject(data, obj);
      if (data.hasOwnProperty('statuses')) {
        obj['statuses'] = ApiClient.convertToType(data['statuses'], [EntityReference]);
      }
    }
    return obj;
  }

  /**
   * All statuses this flow has
   * @member {Array.<module:model/EntityReference>} statuses
   */
  exports.prototype['statuses'] = undefined;

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


