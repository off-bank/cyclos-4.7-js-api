# Cyclos471Api.UserResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The user&#39;s full name | [optional] 
**username** | **String** | The user&#39;s login name | [optional] 
**email** | **String** | The user&#39;s e-mail | [optional] 
**address** | [**Address**](Address.md) | Address to be placed on map. Is only returned when the search result type is &#x60;map&#x60;.  | [optional] 
**distance** | **Number** | Only returned when there is a base location to calculate the distance from. The unit (kilometers or miles) depends on configuration.  | [optional] 
**customValues** | **{String: String}** | Holds the values for custom fields, keyed by field internal name or id. The format of the value depends on the custom field type. Example: &#x60;{..., \&quot;customValues\&quot;: {\&quot;gender\&quot;: \&quot;male\&quot;, \&quot;birthDate\&quot;: \&quot;1980-10-27\&quot;}}&#x60;  | [optional] 
**phone** | **String** | First phone number, used when phone is marked on products to be returned on user list  | [optional] 
**accountNumber** | **String** | First account number, used when account number is marked on products to be returned on user list  | [optional] 
**group** | [**EntityReference**](EntityReference.md) | The user group. Only returned when the &#x60;includeGroup&#x60; parameter is set to &#x60;true&#x60; and the current user can see other users&#39; groups.  | [optional] 
**groupSet** | [**EntityReference**](EntityReference.md) | The user group. Only returned when the &#x60;includeGroupSet&#x60; parameter is set to &#x60;true&#x60; and the current user can see other users&#39; group set.  | [optional] 


