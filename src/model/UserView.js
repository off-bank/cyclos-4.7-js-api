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
    define(['ApiClient', 'model/AddressView', 'model/EntityReference', 'model/Image', 'model/PhoneView', 'model/RoleEnum', 'model/User', 'model/UserCustomFieldValue', 'model/UserPermissions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AddressView'), require('./EntityReference'), require('./Image'), require('./PhoneView'), require('./RoleEnum'), require('./User'), require('./UserCustomFieldValue'), require('./UserPermissions'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.UserView = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.AddressView, root.Cyclos471Api.EntityReference, root.Cyclos471Api.Image, root.Cyclos471Api.PhoneView, root.Cyclos471Api.RoleEnum, root.Cyclos471Api.User, root.Cyclos471Api.UserCustomFieldValue, root.Cyclos471Api.UserPermissions);
  }
}(this, function(ApiClient, AddressView, EntityReference, Image, PhoneView, RoleEnum, User, UserCustomFieldValue, UserPermissions) {
  'use strict';




  /**
   * The UserView model module.
   * @module model/UserView
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>UserView</code>.
   * Represents an user with all data for viewing the profile
   * @alias module:model/UserView
   * @class
   * @implements module:model/User
   */
  var exports = function() {
    var _this = this;

    User.call(_this);












  };

  /**
   * Constructs a <code>UserView</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserView} obj Optional instance to populate.
   * @return {module:model/UserView} The populated <code>UserView</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      User.constructFromObject(data, obj);
      if (data.hasOwnProperty('role')) {
        obj['role'] = RoleEnum.constructFromObject(data['role']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('customValues')) {
        obj['customValues'] = ApiClient.convertToType(data['customValues'], [UserCustomFieldValue]);
      }
      if (data.hasOwnProperty('group')) {
        obj['group'] = EntityReference.constructFromObject(data['group']);
      }
      if (data.hasOwnProperty('groupSet')) {
        obj['groupSet'] = EntityReference.constructFromObject(data['groupSet']);
      }
      if (data.hasOwnProperty('additionalImages')) {
        obj['additionalImages'] = ApiClient.convertToType(data['additionalImages'], [Image]);
      }
      if (data.hasOwnProperty('addresses')) {
        obj['addresses'] = ApiClient.convertToType(data['addresses'], [AddressView]);
      }
      if (data.hasOwnProperty('phones')) {
        obj['phones'] = ApiClient.convertToType(data['phones'], [PhoneView]);
      }
      if (data.hasOwnProperty('contact')) {
        obj['contact'] = ApiClient.convertToType(data['contact'], 'Boolean');
      }
      if (data.hasOwnProperty('permissions')) {
        obj['permissions'] = UserPermissions.constructFromObject(data['permissions']);
      }
    }
    return obj;
  }

  /**
   * The main role the user has. Possible values are: * administrator: A user who can manage the system and other users. * broker: A user who can manage other users. * member: A regular user who can manage operators.  * operator: A \"sub-user\" created by a member to manage his data. 
   * @member {module:model/RoleEnum} role
   */
  exports.prototype['role'] = undefined;
  /**
   * The user's full name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The user's login name
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * The user's e-mail
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * The list of custom field values this user has
   * @member {Array.<module:model/UserCustomFieldValue>} customValues
   */
  exports.prototype['customValues'] = undefined;
  /**
   * Reference to the user group. Is only returned if the authenticated user has permission to see groups  
   * @member {module:model/EntityReference} group
   */
  exports.prototype['group'] = undefined;
  /**
   * Reference to the user group set. Is only returned if the authenticated user has permission to see group sets and the user group is in a group set  
   * @member {module:model/EntityReference} groupSet
   */
  exports.prototype['groupSet'] = undefined;
  /**
   * Holds the images other than the primary image, which is returned in the `image` field 
   * @member {Array.<module:model/Image>} additionalImages
   */
  exports.prototype['additionalImages'] = undefined;
  /**
   * Visible addresses
   * @member {Array.<module:model/AddressView>} addresses
   */
  exports.prototype['addresses'] = undefined;
  /**
   * Visible phones
   * @member {Array.<module:model/PhoneView>} phones
   */
  exports.prototype['phones'] = undefined;
  /**
   * Indicates whether the given user is a contact of the currently authenticated user 
   * @member {Boolean} contact
   */
  exports.prototype['contact'] = undefined;
  /**
   * Permissions the authenticated has over this user
   * @member {module:model/UserPermissions} permissions
   */
  exports.prototype['permissions'] = undefined;

  // Implement User interface:
  /**
   * Entity identifier
   * @member {String} id
   */
exports.prototype['id'] = undefined;

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



  return exports;
}));


