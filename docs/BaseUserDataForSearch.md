# Cyclos471Api.BaseUserDataForSearch

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fieldsInSearch** | **[String]** | The internal names of either basic or custom profile fields or which  can be used as search filters (separated fields, not keywords)   | [optional] 
**basicFields** | [**[BasicProfileFieldInput]**](BasicProfileFieldInput.md) | The list of basic profile fields that can be used either as search filters (if the internal names are present in the &#x60;fieldsInSearch&#x60; property) or on the result list (if the internal names are present in the &#x60;fieldsInList&#x60; property)  | [optional] 
**customFields** | [**[CustomFieldDetailed]**](CustomFieldDetailed.md) | The list of custom profile fields that can be used either as search filters (if the internal names are present in the &#x60;fieldsInSearch&#x60; property) or on the result list (if the internal names are present in the &#x60;fieldsInList&#x60; property)  | [optional] 
**groups** | [**[Group]**](Group.md) | The groups the authenticated user can use to filter users. Admins can always filter by groups, while users depend on a permission, which can be to only view group sets, only groups or none.  | [optional] 
**defaultGroups** | **[String]** | The internal names (or ids, if missing) of the groups which should be presented by default on user search  | [optional] 
**searchByDistanceData** | [**SearchByDistanceData**](SearchByDistanceData.md) | Data for searching users by distance | [optional] 


