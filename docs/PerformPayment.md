# Cyclos471Api.PerformPayment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scheduling** | [**PaymentSchedulingEnum**](PaymentSchedulingEnum.md) | Determines how a payment is scheduled. When not specified, direct payments are performed. Possible values are: * direct: The payment won&#39;t be scheduled, but paid directly * scheduled: The payment will be scheduled, either to a single future date or multiple installments * recurring: The payment will be recurring, repeated either by a limited number of occurrences or until cancel  | [optional] 
**installmentsCount** | **Number** | Represents the number of installments. When not specified, assumes a single installment. Used only if &#x60;scheduling&#x60; is &#x60;scheduled&#x60;. Can be used together with &#x60;installmentsCount&#x60; as an alternative to providing individual &#x60;installments&#x60; definitions.  | [optional] 
**firstInstallmentDate** | **Date** | Represents the first installment date. When not specified, assumes the first installment is processed instantly. Used only if &#x60;scheduling&#x60; is &#x60;scheduled&#x60;. Can be used together with &#x60;installmentsCount&#x60; as an alternative to providing individual &#x60;installments&#x60; definitions.  | [optional] 
**installments** | [**[PerformScheduledPaymentInstallment]**](PerformScheduledPaymentInstallment.md) | An array containing individual installments definitions, allowing full control over generated installments. Used only if &#x60;scheduling&#x60; is &#x60;scheduled&#x60;.  | [optional] 
**occurrencesCount** | **Number** | Represents the number of occurrences in a recurring payment. When not provided, the payment will be repeated until it is manually canceled. Used only if &#x60;scheduling&#x60; is &#x60;recurring&#x60;.  | [optional] 
**firstOccurrenceDate** | **Date** | Represents the first occurrence date for a recurring payment. If none is given, it is assumed that the first occurrence is immediate. Used only if &#x60;scheduling&#x60; is &#x60;recurring&#x60;.  | [optional] 
**occurrenceInterval** | [**TimeInterval**](TimeInterval.md) | Defines the interval between payment occurrences. If none is given, it is assumed 1 month between occurrences. Used only if &#x60;scheduling&#x60; is &#x60;recurring&#x60;.  | [optional] 


