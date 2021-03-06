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
    define(['ApiClient', 'model/Address', 'model/AddressDataForEdit', 'model/AddressDataForNew', 'model/AddressEdit', 'model/AddressNew', 'model/AddressResult', 'model/AddressView', 'model/ConflictError', 'model/Country', 'model/Error', 'model/ForbiddenError', 'model/InputError', 'model/NotFoundError', 'model/UnauthorizedError', 'model/UserAddressesListData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Address'), require('../model/AddressDataForEdit'), require('../model/AddressDataForNew'), require('../model/AddressEdit'), require('../model/AddressNew'), require('../model/AddressResult'), require('../model/AddressView'), require('../model/ConflictError'), require('../model/Country'), require('../model/Error'), require('../model/ForbiddenError'), require('../model/InputError'), require('../model/NotFoundError'), require('../model/UnauthorizedError'), require('../model/UserAddressesListData'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.AddressesApi = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.Address, root.Cyclos471Api.AddressDataForEdit, root.Cyclos471Api.AddressDataForNew, root.Cyclos471Api.AddressEdit, root.Cyclos471Api.AddressNew, root.Cyclos471Api.AddressResult, root.Cyclos471Api.AddressView, root.Cyclos471Api.ConflictError, root.Cyclos471Api.Country, root.Cyclos471Api.Error, root.Cyclos471Api.ForbiddenError, root.Cyclos471Api.InputError, root.Cyclos471Api.NotFoundError, root.Cyclos471Api.UnauthorizedError, root.Cyclos471Api.UserAddressesListData);
  }
}(this, function(ApiClient, Address, AddressDataForEdit, AddressDataForNew, AddressEdit, AddressNew, AddressResult, AddressView, ConflictError, Country, Error, ForbiddenError, InputError, NotFoundError, UnauthorizedError, UserAddressesListData) {
  'use strict';

  /**
   * Addresses service.
   * @module api/AddressesApi
   * @version 4.7.1
   */

  /**
   * Constructs a new AddressesApi. 
   * @alias module:api/AddressesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createAddress operation.
     * @callback module:api/AddressesApi~createAddressCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new address for the given user
     * Creates a new address for the given user. If it is set to be the default one, the previous default (if any) will no longer be the default address for that user. 
     * @param {String} user The user identification. The value &#39;self&#39; (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords. 
     * @param {module:model/AddressNew} address The address to be created
     * @param {Object} opts Optional parameters
     * @param {String} opts.confirmationPassword The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel. 
     * @param {module:api/AddressesApi~createAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.createAddress = function(user, address, opts, callback) {
      opts = opts || {};
      var postBody = address;

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling createAddress");
      }

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling createAddress");
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
        '/{user}/addresses', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAddress operation.
     * @callback module:api/AddressesApi~deleteAddressCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes an address
     * Removes an address
     * @param {String} id The object identification
     * @param {Object} opts Optional parameters
     * @param {String} opts.confirmationPassword The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel. 
     * @param {module:api/AddressesApi~deleteAddressCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteAddress = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deleteAddress");
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
        '/addresses/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAddressDataForEdit operation.
     * @callback module:api/AddressesApi~getAddressDataForEditCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AddressDataForEdit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns data to edit a new address
     * Returns configuration data for editing an address, plus the current AddressEdit object that can be altered and sent back 
     * @param {String} id The object identification
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).  
     * @param {module:api/AddressesApi~getAddressDataForEditCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AddressDataForEdit}
     */
    this.getAddressDataForEdit = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getAddressDataForEdit");
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
      var returnType = AddressDataForEdit;

      return this.apiClient.callApi(
        '/addresses/{id}/data-for-edit', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAddressDataForNew operation.
     * @callback module:api/AddressesApi~getAddressDataForNewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AddressDataForNew} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns data to create a new address
     * Returns configuration data for creating an address for the given user 
     * @param {String} user The user identification. The value &#39;self&#39; (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords. 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).  
     * @param {module:api/AddressesApi~getAddressDataForNewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AddressDataForNew}
     */
    this.getAddressDataForNew = function(user, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling getAddressDataForNew");
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
      var returnType = AddressDataForNew;

      return this.apiClient.callApi(
        '/{user}/addresses/data-for-new', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserAddressesListData operation.
     * @callback module:api/AddressesApi~getUserAddressesListDataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserAddressesListData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns data for addresses listing of the given user
     * Returns data containing the (visible) user addresses, plus additional data related to addresses. 
     * @param {String} user The user identification. The value &#39;self&#39; (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords. 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).  
     * @param {module:api/AddressesApi~getUserAddressesListDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserAddressesListData}
     */
    this.getUserAddressesListData = function(user, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling getUserAddressesListData");
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
      var returnType = UserAddressesListData;

      return this.apiClient.callApi(
        '/{user}/addresses/list-data', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserPrimaryAddress operation.
     * @callback module:api/AddressesApi~getUserPrimaryAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Address} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the primary address of a given user
     * Returns the primary (default) address of the given user, in case it is visible 
     * @param {String} user The user identification. The value &#39;self&#39; (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords. 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).  
     * @param {module:api/AddressesApi~getUserPrimaryAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Address}
     */
    this.getUserPrimaryAddress = function(user, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling getUserPrimaryAddress");
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
      var returnType = Address;

      return this.apiClient.callApi(
        '/{user}/addresses/primary', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAddressesByUser operation.
     * @callback module:api/AddressesApi~listAddressesByUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AddressResult>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all (visible) user addresses
     * Returns a list with all addresses of the given user that the currently authenticated user can see.  
     * @param {String} user The user identification. The value &#39;self&#39; (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords. 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).  
     * @param {module:api/AddressesApi~listAddressesByUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AddressResult>}
     */
    this.listAddressesByUser = function(user, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling listAddressesByUser");
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
      var returnType = [AddressResult];

      return this.apiClient.callApi(
        '/{user}/addresses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listCountries operation.
     * @callback module:api/AddressesApi~listCountriesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Country>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all known countries with the ISO code and display name
     * The country code is the 2-letter, &#x60;ISO 3166-1 alpha-2&#x60; code, and the display name is returned in the authenticated user&#39;s language  
     * @param {module:api/AddressesApi~listCountriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Country>}
     */
    this.listCountries = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Country];

      return this.apiClient.callApi(
        '/addresses/countries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAddress operation.
     * @callback module:api/AddressesApi~updateAddressCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates an existing address
     * Updates an existing address
     * @param {String} id The object identification
     * @param {module:model/AddressEdit} address The address to be edited
     * @param {Object} opts Optional parameters
     * @param {String} opts.confirmationPassword The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel. 
     * @param {module:api/AddressesApi~updateAddressCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateAddress = function(id, address, opts, callback) {
      opts = opts || {};
      var postBody = address;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateAddress");
      }

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling updateAddress");
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
        '/addresses/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the viewAddress operation.
     * @callback module:api/AddressesApi~viewAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AddressView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns details of a specific address
     * Returns information about an address, located by id
     * @param {String} id The object identification
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).  
     * @param {module:api/AddressesApi~viewAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AddressView}
     */
    this.viewAddress = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling viewAddress");
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
      var returnType = AddressView;

      return this.apiClient.callApi(
        '/addresses/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
