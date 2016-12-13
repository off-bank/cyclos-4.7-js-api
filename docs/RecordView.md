# Cyclos471Api.RecordView

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**RecordType**](RecordType.md) | The record type | [optional] 
**user** | [**User**](User.md) | The user which owns this record, only returned if &#x60;kind&#x60; is &#x60;user&#x60;  | [optional] 
**creationDate** | **Date** | The record creation date | [optional] 
**createdBy** | [**User**](User.md) | Reference to the user that created the record | [optional] 
**lastModificationDate** | **Date** | The record last modification date | [optional] 
**lastModifiedBy** | [**User**](User.md) | Reference to the user that last modified the record | [optional] 
**customValues** | [**[CustomFieldValue]**](CustomFieldValue.md) | The list of custom field values this record has | [optional] 
**edit** | **Boolean** | Can the authenticated user edit this record? | [optional] 
**remove** | **Boolean** | Can the authenticated user remove this record? | [optional] 


