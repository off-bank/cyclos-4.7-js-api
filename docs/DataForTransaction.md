# Cyclos471Api.DataForTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounts** | [**[AccountWithStatus]**](AccountWithStatus.md) | Only returned when the payment type is not selected. Contains the possible accounts which can be used either as source (when performing the payment) or destination (when receiving the payment, on POS).  | [optional] 
**fromKind** | [**AccountKind**](AccountKind.md) | Indicates the account kind that will perform the payment | [optional] 
**fromUser** | [**User**](User.md) | Only returned if &#x60;fromKind&#x60; is &#x60;user&#x60;. Is the payer user.  | [optional] 
**toKind** | [**AccountKind**](AccountKind.md) | Indicates the account kind that will receive the payment | [optional] 
**toUser** | [**User**](User.md) | Only returned if &#x60;toKind&#x60; is &#x60;user&#x60;. Is the payee user.  | [optional] 
**paymentTypeData** | [**TransactionTypeData**](TransactionTypeData.md) | Contains the detailed data for the selected (or first) payment type  | [optional] 
**paymentTypes** | [**[TransferType]**](TransferType.md) | Only returned when the payment type is not selected. Contains the allowed payment types for a payment between the selected from and to owners.  | [optional] 
**allowAutocomplete** | **Boolean** | Only returned when no subject is selected. Indicates whether the payee can be obtaining by freely searching users  | [optional] 
**allowContacts** | **Boolean** | Only returned when no subject is selected. Indicates whether the payee can be obtaining from the contact list  | [optional] 
**principalTypes** | [**[PrincipalTypeInput]**](PrincipalTypeInput.md) | Only returned when no subject is selected. The possible principal types that can be used to locate the payee  | [optional] 
**defaultIdMethod** | [**IdentificationMethodEnum**](IdentificationMethodEnum.md) | Only returned when no subject is selected. The default option for the identification method when performing a payment. Possible values are: * autocomplete: The client application should search for an user and pass in the id * contacts: The client application should access the contact list of the authenticated user and pass the id * principalType: The client application should pass in an identification (principal) of the user, such as login name, e-mail and so on  | [optional] 
**defaultPrincipalType** | **String** | Only returned when no subject is selected. If the &#x60;defaultIdMethod&#x60; is &#x60;principalType&#x60;, contains the internal name or id of the principal type that should be the default. If there is a default, the user should be provided with the option to choose which principal type he&#39;s using. If there is no default, all possible principal types will be attempted. In this case, the UI will normally not show the option for which principal type should be used.  | [optional] 


