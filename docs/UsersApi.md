# Cyclos471Api.UsersApi

All URIs are relative to *https://communities.cyclos.org/wootsapp/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UsersApi.md#createUser) | **POST** /users | Registers a new user
[**getDataForMapDirectory**](UsersApi.md#getDataForMapDirectory) | **GET** /users/map/data-for-search | Get configuration data for searching the user directory (map)
[**getGroupsForUserRegistration**](UsersApi.md#getGroupsForUserRegistration) | **GET** /users/groups-for-registration | Returns the groups the authenticated user or guest can register on
[**getUserDataForEdit**](UsersApi.md#getUserDataForEdit) | **GET** /users/{user}/data-for-edit | Get configuration data to edit an user profile
[**getUserDataForNew**](UsersApi.md#getUserDataForNew) | **GET** /users/data-for-new | Get configuration data for registering new users
[**getUserDataForSearch**](UsersApi.md#getUserDataForSearch) | **GET** /users/data-for-search | Get configuration data for searching users
[**searchMapDirectory**](UsersApi.md#searchMapDirectory) | **GET** /users/map | Search the user directory (map)
[**searchUsers**](UsersApi.md#searchUsers) | **GET** /users | Search for users
[**updateUser**](UsersApi.md#updateUser) | **PUT** /users/{user} | Save an user details
[**viewUser**](UsersApi.md#viewUser) | **GET** /users/{user} | View an user details


<a name="createUser"></a>
# **createUser**
> UserRegistrationResult createUser(body)

Registers a new user

Can either be a public registration, requiring no authorization, or an user registration by an administrator or broker. The public registration normally requires a CAPTCHA challenge to prevent bots. On user registration the following data is also user data is also created: * Address * Mobile phone * Landline phone * Images After the registration those data are managed separatedly than the user profile data.  

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.UsersApi();

var body = new Cyclos471Api.UserNew(); // UserNew | The user to be registered


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUser(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserNew**](UserNew.md)| The user to be registered | 

### Return type

[**UserRegistrationResult**](UserRegistrationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDataForMapDirectory"></a>
# **getDataForMapDirectory**
> UserDataForMap getDataForMapDirectory(opts)

Get configuration data for searching the user directory (map)

Returns data with the current configuration regarding the user  directory (map) 

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.UsersApi();

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
apiInstance.getDataForMapDirectory(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**UserDataForMap**](UserDataForMap.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGroupsForUserRegistration"></a>
# **getGroupsForUserRegistration**
> [GroupForRegistration] getGroupsForUserRegistration(opts)

Returns the groups the authenticated user or guest can register on

Returns the list of groups the authenticated user can use to perform a new user registration. If authenticated as guest, will return the groups currently set for public registration. When there is an authenticated administrator or broker, will be the configured groups for new users. 

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.UsersApi();

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
apiInstance.getGroupsForUserRegistration(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**[GroupForRegistration]**](GroupForRegistration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserDataForEdit"></a>
# **getUserDataForEdit**
> UserDataForEdit getUserDataForEdit(user, opts)

Get configuration data to edit an user profile

Returns data to edit an user profile. 

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

var apiInstance = new Cyclos471Api.UsersApi();

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
apiInstance.getUserDataForEdit(user, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String**| The user identification. The value &#39;self&#39; (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords.  | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**UserDataForEdit**](UserDataForEdit.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserDataForNew"></a>
# **getUserDataForNew**
> UserDataForNew getUserDataForNew(group, opts)

Get configuration data for registering new users

Almost every aspect of an user profile is configurable in Cyclos, such as enabled basic profile fields, custom profile fields, address fields, phone configuration and so on. As such, if a front-end needs to be robust to such a dynamic nature, it should get this information in order to create a correct registration form.  

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.UsersApi();

var group = "group_example"; // String | The intial group for the new user

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
apiInstance.getUserDataForNew(group, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**| The intial group for the new user | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**UserDataForNew**](UserDataForNew.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserDataForSearch"></a>
# **getUserDataForSearch**
> UserDataForSearch getUserDataForSearch(opts)

Get configuration data for searching users

Returns data with the current configuration regarding the user search 

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.UsersApi();

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
apiInstance.getUserDataForSearch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**UserDataForSearch**](UserDataForSearch.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchMapDirectory"></a>
# **searchMapDirectory**
> [UserResult] searchMapDirectory(opts)

Search the user directory (map)

Returns a page of users in the map directory that match a given criteria 

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.UsersApi();

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
  'ignoreProfileFieldsInList': true, // Boolean | When set to `true`, instead of returning users with corresponding profile fields set on list, will return them with `display` and `shortDisplay`.  
  'excludeContacts': true, // Boolean | When set to `true` will not return any user that is already a contact of the currently authenticated user. 
  'statuses': ["statuses_example"], // [String] | The possible statuses for an user Possible values for each array element are: * active: The user is active and can use the system normally. * blocked: The user has been blocked from accessing the system. Other users still see him/her. * disabled: The user has been disabled - he/she cannot access the system and is invisible by other users. * removed: The user was permanently removed. It's profile is kept for historical purposes. * pending: The user registration is pending a confirmation. Probably the user has received an e-mail with a link that must be followed to complete the activation. The user is invisible by other users. 
  'roles': ["roles_example"], // [String] | The main role the user has. Possible values for each array element are: * administrator: A user who can manage the system and other users. * broker: A user who can manage other users. * member: A regular user who can manage operators.  * operator: A \"sub-user\" created by a member to manage his data. 
  'orderBy': "orderBy_example" // String | Possible options for ordering the results of an user search. Possible values are: * relevance: This is the default if keywords are used. Best matching users come first. * creationDate: Newly registered users are returned first. * alphabeticallyAsc: Users are ordered by name (or whatever field is set to format users) in ascending order. * alphabeticallyDesc: Users are ordered by name (or whatever field is set to format users) in descending order. * distance: Only useful when providing a location, will return nearer advertisements first. * random: Users will be randomly returned 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchMapDirectory(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
 **ignoreProfileFieldsInList** | **Boolean**| When set to &#x60;true&#x60;, instead of returning users with corresponding profile fields set on list, will return them with &#x60;display&#x60; and &#x60;shortDisplay&#x60;.   | [optional] 
 **excludeContacts** | **Boolean**| When set to &#x60;true&#x60; will not return any user that is already a contact of the currently authenticated user.  | [optional] 
 **statuses** | [**[String]**](String.md)| The possible statuses for an user Possible values for each array element are: * active: The user is active and can use the system normally. * blocked: The user has been blocked from accessing the system. Other users still see him/her. * disabled: The user has been disabled - he/she cannot access the system and is invisible by other users. * removed: The user was permanently removed. It&#39;s profile is kept for historical purposes. * pending: The user registration is pending a confirmation. Probably the user has received an e-mail with a link that must be followed to complete the activation. The user is invisible by other users.  | [optional] 
 **roles** | [**[String]**](String.md)| The main role the user has. Possible values for each array element are: * administrator: A user who can manage the system and other users. * broker: A user who can manage other users. * member: A regular user who can manage operators.  * operator: A \&quot;sub-user\&quot; created by a member to manage his data.  | [optional] 
 **orderBy** | **String**| Possible options for ordering the results of an user search. Possible values are: * relevance: This is the default if keywords are used. Best matching users come first. * creationDate: Newly registered users are returned first. * alphabeticallyAsc: Users are ordered by name (or whatever field is set to format users) in ascending order. * alphabeticallyDesc: Users are ordered by name (or whatever field is set to format users) in descending order. * distance: Only useful when providing a location, will return nearer advertisements first. * random: Users will be randomly returned  | [optional] 

### Return type

[**[UserResult]**](UserResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchUsers"></a>
# **searchUsers**
> [UserResult] searchUsers(opts)

Search for users

Returns a page of users that match a given criteria. The fields returned depend on the products, in the profile fields of other users setting. Only fields (both basic or custom) marked to be returned on user list are returned. If no fields are set to be returned, the resulting objects will have the &#x60;display&#x60; and &#x60;shortDisplay&#x60; filled in. However, those fields are not returned when another profile field is returned, preventing duplicated data to be returned.  

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.UsersApi();

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
  'ignoreProfileFieldsInList': true, // Boolean | When set to `true`, instead of returning users with corresponding profile fields set on list, will return them with `display` and `shortDisplay`.  
  'excludeContacts': true, // Boolean | When set to `true` will not return any user that is already a contact of the currently authenticated user. 
  'statuses': ["statuses_example"], // [String] | The possible statuses for an user Possible values for each array element are: * active: The user is active and can use the system normally. * blocked: The user has been blocked from accessing the system. Other users still see him/her. * disabled: The user has been disabled - he/she cannot access the system and is invisible by other users. * removed: The user was permanently removed. It's profile is kept for historical purposes. * pending: The user registration is pending a confirmation. Probably the user has received an e-mail with a link that must be followed to complete the activation. The user is invisible by other users. 
  'roles': ["roles_example"], // [String] | The main role the user has. Possible values for each array element are: * administrator: A user who can manage the system and other users. * broker: A user who can manage other users. * member: A regular user who can manage operators.  * operator: A \"sub-user\" created by a member to manage his data. 
  'orderBy': "orderBy_example" // String | Possible options for ordering the results of an user search. Possible values are: * relevance: This is the default if keywords are used. Best matching users come first. * creationDate: Newly registered users are returned first. * alphabeticallyAsc: Users are ordered by name (or whatever field is set to format users) in ascending order. * alphabeticallyDesc: Users are ordered by name (or whatever field is set to format users) in descending order. * distance: Only useful when providing a location, will return nearer advertisements first. * random: Users will be randomly returned 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchUsers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
 **ignoreProfileFieldsInList** | **Boolean**| When set to &#x60;true&#x60;, instead of returning users with corresponding profile fields set on list, will return them with &#x60;display&#x60; and &#x60;shortDisplay&#x60;.   | [optional] 
 **excludeContacts** | **Boolean**| When set to &#x60;true&#x60; will not return any user that is already a contact of the currently authenticated user.  | [optional] 
 **statuses** | [**[String]**](String.md)| The possible statuses for an user Possible values for each array element are: * active: The user is active and can use the system normally. * blocked: The user has been blocked from accessing the system. Other users still see him/her. * disabled: The user has been disabled - he/she cannot access the system and is invisible by other users. * removed: The user was permanently removed. It&#39;s profile is kept for historical purposes. * pending: The user registration is pending a confirmation. Probably the user has received an e-mail with a link that must be followed to complete the activation. The user is invisible by other users.  | [optional] 
 **roles** | [**[String]**](String.md)| The main role the user has. Possible values for each array element are: * administrator: A user who can manage the system and other users. * broker: A user who can manage other users. * member: A regular user who can manage operators.  * operator: A \&quot;sub-user\&quot; created by a member to manage his data.  | [optional] 
 **orderBy** | **String**| Possible options for ordering the results of an user search. Possible values are: * relevance: This is the default if keywords are used. Best matching users come first. * creationDate: Newly registered users are returned first. * alphabeticallyAsc: Users are ordered by name (or whatever field is set to format users) in ascending order. * alphabeticallyDesc: Users are ordered by name (or whatever field is set to format users) in descending order. * distance: Only useful when providing a location, will return nearer advertisements first. * random: Users will be randomly returned  | [optional] 

### Return type

[**[UserResult]**](UserResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateUser"></a>
# **updateUser**
> updateUser(user, body, opts)

Save an user details

Saves the user profile. Only the basic fields (full name, login name, e-mail) and custom fields can be saved with this operation. Addresses, phones and images must be managed through their own paths. 

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

var apiInstance = new Cyclos471Api.UsersApi();

var user = "user_example"; // String | The user identification. The value 'self' (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords. 

var body = new Cyclos471Api.UserEdit(); // UserEdit | The user to be saved

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
apiInstance.updateUser(user, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String**| The user identification. The value &#39;self&#39; (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords.  | 
 **body** | [**UserEdit**](UserEdit.md)| The user to be saved | 
 **confirmationPassword** | **String**| The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.  | [optional] 

### Return type

null (empty response body)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="viewUser"></a>
# **viewUser**
> UserView viewUser(user, opts)

View an user details

Returns the profile information of an user. 

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.UsersApi();

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
apiInstance.viewUser(user, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **String**| The user identification. The value &#39;self&#39; (sans quotes) means the currently authenticated user. The possible idenfitication methods are those whose profile fields are allowed in user keywords.  | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**UserView**](UserView.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

