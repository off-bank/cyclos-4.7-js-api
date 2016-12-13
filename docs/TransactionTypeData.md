# Cyclos471Api.TransactionTypeData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | [**Currency**](Currency.md) | The payment type currency | [optional] 
**fixedAmount** | [**BigDecimal**](BigDecimal.md) | The only allowed amount iff the payment type uses a fixed amount  | [optional] 
**allowsRecurringPayments** | **Boolean** | Can payments of this type be made recurring?  | [optional] 
**maxInstallments** | **Number** | The maximum allowed installments. If it is zero, no kind of scheduled payments is allowed. If it is 1, a single future date can be used.  | [optional] 
**requiresDescription** | **Boolean** | The transaction description can be either required, or optional, depending on this setting. | [optional] 
**customFields** | [**[CustomFieldDetailed]**](CustomFieldDetailed.md) | The custom fields related to this payment type | [optional] 
**aRate** | [**BigDecimal**](BigDecimal.md) | The balance aging counter used for this payment | [optional] 
**dRate** | [**BigDecimal**](BigDecimal.md) | The balance maturity used for this payment | [optional] 
**dRateCreationValue** | [**BigDecimal**](BigDecimal.md) | The initial value for the balance maturity on this payment type  | [optional] 
**limitedAwaitingAuthorization** | **Boolean** |  | [optional] 
**noNegativesMaturityPolicy** | **Boolean** |  | [optional] 
**maturityPolicy** | [**MaturityPolicyEnum**](MaturityPolicyEnum.md) | Indicates how a this payment type restricts payments based on the balance maturity Possible values are: * always: The payment can always be performed, regardless its maturity * history: It the balance maturity ever reached zero in the past, that balance can be used on payment. If later on the maturity went above zero, that new balance cannot be used. Is normally used in conjunction with the maturity table, so the user can pick the balance from past maturity * zero: The payment can only be performed if the current maturity is zero  | [optional] 
**maxAmountByMaturityPolicy** | [**BigDecimal**](BigDecimal.md) | The maximum amount that can be performed when &#x60;maturityPolicy&#x60; is &#x60;history&#x60;. It corresponds to the maturity table entry indicated by &#x60;maturityTableWinnerId&#x60;.  | [optional] 
**maturityTableWinnerId** | **String** | When &#x60;maturityPolicy&#x60; is &#x60;history&#x60;, contains the id of the maturity table entry that granted   | [optional] 


