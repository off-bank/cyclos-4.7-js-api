# Cyclos471Api.AccountStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balance** | [**BigDecimal**](BigDecimal.md) | The raw account balance | [optional] 
**creditLimit** | [**BigDecimal**](BigDecimal.md) | The maximum negative balance an account may get | [optional] 
**upperCreditLimit** | [**BigDecimal**](BigDecimal.md) | The maximum positive balance an account may get | [optional] 
**reservedAmount** | [**BigDecimal**](BigDecimal.md) | The reserved amount is part of the raw balance, but cannot be used for payments because of some other events, like payments pending authorization, confirmed webshop orders, scheduled payments (when configured to reserve the total amount) and so on.  | [optional] 
**availableBalance** | [**BigDecimal**](BigDecimal.md) | The available balance to be used, taking into account the raw balance, credit limit and reserved amount   | [optional] 
**negativeSince** | **Date** | If the account is negative, contains the date since it became so   | [optional] 
**aRate** | [**BigDecimal**](BigDecimal.md) | The balance aging counter | [optional] 
**dRate** | [**BigDecimal**](BigDecimal.md) | The balance maturity | [optional] 
**rateBalanceCorrection** | [**BigDecimal**](BigDecimal.md) |  | [optional] 
**virtualRatedBalance** | [**BigDecimal**](BigDecimal.md) |  | [optional] 


