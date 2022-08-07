/** Object containing information about a service uuid to be advertised. */
export interface Bluetooth2Bluetooth2LeServiceUuidObject {
    /** Indicates the service uuid.Note: uuid is an immutable representation of a 128-bit universally unique identifier. */
    uuid: string;
    /** Indicates the bit mask for the service uuid.Possible values are:1: Set any bit in the mask to 1 to indicate a match is needed for the bit in the service uuid.0: Set any bit in the mask to 0 to ignore that bit. */
    mask?: string;
}

/** Object containing information about a service data to be advertised. */
export interface Bluetooth2Bluetooth2LeServiceDataObject {
    /** Indicates the data uuid.Note: uuid is an immutable representation of a 128-bit universally unique identifier. */
    uuid: string;
    /** Contains the array of data pertaining to a service. */
    data: number[];
    /** Indicates the bit mask for the service uuid.Possible values are:1: Set any bit in the mask to 1 to indicate a match is needed for the bit in the service uuid.0: Set any bit in the mask to 0 to ignore that bit. */
    mask?: number[];
}

/** Object containing information about manufacturer data. */
export interface Bluetooth2Bluetooth2LeManufacturerData {
    /** Indicates the manufacturer id which is the first two bytes of manufacturer data. */
    id: number;
    /** Contains the array of manufacturer data. */
    data: number[];
    /** Indicates the bit mask for the service uuid.Possible values are:1: Set any bit in the mask to 1 to indicate a match is needed for the bit in the service uuid.0: Set any bit in the mask to 0 to ignore that bit. */
    mask?: number[];
}

/** ACG: devices, bluetooth.manageDescriptionStarts scanning only dot ble devices.Parameters */
export interface Bluetooth2LeInternalStartScanParameters {
    /** MAC address */
    address?: string;
    /** Subscribe for notifications on status of remote devices. Possible values are:true - Get notificationsfalse - Notifications are not requiredDefault value: false */
    subscribe: boolean;
    /** Device name */
    name?: string;
    /** Object containing information about a service uuid to be advertised */
    serviceUuid?: Bluetooth2Bluetooth2LeServiceUuidObject;
    /** Object containing information about a service data to be advertised */
    serviceData?: Bluetooth2Bluetooth2LeServiceDataObject;
    /** Object containing information about a manufacturer data */
    manufacturerData?: Bluetooth2Bluetooth2LeManufacturerData;
    /** Advertising type */
    advertisingType?: number;
}

/** ACG: devices, bluetooth.manageDescriptionStarts scanning only dot ble devices.ParametersNameRequiredTypeDescriptionaddressOptionalStringMAC addresssubscribeRequiredBooleanSubscribe for notifications on status of remote devices. Possible values are:true - Get notificationsfalse - Notifications are not requiredDefault value: falsenameOptionalStringDevice nameserviceUuidOptionalObject: bluetooth2LeServiceUuidObjectObject containing information about a service uuid to be advertisedserviceDataOptionalObject: bluetooth2LeServiceDataObjectObject containing information about a service data to be advertisedmanufacturerDataOptionalObject: bluetooth2LeManufacturerDataObject containing information about a manufacturer dataadvertisingTypeOptionalNumberAdvertising typeCall Returns */
export interface Bluetooth2LeInternalStartScanCallReturn {
    /** Indicates if subscribed to get notified.true - Subscribed for changesfalse - Not subscribed */
    subscribe: boolean;
    /** returnValue will always contain true unless the request for subscription fails. */
    returnValue: boolean;
    /** The address of the default adapter will be always returned. */
    adapterAddress: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** Contains the Bluetooth service class information. */
export interface Bluetooth2Bluetooth2ServiceClass {
    /** Indicates a mnemonic for the UUID of the service class.Note:It is formed by taking the (upper or mixed case) official abbreviation for the profile from left-most column on https://www.bluetooth.com/specifications/profiles-overview/.When there are different UUIDs for a profile, append the profile abbreviation with the role, separated by a hyphen. */
    mnemonic: string;
    /** Indicates the LS2 category methods that can access the service class.Note:This is the lower-cased official abbreviation for the profile to which the service class is associated.The values are taken from https://www.bluetooth.com/specifications/profiles-overview/. */
    category: string;
}

/** Contains the information about the status of the device identified by the address.Note: All object properties apart from name are read-only. */
export interface Bluetooth2Bluetooth2DeviceStatus {
    /** Indicates the address (bdaddr) of the device. */
    address: string;
    /** Indicates the friendly name of the device displayed to the user.Note: When a previously undiscovered device is first discovered, the system makes up a reasonable value for this. */
    name: string;
    /** Indicates the class of the Bluetooth device.Note: Values are taken from https://www.bluetooth.com/specifications/assigned-numbers/baseband/. */
    classOfDevice: number;
    /** Indicates the type of the device.Possible values are:unknown: Unknown device type.BREDR: Basic Rate/Enhanced Data Rate.BLE: Bluetooth Low Energy.dual: Supports both Basic Rate/Enhanced Data Rate and Bluetooth Low Energy. */
    typeOfDevice: string;
    /** Indicates the array of service classes supported by this device. */
    serviceClasses: Bluetooth2Bluetooth2ServiceClass[];
    /** Indicates that the device is in the process of pairing.Note: The value is set to false once pairing is over (and paired set depending whether the pairing succeeded or failed). */
    pairing: boolean;
    /** Indicates if the device is paired with the adapter.Possible values are:true: The device is paired with the adapter with adapterAddress.false: The device is not paired with the adapter. */
    paired: boolean;
    /** Indicates the address of the adapter to which the device is paired (or was last paired).Note: If never paired, it will be the empty string. */
    adapterAddress: string;
    /** Indicates the array of the lower-cased official abbreviation for the profile to which the service class is associated. The values are taken from https://www.bluetooth.com/specifications/profiles-overview/. */
    connectedProfiles?: string[];
    /** Indicates whether the given device is trusted or not. Possible values are: true: Remote device is seen as a trusted device.false: Remote device is not seen as a trusted device. */
    trusted: boolean;
    /** Indicates if a remote device is blocked (if set) or unblocked (if reset) for pairing and profile connections.Possible values are: true: Any incoming connections from the device will be immediately rejected. Any device drivers will also be removed and no new ones will be probed as long as the device is blocked.false: Incoming connections are allowed from the remote device. */
    blocked: boolean;
    /** Indicates the signal strength level of the device. */
    rssi: number;
    /** Indicates the transmission power level of the remote device.Note:This property is only available for Bluetooth Low Energy devices.This property is not available for Bluetooth classic devices. */
    txPower: number;
    /** Indicates the service data of the remote device (if advertised from the remote device, else it will be blank). */
    scanRecord: number[];
    /** Indicates manufacturer-specific company ID and data (if advertised from the remote device, else it will be blank). */
    manufacturerData: number[];
}

/** ACG: devices, bluetooth.manageDescriptionStarts scanning only dot ble devices.ParametersNameRequiredTypeDescriptionaddressOptionalStringMAC addresssubscribeRequiredBooleanSubscribe for notifications on status of remote devices. Possible values are:true - Get notificationsfalse - Notifications are not requiredDefault value: falsenameOptionalStringDevice nameserviceUuidOptionalObject: bluetooth2LeServiceUuidObjectObject containing information about a service uuid to be advertisedserviceDataOptionalObject: bluetooth2LeServiceDataObjectObject containing information about a service data to be advertisedmanufacturerDataOptionalObject: bluetooth2LeManufacturerDataObject containing information about a manufacturer dataadvertisingTypeOptionalNumberAdvertising typeCall ReturnsNameRequiredTypeDescriptionsubscribeRequiredBooleanIndicates if subscribed to get notified.true - Subscribed for changesfalse - Not subscribedreturnValueRequiredBooleanreturnValue will always contain true unless the request for subscription fails.adapterAddressRequiredStringThe address of the default adapter will be always returned.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details.Subscription Returns */
export interface Bluetooth2LeInternalStartScanSubscription {
    /** Indicates if subscribed to get notified.true - Subscribed for changesfalse - Not subscribed */
    subscribe: boolean;
    /** returnValue will always contain true unless the request for subscription fails. */
    returnValue: boolean;
    /** The address of the default adapter will be always returned. */
    adapterAddress: string;
    /** devices will contain status information for all the devices known to the system, not just the ones whose status has been changed. */
    device: Bluetooth2Bluetooth2DeviceStatus[];
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** Contains status information of ONLY SINGLE DEVICE detected in scan environment during the le/startScan API call.The device is listed for following reasons:New device detected in the scan environment.Device listed in scan environment whose property is changed. */
    device: Bluetooth2Bluetooth2DeviceStatus;
}

/** Object containing information about the advertisement setting. */
export interface Bluetooth2Bluetooth2AdvertiseSettings {
    /** Possible values:True: Sets the webOS device as a connectable advertising device.False: Advertisements are undirected and non-connectable. Note: Default value of connectable is true. */
    connectable?: boolean;
    /** Two's complement value of transmission power.Only used if includeTxPower is true. */
    txPower?: number;
    /** Connection timeout. */
    timeout?: number;
}

/** Object containing information about a service to be advertised. */
export interface Bluetooth2Bluetooth2LeServiceObject {
    /** 16-bit UUID representing one service. */
    uuid: string;
    /** Array of data pertaining to a service. */
    data?: number[];
}

/** Defines the format for proprietary data with vendor proprietary advertising type or undefined type in sil-api.Note: SIL stands for Stack Interface Layer */
export interface Bluetooth2Bluetooth2LeProprietaryDataObject {
    /** proprietary advertising type */
    type: number;
    /** Byte sequence of proprietary data. */
    data: number[];
}

/** Defines the format for data parameters. */
export interface Bluetooth2Bluetooth2AdvertiseData {
    /** Possible values:True: To include advertisement transmission power.False:To not include advertisement transmission power. */
    includeTxPower?: boolean;
    /** Possible values:True: To include local device name in advertisement.False: To not include local device name in advertisement.Note:Default value is false. */
    includeName?: boolean;
    /** Byte sequence of manufacturer specific data. */
    manufacturerData?: number[];
    /** Array of services and data to be included in the advertisement.Note:Only zero or one bluetooth2LeServiceObject may contain data, all others (if any) must only contain uuidCannot be passed if manufacturerData is passed. */
    services?: Bluetooth2Bluetooth2LeServiceObject[];
    /** Used for advertising data with vendor proprietary advertising type or undefined type as parameter (ex. LE Bluetooth Devices (0x1B)). */
    proprietaryData?: Bluetooth2Bluetooth2LeProprietaryDataObject;
}

/** ACG: bluetooth.operationDescriptionStart the broadcasting of the Bluetooth Low Energy advertisement.Parameters */
export interface Bluetooth2LeStartAdvertisingParameters {
    /** The address of the adapter executing this method.If not specified, the default adapter will be used. */
    adapterAddress?: string;
    /** Since subscription ends only when the client chooses to close it, subscribed will always contain true.Multiple advertisement must set to true this value. */
    subscribe: boolean;
    /** Defines the format for advertiser setting parameters. */
    settings?: Bluetooth2Bluetooth2AdvertiseSettings;
    /** Defines the format for scan request data parameters. */
    advertiseData?: Bluetooth2Bluetooth2AdvertiseData;
    /** Defines the format for scan response data parameters. */
    scanResponse?: Bluetooth2Bluetooth2AdvertiseData;
}

/** ACG: bluetooth.operationDescriptionStart the broadcasting of the Bluetooth Low Energy advertisement.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringThe address of the adapter executing this method.If not specified, the default adapter will be used.subscribeRequiredBooleanSince subscription ends only when the client chooses to close it, subscribed will always contain true.Multiple advertisement must set to true this value.settingsOptionalObject: bluetooth2AdvertiseSettingsDefines the format for advertiser setting parameters.advertiseDataOptionalObject: bluetooth2AdvertiseDataDefines the format for scan request data parameters.scanResponseOptionalObject: bluetooth2AdvertiseDataDefines the format for scan response data parameters.Call Returns */
export interface Bluetooth2LeStartAdvertisingCallReturn {
    /** The address of the adapter the operation was performed on.If adapterAddress input parameter was not specified, the address of the default adapter will be returned. */
    adapterAddress: string;
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** The handle ID of a specific advertiser. Multiple advertisement can update with this value. */
    advertiserId: number;
}

/** ACG: bluetooth.operationDescriptionStarts scanning only ble devices.Parameters */
export interface Bluetooth2LeStartScanParameters {
    /** Indicates the MAC address. */
    address?: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedDefault: false */
    subscribe: boolean;
    /** Indicates the name of the device. */
    name?: string;
    /** Object containing information about the serviceUuid to be advertised. */
    serviceUuid?: Bluetooth2Bluetooth2LeServiceUuidObject;
    /** Object containing information about a serviceData to be advertised. */
    serviceData?: Bluetooth2Bluetooth2LeServiceDataObject;
    /** Object containing information about a manufacturerData. */
    manufacturerData?: Bluetooth2Bluetooth2LeManufacturerData;
    /** Indicates the address of the adapter.Note: If not specified, the address of the default adapter will be used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.operationDescriptionStarts scanning only ble devices.ParametersNameRequiredTypeDescriptionaddressOptionalStringIndicates the MAC address.subscribeRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedDefault: falsenameOptionalStringIndicates the name of the device.serviceUuidOptionalObject: bluetooth2LeServiceUuidObjectObject containing information about the serviceUuid to be advertised.serviceDataOptionalObject: bluetooth2LeServiceDataObjectObject containing information about a serviceData to be advertised.manufacturerDataOptionalObject: bluetooth2LeManufacturerDataObject containing information about a manufacturerData.adapterAddressOptionalStringIndicates the address of the adapter.Note: If not specified, the address of the default adapter will be used.Call Returns */
export interface Bluetooth2LeStartScanCallReturn {
    /** Indicates if subscribed to get notifications.true: Subscribed for notificationsfalse: Not subscribed */
    subscribed: boolean;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.Note: returnValue will always contain true unless the request for subscription fails. */
    returnValue: boolean;
    /** Indicates the address of the adapter.Note: If not specified, the address of the default adapter will be returned. */
    adapterAddress: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.operationDescriptionStarts scanning only ble devices.ParametersNameRequiredTypeDescriptionaddressOptionalStringIndicates the MAC address.subscribeRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedDefault: falsenameOptionalStringIndicates the name of the device.serviceUuidOptionalObject: bluetooth2LeServiceUuidObjectObject containing information about the serviceUuid to be advertised.serviceDataOptionalObject: bluetooth2LeServiceDataObjectObject containing information about a serviceData to be advertised.manufacturerDataOptionalObject: bluetooth2LeManufacturerDataObject containing information about a manufacturerData.adapterAddressOptionalStringIndicates the address of the adapter.Note: If not specified, the address of the default adapter will be used.Call ReturnsNameRequiredTypeDescriptionsubscribedRequiredBooleanIndicates if subscribed to get notifications.true: Subscribed for notificationsfalse: Not subscribedreturnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.Note: returnValue will always contain true unless the request for subscription fails.adapterAddressRequiredStringIndicates the address of the adapter.Note: If not specified, the address of the default adapter will be returned.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details.Subscription Returns */
export interface Bluetooth2LeStartScanSubscription {
    /** Indicates if subscribed to get notifications.true: Subscribed for notificationsfalse: Not subscribed */
    subscribed: boolean;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.Note: returnValue will always contain true unless the request for subscription fails. */
    returnValue: boolean;
    /** Indicates the address of the adapter.Note: If not specified, the address of the default adapter will be returned. */
    adapterAddress: string;
    /** Contains status information for all the devices known to the system.Note: The object includes information about devices who status have been changed/unchanged. */
    devices: Bluetooth2Bluetooth2DeviceStatus[];
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** Contains status information of only a single device detected in scan environment during the le/startScan API call.The device is listed for following reasons:New device detected in the scan environment.The device listed in scan environment whose property is changed. */
    device: Bluetooth2Bluetooth2DeviceStatus;
}
