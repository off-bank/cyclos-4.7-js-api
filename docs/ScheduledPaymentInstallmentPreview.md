# Cyclos471Api.ScheduledPaymentInstallmentPreview

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_number** | **Number** | The installment number | [optional] 
**dueDate** | **Date** | The installment due date | [optional] 
**totalAmount** | [**BigDecimal**](BigDecimal.md) | The final total installment amount | [optional] 
**mainAmount** | [**BigDecimal**](BigDecimal.md) | Depending on the configured fees, it could happen that the main amount is deducted from fees amount. This reflects the new main amount. If no fees deduct, it will be the same as &#x60;totalAmount&#x60;.  | [optional] 
**fees** | [**[TransferFeePreview]**](TransferFeePreview.md) | Only returned for direct payments. Contains the fees that would be paid by the payer if the payment is confirmed.  | [optional] 


