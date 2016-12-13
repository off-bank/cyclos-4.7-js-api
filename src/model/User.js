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
    define(['ApiClient', 'model/Entity', 'model/Image', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Entity'), require('./Image'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.User = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.Entity, root.Cyclos471Api.Image, root.Cyclos471Api.User);
  }
}(this, function(ApiClient, Entity, Image, User) {
  'use strict';




  /**
   * The User model module.
   * @module model/User
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>User</code>.
   * Basic representation of an user (both admin and regular)
   * @alias module:model/User
   * @class
   * @implements module:model/Entity
   */
  var exports = function() {
    var _this = this;

    Entity.call(_this);




  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      Entity.constructFromObject(data, obj);
      if (data.hasOwnProperty('display')) {
        obj['display'] = ApiClient.convertToType(data['display'], 'String');
      }
      if (data.hasOwnProperty('shortDisplay')) {
        obj['shortDisplay'] = ApiClient.convertToType(data['shortDisplay'], 'String');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = Image.constructFromObject(data['image']);
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = User.constructFromObject(data['user']);
      }
    }
    return obj;
  }

  /**
   * Contains the formatting of the user according to the  configuration. Is only returned if no profile fields are marked to return in user list 
   * @member {String} display
   */
  exports.prototype['display'] = undefined;
  /**
   * Contains the short formatting of the user according to the configuration. Is only returned if no profile fields are marked to return in user list 
   * @member {String} shortDisplay
   */
  exports.prototype['shortDisplay'] = undefined;
  /**
   * The primary user profile image
   * @member {module:model/Image} image
   */
  exports.prototype['image'] = undefined;
  /**
   * Is the operator owner, only returned if this user represents an operator. Even so, in some cases, like searching for operators of a specific user, this field may not be returned. 
   * @member {module:model/User} user
   */
  exports.prototype['user'] = undefined;

  // Implement Entity interface:
  /**
   * Entity identifier
   * @member {String} id
   */
exports.prototype['id'] = undefined;



  return exports;
}));

