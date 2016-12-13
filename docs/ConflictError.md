# Cyclos471Api.ConflictError

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | [**ConflictErrorCode**](ConflictErrorCode.md) | Error codes for 409 Conflict entity HTTP status  Possible values are: * staleEntity: Failure in the optimistic lock. It means some entity was fetched for editing by 2 clients. Then they both saved it. The first one is successful, but the second one will fail. If you get this error, make sure the &#x60;version&#x60; field is being sent with the correct value, as fetched from the server. * constraintViolatedOnRemove: An attempt to remove some entity has failed, probably because that entity is in use, that is, is being referenced by some other entity.   | [optional] 


