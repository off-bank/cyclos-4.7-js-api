# Cyclos471Api.ActivateClientResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **String** | The generated access client token. It should be passed using the &#x60;Access-Client-Token&#x60; header. If a prefix was informed on activation, it will not be returned, here, but should be sent prepending the returned token  | [optional] 
**accessClient** | [**EntityReference**](EntityReference.md) | A reference to the activated access client | [optional] 
**accessClientType** | [**EntityReference**](EntityReference.md) | A reference to the access client type | [optional] 


