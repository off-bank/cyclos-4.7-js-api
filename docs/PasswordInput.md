# Cyclos471Api.PasswordInput

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputMethod** | [**PasswordInputMethodEnum**](PasswordInputMethodEnum.md) | The explanation for the value that should be sent for &#x60;virtualKeyboard&#x60;  cases is given above, in the description of this type. Possible values are: * textBox: A simple string should be requested * virtualKeyboard: A series of buttons should be presented to allow enter the password.  | [optional] 
**mode** | [**PasswordModeEnum**](PasswordModeEnum.md) | Indicates how a password is handled Possible values are: * manual: Passwords are manually typed by users * generated: Passwords are always generated * otp: One Time Passwords. are always generated and can be used only once * script: Passwords are not stored in Cyclos, but handed-over for a script to verify them.    Is normally used to implement single-sign-on with other apps.  | [optional] 
**hasActivePassword** | **Boolean** | Only returned when there is an authenticated user (not for login). Describes whether the user has created a password of this type. If not, a proper message can be shown to the user indicating that this password needs to be created.  | [optional] 
**confirmationPasswordOncePerSession** | **Boolean** | Only returned when there is an authenticated user (not for login). Determines whether this password, when used as confirmation, should be requested only once until the user logs out.  | [optional] 
**minLength** | **Number** | For text passwords, the minimum password length | [optional] 
**maxLength** | **Number** | For text passwords, the maximum password length | [optional] 
**otpSendMediums** | [**[SendMediumEnum]**](SendMediumEnum.md) | Only for &#x60;otp&#x60;, the available mediums for the password to be sent Possibles values for each array element are: * email: The user will receive an email with the information * sms: The user will receive a sms with the information (only if there is at least one phone enabled for sms)  | [optional] 
**numberOfButtons** | **Number** | Only for &#x60;virtualKeyboard&#x60;, is the number of buttons to be displayed  | [optional] 
**buttonsPerRow** | **Number** | Only for &#x60;virtualKeyboard&#x60;, is the number of buttons that should be displayed on each row  | [optional] 
**buttons** | **[[String]]** | Only for &#x60;virtualKeyboard&#x60;, contains the sequences of buttons that should be displayed for the user. The explanation for the value that should be sent on virtual keyboard mode is shown above, in the description of this type.  | [optional] 


