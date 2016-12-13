# Cyclos471Api.PosError

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | [**PosErrorCode**](PosErrorCode.md) | Application-specific error codes for a POS operation error  Possible values are: * payerNotInChannel: The specified payer user does not participate on the POS channel. * payerNotOperative: The specified payer has some restriction that renders he/she inoperative for POS operations. An example of such case is when the user has pending agreements. * unexpected: An unexpected error has occurred. See the &#x60;exceptionType&#x60; and &#x60;exceptionMessage&#x60; fields for the internal information.  | [optional] 


