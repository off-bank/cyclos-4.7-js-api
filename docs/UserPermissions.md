# Cyclos471Api.UserPermissions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profile** | [**UserProfilePermissions**](UserProfilePermissions.md) | Permissions over the user profile | [optional] 
**contact** | [**UserContactPermissions**](UserContactPermissions.md) | Permissions over a contact | [optional] 
**marketplace** | [**UserMarketplacePermissions**](UserMarketplacePermissions.md) | Permissions over the user marketplace | [optional] 
**accounts** | [**[AccountWithCurrency]**](AccountWithCurrency.md) | Accounts which can be viewed by the authenticated user | [optional] 
**payment** | [**UserPaymentPermissions**](UserPaymentPermissions.md) | Permissions for payments regarding this user | [optional] 
**records** | [**[OwnerRecordPermissions]**](OwnerRecordPermissions.md) | Records types the authenticated user can view over the given user  | [optional] 
**tokens** | [**[TokenType]**](TokenType.md) | Tokens the authenticated user can view over the given user  | [optional] 
**personalizeNfcTokens** | [**[TokenType]**](TokenType.md) | NFC tokens the authenticated user can personalize for the given user  | [optional] 


