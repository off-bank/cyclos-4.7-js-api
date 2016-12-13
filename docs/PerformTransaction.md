# Cyclos471Api.PerformTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subject** | **String** | The payment destination (in case of perform payment) or payer (in case of receive payment). Either an user principal (id, login name,  etc) or the word &#x60;system&#x60; when the payment is to be performed to / from a system account.   | [optional] 
**amount** | [**BigDecimal**](BigDecimal.md) | The transaction amount | [optional] 
**description** | **String** | The (optional) transaction description | [optional] 
**currency** | **String** | The currency id or internal name. Only used when not specifying a payment type. In this case, will narrow the search for the it.  | [optional] 
**type** | **String** | The payment type, either the id or qualified internal name (in the form &#x60;fromAccountType.paymentType&#x60;). If no payment type is specified, if a single one is possible, it will be used. If a currency is specified, it will be taken into account in order to find the payment type. If, however, there would be multiple possibilities, a validation error is returned.  | [optional] 
**customValues** | **{String: String}** | Holds the custom field values, keyed by field internal name or id. The format of the value depends on the custom field type.  | [optional] 
**nfcChallence** | **String** | If this transacction is used with a NFC token, must be the challenge (as returned by the server) encrypted by the NFC chip, encoded in HEX form (2 hex chars per byte).  | [optional] 


