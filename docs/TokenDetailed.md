# Cyclos471Api.TokenDetailed

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**TokenStatusEnum**](TokenStatusEnum.md) | The possible statuses for a token Possible values are: * unassigned: The token is not assigned to an user. * pending: The token has been assigned to an user, but it&#39;s still pending for activation. * active: The token is active and can be used. * blocked: The token is blocked from being used. * canceled: The token is canceled and cannot be used. * activationExpired: The token has exceeded the activation deadline. * expired: The token has exceeded the expiration date.  | [optional] 
**user** | [**User**](User.md) | The assigned user. Only if status is not &#x60;unassigned&#x60;. | [optional] 
**activationDate** | **Date** | When the owner user activated the token.  | [optional] 
**creationDate** | **Date** | The creation date. | [optional] 
**expiryDate** | **Date** | The expiration date. Only if the corresponding token type defines an expiration period. | [optional] 


