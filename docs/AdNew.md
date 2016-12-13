# Cyclos471Api.AdNew

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**AdKind**](AdKind.md) | The advertisement kind to be created. Currently only &#x60;simple&#x60; advertisements can be managed through this API. The default is &#x60;simple&#x60;. Possible values are: * simple: A simple advertisement that can be viewed, but not directly bought * webshop: An advertisement that is part of an web-shop. Can be bought, there is stock management, etc.  | [optional] 
**submitForAuthorization** | **Boolean** | Only useful when authorization is required (&#x60;AdDataForNew&#x60;/&#x60;AdDataForEdit&#x60;.&#x60;requiresAuthorization&#x60; flag is &#x60;true&#x60;). Indicates whether the advertisement will be initially submitted for authorization (status &#x3D; &#x60;pending&#x60;) or kept in the &#x60;draft&#x60; status.   | [optional] 
**hidden** | **Boolean** | Only useful when authorization is not required (&#x60;AdDataForNew&#x60;/&#x60;AdDataForEdit&#x60;.&#x60;requiresAuthorization&#x60; flag is &#x60;false&#x60;). Indicates whether the initial status for the advertisement should be &#x60;hidden&#x60; (when &#x60;true&#x60;) or &#x60;active&#x60; (when &#x60;false&#x60;).   | [optional] 
**images** | **[String]** | The ids of previously uploaded user temporary images to be initially used as advertisement images  | [optional] 


