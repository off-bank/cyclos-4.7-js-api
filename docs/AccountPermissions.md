# Cyclos471Api.AccountPermissions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**AccountWithCurrency**](AccountWithCurrency.md) | The account | [optional] 
**systemPayments** | [**[EntityReference]**](EntityReference.md) | Payment types allowed to be performed to system accounts | [optional] 
**userPayments** | [**[EntityReference]**](EntityReference.md) | Payment types allowed to be performed to other users | [optional] 
**selfPayments** | [**[EntityReference]**](EntityReference.md) | Payment types allowed to be performed to other self accounts | [optional] 
**posPayments** | [**[EntityReference]**](EntityReference.md) | Payment types allowed to be used on POS (receive payments from other users)  | [optional] 


