# Cyclos471Api.UserDataForNew

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowSetSendActivationEmail** | **Boolean** | Whether the current user is allowed to skip the activateion e-mail  | [optional] 
**generatedUsername** | **Boolean** | Indicates whether the login name is generated | [optional] 
**addressConfiguration** | [**AddressConfigurationForUserRegistration**](AddressConfigurationForUserRegistration.md) | Configuration for registering addresses | [optional] 
**phoneConfiguration** | [**PhoneConfigurationForUserRegistration**](PhoneConfigurationForUserRegistration.md) | Configuration for registering phones | [optional] 
**passwordTypes** | [**[PasswordTypeRegistration]**](PasswordTypeRegistration.md) | The password types that should be registered together with the user  | [optional] 
**captchaType** | [**CaptchaProviderEnum**](CaptchaProviderEnum.md) | description: &gt;   The captcha provider used to requested a captcha for registration,   or null if no captcha is needed. Possible values are: * internal: Default provider using images  | [optional] 
**user** | [**UserNew**](UserNew.md) | The object that can be altered and posted back to register the user  | [optional] 
**agreements** | [**[AgreementContent]**](AgreementContent.md) | The agreements that needs to be accepted by the user to be able to register. Only returned for public registrations.  | [optional] 


