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
    define(['ApiClient', 'model/CustomFieldDetailed', 'model/Operation', 'model/OperationResultTypeEnum', 'model/OperationRowActionEnum', 'model/OperationScopeEnum', 'model/PasswordInput'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomFieldDetailed'), require('./Operation'), require('./OperationResultTypeEnum'), require('./OperationRowActionEnum'), require('./OperationScopeEnum'), require('./PasswordInput'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.OperationDataForRun = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.CustomFieldDetailed, root.Cyclos471Api.Operation, root.Cyclos471Api.OperationResultTypeEnum, root.Cyclos471Api.OperationRowActionEnum, root.Cyclos471Api.OperationScopeEnum, root.Cyclos471Api.PasswordInput);
  }
}(this, function(ApiClient, CustomFieldDetailed, Operation, OperationResultTypeEnum, OperationRowActionEnum, OperationScopeEnum, PasswordInput) {
  'use strict';




  /**
   * The OperationDataForRun model module.
   * @module model/OperationDataForRun
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>OperationDataForRun</code>.
   * Contains definitions used to run a custom operation 
   * @alias module:model/OperationDataForRun
   * @class
   * @implements module:model/Operation
   */
  var exports = function() {
    var _this = this;

    Operation.call(_this);














  };

  /**
   * Constructs a <code>OperationDataForRun</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OperationDataForRun} obj Optional instance to populate.
   * @return {module:model/OperationDataForRun} The populated <code>OperationDataForRun</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      Operation.constructFromObject(data, obj);
      if (data.hasOwnProperty('informationText')) {
        obj['informationText'] = ApiClient.convertToType(data['informationText'], 'String');
      }
      if (data.hasOwnProperty('confirmationText')) {
        obj['confirmationText'] = ApiClient.convertToType(data['confirmationText'], 'String');
      }
      if (data.hasOwnProperty('customSubmitLabel')) {
        obj['customSubmitLabel'] = ApiClient.convertToType(data['customSubmitLabel'], 'String');
      }
      if (data.hasOwnProperty('formParameters')) {
        obj['formParameters'] = ApiClient.convertToType(data['formParameters'], [CustomFieldDetailed]);
      }
      if (data.hasOwnProperty('hasFileUpload')) {
        obj['hasFileUpload'] = ApiClient.convertToType(data['hasFileUpload'], 'Boolean');
      }
      if (data.hasOwnProperty('confirmationPasswordInput')) {
        obj['confirmationPasswordInput'] = PasswordInput.constructFromObject(data['confirmationPasswordInput']);
      }
      if (data.hasOwnProperty('resultType')) {
        obj['resultType'] = OperationResultTypeEnum.constructFromObject(data['resultType']);
      }
      if (data.hasOwnProperty('rowAction')) {
        obj['rowAction'] = OperationRowActionEnum.constructFromObject(data['rowAction']);
      }
      if (data.hasOwnProperty('allowExport')) {
        obj['allowExport'] = ApiClient.convertToType(data['allowExport'], 'Boolean');
      }
      if (data.hasOwnProperty('allowPrint')) {
        obj['allowPrint'] = ApiClient.convertToType(data['allowPrint'], 'Boolean');
      }
      if (data.hasOwnProperty('searchAutomatically')) {
        obj['searchAutomatically'] = ApiClient.convertToType(data['searchAutomatically'], 'Boolean');
      }
      if (data.hasOwnProperty('rowLocation')) {
        obj['rowLocation'] = ApiClient.convertToType(data['rowLocation'], 'String');
      }
      if (data.hasOwnProperty('rowOperation')) {
        obj['rowOperation'] = Operation.constructFromObject(data['rowOperation']);
      }
      if (data.hasOwnProperty('rowUrl')) {
        obj['rowUrl'] = ApiClient.convertToType(data['rowUrl'], 'String');
      }
    }
    return obj;
  }

  /**
   * A message to be displayed to the user when displaying the parameters form 
   * @member {String} informationText
   */
  exports.prototype['informationText'] = undefined;
  /**
   * A message to be shown to the user in order to confirm the operation execution 
   * @member {String} confirmationText
   */
  exports.prototype['confirmationText'] = undefined;
  /**
   * A label to be shown on the submit button. When not returned, a generic 'Submit' should be displayed. 
   * @member {String} customSubmitLabel
   */
  exports.prototype['customSubmitLabel'] = undefined;
  /**
   * The custom fields which are used in a form as parameters for the operation execution. 
   * @member {Array.<module:model/CustomFieldDetailed>} formParameters
   */
  exports.prototype['formParameters'] = undefined;
  /**
   * Indicates whether this operation accepts a file upload as input 
   * @member {Boolean} hasFileUpload
   */
  exports.prototype['hasFileUpload'] = undefined;
  /**
   * If a confirmation password is used, contains the definitions on how to request that password from the user. This confirmation password is required when performing sensible actions. Sometimes this is dynamic, for example, the confirmation might be configured to be used only once per session, or operations like payments may have a limit per day to be without confirmation (pinless). 
   * @member {module:model/PasswordInput} confirmationPasswordInput
   */
  exports.prototype['confirmationPasswordInput'] = undefined;
  /**
   * The kind of data a custom operation execution is expected to return Possible values are: * notification: Returns a text to be displayed as a simple notification * plainText: Returns a plain text to be displayed in a page, and optionally printed * richText: Returns an HTML formatted text to be displayed in a page, and optionally printed * fileDownload: Returns a file, which can be downloaded * url: The result should be an URL to which the client should be redirected to * externalRedirect: The main execution returns an URL for another service.   Then a second execution is expected when this other service redirects the client back to Cyclos * resultPage: Returns a page or list of results, which should be displayed in a table like any other search / list 
   * @member {module:model/OperationResultTypeEnum} resultType
   */
  exports.prototype['resultType'] = undefined;
  /**
   * The action that should be performed when the user clicks a row in the results table Possible values are: * url: Navigate to an arbitrary URL, which is set in the custom operation itself * location: Navigate to a standard Cyclos location * operation: Run an internal custom operation, which is set on the custom operation itself 
   * @member {module:model/OperationRowActionEnum} rowAction
   */
  exports.prototype['rowAction'] = undefined;
  /**
   * Does this operation allows exporting the results as CSV? Only returned if `resultType`  is `resultPage`. 
   * @member {Boolean} allowExport
   */
  exports.prototype['allowExport'] = undefined;
  /**
   * Does this operation allows printing the results as PDF? Only returned if `resultType` is `resultPage`. 
   * @member {Boolean} allowPrint
   */
  exports.prototype['allowPrint'] = undefined;
  /**
   * Should the operation be immediately executed by the third party client software when first presenting the form to the user  (when `true`) or only when the user clicks submit (when `false`)? Only returned if `resultType` is `resultPage`. 
   * @member {Boolean} searchAutomatically
   */
  exports.prototype['searchAutomatically'] = undefined;
  /**
   * The location to which the client should be redirected when selecting a row in the results table. Only returned if `resultType` is `resultPage` and `rowAction` is `location`. 
   * @member {String} rowLocation
   */
  exports.prototype['rowLocation'] = undefined;
  /**
   * The custom operation that should be executed when clicking a row. Only returned if `resultType` is `resultPage` and `rowAction` is `operation`. 
   * @member {module:model/Operation} rowOperation
   */
  exports.prototype['rowOperation'] = undefined;
  /**
   * The URL the client should be redirected when clicking a row. Only returned if `resultType` is `resultPage` and `rowAction` is `url`. 
   * @member {String} rowUrl
   */
  exports.prototype['rowUrl'] = undefined;

  // Implement Operation interface:
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
   * The entity internal name, which can be seen as an extra identifier 
   * @member {String} internalName
   */
exports.prototype['internalName'] = undefined;

  /**
   * The scope determines where does a custom operation can be executed Possible values are: * system: A general, system custom operation * user: A custom operation over a single user * menu: A custom operation which is visible in a custom menu item * advertisement: A custom operation which is executed over an advertisement * internal: A custom operation which is executed by another custom operation * record: A custom operation which is executed over a record * bulkAction: A custom operation executed over a set of users (one at a time) 
   * @member {module:model/OperationScopeEnum} scope
   */
exports.prototype['scope'] = undefined;



  return exports;
}));


