# Cyclos471Api.PrincipalTypeInput

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customField** | [**CustomFieldDetailed**](CustomFieldDetailed.md) | If this principal is based on a custom field, holds its definition  | [optional] 
**tokenType** | [**TokenTypeEnum**](TokenTypeEnum.md) | If this principal is a token, contains its type Possible values are: * nfcTag: A NFC tag/card  * nfcDevice: A device (e.g. cell phone) with support for NFC * barcode: A barcode with the token * swipe: A swipe/magnetic card containing the token * other: Any other type containing a token  | [optional] 
**mask** | **String** | If this principal is either a token or account number, holds the (optional) mask which clients can use to input the value.  | [optional] 
**allowManualInput** | **Boolean** | Specifies if the principal type allows enter manually the token value.  | [optional] 
**example** | **String** | If this principal is mobile phone, holds an example number.  | [optional] 


