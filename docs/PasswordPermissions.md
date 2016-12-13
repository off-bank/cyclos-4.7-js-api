# Cyclos471Api.PasswordPermissions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**change** | **Boolean** | Manually change a generated password or generate another value for a generated password.  | [optional] 
**generate** | **Boolean** | Generate the password value for the first time. Can only be done for the authenticated user himself.  | [optional] 
**allowGeneration** | **Boolean** | For generated passwords that have a setting to require administration authorization, this action is the one that allows the user to generate the password value.  | [optional] 
**disable** | **Boolean** | Disables a password, making it unusable until being enabled again  | [optional] 
**enable** | **Boolean** | Enables a disabled password, either manually disabled or by exceeding the wrong tries, depending on the password type configuration.  | [optional] 
**reset** | **Boolean** | Resets a generated password, making it go back to the pending state. The user will then be able to generate a new value for it.  | [optional] 
**resetAndSend** | **Boolean** | Resets a manual password to a generated value and send it to the user. Can also be used to reset and send the main channel&#39;s access password if it is generated. The new password is initially expired, so the user needs to change it on first login.  | [optional] 
**unblock** | **Boolean** | Unblocks a password which has been blocked by exceeding the wrong tries  | [optional] 


