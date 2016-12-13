# Cyclos471Api.Auth

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | [**User**](User.md) | The authenticated user | [optional] 
**global** | **Boolean** | Indicates whether this user belongs to global mode | [optional] 
**role** | [**RoleEnum**](RoleEnum.md) | The main role the user has. Possible values are: * administrator: A user who can manage the system and other users. * broker: A user who can manage other users. * member: A regular user who can manage operators.  * operator: A \&quot;sub-user\&quot; created by a member to manage his data.  | [optional] 
**systemAdministrator** | **Boolean** | Indicates whether this user is a system administrator, that is, either belongs to the global system administrators group or to the network system administrators group  | [optional] 
**aliasOperator** | **Boolean** | Indicates whether this user is an operator which is an alias of his owner member, that is, has all member permissions, and is not restricted to an operator group.  | [optional] 
**permissions** | [**Permissions**](Permissions.md) | The granted permissions for the authenticated user or guest | [optional] 
**sessionToken** | **String** | A token that must be passed in on the Session-Token header on subsequent requests instead of the login name and password.  | [optional] 
**accessClient** | [**EntityReference**](EntityReference.md) | Only returned when authenticated as access client, contains  information about it  | [optional] 
**principalType** | [**EntityReference**](EntityReference.md) | Returns a reference to the principal type used for authentication. May be some of the built-in types (login name, e-mail, mobile phone or account number), a profile field, a token type or an access client type  | [optional] 
**principal** | **String** | The principal (user identification) used on authentication. Can be the value of the login name, e-mail, account number, custom field or token used on authentication or at the moment of login. Is not returned when the authentication was performed via access client.  | [optional] 
**expiredPassword** | **Boolean** | Returns whether the current access password is expired. If so, the user will have to change the password, or all other actions will be denied.  | [optional] 
**pendingAgreements** | **Boolean** | Returns whether the current user has some agreements pending accept. If so, a call to GET /agreements/pending should be performed to get the content of the pending agreements, and then a POST  /agreements/pending{id_or_internal_name} to accept each agreement.  | [optional] 


