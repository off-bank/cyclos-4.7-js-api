# Cyclos471Api.InputError

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | [**InputErrorCode**](InputErrorCode.md) | Error codes for 422 Unprocessable entity HTTP status. It means there was an error with the input sent to the operation.  Possible values are: * validation: One or more of the fields sent contains invalid values * maxItems: There was an attempt to create an item, but the maximum number of allowed items was exceeded * queryParse: A full-text query keywords contained an invalid text * dataConversion: Some data conversion has failed. For example, when sending a date with an invalid format   | [optional] 
**generalErrors** | **[String]** | A list of errors that cannot be attributed to a specific property. Only returned if &#x60;code&#x60; is &#x60;validation&#x60;.  | [optional] 
**propertyErrors** | **{String: [String]}** | An object keyed by property name, whose values are lists of errors for that property. Only returned if &#x60;code&#x60; is &#x60;validation&#x60;.  | [optional] 
**customFieldErrors** | **{String: [String]}** | An object keyed by custom field internal name, whose values are lists of errors for that custom field. Only returned if &#x60;code&#x60; is &#x60;validation&#x60;.  | [optional] 
**maxItems** | **Number** | The maximum allowed items. Only returned if &#x60;code&#x60; is &#x60;maxItems&#x60;.  | [optional] 
**value** | **String** | The value that failed conversion to the expected data type, or the original full-text query keywords that failed parsing. Only returned if &#x60;code&#x60; is either &#x60;dataConversion&#x60; or &#x60;queryParse&#x60;.  | [optional] 


