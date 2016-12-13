# Cyclos471Api.ScheduledPaymentInstallment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_number** | **Number** | The installment number. | [optional] 
**dueDate** | **Date** | The installment due date. | [optional] 
**amount** | [**BigDecimal**](BigDecimal.md) | The installment amount | [optional] 
**status** | [**ScheduledPaymentInstallmentStatusEnum**](ScheduledPaymentInstallmentStatusEnum.md) | The status of a scheduled payment installment Possible values are: * scheduled: The installment is scheduled for a future date * processed: The installment was processed, generating a transfer * canceled: The installment was canceled * settled: The installment was marked as settled by the receiver * failed: The installment processing failed, for example, because there was no funds in the source account * blocked: The installment is blocked, and won&#39;t be automatically processed on its due date  | [optional] 
**by** | [**User**](User.md) | The user that performed an status change. For example, who manually paid, settled or canceled an open installment  | [optional] 
**transferId** | **String** | Only if the installment was processed, contains the internal identifier of the generated transfer.  | [optional] 
**transferDate** | **Date** | The date the transfer was processed. | [optional] 


