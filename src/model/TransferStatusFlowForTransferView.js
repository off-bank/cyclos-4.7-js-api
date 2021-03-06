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
    define(['ApiClient', 'model/InternalNamedEntity', 'model/TransferStatusLog'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InternalNamedEntity'), require('./TransferStatusLog'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.TransferStatusFlowForTransferView = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.InternalNamedEntity, root.Cyclos471Api.TransferStatusLog);
  }
}(this, function(ApiClient, InternalNamedEntity, TransferStatusLog) {
  'use strict';




  /**
   * The TransferStatusFlowForTransferView model module.
   * @module model/TransferStatusFlowForTransferView
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>TransferStatusFlowForTransferView</code>.
   * Contains other data for a transfer status flow when viewing a transfer. 
   * @alias module:model/TransferStatusFlowForTransferView
   * @class
   * @implements module:model/InternalNamedEntity
   */
  var exports = function() {
    var _this = this;

    InternalNamedEntity.call(_this);


  };

  /**
   * Constructs a <code>TransferStatusFlowForTransferView</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransferStatusFlowForTransferView} obj Optional instance to populate.
   * @return {module:model/TransferStatusFlowForTransferView} The populated <code>TransferStatusFlowForTransferView</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      InternalNamedEntity.constructFromObject(data, obj);
      if (data.hasOwnProperty('canManage')) {
        obj['canManage'] = ApiClient.convertToType(data['canManage'], 'Boolean');
      }
      if (data.hasOwnProperty('log')) {
        obj['log'] = ApiClient.convertToType(data['log'], [TransferStatusLog]);
      }
    }
    return obj;
  }

  /**
   * Can this status flow be managed by the authenticated user? 
   * @member {Boolean} canManage
   */
  exports.prototype['canManage'] = undefined;
  /**
   * A log of status changes for this flow
   * @member {Array.<module:model/TransferStatusLog>} log
   */
  exports.prototype['log'] = undefined;

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


