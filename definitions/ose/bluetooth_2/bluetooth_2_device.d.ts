/** ACG: bluetooth.queryDescriptionGets the current status of remote Bluetooth devices known to the system.Parameters */
export interface Bluetooth2DeviceGetStatusParameters {
    /** Indicates if subscribed to get notifications. Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: false */
    subscribe?: boolean;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
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

/** ACG: bluetooth.queryDescriptionGets the current status of remote Bluetooth devices known to the system.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIndicates if subscribed to get notifications. Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: falseadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call Returns */
export interface Bluetooth2DeviceGetStatusCallReturn {
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed: boolean;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.Note: returnValue will always contain true unless the request for subscription fails. */
    returnValue: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Contains status information of all the devices known to the system, not just the ones whose status has been changed. */
    devices: Bluetooth2Bluetooth2DeviceStatus[];
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.queryDescriptionGets the current status of remote Bluetooth devices known to the system.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIndicates if subscribed to get notifications. Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: falseadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call ReturnsNameRequiredTypeDescriptionsubscribedRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.returnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.Note: returnValue will always contain true unless the request for subscription fails.adapterAddressRequiredStringIndicates the address of the adapter.devicesRequiredObject array: bluetooth2DeviceStatusContains status information of all the devices known to the system, not just the ones whose status has been changed.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details.Subscription Returns */
export interface Bluetooth2DeviceGetStatusSubscription {
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false:  Not subscribed. */
    subscribed: boolean;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.Note: returnValue will always contain true unless the request for subscription fails. */
    returnValue: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Contains the status information of all the devices known to the system, and not just the ones whose status has been changed. */
    devices: Bluetooth2Bluetooth2DeviceStatus[];
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.operationDescriptionSets the local values for the state of a remote device.Parameters */
export interface Bluetooth2DeviceSetStateParameters {
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates whether to set a remote device as a trusted device. Possible values are:true - Sets it as a trusted device. false - Sets it as a untrusted device. Default value: false */
    trusted?: boolean;
    /** Indicates whether to block (if set) or unblock (if reset) a remote device for pairing and profile connections. Possible values are:true - Blocks incoming connections. Any incoming connection from the device will be immediately rejected. Also, device drivers will be removed and no new ones will be probed as long as the device is blocked.false - Unblocks connections. Default value: false */
    blocked?: boolean;
}

/** ACG: bluetooth.operationDescriptionSets the local values for the state of a remote device.ParametersNameRequiredTypeDescriptionaddressRequiredStringIndicates the address (bdaddr) of the remote device.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.trustedOptionalBooleanIndicates whether to set a remote device as a trusted device. Possible values are:true - Sets it as a trusted device. false - Sets it as a untrusted device. Default value: falseblockedOptionalBooleanIndicates whether to block (if set) or unblock (if reset) a remote device for pairing and profile connections. Possible values are:true - Blocks incoming connections. Any incoming connection from the device will be immediately rejected. Also, device drivers will be removed and no new ones will be probed as long as the device is blocked.false - Unblocks connections. Default value: falseCall Returns */
export interface Bluetooth2DeviceSetStateCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.queryDescriptionGets the newly discovered Bluetooth device information known to the system.Parameters */
export interface Bluetooth2DeviceGetDiscoveredDeviceParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used */
    adapterAddress?: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribe for notifications.false: Not subscribed */
    subscribe: boolean;
}

/** ACG: bluetooth.queryDescriptionGets the newly discovered Bluetooth device information known to the system.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is usedsubscribeRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribe for notifications.false: Not subscribedCall Returns */
export interface Bluetooth2DeviceGetDiscoveredDeviceCallReturn {
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribe for notifications.false: Not subscribed */
    subscribed: boolean;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Contains the status information of a newly discovered device known to the system. */
    device: Bluetooth2Bluetooth2DeviceStatus;
}

/** ACG: bluetooth.queryDescriptionGets the newly discovered Bluetooth device information known to the system.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is usedsubscribeRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribe for notifications.false: Not subscribedCall ReturnsNameRequiredTypeDescriptionsubscribedRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribe for notifications.false: Not subscribedreturnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.errorCodeOptionalNumberThe error code for the failed operation.   errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes" section of this method for details.adapterAddressRequiredStringIndicates the address of the adapter.deviceRequiredObject: bluetooth2DeviceStatusContains the status information of a newly discovered device known to the system.Subscription Returns */
export interface Bluetooth2DeviceGetDiscoveredDeviceSubscription {
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribe for notifications.false: Not subscribed */
    subscribed: boolean;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation */
    errorText?: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Contains the status information of a newly discovered device known to the system. */
    device: Bluetooth2Bluetooth2DeviceStatus;
}

/** ACG: bluetooth.queryDescriptionGets a list of paired Bluetooth devices info, known to the system.Parameters */
export interface Bluetooth2DeviceGetPairedDevicesParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used */
    adapterAddress?: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribe for notifications.false: Not subscribed */
    subscribe: string;
}

/** ACG: bluetooth.queryDescriptionGets a list of paired Bluetooth devices info, known to the system.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is usedsubscribeRequiredStringIndicates if subscribed to get notifications.Possible values are:true: Subscribe for notifications.false: Not subscribedCall Returns */
export interface Bluetooth2DeviceGetPairedDevicesCallReturn {
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribe for notifications.false: Not subscribed */
    subscribed: boolean;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation */
    errorText?: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Contains the status information of paired devices known to the system. */
    devices: Bluetooth2Bluetooth2DeviceStatus[];
}

/** ACG: bluetooth.queryDescriptionGets a list of paired Bluetooth devices info, known to the system.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is usedsubscribeRequiredStringIndicates if subscribed to get notifications.Possible values are:true: Subscribe for notifications.false: Not subscribedCall ReturnsNameRequiredTypeDescriptionsubscribedRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribe for notifications.false: Not subscribedreturnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.errorCodeOptionalNumberThe error code for the failed operationerrorTextOptionalStringIndicates the reason for the failure of the operationadapterAddressRequiredStringIndicates the address of the adapter.devicesRequiredObject array: bluetooth2DeviceStatusContains the status information of paired devices known to the system.Subscription Returns */
export interface Bluetooth2DeviceGetPairedDevicesSubscription {
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribe for notifications.false: Not subscribed */
    subscribed: boolean;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation */
    errorText?: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Contains the status information of paired devices known to the system. */
    devices: Bluetooth2Bluetooth2DeviceStatus[];
}
