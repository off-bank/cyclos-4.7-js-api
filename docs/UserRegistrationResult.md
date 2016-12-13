# Cyclos471Api.UserRegistrationResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | [**User**](User.md) | The user that has just been registered | [optional] 
**status** | [**UserRegistrationStatusEnum**](UserRegistrationStatusEnum.md) | The status of the user after the registration Possible values are: * active: The user is initially active * inactive: The user is initially inactive, and an administrator needs to manually activate the user * emailValidation: The user has received an e-mail, with a link to verify the e-mail address. Once verified, the registration will be complete  | [optional] 
**generatedPasswords** | [**[EntityReference]**](EntityReference.md) | The types of passwords that were generated | [optional] 
**rootUrl** | **String** | The root URL that can be used to access the web interface | [optional] 
**principals** | [**[UserRegistrationPrincipal]**](UserRegistrationPrincipal.md) | Contains information about each user principal (identification) and the channels that can be accessed using it  | [optional] 


