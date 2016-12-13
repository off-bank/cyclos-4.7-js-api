# Cyclos471Api.ChangePassword

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**oldPassword** | **String** | The current password value. Required when the user is changing his own password. Not used when admins / brokers are changing the password of an user they manage.  | [optional] 
**newPassword** | **String** | The new password value. Required. | [optional] 
**forceChange** | **Boolean** | Indicates whether the new password needs to be changed on the next login. Only used when admins / brokers are changing the password of an user they manage.  | [optional] 


