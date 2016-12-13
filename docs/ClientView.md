# Cyclos471Api.ClientView

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**ClientStatusEnum**](ClientStatusEnum.md) | The status of an access client Possible values are: * unassigned: The access client is unassigned (disconnected) from an (remote) application * active: The access client is active, and can operate normally * blocked: The access client is blocked and cannot be used until it is unblocked * removed: The access client was removed, but had transactions, so couldn&#39;t be physically removed  | [optional] 
**activationDate** | **Date** | The date the client was activated | [optional] 
**confirmationPasswordInput** | [**PasswordInput**](PasswordInput.md) | Data for a confirmation password input in case of an action  | [optional] 
**canGetActivationCode** | **Boolean** | Can the authenticated user get the activation code, to later activate (assign) this client?  | [optional] 
**canUnassign** | **Boolean** | Can the authenticated user unassign this client? | [optional] 
**canBlock** | **Boolean** | Can the authenticated user block this client? | [optional] 
**canUnblock** | **Boolean** | Can the authenticated user unblock this client? | [optional] 


