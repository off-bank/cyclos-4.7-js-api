# Cyclos471Api.AdView

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | [**[AdCategoryWithParent]**](AdCategoryWithParent.md) | Either internal name or id of categories this ad belongs to. In most cases an advertisement will have a single category, but this depends on the Cyclos configuration.  | [optional] 
**customValues** | [**[CustomFieldValue]**](CustomFieldValue.md) | The list of custom field values this advertisement has | [optional] 
**currency** | [**Currency**](Currency.md) | The advertisement&#39;s price currency | [optional] 
**promotionalPrice** | [**BigDecimal**](BigDecimal.md) | The promotional price, to be applied on the promotional period is active  | [optional] 
**promotionalPeriod** | [**DatePeriod**](DatePeriod.md) | The promotional period, the one when &#x60;promotionalPrice&#x60; is valid  | [optional] 
**promotionalPeriodActive** | **Boolean** | Indicates whether the promotional period is active at the moment this data is returned  | [optional] 
**canManage** | **Boolean** | Can the authenticated user manage this advertisement? | [optional] 
**additionalImages** | [**[Image]**](Image.md) | Holds the images other than the primary image, which is returned in the &#x60;image&#x60; field  | [optional] 
**addresses** | [**[Address]**](Address.md) | The addresses where this advertisement is available.  | [optional] 


