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
    define(['ApiClient', 'model/Image', 'model/ImageKind'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Image'), require('./ImageKind'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.ImageView = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.Image, root.Cyclos471Api.ImageKind);
  }
}(this, function(ApiClient, Image, ImageKind) {
  'use strict';




  /**
   * The ImageView model module.
   * @module model/ImageView
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>ImageView</code>.
   * Details about an image
   * @alias module:model/ImageView
   * @class
   * @implements module:model/Image
   */
  var exports = function() {
    var _this = this;

    Image.call(_this);


  };

  /**
   * Constructs a <code>ImageView</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImageView} obj Optional instance to populate.
   * @return {module:model/ImageView} The populated <code>ImageView</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      Image.constructFromObject(data, obj);
      if (data.hasOwnProperty('kind')) {
        obj['kind'] = ImageKind.constructFromObject(data['kind']);
      }
      if (data.hasOwnProperty('convertedToJpeg')) {
        obj['convertedToJpeg'] = ApiClient.convertToType(data['convertedToJpeg'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Determines the kind of an image Possible values are: * profile: User profile images are those associated with the user profile. The first profile image is used to depict the user on search results. * userCustom: User custom images are additional images that can be used on rich text contents. * systemCustom: System custom images are additional images an administrator that can be used on rich text contents. * ad: Advertisement images are associated with an advertisement, be it simple or for web shop. * temp: A temporary image which can upload for later associating with an entity being registered (for example, user or advertisement). 
   * @member {module:model/ImageKind} kind
   */
  exports.prototype['kind'] = undefined;
  /**
   * Indicates whether this was originally a PNG format that exceeded the maximum allowed size and was automatically converted to JPEG. 
   * @member {Boolean} convertedToJpeg
   */
  exports.prototype['convertedToJpeg'] = undefined;

  // Implement Image interface:
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



  return exports;
}));


