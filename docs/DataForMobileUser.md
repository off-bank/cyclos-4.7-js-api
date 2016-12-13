# Cyclos471Api.DataForMobileUser

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoCompleteResults** | **Number** | Number of search results for user autocomplete component | [optional] 
**hideUsersSearchMenu** | **Boolean** | Indicates if the user search menu should be hidden. | [optional] 
**auth** | [**Auth**](Auth.md) | The authenticated user | [optional] 
**mobileHelp** | [**UIElementWithContent**](UIElementWithContent.md) | The help content for mobile mode | [optional] 
**posHelp** | [**UIElementWithContent**](UIElementWithContent.md) | The help content for mobile mode | [optional] 
**mapBrowserApiKey** | **String** | The Google Maps browser API key | [optional] 
**pages** | [**[MobilePage]**](MobilePage.md) | The visible mobile pages | [optional] 
**canReceiveFromNfcTag** | **Boolean** | Indicates whether there is at least one NFC tag the user can use to receive payments  | [optional] 
**mobileCameraOnPayment** | **Boolean** | Indicates whether the scan QR code option should be displayed for payments           | [optional] 
**principalsAllowingQRCode** | [**[Principal]**](Principal.md) | Indicates the possible principals which are allowed to be used in QR code generation | [optional] 
**allowedOperations** | [**[MobileOperationEnum]**](MobileOperationEnum.md) | The possible operations the mobile application can perform Possibles values for each array element are: * viewUserProfile: View the profile of other users * viewAccountInformation: View own accounts * makeUserPayment: Perform payments to other users * makeSystemPayment: Perform payments to system * receivePayment: Receive payments from other users * boughtVouchers: View bought vouchers * redeemVoucher: Redeem vouchers * manageContacts: Manage own contacts * usersSearch: Search other users * mapDirectory: View the user directory (map) * activateNfcDevice: Activate the phone as NFC device * deactivateNfcDevice: Deactivate the phone as NFC device * assignPos: Assign an access client for POS mode * unassignPos: Unassign the current access client from POS mode * formatNfc: Format NFC tags * initializeNfc: Initialize NFC tags * personalizeNfc: Personalize NFC tags  * readNfc: Read NFC tags * manageOperators: Manage own/user operators * personalizeNfcSelf: Personalize NFC tags for the logged user or its operators * registerUsersAsMember: Register other users as member or operator   | [optional] 


