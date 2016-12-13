# Cyclos471Api.OtpError

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | [**OtpErrorCode**](OtpErrorCode.md) | Application-specific error codes for an OTP error. Possible values are: * errorSendingSms: An error has occurred trying to send the OTP through SMS. * unexpected: An unexpected error has occurred.   | [optional] 
**smsStatus** | [**OutboundSmsStatusEnum**](OutboundSmsStatusEnum.md) | Only if code is &#x60;errorSendingSms&#x60; Possible values are: * success: The SMS message was successfully sent * invalid: The parameters for sending an SMS message were invalid * maxMessagesReached: The maximum SMS messages for the user (or guest) have been reached * gatewayUreachable: Network problem, or gateway server down * timeout: Timeout while connecting or waiting for a gateway server reply * rejected: The gateway has rejected the SMS message * unexpected: An unexpected error has occurred  | [optional] 


