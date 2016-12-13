# Cyclos471Api.RecordBasicData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**RecordKind**](RecordKind.md) | The possible kinds of a record, which can either belong to system or to an user Possible values are: * user: The record belongs to a specific user * system: The record belongs to the system, and is unrelated to an user  | [optional] 
**type** | [**RecordType**](RecordType.md) | The record type | [optional] 
**fields** | [**[CustomFieldDetailed]**](CustomFieldDetailed.md) | The record custom fields (either defined within this record type or shared fields linked with this record type)  | [optional] 
**edit** | **Boolean** | Can the authenticated user edit records of this type? | [optional] 
**remove** | **Boolean** | Can the authenticated user remove records of this type? | [optional] 
**user** | [**User**](User.md) | The record owner user. Only returned if &#x60;kind&#x60; is &#x60;user&#x60;.  | [optional] 


