# Cyclos471Api.AdResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**promotionalPrice** | [**BigDecimal**](BigDecimal.md) | The promotional price, only returned if there is a promotional price set and the promotional period is active  | [optional] 
**address** | [**Address**](Address.md) | Address to be placed on map. Is only returned when the search result type is &#x60;map&#x60;.  | [optional] 
**distance** | **Number** | Only returned when there is a base location to calculate the distance from. The unit (kilometers or miles) depends on configuration.  | [optional] 
**categories** | **[String]** | Either internal name or id of categories this ad belongs to. In most cases an advertisement will have a single category, but this depends on the Cyclos configuration.  | [optional] 
**currency** | **String** | Either internal name or id of the advertisement&#39;s price currency  | [optional] 
**editable** | **Boolean** | Indicates if the ad can be edited according to the logged user&#39;s permissions and ad status.  | [optional] 


