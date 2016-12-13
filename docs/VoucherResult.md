# Cyclos471Api.VoucherResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buyer** | [**User**](User.md) | The voucher buyer. Is not returned when the voucher was generated or when searching for bought vouchers of an user.  | [optional] 
**creationDate** | **Date** | The date a voucher was generated or bought | [optional] 
**expirationDate** | **Date** | The date a voucher expires | [optional] 
**redeemer** | [**User**](User.md) | The voucher redeemer. Is not returned when the voucher was not yet redeemed or when searching for redeemed vouchers of an user.  | [optional] 
**redeemDate** | **Date** | The date a voucher was redeemed (if so) | [optional] 
**redeemAfterDate** | **Date** | The date after which the voucher can be redeemed. Is only returned if the voucher &#x60;status&#x60; is &#x60;open&#x60;.  | [optional] 
**redeemOnWeekDays** | [**[WeekDayEnum]**](WeekDayEnum.md) | The days of the week a voucher can be redeemed. Is only returned if the voucher &#x60;status&#x60; is &#x60;open&#x60;. Possibles values for each array element are: * sun: Sunday * mon: Monday * tue: Tuesday * wed: Wednesday * thu: Thursday * fri: Friday * sat: Saturday  | [optional] 
**type** | [**VoucherType**](VoucherType.md) | The voucher type | [optional] 


