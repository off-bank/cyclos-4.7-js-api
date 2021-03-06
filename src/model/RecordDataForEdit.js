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
    define(['ApiClient', 'model/CustomFieldDetailed', 'model/RecordBasicData', 'model/RecordEdit', 'model/RecordKind', 'model/RecordType', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomFieldDetailed'), require('./RecordBasicData'), require('./RecordEdit'), require('./RecordKind'), require('./RecordType'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.RecordDataForEdit = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.CustomFieldDetailed, root.Cyclos471Api.RecordBasicData, root.Cyclos471Api.RecordEdit, root.Cyclos471Api.RecordKind, root.Cyclos471Api.RecordType, root.Cyclos471Api.User);
  }
}(this, function(ApiClient, CustomFieldDetailed, RecordBasicData, RecordEdit, RecordKind, RecordType, User) {
  'use strict';




  /**
   * The RecordDataForEdit model module.
   * @module model/RecordDataForEdit
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>RecordDataForEdit</code>.
   * Contains data for editing an existing record 
   * @alias module:model/RecordDataForEdit
   * @class
   * @implements module:model/RecordBasicData
   */
  var exports = function() {
    var _this = this;

    RecordBasicData.call(_this);

  };

  /**
   * Constructs a <code>RecordDataForEdit</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecordDataForEdit} obj Optional instance to populate.
   * @return {module:model/RecordDataForEdit} The populated <code>RecordDataForEdit</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      RecordBasicData.constructFromObject(data, obj);
      if (data.hasOwnProperty('record')) {
        obj['record'] = RecordEdit.constructFromObject(data['record']);
      }
    }
    return obj;
  }

  /**
   * The record that is being edited. This value can be modified and sent back to `PUT /records/{id}` 
   * @member {module:model/RecordEdit} record
   */
  exports.prototype['record'] = undefined;

  // Implement RecordBasicData interface:
  /**
   * The possible kinds of a record, which can either belong to system or to an user Possible values are: * user: The record belongs to a specific user * system: The record belongs to the system, and is unrelated to an user 
   * @member {module:model/RecordKind} kind
   */
exports.prototype['kind'] = undefined;

  /**
   * The record type
   * @member {module:model/RecordType} type
   */
exports.prototype['type'] = undefined;

  /**
   * The record custom fields (either defined within this record type or shared fields linked with this record type) 
   * @member {Array.<module:model/CustomFieldDetailed>} fields
   */
exports.prototype['fields'] = undefined;

  /**
   * Can the authenticated user edit records of this type?
   * @member {Boolean} edit
   */
exports.prototype['edit'] = undefined;

  /**
   * Can the authenticated user remove records of this type?
   * @member {Boolean} remove
   */
exports.prototype['remove'] = undefined;

  /**
   * The record owner user. Only returned if `kind` is `user`. 
   * @member {module:model/User} user
   */
exports.prototype['user'] = undefined;



  return exports;
}));


