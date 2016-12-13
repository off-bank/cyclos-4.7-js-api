# Cyclos471Api.TransactionsApi

All URIs are relative to *https://communities.cyclos.org/wootsapp/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTransactionsDataForSearch**](TransactionsApi.md#getTransactionsDataForSearch) | **GET** /{owner}/transactions/data-for-search | Returns data for searching transactions of an account owner
[**searchTransactions**](TransactionsApi.md#searchTransactions) | **GET** /{owner}/transactions | Searches transactions of an account owner
[**viewTransaction**](TransactionsApi.md#viewTransaction) | **GET** /transactions/{key} | Returns details about a transaction


<a name="getTransactionsDataForSearch"></a>
# **getTransactionsDataForSearch**
> TransactionDataForSearch getTransactionsDataForSearch(owner, opts)

Returns data for searching transactions of an account owner

Returns data which can be used to filter a transaction search

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

var apiInstance = new Cyclos471Api.TransactionsApi();

var owner = "owner_example"; // String | Either an user identification, supporting either the value 'self' (sans quotes) for the currently authenticated user or an identification method for an user, or the value 'system' (sans quotes) for system data. 

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
apiInstance.getTransactionsDataForSearch(owner, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Either an user identification, supporting either the value &#39;self&#39; (sans quotes) for the currently authenticated user or an identification method for an user, or the value &#39;system&#39; (sans quotes) for system data.  | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**TransactionDataForSearch**](TransactionDataForSearch.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchTransactions"></a>
# **searchTransactions**
> [TransactionResult] searchTransactions(owner, opts)

Searches transactions of an account owner

Returns the transactions of a given account owner that match the specified criteria. Each result will will be relative to this owner. The amount may be positive or negative, depending on whether this owner has performed or received the transaction. 

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

var apiInstance = new Cyclos471Api.TransactionsApi();

var owner = "owner_example"; // String | Either an user identification, supporting either the value 'self' (sans quotes) for the currently authenticated user or an identification method for an user, or the value 'system' (sans quotes) for system data. 

var opts = { 
  'fields': ["fields_example"], // [String] | Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: `a,b.b1,c.-c1,c.-c2` will return the fields `a`, `b` (containing only the `b1` field) and `c` (containing all its fields except for `c1` or `c2`).  
  'page': 56, // Number | The page number (zero-based) of the search. The default value is zero. 
  'pageSize': 56, // Number | The maximum number of records that will be returned on the search. The default value is 40. 
  'accountTypes': ["accountTypes_example"], // [String] | The account types
  'datePeriod': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | The minimum / maximum transaction date. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma. 
  'transactionNumber': "transactionNumber_example", // String | The transaction number of the matching transfer 
  'user': "user_example", // String | Reference an user that should have either received / performed the transfer. 
  'groups': ["groups_example"], // [String] | Reference to the user group used to perform / receive the transfer. Only taken into account if authenticated as administrator. 
  'by': "by_example", // String | Reference to the user that was authenticated when the transfer was performed. Is only taken into account if authenticated as administrator. 
  'broker': "broker_example", // String | Reference to the broker of users involved in transfers. Is only taken into account if authenticated as administrator. 
  'channels': ["channels_example"], // [String] | Reference to the channel used to perform / receive the transfer. Only taken into account if authenticated as administrator. 
  'accessClients': ["accessClients_example"], // [String] | References to access clients used to perform / receive the transfer 
  'kinds': ["kinds_example"] // [String] | The kind of a transaction  Possible values for each array element are: * payment: A direct payment * recurringPayment: A payment which is processed again periodically * scheduledPayment: A scheduled payment which is either a payment scheduled for a future date or has multiple installments * paymentRequest: A request for another user to accept a payment  * externalPayment: A payment to an external user * chargeback: Chargeback of a given transfer * import: An imported transaction * order: Transaction generated by confirming an order 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchTransactions(owner, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Either an user identification, supporting either the value &#39;self&#39; (sans quotes) for the currently authenticated user or an identification method for an user, or the value &#39;system&#39; (sans quotes) for system data.  | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 
 **page** | **Number**| The page number (zero-based) of the search. The default value is zero.  | [optional] 
 **pageSize** | **Number**| The maximum number of records that will be returned on the search. The default value is 40.  | [optional] 
 **accountTypes** | [**[String]**](String.md)| The account types | [optional] 
 **datePeriod** | [**[Date]**](Date.md)| The minimum / maximum transaction date. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.  | [optional] 
 **transactionNumber** | **String**| The transaction number of the matching transfer  | [optional] 
 **user** | **String**| Reference an user that should have either received / performed the transfer.  | [optional] 
 **groups** | [**[String]**](String.md)| Reference to the user group used to perform / receive the transfer. Only taken into account if authenticated as administrator.  | [optional] 
 **by** | **String**| Reference to the user that was authenticated when the transfer was performed. Is only taken into account if authenticated as administrator.  | [optional] 
 **broker** | **String**| Reference to the broker of users involved in transfers. Is only taken into account if authenticated as administrator.  | [optional] 
 **channels** | [**[String]**](String.md)| Reference to the channel used to perform / receive the transfer. Only taken into account if authenticated as administrator.  | [optional] 
 **accessClients** | [**[String]**](String.md)| References to access clients used to perform / receive the transfer  | [optional] 
 **kinds** | [**[String]**](String.md)| The kind of a transaction  Possible values for each array element are: * payment: A direct payment * recurringPayment: A payment which is processed again periodically * scheduledPayment: A scheduled payment which is either a payment scheduled for a future date or has multiple installments * paymentRequest: A request for another user to accept a payment  * externalPayment: A payment to an external user * chargeback: Chargeback of a given transfer * import: An imported transaction * order: Transaction generated by confirming an order  | [optional] 

### Return type

[**[TransactionResult]**](TransactionResult.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="viewTransaction"></a>
# **viewTransaction**
> TransactionView viewTransaction(key, opts)

Returns details about a transaction

Returns details about a transaction.

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

var apiInstance = new Cyclos471Api.TransactionsApi();

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
apiInstance.viewTransaction(key, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| Either the id or transaction number | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**TransactionView**](TransactionView.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

