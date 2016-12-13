# Cyclos471Api.MobileBaseData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cyclosVersion** | **String** | The version of the Cyclos server | [optional] 
**currentClientTime** | **Date** | The current client time according to the server | [optional] 
**numberFormat** | [**NumberFormatEnum**](NumberFormatEnum.md) | The format for numbers Possible values are: * commaAsDecimal: 9.999,99 * periodAsDecimal: 9,999.99  | [optional] 
**dateFormat** | [**DateFormatEnum**](DateFormatEnum.md) | The format for dates Possible values are: * dmySlash: DD/MM/YYYY * dmyDash: DD-MM-YYYY * dmyPeriod: DD.MM.YYYY * mdySlash: MM/DD/YYYY * mdyDash: MM-DD-YYYY * mdyPeriod: MM.DD.YYYY * ymdSlash: YYYY/MM/DD * ymdDash: YYYY-MM-DD * ymdPeriod: YYYY.MM.DD  | [optional] 
**timeFormat** | [**TimeFormatEnum**](TimeFormatEnum.md) | The format for times Possible values are: * h24: 24-hour * h12: 12-hour with AM/PM indicator  | [optional] 
**theme** | [**UIElementWithContent**](UIElementWithContent.md) | The theme guests. Only returned when changed. | [optional] 
**translations** | [**MobileTranslations**](MobileTranslations.md) | The mobile translations. Only returned when changed. | [optional] 


