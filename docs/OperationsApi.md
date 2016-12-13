# Cyclos471Api.OperationsApi

All URIs are relative to *https://communities.cyclos.org/wootsapp/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOperationDataForRun**](OperationsApi.md#getOperationDataForRun) | **GET** /{owner}/operations/{operation}/data-for-run | Returns configuration data for running a custom operation
[**listOperationsByOwner**](OperationsApi.md#listOperationsByOwner) | **GET** /{owner}/operations | Lists the custom operations over the system or user
[**runOperation**](OperationsApi.md#runOperation) | **POST** /{owner}/operations/{operation}/run | Runs a custom operation either for system or user
[**runOperationWithUpload**](OperationsApi.md#runOperationWithUpload) | **POST** /{owner}/operations/{operation}/run-upload | Runs a custom operation either for system or user while uploading a file 


<a name="getOperationDataForRun"></a>
# **getOperationDataForRun**
> OperationDataForRun getOperationDataForRun(owner, operation, opts)

Returns configuration data for running a custom operation

Returns data to run a specific custom operation over a specific over the given user or system if the &#x60;system&#x60; owner is used.  

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

var apiInstance = new Cyclos471Api.OperationsApi();

var owner = "owner_example"; // String | Either an user identification, supporting either the value 'self' (sans quotes) for the currently authenticated user or an identification method for an user, or the value 'system' (sans quotes) for system data. 

var operation = "operation_example"; // String | Either the id or internal name of the custom operation

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
apiInstance.getOperationDataForRun(owner, operation, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Either an user identification, supporting either the value &#39;self&#39; (sans quotes) for the currently authenticated user or an identification method for an user, or the value &#39;system&#39; (sans quotes) for system data.  | 
 **operation** | **String**| Either the id or internal name of the custom operation | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**OperationDataForRun**](OperationDataForRun.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listOperationsByOwner"></a>
# **listOperationsByOwner**
> [Operation] listOperationsByOwner(owner, opts)

Lists the custom operations over the system or user

Returns the custom operations the authenticated user can run over the given user or system if the &#x60;system&#x60; owner is used.  

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

var apiInstance = new Cyclos471Api.OperationsApi();

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
apiInstance.listOperationsByOwner(owner, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Either an user identification, supporting either the value &#39;self&#39; (sans quotes) for the currently authenticated user or an identification method for an user, or the value &#39;system&#39; (sans quotes) for system data.  | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**[Operation]**](Operation.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="runOperation"></a>
# **runOperation**
> RunOperationResult runOperation(owner, operation, opts)

Runs a custom operation either for system or user

Runs a specific custom operation over a specific over the given user or system if the &#x60;system&#x60; owner is used. If the operation resulted in a file download (either because the &#x60;resultType&#x60; is &#x60;fileDownload&#x60; or is a &#x60;resultPage&#x60; running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an &#x60;application/json&#x60; with the result object.  

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

var apiInstance = new Cyclos471Api.OperationsApi();

var owner = "owner_example"; // String | Either an user identification, supporting either the value 'self' (sans quotes) for the currently authenticated user or an identification method for an user, or the value 'system' (sans quotes) for system data. 

var operation = "operation_example"; // String | Either the id or internal name of the custom operation

var opts = { 
  'fields': ["fields_example"], // [String] | Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: `a,b.b1,c.-c1,c.-c2` will return the fields `a`, `b` (containing only the `b1` field) and `c` (containing all its fields except for `c1` or `c2`).  
  'params': new Cyclos471Api.RunOperation() // RunOperation | The custom operation parameters
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.runOperation(owner, operation, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Either an user identification, supporting either the value &#39;self&#39; (sans quotes) for the currently authenticated user or an identification method for an user, or the value &#39;system&#39; (sans quotes) for system data.  | 
 **operation** | **String**| Either the id or internal name of the custom operation | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 
 **params** | [**RunOperation**](RunOperation.md)| The custom operation parameters | [optional] 

### Return type

[**RunOperationResult**](RunOperationResult.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain, text/html, text/css, text/yaml, text/javascript, text/csv, image/jpeg, image/gif, image/png, application/pdf, application/zip, image/svg+xml, application/octet-stream

<a name="runOperationWithUpload"></a>
# **runOperationWithUpload**
> RunOperationResult runOperationWithUpload(owner, operation, file, opts)

Runs a custom operation either for system or user while uploading a file 

Runs a specific custom operation over a specific over the given user or system if the &#x60;system&#x60; owner is used.  This path allows uploading a file, by using a &#x60;multipart-form-data&#x60; post. If the operation resulted in a file download (either because the &#x60;resultType&#x60; is &#x60;fileDownload&#x60; or is a &#x60;resultPage&#x60; running for either PDF or CSV) the resulting contente type will be of the file itself. Otherwise will result in an &#x60;application/json&#x60; with the result object.  

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

var apiInstance = new Cyclos471Api.OperationsApi();

var owner = "owner_example"; // String | Either an user identification, supporting either the value 'self' (sans quotes) for the currently authenticated user or an identification method for an user, or the value 'system' (sans quotes) for system data. 

var operation = "operation_example"; // String | Either the id or internal name of the custom operation

var file = "/path/to/file.txt"; // File | The file being uploaded

var opts = { 
  'fields': ["fields_example"], // [String] | Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: `a,b.b1,c.-c1,c.-c2` will return the fields `a`, `b` (containing only the `b1` field) and `c` (containing all its fields except for `c1` or `c2`).  
  'params': "params_example" // String | The custom operation parameters, encoded as `RunOperation`.  
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.runOperationWithUpload(owner, operation, file, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Either an user identification, supporting either the value &#39;self&#39; (sans quotes) for the currently authenticated user or an identification method for an user, or the value &#39;system&#39; (sans quotes) for system data.  | 
 **operation** | **String**| Either the id or internal name of the custom operation | 
 **file** | **File**| The file being uploaded | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 
 **params** | **String**| The custom operation parameters, encoded as &#x60;RunOperation&#x60;.   | [optional] 

### Return type

[**RunOperationResult**](RunOperationResult.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/plain, text/html, text/css, text/yaml, text/javascript, text/csv, image/jpeg, image/gif, image/png, application/pdf, application/zip, image/svg+xml, application/octet-stream

