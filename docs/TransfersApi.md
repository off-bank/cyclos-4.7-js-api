# Cyclos471Api.TransfersApi

All URIs are relative to *https://communities.cyclos.org/wootsapp/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**chargebackTransfer**](TransfersApi.md#chargebackTransfer) | **POST** /transfers/{key}/chargeback | Perform the chargeback of a transfer
[**getTransferDataForSearch**](TransfersApi.md#getTransferDataForSearch) | **GET** /transfers/data-for-search | Returns data for searching transfers over multiple accounts
[**searchTransfers**](TransfersApi.md#searchTransfers) | **GET** /transfers | Searches for transfers over multiple accounts
[**viewTransfer**](TransfersApi.md#viewTransfer) | **GET** /transfers/{key} | Returns details about a transfer


<a name="chargebackTransfer"></a>
# **chargebackTransfer**
> &#39;String&#39; chargebackTransfer(key, opts)

Perform the chargeback of a transfer

The chargeback generates a new transaction with &#x60;kind&#x60; &#x3D; &#x60;chargeback&#x60;. A new transfer is generated with the same from / to, and negative amount. This will effectively return the amount to the original account. Only top-level transfers can be charged back. For example, a transfer used to charge a fee cannot be charged back. Also, the hability to chargeback a transfer depends on permissions and configuration like the maximum allowed time for the chargeback.  

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');
var defaultClient = Cyclos471Api.ApiClient.default;

// Configure API key authorization: session
var session = defaultClient.authentications['session'];
session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

// Configure API key authorization: accessClient
var accessClient = defaultClient.authentications['accessClient'];
accessClient.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessClient.apiKeyPrefix = 'Token';

var apiInstance = new Cyclos471Api.TransfersApi();

var key = "key_example"; // String | Either the id or transaction number

var opts = { 
  'confirmationPassword': "confirmationPassword_example" // String | The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.chargebackTransfer(key, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| Either the id or transaction number | 
 **confirmationPassword** | **String**| The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

<a name="getTransferDataForSearch"></a>
# **getTransferDataForSearch**
> TransferDataForSearch getTransferDataForSearch(opts)

Returns data for searching transfers over multiple accounts

Returns configuration data for searching transfers over multiple accounts. This operation can only be performed by administrators or brokers over managed users. 

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');
var defaultClient = Cyclos471Api.ApiClient.default;

// Configure API key authorization: session
var session = defaultClient.authentications['session'];
session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

// Configure API key authorization: accessClient
var accessClient = defaultClient.authentications['accessClient'];
accessClient.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessClient.apiKeyPrefix = 'Token';

var apiInstance = new Cyclos471Api.TransfersApi();

var opts = { 
  'fields': ["fields_example"] // [String] | Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: `a,b.b1,c.-c1,c.-c2` will return the fields `a`, `b` (containing only the `b1` field) and `c` (containing all its fields except for `c1` or `c2`).  
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTransferDataForSearch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**TransferDataForSearch**](TransferDataForSearch.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchTransfers"></a>
# **searchTransfers**
> [Transfer] searchTransfers(opts)

Searches for transfers over multiple accounts

Searches for transfers over multiple accounts. This operation can only be performed by administrators or brokers over managed users. 

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');
var defaultClient = Cyclos471Api.ApiClient.default;

// Configure API key authorization: session
var session = defaultClient.authentications['session'];
session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

// Configure API key authorization: accessClient
var accessClient = defaultClient.authentications['accessClient'];
accessClient.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessClient.apiKeyPrefix = 'Token';

var apiInstance = new Cyclos471Api.TransfersApi();

var opts = { 
  'fields': ["fields_example"], // [String] | Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: `a,b.b1,c.-c1,c.-c2` will return the fields `a`, `b` (containing only the `b1` field) and `c` (containing all its fields except for `c1` or `c2`).  
  'datePeriod': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | The minimum / maximum transfer date. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma. 
  'transferFilters': ["transferFilters_example"], // [String] | Reference to the transfer filters, which filters transfers by type. 
  'transactionNumber': "transactionNumber_example", // String | The transaction number of the matching transfer 
  'user': "user_example", // String | Reference an user that should have either received / performed the transfer. 
  'groups': ["groups_example"], // [String] | Reference to the user group used to perform / receive the transfer. Only taken into account if authenticated as administrator. 
  'by': "by_example", // String | Reference to the user that was authenticated when the transfer was performed. Is only taken into account if authenticated as administrator. 
  'broker': "broker_example", // String | Reference to the broker of users involved in transfers. Is only taken into account if authenticated as administrator. 
  'channels': ["channels_example"], // [String] | Reference to the channel used to perform / receive the transfer. Only taken into account if authenticated as administrator. 
  'excludedIds': ["excludedIds_example"], // [String] | List of transfers ids to be excluded from the result. 
  'accessClients': ["accessClients_example"], // [String] | References to access clients used to perform / receive the transfer 
  'customFields': ["customFields_example"], // [String] | Custom field values used as search criteria. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon). For example, customFields=field1:value1,field2:value2. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, profileFields=field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, profileFields=rank:bronze|silver,birthDate:2000-01-01|2001-12-31 Would match results whose custom field with internal name 'rank' is either bronze or silver, and whose 'birthDate' is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like customValues=birthDate:|2001-12-31. 
  'statuses': ["statuses_example"], // [String] | Transfer statuses used as search criteria. Each array element should be either the identifier or the status qualified internal name, composed by flow internal name, a dot, and the status internal name. For example, `loan.open` would be a valid internal name. 
  'amountRange': [new Cyclos471Api.BigDecimal()], // [BigDecimal] | The minimum / maximum amount. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma. 
  'transferKinds': ["transferKinds_example"], // [String] | Indicates the reason the transfer was created Possible values for each array element are: * payment: A transfer generated by a direct payment or accepting a webshop order * scheduledPaymentInstallment: A transfer generated when processing a scheduled payment installment * recurringPayment: A transfer generated when processing a recurring payment * chargeback: A transfer which is a chargeback of another transfer * initialCredit: A transfer which is the initial credit for a newly created account * transferFee: A transfer generated by a transfer fee charge * accountFee: A transfer generated by an account fee charge * import: An imported transfer 
  'chargedBack': true, // Boolean | When set to either `true` will only return transfers that were charged-back. When set to false, will only return transfers that were not charged-back. When left blank will not filter by this creterion. 
  'currency': "currency_example", // String | Either id or internal name of the currency
  'fromAccountType': "fromAccountType_example", // String | Either id or internal name of the origin account type
  'toAccountType': "toAccountType_example", // String | Either id or internal name of the destination account type
  'orderBy': "orderBy_example" // String | Contains the possible 'order by' values when searching for transfers  Possible values are: * dateAsc: The result is ordered by date ascendant * dateDesc: The result is ordered by date descendant * amountAsc: The result is ordered by amount descendant * amountDesc: The result is ordered by amount descendant 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchTransfers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 
 **datePeriod** | [**[Date]**](Date.md)| The minimum / maximum transfer date. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.  | [optional] 
 **transferFilters** | [**[String]**](String.md)| Reference to the transfer filters, which filters transfers by type.  | [optional] 
 **transactionNumber** | **String**| The transaction number of the matching transfer  | [optional] 
 **user** | **String**| Reference an user that should have either received / performed the transfer.  | [optional] 
 **groups** | [**[String]**](String.md)| Reference to the user group used to perform / receive the transfer. Only taken into account if authenticated as administrator.  | [optional] 
 **by** | **String**| Reference to the user that was authenticated when the transfer was performed. Is only taken into account if authenticated as administrator.  | [optional] 
 **broker** | **String**| Reference to the broker of users involved in transfers. Is only taken into account if authenticated as administrator.  | [optional] 
 **channels** | [**[String]**](String.md)| Reference to the channel used to perform / receive the transfer. Only taken into account if authenticated as administrator.  | [optional] 
 **excludedIds** | [**[String]**](String.md)| List of transfers ids to be excluded from the result.  | [optional] 
 **accessClients** | [**[String]**](String.md)| References to access clients used to perform / receive the transfer  | [optional] 
 **customFields** | [**[String]**](String.md)| Custom field values used as search criteria. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon). For example, customFields&#x3D;field1:value1,field2:value2. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, profileFields&#x3D;field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, profileFields&#x3D;rank:bronze|silver,birthDate:2000-01-01|2001-12-31 Would match results whose custom field with internal name &#39;rank&#39; is either bronze or silver, and whose &#39;birthDate&#39; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like customValues&#x3D;birthDate:|2001-12-31.  | [optional] 
 **statuses** | [**[String]**](String.md)| Transfer statuses used as search criteria. Each array element should be either the identifier or the status qualified internal name, composed by flow internal name, a dot, and the status internal name. For example, &#x60;loan.open&#x60; would be a valid internal name.  | [optional] 
 **amountRange** | [**[BigDecimal]**](BigDecimal.md)| The minimum / maximum amount. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.  | [optional] 
 **transferKinds** | [**[String]**](String.md)| Indicates the reason the transfer was created Possible values for each array element are: * payment: A transfer generated by a direct payment or accepting a webshop order * scheduledPaymentInstallment: A transfer generated when processing a scheduled payment installment * recurringPayment: A transfer generated when processing a recurring payment * chargeback: A transfer which is a chargeback of another transfer * initialCredit: A transfer which is the initial credit for a newly created account * transferFee: A transfer generated by a transfer fee charge * accountFee: A transfer generated by an account fee charge * import: An imported transfer  | [optional] 
 **chargedBack** | **Boolean**| When set to either &#x60;true&#x60; will only return transfers that were charged-back. When set to false, will only return transfers that were not charged-back. When left blank will not filter by this creterion.  | [optional] 
 **currency** | **String**| Either id or internal name of the currency | [optional] 
 **fromAccountType** | **String**| Either id or internal name of the origin account type | [optional] 
 **toAccountType** | **String**| Either id or internal name of the destination account type | [optional] 
 **orderBy** | **String**| Contains the possible &#39;order by&#39; values when searching for transfers  Possible values are: * dateAsc: The result is ordered by date ascendant * dateDesc: The result is ordered by date descendant * amountAsc: The result is ordered by amount descendant * amountDesc: The result is ordered by amount descendant  | [optional] 

### Return type

[**[Transfer]**](Transfer.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="viewTransfer"></a>
# **viewTransfer**
> TransferView viewTransfer(key, opts)

Returns details about a transfer

Returns details about a transfer.

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');
var defaultClient = Cyclos471Api.ApiClient.default;

// Configure API key authorization: session
var session = defaultClient.authentications['session'];
session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

// Configure API key authorization: accessClient
var accessClient = defaultClient.authentications['accessClient'];
accessClient.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessClient.apiKeyPrefix = 'Token';

var apiInstance = new Cyclos471Api.TransfersApi();

var key = "key_example"; // String | Either the id or transaction number

var opts = { 
  'fields': ["fields_example"] // [String] | Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: `a,b.b1,c.-c1,c.-c2` will return the fields `a`, `b` (containing only the `b1` field) and `c` (containing all its fields except for `c1` or `c2`).  
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.viewTransfer(key, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| Either the id or transaction number | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**TransferView**](TransferView.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

