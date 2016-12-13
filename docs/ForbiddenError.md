# Cyclos471Api.ForbiddenError

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | [**ForbiddenErrorCode**](ForbiddenErrorCode.md) | Error codes for 403 Forbidden HTTP status.  Possible values are: * expiredPassword: The password being used has expired * illegalAction: Attempt to perform an action that is not allowed on this context * inaccessibleChannel: This channel cannot be accessed by the user  * invalidPassword: The password being used is invalid (normally the confirmation password) * operatorWithPendingAgreements: The operator cannot access because his owner member has pending agreements * permissionDenied: The operation was denied because a required permission was not granted * temporarilyBlocked: The password was temporarily blocked by exceeding the allowed attempts * indefinitelyBlocked: The password was indefinitely blocked by exceeding the allowed attempts   | [optional] 


