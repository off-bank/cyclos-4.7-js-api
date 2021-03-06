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
    root.Cyclos471Api.Image = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.NamedEntity);
  }
}(this, function(ApiClient, NamedEntity) {
  'use strict';




  /**
   * The Image model module.
   * @module model/Image
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>Image</code>.
   * Contains data for displaying an image
   * @alias module:model/Image
   * @class
   * @implements module:model/NamedEntity
   */
  var exports = function() {
    var _this = this;

    NamedEntity.call(_this);





  };

  /**
   * Constructs a <code>Image</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Image} obj Optional instance to populate.
   * @return {module:model/Image} The populated <code>Image</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      NamedEntity.constructFromObject(data, obj);
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('contentType')) {
        obj['contentType'] = ApiClient.convertToType(data['contentType'], 'String');
      }
      if (data.hasOwnProperty('width')) {
        obj['width'] = ApiClient.convertToType(data['width'], 'Number');
      }
      if (data.hasOwnProperty('height')) {
        obj['height'] = ApiClient.convertToType(data['height'], 'Number');
      }
      if (data.hasOwnProperty('length')) {
        obj['length'] = ApiClient.convertToType(data['length'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The URL for getting the contents of the image
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * MIME type of the stored image
   * @member {String} contentType
   */
  exports.prototype['contentType'] = undefined;
  /**
   * The image width, in pixels
   * @member {Number} width
   */
  exports.prototype['width'] = undefined;
  /**
   * The image height, in pixels
   * @member {Number} height
   */
  exports.prototype['height'] = undefined;
  /**
   * The file size of the image in full size, in bytes
   * @member {Number} length
   */
  exports.prototype['length'] = undefined;

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


