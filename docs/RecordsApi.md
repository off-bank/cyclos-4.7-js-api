# Cyclos471Api.RecordsApi

All URIs are relative to *https://communities.cyclos.org/wootsapp/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRecord**](RecordsApi.md#createRecord) | **POST** /{owner}/records/{type} | Creates a new record for the given owner and type
[**deleteRecord**](RecordsApi.md#deleteRecord) | **DELETE** /records/{id} | Removes a record
[**getRecordDataForEdit**](RecordsApi.md#getRecordDataForEdit) | **GET** /records/{id}/data-for-edit | Returns data to edit an existing record
[**getRecordDataForGeneralSearch**](RecordsApi.md#getRecordDataForGeneralSearch) | **GET** /general-records/{type}/data-for-search | Returns data for searching records of a type over any owner
[**getRecordDataForNew**](RecordsApi.md#getRecordDataForNew) | **GET** /{owner}/records/{type}/data-for-new | Returns data to create a new record
[**getRecordDataForOwnerSearch**](RecordsApi.md#getRecordDataForOwnerSearch) | **GET** /{owner}/records/{type}/data-for-search | Returns data for searching records of a specific type and owner
[**getRecordDataForSharedSearch**](RecordsApi.md#getRecordDataForSharedSearch) | **GET** /shared-records/data-for-search | Returns data for searching records with shared fields
[**getRecordTypeByOwner**](RecordsApi.md#getRecordTypeByOwner) | **GET** /{owner}/record-types/{type} | Returns a single record type over an user or system
[**listRecordTypesByOwner**](RecordsApi.md#listRecordTypesByOwner) | **GET** /{owner}/record-types | Lists the record types over an user or system
[**listRecordTypesForGeneralSearch**](RecordsApi.md#listRecordTypesForGeneralSearch) | **GET** /general-records/record-types | Lists the record types for general search
[**searchGeneralRecords**](RecordsApi.md#searchGeneralRecords) | **GET** /general-records/{type} | Searches for records of a specific type over any owner
[**searchOwnerRecords**](RecordsApi.md#searchOwnerRecords) | **GET** /{owner}/records/{type} | Searches for records of a specific type and owner
[**searchSharedRecords**](RecordsApi.md#searchSharedRecords) | **GET** /shared-records | Searches for records with shared fields
[**updateRecord**](RecordsApi.md#updateRecord) | **PUT** /records/{id} | Updates an existing record
[**viewRecord**](RecordsApi.md#viewRecord) | **GET** /records/{id} | Returns details of a specific record


<a name="createRecord"></a>
# **createRecord**
> &#39;String&#39; createRecord(owner, type, record)

Creates a new record for the given owner and type

Creates a new record for the given owner and type. If the owner is &#x60;system&#x60; will be a system record. Otherwise will be an user record. 

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

var apiInstance = new Cyclos471Api.RecordsApi();

var owner = "owner_example"; // String | Either an user identification, supporting either the value 'self' (sans quotes) for the currently authenticated user or an identification method for an user, or the value 'system' (sans quotes) for system data. 

var type = "type_example"; // String | Either the identifier or internal name of the record type

var record = new Cyclos471Api.RecordNew(); // RecordNew | The record to be created


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRecord(owner, type, record, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Either an user identification, supporting either the value &#39;self&#39; (sans quotes) for the currently authenticated user or an identification method for an user, or the value &#39;system&#39; (sans quotes) for system data.  | 
 **type** | **String**| Either the identifier or internal name of the record type | 
 **record** | [**RecordNew**](RecordNew.md)| The record to be created | 

### Return type

**&#39;String&#39;**

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

<a name="deleteRecord"></a>
# **deleteRecord**
> deleteRecord(id)

Removes a record

Removes a record

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

var apiInstance = new Cyclos471Api.RecordsApi();

var id = "id_example"; // String | The object identification


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRecord(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The object identification | 

### Return type

null (empty response body)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRecordDataForEdit"></a>
# **getRecordDataForEdit**
> RecordDataForEdit getRecordDataForEdit(id, opts)

Returns data to edit an existing record

Returns configuration data for editing a record, plus the current &#x60;RecordEdit&#x60; object that can be altered and sent back 

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

var apiInstance = new Cyclos471Api.RecordsApi();

var id = "id_example"; // String | The object identification

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
apiInstance.getRecordDataForEdit(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The object identification | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**RecordDataForEdit**](RecordDataForEdit.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRecordDataForGeneralSearch"></a>
# **getRecordDataForGeneralSearch**
> RecordDataForSearch getRecordDataForGeneralSearch(type, opts)

Returns data for searching records of a type over any owner

Returns data for searching records of a specific type over any owner. Is not tied to a particular owner (user or system), hence, is considered a general search.  

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

var apiInstance = new Cyclos471Api.RecordsApi();

var type = "type_example"; // String | Either the identifier or internal name of the record type

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
apiInstance.getRecordDataForGeneralSearch(type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Either the identifier or internal name of the record type | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**RecordDataForSearch**](RecordDataForSearch.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRecordDataForNew"></a>
# **getRecordDataForNew**
> RecordDataForNew getRecordDataForNew(owner, type, opts)

Returns data to create a new record

Returns configuration data for creating a record for the given owner and type. If the owner is &#x60;system&#x60; will be a system record. Otherwise will be an user record.  

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

var apiInstance = new Cyclos471Api.RecordsApi();

var owner = "owner_example"; // String | Either an user identification, supporting either the value 'self' (sans quotes) for the currently authenticated user or an identification method for an user, or the value 'system' (sans quotes) for system data. 

var type = "type_example"; // String | The record type to be created

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
apiInstance.getRecordDataForNew(owner, type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Either an user identification, supporting either the value &#39;self&#39; (sans quotes) for the currently authenticated user or an identification method for an user, or the value &#39;system&#39; (sans quotes) for system data.  | 
 **type** | **String**| The record type to be created | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**RecordDataForNew**](RecordDataForNew.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRecordDataForOwnerSearch"></a>
# **getRecordDataForOwnerSearch**
> RecordDataForSearch getRecordDataForOwnerSearch(owner, type, opts)

Returns data for searching records of a specific type and owner

Returns data for searching records of a specific type, either for system or user records, depending on the &#x60;owner&#x60; parameter.  

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

var apiInstance = new Cyclos471Api.RecordsApi();

var owner = "owner_example"; // String | Either an user identification, supporting either the value 'self' (sans quotes) for the currently authenticated user or an identification method for an user, or the value 'system' (sans quotes) for system data. 

var type = "type_example"; // String | Either the identifier or internal name of the record type

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
apiInstance.getRecordDataForOwnerSearch(owner, type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Either an user identification, supporting either the value &#39;self&#39; (sans quotes) for the currently authenticated user or an identification method for an user, or the value &#39;system&#39; (sans quotes) for system data.  | 
 **type** | **String**| Either the identifier or internal name of the record type | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**RecordDataForSearch**](RecordDataForSearch.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRecordDataForSharedSearch"></a>
# **getRecordDataForSharedSearch**
> RecordDataForSharedSearch getRecordDataForSharedSearch(opts)

Returns data for searching records with shared fields

Returns data for searching records from multiple types, using shared fields. Only user records can be shared this way.  

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

var apiInstance = new Cyclos471Api.RecordsApi();

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
apiInstance.getRecordDataForSharedSearch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**RecordDataForSharedSearch**](RecordDataForSharedSearch.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRecordTypeByOwner"></a>
# **getRecordTypeByOwner**
> OwnerRecordPermissions getRecordTypeByOwner(owner, type, opts)

Returns a single record type over an user or system

Returns the a specific record type the authenticated user can view over the given user or system if the &#x60;system&#x60; owner is used.  

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

var apiInstance = new Cyclos471Api.RecordsApi();

var owner = "owner_example"; // String | Either an user identification, supporting either the value 'self' (sans quotes) for the currently authenticated user or an identification method for an user, or the value 'system' (sans quotes) for system data. 

var type = "type_example"; // String | Either the identifier or internal name of the record type

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
apiInstance.getRecordTypeByOwner(owner, type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Either an user identification, supporting either the value &#39;self&#39; (sans quotes) for the currently authenticated user or an identification method for an user, or the value &#39;system&#39; (sans quotes) for system data.  | 
 **type** | **String**| Either the identifier or internal name of the record type | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**OwnerRecordPermissions**](OwnerRecordPermissions.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listRecordTypesByOwner"></a>
# **listRecordTypesByOwner**
> [OwnerRecordPermissions] listRecordTypesByOwner(owner, opts)

Lists the record types over an user or system

Returns the record types the authenticated user can view over the given user or system if the &#x60;system&#x60; owner is used.  

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

var apiInstance = new Cyclos471Api.RecordsApi();

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
apiInstance.listRecordTypesByOwner(owner, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Either an user identification, supporting either the value &#39;self&#39; (sans quotes) for the currently authenticated user or an identification method for an user, or the value &#39;system&#39; (sans quotes) for system data.  | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**[OwnerRecordPermissions]**](OwnerRecordPermissions.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listRecordTypesForGeneralSearch"></a>
# **listRecordTypesForGeneralSearch**
> [RecordTypeWithMenu] listRecordTypesForGeneralSearch(opts)

Lists the record types for general search

Returns the record types the authenticated user can use to search records in general, that is, without being of a particular user, but any managed user.  

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

var apiInstance = new Cyclos471Api.RecordsApi();

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
apiInstance.listRecordTypesForGeneralSearch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**[RecordTypeWithMenu]**](RecordTypeWithMenu.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchGeneralRecords"></a>
# **searchGeneralRecords**
> [RecordWithOwnerResult] searchGeneralRecords(type, opts)

Searches for records of a specific type over any owner

Returns records matching the search criteria, for a specific type. The custom fields returned on each record depend on the field configuration, which needs to be enabled to return on list. The profile fields available as search filters for records are assigned in the products (or admin group permissions). 

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

var apiInstance = new Cyclos471Api.RecordsApi();

var type = "type_example"; // String | Either the identifier or internal name of the record type

var opts = { 
  'fields': ["fields_example"], // [String] | Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: `a,b.b1,c.-c1,c.-c2` will return the fields `a`, `b` (containing only the `b1` field) and `c` (containing all its fields except for `c1` or `c2`).  
  'page': 56, // Number | The page number (zero-based) of the search. The default value is zero. 
  'pageSize': 56, // Number | The maximum number of records that will be returned on the search. The default value is 40. 
  'keywords': "keywords_example", // String | Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products. 
  'profileFields': ["profileFields_example"], // [String] | User profile fields, both basic (full name, login name, phone, e-mail,  etc) and custom fields, that are used for search. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon). For example, profileFields=field1:value1,field2:value2. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, profileFields=field1:valueA|valueB. The accepted fields depend on the products the authenticated user has. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, profileFields=rank:bronze|silver,birthDate:2000-01-01|2001-12-31 Would match results whose custom field with internal name 'rank' is either bronze or silver, and whose 'birthDate' is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like customValues=birthDate:|2001-12-31. The basic profile fields have one of the following identifiers: * Full name: name, fullName * Login name: username, loginName, login * E-mail: email * Phone: phone * Account number: accountNumber, account * Image: image (accepts a boolean value, indicating the presence of images) 
  'customFields': ["customFields_example"], // [String] | Custom field values used as search criteria. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon). For example, customFields=field1:value1,field2:value2. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, profileFields=field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, profileFields=rank:bronze|silver,birthDate:2000-01-01|2001-12-31 Would match results whose custom field with internal name 'rank' is either bronze or silver, and whose 'birthDate' is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like customValues=birthDate:|2001-12-31. 
  'brokers': ["brokers_example"], // [String] | Either the ids or identification methods of record owners' brokers 
  'groups': ["groups_example"], // [String] | Either the ids or internal names of record owners' groups 
  'creationPeriod': [new Date("2013-10-20T19:20:30+01:00")] // [Date] | The minimum / maximum record creation date 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchGeneralRecords(type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Either the identifier or internal name of the record type | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 
 **page** | **Number**| The page number (zero-based) of the search. The default value is zero.  | [optional] 
 **pageSize** | **Number**| The maximum number of records that will be returned on the search. The default value is 40.  | [optional] 
 **keywords** | **String**| Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.  | [optional] 
 **profileFields** | [**[String]**](String.md)| User profile fields, both basic (full name, login name, phone, e-mail,  etc) and custom fields, that are used for search. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon). For example, profileFields&#x3D;field1:value1,field2:value2. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, profileFields&#x3D;field1:valueA|valueB. The accepted fields depend on the products the authenticated user has. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, profileFields&#x3D;rank:bronze|silver,birthDate:2000-01-01|2001-12-31 Would match results whose custom field with internal name &#39;rank&#39; is either bronze or silver, and whose &#39;birthDate&#39; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like customValues&#x3D;birthDate:|2001-12-31. The basic profile fields have one of the following identifiers: * Full name: name, fullName * Login name: username, loginName, login * E-mail: email * Phone: phone * Account number: accountNumber, account * Image: image (accepts a boolean value, indicating the presence of images)  | [optional] 
 **customFields** | [**[String]**](String.md)| Custom field values used as search criteria. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon). For example, customFields&#x3D;field1:value1,field2:value2. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, profileFields&#x3D;field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, profileFields&#x3D;rank:bronze|silver,birthDate:2000-01-01|2001-12-31 Would match results whose custom field with internal name &#39;rank&#39; is either bronze or silver, and whose &#39;birthDate&#39; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like customValues&#x3D;birthDate:|2001-12-31.  | [optional] 
 **brokers** | [**[String]**](String.md)| Either the ids or identification methods of record owners&#39; brokers  | [optional] 
 **groups** | [**[String]**](String.md)| Either the ids or internal names of record owners&#39; groups  | [optional] 
 **creationPeriod** | [**[Date]**](Date.md)| The minimum / maximum record creation date  | [optional] 

### Return type

[**[RecordWithOwnerResult]**](RecordWithOwnerResult.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchOwnerRecords"></a>
# **searchOwnerRecords**
> [RecordResult] searchOwnerRecords(owner, type, opts)

Searches for records of a specific type and owner

Returns records matching the search criteria, for a specific type,  either for system or user records, depending on the &#x60;owner&#x60; parameter. The custom fields returned on each record depend on the field configuration, which needs to be enabled to return on list. The profile fields available as search filters for records are assigned in the products (or admin group permissions). 

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

var apiInstance = new Cyclos471Api.RecordsApi();

var owner = "owner_example"; // String | Either an user identification, supporting either the value 'self' (sans quotes) for the currently authenticated user or an identification method for an user, or the value 'system' (sans quotes) for system data. 

var type = "type_example"; // String | Either the identifier or internal name of the record type

var opts = { 
  'fields': ["fields_example"], // [String] | Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: `a,b.b1,c.-c1,c.-c2` will return the fields `a`, `b` (containing only the `b1` field) and `c` (containing all its fields except for `c1` or `c2`).  
  'page': 56, // Number | The page number (zero-based) of the search. The default value is zero. 
  'pageSize': 56, // Number | The maximum number of records that will be returned on the search. The default value is 40. 
  'keywords': "keywords_example", // String | Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products. 
  'profileFields': ["profileFields_example"], // [String] | User profile fields, both basic (full name, login name, phone, e-mail,  etc) and custom fields, that are used for search. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon). For example, profileFields=field1:value1,field2:value2. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, profileFields=field1:valueA|valueB. The accepted fields depend on the products the authenticated user has. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, profileFields=rank:bronze|silver,birthDate:2000-01-01|2001-12-31 Would match results whose custom field with internal name 'rank' is either bronze or silver, and whose 'birthDate' is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like customValues=birthDate:|2001-12-31. The basic profile fields have one of the following identifiers: * Full name: name, fullName * Login name: username, loginName, login * E-mail: email * Phone: phone * Account number: accountNumber, account * Image: image (accepts a boolean value, indicating the presence of images) 
  'customFields': ["customFields_example"], // [String] | Custom field values used as search criteria. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon). For example, customFields=field1:value1,field2:value2. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, profileFields=field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, profileFields=rank:bronze|silver,birthDate:2000-01-01|2001-12-31 Would match results whose custom field with internal name 'rank' is either bronze or silver, and whose 'birthDate' is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like customValues=birthDate:|2001-12-31. 
  'creationPeriod': [new Date("2013-10-20T19:20:30+01:00")] // [Date] | The minimum / maximum record creation date 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchOwnerRecords(owner, type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Either an user identification, supporting either the value &#39;self&#39; (sans quotes) for the currently authenticated user or an identification method for an user, or the value &#39;system&#39; (sans quotes) for system data.  | 
 **type** | **String**| Either the identifier or internal name of the record type | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 
 **page** | **Number**| The page number (zero-based) of the search. The default value is zero.  | [optional] 
 **pageSize** | **Number**| The maximum number of records that will be returned on the search. The default value is 40.  | [optional] 
 **keywords** | **String**| Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.  | [optional] 
 **profileFields** | [**[String]**](String.md)| User profile fields, both basic (full name, login name, phone, e-mail,  etc) and custom fields, that are used for search. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon). For example, profileFields&#x3D;field1:value1,field2:value2. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, profileFields&#x3D;field1:valueA|valueB. The accepted fields depend on the products the authenticated user has. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, profileFields&#x3D;rank:bronze|silver,birthDate:2000-01-01|2001-12-31 Would match results whose custom field with internal name &#39;rank&#39; is either bronze or silver, and whose &#39;birthDate&#39; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like customValues&#x3D;birthDate:|2001-12-31. The basic profile fields have one of the following identifiers: * Full name: name, fullName * Login name: username, loginName, login * E-mail: email * Phone: phone * Account number: accountNumber, account * Image: image (accepts a boolean value, indicating the presence of images)  | [optional] 
 **customFields** | [**[String]**](String.md)| Custom field values used as search criteria. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon). For example, customFields&#x3D;field1:value1,field2:value2. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, profileFields&#x3D;field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, profileFields&#x3D;rank:bronze|silver,birthDate:2000-01-01|2001-12-31 Would match results whose custom field with internal name &#39;rank&#39; is either bronze or silver, and whose &#39;birthDate&#39; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like customValues&#x3D;birthDate:|2001-12-31.  | [optional] 
 **creationPeriod** | [**[Date]**](Date.md)| The minimum / maximum record creation date  | [optional] 

### Return type

[**[RecordResult]**](RecordResult.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchSharedRecords"></a>
# **searchSharedRecords**
> [RecordWithOwnerResult] searchSharedRecords(opts)

Searches for records with shared fields

Returns records matching the search criteria, using shared fields. This allows searching over multiple record types that use shared fields. The custom fields returned on each record depend on the field configuration, which needs to be enabled to return on list. The profile fields available as search filters for records are assigned in the products (or admin group permissions). 

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

var apiInstance = new Cyclos471Api.RecordsApi();

var opts = { 
  'fields': ["fields_example"], // [String] | Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: `a,b.b1,c.-c1,c.-c2` will return the fields `a`, `b` (containing only the `b1` field) and `c` (containing all its fields except for `c1` or `c2`).  
  'page': 56, // Number | The page number (zero-based) of the search. The default value is zero. 
  'pageSize': 56, // Number | The maximum number of records that will be returned on the search. The default value is 40. 
  'keywords': "keywords_example", // String | Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products. 
  'profileFields': ["profileFields_example"], // [String] | User profile fields, both basic (full name, login name, phone, e-mail,  etc) and custom fields, that are used for search. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon). For example, profileFields=field1:value1,field2:value2. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, profileFields=field1:valueA|valueB. The accepted fields depend on the products the authenticated user has. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, profileFields=rank:bronze|silver,birthDate:2000-01-01|2001-12-31 Would match results whose custom field with internal name 'rank' is either bronze or silver, and whose 'birthDate' is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like customValues=birthDate:|2001-12-31. The basic profile fields have one of the following identifiers: * Full name: name, fullName * Login name: username, loginName, login * E-mail: email * Phone: phone * Account number: accountNumber, account * Image: image (accepts a boolean value, indicating the presence of images) 
  'customFields': ["customFields_example"], // [String] | Custom field values used as search criteria. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon). For example, customFields=field1:value1,field2:value2. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, profileFields=field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, profileFields=rank:bronze|silver,birthDate:2000-01-01|2001-12-31 Would match results whose custom field with internal name 'rank' is either bronze or silver, and whose 'birthDate' is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like customValues=birthDate:|2001-12-31. 
  'types': ["types_example"], // [String] | Either the ids or identification methods of record types 
  'brokers': ["brokers_example"], // [String] | Either the ids or identification methods of record owners' brokers 
  'groups': ["groups_example"], // [String] | Either the ids or internal names of record owners' groups 
  'creationPeriod': [new Date("2013-10-20T19:20:30+01:00")] // [Date] | The minimum / maximum record creation date 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchSharedRecords(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 
 **page** | **Number**| The page number (zero-based) of the search. The default value is zero.  | [optional] 
 **pageSize** | **Number**| The maximum number of records that will be returned on the search. The default value is 40.  | [optional] 
 **keywords** | **String**| Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.  | [optional] 
 **profileFields** | [**[String]**](String.md)| User profile fields, both basic (full name, login name, phone, e-mail,  etc) and custom fields, that are used for search. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon). For example, profileFields&#x3D;field1:value1,field2:value2. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, profileFields&#x3D;field1:valueA|valueB. The accepted fields depend on the products the authenticated user has. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, profileFields&#x3D;rank:bronze|silver,birthDate:2000-01-01|2001-12-31 Would match results whose custom field with internal name &#39;rank&#39; is either bronze or silver, and whose &#39;birthDate&#39; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like customValues&#x3D;birthDate:|2001-12-31. The basic profile fields have one of the following identifiers: * Full name: name, fullName * Login name: username, loginName, login * E-mail: email * Phone: phone * Account number: accountNumber, account * Image: image (accepts a boolean value, indicating the presence of images)  | [optional] 
 **customFields** | [**[String]**](String.md)| Custom field values used as search criteria. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon). For example, customFields&#x3D;field1:value1,field2:value2. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, profileFields&#x3D;field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, profileFields&#x3D;rank:bronze|silver,birthDate:2000-01-01|2001-12-31 Would match results whose custom field with internal name &#39;rank&#39; is either bronze or silver, and whose &#39;birthDate&#39; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like customValues&#x3D;birthDate:|2001-12-31.  | [optional] 
 **types** | [**[String]**](String.md)| Either the ids or identification methods of record types  | [optional] 
 **brokers** | [**[String]**](String.md)| Either the ids or identification methods of record owners&#39; brokers  | [optional] 
 **groups** | [**[String]**](String.md)| Either the ids or internal names of record owners&#39; groups  | [optional] 
 **creationPeriod** | [**[Date]**](Date.md)| The minimum / maximum record creation date  | [optional] 

### Return type

[**[RecordWithOwnerResult]**](RecordWithOwnerResult.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateRecord"></a>
# **updateRecord**
> updateRecord(id, record)

Updates an existing record

Updates an existing record

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

var apiInstance = new Cyclos471Api.RecordsApi();

var id = "id_example"; // String | The object identification

var record = new Cyclos471Api.RecordEdit(); // RecordEdit | The record to be edited


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateRecord(id, record, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The object identification | 
 **record** | [**RecordEdit**](RecordEdit.md)| The record to be edited | 

### Return type

null (empty response body)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="viewRecord"></a>
# **viewRecord**
> RecordView viewRecord(id, opts)

Returns details of a specific record

Returns information about a record, located by id

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

var apiInstance = new Cyclos471Api.RecordsApi();

var id = "id_example"; // String | The object identification

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
apiInstance.viewRecord(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The object identification | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**RecordView**](RecordView.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

