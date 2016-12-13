# Cyclos471Api.UserView

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | [**RoleEnum**](RoleEnum.md) | The main role the user has. Possible values are: * administrator: A user who can manage the system and other users. * broker: A user who can manage other users. * member: A regular user who can manage operators.  * operator: A \&quot;sub-user\&quot; created by a member to manage his data.  | [optional] 
**name** | **String** | The user&#39;s full name | [optional] 
**username** | **String** | The user&#39;s login name | [optional] 
**email** | **String** | The user&#39;s e-mail | [optional] 
**customValues** | [**[UserCustomFieldValue]**](UserCustomFieldValue.md) | The list of custom field values this user has | [optional] 
**group** | [**EntityReference**](EntityReference.md) | Reference to the user group. Is only returned if the authenticated user has permission to see groups   | [optional] 
**groupSet** | [**EntityReference**](EntityReference.md) | Reference to the user group set. Is only returned if the authenticated user has permission to see group sets and the user group is in a group set   | [optional] 
**additionalImages** | [**[Image]**](Image.md) | Holds the images other than the primary image, which is returned in the &#x60;image&#x60; field  | [optional] 
**addresses** | [**[AddressView]**](AddressView.md) | Visible addresses | [optional] 
**phones** | [**[PhoneView]**](PhoneView.md) | Visible phones | [optional] 
**contact** | **Boolean** | Indicates whether the given user is a contact of the currently authenticated user  | [optional] 
**permissions** | [**UserPermissions**](UserPermissions.md) | Permissions the authenticated has over this user | [optional] 


