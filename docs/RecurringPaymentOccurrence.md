# Cyclos471Api.RecurringPaymentOccurrence

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_number** | **Number** | The occurrence number. | [optional] 
**_date** | **Date** | The occurrence date. | [optional] 
**amount** | [**BigDecimal**](BigDecimal.md) | The installment amount | [optional] 
**status** | [**RecurringPaymentOccurrenceStatusEnum**](RecurringPaymentOccurrenceStatusEnum.md) | The status of a recurring payment occurrence Possible values are: * processed: The occurrence was correctly processed, generating a transfer * failed: The occurrence has failed processing (probably because there was not enough funds in the payer account)  | [optional] 
**by** | [**User**](User.md) | The user that performed an status change. For example, who manually paid, settled or canceled an open installment  | [optional] 
**transferId** | **String** | Only if the installment was processed, contains the internal identifier of the generated transfer.  | [optional] 
**transferDate** | **Date** | The date the transfer was processed. It might happen that the occurrence has first failed, then later processed  | [optional] 


