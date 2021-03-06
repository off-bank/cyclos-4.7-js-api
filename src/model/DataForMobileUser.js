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
    define(['ApiClient', 'model/Auth', 'model/DateFormatEnum', 'model/MobileBaseData', 'model/MobileOperationEnum', 'model/MobilePage', 'model/MobileTranslations', 'model/NumberFormatEnum', 'model/Principal', 'model/TimeFormatEnum', 'model/UIElementWithContent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Auth'), require('./DateFormatEnum'), require('./MobileBaseData'), require('./MobileOperationEnum'), require('./MobilePage'), require('./MobileTranslations'), require('./NumberFormatEnum'), require('./Principal'), require('./TimeFormatEnum'), require('./UIElementWithContent'));
  } else {
    // Browser globals (root is window)
    if (!root.Cyclos471Api) {
      root.Cyclos471Api = {};
    }
    root.Cyclos471Api.DataForMobileUser = factory(root.Cyclos471Api.ApiClient, root.Cyclos471Api.Auth, root.Cyclos471Api.DateFormatEnum, root.Cyclos471Api.MobileBaseData, root.Cyclos471Api.MobileOperationEnum, root.Cyclos471Api.MobilePage, root.Cyclos471Api.MobileTranslations, root.Cyclos471Api.NumberFormatEnum, root.Cyclos471Api.Principal, root.Cyclos471Api.TimeFormatEnum, root.Cyclos471Api.UIElementWithContent);
  }
}(this, function(ApiClient, Auth, DateFormatEnum, MobileBaseData, MobileOperationEnum, MobilePage, MobileTranslations, NumberFormatEnum, Principal, TimeFormatEnum, UIElementWithContent) {
  'use strict';




  /**
   * The DataForMobileUser model module.
   * @module model/DataForMobileUser
   * @version 4.7.1
   */

  /**
   * Constructs a new <code>DataForMobileUser</code>.
   * Contains definitions for the data for UI for users   
   * @alias module:model/DataForMobileUser
   * @class
   * @implements module:model/MobileBaseData
   */
  var exports = function() {
    var _this = this;

    MobileBaseData.call(_this);











  };

  /**
   * Constructs a <code>DataForMobileUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataForMobileUser} obj Optional instance to populate.
   * @return {module:model/DataForMobileUser} The populated <code>DataForMobileUser</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      MobileBaseData.constructFromObject(data, obj);
      if (data.hasOwnProperty('autoCompleteResults')) {
        obj['autoCompleteResults'] = ApiClient.convertToType(data['autoCompleteResults'], 'Number');
      }
      if (data.hasOwnProperty('hideUsersSearchMenu')) {
        obj['hideUsersSearchMenu'] = ApiClient.convertToType(data['hideUsersSearchMenu'], 'Boolean');
      }
      if (data.hasOwnProperty('auth')) {
        obj['auth'] = Auth.constructFromObject(data['auth']);
      }
      if (data.hasOwnProperty('mobileHelp')) {
        obj['mobileHelp'] = UIElementWithContent.constructFromObject(data['mobileHelp']);
      }
      if (data.hasOwnProperty('posHelp')) {
        obj['posHelp'] = UIElementWithContent.constructFromObject(data['posHelp']);
      }
      if (data.hasOwnProperty('mapBrowserApiKey')) {
        obj['mapBrowserApiKey'] = ApiClient.convertToType(data['mapBrowserApiKey'], 'String');
      }
      if (data.hasOwnProperty('pages')) {
        obj['pages'] = ApiClient.convertToType(data['pages'], [MobilePage]);
      }
      if (data.hasOwnProperty('canReceiveFromNfcTag')) {
        obj['canReceiveFromNfcTag'] = ApiClient.convertToType(data['canReceiveFromNfcTag'], 'Boolean');
      }
      if (data.hasOwnProperty('mobileCameraOnPayment')) {
        obj['mobileCameraOnPayment'] = ApiClient.convertToType(data['mobileCameraOnPayment'], 'Boolean');
      }
      if (data.hasOwnProperty('principalsAllowingQRCode')) {
        obj['principalsAllowingQRCode'] = ApiClient.convertToType(data['principalsAllowingQRCode'], [Principal]);
      }
      if (data.hasOwnProperty('allowedOperations')) {
        obj['allowedOperations'] = ApiClient.convertToType(data['allowedOperations'], [MobileOperationEnum]);
      }
    }
    return obj;
  }

  /**
   * Number of search results for user autocomplete component
   * @member {Number} autoCompleteResults
   */
  exports.prototype['autoCompleteResults'] = undefined;
  /**
   * Indicates if the user search menu should be hidden.
   * @member {Boolean} hideUsersSearchMenu
   */
  exports.prototype['hideUsersSearchMenu'] = undefined;
  /**
   * The authenticated user
   * @member {module:model/Auth} auth
   */
  exports.prototype['auth'] = undefined;
  /**
   * The help content for mobile mode
   * @member {module:model/UIElementWithContent} mobileHelp
   */
  exports.prototype['mobileHelp'] = undefined;
  /**
   * The help content for mobile mode
   * @member {module:model/UIElementWithContent} posHelp
   */
  exports.prototype['posHelp'] = undefined;
  /**
   * The Google Maps browser API key
   * @member {String} mapBrowserApiKey
   */
  exports.prototype['mapBrowserApiKey'] = undefined;
  /**
   * The visible mobile pages
   * @member {Array.<module:model/MobilePage>} pages
   */
  exports.prototype['pages'] = undefined;
  /**
   * Indicates whether there is at least one NFC tag the user can use to receive payments 
   * @member {Boolean} canReceiveFromNfcTag
   */
  exports.prototype['canReceiveFromNfcTag'] = undefined;
  /**
   * Indicates whether the scan QR code option should be displayed for payments          
   * @member {Boolean} mobileCameraOnPayment
   */
  exports.prototype['mobileCameraOnPayment'] = undefined;
  /**
   * Indicates the possible principals which are allowed to be used in QR code generation
   * @member {Array.<module:model/Principal>} principalsAllowingQRCode
   */
  exports.prototype['principalsAllowingQRCode'] = undefined;
  /**
   * The possible operations the mobile application can perform Possibles values for each array element are: * viewUserProfile: View the profile of other users * viewAccountInformation: View own accounts * makeUserPayment: Perform payments to other users * makeSystemPayment: Perform payments to system * receivePayment: Receive payments from other users * boughtVouchers: View bought vouchers * redeemVoucher: Redeem vouchers * manageContacts: Manage own contacts * usersSearch: Search other users * mapDirectory: View the user directory (map) * activateNfcDevice: Activate the phone as NFC device * deactivateNfcDevice: Deactivate the phone as NFC device * assignPos: Assign an access client for POS mode * unassignPos: Unassign the current access client from POS mode * formatNfc: Format NFC tags * initializeNfc: Initialize NFC tags * personalizeNfc: Personalize NFC tags  * readNfc: Read NFC tags * manageOperators: Manage own/user operators * personalizeNfcSelf: Personalize NFC tags for the logged user or its operators * registerUsersAsMember: Register other users as member or operator  
   * @member {Array.<module:model/MobileOperationEnum>} allowedOperations
   */
  exports.prototype['allowedOperations'] = undefined;

  // Implement MobileBaseData interface:
  /**
   * The version of the Cyclos server
   * @member {String} cyclosVersion
   */
exports.prototype['cyclosVersion'] = undefined;

  /**
   * The current client time according to the server
   * @member {Date} currentClientTime
   */
exports.prototype['currentClientTime'] = undefined;

  /**
   * The format for numbers Possible values are: * commaAsDecimal: 9.999,99 * periodAsDecimal: 9,999.99 
   * @member {module:model/NumberFormatEnum} numberFormat
   */
exports.prototype['numberFormat'] = undefined;

  /**
   * The format for dates Possible values are: * dmySlash: DD/MM/YYYY * dmyDash: DD-MM-YYYY * dmyPeriod: DD.MM.YYYY * mdySlash: MM/DD/YYYY * mdyDash: MM-DD-YYYY * mdyPeriod: MM.DD.YYYY * ymdSlash: YYYY/MM/DD * ymdDash: YYYY-MM-DD * ymdPeriod: YYYY.MM.DD 
   * @member {module:model/DateFormatEnum} dateFormat
   */
exports.prototype['dateFormat'] = undefined;

  /**
   * The format for times Possible values are: * h24: 24-hour * h12: 12-hour with AM/PM indicator 
   * @member {module:model/TimeFormatEnum} timeFormat
   */
exports.prototype['timeFormat'] = undefined;

  /**
   * The theme guests. Only returned when changed.
   * @member {module:model/UIElementWithContent} theme
   */
exports.prototype['theme'] = undefined;

  /**
   * The mobile translations. Only returned when changed.
   * @member {module:model/MobileTranslations} translations
   */
exports.prototype['translations'] = undefined;



  return exports;
}));


