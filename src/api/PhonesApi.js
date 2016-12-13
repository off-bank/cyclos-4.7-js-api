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
    define(['ApiClient', 'model/CodeVerificationStatusEnum', 'model/ConflictError', 'model/Error', 'model/ForbiddenError', 'model/InputError', 'model/NotFoundError', 'model/PhoneDataForEdit', 'model/PhoneDataForNew', 'model/PhoneEdit', 'model/PhoneNew', 'model/PhoneResult', 'model/PhoneView', 'model/UnauthorizedError', 'model/UserPhonesListData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CodeVerificationStatusEnum'), require('../model/ConflictError'), require('../model/Error'), require('../model/ForbiddenError'), require('../model/InputError'), require('../model/NotFoundError'), require('../model/PhoneDataForEdit'), require('../model/PhoneDataForNew'), require('../model/PhoneEdit'), require('../model/PhoneNew'), require('../model/PhoneResult'), require('../model/PhoneView'), require('../model/UnauthorizedError'), require('../model/UserPhonesListData'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.PhonesApi = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.CodeVerificationStatusEnum, root.Cyclos471Api.ConflictError, root.Cyclos471Api.Error, root.Cyclos471Api.ForbiddenError, root.Cyclos471Api.InputError, root.Cyclos471Api.NotFoundError, root.Cyclos471Api.PhoneDataForEdit, root.Cyclos471Api.PhoneDataForNew, root.Cyclos471Api.PhoneEdit, root.Cyclos471Api.PhoneNew, root.Cyclos471Api.PhoneResult, root.Cyclos471Api.PhoneView, root.Cyclos471Api.UnauthorizedError, root.Cyclos471Api.UserPhonesListData);
  }
}(this, function(ApiClient, CodeVerificationStatusEnum, ConflictError, Error, ForbiddenError, InputError, NotFoundError, PhoneDataForEdit, PhoneDataForNew, PhoneEdit, PhoneNew, PhoneResult, PhoneView, UnauthorizedError, UserPhonesListData) {
  'use strict';

  /**
   * Phones service.
   * @module api/PhonesApi
   * @version 4.7.1
   */

  /**
   * Constructs a new PhonesApi. 
   * @alias module:api/PhonesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createPhone operation.
     * @callback module:api/PhonesApi~createPhoneCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new phone for the given user
     * Creates a new phone for the given user
     * @param {String} user The user identification. The value &#39;self&#39; (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords. 
     * @param {module:model/PhoneNew} phone The phone to be created
     * @param {Object} opts Optional parameters
     * @param {String} opts.confirmationPassword The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel. 
     * @param {module:api/PhonesApi~createPhoneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.createPhone = function(user, phone, opts, callback) {
      opts = opts || {};
      var postBody = phone;

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling createPhone");
      }

      // verify the required parameter 'phone' is set
      if (phone == undefined || phone == null) {
        throw new Error("Missing the required parameter 'phone' when calling createPhone");
      }


      var pathParams = {
        'user': user
      };
      var queryParams = {
      };
      var headerParams = {
        'confirmationPassword': opts['confirmationPassword']
      };
      var formParams = {
      };

      var authNames = ['session', 'basic', 'accessClient'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/{user}/phones', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePhone operation.
     * @callback module:api/PhonesApi~deletePhoneCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes a phone
     * Removes a phone
     * @param {String} id The object identification
     * @param {Object} opts Optional parameters
     * @param {String} opts.confirmationPassword The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel. 
     * @param {module:api/PhonesApi~deletePhoneCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletePhone = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deletePhone");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'confirmationPassword': opts['confirmationPassword']
      };
      var formParams = {
      };

      var authNames = ['session', 'basic', 'accessClient'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/phones/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the disablePhoneForSms operation.
     * @callback module:api/PhonesApi~disablePhoneForSmsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Marks a phone as disabled to receive SMS notifications and operate in the SMS channel 
     * Marks a phone as disabled to receive SMS notifications and operate in. If the confirmation password is enabled, it must be passed in. Only allowed if is a verified mobile phone not already enabled for SMS.  Only the phone owner can verify phones with this method. Administrators / brokers can directly mark a phone number as verified. 
     * @param {String} id The object identification
     * @param {Object} opts Optional parameters
     * @param {String} opts.confirmationPassword The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel. 
     * @param {module:api/PhonesApi~disablePhoneForSmsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.disablePhoneForSms = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling disablePhoneForSms");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'confirmationPassword': opts['confirmationPassword']
      };
      var formParams = {
      };

      var authNames = ['session', 'basic', 'accessClient'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/phones/{id}/disable-for-sms', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the enablePhoneForSms operation.
     * @callback module:api/PhonesApi~enablePhoneForSmsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Marks a phone as enabled to receive SMS notifications and operate in the SMS channel 
     * Marks a phone as enabled to receive SMS notifications and operate in. Only allowed if is a verified mobile phone not already enabled for SMS.  Only the phone owner can verify phones with this method. Administrators / brokers can directly mark a phone number as verified. 
     * @param {String} id The object identification
     * @param {module:api/PhonesApi~enablePhoneForSmsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.enablePhoneForSms = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling enablePhoneForSms");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['session', 'basic', 'accessClient'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/phones/{id}/enable-for-sms', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPhoneDataForEdit operation.
     * @callback module:api/PhonesApi~getPhoneDataForEditCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PhoneDataForEdit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns data to edit a new phone
     * Returns configuration data for editing a phone, plus the current &#x60;PhoneEdit&#x60; object that can be altered and sent back 
     * @param {String} id The object identification
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).  
     * @param {module:api/PhonesApi~getPhoneDataForEditCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PhoneDataForEdit}
     */
    this.getPhoneDataForEdit = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getPhoneDataForEdit");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'multi')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['session', 'basic', 'accessClient'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PhoneDataForEdit;

      return this.apiClient.callApi(
        '/phones/{id}/data-for-edit', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPhoneDataForNew operation.
     * @callback module:api/PhonesApi~getPhoneDataForNewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PhoneDataForNew} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns data to create a new phone
     * Returns configuration data for creating a phone for the given user 
     * @param {String} user The user identification. The value &#39;self&#39; (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords. 
     * @param {module:model/String} type Type of phone Possible values are: * mobile: A mobile phone * landLine: A landline phone 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).  
     * @param {module:api/PhonesApi~getPhoneDataForNewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PhoneDataForNew}
     */
    this.getPhoneDataForNew = function(user, type, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling getPhoneDataForNew");
      }

      // verify the required parameter 'type' is set
      if (type == undefined || type == null) {
        throw new Error("Missing the required parameter 'type' when calling getPhoneDataForNew");
      }


      var pathParams = {
        'user': user
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'multi'),
        'type': type
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['session', 'basic', 'accessClient'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PhoneDataForNew;

      return this.apiClient.callApi(
        '/{user}/phones/data-for-new', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserPhonesListData operation.
     * @callback module:api/PhonesApi~getUserPhonesListDataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserPhonesListData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns data for listing an user&#39;s phones
     * Returns data containing the (visible) user phones, plus additional data related to phones. 
     * @param {String} user The user identification. The value &#39;self&#39; (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords. 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).  
     * @param {module:api/PhonesApi~getUserPhonesListDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserPhonesListData}
     */
    this.getUserPhonesListData = function(user, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling getUserPhonesListData");
      }


      var pathParams = {
        'user': user
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'multi')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['session', 'basic', 'accessClient'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = UserPhonesListData;

      return this.apiClient.callApi(
        '/{user}/phones/list-data', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listPhonesByUser operation.
     * @callback module:api/PhonesApi~listPhonesByUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PhoneResult>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all (visible) user phones
     * Returns a list with all phones of the given user that the currently authenticated user can see.  
     * @param {String} user The user identification. The value &#39;self&#39; (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords. 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).  
     * @param {module:api/PhonesApi~listPhonesByUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PhoneResult>}
     */
    this.listPhonesByUser = function(user, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling listPhonesByUser");
      }


      var pathParams = {
        'user': user
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'multi')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['session', 'basic', 'accessClient'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [PhoneResult];

      return this.apiClient.callApi(
        '/{user}/phones', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sendPhoneVerificationCode operation.
     * @callback module:api/PhonesApi~sendPhoneVerificationCodeCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sends the verification code for an user to verify the mobile phone
     * Sends an SMS text with a verification code the user can use to verify his mobile phone. Only verified phones can be used for receiving SMS notifications or to operate in the SMS operations channel. Only the phone owner can verify phones with this method. Administrators / brokers can directly mark a phone number as verified. 
     * @param {String} id The object identification
     * @param {module:api/PhonesApi~sendPhoneVerificationCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.sendPhoneVerificationCode = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling sendPhoneVerificationCode");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['session', 'basic', 'accessClient'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/phones/{id}/send-verification-code', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePhone operation.
     * @callback module:api/PhonesApi~updatePhoneCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates an existing phone
     * Updates an existing phone
     * @param {String} id The object identification
     * @param {module:model/PhoneEdit} phone The phone to be edited
     * @param {Object} opts Optional parameters
     * @param {String} opts.confirmationPassword The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel. 
     * @param {module:api/PhonesApi~updatePhoneCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updatePhone = function(id, phone, opts, callback) {
      opts = opts || {};
      var postBody = phone;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updatePhone");
      }

      // verify the required parameter 'phone' is set
      if (phone == undefined || phone == null) {
        throw new Error("Missing the required parameter 'phone' when calling updatePhone");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'confirmationPassword': opts['confirmationPassword']
      };
      var formParams = {
      };

      var authNames = ['session', 'basic', 'accessClient'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/phones/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the verifyPhone operation.
     * @callback module:api/PhonesApi~verifyPhoneCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CodeVerificationStatusEnum} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Marks a phone as verified if the code matches
     * Verifies a mobile phone by submitting the code received by SMS. Only verified phones can be enabled for receiving SMS notifications or to operate in the SMS operations channel.  Only the phone owner can verify phones with this method. Administrators / brokers can directly mark a phone number as verified. 
     * @param {String} id The object identification
     * @param {String} code The verification code received by SMS
     * @param {module:api/PhonesApi~verifyPhoneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CodeVerificationStatusEnum}
     */
    this.verifyPhone = function(id, code, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling verifyPhone");
      }

      // verify the required parameter 'code' is set
      if (code == undefined || code == null) {
        throw new Error("Missing the required parameter 'code' when calling verifyPhone");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'code': code
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['session', 'basic', 'accessClient'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CodeVerificationStatusEnum;

      return this.apiClient.callApi(
        '/phones/{id}/verify', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the viewPhone operation.
     * @callback module:api/PhonesApi~viewPhoneCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PhoneView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns details of a specific phone
     * Returns information about a phone, located by id
     * @param {String} id The object identification
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).  
     * @param {module:api/PhonesApi~viewPhoneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PhoneView}
     */
    this.viewPhone = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling viewPhone");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'multi')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['session', 'basic', 'accessClient'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PhoneView;

      return this.apiClient.callApi(
        '/phones/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));