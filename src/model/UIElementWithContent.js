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
    define(['ApiClient', 'model/VersionedEntity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VersionedEntity'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.UIElementWithContent = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.VersionedEntity);
  }
}(this, function(ApiClient, VersionedEntity) {
  'use strict';




  /**
   * The UIElementWithContent model module.
   * @module model/UIElementWithContent
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>UIElementWithContent</code>.
   * Contains definitions for a UI element that has a content
   * @alias module:model/UIElementWithContent
   * @class
   * @implements module:model/VersionedEntity
   */
  var exports = function() {
    var _this = this;

    VersionedEntity.call(_this);

  };

  /**
   * Constructs a <code>UIElementWithContent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UIElementWithContent} obj Optional instance to populate.
   * @return {module:model/UIElementWithContent} The populated <code>UIElementWithContent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      VersionedEntity.constructFromObject(data, obj);
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
    }
    return obj;
  }

  /**
   * The content of this element
   * @member {String} content
   */
  exports.prototype['content'] = undefined;

  // Implement VersionedEntity interface:
  /**
   * Entity identifier
   * @member {String} id
   */
exports.prototype['id'] = undefined;

  /**
   * The version stamp for the current object, used for optimistic locking. When saving, the same version as previously received needs to be passed back. If no one else has saved the object, the version will match and the object will be updated. However, if someone other has saved the object, the version will no longer match, and an error will be raised. This is used to prevent multiple users (or processes) from updating the same object and unwilingly overridding the property values, leading to data loss.  
   * @member {Number} version
   */
exports.prototype['version'] = undefined;



  return exports;
}));


