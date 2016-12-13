# Cyclos471Api.AccountHistoryResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_date** | **Date** | The transfer date and time | [optional] 
**amount** | [**BigDecimal**](BigDecimal.md) | The transfer amount. May be positive or negative. | [optional] 
**relatedAccount** | [**AccountWithOwner**](AccountWithOwner.md) | The account that either received / sent the balance | [optional] 
**type** | [**EntityReference**](EntityReference.md) | The transfer type | [optional] 
**description** | **String** | The transaction description. Is optional. | [optional] 
**transactionNumber** | **String** | The transaction number identifying this balance transfer. The currency configuration has the definition on whether transaction numbers are enabled and which format they have.  | [optional] 
**customValues** | **{String: String}** | Holds the custom field values, keyed by field internal name or id. The format of the value depends on the custom field type. In order to lookup the custom fields, use the &#x60;GET /{owner}/accounts/{accountType}/data-for-history&#x60; operation, and lookup each field by either internal name (if configured) or id. Example: &#x60;{..., \&quot;customValues\&quot;: {\&quot;linkedAccount\&quot;: \&quot;123456789\&quot;}}&#x60;  | [optional] 
**transaction** | [**Transaction**](Transaction.md) | If this balance transfer was originated from a transaction (like a payment or scheduled payment), contains the reference to this transaction.  | [optional] 
**statuses** | **{String: String}** | contains the current status internal name or id, keyed by the flow internal name or id  | [optional] 


