# Cyclos471Api.MobileApi

All URIs are relative to *https://communities.cyclos.org/wootsapp/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dataForMobileGuest**](MobileApi.md#dataForMobileGuest) | **GET** /mobile/data-for-guest | Returns data the mobile application uses while in guest mode
[**dataForMobileUser**](MobileApi.md#dataForMobileUser) | **GET** /mobile/data-for-user | Returns data the mobile application uses in either user or POS mode 
[**mobilePageContent**](MobileApi.md#mobilePageContent) | **GET** /mobile/page/{id} | Returns the content of a mobile page 


<a name="dataForMobileGuest"></a>
# **dataForMobileGuest**
> DataForMobileGuest dataForMobileGuest(opts)

Returns data the mobile application uses while in guest mode

The data returned can be controlled with a cache key. Each data type has a parameter, such as &#x60;headerIf&#x60;, which returns the data only if it has changed since the last request. 

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.MobileApi();

var opts = { 
  'fields': ["fields_example"], // [String] | Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: `a,b.b1,c.-c1,c.-c2` will return the fields `a`, `b` (containing only the `b1` field) and `c` (containing all its fields except for `c1` or `c2`).  
  'cyclosVersion': "cyclosVersion_example", // String | The last known Cyclos version. Sometimes, data to be cached depends on the version of the Cyclos application, and this helps controlling such cases 
  'headerIf': "headerIf_example", // String | Controls the header cache. It is a string in the form `id|version`. When informed, the header content will be returned only if it has changed since the last run. 
  'footerIf': "footerIf_example", // String | Controls the footer cache. It is a string in the form `id|version`. When informed, the footer content will be returned only if it has changed since the last run. 
  'themeIf': "themeIf_example", // String | Controls the theme cache. It is a string in the form `id|version`. When informed, the theme CSS content will be returned only if it has changed since the last run. 
  'translationsIf': "translationsIf_example" // String | Controls the translations cache. It is a string in the form `id|version`. When informed, the mobile translations will be returned only if they have changed since the last run. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataForMobileGuest(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 
 **cyclosVersion** | **String**| The last known Cyclos version. Sometimes, data to be cached depends on the version of the Cyclos application, and this helps controlling such cases  | [optional] 
 **headerIf** | **String**| Controls the header cache. It is a string in the form &#x60;id|version&#x60;. When informed, the header content will be returned only if it has changed since the last run.  | [optional] 
 **footerIf** | **String**| Controls the footer cache. It is a string in the form &#x60;id|version&#x60;. When informed, the footer content will be returned only if it has changed since the last run.  | [optional] 
 **themeIf** | **String**| Controls the theme cache. It is a string in the form &#x60;id|version&#x60;. When informed, the theme CSS content will be returned only if it has changed since the last run.  | [optional] 
 **translationsIf** | **String**| Controls the translations cache. It is a string in the form &#x60;id|version&#x60;. When informed, the mobile translations will be returned only if they have changed since the last run.  | [optional] 

### Return type

[**DataForMobileGuest**](DataForMobileGuest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dataForMobileUser"></a>
# **dataForMobileUser**
> DataForMobileUser dataForMobileUser(opts)

Returns data the mobile application uses in either user or POS mode 

The data returned can be controlled with a cache key. Each data type has a parameter, such as &#x60;helpIf&#x60;, which returns the data only if it has changed since the last request. 

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

var apiInstance = new Cyclos471Api.MobileApi();

var opts = { 
  'fields': ["fields_example"], // [String] | Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: `a,b.b1,c.-c1,c.-c2` will return the fields `a`, `b` (containing only the `b1` field) and `c` (containing all its fields except for `c1` or `c2`).  
  'cyclosVersion': "cyclosVersion_example", // String | The last known Cyclos version. Sometimes, data to be cached depends on the version of the Cyclos application, and this helps controlling such cases 
  'themeIf': "themeIf_example", // String | Controls the theme cache. It is a string in the form `id|version`. When informed, the theme CSS content will be returned only if it has changed since the last run. 
  'translationsIf': "translationsIf_example", // String | Controls the translations cache. It is a string in the form `id|version`. When informed, the mobile translations will be returned only if they have changed since the last run. 
  'mobileHelpIf': "mobileHelpIf_example", // String | Controls the mobile help cache. It is a string in the form `id|version`. When informed, the help content will be returned only if it has changed since the last run and the access is via user / password. 
  'posHelpIf': "posHelpIf_example" // String | Controls the pos help cache. It is a string in the form `id|version`. When informed, the help content will be returned only if it has changed since the last run and the access is via access client. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataForMobileUser(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 
 **cyclosVersion** | **String**| The last known Cyclos version. Sometimes, data to be cached depends on the version of the Cyclos application, and this helps controlling such cases  | [optional] 
 **themeIf** | **String**| Controls the theme cache. It is a string in the form &#x60;id|version&#x60;. When informed, the theme CSS content will be returned only if it has changed since the last run.  | [optional] 
 **translationsIf** | **String**| Controls the translations cache. It is a string in the form &#x60;id|version&#x60;. When informed, the mobile translations will be returned only if they have changed since the last run.  | [optional] 
 **mobileHelpIf** | **String**| Controls the mobile help cache. It is a string in the form &#x60;id|version&#x60;. When informed, the help content will be returned only if it has changed since the last run and the access is via user / password.  | [optional] 
 **posHelpIf** | **String**| Controls the pos help cache. It is a string in the form &#x60;id|version&#x60;. When informed, the help content will be returned only if it has changed since the last run and the access is via access client.  | [optional] 

### Return type

[**DataForMobileUser**](DataForMobileUser.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mobilePageContent"></a>
# **mobilePageContent**
> &#39;String&#39; mobilePageContent(id)

Returns the content of a mobile page 

Returns the content of a mobile page, either by id or internal name 

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

var apiInstance = new Cyclos471Api.MobileApi();

var id = "id_example"; // String | The mobile page id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mobilePageContent(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The mobile page id | 

### Return type

**&#39;String&#39;**

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html

