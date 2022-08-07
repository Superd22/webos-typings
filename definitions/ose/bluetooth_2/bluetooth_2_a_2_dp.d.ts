/** ACG: bluetooth.managementDescriptionDisables the AVDTP delay reporting.Parameters */
export interface Bluetooth2A2dpDisableDelayReportingParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.managementDescriptionDisables the AVDTP delay reporting.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call Returns */
export interface Bluetooth2A2dpDisableDelayReportingCallReturn {
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** The error code for the failed operation. */
    errorCode: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue?: boolean;
}

/** ACG: bluetooth.managementDescriptionDrops the connection to the given remote device on the A2DP profile.Parameters */
export interface Bluetooth2A2dpDisconnectParameters {
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.managementDescriptionDrops the connection to the given remote device on the A2DP profile.ParametersNameRequiredTypeDescriptionaddressRequiredStringIndicates the address (bdaddr) of the remote device.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call Returns */
export interface Bluetooth2A2dpDisconnectCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}

/** ACG: bluetooth.managementDescriptionEnables the AVDTP delay reporting.Parameters */
export interface Bluetooth2A2dpEnableDelayReportingParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.managementDescriptionEnables the AVDTP delay reporting.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call Returns */
export interface Bluetooth2A2dpEnableDelayReportingCallReturn {
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: bluetooth.managementDescriptionGets the AVDTP delay from a remote A2DP device, whenever the AVDTP delay is changed.Parameters */
export interface Bluetooth2A2dpGetDelayReportingTimeParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the address (bdaddr) of the remote device. */
    address?: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: false */
    subscribe?: boolean;
}

/** ACG: bluetooth.managementDescriptionGets the AVDTP delay from a remote A2DP device, whenever the AVDTP delay is changed.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressOptionalStringIndicates the address (bdaddr) of the remote device.subscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: falseCall Returns */
export interface Bluetooth2A2dpGetDelayReportingTimeCallReturn {
    /** Indicates the delay in 1/10 of milliseconds. */
    delay: number;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: bluetooth.queryDescriptionReturns the status of the A2DP connection to a remote device.Note: If the address input parameter is not specified, the method will return the information of the device whose connection or playing status has been changed. Parameters */
export interface Bluetooth2A2dpGetStatusParameters {
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: false */
    subscribe?: boolean;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.queryDescriptionReturns the status of the A2DP connection to a remote device.Note: If the address input parameter is not specified, the method will return the information of the device whose connection or playing status has been changed. ParametersNameRequiredTypeDescriptionaddressRequiredStringIndicates the address (bdaddr) of the remote device.subscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: falseadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call Returns */
export interface Bluetooth2A2dpGetStatusCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed: boolean;
    /** Indicates if the connection request is currently being processed.Possible values are:true: Request is being processed.false: Not being processed.Example: If the Bluetooth stack is no longer processing the connection request. */
    connecting: boolean;
    /** Indicates if the connection is open.Possible values are:true: Connection is open.false: Connection is not open. */
    connected: boolean;
    /** Indicates if the device is streaming music.Possible values are:true: If either adapter or remote device is streaming music.false: Not streaming music. */
    playing: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address (bdaddr) of the remote device.Note: The address is returned only when the address input parameter is not specified. */
    address?: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}

/** ACG: bluetooth.queryDescriptionReturns the status of the A2DP connection to a remote device.Note: If the address input parameter is not specified, the method will return the information of the device whose connection or playing status has been changed. ParametersNameRequiredTypeDescriptionaddressRequiredStringIndicates the address (bdaddr) of the remote device.subscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: falseadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.subscribedRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.connectingRequiredBooleanIndicates if the connection request is currently being processed.Possible values are:true: Request is being processed.false: Not being processed.Example: If the Bluetooth stack is no longer processing the connection request.connectedRequiredBooleanIndicates if the connection is open.Possible values are:true: Connection is open.false: Connection is not open.playingRequiredBooleanIndicates if the device is streaming music.Possible values are:true: If either adapter or remote device is streaming music.false: Not streaming music.adapterAddressRequiredStringIndicates the address of the adapter.addressOptionalStringIndicates the address (bdaddr) of the remote device.Note: The address is returned only when the address input parameter is not specified. errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details.errorCodeOptionalNumberThe error code for the failed operation.Subscription Returns */
export interface Bluetooth2A2dpGetStatusSubscription {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed: boolean;
    /** Indicates whether the connection request is currently being processed.Possible values are:true: Request is being processed.false: Not being processed. */
    connecting: boolean;
    /** Indicates if the connection is open.Possible values are:true: Connection is open.false: Connection is not open. */
    connected: boolean;
    /** Indicates whether the device is streaming music.Possible values are:true: If either adapter or remote device is streaming music.false: Not streaming music. */
    playing: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address (bdaddr) of the remote device.Note: Returned only when the address input parameter is not specified. */
    address?: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}
