# Cyclos471Api.UserDataForSearch

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fieldsInList** | **[String]** | The internal names of either basic or custom profile fields that are configured to be shown on the list. This actually defines the fields that will be loaded on the result. It is possible that no fields are configured to be returned on list. In this case, the result objects will have the &#39;display&#39; property loaded with what is configured to be the user formatting field(s).   | [optional] 
**statuses** | [**[UserStatusEnum]**](UserStatusEnum.md) | The possible user statuses the authenticated user can use to filter the search. Only administrators or brokers over their members can filter by status (also depends on permissions) Possibles values for each array element are: * active: The user is active and can use the system normally. * blocked: The user has been blocked from accessing the system. Other users still see him/her. * disabled: The user has been disabled - he/she cannot access the system and is invisible by other users. * removed: The user was permanently removed. It&#39;s profile is kept for historical purposes. * pending: The user registration is pending a confirmation. Probably the user has received an e-mail with a link that must be followed to complete the activation. The user is invisible by other users.  | [optional] 
**groupsForRegistration** | [**[Group]**](Group.md) | Possible groups an administrator or broker can use to register users  | [optional] 


