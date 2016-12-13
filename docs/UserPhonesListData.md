# Cyclos471Api.UserPhonesListData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canManage** | **Boolean** | Can the authenticated user manage phones of this user? | [optional] 
**smsEnabled** | **Boolean** | Indicates whether outbound SMS is enabled in Cyclos | [optional] 
**maxMobilePhones** | **Number** | Indicates the maximum number of mobile phones this user can have. Is only returned when &#x60;canManage&#x60; is &#x60;true&#x60;.  | [optional] 
**maxLandLinePhones** | **Number** | Indicates the maximum number of land line (fixed) phones this user can have. Is only returned when &#x60;canManage&#x60; is &#x60;true&#x60;.  | [optional] 
**phones** | [**[PhoneResult]**](PhoneResult.md) | The list of (visible) phones | [optional] 


