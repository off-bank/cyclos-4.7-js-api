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
    define(['ApiClient', 'model/Agreement', 'model/Error', 'model/ForbiddenError', 'model/NotFoundError', 'model/UnauthorizedError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Agreement'), require('../model/Error'), require('../model/ForbiddenError'), require('../model/NotFoundError'), require('../model/UnauthorizedError'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.AgreementsApi = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.Agreement, root.Cyclos471Api.Error, root.Cyclos471Api.ForbiddenError, root.Cyclos471Api.NotFoundError, root.Cyclos471Api.UnauthorizedError);
  }
}(this, function(ApiClient, Agreement, Error, ForbiddenError, NotFoundError, UnauthorizedError) {
  'use strict';

  /**
   * Agreements service.
   * @module api/AgreementsApi
   * @version 4.7.1
   */

  /**
   * Constructs a new AgreementsApi. 
   * @alias module:api/AgreementsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the acceptPendingAgreement operation.
     * @callback module:api/AgreementsApi~acceptPendingAgreementCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Accept one or more agreements
     * Accept all the given agreements  
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.agreements The identifiers or internal names of the agreements to be accepted 
     * @param {module:api/AgreementsApi~acceptPendingAgreementCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.acceptPendingAgreement = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'agreements': this.apiClient.buildCollectionParam(opts['agreements'], 'csv')
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
        '/agreements/accept', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listPendingAgreements operation.
     * @callback module:api/AgreementsApi~listPendingAgreementsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Agreement>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the agreements the authenticated user needs to accept in order to use the system 
     * Returns a list with all agreements the authenticated user is pending to accept. Until accepting the pending agreements, the usage of the system is limited.  
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).  
     * @param {module:api/AgreementsApi~listPendingAgreementsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Agreement>}
     */
    this.listPendingAgreements = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
      var returnType = [Agreement];

      return this.apiClient.callApi(
        '/agreements/pending', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));