# Cyclos471Api.DataForLogin

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principalTypes** | [**[PrincipalTypeInput]**](PrincipalTypeInput.md) | The identification methods accepted for login | [optional] 
**defaultPrincipalType** | **String** | The internal name of the identification method that is marked as default for the current channel configuration. This is optional, and if there is no default, all possible identification methods will be attempted for login.  | [optional] 
**loginPasswordInput** | [**PasswordInput**](PasswordInput.md) | Contains data for the password used on login | [optional] 
**forgotPasswordCaptchaProvider** | [**CaptchaProviderEnum**](CaptchaProviderEnum.md) | If the forgot password request requires a captcha, will be the  provider used to request one. Otherwise will be null. Possible values are: * internal: Default provider using images  | [optional] 
**forgotPasswordMediums** | [**[SendMediumEnum]**](SendMediumEnum.md) | If the forgot password request is enabled, returns the mediums the user can choose to receive the confirmation key or code.  If nothing is returned, forgot password is not enabled. Possibles values for each array element are: * email: The user will receive an email with the information * sms: The user will receive a sms with the information (only if there is at least one phone enabled for sms)  | [optional] 


