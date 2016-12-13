# Cyclos471Api.CustomFieldValue

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field** | [**CustomField**](CustomField.md) | The custom field reference | [optional] 
**stringValue** | **String** | The field value if the field type is either &#x60;string&#x60;, &#x60;text&#x60;, &#x60;richText&#x60; or &#x60;url&#x60;.  | [optional] 
**dateValue** | **Date** | The field value if the field type is &#x60;date&#x60;.  | [optional] 
**booleanValue** | **Boolean** | The field value if the field type is &#x60;bool&#x60;.  | [optional] 
**integerValue** | **Number** | The field value if the field type is &#x60;integer&#x60;.  | [optional] 
**decimalValue** | [**BigDecimal**](BigDecimal.md) | The field value if the field type is &#x60;decimal&#x60;.  | [optional] 
**enumeratedValues** | [**[CustomFieldPossibleValue]**](CustomFieldPossibleValue.md) | The field value if the field type is either &#x60;singleSelection&#x60; or &#x60;multiSelection&#x60;. For single selections will either be an empty array or an array with a single elemenet  | [optional] 
**linkedEntityValue** | [**EntityReference**](EntityReference.md) | The field value if the field type is &#x60;linkedEntity&#x60;.  | [optional] 
**dynamicValue** | [**CustomFieldDynamicValue**](CustomFieldDynamicValue.md) | The field value if the field type is &#x60;dynamicSelection&#x60;.  | [optional] 


