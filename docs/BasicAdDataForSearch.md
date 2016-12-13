# Cyclos471Api.BasicAdDataForSearch

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**visibleKinds** | [**[AdKind]**](AdKind.md) | The advertisement kinds that can be searched by the authenticated user Possibles values for each array element are: * simple: A simple advertisement that can be viewed, but not directly bought * webshop: An advertisement that is part of an web-shop. Can be bought, there is stock management, etc.  | [optional] 
**categories** | [**[AdCategoryWithChildren]**](AdCategoryWithChildren.md) | The advertisement categoriesn each with its children, forming a tree  | [optional] 
**customFields** | [**[CustomFieldDetailed]**](CustomFieldDetailed.md) | The list of custom profile fields that are either to be used as search filter (if its internal name is present on either  &#x60;fieldsInBasicSearch&#x60; or &#x60;fieldsInAdvancedSearch&#x60;) and / or in the result list (if its internal name is present on &#x60;fieldsInList&#x60;).   | [optional] 
**fieldsInBasicSearch** | **[String]** | The internal names of the custom fields that should be used as search filters in the basic section (separated fields, not keywords)  | [optional] 
**fieldsInAdvancedSearch** | **[String]** | The internal names of the custom fields that should be used as search filters in the advanced section (separated fields, not keywords)  | [optional] 
**fieldsInList** | **[String]** | The internal names of the custom fields that will be returned together with each advertisement, and should be shown in the result list. This fature is planned, but not yet available.  | [optional] 
**basicProfileFields** | [**[BasicProfileFieldInput]**](BasicProfileFieldInput.md) | The list of basic user profile fields that can be used as search filters. Only returned if searching user advertisements.  | [optional] 
**customProfileFields** | [**[CustomFieldDetailed]**](CustomFieldDetailed.md) | The list of custom user profile fields that can be used as search filters. Only returned if searching user advertisements.  | [optional] 
**currencies** | [**[Currency]**](Currency.md) | The currencies the authenticated user may use to filter by price   | [optional] 
**searchByDistanceData** | [**SearchByDistanceData**](SearchByDistanceData.md) | Data for searching advertisements by distance | [optional] 


