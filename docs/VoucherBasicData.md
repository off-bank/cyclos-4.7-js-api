# Cyclos471Api.VoucherBasicData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | The voucher title | [optional] 
**description** | **String** | The voucher description | [optional] 
**type** | [**VoucherType**](VoucherType.md) | The voucher type | [optional] 
**customFields** | [**[CustomFieldDetailed]**](CustomFieldDetailed.md) | The custom fields associated with this voucher type  | [optional] 
**confirmationPasswordInput** | [**PasswordInput**](PasswordInput.md) | If a confirmation password is used, contains the definitions on how to request that password from the user. This confirmation password is required when performing sensible actions. Sometimes this is dynamic, for example, the confirmation might be configured to be used only once per session, or operations like payments may have a limit per day to be without confirmation (pinless).  | [optional] 


