# Cyclos471Api.AccountWithOwner

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**AccountKind**](AccountKind.md) | Indicates whether an account belongs to system or user Possible values are: * system: System account, there is only one account per type in the system. Managed only by administrators * user: User account, there is one account of this type per user.  | [optional] 
**user** | [**User**](User.md) | Only returned if &#x60;kind&#x60; is &#x60;user&#x60;. Is a reference to the owner user.  | [optional] 


