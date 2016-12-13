# Cyclos471Api.OperatorsApi

All URIs are relative to *https://communities.cyclos.org/wootsapp/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGeneralOperatorsDataForSearch**](OperatorsApi.md#getGeneralOperatorsDataForSearch) | **GET** /operators/data-for-search | Get configuration data for searching operators of any managed user
[**getUserOperatorsDataForSearch**](OperatorsApi.md#getUserOperatorsDataForSearch) | **GET** /{user}/operators/data-for-search | Get configuration data for searching operators of the given user
[**searchGeneralOperators**](OperatorsApi.md#searchGeneralOperators) | **GET** /operators | Search the visible operators (of any managed user)
[**searchUserOperators**](OperatorsApi.md#searchUserOperators) | **GET** /{user}/operators | Search the operators of a given user


<a name="getGeneralOperatorsDataForSearch"></a>
# **getGeneralOperatorsDataForSearch**
> GeneralOperatorsDataForSearch getGeneralOperatorsDataForSearch(opts)

Get configuration data for searching operators of any managed user

Returns data with the current configuration regarding the search of operators of managed users. This is meant to be used by either administrators or brokers  

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.OperatorsApi();

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
apiInstance.getGeneralOperatorsDataForSearch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**GeneralOperatorsDataForSearch**](GeneralOperatorsDataForSearch.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserOperatorsDataForSearch"></a>
# **getUserOperatorsDataForSearch**
> UserOperatorsDataForSearch getUserOperatorsDataForSearch(user, opts)

Get configuration data for searching operators of the given user

Returns data with the current configuration regarding the operators of the given user  

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.OperatorsApi();

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
apiInstance.getUserOperatorsDataForSearch(user, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String**| The user identification. The value &#39;self&#39; (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords.  | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**UserOperatorsDataForSearch**](UserOperatorsDataForSearch.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchGeneralOperators"></a>
# **searchGeneralOperators**
> [UserResult] searchGeneralOperators(opts)

Search the visible operators (of any managed user)

Returns a page of operators that match a given criteria 

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.OperatorsApi();

var opts = { 
  'fields': ["fields_example"], // [String] | Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: `a,b.b1,c.-c1,c.-c2` will return the fields `a`, `b` (containing only the `b1` field) and `c` (containing all its fields except for `c1` or `c2`).  
  'page': 56, // Number | The page number (zero-based) of the search. The default value is zero. 
  'pageSize': 56, // Number | The maximum number of records that will be returned on the search. The default value is 40. 
  'userGroups': ["userGroups_example"], // [String] | Either id or internal names of user groups / group sets
  'broker': "broker_example", // String | Either id or a principal (login name, e-mail, etc) of the user broker
  'creationPeriod': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | The minimum / maximum user creation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma. 
  'statuses': ["statuses_example"] // [String] | The possible statuses for an user Possible values for each array element are: * active: The user is active and can use the system normally. * blocked: The user has been blocked from accessing the system. Other users still see him/her. * disabled: The user has been disabled - he/she cannot access the system and is invisible by other users. * removed: The user was permanently removed. It's profile is kept for historical purposes. * pending: The user registration is pending a confirmation. Probably the user has received an e-mail with a link that must be followed to complete the activation. The user is invisible by other users. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchGeneralOperators(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 
 **page** | **Number**| The page number (zero-based) of the search. The default value is zero.  | [optional] 
 **pageSize** | **Number**| The maximum number of records that will be returned on the search. The default value is 40.  | [optional] 
 **userGroups** | [**[String]**](String.md)| Either id or internal names of user groups / group sets | [optional] 
 **broker** | **String**| Either id or a principal (login name, e-mail, etc) of the user broker | [optional] 
 **creationPeriod** | [**[Date]**](Date.md)| The minimum / maximum user creation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.  | [optional] 
 **statuses** | [**[String]**](String.md)| The possible statuses for an user Possible values for each array element are: * active: The user is active and can use the system normally. * blocked: The user has been blocked from accessing the system. Other users still see him/her. * disabled: The user has been disabled - he/she cannot access the system and is invisible by other users. * removed: The user was permanently removed. It&#39;s profile is kept for historical purposes. * pending: The user registration is pending a confirmation. Probably the user has received an e-mail with a link that must be followed to complete the activation. The user is invisible by other users.  | [optional] 

### Return type

[**[UserResult]**](UserResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchUserOperators"></a>
# **searchUserOperators**
> [UserResult] searchUserOperators(user, opts)

Search the operators of a given user

Returns a page of operators that match a given criteria 

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.OperatorsApi();

var user = "user_example"; // String | The user identification. The value 'self' (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords. 

var opts = { 
  'fields': ["fields_example"], // [String] | Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: `a,b.b1,c.-c1,c.-c2` will return the fields `a`, `b` (containing only the `b1` field) and `c` (containing all its fields except for `c1` or `c2`).  
  'page': 56, // Number | The page number (zero-based) of the search. The default value is zero. 
  'pageSize': 56, // Number | The maximum number of records that will be returned on the search. The default value is 40. 
  'ignoreProfileFieldsInList': true, // Boolean | When set to `true`, instead of returning users with corresponding profile fields set on list, will return them with `display` and `shortDisplay`.  
  'creationPeriod': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | The minimum / maximum user creation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma. 
  'operatorGroups': ["operatorGroups_example"], // [String] | An array of operator group ids
  'statuses': ["statuses_example"] // [String] | The possible statuses for an user Possible values for each array element are: * active: The user is active and can use the system normally. * blocked: The user has been blocked from accessing the system. Other users still see him/her. * disabled: The user has been disabled - he/she cannot access the system and is invisible by other users. * removed: The user was permanently removed. It's profile is kept for historical purposes. * pending: The user registration is pending a confirmation. Probably the user has received an e-mail with a link that must be followed to complete the activation. The user is invisible by other users. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchUserOperators(user, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String**| The user identification. The value &#39;self&#39; (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords.  | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 
 **page** | **Number**| The page number (zero-based) of the search. The default value is zero.  | [optional] 
 **pageSize** | **Number**| The maximum number of records that will be returned on the search. The default value is 40.  | [optional] 
 **ignoreProfileFieldsInList** | **Boolean**| When set to &#x60;true&#x60;, instead of returning users with corresponding profile fields set on list, will return them with &#x60;display&#x60; and &#x60;shortDisplay&#x60;.   | [optional] 
 **creationPeriod** | [**[Date]**](Date.md)| The minimum / maximum user creation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bould as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.  | [optional] 
 **operatorGroups** | [**[String]**](String.md)| An array of operator group ids | [optional] 
 **statuses** | [**[String]**](String.md)| The possible statuses for an user Possible values for each array element are: * active: The user is active and can use the system normally. * blocked: The user has been blocked from accessing the system. Other users still see him/her. * disabled: The user has been disabled - he/she cannot access the system and is invisible by other users. * removed: The user was permanently removed. It&#39;s profile is kept for historical purposes. * pending: The user registration is pending a confirmation. Probably the user has received an e-mail with a link that must be followed to complete the activation. The user is invisible by other users.  | [optional] 

### Return type

[**[UserResult]**](UserResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

