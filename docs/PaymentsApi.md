# Cyclos471Api.PaymentsApi

All URIs are relative to *https://communities.cyclos.org/wootsapp/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**calculatePerformPaymentInstallments**](PaymentsApi.md#calculatePerformPaymentInstallments) | **GET** /{owner}/payments/installments | Calculates the default installments for a scheduled payment
[**dataForPerformPayment**](PaymentsApi.md#dataForPerformPayment) | **GET** /{owner}/payments/data-for-perform | Returns configuration data for performing a payment
[**performPayment**](PaymentsApi.md#performPayment) | **POST** /{owner}/payments | Performs a payment from the given owner
[**previewPayment**](PaymentsApi.md#previewPayment) | **POST** /{owner}/payments/preview | Previews a payment before performing it


<a name="calculatePerformPaymentInstallments"></a>
# **calculatePerformPaymentInstallments**
> [PerformScheduledPaymentInstallment] calculatePerformPaymentInstallments(owner, to, count, amount, opts)

Calculates the default installments for a scheduled payment

Used to calculate installments for a scheduled payment. Will return an installment every month. When later performing the payment, these can be (optionally) customized (such as changing some due dates or amounts) and used on the payment installments.    

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

var apiInstance = new Cyclos471Api.PaymentsApi();

var owner = "owner_example"; // String | Either an user identification, supporting either the value 'self' (sans quotes) for the currently authenticated user or an identification method for an user, or the value 'system' (sans quotes) for system data. 

var to = "to_example"; // String | The payment destination

var count = 56; // Number | The number of installments

var amount = new Cyclos471Api.BigDecimal(); // BigDecimal | The total scheduled payment amount

var opts = { 
  'fields': ["fields_example"], // [String] | Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: `a,b.b1,c.-c1,c.-c2` will return the fields `a`, `b` (containing only the `b1` field) and `c` (containing all its fields except for `c1` or `c2`).  
  'currency': "currency_example", // String | The payment currency. Used when no `type` is not provided, to narrow the possible payment types by currency. 
  'type': "type_example", // String | The payment type id or qualified internal name (in the form  `fromAccountType.paymentType`). If not provided, will use the first possible type (possibly narrowed by the `currency` parameter). However, if more than one type is available, a validation error will be raised. 
  'firstDate': new Date("2013-10-20T19:20:30+01:00") // Date | The due date of the first installment. If none is provided, it is assumed that the first installment is paid immediately, and others will be with regular 1 month interval 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.calculatePerformPaymentInstallments(owner, to, count, amount, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Either an user identification, supporting either the value &#39;self&#39; (sans quotes) for the currently authenticated user or an identification method for an user, or the value &#39;system&#39; (sans quotes) for system data.  | 
 **to** | **String**| The payment destination | 
 **count** | **Number**| The number of installments | 
 **amount** | **BigDecimal**| The total scheduled payment amount | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 
 **currency** | **String**| The payment currency. Used when no &#x60;type&#x60; is not provided, to narrow the possible payment types by currency.  | [optional] 
 **type** | **String**| The payment type id or qualified internal name (in the form  &#x60;fromAccountType.paymentType&#x60;). If not provided, will use the first possible type (possibly narrowed by the &#x60;currency&#x60; parameter). However, if more than one type is available, a validation error will be raised.  | [optional] 
 **firstDate** | **Date**| The due date of the first installment. If none is provided, it is assumed that the first installment is paid immediately, and others will be with regular 1 month interval  | [optional] 

### Return type

[**[PerformScheduledPaymentInstallment]**](PerformScheduledPaymentInstallment.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dataForPerformPayment"></a>
# **dataForPerformPayment**
> DataForTransaction dataForPerformPayment(owner, opts)

Returns configuration data for performing a payment

Returns configuration data for performing a payment  

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

var apiInstance = new Cyclos471Api.PaymentsApi();

var owner = "owner_example"; // String | Either an user identification, supporting either the value 'self' (sans quotes) for the currently authenticated user or an identification method for an user, or the value 'system' (sans quotes) for system data. 

var opts = { 
  'fields': ["fields_example"], // [String] | Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: `a,b.b1,c.-c1,c.-c2` will return the fields `a`, `b` (containing only the `b1` field) and `c` (containing all its fields except for `c1` or `c2`).  
  'to': "to_example", // String | The payment destination. Either the string `system` for a payment to system or an user identification. 
  'type': "type_example" // String | The payment type id or qualified internal name (in the form `fromAccountType.paymentType`). If no payment type is provided, the possible types will be returned, so the payer can choose. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataForPerformPayment(owner, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Either an user identification, supporting either the value &#39;self&#39; (sans quotes) for the currently authenticated user or an identification method for an user, or the value &#39;system&#39; (sans quotes) for system data.  | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 
 **to** | **String**| The payment destination. Either the string &#x60;system&#x60; for a payment to system or an user identification.  | [optional] 
 **type** | **String**| The payment type id or qualified internal name (in the form &#x60;fromAccountType.paymentType&#x60;). If no payment type is provided, the possible types will be returned, so the payer can choose.  | [optional] 

### Return type

[**DataForTransaction**](DataForTransaction.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="performPayment"></a>
# **performPayment**
> Transaction performPayment(owner, payment, opts)

Performs a payment from the given owner

Performs either a direct or scheduled payment from the owner indicated on the path to the owner specified on the body. The destination user should be informed in the &#x60;subject&#x60; parameter. If the &#x60;subject&#x60; is &#x60;system&#x60;, it will be a payment to a system account. The payment id is returned on the response, and a link to the transaction details is returned on the &#x60;Location&#x60; header. 

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

var apiInstance = new Cyclos471Api.PaymentsApi();

var owner = "owner_example"; // String | Either an user identification, supporting either the value 'self' (sans quotes) for the currently authenticated user or an identification method for an user, or the value 'system' (sans quotes) for system data. 

var payment = new Cyclos471Api.PerformPayment(); // PerformPayment | The perform payment parameters

var opts = { 
  'fields': ["fields_example"], // [String] | Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: `a,b.b1,c.-c1,c.-c2` will return the fields `a`, `b` (containing only the `b1` field) and `c` (containing all its fields except for `c1` or `c2`).  
  'confirmationPassword': "confirmationPassword_example" // String | The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.performPayment(owner, payment, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Either an user identification, supporting either the value &#39;self&#39; (sans quotes) for the currently authenticated user or an identification method for an user, or the value &#39;system&#39; (sans quotes) for system data.  | 
 **payment** | [**PerformPayment**](PerformPayment.md)| The perform payment parameters | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 
 **confirmationPassword** | **String**| The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.  | [optional] 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="previewPayment"></a>
# **previewPayment**
> PaymentPreview previewPayment(owner, payment, opts)

Previews a payment before performing it

Previews a payment or scheduled payment. The actual balance checking is not performed in the preview.  

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

var apiInstance = new Cyclos471Api.PaymentsApi();

var owner = "owner_example"; // String | Either an user identification, supporting either the value 'self' (sans quotes) for the currently authenticated user or an identification method for an user, or the value 'system' (sans quotes) for system data. 

var payment = new Cyclos471Api.PerformPayment(); // PerformPayment | The perform payment parameters

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
apiInstance.previewPayment(owner, payment, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| Either an user identification, supporting either the value &#39;self&#39; (sans quotes) for the currently authenticated user or an identification method for an user, or the value &#39;system&#39; (sans quotes) for system data.  | 
 **payment** | [**PerformPayment**](PerformPayment.md)| The perform payment parameters | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**PaymentPreview**](PaymentPreview.md)

### Authorization

[session](../README.md#session), [basic](../README.md#basic), [accessClient](../README.md#accessClient)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

