# Cyclos471Api.VouchersApi

All URIs are relative to *https://communities.cyclos.org/wootsapp/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buyVouchers**](VouchersApi.md#buyVouchers) | **POST** /{user}/vouchers/buy | Buys one or more vouchers for the given user
[**getUserVouchersDataForSearch**](VouchersApi.md#getUserVouchersDataForSearch) | **GET** /{user}/vouchers/data-for-search | Returns data for searching vouchers an user has bought or redeemed
[**getVoucherDataForBuy**](VouchersApi.md#getVoucherDataForBuy) | **GET** /{user}/vouchers/data-for-buy | Returns data for buying a voucher of a specified type
[**getVoucherDataForRedeem**](VouchersApi.md#getVoucherDataForRedeem) | **GET** /{user}/vouchers/{token}/data-for-redeem | Returns data for redeeming a voucher by token
[**getVoucherInitialDataForRedeem**](VouchersApi.md#getVoucherInitialDataForRedeem) | **GET** /{user}/vouchers/data-for-redeem | Returns initial data for redeeming vouchers
[**getVoucherQrCode**](VouchersApi.md#getVoucherQrCode) | **GET** /vouchers/{key}/qr-code | Returns the QR-code image for the given voucher
[**redeemVoucher**](VouchersApi.md#redeemVoucher) | **POST** /{user}/vouchers/{token}/redeem | Redeems a voucher for the given user
[**searchUserVouchers**](VouchersApi.md#searchUserVouchers) | **GET** /{user}/vouchers | Searches for vouchers an user has bought or redeemed
[**viewVoucher**](VouchersApi.md#viewVoucher) | **GET** /vouchers/{key} | Returns data for a particular voucher


<a name="buyVouchers"></a>
# **buyVouchers**
> [&#39;String&#39;] buyVouchers(user, params, opts)

Buys one or more vouchers for the given user

Buys vouchers. If the payment type has custom fields, the values should be passed as well  

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

var apiInstance = new Cyclos471Api.VouchersApi();

var user = "user_example"; // String | The user identification. The value 'self' (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords. 

var params = new Cyclos471Api.BuyVoucher(); // BuyVoucher | The buy voucher parameters

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
apiInstance.buyVouchers(user, params, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String**| The user identification. The value &#39;self&#39; (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords.  | 
 **params** | [**BuyVoucher**](BuyVoucher.md)| The buy voucher parameters | 
 **confirmationPassword** | **String**| The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.  | [optional] 

### Return type

**[&#39;String&#39;]**

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserVouchersDataForSearch"></a>
# **getUserVouchersDataForSearch**
> UserVouchersDataForSearch getUserVouchersDataForSearch(user, opts)

Returns data for searching vouchers an user has bought or redeemed

Returns configuration data used to search vouchers the user has either bought (default) or redeemed (if &#x60;type&#x60; is &#x60;redeemed&#x60;) 

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

var apiInstance = new Cyclos471Api.VouchersApi();

var user = "user_example"; // String | The user identification. The value 'self' (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords. 

var opts = { 
  'fields': ["fields_example"], // [String] | Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: `a,b.b1,c.-c1,c.-c2` will return the fields `a`, `b` (containing only the `b1` field) and `c` (containing all its fields except for `c1` or `c2`).  
  'relation': "relation_example" // String | Indicates the relation used to filter the vouchers. Possible values are: * bought: A voucher the user has bought * redeemed: A voucher the user has redeemed 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserVouchersDataForSearch(user, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String**| The user identification. The value &#39;self&#39; (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords.  | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 
 **relation** | **String**| Indicates the relation used to filter the vouchers. Possible values are: * bought: A voucher the user has bought * redeemed: A voucher the user has redeemed  | [optional] 

### Return type

[**UserVouchersDataForSearch**](UserVouchersDataForSearch.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVoucherDataForBuy"></a>
# **getVoucherDataForBuy**
> VoucherDataForBuy getVoucherDataForBuy(user, type, opts)

Returns data for buying a voucher of a specified type

Data for buying a voucher

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

var apiInstance = new Cyclos471Api.VouchersApi();

var user = "user_example"; // String | The user identification. The value 'self' (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords. 

var type = "type_example"; // String | Either the `id` or `internalName` of the voucher type 

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
apiInstance.getVoucherDataForBuy(user, type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String**| The user identification. The value &#39;self&#39; (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords.  | 
 **type** | **String**| Either the &#x60;id&#x60; or &#x60;internalName&#x60; of the voucher type  | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**VoucherDataForBuy**](VoucherDataForBuy.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVoucherDataForRedeem"></a>
# **getVoucherDataForRedeem**
> VoucherDataForRedeem getVoucherDataForRedeem(user, token, opts)

Returns data for redeeming a voucher by token

Data for redeeming a specific voucher

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

var apiInstance = new Cyclos471Api.VouchersApi();

var user = "user_example"; // String | The user identification. The value 'self' (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords. 

var token = "token_example"; // String | The voucher token to be redeemed

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
apiInstance.getVoucherDataForRedeem(user, token, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String**| The user identification. The value &#39;self&#39; (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords.  | 
 **token** | **String**| The voucher token to be redeemed | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**VoucherDataForRedeem**](VoucherDataForRedeem.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVoucherInitialDataForRedeem"></a>
# **getVoucherInitialDataForRedeem**
> VoucherInitialDataForRedeem getVoucherInitialDataForRedeem(user, opts)

Returns initial data for redeeming vouchers

Returns initial data for redeeming vouchers

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

var apiInstance = new Cyclos471Api.VouchersApi();

var user = "user_example"; // String | The user identification. The value 'self' (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords. 

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
apiInstance.getVoucherInitialDataForRedeem(user, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String**| The user identification. The value &#39;self&#39; (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords.  | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**VoucherInitialDataForRedeem**](VoucherInitialDataForRedeem.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVoucherQrCode"></a>
# **getVoucherQrCode**
> getVoucherQrCode(key, opts)

Returns the QR-code image for the given voucher

The api documentation page, using swagger-ui (or any direct usage of an image tag), generates a second  request to show the image contents on the preview. This is a new GET request, without passing-in the authentication parameters. As this path requires authentication, the image is shown broken, but the first request works as expected, returning the image content. Optionally, to solve the problem described above and allow to authenticate the user when using sessions, a &#x60;sessionToken&#x60; or &#x60;accessClientToken&#x60; plus a &#x60;channel&#x60; query parameters could be specified. 

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

var apiInstance = new Cyclos471Api.VouchersApi();

var key = "key_example"; // String | The voucher `id` or `token`. When the token is fully numeric, it must be preceded by a single quote (`'`). 

var opts = { 
  'size': "size_example" // String | The possible sizes of images. The actual pixel size depends on the configuration in Cyclos Possible values are: * small: Small thumbnail * medium: Medium thumbnail * large: Full image size 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getVoucherQrCode(key, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The voucher &#x60;id&#x60; or &#x60;token&#x60;. When the token is fully numeric, it must be preceded by a single quote (&#x60;&#39;&#x60;).  | 
 **size** | **String**| The possible sizes of images. The actual pixel size depends on the configuration in Cyclos Possible values are: * small: Small thumbnail * medium: Medium thumbnail * large: Full image size  | [optional] 

### Return type

null (empty response body)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, image/jpeg, image/gif, image/png

<a name="redeemVoucher"></a>
# **redeemVoucher**
> VoucherRedeemResult redeemVoucher(user, token, opts)

Redeems a voucher for the given user

Redeems a voucher  

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

var apiInstance = new Cyclos471Api.VouchersApi();

var user = "user_example"; // String | The user identification. The value 'self' (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords. 

var token = "token_example"; // String | The voucher token to be redeemed

var opts = { 
  'redeem': new Cyclos471Api.RedeemVoucher() // RedeemVoucher | Additional redeem data
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.redeemVoucher(user, token, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String**| The user identification. The value &#39;self&#39; (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords.  | 
 **token** | **String**| The voucher token to be redeemed | 
 **redeem** | [**RedeemVoucher**](RedeemVoucher.md)| Additional redeem data | [optional] 

### Return type

[**VoucherRedeemResult**](VoucherRedeemResult.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchUserVouchers"></a>
# **searchUserVouchers**
> [VoucherResult] searchUserVouchers(user, opts)

Searches for vouchers an user has bought or redeemed

Returns the list of matching vouchers the given user has either bought (default) or redeemed (if &#x60;type&#x60; is &#x60;redeemed&#x60;) 

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

var apiInstance = new Cyclos471Api.VouchersApi();

var user = "user_example"; // String | The user identification. The value 'self' (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords. 

var opts = { 
  'fields': ["fields_example"], // [String] | Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: `a,b.b1,c.-c1,c.-c2` will return the fields `a`, `b` (containing only the `b1` field) and `c` (containing all its fields except for `c1` or `c2`).  
  'page': 56, // Number | The page number (zero-based) of the search. The default value is zero. 
  'pageSize': 56, // Number | The maximum number of records that will be returned on the search. The default value is 40. 
  'relation': "relation_example", // String | Indicates the relation used to filter the vouchers. Possible values are: * bought: A voucher the user has bought * redeemed: A voucher the user has redeemed 
  'amountRange': [new Cyclos471Api.BigDecimal()], // [BigDecimal] | The minimum / maximum voucher amount 
  'creationPeriod': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | The minimum / maximum voucher creation date. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma. 
  'expirationPeriod': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | The minimum / maximum voucher expiration date Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma. 
  'redeemPeriod': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | The minimum / maximum voucher redeem date Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma. 
  'statuses': ["statuses_example"], // [String] | The voucher statuses Possible values for each array element are: * open: The voucher has been generated / bought, and is open * expired: The voucher has expired without being redeemed * canceled: The voucher was canceled, and cannot be further used * redeemed: The voucher has been redeemed, and the corresponding payment was done 
  'token': "token_example", // String | The voucher token (with or without mask)
  'types': ["types_example"] // [String] | The ids or internal names of voucher types
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchUserVouchers(user, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String**| The user identification. The value &#39;self&#39; (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords.  | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 
 **page** | **Number**| The page number (zero-based) of the search. The default value is zero.  | [optional] 
 **pageSize** | **Number**| The maximum number of records that will be returned on the search. The default value is 40.  | [optional] 
 **relation** | **String**| Indicates the relation used to filter the vouchers. Possible values are: * bought: A voucher the user has bought * redeemed: A voucher the user has redeemed  | [optional] 
 **amountRange** | [**[BigDecimal]**](BigDecimal.md)| The minimum / maximum voucher amount  | [optional] 
 **creationPeriod** | [**[Date]**](Date.md)| The minimum / maximum voucher creation date. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.  | [optional] 
 **expirationPeriod** | [**[Date]**](Date.md)| The minimum / maximum voucher expiration date Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.  | [optional] 
 **redeemPeriod** | [**[Date]**](Date.md)| The minimum / maximum voucher redeem date Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.  | [optional] 
 **statuses** | [**[String]**](String.md)| The voucher statuses Possible values for each array element are: * open: The voucher has been generated / bought, and is open * expired: The voucher has expired without being redeemed * canceled: The voucher was canceled, and cannot be further used * redeemed: The voucher has been redeemed, and the corresponding payment was done  | [optional] 
 **token** | **String**| The voucher token (with or without mask) | [optional] 
 **types** | [**[String]**](String.md)| The ids or internal names of voucher types | [optional] 

### Return type

[**[VoucherResult]**](VoucherResult.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="viewVoucher"></a>
# **viewVoucher**
> VoucherView viewVoucher(key, opts)

Returns data for a particular voucher

Returns details about a particular voucher, as well as the transactions used to buy and redeem, and the permissions for authenticated over it. 

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

var apiInstance = new Cyclos471Api.VouchersApi();

var key = "key_example"; // String | The voucher `id` or `token`. When the token is fully numeric, it must be preceded by a single quote (`'`). 

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
apiInstance.viewVoucher(key, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The voucher &#x60;id&#x60; or &#x60;token&#x60;. When the token is fully numeric, it must be preceded by a single quote (&#x60;&#39;&#x60;).  | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**VoucherView**](VoucherView.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

