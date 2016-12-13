# Cyclos471Api.BasicProfileFieldInput

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field** | [**BasicProfileFieldEnum**](BasicProfileFieldEnum.md) | The basic field this refers to Possible values are: * name: Full name * username: Login name * email: E-mail * phone: Phone (either mobile or land-line) * address: Address * accountNumber: Account number * image: Image  | [optional] 
**mask** | **String** | If this field has a mask used for input, contains this mask. Currently only the account number can (optionally) have one.  | [optional] 
**example** | **String** | If this field has an example value, holds that example  | [optional] 


