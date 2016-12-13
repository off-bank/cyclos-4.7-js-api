# Cyclos471Api.AddressConfiguration

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**useMap** | **Boolean** | Indicates whether maps are enabled in Cyclos | [optional] 
**enabledFields** | [**[AddressFieldEnum]**](AddressFieldEnum.md) | Contains the address fields that are enabled in Cyclos Possibles values for each array element are: * addressLine1: The first line of the descriptive address * addressLine2: The second line of the descriptive address * street: The street name * buildingNumber: The numeric identifier for a land parcel, house, building or other * complement: The complement (like apartment number)   * zip: A zip code that identifies a specific geographic (postal) delivery area * poBox: The post-office box, is an uniquely addressable box * neighborhood: The neighborhood name  * city: The city name * region: The region or state * country: The country, represented as 2-letter, uppercase, ISO 3166-1 code  | [optional] 
**requiredFields** | [**[AddressFieldEnum]**](AddressFieldEnum.md) | Contains the address fields that are required in Cyclos Possibles values for each array element are: * addressLine1: The first line of the descriptive address * addressLine2: The second line of the descriptive address * street: The street name * buildingNumber: The numeric identifier for a land parcel, house, building or other * complement: The complement (like apartment number)   * zip: A zip code that identifies a specific geographic (postal) delivery area * poBox: The post-office box, is an uniquely addressable box * neighborhood: The neighborhood name  * city: The city name * region: The region or state * country: The country, represented as 2-letter, uppercase, ISO 3166-1 code  | [optional] 


