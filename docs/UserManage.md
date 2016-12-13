# Cyclos471Api.UserManage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The user&#39;s full name | [optional] 
**username** | **String** | The user&#39;s login name | [optional] 
**email** | **String** | The user&#39;s e-mail | [optional] 
**customValues** | **{String: String}** | Holds the custom field values, keyed by field internal name or id. The format of the value depends on the custom field type. In order to lookup the custom fields, use either the &#x60;GET /users/data-for-new&#x60; (when creating) or &#x60;GET /users/{user}/data-for-edit&#x60; (when modifying) an user, and lookup each field by either internal name. Example: &#x60;{..., \&quot;customValues\&quot;: {\&quot;gender\&quot;: \&quot;male\&quot;, \&quot;birthDate\&quot;: \&quot;1980-10-27\&quot;}}&#x60;  | [optional] 
**hiddenFields** | **[String]** | An array with the internal names of either the basic or custom fields that should be hidden from other users. Currently the only basic profile field that can be hidden is email. Any other will be considered a custom field, and should be the same key as used in the &#39;customValues&#39; property.  | [optional] 


