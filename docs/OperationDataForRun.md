# Cyclos471Api.OperationDataForRun

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**informationText** | **String** | A message to be displayed to the user when displaying the parameters form  | [optional] 
**confirmationText** | **String** | A message to be shown to the user in order to confirm the operation execution  | [optional] 
**customSubmitLabel** | **String** | A label to be shown on the submit button. When not returned, a generic &#39;Submit&#39; should be displayed.  | [optional] 
**formParameters** | [**[CustomFieldDetailed]**](CustomFieldDetailed.md) | The custom fields which are used in a form as parameters for the operation execution.  | [optional] 
**hasFileUpload** | **Boolean** | Indicates whether this operation accepts a file upload as input  | [optional] 
**confirmationPasswordInput** | [**PasswordInput**](PasswordInput.md) | If a confirmation password is used, contains the definitions on how to request that password from the user. This confirmation password is required when performing sensible actions. Sometimes this is dynamic, for example, the confirmation might be configured to be used only once per session, or operations like payments may have a limit per day to be without confirmation (pinless).  | [optional] 
**resultType** | [**OperationResultTypeEnum**](OperationResultTypeEnum.md) | The kind of data a custom operation execution is expected to return Possible values are: * notification: Returns a text to be displayed as a simple notification * plainText: Returns a plain text to be displayed in a page, and optionally printed * richText: Returns an HTML formatted text to be displayed in a page, and optionally printed * fileDownload: Returns a file, which can be downloaded * url: The result should be an URL to which the client should be redirected to * externalRedirect: The main execution returns an URL for another service.   Then a second execution is expected when this other service redirects the client back to Cyclos * resultPage: Returns a page or list of results, which should be displayed in a table like any other search / list  | [optional] 
**rowAction** | [**OperationRowActionEnum**](OperationRowActionEnum.md) | The action that should be performed when the user clicks a row in the results table Possible values are: * url: Navigate to an arbitrary URL, which is set in the custom operation itself * location: Navigate to a standard Cyclos location * operation: Run an internal custom operation, which is set on the custom operation itself  | [optional] 
**allowExport** | **Boolean** | Does this operation allows exporting the results as CSV? Only returned if &#x60;resultType&#x60;  is &#x60;resultPage&#x60;.  | [optional] 
**allowPrint** | **Boolean** | Does this operation allows printing the results as PDF? Only returned if &#x60;resultType&#x60; is &#x60;resultPage&#x60;.  | [optional] 
**searchAutomatically** | **Boolean** | Should the operation be immediately executed by the third party client software when first presenting the form to the user  (when &#x60;true&#x60;) or only when the user clicks submit (when &#x60;false&#x60;)? Only returned if &#x60;resultType&#x60; is &#x60;resultPage&#x60;.  | [optional] 
**rowLocation** | **String** | The location to which the client should be redirected when selecting a row in the results table. Only returned if &#x60;resultType&#x60; is &#x60;resultPage&#x60; and &#x60;rowAction&#x60; is &#x60;location&#x60;.  | [optional] 
**rowOperation** | [**Operation**](Operation.md) | The custom operation that should be executed when clicking a row. Only returned if &#x60;resultType&#x60; is &#x60;resultPage&#x60; and &#x60;rowAction&#x60; is &#x60;operation&#x60;.  | [optional] 
**rowUrl** | **String** | The URL the client should be redirected when clicking a row. Only returned if &#x60;resultType&#x60; is &#x60;resultPage&#x60; and &#x60;rowAction&#x60; is &#x60;url&#x60;.  | [optional] 


