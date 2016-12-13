# Cyclos471Api.ImagesApi

All URIs are relative to *https://communities.cyclos.org/wootsapp/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteImage**](ImagesApi.md#deleteImage) | **DELETE** /images/{id} | Removes an image by id
[**getAdImagesListData**](ImagesApi.md#getAdImagesListData) | **GET** /marketplace/{id}/images/list-data | Returns the images of an advertisement, plus additional permissions and data  
[**getImageContent**](ImagesApi.md#getImageContent) | **GET** /images/{kind}/{file} | Returns an image content
[**getUserImagesListData**](ImagesApi.md#getUserImagesListData) | **GET** /{user}/images/list-data | Returns either &#x60;profile&#x60; or &#x60;custom&#x60; images for a given user, plus additional permissions and data  
[**listAdImages**](ImagesApi.md#listAdImages) | **GET** /marketplace/{id}/images | Lists the images of an advertisement 
[**listTempImages**](ImagesApi.md#listTempImages) | **GET** /images/temp | Lists temporary images related to the currently authenticated user or guest 
[**listUserImages**](ImagesApi.md#listUserImages) | **GET** /{user}/images | Lists either &#x60;profile&#x60; or &#x60;custom&#x60; images for a given user  
[**reorderAdImages**](ImagesApi.md#reorderAdImages) | **PUT** /marketplace/{id}/images/order | Changes the order of the images of an advertisement  
[**reorderProfileImages**](ImagesApi.md#reorderProfileImages) | **PUT** /{user}/images/order | Changes the order of an user&#39;s profile images  
[**uploadAdImage**](ImagesApi.md#uploadAdImage) | **POST** /marketplace/{id}/images | Adds a new image for the given advertisement. 
[**uploadTempImage**](ImagesApi.md#uploadTempImage) | **POST** /images/temp | Adds a new temporary image for the currently authenticated user or guest. 
[**uploadUserImage**](ImagesApi.md#uploadUserImage) | **POST** /{user}/images | Adds a new image for the given user. The image kind is either  &#x60;profile&#x60; or &#x60;custom&#x60;. 
[**viewImage**](ImagesApi.md#viewImage) | **GET** /images/{id} | Returns an image details by id


<a name="deleteImage"></a>
# **deleteImage**
> deleteImage(id)

Removes an image by id

Removes the image with the given internal id. Any image kind can be removed using this operation, but the authenticated user needs the appropriate permission to do so.  

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.ImagesApi();

var id = "id_example"; // String | The object identification


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteImage(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The object identification | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAdImagesListData"></a>
# **getAdImagesListData**
> ImagesListData getAdImagesListData(id, opts)

Returns the images of an advertisement, plus additional permissions and data  

Returns the images of an advertisement. Additional data, such as the maximum images and whether the images can be managed by the authenticated user are also returned. 

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

var apiInstance = new Cyclos471Api.ImagesApi();

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
apiInstance.getAdImagesListData(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The object identification | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**ImagesListData**](ImagesListData.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getImageContent"></a>
# **getImageContent**
> getImageContent(kind, file, opts)

Returns an image content

Returns the content of an image, given the image kind and key. When neither &#x60;width&#x60; nor &#x60;height&#x60; are specified, returns the original content. The original ratio is always maintained. When only of one of  the dimensions is specified, it is used as maximum, and the other is calculated. When both are informed, the maximum size with the original ratio that fits both dimensions is used.  

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.ImagesApi();

var kind = "kind_example"; // String | Determines the kind of an image Possible values are: * profile: User profile images are those associated with the user profile. The first profile image is used to depict the user on search results. * userCustom: User custom images are additional images that can be used on rich text contents. * systemCustom: System custom images are additional images an administrator that can be used on rich text contents. * ad: Advertisement images are associated with an advertisement, be it simple or for web shop. * temp: A temporary image which can upload for later associating with an entity being registered (for example, user or advertisement). 

var file = "file_example"; // String | The file name. This is not the original uploaded file name, but a generated one. 

var opts = { 
  'width': 56, // Number | The requested image width
  'height': 56 // Number | The requested file height
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getImageContent(kind, file, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **kind** | **String**| Determines the kind of an image Possible values are: * profile: User profile images are those associated with the user profile. The first profile image is used to depict the user on search results. * userCustom: User custom images are additional images that can be used on rich text contents. * systemCustom: System custom images are additional images an administrator that can be used on rich text contents. * ad: Advertisement images are associated with an advertisement, be it simple or for web shop. * temp: A temporary image which can upload for later associating with an entity being registered (for example, user or advertisement).  | 
 **file** | **String**| The file name. This is not the original uploaded file name, but a generated one.  | 
 **width** | **Number**| The requested image width | [optional] 
 **height** | **Number**| The requested file height | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, image/jpeg, image/gif, image/png

<a name="getUserImagesListData"></a>
# **getUserImagesListData**
> ImagesListData getUserImagesListData(user, opts)

Returns either &#x60;profile&#x60; or &#x60;custom&#x60; images for a given user, plus additional permissions and data  

Returns either &#x60;profile&#x60; or &#x60;custom&#x60; images for the given user. For &#x60;profile&#x60;, the user  must be visible by the authenticated user. For &#x60;custom&#x60;, the authenticated user must either be the owner or a manager (administrator or broker). Additional data, such as the maximum images and whether the images can be managed by the authenticated user are also returned. 

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

var apiInstance = new Cyclos471Api.ImagesApi();

var user = "user_example"; // String | The user identification. The value 'self' (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords. 

var opts = { 
  'fields': ["fields_example"], // [String] | Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: `a,b.b1,c.-c1,c.-c2` will return the fields `a`, `b` (containing only the `b1` field) and `c` (containing all its fields except for `c1` or `c2`).  
  'kind': "kind_example" // String | The kind of images to be returned.   The default value is `profile` Possible values are: * profile: User profile images are those associated with the user profile. The first profile image is used to depict the user on search results. * custom: User custom images are additional images that can be used on rich text contents. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserImagesListData(user, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String**| The user identification. The value &#39;self&#39; (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords.  | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 
 **kind** | **String**| The kind of images to be returned.   The default value is &#x60;profile&#x60; Possible values are: * profile: User profile images are those associated with the user profile. The first profile image is used to depict the user on search results. * custom: User custom images are additional images that can be used on rich text contents.  | [optional] 

### Return type

[**ImagesListData**](ImagesListData.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listAdImages"></a>
# **listAdImages**
> [Image] listAdImages(id, opts)

Lists the images of an advertisement 

Returns the images of an advertisement. 

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

var apiInstance = new Cyclos471Api.ImagesApi();

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
apiInstance.listAdImages(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The object identification | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**[Image]**](Image.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listTempImages"></a>
# **listTempImages**
> [Image] listTempImages(opts)

Lists temporary images related to the currently authenticated user or guest 

Returns all uploaded temporary images by the current user, or guest, matching by IP address. Cyclos may be configured to allow sessions from any IP address. In this case it might be possible that images uploaded as guest by the same client are not returned. 

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.ImagesApi();

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
apiInstance.listTempImages(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**[Image]**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listUserImages"></a>
# **listUserImages**
> [Image] listUserImages(user, opts)

Lists either &#x60;profile&#x60; or &#x60;custom&#x60; images for a given user  

Returns either &#x60;profile&#x60; or &#x60;custom&#x60; images for the given user. For &#x60;profile&#x60;, the user  must be visible by the authenticated user. For &#x60;custom&#x60;, the authenticated user must either be the owner or a manager (administrator or broker). 

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

var apiInstance = new Cyclos471Api.ImagesApi();

var user = "user_example"; // String | The user identification. The value 'self' (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords. 

var opts = { 
  'fields': ["fields_example"], // [String] | Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: `a,b.b1,c.-c1,c.-c2` will return the fields `a`, `b` (containing only the `b1` field) and `c` (containing all its fields except for `c1` or `c2`).  
  'kind': "kind_example" // String | The kind of images to be returned.   The default value is `profile` Possible values are: * profile: User profile images are those associated with the user profile. The first profile image is used to depict the user on search results. * custom: User custom images are additional images that can be used on rich text contents. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listUserImages(user, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String**| The user identification. The value &#39;self&#39; (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords.  | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 
 **kind** | **String**| The kind of images to be returned.   The default value is &#x60;profile&#x60; Possible values are: * profile: User profile images are those associated with the user profile. The first profile image is used to depict the user on search results. * custom: User custom images are additional images that can be used on rich text contents.  | [optional] 

### Return type

[**[Image]**](Image.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="reorderAdImages"></a>
# **reorderAdImages**
> reorderAdImages(id, ids)

Changes the order of the images of an advertisement  

The new order is defined by the list of ids, so that images appear in the same order as the ids. 

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

var apiInstance = new Cyclos471Api.ImagesApi();

var id = "id_example"; // String | The object identification

var ids = ["ids_example"]; // [String] | The array of ids (comma-separated) reflecting the desired order


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.reorderAdImages(id, ids, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The object identification | 
 **ids** | [**[String]**](String.md)| The array of ids (comma-separated) reflecting the desired order | 

### Return type

null (empty response body)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="reorderProfileImages"></a>
# **reorderProfileImages**
> reorderProfileImages(user, ids)

Changes the order of an user&#39;s profile images  

The new order is defined by the list of ids, so that images appear in the same order as the ids. 

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

var apiInstance = new Cyclos471Api.ImagesApi();

var user = "user_example"; // String | The user identification. The value 'self' (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords. 

var ids = ["ids_example"]; // [String] | The array of ids (comma-separated) reflecting the desired order


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.reorderProfileImages(user, ids, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String**| The user identification. The value &#39;self&#39; (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords.  | 
 **ids** | [**[String]**](String.md)| The array of ids (comma-separated) reflecting the desired order | 

### Return type

null (empty response body)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="uploadAdImage"></a>
# **uploadAdImage**
> &#39;String&#39; uploadAdImage(id, image, opts)

Adds a new image for the given advertisement. 

Uploads a new image for the given advertisement. 

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

var apiInstance = new Cyclos471Api.ImagesApi();

var id = "id_example"; // String | The object identification

var image = "/path/to/file.txt"; // File | The image being uploaded

var opts = { 
  'name': "name_example" // String | The name for the new image. If not informed will fall back to the original file name in the form data 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadAdImage(id, image, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The object identification | 
 **image** | **File**| The image being uploaded | 
 **name** | **String**| The name for the new image. If not informed will fall back to the original file name in the form data  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

<a name="uploadTempImage"></a>
# **uploadTempImage**
> &#39;String&#39; uploadTempImage(image, opts)

Adds a new temporary image for the currently authenticated user or guest. 

Uploads a new temporary image. Those images can later be related to a new user registration or advertisement, so they will have images the beginning. Temporary images won&#39;t be immediately associated to the next registered entity, but each id must be explicitly associated on the &#x60;images&#x60; field. Images as guest can only be uploaded if on the destination group products the image profile field is allowed at registrations. Users may upload images if they can register new users or create advertisements. 

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.ImagesApi();

var image = "/path/to/file.txt"; // File | The image being uploaded

var opts = { 
  'name': "name_example" // String | The name for the new image. If not informed will fall back to the original file name in the form data 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadTempImage(image, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **File**| The image being uploaded | 
 **name** | **String**| The name for the new image. If not informed will fall back to the original file name in the form data  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

<a name="uploadUserImage"></a>
# **uploadUserImage**
> &#39;String&#39; uploadUserImage(user, image, opts)

Adds a new image for the given user. The image kind is either  &#x60;profile&#x60; or &#x60;custom&#x60;. 

Uploads a new image, either &#x60;profile&#x60; (by default) or &#x60;custom&#x60;, for the given user. 

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

var apiInstance = new Cyclos471Api.ImagesApi();

var user = "user_example"; // String | The user identification. The value 'self' (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords. 

var image = "/path/to/file.txt"; // File | The image being uploaded

var opts = { 
  'kind': "kind_example", // String | The kind of images to be returned.   The default value is `profile` Possible values are: * profile: User profile images are those associated with the user profile. The first profile image is used to depict the user on search results. * custom: User custom images are additional images that can be used on rich text contents. 
  'name': "name_example" // String | The name for the new image. If not informed will fall back to the original file name in the form data 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadUserImage(user, image, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String**| The user identification. The value &#39;self&#39; (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords.  | 
 **image** | **File**| The image being uploaded | 
 **kind** | **String**| The kind of images to be returned.   The default value is &#x60;profile&#x60; Possible values are: * profile: User profile images are those associated with the user profile. The first profile image is used to depict the user on search results. * custom: User custom images are additional images that can be used on rich text contents.  | [optional] 
 **name** | **String**| The name for the new image. If not informed will fall back to the original file name in the form data  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

<a name="viewImage"></a>
# **viewImage**
> ImageView viewImage(id, opts)

Returns an image details by id

Returns metadata about an image given its id

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.ImagesApi();

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
apiInstance.viewImage(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The object identification | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**ImageView**](ImageView.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

