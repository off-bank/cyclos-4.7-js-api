# Cyclos471Api.Error

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**ErrorKind**](ErrorKind.md) | Error types associated to the HTTP Status 500 Possible values are: * payment: An error has occurred when making a payment * pos: An error has occurred when receiving a payment on a POS operation * buyVoucher: An error has occurred when buying a voucher  * redeemVoucher: An error has occurred when redeeming a voucher  * otp: An error has occurred requesting an OTP * initializeNfc: An error has occurred when initializing a NFC token * personalizeNfc: An error has occurred when personalizing a NFC token * nfcAuth: An error has occurred when making an external NFC authentication * general: An unexpected error has occurred  | [optional] 
**exceptionType** | **String** | The server exception class name (not intended to be shown to  final users. Only for logging purposes)  | 
**exceptionMessage** | **String** | The server exception message (not intended to be shown to  final users. Only for logging purposes)  | [optional] 


