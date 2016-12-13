# Cyclos471Api.RecordDataForSearch

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customFields** | [**[CustomFieldDetailed]**](CustomFieldDetailed.md) | The list of custom profile fields that are either to be used as search filter (if its internal name is present on &#x60;fieldsInSearch&#x60;) and / or in the result list (if its internal name is present on &#x60;fieldsInList&#x60;)   | [optional] 
**fieldsInSearch** | **[String]** | The internal names of the custom fields that should be used as search filters (separated fields, not keywords)  | [optional] 
**fieldsInList** | **[String]** | The internal names of the custom fields that will be returned together with each record, and should be shown in the result list  | [optional] 
**basicProfileFields** | [**[BasicProfileFieldInput]**](BasicProfileFieldInput.md) | The list of basic user profile fields that can be used as search filters. Only returned if searching user records.  | [optional] 
**customProfileFields** | [**[CustomFieldDetailed]**](CustomFieldDetailed.md) | The list of custom user profile fields that can be used as search filters. Only returned if searching user records.  | [optional] 


