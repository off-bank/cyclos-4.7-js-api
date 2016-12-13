# Cyclos471Api.RunOperation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formParameters** | **{String: String}** | Holds the form field values, keyed by field internal name or id. The format of the value depends on the custom field type.  | [optional] 
**confirmationPassword** | **String** | If the custom operation requires confirmation password, the &#x60;OperationDataForRun.confirmationPasswordInput&#x60; will contain the data for inputting the confirmation password. When such value is present, the password value should be provided in this property.  | [optional] 
**page** | **Number** | When running a custom operation with &#x60;resultType&#x60; &#x3D; &#x60;resultPage&#x60;, determines the current page offset. Whether this is implemented depends on the script code itself.  | [optional] 
**pageSize** | **Number** | When running a custom operation with &#x60;resultType&#x60; &#x3D; &#x60;resultPage&#x60;, determines the number of results per page. Whether this is implemented depends on the script code itself.  | [optional] 
**pageContext** | [**OperationPageContextEnum**](OperationPageContextEnum.md) | Only when running a custom operation with &#x60;resultType&#x60; &#x3D; &#x60;resultPage&#x60;. Possible values are: * page: Normal search, returning the data as rows in the result * pdf: Export results as printable PDF * csv: Export results as Comma-Separated-Values (CSV)  | [optional] 


