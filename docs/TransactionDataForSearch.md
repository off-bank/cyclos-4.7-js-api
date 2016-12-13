# Cyclos471Api.TransactionDataForSearch

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channels** | [**[EntityReference]**](EntityReference.md) | References for channels which can be used to filter entries by transfers generated on a specific channel. Is only returned if the authenticated user is an administrator.  | [optional] 
**groups** | [**[Group]**](Group.md) | Groups that can be used to filter entries, so that only transfers from or to users of those groups are returned on search. Is only returned if the authenticated user is an administrator.  | [optional] 
**accessClients** | [**[EntityReference]**](EntityReference.md) | References for access clients which can be used to filter entries by transfers generated by a specific access client   | [optional] 
**operators** | [**[User]**](User.md) | References for operators, which can be used to filter entries by transfers performed or received by that specific operator   | [optional] 
**canViewAuthorized** | **Boolean** | Can the authenticated user view authorized transactions of this owner?   | [optional] 
**canViewScheduled** | **Boolean** | Can the authenticated user view scheduled payments of this owner?   | [optional] 

