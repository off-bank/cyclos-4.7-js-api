# Cyclos471Api.TransactionPreview

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confirmationMessage** | **String** | If configured in the payment type, is a message to be shown to the user before confirming the transaction  | [optional] 
**confirmationPasswordInput** | [**PasswordInput**](PasswordInput.md) | If a confirmation password is used, contains the definitions on how to request that password from the user. This confirmation password is required when performing sensible actions. Sometimes this is dynamic, for example, the confirmation might be configured to be used only once per session, or operations like payments may have a limit per day to be without confirmation (pinless).  | [optional] 
**fromAccount** | [**AccountWithOwner**](AccountWithOwner.md) | A reference to the origin account | [optional] 
**totalAmount** | [**BigDecimal**](BigDecimal.md) | The final total transaction amount | [optional] 
**customValues** | [**[CustomFieldValue]**](CustomFieldValue.md) | The list of custom field values, in a detailed view | [optional] 


