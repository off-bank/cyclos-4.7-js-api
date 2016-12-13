# Cyclos471Api.POSApi

All URIs are relative to *https://communities.cyclos.org/wootsapp/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**calculateReceivePaymentInstallments**](POSApi.md#calculateReceivePaymentInstallments) | **GET** /pos/installments | Calculates the default installments for a scheduled payment
[**dataForReceivePayment**](POSApi.md#dataForReceivePayment) | **GET** /pos/data-for-pos | Returns configuration data for receiving a payment (POS)
[**previewReceivePayment**](POSApi.md#previewReceivePayment) | **POST** /pos/preview | Previews a POS payment before receiving it
[**receivePayment**](POSApi.md#receivePayment) | **POST** /pos | Receives a payment (POS)
[**receivePaymentOtp**](POSApi.md#receivePaymentOtp) | **POST** /pos/otp | Generates a new One-Time-Password (OTP) for a pos payment


<a name="calculateReceivePaymentInstallments"></a>
# **calculateReceivePaymentInstallments**
> [PerformScheduledPaymentInstallment] calculateReceivePaymentInstallments(from, count, amount, opts)

Calculates the default installments for a scheduled payment

Used to calculate installments for a scheduled payment. Will return an installment every month. When later receiving the payment, these can be (optionally) customized (such as changing some due dates or amounts) and used on the payment installments.    

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.POSApi();

var from = "from_example"; // String | The payment origin

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
apiInstance.calculateReceivePaymentInstallments(from, count, amount, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **String**| The payment origin | 
 **count** | **Number**| The number of installments | 
 **amount** | **BigDecimal**| The total scheduled payment amount | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 
 **currency** | **String**| The payment currency. Used when no &#x60;type&#x60; is not provided, to narrow the possible payment types by currency.  | [optional] 
 **type** | **String**| The payment type id or qualified internal name (in the form  &#x60;fromAccountType.paymentType&#x60;). If not provided, will use the first possible type (possibly narrowed by the &#x60;currency&#x60; parameter). However, if more than one type is available, a validation error will be raised.  | [optional] 
 **firstDate** | **Date**| The due date of the first installment. If none is provided, it is assumed that the first installment is paid immediately, and others will be with regular 1 month interval  | [optional] 

### Return type

[**[PerformScheduledPaymentInstallment]**](PerformScheduledPaymentInstallment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dataForReceivePayment"></a>
# **dataForReceivePayment**
> DataForTransaction dataForReceivePayment(opts)

Returns configuration data for receiving a payment (POS)

Returns configuration data for receiving a payment in POS operation  

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.POSApi();

var opts = { 
  'fields': ["fields_example"], // [String] | Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: `a,b.b1,c.-c1,c.-c2` will return the fields `a`, `b` (containing only the `b1` field) and `c` (containing all its fields except for `c1` or `c2`).  
  'from': "from_example", // String | Identification of the payer user
  'type': "type_example" // String | The payment type id or qualified internal name (in the form `fromAccountType.paymentType`). If no payment type is provided, the possible types will be returned, so the payer can choose. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataForReceivePayment(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 
 **from** | **String**| Identification of the payer user | [optional] 
 **type** | **String**| The payment type id or qualified internal name (in the form &#x60;fromAccountType.paymentType&#x60;). If no payment type is provided, the possible types will be returned, so the payer can choose.  | [optional] 

### Return type

[**DataForTransaction**](DataForTransaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="previewReceivePayment"></a>
# **previewReceivePayment**
> PaymentPreview previewReceivePayment(payment, opts)

Previews a POS payment before receiving it

Previews a payment or scheduled payment. The actual balance checking is not performed in the preview.  

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.POSApi();

var payment = new Cyclos471Api.PerformPayment(); // PerformPayment | The receive payment parameters

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
apiInstance.previewReceivePayment(payment, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment** | [**PerformPayment**](PerformPayment.md)| The receive payment parameters | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 

### Return type

[**PaymentPreview**](PaymentPreview.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="receivePayment"></a>
# **receivePayment**
> Transaction receivePayment(payment, opts)

Receives a payment (POS)

Receives either a direct or scheduled payment in a POS operation for the authenticated user. The payer user should be informed in the &#x60;subject&#x60; parameter. The payment id is returned on the response, and a link to the transaction details is returned on the &#x60;Location&#x60; header. 

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.POSApi();

var payment = new Cyclos471Api.PerformPayment(); // PerformPayment | The receive payment parameters

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
apiInstance.receivePayment(payment, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment** | [**PerformPayment**](PerformPayment.md)| The receive payment parameters | 
 **fields** | [**[String]**](String.md)| Select which fields to include on returned data. If nothing is set, all object fields are returned. Unprefixed field names will be handled like a whitelist (only listed fields will be included), while names starting with a minus (-) or exclamation mark (!) will be handled as blacklist (listed fields will not be included). This works for nesting as well. For example: &#x60;a,b.b1,c.-c1,c.-c2&#x60; will return the fields &#x60;a&#x60;, &#x60;b&#x60; (containing only the &#x60;b1&#x60; field) and &#x60;c&#x60; (containing all its fields except for &#x60;c1&#x60; or &#x60;c2&#x60;).   | [optional] 
 **confirmationPassword** | **String**| The password used to confirm this action, if needed. The actual password type, if any, depends on the Cyclos configuration for the current channel.  | [optional] 

### Return type

[**Transaction**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="receivePaymentOtp"></a>
# **receivePaymentOtp**
> receivePaymentOtp(medium, payment)

Generates a new One-Time-Password (OTP) for a pos payment

Sends a new OTP for the customer of the POS for a payment. The OTP belongs to the payer, not the authenticated user. The entire payment object must be sent on the request body. This is the same object which is sent both either preview or actually receive the payment.  

### Example
```javascript
var Cyclos471Api = require('cyclos_471_api');

var apiInstance = new Cyclos471Api.POSApi();

var medium = "medium_example"; // String | The medium the user wants to receive the otp Possible values are: * email: The user will receive an email with the information * sms: The user will receive a sms with the information (only if there is at least one phone enabled for sms) 

var payment = new Cyclos471Api.PerformPayment(); // PerformPayment | The receive payment parameters


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.receivePaymentOtp(medium, payment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **medium** | **String**| The medium the user wants to receive the otp Possible values are: * email: The user will receive an email with the information * sms: The user will receive a sms with the information (only if there is at least one phone enabled for sms)  | 
 **payment** | [**PerformPayment**](PerformPayment.md)| The receive payment parameters | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

