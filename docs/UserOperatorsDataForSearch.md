# Cyclos471Api.UserOperatorsDataForSearch

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canCreateNew** | **Boolean** | Indicates whether the authenticated user can create more operators  for the specified user  | [optional] 
**groups** | [**[EntityReference]**](EntityReference.md) | The operator groups this user owns | [optional] 
**fieldsInList** | **[String]** | The internal names of either basic or custom profile fields that are configured to be shown on the list. This actually defines the fields that will be loaded on the result. It is possible that no fields are configured to be returned on list. In this case, the result objects will have the &#39;display&#39; property loaded with what is configured to be the user formatting field(s).   | [optional] 
**basicFields** | [**[BasicProfileFieldInput]**](BasicProfileFieldInput.md) | The basic profile fields in the result list | [optional] 
**customFields** | [**[CustomFieldDetailed]**](CustomFieldDetailed.md) | The custom profile fields in the result list | [optional] 


