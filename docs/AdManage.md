# Cyclos471Api.AdManage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The advertisement title | [optional] 
**description** | **String** | The advertisement description content, formatted as HTML  | [optional] 
**publicationPeriod** | [**DatePeriod**](DatePeriod.md) | The date period this advertisement is published | [optional] 
**categories** | **[String]** | Either internal name or id of categories this ad belongs to. In most cases an advertisement will have a single category, but this depends on the Cyclos configuration.  | [optional] 
**currency** | **String** | Either internal name or id of the advertisement&#39;s price currency  | [optional] 
**price** | [**BigDecimal**](BigDecimal.md) | The regular price | [optional] 
**promotionalPrice** | [**BigDecimal**](BigDecimal.md) | The promotional price, if any | [optional] 
**promotionalPeriod** | [**DatePeriod**](DatePeriod.md) | The promotional period, the one when &#x60;promotionalPrice&#x60; is valid  | [optional] 
**customValues** | **{String: String}** | Holds the custom field values, keyed by field internal name or id. The format of the value depends on the custom field type. Example: &#x60;{..., \&quot;customValues\&quot;: {\&quot;gender\&quot;: \&quot;male\&quot;, \&quot;birthDate\&quot;: \&quot;1980-10-27\&quot;}}&#x60;  | [optional] 
**addresses** | **[String]** | Ids of addresses (belogining to the ad owner) this ad is available at.  | [optional] 


