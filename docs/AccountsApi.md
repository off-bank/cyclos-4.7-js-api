# Cyclos471Api.AccountsApi

All URIs are relative to *https://communities.cyclos.org/wootsapp/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountHistoryDataByOwnerAndType**](AccountsApi.md#getAccountHistoryDataByOwnerAndType) | **GET** /{owner}/accounts/{accountType}/data-for-history | Returns data for searching an account history by owner and type
[**getAccountStatusByOwnerAndType**](AccountsApi.md#getAccountStatusByOwnerAndType) | **GET** /{owner}/accounts/{accountType} | Returns the status of an account by owner and type
[**getUserBalancesData**](AccountsApi.md#getUserBalancesData) | **GET** /accounts/data-for-user-balances | Returns data for searching users together with their balances
[**getUserBalancesSummary**](AccountsApi.md#getUserBalancesSummary) | **GET** /accounts/{accountType}/user-balances/summary | Returns summarized information for the user balances search
[**listAccountsByOwner**](AccountsApi.md#listAccountsByOwner) | **GET** /{owner}/accounts | Lists accounts of the given owner with their statuses
[**searchAccountHistory**](AccountsApi.md#searchAccountHistory) | **GET** /{owner}/accounts/{accountType}/history | Search an account history
[**searchUsersWithBalances**](AccountsApi.md#searchUsersWithBalances) | **GET** /accounts/{accountType}/user-balances | Searches for users together with balance information


<a name="getAccountHistoryDataByOwnerAndType"></a>
# **getAccountHistoryDataByOwnerAndType**
> DataForAccountHistory getAccountHistoryDataByOwnerAndType(owner, accountType, opts)

Returns data for searching an account history by owner and type

Returns configuration data for searching entries in a specific account history, as well as status information for that account information. 

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

var apiInstance = new Cyclos471Api.AccountsApi();

var owner = "owner_example"; // String | Either an user identification, supporting either the value 'self' (sans quotes) for the currently authenticated user or an identification method for an user, or the value 'system' (sans quotes) for system data. 

var accountType = "accountType_example"; // String | The internal name or id of the account type

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
apiInstance.getAccountHistoryDataByOwnerAndType(owner, accountType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Either an user identification, supporting either the value &#39;self&#39; (sans quotes) for the currently authenticated user or an identification method for an user, or the value &#39;system&#39; (sans quotes) for system data.  | 
 **accountType** | **String**| The internal name or id of the account type | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**DataForAccountHistory**](DataForAccountHistory.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAccountStatusByOwnerAndType"></a>
# **getAccountStatusByOwnerAndType**
> AccountWithHistoryStatus getAccountStatusByOwnerAndType(owner, accountType, opts)

Returns the status of an account by owner and type

Returns the account status for a specific account. The account type may be either the identifier or internal name. The status will contain both instant status information, that is, the same fields as &#x60;AccountStatus&#x60;, plus status that depend on the input parameters, such as those defined in &#x60;AccountWithHistoryStatus&#x60;. The actual data inside the result depend on the configuration, in the &#x60;Account status indicators&#x60; option, which is used to limit the amount of data returned. 

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

var apiInstance = new Cyclos471Api.AccountsApi();

var owner = "owner_example"; // String | Either an user identification, supporting either the value 'self' (sans quotes) for the currently authenticated user or an identification method for an user, or the value 'system' (sans quotes) for system data. 

var accountType = "accountType_example"; // String | The internal name or id of the account type

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
  'chargedBack': true // Boolean | When set to either `true` will only return transfers that were charged-back. When set to false, will only return transfers that were not charged-back. When left blank will not filter by this creterion. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccountStatusByOwnerAndType(owner, accountType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Either an user identification, supporting either the value &#39;self&#39; (sans quotes) for the currently authenticated user or an identification method for an user, or the value &#39;system&#39; (sans quotes) for system data.  | 
 **accountType** | **String**| The internal name or id of the account type | 
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

### Return type

[**AccountWithHistoryStatus**](AccountWithHistoryStatus.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserBalancesData"></a>
# **getUserBalancesData**
> DataForUserBalancesSearch getUserBalancesData(opts)

Returns data for searching users together with their balances

Returns configuration data for searching users together with their balances. The account types are returned, and the account type needs to be passed in the other &#x60;user-balances&#x60; operations. 

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

var apiInstance = new Cyclos471Api.AccountsApi();

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
apiInstance.getUserBalancesData(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**DataForUserBalancesSearch**](DataForUserBalancesSearch.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserBalancesSummary"></a>
# **getUserBalancesSummary**
> UserBalancesSummary getUserBalancesSummary(accountType, opts)

Returns summarized information for the user balances search

Returns summaries for each balance level (if ranges are defined in either account type or filter), as well as the total summary. 

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

var apiInstance = new Cyclos471Api.AccountsApi();

var accountType = "accountType_example"; // String | The account type

var opts = { 
  'fields': ["fields_example"], // [String] | Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: `a,b.b1,c.-c1,c.-c2` will return the fields `a`, `b` (containing only the `b1` field) and `c` (containing all its fields except for `c1` or `c2`).  
  'page': 56, // Number | The page number (zero-based) of the search. The default value is zero. 
  'pageSize': 56, // Number | The maximum number of records that will be returned on the search. The default value is 40. 
  'keywords': "keywords_example", // String | Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products. 
  'profileFields': ["profileFields_example"], // [String] | User profile fields, both basic (full name, login name, phone, e-mail,  etc) and custom fields, that are used for search. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon). For example, profileFields=field1:value1,field2:value2. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, profileFields=field1:valueA|valueB. The accepted fields depend on the products the authenticated user has. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, profileFields=rank:bronze|silver,birthDate:2000-01-01|2001-12-31 Would match results whose custom field with internal name 'rank' is either bronze or silver, and whose 'birthDate' is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like customValues=birthDate:|2001-12-31. The basic profile fields have one of the following identifiers: * Full name: name, fullName * Login name: username, loginName, login * E-mail: email * Phone: phone * Account number: accountNumber, account * Image: image (accepts a boolean value, indicating the presence of images) 
  'usersToExclude': ["usersToExclude_example"], // [String] | Indicated the users to be excluded from the result 
  'usersToInclude': ["usersToInclude_example"], // [String] | Indicated the users to be included in the result.  Any other user not present in this list will be excluded from the result. 
  'activationPeriod': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | The minimum / maximum user activation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma. 
  'creationPeriod': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | The minimum / maximum user creation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma. 
  'lastLoginPeriod': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | The minimum / maximum user last login date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma. 
  'groups': ["groups_example"], // [String] | Either id or internal names of groups / group sets
  'brokers': ["brokers_example"], // [String] | Either id or a principal (login name, e-mail, etc) for brokers
  'mainBrokerOnly': true, // Boolean | When set to `true`, will match only users that have the brokers as set in the `brokers` parameter as main broker.  
  'latitude': 1.2, // Number | The reference latitude for distance searches
  'longitude': 1.2, // Number | The reference longitude for distance searches
  'maxDistance': 1.2, // Number | Maximum straight-line distance between the informed location and the resulting address. Is measured either in kilometers or miles, depending on the configuration. Only accepted if both `longitude` and `latitude` parameters are passed with the actual reference position. 
  'addressResult': "addressResult_example", // String | Determines which address is returned on the search, if any. By default no addresses are returned. This option is useful for displaying results as locations on a map. In all cases only located addresses (those that have the geographical coordinates set) are returned. When returning all addresses, data related with multiple addresses is returned multiple times. Possible values are: * none: Addresses are not returned. * all: All addresses are returned. * nearest: The nearest address from the reference location is returned. Only usable if a reference coordinate (`latitude` and `longitude`) * primary: The primary (default) address is returned 
  'includeGroup': true, // Boolean | When set to `true` and the logged user has permission to view user groups, will return the `group` property on users.  
  'includeGroupSet': true, // Boolean | When set to `true` and the logged user has permission to view user group sets, will return the `groupSet` property on users.  
  'balanceRange': [3.4], // [Number] | The minimum and / or maximum balance for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma. 
  'lastIncomingTransferPeriod': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | The minimum / maximum date of the last incoming transfer for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma. 
  'lastOutgoingTransferPeriod': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | The minimum / maximum date of the last outgoing transfer for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma. 
  'negativeSincePeriod': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | The minimum / maximum negative-since date for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma. 
  'mediumBalanceRange': [3.4] // [Number] | An array with 2 elements, describing the lower and upper medium balance bounds. If not specified, the range defined in the account type will be used. If that one is also not defined, there will be no definitions for balance levels. Both bounds need to be set as 2 element in the array, or it won't be considered. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserBalancesSummary(accountType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountType** | **String**| The account type | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 
 **page** | **Number**| The page number (zero-based) of the search. The default value is zero.  | [optional] 
 **pageSize** | **Number**| The maximum number of records that will be returned on the search. The default value is 40.  | [optional] 
 **keywords** | **String**| Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.  | [optional] 
 **profileFields** | [**[String]**](String.md)| User profile fields, both basic (full name, login name, phone, e-mail,  etc) and custom fields, that are used for search. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon). For example, profileFields&#x3D;field1:value1,field2:value2. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, profileFields&#x3D;field1:valueA|valueB. The accepted fields depend on the products the authenticated user has. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, profileFields&#x3D;rank:bronze|silver,birthDate:2000-01-01|2001-12-31 Would match results whose custom field with internal name &#39;rank&#39; is either bronze or silver, and whose &#39;birthDate&#39; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like customValues&#x3D;birthDate:|2001-12-31. The basic profile fields have one of the following identifiers: * Full name: name, fullName * Login name: username, loginName, login * E-mail: email * Phone: phone * Account number: accountNumber, account * Image: image (accepts a boolean value, indicating the presence of images)  | [optional] 
 **usersToExclude** | [**[String]**](String.md)| Indicated the users to be excluded from the result  | [optional] 
 **usersToInclude** | [**[String]**](String.md)| Indicated the users to be included in the result.  Any other user not present in this list will be excluded from the result.  | [optional] 
 **activationPeriod** | [**[Date]**](Date.md)| The minimum / maximum user activation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.  | [optional] 
 **creationPeriod** | [**[Date]**](Date.md)| The minimum / maximum user creation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.  | [optional] 
 **lastLoginPeriod** | [**[Date]**](Date.md)| The minimum / maximum user last login date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.  | [optional] 
 **groups** | [**[String]**](String.md)| Either id or internal names of groups / group sets | [optional] 
 **brokers** | [**[String]**](String.md)| Either id or a principal (login name, e-mail, etc) for brokers | [optional] 
 **mainBrokerOnly** | **Boolean**| When set to &#x60;true&#x60;, will match only users that have the brokers as set in the &#x60;brokers&#x60; parameter as main broker.   | [optional] 
 **latitude** | **Number**| The reference latitude for distance searches | [optional] 
 **longitude** | **Number**| The reference longitude for distance searches | [optional] 
 **maxDistance** | **Number**| Maximum straight-line distance between the informed location and the resulting address. Is measured either in kilometers or miles, depending on the configuration. Only accepted if both &#x60;longitude&#x60; and &#x60;latitude&#x60; parameters are passed with the actual reference position.  | [optional] 
 **addressResult** | **String**| Determines which address is returned on the search, if any. By default no addresses are returned. This option is useful for displaying results as locations on a map. In all cases only located addresses (those that have the geographical coordinates set) are returned. When returning all addresses, data related with multiple addresses is returned multiple times. Possible values are: * none: Addresses are not returned. * all: All addresses are returned. * nearest: The nearest address from the reference location is returned. Only usable if a reference coordinate (&#x60;latitude&#x60; and &#x60;longitude&#x60;) * primary: The primary (default) address is returned  | [optional] 
 **includeGroup** | **Boolean**| When set to &#x60;true&#x60; and the logged user has permission to view user groups, will return the &#x60;group&#x60; property on users.   | [optional] 
 **includeGroupSet** | **Boolean**| When set to &#x60;true&#x60; and the logged user has permission to view user group sets, will return the &#x60;groupSet&#x60; property on users.   | [optional] 
 **balanceRange** | [**[Number]**](Number.md)| The minimum and / or maximum balance for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.  | [optional] 
 **lastIncomingTransferPeriod** | [**[Date]**](Date.md)| The minimum / maximum date of the last incoming transfer for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.  | [optional] 
 **lastOutgoingTransferPeriod** | [**[Date]**](Date.md)| The minimum / maximum date of the last outgoing transfer for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.  | [optional] 
 **negativeSincePeriod** | [**[Date]**](Date.md)| The minimum / maximum negative-since date for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.  | [optional] 
 **mediumBalanceRange** | [**[Number]**](Number.md)| An array with 2 elements, describing the lower and upper medium balance bounds. If not specified, the range defined in the account type will be used. If that one is also not defined, there will be no definitions for balance levels. Both bounds need to be set as 2 element in the array, or it won&#39;t be considered.  | [optional] 

### Return type

[**UserBalancesSummary**](UserBalancesSummary.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listAccountsByOwner"></a>
# **listAccountsByOwner**
> [AccountWithStatus] listAccountsByOwner(owner, opts)

Lists accounts of the given owner with their statuses

Lists all visible accounts of the given user, or system accounts if the owner &#39;system&#39; is used. Each account has status information, like the current balance, avaliable balance and so on. However, the returned data depend on the configuration, in the &#x60;Account status indicators&#x60; option, which is used to limit the amount of data returned. 

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

var apiInstance = new Cyclos471Api.AccountsApi();

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
apiInstance.listAccountsByOwner(owner, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Either an user identification, supporting either the value &#39;self&#39; (sans quotes) for the currently authenticated user or an identification method for an user, or the value &#39;system&#39; (sans quotes) for system data.  | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**[AccountWithStatus]**](AccountWithStatus.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchAccountHistory"></a>
# **searchAccountHistory**
> [AccountHistoryResult] searchAccountHistory(owner, accountType, opts)

Search an account history

Returns a page of account history entries for a specific account, according to the given criteria 

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

var apiInstance = new Cyclos471Api.AccountsApi();

var owner = "owner_example"; // String | Either an user identification, supporting either the value 'self' (sans quotes) for the currently authenticated user or an identification method for an user, or the value 'system' (sans quotes) for system data. 

var accountType = "accountType_example"; // String | The account type

var opts = { 
  'fields': ["fields_example"], // [String] | Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: `a,b.b1,c.-c1,c.-c2` will return the fields `a`, `b` (containing only the `b1` field) and `c` (containing all its fields except for `c1` or `c2`).  
  'page': 56, // Number | The page number (zero-based) of the search. The default value is zero. 
  'pageSize': 56, // Number | The maximum number of records that will be returned on the search. The default value is 40. 
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
  'orderBy': "orderBy_example" // String | Contains the possible 'order by' values when searching for transfers  Possible values are: * dateAsc: The result is ordered by date ascendant * dateDesc: The result is ordered by date descendant * amountAsc: The result is ordered by amount descendant * amountDesc: The result is ordered by amount descendant 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchAccountHistory(owner, accountType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Either an user identification, supporting either the value &#39;self&#39; (sans quotes) for the currently authenticated user or an identification method for an user, or the value &#39;system&#39; (sans quotes) for system data.  | 
 **accountType** | **String**| The account type | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 
 **page** | **Number**| The page number (zero-based) of the search. The default value is zero.  | [optional] 
 **pageSize** | **Number**| The maximum number of records that will be returned on the search. The default value is 40.  | [optional] 
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
 **orderBy** | **String**| Contains the possible &#39;order by&#39; values when searching for transfers  Possible values are: * dateAsc: The result is ordered by date ascendant * dateDesc: The result is ordered by date descendant * amountAsc: The result is ordered by amount descendant * amountDesc: The result is ordered by amount descendant  | [optional] 

### Return type

[**[AccountHistoryResult]**](AccountHistoryResult.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchUsersWithBalances"></a>
# **searchUsersWithBalances**
> [UserWithBalanceResult] searchUsersWithBalances(accountType, opts)

Searches for users together with balance information

Returns the users, together with their balances 

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

var apiInstance = new Cyclos471Api.AccountsApi();

var accountType = "accountType_example"; // String | The account type

var opts = { 
  'fields': ["fields_example"], // [String] | Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: `a,b.b1,c.-c1,c.-c2` will return the fields `a`, `b` (containing only the `b1` field) and `c` (containing all its fields except for `c1` or `c2`).  
  'page': 56, // Number | The page number (zero-based) of the search. The default value is zero. 
  'pageSize': 56, // Number | The maximum number of records that will be returned on the search. The default value is 40. 
  'keywords': "keywords_example", // String | Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products. 
  'profileFields': ["profileFields_example"], // [String] | User profile fields, both basic (full name, login name, phone, e-mail,  etc) and custom fields, that are used for search. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon). For example, profileFields=field1:value1,field2:value2. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, profileFields=field1:valueA|valueB. The accepted fields depend on the products the authenticated user has. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, profileFields=rank:bronze|silver,birthDate:2000-01-01|2001-12-31 Would match results whose custom field with internal name 'rank' is either bronze or silver, and whose 'birthDate' is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like customValues=birthDate:|2001-12-31. The basic profile fields have one of the following identifiers: * Full name: name, fullName * Login name: username, loginName, login * E-mail: email * Phone: phone * Account number: accountNumber, account * Image: image (accepts a boolean value, indicating the presence of images) 
  'usersToExclude': ["usersToExclude_example"], // [String] | Indicated the users to be excluded from the result 
  'usersToInclude': ["usersToInclude_example"], // [String] | Indicated the users to be included in the result.  Any other user not present in this list will be excluded from the result. 
  'activationPeriod': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | The minimum / maximum user activation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma. 
  'creationPeriod': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | The minimum / maximum user creation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma. 
  'lastLoginPeriod': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | The minimum / maximum user last login date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma. 
  'groups': ["groups_example"], // [String] | Either id or internal names of groups / group sets
  'brokers': ["brokers_example"], // [String] | Either id or a principal (login name, e-mail, etc) for brokers
  'mainBrokerOnly': true, // Boolean | When set to `true`, will match only users that have the brokers as set in the `brokers` parameter as main broker.  
  'latitude': 1.2, // Number | The reference latitude for distance searches
  'longitude': 1.2, // Number | The reference longitude for distance searches
  'maxDistance': 1.2, // Number | Maximum straight-line distance between the informed location and the resulting address. Is measured either in kilometers or miles, depending on the configuration. Only accepted if both `longitude` and `latitude` parameters are passed with the actual reference position. 
  'addressResult': "addressResult_example", // String | Determines which address is returned on the search, if any. By default no addresses are returned. This option is useful for displaying results as locations on a map. In all cases only located addresses (those that have the geographical coordinates set) are returned. When returning all addresses, data related with multiple addresses is returned multiple times. Possible values are: * none: Addresses are not returned. * all: All addresses are returned. * nearest: The nearest address from the reference location is returned. Only usable if a reference coordinate (`latitude` and `longitude`) * primary: The primary (default) address is returned 
  'includeGroup': true, // Boolean | When set to `true` and the logged user has permission to view user groups, will return the `group` property on users.  
  'includeGroupSet': true, // Boolean | When set to `true` and the logged user has permission to view user group sets, will return the `groupSet` property on users.  
  'balanceRange': [3.4], // [Number] | The minimum and / or maximum balance for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma. 
  'lastIncomingTransferPeriod': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | The minimum / maximum date of the last incoming transfer for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma. 
  'lastOutgoingTransferPeriod': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | The minimum / maximum date of the last outgoing transfer for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma. 
  'negativeSincePeriod': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | The minimum / maximum negative-since date for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma. 
  'mediumBalanceRange': [3.4], // [Number] | An array with 2 elements, describing the lower and upper medium balance bounds. If not specified, the range defined in the account type will be used. If that one is also not defined, there will be no definitions for balance levels. Both bounds need to be set as 2 element in the array, or it won't be considered. 
  'orderBy': "orderBy_example" // String | Contains the possible 'order by' values when searching for users with balances  Possible values are: * balanceAsc: User are ordered by balance, lower balances first. * balanceDesc: User are ordered by balance, higher balances first. * alphabeticallyAsc: Users are ordered by name (or whatever field is set to format users) in ascending order. * alphabeticallyDesc: Users are ordered by name (or whatever field is set to format users) in descending order. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchUsersWithBalances(accountType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountType** | **String**| The account type | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 
 **page** | **Number**| The page number (zero-based) of the search. The default value is zero.  | [optional] 
 **pageSize** | **Number**| The maximum number of records that will be returned on the search. The default value is 40.  | [optional] 
 **keywords** | **String**| Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.  | [optional] 
 **profileFields** | [**[String]**](String.md)| User profile fields, both basic (full name, login name, phone, e-mail,  etc) and custom fields, that are used for search. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon). For example, profileFields&#x3D;field1:value1,field2:value2. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, profileFields&#x3D;field1:valueA|valueB. The accepted fields depend on the products the authenticated user has. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, profileFields&#x3D;rank:bronze|silver,birthDate:2000-01-01|2001-12-31 Would match results whose custom field with internal name &#39;rank&#39; is either bronze or silver, and whose &#39;birthDate&#39; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like customValues&#x3D;birthDate:|2001-12-31. The basic profile fields have one of the following identifiers: * Full name: name, fullName * Login name: username, loginName, login * E-mail: email * Phone: phone * Account number: accountNumber, account * Image: image (accepts a boolean value, indicating the presence of images)  | [optional] 
 **usersToExclude** | [**[String]**](String.md)| Indicated the users to be excluded from the result  | [optional] 
 **usersToInclude** | [**[String]**](String.md)| Indicated the users to be included in the result.  Any other user not present in this list will be excluded from the result.  | [optional] 
 **activationPeriod** | [**[Date]**](Date.md)| The minimum / maximum user activation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.  | [optional] 
 **creationPeriod** | [**[Date]**](Date.md)| The minimum / maximum user creation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.  | [optional] 
 **lastLoginPeriod** | [**[Date]**](Date.md)| The minimum / maximum user last login date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.  | [optional] 
 **groups** | [**[String]**](String.md)| Either id or internal names of groups / group sets | [optional] 
 **brokers** | [**[String]**](String.md)| Either id or a principal (login name, e-mail, etc) for brokers | [optional] 
 **mainBrokerOnly** | **Boolean**| When set to &#x60;true&#x60;, will match only users that have the brokers as set in the &#x60;brokers&#x60; parameter as main broker.   | [optional] 
 **latitude** | **Number**| The reference latitude for distance searches | [optional] 
 **longitude** | **Number**| The reference longitude for distance searches | [optional] 
 **maxDistance** | **Number**| Maximum straight-line distance between the informed location and the resulting address. Is measured either in kilometers or miles, depending on the configuration. Only accepted if both &#x60;longitude&#x60; and &#x60;latitude&#x60; parameters are passed with the actual reference position.  | [optional] 
 **addressResult** | **String**| Determines which address is returned on the search, if any. By default no addresses are returned. This option is useful for displaying results as locations on a map. In all cases only located addresses (those that have the geographical coordinates set) are returned. When returning all addresses, data related with multiple addresses is returned multiple times. Possible values are: * none: Addresses are not returned. * all: All addresses are returned. * nearest: The nearest address from the reference location is returned. Only usable if a reference coordinate (&#x60;latitude&#x60; and &#x60;longitude&#x60;) * primary: The primary (default) address is returned  | [optional] 
 **includeGroup** | **Boolean**| When set to &#x60;true&#x60; and the logged user has permission to view user groups, will return the &#x60;group&#x60; property on users.   | [optional] 
 **includeGroupSet** | **Boolean**| When set to &#x60;true&#x60; and the logged user has permission to view user group sets, will return the &#x60;groupSet&#x60; property on users.   | [optional] 
 **balanceRange** | [**[Number]**](Number.md)| The minimum and / or maximum balance for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.  | [optional] 
 **lastIncomingTransferPeriod** | [**[Date]**](Date.md)| The minimum / maximum date of the last incoming transfer for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.  | [optional] 
 **lastOutgoingTransferPeriod** | [**[Date]**](Date.md)| The minimum / maximum date of the last outgoing transfer for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.  | [optional] 
 **negativeSincePeriod** | [**[Date]**](Date.md)| The minimum / maximum negative-since date for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.  | [optional] 
 **mediumBalanceRange** | [**[Number]**](Number.md)| An array with 2 elements, describing the lower and upper medium balance bounds. If not specified, the range defined in the account type will be used. If that one is also not defined, there will be no definitions for balance levels. Both bounds need to be set as 2 element in the array, or it won&#39;t be considered.  | [optional] 
 **orderBy** | **String**| Contains the possible &#39;order by&#39; values when searching for users with balances  Possible values are: * balanceAsc: User are ordered by balance, lower balances first. * balanceDesc: User are ordered by balance, higher balances first. * alphabeticallyAsc: Users are ordered by name (or whatever field is set to format users) in ascending order. * alphabeticallyDesc: Users are ordered by name (or whatever field is set to format users) in descending order.  | [optional] 

### Return type

[**[UserWithBalanceResult]**](UserWithBalanceResult.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

