# Cyclos471Api.MarketplaceApi

All URIs are relative to *https://communities.cyclos.org/wootsapp/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAd**](MarketplaceApi.md#createAd) | **POST** /{user}/marketplace | Creates a new advertisement for the given user
[**deleteAd**](MarketplaceApi.md#deleteAd) | **DELETE** /marketplace/{id} | Removes an advertisement
[**getAdDataForEdit**](MarketplaceApi.md#getAdDataForEdit) | **GET** /marketplace/{id}/data-for-edit | Returns data for editing an advertisement
[**getAdDataForNew**](MarketplaceApi.md#getAdDataForNew) | **GET** /{user}/marketplace/data-for-new | Returns data for creating a new advertisement for an user and kind 
[**getAdDataForSearch**](MarketplaceApi.md#getAdDataForSearch) | **GET** /marketplace/data-for-search | Returns configuration data to search advertisements
[**getUserAdDataForSearch**](MarketplaceApi.md#getUserAdDataForSearch) | **GET** /{user}/marketplace/data-for-search | Returns configuration data for searching advertisements of an user
[**searchAds**](MarketplaceApi.md#searchAds) | **GET** /marketplace | Search for advertisements
[**searchUserAds**](MarketplaceApi.md#searchUserAds) | **GET** /{user}/marketplace | Search for advertisements of a specific user
[**updateAd**](MarketplaceApi.md#updateAd) | **PUT** /marketplace/{id} | Updates an existing ad
[**viewAd**](MarketplaceApi.md#viewAd) | **GET** /marketplace/{id} | Returns details of an advertisement


<a name="createAd"></a>
# **createAd**
> &#39;String&#39; createAd(user, advertisement)

Creates a new advertisement for the given user

Creates a new advertisement for the given user 

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

var apiInstance = new Cyclos471Api.MarketplaceApi();

var user = "user_example"; // String | The user identification. The value 'self' (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords. 

var advertisement = new Cyclos471Api.AdNew(); // AdNew | The advertisement to be created


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createAd(user, advertisement, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String**| The user identification. The value &#39;self&#39; (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords.  | 
 **advertisement** | [**AdNew**](AdNew.md)| The advertisement to be created | 

### Return type

**&#39;String&#39;**

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

<a name="deleteAd"></a>
# **deleteAd**
> deleteAd(id)

Removes an advertisement

Removes an advertisement

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

var apiInstance = new Cyclos471Api.MarketplaceApi();

var id = "id_example"; // String | The object identification


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteAd(id, callback);
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

<a name="getAdDataForEdit"></a>
# **getAdDataForEdit**
> AdDataForEdit getAdDataForEdit(id, opts)

Returns data for editing an advertisement

Returns configuration data which can be used to edit an advertisement 

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.MarketplaceApi();

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
apiInstance.getAdDataForEdit(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The object identification | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**AdDataForEdit**](AdDataForEdit.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAdDataForNew"></a>
# **getAdDataForNew**
> AdDataForNew getAdDataForNew(user, opts)

Returns data for creating a new advertisement for an user and kind 

Returns data for creating a new advertisement for the given user. The &#x60;kind&#x60; should be informed. If not set, &#x60;simple&#x60; is assumed. Currently only &#x60;simple&#x60; advertisements can be created through this API.       

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.MarketplaceApi();

var user = "user_example"; // String | The user identification. The value 'self' (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords. 

var opts = { 
  'fields': ["fields_example"], // [String] | Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: `a,b.b1,c.-c1,c.-c2` will return the fields `a`, `b` (containing only the `b1` field) and `c` (containing all its fields except for `c1` or `c2`).  
  'kind': "kind_example" // String | The possible kinds of an advertisement Possible values are: * simple: A simple advertisement that can be viewed, but not directly bought * webshop: An advertisement that is part of an web-shop. Can be bought, there is stock management, etc. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAdDataForNew(user, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String**| The user identification. The value &#39;self&#39; (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords.  | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 
 **kind** | **String**| The possible kinds of an advertisement Possible values are: * simple: A simple advertisement that can be viewed, but not directly bought * webshop: An advertisement that is part of an web-shop. Can be bought, there is stock management, etc.  | [optional] 

### Return type

[**AdDataForNew**](AdDataForNew.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAdDataForSearch"></a>
# **getAdDataForSearch**
> AdDataForSearch getAdDataForSearch(opts)

Returns configuration data to search advertisements

Returns data needed on for a general advertisements search  

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.MarketplaceApi();

var opts = { 
  'fields': ["fields_example"], // [String] | Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: `a,b.b1,c.-c1,c.-c2` will return the fields `a`, `b` (containing only the `b1` field) and `c` (containing all its fields except for `c1` or `c2`).  
  'kind': "kind_example", // String | Indicates the kind of advertisement that should be searched. When nothing is passed (default) all kinds will be searched. Possible values are: * simple: A simple advertisement that can be viewed, but not directly bought * webshop: An advertisement that is part of an web-shop. Can be bought, there is stock management, etc. 
  'brokered': true // Boolean | If the authenticated is a broker, passing the `true` value will indicate the advertisements to be searched are from managed users of that broker. The default is `false`. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAdDataForSearch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 
 **kind** | **String**| Indicates the kind of advertisement that should be searched. When nothing is passed (default) all kinds will be searched. Possible values are: * simple: A simple advertisement that can be viewed, but not directly bought * webshop: An advertisement that is part of an web-shop. Can be bought, there is stock management, etc.  | [optional] 
 **brokered** | **Boolean**| If the authenticated is a broker, passing the &#x60;true&#x60; value will indicate the advertisements to be searched are from managed users of that broker. The default is &#x60;false&#x60;.  | [optional] 

### Return type

[**AdDataForSearch**](AdDataForSearch.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserAdDataForSearch"></a>
# **getUserAdDataForSearch**
> UserAdDataForSearch getUserAdDataForSearch(user, opts)

Returns configuration data for searching advertisements of an user

Returns data needed on for a user&#39;s advertisements search  

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.MarketplaceApi();

var user = "user_example"; // String | The user identification. The value 'self' (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords. 

var opts = { 
  'fields': ["fields_example"], // [String] | Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: `a,b.b1,c.-c1,c.-c2` will return the fields `a`, `b` (containing only the `b1` field) and `c` (containing all its fields except for `c1` or `c2`).  
  'kind': "kind_example" // String | Indicates the kind of advertisement that should be searched. When nothing is passed (default) all kinds will be searched. Possible values are: * simple: A simple advertisement that can be viewed, but not directly bought * webshop: An advertisement that is part of an web-shop. Can be bought, there is stock management, etc. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserAdDataForSearch(user, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String**| The user identification. The value &#39;self&#39; (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords.  | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 
 **kind** | **String**| Indicates the kind of advertisement that should be searched. When nothing is passed (default) all kinds will be searched. Possible values are: * simple: A simple advertisement that can be viewed, but not directly bought * webshop: An advertisement that is part of an web-shop. Can be bought, there is stock management, etc.  | [optional] 

### Return type

[**UserAdDataForSearch**](UserAdDataForSearch.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchAds"></a>
# **searchAds**
> [AdResult] searchAds(opts)

Search for advertisements

Returns a page of advertisements that match a given criteria 

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.MarketplaceApi();

var opts = { 
  'fields': ["fields_example"], // [String] | Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: `a,b.b1,c.-c1,c.-c2` will return the fields `a`, `b` (containing only the `b1` field) and `c` (containing all its fields except for `c1` or `c2`).  
  'page': 56, // Number | The page number (zero-based) of the search. The default value is zero. 
  'pageSize': 56, // Number | The maximum number of records that will be returned on the search. The default value is 40. 
  'keywords': "keywords_example", // String | Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products. 
  'profileFields': ["profileFields_example"], // [String] | User profile fields, both basic (full name, login name, phone, e-mail,  etc) and custom fields, that are used for search. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon). For example, profileFields=field1:value1,field2:value2. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, profileFields=field1:valueA|valueB. The accepted fields depend on the products the authenticated user has. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, profileFields=rank:bronze|silver,birthDate:2000-01-01|2001-12-31 Would match results whose custom field with internal name 'rank' is either bronze or silver, and whose 'birthDate' is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like customValues=birthDate:|2001-12-31. The basic profile fields have one of the following identifiers: * Full name: name, fullName * Login name: username, loginName, login * E-mail: email * Phone: phone * Account number: accountNumber, account * Image: image (accepts a boolean value, indicating the presence of images) 
  'customFields': ["customFields_example"], // [String] | Custom field values used as search criteria. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon). For example, customFields=field1:value1,field2:value2. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, profileFields=field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, profileFields=rank:bronze|silver,birthDate:2000-01-01|2001-12-31 Would match results whose custom field with internal name 'rank' is either bronze or silver, and whose 'birthDate' is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like customValues=birthDate:|2001-12-31. 
  'category': "category_example", // String | Either id or internal name of a category
  'currency': "currency_example", // String | Either id or internal name of a currency for the price
  'priceRange': [new Cyclos471Api.BigDecimal()], // [BigDecimal] | The minumum / maximum price. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma. 
  'hasImages': true, // Boolean | When set to `true` only advertisements with images are returned 
  'publicationPeriod': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | The minimum / maximum publication date. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma. 
  'expirationPeriod': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | The minimum / maximum expiration date. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma. 
  'kind': "kind_example", // String | The possible kinds of an advertisement Possible values are: * simple: A simple advertisement that can be viewed, but not directly bought * webshop: An advertisement that is part of an web-shop. Can be bought, there is stock management, etc. 
  'statuses': ["statuses_example"], // [String] | The possible status for an advertisement Possible values for each array element are: * draft: In draft status, only the owner can see and edit the advertisement. This status is only possible if the system is configured to require authorizations. * pending: The advertisement is pending for an authorization and cannot be seen by other users. This status is only possible if the system is configured to require authorizations. * active: The advertisement is published and can be seen by other users. * scheduled: The advertisement has a future publication period, and cannot be seen by other users.  * expired: The advertisement publication period has already expired, and cannot be seen by other users. * hidden: The advertisement is manually hidden from other users * disabled: The advertisement is disabled because the owner no longer has access to the currency of the advertisement. It cannot be seen by other users. 
  'orderBy': "orderBy_example", // String | Indicates how advertisements results are ordered. Possible values are: * relevance: This is the default if keywords are used. Best matching advertisements come first. * date: Newest advertisements are returned first. * priceAsc: Smaller prices are returned first. Advertisements without price are returned last. * priceDesc: Higher prices are returned first. Advertisements without price are returned last. * distance: Only useful when providing a location, will return nearer advertisements first. * random: Without definite order 
  'latitude': 1.2, // Number | The reference latitude for distance searches
  'longitude': 1.2, // Number | The reference longitude for distance searches
  'maxDistance': 1.2, // Number | Maximum straight-line distance between the informed location and the resulting address. Is measured either in kilometers or miles, depending on the configuration. Only accepted if both `longitude` and `latitude` parameters are passed with the actual reference position. 
  'addressResult': "addressResult_example", // String | Determines which address is returned on the search, if any. By default no addresses are returned. This option is useful for displaying results as locations on a map. In all cases only located addresses (those that have the geographical coordinates set) are returned. When returning all addresses, data related with multiple addresses is returned multiple times. Possible values are: * none: Addresses are not returned. * all: All addresses are returned. * nearest: The nearest address from the reference location is returned. Only usable if a reference coordinate (`latitude` and `longitude`) * primary: The primary (default) address is returned 
  'owner': "owner_example", // String | Either id or an identification, such as login name, e-mail, etc, for the advertisement owner. The allowed identification methods are those the authenticated user can use on keywords search. 
  'broker': "broker_example", // String | Either id or an identification, such as login name, e-mail, etc, for the broker of the advertisement owner. The allowed identification methods are those the authenticated user can use on keywords search. 
  'groups': ["groups_example"], // [String] | Array of either id or internal names of user groups the advertisement owner must belong to 
  'returnEditable': true // Boolean | Whether to return the editable property. Passing `true` will impact the performance a bit, as for each returned advertisement some statuses and permissions need to be checked.  
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchAds(opts, callback);
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
 **category** | **String**| Either id or internal name of a category | [optional] 
 **currency** | **String**| Either id or internal name of a currency for the price | [optional] 
 **priceRange** | [**[BigDecimal]**](BigDecimal.md)| The minumum / maximum price. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.  | [optional] 
 **hasImages** | **Boolean**| When set to &#x60;true&#x60; only advertisements with images are returned  | [optional] 
 **publicationPeriod** | [**[Date]**](Date.md)| The minimum / maximum publication date. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.  | [optional] 
 **expirationPeriod** | [**[Date]**](Date.md)| The minimum / maximum expiration date. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.  | [optional] 
 **kind** | **String**| The possible kinds of an advertisement Possible values are: * simple: A simple advertisement that can be viewed, but not directly bought * webshop: An advertisement that is part of an web-shop. Can be bought, there is stock management, etc.  | [optional] 
 **statuses** | [**[String]**](String.md)| The possible status for an advertisement Possible values for each array element are: * draft: In draft status, only the owner can see and edit the advertisement. This status is only possible if the system is configured to require authorizations. * pending: The advertisement is pending for an authorization and cannot be seen by other users. This status is only possible if the system is configured to require authorizations. * active: The advertisement is published and can be seen by other users. * scheduled: The advertisement has a future publication period, and cannot be seen by other users.  * expired: The advertisement publication period has already expired, and cannot be seen by other users. * hidden: The advertisement is manually hidden from other users * disabled: The advertisement is disabled because the owner no longer has access to the currency of the advertisement. It cannot be seen by other users.  | [optional] 
 **orderBy** | **String**| Indicates how advertisements results are ordered. Possible values are: * relevance: This is the default if keywords are used. Best matching advertisements come first. * date: Newest advertisements are returned first. * priceAsc: Smaller prices are returned first. Advertisements without price are returned last. * priceDesc: Higher prices are returned first. Advertisements without price are returned last. * distance: Only useful when providing a location, will return nearer advertisements first. * random: Without definite order  | [optional] 
 **latitude** | **Number**| The reference latitude for distance searches | [optional] 
 **longitude** | **Number**| The reference longitude for distance searches | [optional] 
 **maxDistance** | **Number**| Maximum straight-line distance between the informed location and the resulting address. Is measured either in kilometers or miles, depending on the configuration. Only accepted if both &#x60;longitude&#x60; and &#x60;latitude&#x60; parameters are passed with the actual reference position.  | [optional] 
 **addressResult** | **String**| Determines which address is returned on the search, if any. By default no addresses are returned. This option is useful for displaying results as locations on a map. In all cases only located addresses (those that have the geographical coordinates set) are returned. When returning all addresses, data related with multiple addresses is returned multiple times. Possible values are: * none: Addresses are not returned. * all: All addresses are returned. * nearest: The nearest address from the reference location is returned. Only usable if a reference coordinate (&#x60;latitude&#x60; and &#x60;longitude&#x60;) * primary: The primary (default) address is returned  | [optional] 
 **owner** | **String**| Either id or an identification, such as login name, e-mail, etc, for the advertisement owner. The allowed identification methods are those the authenticated user can use on keywords search.  | [optional] 
 **broker** | **String**| Either id or an identification, such as login name, e-mail, etc, for the broker of the advertisement owner. The allowed identification methods are those the authenticated user can use on keywords search.  | [optional] 
 **groups** | [**[String]**](String.md)| Array of either id or internal names of user groups the advertisement owner must belong to  | [optional] 
 **returnEditable** | **Boolean**| Whether to return the editable property. Passing &#x60;true&#x60; will impact the performance a bit, as for each returned advertisement some statuses and permissions need to be checked.   | [optional] 

### Return type

[**[AdResult]**](AdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchUserAds"></a>
# **searchUserAds**
> [AdResult] searchUserAds(user, opts)

Search for advertisements of a specific user

Returns a page of advertisements that match a given criteria for a given user. Equivallent to calling &#x60;GET /marketplace?owner&#x3D;{user}&#x60; 

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.MarketplaceApi();

var user = "user_example"; // String | The user identification. The value 'self' (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords. 

var opts = { 
  'fields': ["fields_example"], // [String] | Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: `a,b.b1,c.-c1,c.-c2` will return the fields `a`, `b` (containing only the `b1` field) and `c` (containing all its fields except for `c1` or `c2`).  
  'page': 56, // Number | The page number (zero-based) of the search. The default value is zero. 
  'pageSize': 56, // Number | The maximum number of records that will be returned on the search. The default value is 40. 
  'keywords': "keywords_example", // String | Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products. 
  'profileFields': ["profileFields_example"], // [String] | User profile fields, both basic (full name, login name, phone, e-mail,  etc) and custom fields, that are used for search. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon). For example, profileFields=field1:value1,field2:value2. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, profileFields=field1:valueA|valueB. The accepted fields depend on the products the authenticated user has. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, profileFields=rank:bronze|silver,birthDate:2000-01-01|2001-12-31 Would match results whose custom field with internal name 'rank' is either bronze or silver, and whose 'birthDate' is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like customValues=birthDate:|2001-12-31. The basic profile fields have one of the following identifiers: * Full name: name, fullName * Login name: username, loginName, login * E-mail: email * Phone: phone * Account number: accountNumber, account * Image: image (accepts a boolean value, indicating the presence of images) 
  'customFields': ["customFields_example"], // [String] | Custom field values used as search criteria. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon). For example, customFields=field1:value1,field2:value2. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, profileFields=field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, profileFields=rank:bronze|silver,birthDate:2000-01-01|2001-12-31 Would match results whose custom field with internal name 'rank' is either bronze or silver, and whose 'birthDate' is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like customValues=birthDate:|2001-12-31. 
  'category': "category_example", // String | Either id or internal name of a category
  'currency': "currency_example", // String | Either id or internal name of a currency for the price
  'priceRange': [new Cyclos471Api.BigDecimal()], // [BigDecimal] | The minumum / maximum price. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma. 
  'hasImages': true, // Boolean | When set to `true` only advertisements with images are returned 
  'publicationPeriod': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | The minimum / maximum publication date. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma. 
  'expirationPeriod': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | The minimum / maximum expiration date. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma. 
  'kind': "kind_example", // String | The possible kinds of an advertisement Possible values are: * simple: A simple advertisement that can be viewed, but not directly bought * webshop: An advertisement that is part of an web-shop. Can be bought, there is stock management, etc. 
  'statuses': ["statuses_example"], // [String] | The possible status for an advertisement Possible values for each array element are: * draft: In draft status, only the owner can see and edit the advertisement. This status is only possible if the system is configured to require authorizations. * pending: The advertisement is pending for an authorization and cannot be seen by other users. This status is only possible if the system is configured to require authorizations. * active: The advertisement is published and can be seen by other users. * scheduled: The advertisement has a future publication period, and cannot be seen by other users.  * expired: The advertisement publication period has already expired, and cannot be seen by other users. * hidden: The advertisement is manually hidden from other users * disabled: The advertisement is disabled because the owner no longer has access to the currency of the advertisement. It cannot be seen by other users. 
  'orderBy': "orderBy_example", // String | Indicates how advertisements results are ordered. Possible values are: * relevance: This is the default if keywords are used. Best matching advertisements come first. * date: Newest advertisements are returned first. * priceAsc: Smaller prices are returned first. Advertisements without price are returned last. * priceDesc: Higher prices are returned first. Advertisements without price are returned last. * distance: Only useful when providing a location, will return nearer advertisements first. * random: Without definite order 
  'latitude': 1.2, // Number | The reference latitude for distance searches
  'longitude': 1.2, // Number | The reference longitude for distance searches
  'maxDistance': 1.2, // Number | Maximum straight-line distance between the informed location and the resulting address. Is measured either in kilometers or miles, depending on the configuration. Only accepted if both `longitude` and `latitude` parameters are passed with the actual reference position. 
  'addressResult': "addressResult_example" // String | Determines which address is returned on the search, if any. By default no addresses are returned. This option is useful for displaying results as locations on a map. In all cases only located addresses (those that have the geographical coordinates set) are returned. When returning all addresses, data related with multiple addresses is returned multiple times. Possible values are: * none: Addresses are not returned. * all: All addresses are returned. * nearest: The nearest address from the reference location is returned. Only usable if a reference coordinate (`latitude` and `longitude`) * primary: The primary (default) address is returned 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchUserAds(user, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String**| The user identification. The value &#39;self&#39; (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords.  | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 
 **page** | **Number**| The page number (zero-based) of the search. The default value is zero.  | [optional] 
 **pageSize** | **Number**| The maximum number of records that will be returned on the search. The default value is 40.  | [optional] 
 **keywords** | **String**| Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.  | [optional] 
 **profileFields** | [**[String]**](String.md)| User profile fields, both basic (full name, login name, phone, e-mail,  etc) and custom fields, that are used for search. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon). For example, profileFields&#x3D;field1:value1,field2:value2. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, profileFields&#x3D;field1:valueA|valueB. The accepted fields depend on the products the authenticated user has. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, profileFields&#x3D;rank:bronze|silver,birthDate:2000-01-01|2001-12-31 Would match results whose custom field with internal name &#39;rank&#39; is either bronze or silver, and whose &#39;birthDate&#39; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like customValues&#x3D;birthDate:|2001-12-31. The basic profile fields have one of the following identifiers: * Full name: name, fullName * Login name: username, loginName, login * E-mail: email * Phone: phone * Account number: accountNumber, account * Image: image (accepts a boolean value, indicating the presence of images)  | [optional] 
 **customFields** | [**[String]**](String.md)| Custom field values used as search criteria. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon). For example, customFields&#x3D;field1:value1,field2:value2. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, profileFields&#x3D;field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, profileFields&#x3D;rank:bronze|silver,birthDate:2000-01-01|2001-12-31 Would match results whose custom field with internal name &#39;rank&#39; is either bronze or silver, and whose &#39;birthDate&#39; is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like customValues&#x3D;birthDate:|2001-12-31.  | [optional] 
 **category** | **String**| Either id or internal name of a category | [optional] 
 **currency** | **String**| Either id or internal name of a currency for the price | [optional] 
 **priceRange** | [**[BigDecimal]**](BigDecimal.md)| The minumum / maximum price. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.  | [optional] 
 **hasImages** | **Boolean**| When set to &#x60;true&#x60; only advertisements with images are returned  | [optional] 
 **publicationPeriod** | [**[Date]**](Date.md)| The minimum / maximum publication date. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.  | [optional] 
 **expirationPeriod** | [**[Date]**](Date.md)| The minimum / maximum expiration date. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.  | [optional] 
 **kind** | **String**| The possible kinds of an advertisement Possible values are: * simple: A simple advertisement that can be viewed, but not directly bought * webshop: An advertisement that is part of an web-shop. Can be bought, there is stock management, etc.  | [optional] 
 **statuses** | [**[String]**](String.md)| The possible status for an advertisement Possible values for each array element are: * draft: In draft status, only the owner can see and edit the advertisement. This status is only possible if the system is configured to require authorizations. * pending: The advertisement is pending for an authorization and cannot be seen by other users. This status is only possible if the system is configured to require authorizations. * active: The advertisement is published and can be seen by other users. * scheduled: The advertisement has a future publication period, and cannot be seen by other users.  * expired: The advertisement publication period has already expired, and cannot be seen by other users. * hidden: The advertisement is manually hidden from other users * disabled: The advertisement is disabled because the owner no longer has access to the currency of the advertisement. It cannot be seen by other users.  | [optional] 
 **orderBy** | **String**| Indicates how advertisements results are ordered. Possible values are: * relevance: This is the default if keywords are used. Best matching advertisements come first. * date: Newest advertisements are returned first. * priceAsc: Smaller prices are returned first. Advertisements without price are returned last. * priceDesc: Higher prices are returned first. Advertisements without price are returned last. * distance: Only useful when providing a location, will return nearer advertisements first. * random: Without definite order  | [optional] 
 **latitude** | **Number**| The reference latitude for distance searches | [optional] 
 **longitude** | **Number**| The reference longitude for distance searches | [optional] 
 **maxDistance** | **Number**| Maximum straight-line distance between the informed location and the resulting address. Is measured either in kilometers or miles, depending on the configuration. Only accepted if both &#x60;longitude&#x60; and &#x60;latitude&#x60; parameters are passed with the actual reference position.  | [optional] 
 **addressResult** | **String**| Determines which address is returned on the search, if any. By default no addresses are returned. This option is useful for displaying results as locations on a map. In all cases only located addresses (those that have the geographical coordinates set) are returned. When returning all addresses, data related with multiple addresses is returned multiple times. Possible values are: * none: Addresses are not returned. * all: All addresses are returned. * nearest: The nearest address from the reference location is returned. Only usable if a reference coordinate (&#x60;latitude&#x60; and &#x60;longitude&#x60;) * primary: The primary (default) address is returned  | [optional] 

### Return type

[**[AdResult]**](AdResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateAd"></a>
# **updateAd**
> updateAd(id, ad)

Updates an existing ad

Updates an existing ad

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

var apiInstance = new Cyclos471Api.MarketplaceApi();

var id = "id_example"; // String | The object identification

var ad = new Cyclos471Api.AdEdit(); // AdEdit | The advertisement to be edited


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateAd(id, ad, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The object identification | 
 **ad** | [**AdEdit**](AdEdit.md)| The advertisement to be edited | 

### Return type

null (empty response body)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="viewAd"></a>
# **viewAd**
> AdView viewAd(id, opts)

Returns details of an advertisement

Returns detailed information of a marketplace 

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.MarketplaceApi();

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
apiInstance.viewAd(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The object identification | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**AdView**](AdView.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

