# Cyclos471Api.UserBasicData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emailRequired** | **Boolean** | Indicates whether the e-mail is required | [optional] 
**profileFieldActions** | [**{String: ProfileFieldActions}**](ProfileFieldActions.md) | An object, keyed by profile field internal name (either one of the basic profile fields or custom fields), containing other objects that defines the allowed actions over these profile fields  | [optional] 
**customFields** | [**[CustomFieldDetailed]**](CustomFieldDetailed.md) | The available custom field definitions | [optional] 
**confirmationPasswordInput** | [**PasswordInput**](PasswordInput.md) | If a confirmation password is used, contains the definitions on how to request that password from the user. This confirmation password is required when performing sensible actions. Sometimes this is dynamic, for example, the confirmation might be configured to be used only once per session, or operations like payments may have a limit per day to be without confirmation (pinless).  | [optional] 


