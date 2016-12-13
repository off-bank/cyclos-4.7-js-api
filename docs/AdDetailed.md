# Cyclos471Api.AdDetailed

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | The advertisement description content, formatted as HTML  | [optional] 
**owner** | [**User**](User.md) | The user which owns this advertisement | [optional] 
**status** | [**AdStatusEnum**](AdStatusEnum.md) | The possible status for an advertisement Possible values are: * draft: In draft status, only the owner can see and edit the advertisement. This status is only possible if the system is configured to require authorizations. * pending: The advertisement is pending for an authorization and cannot be seen by other users. This status is only possible if the system is configured to require authorizations. * active: The advertisement is published and can be seen by other users. * scheduled: The advertisement has a future publication period, and cannot be seen by other users.  * expired: The advertisement publication period has already expired, and cannot be seen by other users. * hidden: The advertisement is manually hidden from other users * disabled: The advertisement is disabled because the owner no longer has access to the currency of the advertisement. It cannot be seen by other users.  | [optional] 
**publicationPeriod** | [**DatePeriod**](DatePeriod.md) | The date period this advertisement is published | [optional] 
**price** | [**BigDecimal**](BigDecimal.md) | The regular price | [optional] 


