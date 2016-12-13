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
    define(['ApiClient', 'model/Entity', 'model/RecordKind'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Entity'), require('./RecordKind'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.Record = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.Entity, root.Cyclos471Api.RecordKind);
  }
}(this, function(ApiClient, Entity, RecordKind) {
  'use strict';




  /**
   * The Record model module.
   * @module model/Record
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>Record</code>.
   * A custom record is a structured data stored either for an user or for system (a general record, unrelated to an user). 
   * @alias module:model/Record
   * @class
   * @implements module:model/Entity
   */
  var exports = function() {
    var _this = this;

    Entity.call(_this);

  };

  /**
   * Constructs a <code>Record</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Record} obj Optional instance to populate.
   * @return {module:model/Record} The populated <code>Record</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      Entity.constructFromObject(data, obj);
      if (data.hasOwnProperty('kind')) {
        obj['kind'] = RecordKind.constructFromObject(data['kind']);
      }
    }
    return obj;
  }

  /**
   * The possible kinds of a record, which can either belong to system or to an user Possible values are: * user: The record belongs to a specific user * system: The record belongs to the system, and is unrelated to an user 
   * @member {module:model/RecordKind} kind
   */
  exports.prototype['kind'] = undefined;

  // Implement Entity interface:
  /**
   * Entity identifier
   * @member {String} id
   */
exports.prototype['id'] = undefined;



  return exports;
}));

