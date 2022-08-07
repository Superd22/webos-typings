/** ACG: bluetooth.operationDescriptionOpens a HFP connection to a remote device. Parameters */
export interface Bluetooth2HfpConnectParameters {
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribe to get notificationsfalse: Not subscribedDefault: false */
    subscribe?: boolean;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.operationDescriptionOpens a HFP connection to a remote device. ParametersNameRequiredTypeDescriptionaddressRequiredStringIndicates the address (bdaddr) of the remote device.subscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribe to get notificationsfalse: Not subscribedDefault: falseadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call Returns */
export interface Bluetooth2HfpConnectCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribe to get notificationsfalse: Not subscribed */
    subscribed: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}

/** ACG: bluetooth.operationDescriptionOpens a HFP connection to a remote device. ParametersNameRequiredTypeDescriptionaddressRequiredStringIndicates the address (bdaddr) of the remote device.subscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribe to get notificationsfalse: Not subscribedDefault: falseadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.subscribedRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribe to get notificationsfalse: Not subscribedadapterAddressRequiredStringIndicates the address of the adapter.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes" section of this method for details.errorCodeOptionalNumberThe error code for the failed operation.Subscription Returns */
export interface Bluetooth2HfpConnectSubscription {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribe to get notificationsfalse: Not subscribed */
    subscribed: boolean;
    /** If the remote device initiated the disconnect, disconnectByRemote will contain true.If the local user initiated the disconnect, disconnectByRemote will contain false. */
    disconnectByRemote: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}

/** ACG: bluetooth.operationDescriptionDrops the connection to the given remote device on the HFP profile.Parameters */
export interface Bluetooth2HfpDisconnectParameters {
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.operationDescriptionDrops the connection to the given remote device on the HFP profile.ParametersNameRequiredTypeDescriptionaddressRequiredStringIndicates the address (bdaddr) of the remote device.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call Returns */
export interface Bluetooth2HfpDisconnectCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValues: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}

/** ACG: bluetooth.queryDescriptionReturns the status of a HFP connection to a remote device.If address input parameter is not specified, the method will return the information of the device whose connection status has been changed. Parameters */
export interface Bluetooth2HfpGetStatusParameters {
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribe to get notificationsfalse: Not subscribed */
    subscribe?: boolean;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.queryDescriptionReturns the status of a HFP connection to a remote device.If address input parameter is not specified, the method will return the information of the device whose connection status has been changed. ParametersNameRequiredTypeDescriptionaddressRequiredStringIndicates the address (bdaddr) of the remote device.subscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribe to get notificationsfalse: Not subscribedadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call Returns */
export interface Bluetooth2HfpGetStatusCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribe to get notificationsfalse: Not subscribed */
    subscribed: boolean;
    /** Indicates if the connection request is currently being processed.Possible values are:true: The connection request is currently being processedfalse: Otherwise. Example: The Bluetooth stack is no longer processing the connection request. */
    connecting: boolean;
    /** Indicates if the connection is open.Possible values are:true: The connection is open.false: Otherwise. */
    connected: boolean;
    /** Indicates the status of the SCO connection.Possible values are:true: There is a SCO connection between the local and the remote devicefalse: Otherwise */
    sco: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}

/** ACG: bluetooth.queryDescriptionReturns the status of a HFP connection to a remote device.If address input parameter is not specified, the method will return the information of the device whose connection status has been changed. ParametersNameRequiredTypeDescriptionaddressRequiredStringIndicates the address (bdaddr) of the remote device.subscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribe to get notificationsfalse: Not subscribedadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.subscribedRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribe to get notificationsfalse: Not subscribedconnectingRequiredBooleanIndicates if the connection request is currently being processed.Possible values are:true: The connection request is currently being processedfalse: Otherwise. Example: The Bluetooth stack is no longer processing the connection request.connectedRequiredBooleanIndicates if the connection is open.Possible values are:true: The connection is open.false: Otherwise.scoRequiredBooleanIndicates the status of the SCO connection.Possible values are:true: There is a SCO connection between the local and the remote devicefalse: OtherwiseadapterAddressRequiredStringIndicates the address of the adapter.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes" section of this method for details.errorCodeOptionalNumberThe error code for the failed operation.Subscription Returns */
export interface Bluetooth2HfpGetStatusSubscription {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribe to get notificationsfalse: Not subscribed */
    subscribed: boolean;
    /** Indicates if the connection request is currently being processed.Possible values are:true: The connection request is currently being processedfalse: Otherwise. Example: The Bluetooth stack is no longer processing the connection request. */
    connecting: boolean;
    /** Indicates if the connection is open.Possible values are:true: The connection is open.false: Otherwise. */
    connected: boolean;
    /** Indicates the status of the SCO connection.Possible values are:true: There is a SCO connection between the local and the remote devicefalse: Otherwise */
    sco: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}
