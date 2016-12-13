# Cyclos471Api.PaymentError

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | [**PaymentErrorCode**](PaymentErrorCode.md) | Application-specific error codes for a payment error  Possible values are: * insufficientBalance: The account selected for the payment does not have enough balance * dailyAmountExceeded: The maximum amount allowed per day was exceeded.   * weeklyAmountExceeded: The maximum amount allowed per week was exceeded. * monthlyAmountExceeded: The maximum amount allowed per month was exceeded. * dailyPaymentsExceeded: The maximum count of payments allowed per day was exceeded. * weeklyPaymentsExceeded: The maximum count of payments allowed per week was exceeded. * monthlyPaymentsExceeded: The maximum count of payments allowed per month was exceeded. * timeBetweenPaymentsNotMet: The minimum time between payments was not met. * destinationUpperLimitReached: The upper balance limit of the destination account was exceeded. * pos: A POS exception has happened when performing this payment. See the &#x60;posError&#x60; field for more details.    * unexpected: An unexpected error has occurred. See the &#x60;exceptionType&#x60; and &#x60;exceptionMessage&#x60; fields for the internal information.  | [optional] 
**currency** | [**Currency**](Currency.md) | Currency reference. Only if &#x60;code&#x60; is &#x60;dailyAmountExceeded&#x60;, &#x60;weeklyAmountExceeded&#x60; or &#x60;monthlyAmountExceeded&#x60;            | [optional] 
**maxAmount** | [**BigDecimal**](BigDecimal.md) | The maximum amount. Only if &#x60;code&#x60; is &#x60;dailyAmountExceeded&#x60;, &#x60;weeklyAmountExceeded&#x60; or &#x60;monthlyAmountExceeded&#x60;            | [optional] 
**maxPayments** | **Number** | The maximum payments count. Only if &#x60;code&#x60; is &#x60;dailyPaymentsExceeded&#x60;, &#x60;weeklyPaymentsExceeded&#x60; or &#x60;monthlyPaymentsExceeded&#x60;            | [optional] 
**posError** | [**PosError**](PosError.md) | The POS error details. Only if &#x60;code&#x60; is &#x60;pos&#x60;            | [optional] 


