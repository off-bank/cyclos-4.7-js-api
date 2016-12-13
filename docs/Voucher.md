# Cyclos471Api.Voucher

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**VoucherStatusEnum**](VoucherStatusEnum.md) | The voucher statuses Possible values are: * open: The voucher has been generated / bought, and is open * expired: The voucher has expired without being redeemed * canceled: The voucher was canceled, and cannot be further used * redeemed: The voucher has been redeemed, and the corresponding payment was done  | [optional] 
**amount** | [**BigDecimal**](BigDecimal.md) | The voucher amount | [optional] 
**token** | **String** | The voucher token | [optional] 


