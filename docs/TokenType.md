# Cyclos471Api.TokenType

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**physicalType** | [**PhysicalTokenTypeEnum**](PhysicalTokenTypeEnum.md) | The possible physical type for tokens. Determines how applications interact with hardware in order to read the token value. Possible values are: * nfcTag: A NFC tag, normally a DESFire NFC card * nfcDevice: A phone (or other device) with NFC support * barcode: Either a QR-code or a 1d barcode printed on a card * swipe: A swipe card * other: Other  | [optional] 
**mask** | **String** | In case the token value is entered by users or formatted, this is the (optional) mask to be used.  | [optional] 


