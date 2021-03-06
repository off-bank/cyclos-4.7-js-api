# Cyclos471Api.TransferDataForSearch

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountTypes** | [**[EntityReference]**](EntityReference.md) | References for the account types  | [optional] 
**currencies** | [**[Currency]**](Currency.md) | References for the available currencies  | [optional] 
**defaultKinds** | [**[TransferKind]**](TransferKind.md) | The transfer kinds that should be searched by default Possibles values for each array element are: * payment: A transfer generated by a direct payment or accepting a webshop order * scheduledPaymentInstallment: A transfer generated when processing a scheduled payment installment * recurringPayment: A transfer generated when processing a recurring payment * chargeback: A transfer which is a chargeback of another transfer * initialCredit: A transfer which is the initial credit for a newly created account * transferFee: A transfer generated by a transfer fee charge * accountFee: A transfer generated by an account fee charge * import: An imported transfer  | [optional] 
**defaultHideChargedBack** | **Boolean** | Indicats whether clients should set the query to hide transfers that were charged-back by default, by setting the &#x60;chargedBack&#x60; parameter to &#x60;false&#x60; on search.  | [optional] 


