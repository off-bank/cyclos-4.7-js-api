# Cyclos471Api.RedeemVoucherError

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | [**RedeemVoucherErrorCode**](RedeemVoucherErrorCode.md) | Possible errors when redeeming a voucher Possible values are: * notAllowedYet: The redeem period for this voucher has not arrived yet * notAllowedToday: This voucher cannot be redeemed today  * notAllowedForUser: This user cannot redeem this voucher * notAllowedForVoucher: This voucher cannot be redeemed * userBlocked: The user has been blocked by exceeding redeem tries * unexpected: An unexpected error has occurred. See the &#x60;exceptionType&#x60; and &#x60;exceptionMessage&#x60; fields for the internal information.  | [optional] 
**voucherStatus** | [**VoucherStatusEnum**](VoucherStatusEnum.md) | Only if &#x60;code&#x60; is &#x60;notAllowedForVoucher&#x60; Possible values are: * open: The voucher has been generated / bought, and is open * expired: The voucher has expired without being redeemed * canceled: The voucher was canceled, and cannot be further used * redeemed: The voucher has been redeemed, and the corresponding payment was done  | [optional] 
**allowedDays** | [**[WeekDayEnum]**](WeekDayEnum.md) | Only if &#x60;code&#x60; is &#x60;notAllowedToday&#x60; Possibles values for each array element are: * sun: Sunday * mon: Monday * tue: Tuesday * wed: Wednesday * thu: Thursday * fri: Friday * sat: Saturday  | [optional] 
**redeemAfterDate** | **Date** | Indicates the date after which this voucher can be redeemed. Only if &#x60;code&#x60; is &#x60;notAllowedYet&#x60;.  | [optional] 
**currency** | [**Currency**](Currency.md) | Currency reference. Only if &#x60;code&#x60; is &#x60;notAllowedForVoucher&#x60;            | [optional] 
**amountLeftForRedeeming** | [**BigDecimal**](BigDecimal.md) | Indicates the maximum amount the user can buy this time without exceeding the maximum. Only if &#x60;code&#x60; is &#x60;notAllowedForVoucher&#x60;.  | [optional] 
**currentOpenAmount** | [**BigDecimal**](BigDecimal.md) | Indicates the current total amount that is open. Only if &#x60;code&#x60; is &#x60;notAllowedForVoucher&#x60;.  | [optional] 
**maxOpenAmount** | [**BigDecimal**](BigDecimal.md) | Indicates the maximum total open amount. Only if &#x60;code&#x60; is &#x60;notAllowedForVoucher&#x60;.  | [optional] 
**paymentError** | [**PaymentError**](PaymentError.md) | The &#x60;PaymentError&#x60; generated when the voucher payment was being created. Only if &#x60;code&#x60; is &#x60;notAllowedForVoucher&#x60;.  | [optional] 


