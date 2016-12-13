# Cyclos471Api.PasswordStatusAndPermissions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**PasswordType**](PasswordType.md) | The password type | [optional] 
**status** | [**PasswordStatusEnum**](PasswordStatusEnum.md) | The password status Possible values are: * active: The password is active and valid * neverCreated: The password has never been created for the user * pending: The password was manually allowed (by admins) for the user to generate it, but it was not yet generated (never used for manual passwords) * disabled: The password has been manually disabled * reset: The password has been reset (can be used for login but must then be changed) * temporarilyBlocked: The password is temporarily blocked by exceeding the maximum attempts * indefinitelyBlocked: The password is blocked by exceeding the maximum attempts until it is manually unblocked * expired: The password is expired  | [optional] 
**_date** | **Date** | The date this status took place | [optional] 
**permissions** | [**PasswordPermissions**](PasswordPermissions.md) | The permissions over actions the authenticated user can perform on this password  | [optional] 


