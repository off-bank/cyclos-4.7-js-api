# Cyclos471Api.Transfer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_date** | **Date** | The transfer date and time | [optional] 
**amount** | [**BigDecimal**](BigDecimal.md) | The transfer amount. May be positive or negative. | [optional] 
**type** | [**EntityReference**](EntityReference.md) | The transfer type | [optional] 
**currency** | [**Currency**](Currency.md) | The transfer currency | [optional] 
**from** | [**AccountWithOwner**](AccountWithOwner.md) | The account that sent the balance | [optional] 
**to** | [**AccountWithOwner**](AccountWithOwner.md) | The account that received the balance | [optional] 
**transactionNumber** | **String** | The transaction number identifying this balance transfer. The currency configuration has the definition on whether transaction numbers are enabled and which format they have.  | [optional] 
**statuses** | [**[TransferStatus]**](TransferStatus.md) | Contains the current status for each status flow this transfer has  | [optional] 


