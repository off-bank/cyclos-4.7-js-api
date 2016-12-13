# Cyclos471Api.CaptchaApi

All URIs are relative to *https://communities.cyclos.org/wootsapp/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCaptchaContent**](CaptchaApi.md#getCaptchaContent) | **GET** /captcha/{id} | Returns a captcha image content
[**newCaptcha**](CaptchaApi.md#newCaptcha) | **POST** /captcha | Returns a new captcha challenge


<a name="getCaptchaContent"></a>
# **getCaptchaContent**
> getCaptchaContent(id, opts)

Returns a captcha image content

Returns the image content of a captcha text. When neither &#x60;width&#x60; nor &#x60;height&#x60; are specified, returns the original size. The original ratio is always maintained. When only of one of  the dimensions is specified, it is used as maximum, and the other is calculated. When both are informed, the maximum size with the original ratio that fits both dimensions is used.  

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.CaptchaApi();

var id = "id_example"; // String | The object identification

var opts = { 
  'group': "group_example", // String | On public / user registration, it is possible to specify a destination group, so the captcha background image will be taken from this new group's configured theme. 
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
apiInstance.getCaptchaContent(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The object identification | 
 **group** | **String**| On public / user registration, it is possible to specify a destination group, so the captcha background image will be taken from this new group&#39;s configured theme.  | [optional] 
 **width** | **Number**| The requested image width | [optional] 
 **height** | **Number**| The requested file height | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, image/jpeg, image/gif, image/png

<a name="newCaptcha"></a>
# **newCaptcha**
> &#39;String&#39; newCaptcha(opts)

Returns a new captcha challenge

Only allowed when internal captchas are in use.  

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.CaptchaApi();

var opts = { 
  'group': "group_example" // String | On public / user registration, it is possible to specify a destination group, so the captcha background image will be taken from this new group's configured theme. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.newCaptcha(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**| On public / user registration, it is possible to specify a destination group, so the captcha background image will be taken from this new group&#39;s configured theme.  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

