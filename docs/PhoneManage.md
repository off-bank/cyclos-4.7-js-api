# Cyclos471Api.PhoneManage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The phone name | [optional] 
**_number** | **String** | The formatted number | [optional] 
**extension** | **String** | The number extension, only for landLine phones, and is only used if the phone configuration states that extensions are enabled.   | [optional] 
**enabledForSms** | **Boolean** | Only applicable if this represents a mobile phone. Whether this mobile phone is enabled for SMS, both receiving notifications and sending SMS operations. Can only be set if the mobile phone is verified.  | [optional] 
**verified** | **Boolean** | Only applicable if this represents a mobile phone. Whether this mobile is verified. Can only be directly set by administrators. Regular users need to verify it.  | [optional] 


