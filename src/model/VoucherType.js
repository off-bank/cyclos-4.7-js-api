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
    define(['ApiClient', 'model/Image', 'model/InternalNamedEntity', 'model/VoucherConfiguration'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Image'), require('./InternalNamedEntity'), require('./VoucherConfiguration'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.VoucherType = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.Image, root.Cyclos471Api.InternalNamedEntity, root.Cyclos471Api.VoucherConfiguration);
  }
}(this, function(ApiClient, Image, InternalNamedEntity, VoucherConfiguration) {
  'use strict';




  /**
   * The VoucherType model module.
   * @module model/VoucherType
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>VoucherType</code>.
   * Reference to a voucher type
   * @alias module:model/VoucherType
   * @class
   * @implements module:model/InternalNamedEntity
   */
  var exports = function() {
    var _this = this;

    InternalNamedEntity.call(_this);


  };

  /**
   * Constructs a <code>VoucherType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoucherType} obj Optional instance to populate.
   * @return {module:model/VoucherType} The populated <code>VoucherType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      InternalNamedEntity.constructFromObject(data, obj);
      if (data.hasOwnProperty('configuration')) {
        obj['configuration'] = VoucherConfiguration.constructFromObject(data['configuration']);
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = Image.constructFromObject(data['image']);
      }
    }
    return obj;
  }

  /**
   * The voucher configuration
   * @member {module:model/VoucherConfiguration} configuration
   */
  exports.prototype['configuration'] = undefined;
  /**
   * The voucher type image
   * @member {module:model/Image} image
   */
  exports.prototype['image'] = undefined;

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

