# Cyclos471Api.NFCApi

All URIs are relative to *https://communities.cyclos.org/wootsapp/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelNfc**](NFCApi.md#cancelNfc) | **POST** /nfc/cancel | Cancels a NFC tag
[**getNfcDataForInitialize**](NFCApi.md#getNfcDataForInitialize) | **GET** /nfc/data-for-initialize | Returns data for NFC tag initialization. Optionally the user can personalize the tag too.
[**getNfcDataForPersonalize**](NFCApi.md#getNfcDataForPersonalize) | **GET** /nfc/data-for-personalize | Returns data for perfornalizing an initialized NFC tag for an user
[**getNfcToken**](NFCApi.md#getNfcToken) | **GET** /nfc/{tokenType}/{value} | Retrieve the NFC token detailed data
[**getOtpForPersonalizeNfc**](NFCApi.md#getOtpForPersonalizeNfc) | **POST** /nfc/personalize/otp | Generates a new One-Time-Password (OTP) for a personalizing a NFC tag 
[**initializeNfc**](NFCApi.md#initializeNfc) | **POST** /nfc/initialize | Initializes a NFC tag
[**nfcExternalAuth**](NFCApi.md#nfcExternalAuth) | **POST** /nfc/external-auth | NFC external authentication
[**personalizeNfc**](NFCApi.md#personalizeNfc) | **POST** /nfc/personalize | Personalizes a NFC tag


<a name="cancelNfc"></a>
# **cancelNfc**
> cancelNfc(params)

Cancels a NFC tag

Cancels a NFC token. Must be authenticated as a manager (administrator / broker) of the token owner, and have the correct permission.  

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

var apiInstance = new Cyclos471Api.NFCApi();

var params = new Cyclos471Api.NfcTokenParameter(); // NfcTokenParameter | The parameters for canceling. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.cancelNfc(params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | [**NfcTokenParameter**](NfcTokenParameter.md)| The parameters for canceling.  | 

### Return type

null (empty response body)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNfcDataForInitialize"></a>
# **getNfcDataForInitialize**
> NfcDataForInitialize getNfcDataForInitialize(opts)

Returns data for NFC tag initialization. Optionally the user can personalize the tag too.

Returns data with the NFC token types the authenticated user can use to initialize NFC tags. 

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

var apiInstance = new Cyclos471Api.NFCApi();

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
apiInstance.getNfcDataForInitialize(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**NfcDataForInitialize**](NfcDataForInitialize.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNfcDataForPersonalize"></a>
# **getNfcDataForPersonalize**
> NfcDataForPersonalize getNfcDataForPersonalize(tokenType, user, opts)

Returns data for perfornalizing an initialized NFC tag for an user

Returns data for personalizing a NFC tag for a given user. 

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

var apiInstance = new Cyclos471Api.NFCApi();

var tokenType = "tokenType_example"; // String | The token type reference (id or internal name) of the token principal type, which is stored on the NFC card being personalized.  

var user = "user_example"; // String | The user reference (id or an identification method) of the user to whom the NFC tag will be personalized. When authenticated as a manager of that user (administrator or broker) no confirmation password will be required for the personalization. However, if the authenticated user is not a manager, the user will be required a confirmation password. 

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
apiInstance.getNfcDataForPersonalize(tokenType, user, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenType** | **String**| The token type reference (id or internal name) of the token principal type, which is stored on the NFC card being personalized.   | 
 **user** | **String**| The user reference (id or an identification method) of the user to whom the NFC tag will be personalized. When authenticated as a manager of that user (administrator or broker) no confirmation password will be required for the personalization. However, if the authenticated user is not a manager, the user will be required a confirmation password.  | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**NfcDataForPersonalize**](NfcDataForPersonalize.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNfcToken"></a>
# **getNfcToken**
> TokenDetailed getNfcToken(tokenType, value)

Retrieve the NFC token detailed data

Returns the token&#39;s data and the user owner of the token (i.e the assigned user, if any)

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

var apiInstance = new Cyclos471Api.NFCApi();

var tokenType = "tokenType_example"; // String | The internal name or id of the token type

var value = "value_example"; // String | The token value


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNfcToken(tokenType, value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenType** | **String**| The internal name or id of the token type | 
 **value** | **String**| The token value | 

### Return type

[**TokenDetailed**](TokenDetailed.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOtpForPersonalizeNfc"></a>
# **getOtpForPersonalizeNfc**
> getOtpForPersonalizeNfc(medium, params)

Generates a new One-Time-Password (OTP) for a personalizing a NFC tag 

Sends a new OTP for the customer which will own the NFC tag. The OTP belongs to the NFC tag owner, not the authenticated user. 

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

var apiInstance = new Cyclos471Api.NFCApi();

var medium = "medium_example"; // String | The medium the user wants to receive the otp Possible values are: * email: The user will receive an email with the information * sms: The user will receive a sms with the information (only if there is at least one phone enabled for sms) 

var params = new Cyclos471Api.NfcPersonalizeOtpParameter(); // NfcPersonalizeOtpParameter | The parameters identifying the token and the user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getOtpForPersonalizeNfc(medium, params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **medium** | **String**| The medium the user wants to receive the otp Possible values are: * email: The user will receive an email with the information * sms: The user will receive a sms with the information (only if there is at least one phone enabled for sms)  | 
 **params** | [**NfcPersonalizeOtpParameter**](NfcPersonalizeOtpParameter.md)| The parameters identifying the token and the user | 

### Return type

null (empty response body)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="initializeNfc"></a>
# **initializeNfc**
> NfcInitializeResult initializeNfc(params)

Initializes a NFC tag

Initializes a NFC tag, creating a new &#x60;token&#x60; in Cyclos. Returns the keys (PICC Master Key, Application Master Key and the Operational Key) to be stored on the NFC tag. 

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

var apiInstance = new Cyclos471Api.NFCApi();

var params = new Cyclos471Api.NfcInitializeParameter(); // NfcInitializeParameter | The parameters for initializing the NFC tag. If the `user` value is left blank, the NFC tag will be only initialized, but not personalized (assigned to any user). If an user is given, the permission to personalize is required (besides the permission to initialize), and is a shortcut to initializing and later personalizing the tag. The initialization is a sensitive operation, as the result contains the plain keys that should be stored on the NFC tag. Hence, can only be performed by managers (with granted permission). Later on, other users (for example, businesses) will be able to personalize the NFC tag for customers.  


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.initializeNfc(params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | [**NfcInitializeParameter**](NfcInitializeParameter.md)| The parameters for initializing the NFC tag. If the &#x60;user&#x60; value is left blank, the NFC tag will be only initialized, but not personalized (assigned to any user). If an user is given, the permission to personalize is required (besides the permission to initialize), and is a shortcut to initializing and later personalizing the tag. The initialization is a sensitive operation, as the result contains the plain keys that should be stored on the NFC tag. Hence, can only be performed by managers (with granted permission). Later on, other users (for example, businesses) will be able to personalize the NFC tag for customers.   | 

### Return type

[**NfcInitializeResult**](NfcInitializeResult.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nfcExternalAuth"></a>
# **nfcExternalAuth**
> NfcExternalAuthenticateResult nfcExternalAuth(params)

NFC external authentication

The NFC tag will normally perform a mutual authentication, by first generating a challenge that must be encrypted by the external system with the device key. With this the external system is authenticated. Cyclos also returns a challenge that should be encrypted by the NFC tag. This challenge can later be passed in specific operations (for example, when performing a payment) for Cyclos to make sure the NFC tag is present on the operation. 

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

var apiInstance = new Cyclos471Api.NFCApi();

var params = new Cyclos471Api.NfcExternalAuthenticateParameter(); // NfcExternalAuthenticateParameter | The parameters for the external authentication. If the `token` value is informed, it will be performed an external authentication with the token itself, using the Application Master Key (AMK). If the `token` is not informed, the authentication will be done using the PICC Master Key (PMK), which is useful, for example, when initializing the NFC tag.  


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.nfcExternalAuth(params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | [**NfcExternalAuthenticateParameter**](NfcExternalAuthenticateParameter.md)| The parameters for the external authentication. If the &#x60;token&#x60; value is informed, it will be performed an external authentication with the token itself, using the Application Master Key (AMK). If the &#x60;token&#x60; is not informed, the authentication will be done using the PICC Master Key (PMK), which is useful, for example, when initializing the NFC tag.   | 

### Return type

[**NfcExternalAuthenticateResult**](NfcExternalAuthenticateResult.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="personalizeNfc"></a>
# **personalizeNfc**
> personalizeNfc(params, opts)

Personalizes a NFC tag

Personalization requires a NFC tag that was previously initialized, but is still unassigned. This operation doesn&#39;t store any key in the NFC tag itself, hence the plain keys are not returned. What is needed is an external authentication with the NFC tag, in order to ensure the card is physically present. The flow for personalizing a tag is: - &#x60;GET /nfc/data-for-personalize?user&#x3D;{user}&#x60;: Obtain the data for   personalizing NFC tags for this user. The most important information   is which the confirmation password will be required, if any; - &#x60;POST /nfc/external-auth&#x60;: With a challenge previously encrypted by the   NFC tag, invoke this operation. If the challenge matches the NFC token   in Cyclos, it will be encrypted and returned. Also a new challenge will   be returned, which should be then encrypted by the NFC tag for later   being sent back; - &#x60;POST /nfc/personalize&#x60;: With the encrypted challenge and the   confirmation password (if any), this operation will update the NFC   token in Cyclos, so it is now assigned to the specified user. From   this point on, the NFC tag is operational. 

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

var apiInstance = new Cyclos471Api.NFCApi();

var params = new Cyclos471Api.NfcPersonalizeParameter(); // NfcPersonalizeParameter | The parameters for the initialization. 

var opts = { 
  'confirmationPassword': "confirmationPassword_example" // String | The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.personalizeNfc(params, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | [**NfcPersonalizeParameter**](NfcPersonalizeParameter.md)| The parameters for the initialization.  | 
 **confirmationPassword** | **String**| The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.  | [optional] 

### Return type

null (empty response body)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

