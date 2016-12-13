# Cyclos471Api.PaymentPreview

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mainAmount** | [**BigDecimal**](BigDecimal.md) | Depending on the configured fees, it could happen that the main amount is deducted from fees amount. This reflects the new main amount. If no fees deduct, it will be the same as &#x60;totalAmount&#x60;.  | [optional] 
**fees** | [**[TransferFeePreview]**](TransferFeePreview.md) | Only returned for direct payments. Contains the fees that would be paid by the payer if the payment is confirmed.  | [optional] 
**installments** | [**[ScheduledPaymentInstallmentPreview]**](ScheduledPaymentInstallmentPreview.md) | Only returned for scheduled payments. Contains the previews of each installment, if the payment is confirmed.  | [optional] 
**payment** | [**PerformPayment**](PerformPayment.md) | Depending on the configuration, some script might alter the payment object, for example, filling in custom fields. This object can be used to show the actual data to the user, and to be posted again to the &#x60;POST /{owner}/payments/&#x60; path.  | [optional] 
**aRate** | [**BigDecimal**](BigDecimal.md) | The balance aging counter used for this payment | [optional] 
**dRate** | [**BigDecimal**](BigDecimal.md) | The balance maturity used for this payment | [optional] 
**previousDRate** | [**BigDecimal**](BigDecimal.md) | The number of days until the present balance reaches its maturity   | [optional] 
**transferDRate** | [**BigDecimal**](BigDecimal.md) | The maturity used for this payment | [optional] 


