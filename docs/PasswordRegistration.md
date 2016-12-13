# Cyclos471Api.PasswordRegistration

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The password type | [optional] 
**value** | **String** | The password value | [optional] 
**checkConfirmation** | **Boolean** | Depending on the client, if a confirm password field is shown to users, it might be useful to check the confirmation password value on the server. This way, if there are other validation exceptions, they are all shown together. In this case, this field should be set to &#x60;true&#x60; and the &#x60;confirmationValue&#x60; should be passed in with the user input. However, in cases where clients just want to register an user with a password non interactively (like in a bulk registration), passing the password value twice is not desirable. In such cases, this field can be left empty (or set to &#x60;false&#x60;), and the &#x60;confirmationValue&#x60; will be ignored.  | [optional] 
**confirmationValue** | **String** | The password confirmation value. Is ignored unless &#x60;checkConfirmation&#x60; is set to &#x60;true&#x60;.  | [optional] 
**forceChange** | **Boolean** | When set to true will force the user to change it after the first login  | [optional] 


