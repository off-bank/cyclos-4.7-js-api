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
    define(['ApiClient', 'model/BigDecimal', 'model/DataForTransaction', 'model/Error', 'model/ForbiddenError', 'model/InputError', 'model/NotFoundError', 'model/PaymentError', 'model/PaymentPreview', 'model/PerformPayment', 'model/PerformScheduledPaymentInstallment', 'model/Transaction', 'model/UnauthorizedError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BigDecimal'), require('../model/DataForTransaction'), require('../model/Error'), require('../model/ForbiddenError'), require('../model/InputError'), require('../model/NotFoundError'), require('../model/PaymentError'), require('../model/PaymentPreview'), require('../model/PerformPayment'), require('../model/PerformScheduledPaymentInstallment'), require('../model/Transaction'), require('../model/UnauthorizedError'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.PaymentsApi = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.BigDecimal, root.Cyclos471Api.DataForTransaction, root.Cyclos471Api.Error, root.Cyclos471Api.ForbiddenError, root.Cyclos471Api.InputError, root.Cyclos471Api.NotFoundError, root.Cyclos471Api.PaymentError, root.Cyclos471Api.PaymentPreview, root.Cyclos471Api.PerformPayment, root.Cyclos471Api.PerformScheduledPaymentInstallment, root.Cyclos471Api.Transaction, root.Cyclos471Api.UnauthorizedError);
  }
}(this, function(ApiClient, BigDecimal, DataForTransaction, Error, ForbiddenError, InputError, NotFoundError, PaymentError, PaymentPreview, PerformPayment, PerformScheduledPaymentInstallment, Transaction, UnauthorizedError) {
  'use strict';

  /**
   * Payments service.
   * @module api/PaymentsApi
   * @version 4.7.1
   */

  /**
   * Constructs a new PaymentsApi. 
   * @alias module:api/PaymentsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the calculatePerformPaymentInstallments operation.
     * @callback module:api/PaymentsApi~calculatePerformPaymentInstallmentsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PerformScheduledPaymentInstallment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Calculates the default installments for a scheduled payment
     * Used to calculate installments for a scheduled payment. Will return an installment every month. When later performing the payment, these can be (optionally) customized (such as changing some due dates or amounts) and used on the payment installments.    
     * @param {String} owner Either an user identification, supporting either the value &#39;self&#39; (sans quotes) for the currently authenticated user or an identification method for an user, or the value &#39;system&#39; (sans quotes) for system data. 
     * @param {String} to The payment destination
     * @param {Number} count The number of installments
     * @param {module:model/BigDecimal} amount The total scheduled payment amount
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).  
     * @param {String} opts.currency The payment currency. Used when no &#x60;type&#x60; is not provided, to narrow the possible payment types by currency. 
     * @param {String} opts.type The payment type id or qualified internal name (in the form  &#x60;fromAccountType.paymentType&#x60;). If not provided, will use the first possible type (possibly narrowed by the &#x60;currency&#x60; parameter). However, if more than one type is available, a validation error will be raised. 
     * @param {Date} opts.firstDate The due date of the first installment. If none is provided, it is assumed that the first installment is paid immediately, and others will be with regular 1 month interval 
     * @param {module:api/PaymentsApi~calculatePerformPaymentInstallmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PerformScheduledPaymentInstallment>}
     */
    this.calculatePerformPaymentInstallments = function(owner, to, count, amount, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'owner' is set
      if (owner == undefined || owner == null) {
        throw new Error("Missing the required parameter 'owner' when calling calculatePerformPaymentInstallments");
      }

      // verify the required parameter 'to' is set
      if (to == undefined || to == null) {
        throw new Error("Missing the required parameter 'to' when calling calculatePerformPaymentInstallments");
      }

      // verify the required parameter 'count' is set
      if (count == undefined || count == null) {
        throw new Error("Missing the required parameter 'count' when calling calculatePerformPaymentInstallments");
      }

      // verify the required parameter 'amount' is set
      if (amount == undefined || amount == null) {
        throw new Error("Missing the required parameter 'amount' when calling calculatePerformPaymentInstallments");
      }


      var pathParams = {
        'owner': owner
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'multi'),
        'to': to,
        'count': count,
        'amount': amount,
        'currency': opts['currency'],
        'type': opts['type'],
        'firstDate': opts['firstDate']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['session', 'basic', 'accessClient'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [PerformScheduledPaymentInstallment];

      return this.apiClient.callApi(
        '/{owner}/payments/installments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dataForPerformPayment operation.
     * @callback module:api/PaymentsApi~dataForPerformPaymentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DataForTransaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns configuration data for performing a payment
     * Returns configuration data for performing a payment  
     * @param {String} owner Either an user identification, supporting either the value &#39;self&#39; (sans quotes) for the currently authenticated user or an identification method for an user, or the value &#39;system&#39; (sans quotes) for system data. 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).  
     * @param {String} opts.to The payment destination. Either the string &#x60;system&#x60; for a payment to system or an user identification. 
     * @param {String} opts.type The payment type id or qualified internal name (in the form &#x60;fromAccountType.paymentType&#x60;). If no payment type is provided, the possible types will be returned, so the payer can choose. 
     * @param {module:api/PaymentsApi~dataForPerformPaymentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DataForTransaction}
     */
    this.dataForPerformPayment = function(owner, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'owner' is set
      if (owner == undefined || owner == null) {
        throw new Error("Missing the required parameter 'owner' when calling dataForPerformPayment");
      }


      var pathParams = {
        'owner': owner
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'multi'),
        'to': opts['to'],
        'type': opts['type']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['session', 'basic', 'accessClient'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DataForTransaction;

      return this.apiClient.callApi(
        '/{owner}/payments/data-for-perform', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the performPayment operation.
     * @callback module:api/PaymentsApi~performPaymentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Transaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Performs a payment from the given owner
     * Performs either a direct or scheduled payment from the owner indicated on the path to the owner specified on the body. The destination user should be informed in the &#x60;subject&#x60; parameter. If the &#x60;subject&#x60; is &#x60;system&#x60;, it will be a payment to a system account. The payment id is returned on the response, and a link to the transaction details is returned on the &#x60;Location&#x60; header. 
     * @param {String} owner Either an user identification, supporting either the value &#39;self&#39; (sans quotes) for the currently authenticated user or an identification method for an user, or the value &#39;system&#39; (sans quotes) for system data. 
     * @param {module:model/PerformPayment} payment The perform payment parameters
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).  
     * @param {String} opts.confirmationPassword The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel. 
     * @param {module:api/PaymentsApi~performPaymentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Transaction}
     */
    this.performPayment = function(owner, payment, opts, callback) {
      opts = opts || {};
      var postBody = payment;

      // verify the required parameter 'owner' is set
      if (owner == undefined || owner == null) {
        throw new Error("Missing the required parameter 'owner' when calling performPayment");
      }

      // verify the required parameter 'payment' is set
      if (payment == undefined || payment == null) {
        throw new Error("Missing the required parameter 'payment' when calling performPayment");
      }


      var pathParams = {
        'owner': owner
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'multi')
      };
      var headerParams = {
        'confirmationPassword': opts['confirmationPassword']
      };
      var formParams = {
      };

      var authNames = ['session', 'basic', 'accessClient'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Transaction;

      return this.apiClient.callApi(
        '/{owner}/payments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the previewPayment operation.
     * @callback module:api/PaymentsApi~previewPaymentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentPreview} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Previews a payment before performing it
     * Previews a payment or scheduled payment. The actual balance checking is not performed in the preview.  
     * @param {String} owner Either an user identification, supporting either the value &#39;self&#39; (sans quotes) for the currently authenticated user or an identification method for an user, or the value &#39;system&#39; (sans quotes) for system data. 
     * @param {module:model/PerformPayment} payment The perform payment parameters
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).  
     * @param {module:api/PaymentsApi~previewPaymentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaymentPreview}
     */
    this.previewPayment = function(owner, payment, opts, callback) {
      opts = opts || {};
      var postBody = payment;

      // verify the required parameter 'owner' is set
      if (owner == undefined || owner == null) {
        throw new Error("Missing the required parameter 'owner' when calling previewPayment");
      }

      // verify the required parameter 'payment' is set
      if (payment == undefined || payment == null) {
        throw new Error("Missing the required parameter 'payment' when calling previewPayment");
      }


      var pathParams = {
        'owner': owner
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
      var returnType = PaymentPreview;

      return this.apiClient.callApi(
        '/{owner}/payments/preview', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));