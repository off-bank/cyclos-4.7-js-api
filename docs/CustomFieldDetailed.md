# Cyclos471Api.CustomFieldDetailed

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**informationText** | **String** | Additional text that can be shown to the user as a hint of this field  | [optional] 
**size** | [**CustomFieldSizeEnum**](CustomFieldSizeEnum.md) | The size of the widget that should be rendered Possible values are: * tiny: A very small widget * small: A small widget * medium: A medium widget * large: A large widget * full: The widget should occupy 100% of the available area  | [optional] 
**pattern** | **String** | The mask to be applied to string values. Optional. | [optional] 
**required** | **Boolean** | Indicates whether this field is required | [optional] 
**allSelectedLabel** | **String** | The label to be shown when all values are selected for a  multi selection field.  | [optional] 
**defaultValue** | **String** | The value that should be suggested as default. For multi selection will be a comma-separated string with possible values ids or internal names.  | [optional] 
**possibleValueCategories** | [**[EntityReference]**](EntityReference.md) | Only applicable when the custom field is enumerated (single or multi select). Contains the possible value categories.  | [optional] 
**possibleValues** | [**[CustomFieldPossibleValue]**](CustomFieldPossibleValue.md) | Only applicable when the custom field is enumerated (single or multi selection). Contains the possible values for selection. Each value may or may not have a category. When they have, it will be a string pointing to the internal name (if available) or id of the possible value category, which can be looked up in the categories property.  | [optional] 
**dynamicValues** | [**[CustomFieldDynamicValue]**](CustomFieldDynamicValue.md) | Only applicable when the custom field is dynamic selection. Contains the script-generated possible values.  | [optional] 


