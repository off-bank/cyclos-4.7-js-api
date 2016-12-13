# Cyclos471Api.RunOperationResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resultType** | [**OperationResultTypeEnum**](OperationResultTypeEnum.md) | The kind of data a custom operation execution is expected to return Possible values are: * notification: Returns a text to be displayed as a simple notification * plainText: Returns a plain text to be displayed in a page, and optionally printed * richText: Returns an HTML formatted text to be displayed in a page, and optionally printed * fileDownload: Returns a file, which can be downloaded * url: The result should be an URL to which the client should be redirected to * externalRedirect: The main execution returns an URL for another service.   Then a second execution is expected when this other service redirects the client back to Cyclos * resultPage: Returns a page or list of results, which should be displayed in a table like any other search / list  | [optional] 
**title** | **String** | The text title. May be returned only if &#x60;resultType&#x60; is either &#x60;plainText&#x60;, &#x60;richText&#x60; or &#x60;resultPage&#x60;.  | [optional] 
**content** | **String** | The execution result content. Only returned if &#x60;resultType&#x60; is either &#x60;plainText&#x60; or  &#x60;richText&#x60;.  | [optional] 
**notification** | **String** | The execution result as string that should be shown as a notification. Only returned if &#x60;resultType&#x60; is &#x60;notification&#x60;.  | [optional] 
**notificationLevel** | [**NotificationLevelEnum**](NotificationLevelEnum.md) | Only returned if &#x60;resultType&#x60; is &#x60;notification&#x60;. Possible values are: * information: A general informative message * warning: A warning message, when special caution is required * error: An error message, when some operation went wrong    | [optional] 
**url** | **String** | The execution result as an URL, to which the client should be redirected. Only returned if &#x60;resultType&#x60; is either &#x60;externalRedirect&#x60; or &#x60;url&#x60;.  | [optional] 
**columns** | [**[RunOperationResultColumn]**](RunOperationResultColumn.md) | Contains the definitions for each column in the result. Only returned if &#x60;resultType&#x60; is &#x60;resultPage&#x60;.   | [optional] 
**rows** | [**[RunOperationResultRow]**](RunOperationResultRow.md) | Each row is an object containing the cells for that row, keyed by each column&#39;s &#x60;property&#x60;. Only returned if &#x60;resultType&#x60; is &#x60;resultPage&#x60;.  | [optional] 


