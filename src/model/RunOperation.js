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
    define(['ApiClient', 'model/OperationPageContextEnum'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OperationPageContextEnum'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.RunOperation = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.OperationPageContextEnum);
  }
}(this, function(ApiClient, OperationPageContextEnum) {
  'use strict';




  /**
   * The RunOperation model module.
   * @module model/RunOperation
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>RunOperation</code>.
   * Defines parameters used to run a custom operation 
   * @alias module:model/RunOperation
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>RunOperation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RunOperation} obj Optional instance to populate.
   * @return {module:model/RunOperation} The populated <code>RunOperation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('formParameters')) {
        obj['formParameters'] = ApiClient.convertToType(data['formParameters'], {'String': 'String'});
      }
      if (data.hasOwnProperty('confirmationPassword')) {
        obj['confirmationPassword'] = ApiClient.convertToType(data['confirmationPassword'], 'String');
      }
      if (data.hasOwnProperty('page')) {
        obj['page'] = ApiClient.convertToType(data['page'], 'Number');
      }
      if (data.hasOwnProperty('pageSize')) {
        obj['pageSize'] = ApiClient.convertToType(data['pageSize'], 'Number');
      }
      if (data.hasOwnProperty('pageContext')) {
        obj['pageContext'] = OperationPageContextEnum.constructFromObject(data['pageContext']);
      }
    }
    return obj;
  }

  /**
   * Holds the form field values, keyed by field internal name or id. The format of the value depends on the custom field type. 
   * @member {Object.<String, String>} formParameters
   */
  exports.prototype['formParameters'] = undefined;
  /**
   * If the custom operation requires confirmation password, the `OperationDataForRun.confirmationPasswordInput` will contain the data for inputting the confirmation password. When such value is present, the password value should be provided in this property. 
   * @member {String} confirmationPassword
   */
  exports.prototype['confirmationPassword'] = undefined;
  /**
   * When running a custom operation with `resultType` = `resultPage`, determines the current page offset. Whether this is implemented depends on the script code itself. 
   * @member {Number} page
   */
  exports.prototype['page'] = undefined;
  /**
   * When running a custom operation with `resultType` = `resultPage`, determines the number of results per page. Whether this is implemented depends on the script code itself. 
   * @member {Number} pageSize
   */
  exports.prototype['pageSize'] = undefined;
  /**
   * Only when running a custom operation with `resultType` = `resultPage`. Possible values are: * page: Normal search, returning the data as rows in the result * pdf: Export results as printable PDF * csv: Export results as Comma-Separated-Values (CSV) 
   * @member {module:model/OperationPageContextEnum} pageContext
   */
  exports.prototype['pageContext'] = undefined;



  return exports;
}));


