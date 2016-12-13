# Cyclos471Api.UserNew

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group** | **String** | The initial user group | [optional] 
**addresses** | [**[AddressNew]**](AddressNew.md) | Addresses to be registered together with the user | [optional] 
**mobilePhones** | [**[PhoneNew]**](PhoneNew.md) | Mobile phones to be registered together with the user | [optional] 
**landLinePhones** | [**[PhoneNew]**](PhoneNew.md) | Land-line phones to be registered together with the user | [optional] 
**passwords** | [**[PasswordRegistration]**](PasswordRegistration.md) | The initial passwords of the user | [optional] 
**images** | **[String]** | The ids of previously uploaded user temporary images to be initially used as profile images  | [optional] 
**captcha** | [**CaptchaResponse**](CaptchaResponse.md) | The captcha response is required on public registrations, and ignored when administrators / brokers register another user. | [optional] 
**acceptAgreement** | **Boolean** | When there are agreements that need to be accepted for registration, this property must be passed with the value true | [optional] 
**skipActivationEmail** | **Boolean** | When set to true, the activation e-mail is not sent to the registered user. Can only be used when an administrator / broker is registering an user, and ignored on public registrations (the e-mail is always sent on public registrations). | [optional] 


