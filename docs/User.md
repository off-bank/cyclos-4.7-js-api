# Cyclos471Api.User

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **String** | Contains the formatting of the user according to the  configuration. Is only returned if no profile fields are marked to return in user list  | [optional] 
**shortDisplay** | **String** | Contains the short formatting of the user according to the configuration. Is only returned if no profile fields are marked to return in user list  | [optional] 
**image** | [**Image**](Image.md) | The primary user profile image | [optional] 
**user** | [**User**](User.md) | Is the operator owner, only returned if this user represents an operator. Even so, in some cases, like searching for operators of a specific user, this field may not be returned.  | [optional] 


