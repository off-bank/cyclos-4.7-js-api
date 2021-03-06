# Cyclos471Api.TransactionResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**TransactionKind**](TransactionKind.md) | The transaction kind. For example, if the front end has distinct views for a regular payment, scheduled payment and so on, this information is useful to determine the actual view. Possible values are: * payment: A direct payment * recurringPayment: A payment which is processed again periodically * scheduledPayment: A scheduled payment which is either a payment scheduled for a future date or has multiple installments * paymentRequest: A request for another user to accept a payment  * externalPayment: A payment to an external user * chargeback: Chargeback of a given transfer * import: An imported transaction * order: Transaction generated by confirming an order  | [optional] 
**transactionNumber** | **String** | The transaction number identifying this balance transfer. The currency configuration has the definition on whether transaction numbers are enabled and which format they have.  | [optional] 
**_date** | **Date** | The transfer date and time | [optional] 
**amount** | [**BigDecimal**](BigDecimal.md) | The transfer amount. May be positive or negative. | [optional] 
**relatedKind** | [**AccountKind**](AccountKind.md) | The related account owner kind | [optional] 
**relatedUser** | [**User**](User.md) | The user that either performed or received this transaction. Is only returned if &#x60;relatedKind&#x60; is &#x60;user&#x60;.  | [optional] 
**type** | [**TransferType**](TransferType.md) | The transaction type | [optional] 
**currency** | **String** | Either internal name or id of the transaction currency.  | [optional] 
**authorizationStatus** | [**AuthorizationStatusEnum**](AuthorizationStatusEnum.md) | The status regarding authorization a transaction is in. If configured, transactions can require one or more levels of authorization in order to be processed. If a transaction has the this status null, it means it never went through the authorization process.  Possible values are: * pending: The transaction is pending authorization * canceled: The authorization submission was canceled by the submitter * denied: The authorization was denied * authorized: The transaction was fully authorized and is processed  | [optional] 
**description** | **String** | The transaction description. Is optional. | [optional] 


