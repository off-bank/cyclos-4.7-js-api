# Cyclos471Api.Group

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**GroupKind**](GroupKind.md) | The possible kinds of group or group set Possible values are: * groupSet: A group set * adminGroup: An administrator group * brokerGroup: A broker group * memberGroup: A member (regular user) group  | [optional] 
**groupSet** | **String** | The internal name or id of the group set of this group. Only makes sense if is an user or broker group. Administrator groups or group sets cannot have a group set.  | [optional] 


