# Cyclos471Api.PhoneBasicData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extensionEnabled** | **Boolean** | Only returned for land line phones. Indicates whether the extension is enabled.  | [optional] 
**smsEnabled** | **Boolean** | Only returned for mobile phones. Indicates whether outbound SMS is enabled in Cyclos  | [optional] 
**confirmationPasswordInput** | [**PasswordInput**](PasswordInput.md) | If a confirmation password is used, contains the definitions on how to request that password from the user. This confirmation password is required when performing sensible actions. Sometimes this is dynamic, for example, the confirmation might be configured to be used only once per session, or operations like payments may have a limit per day to be without confirmation (pinless).  | [optional] 


