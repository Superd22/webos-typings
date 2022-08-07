/** ACG: bluetooth.operationDescriptionAwaits incoming pairing requests on the default Bluetooth adapter (only) by setting its state to be pairable. The caller must subscribe to this method. It expects the caller will stay subscribed to this method across multiple pairing requests for as long as the webOS device wishes to accept pairing requests.Only one pairing request, either incoming or outgoing, can be active for an adapter at a given time.An outgoing pairing request is active until the service ends the subscription to adapter/pair by sending a subscription response containing request:endPairing.An incoming pairing request is active once a subscription response to this method contains request:displayPinCode, request:displayPasskey, request:confirmPasskey, request:enterPinCode, or request:enterPinCode. An incoming pairing request becomes inactiveWhen a subscription response to this method contains request:endPairing.When the pairing succeeds (with the corresponding device having paired field as true). In this case, there is no request:endPairing response. So that the user or client needs to monitor the paired field of the remote device with device/getStatus. Note:If the client calls LSCallCancel(), any active incoming pairing request is canceled the same way as if the adapter/cancelPairing method had been called.A remote device can only be paired to a single adapter.If it is ever possible to allow incoming pairing on adapters other than the default, an optional adapterAddress parameter will be added to the parameter list.Parameters */
export interface Bluetooth2AdapterAwaitPairingRequestsParameters {
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Note: Set subscribe to true. The caller must subscribe to this method. */
    subscribe: boolean;
}

/** ACG: bluetooth.operationDescriptionAwaits incoming pairing requests on the default Bluetooth adapter (only) by setting its state to be pairable. The caller must subscribe to this method. It expects the caller will stay subscribed to this method across multiple pairing requests for as long as the webOS device wishes to accept pairing requests.Only one pairing request, either incoming or outgoing, can be active for an adapter at a given time.An outgoing pairing request is active until the service ends the subscription to adapter/pair by sending a subscription response containing request:endPairing.An incoming pairing request is active once a subscription response to this method contains request:displayPinCode, request:displayPasskey, request:confirmPasskey, request:enterPinCode, or request:enterPinCode. An incoming pairing request becomes inactiveWhen a subscription response to this method contains request:endPairing.When the pairing succeeds (with the corresponding device having paired field as true). In this case, there is no request:endPairing response. So that the user or client needs to monitor the paired field of the remote device with device/getStatus. Note:If the client calls LSCallCancel(), any active incoming pairing request is canceled the same way as if the adapter/cancelPairing method had been called.A remote device can only be paired to a single adapter.If it is ever possible to allow incoming pairing on adapters other than the default, an optional adapterAddress parameter will be added to the parameter list.ParametersNameRequiredTypeDescriptionsubscribeRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Note: Set subscribe to true. The caller must subscribe to this method.Call Returns */
export interface Bluetooth2AdapterAwaitPairingRequestsCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.operationDescriptionAwaits incoming pairing requests on the default Bluetooth adapter (only) by setting its state to be pairable. The caller must subscribe to this method. It expects the caller will stay subscribed to this method across multiple pairing requests for as long as the webOS device wishes to accept pairing requests.Only one pairing request, either incoming or outgoing, can be active for an adapter at a given time.An outgoing pairing request is active until the service ends the subscription to adapter/pair by sending a subscription response containing request:endPairing.An incoming pairing request is active once a subscription response to this method contains request:displayPinCode, request:displayPasskey, request:confirmPasskey, request:enterPinCode, or request:enterPinCode. An incoming pairing request becomes inactiveWhen a subscription response to this method contains request:endPairing.When the pairing succeeds (with the corresponding device having paired field as true). In this case, there is no request:endPairing response. So that the user or client needs to monitor the paired field of the remote device with device/getStatus. Note:If the client calls LSCallCancel(), any active incoming pairing request is canceled the same way as if the adapter/cancelPairing method had been called.A remote device can only be paired to a single adapter.If it is ever possible to allow incoming pairing on adapters other than the default, an optional adapterAddress parameter will be added to the parameter list.ParametersNameRequiredTypeDescriptionsubscribeRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Note: Set subscribe to true. The caller must subscribe to this method.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details.Subscription Returns */
export interface Bluetooth2AdapterAwaitPairingRequestsSubscription {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed: boolean;
    /** Indicates the address (bdaddr) of the remote device with which pairing is being attempted. */
    address: string;
    /** Indicates the type of request.Possible values are:incomingPairRequest: Displays an incoming pairing request received from the remote device.displayPinCode: Displays pinCode until the endPairing response is sent by the service.displayPasskey: Display passkey until the endPairing response is sent by the service.confirmPasskey: Requests the user to confirm passkey; only used with devices supporting Simple Secure Pairing (SSP) and Bluetooth version 2.1 or later.enterPinCode: Requests the user to enter a PIN code.enterPasskey: Request the user to enter a passkey.continuePairing: The request to cancel pairing from adapter/cancelPairing failed.endPairing: The pairing process has been canceled; returnValue will contain false; errorCode and errorText will explain the failure. */
    request: string;
    /** Indicates the passkey for request:displayPasskey or request:confirmPasskey. */
    passkey?: string;
    /** Indicates the PIN code for request:displayPinCode. */
    pinCode?: string;
    /** Indicates the friendly name of the device displayed to the user.Note: When a previously undiscovered device is first discovered, the system makes up a reasonable value for this. */
    name: string;
}

/** ACG: bluetooth.operationDescriptionCancels discovering the remote Bluetooth devices.Note: Discovery of a specific adapter can be canceled based on the adapter address passed.Parameters */
export interface Bluetooth2AdapterCancelDiscoveryParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.operationDescriptionCancels discovering the remote Bluetooth devices.Note: Discovery of a specific adapter can be canceled based on the adapter address passed.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call Returns */
export interface Bluetooth2AdapterCancelDiscoveryCallReturn {
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.Note: returnValue will always contain true (even if there is no active discovery scan). */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.operationDescriptionCancels the pairing request with a remote device, either incoming or outgoing. Sends a success response immediately.Once the SIL (Stack Interface Layer) calls back,If the cancel succeeds, it causes a request:endPairing subscription response to adapter/pair or adapter/awaitPairingRequests with a "Pairing canceled by user" error.If the cancel fails, it causes a request:continuePairing subscription response.Parameters */
export interface Bluetooth2AdapterCancelPairingParameters {
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.operationDescriptionCancels the pairing request with a remote device, either incoming or outgoing. Sends a success response immediately.Once the SIL (Stack Interface Layer) calls back,If the cancel succeeds, it causes a request:endPairing subscription response to adapter/pair or adapter/awaitPairingRequests with a "Pairing canceled by user" error.If the cancel fails, it causes a request:continuePairing subscription response.ParametersNameRequiredTypeDescriptionaddressRequiredStringIndicates the address (bdaddr) of the remote device. adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call Returns */
export interface Bluetooth2AdapterCancelPairingCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.Note: returnValue will always contain true. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed: boolean;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.queryDescriptionReturns the status information about the Bluetooth adapters available in the system.Parameters */
export interface Bluetooth2AdapterGetStatusParameters {
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: false */
    subscribe?: boolean;
}

/** Contains the information about the status of the adapter identified by the adapterAddress parameter.The following values are read-only: DiscoveringPairablePairing */
export interface Bluetooth2Bluetooth2AdapterStatus {
    /** Indicates the address (bdaddr) of the adapter. */
    adapterAddress: string;
    /** Indicates the friendly name of the adapter.Note: The default name chosen by the system can be changed by the user. */
    name: string;
    /** Indicates that the adapter radio is powered on and is usable for discovery and connections. */
    powered: boolean;
    /** Indicates that the adapter is discovering other devices. */
    discovering: boolean;
    /** Indicates the timeout in seconds after which device discovery will be stopped.Note:A value of zero means that the timeout is disabled and the adapter will run the discovery process forever.Negative values are not allowed. */
    discoveryTimeout: number;
    /** Indicates that the adapter is in the process of pairing to a remote device, either via incoming or outgoing pairing. */
    pairing: boolean;
    /** Indicates if the adapter can be discovered by remote devices.Note:If discoverableTimeout has a non-zero value, discoverable be set back to false that number of seconds after the call to adapter/setState set it to true. */
    discoverable: boolean;
    /** Indicates the discoverable timeout in seconds.Note:A value of zero means that the timeout is disabled and the adapter will stay in discoverable mode until a call to adapter/setState sets discoverable to false.Negative values are not allowed. */
    discoverableTimeout: number;
    /** Indicates if the adapter can be paired to a remote device. It is initially false and is set to true when client is subscribed to adapter/awaitPairingRequests.Note:There is an exception to this field when the bluetooth capability is "NoInputNoOutput". In this case, pairable is always set to true, since pairing simply works without any responses on awaitPairingRequests.The client need not be subscribed to awaitPairingRequests when the bluetooth capability is "NoInputNoOutput". */
    pairable: boolean;
    /** Indicates the pairable timeout in seconds. Denotes the total time, the service will wait for the remote device to send a response after it has responded to an incoming pairing request.Note: A value of zero means that the timeout is disabled and it will wait forever for a response. Negative values are not allowed. */
    pairableTimeout: number;
    /** Indicates the value that is assigned to the "interfaceName" will be fixed during boot up and can not be changed.Note: The object property is used in the assignment of adapters to specific containers. */
    interfaceName: string;
}

/** ACG: bluetooth.queryDescriptionReturns the status information about the Bluetooth adapters available in the system.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: falseCall Returns */
export interface Bluetooth2AdapterGetStatusCallReturn {
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed: boolean;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.Note: returnValue will always contain true unless the request for subscription has failed. */
    returnValue: boolean;
    /** Contains the information for all the Bluetooth adapters available in the system.Note: If there are no available adapters, the array will be empty. */
    adapters: Bluetooth2Bluetooth2AdapterStatus[];
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.queryDescriptionReturns the status information about the Bluetooth adapters available in the system.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: falseCall ReturnsNameRequiredTypeDescriptionsubscribedRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.returnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.Note: returnValue will always contain true unless the request for subscription has failed.adaptersRequiredObject array: bluetooth2AdapterStatusContains the information for all the Bluetooth adapters available in the system.Note: If there are no available adapters, the array will be empty.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details.Subscription Returns */
export interface Bluetooth2AdapterGetStatusSubscription {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.Note: returnValue will always contain true unless the request for the subscription has failed. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed: boolean;
    /** Contains status information for all the Bluetooth adapters available in the system.Note: If there are no available adapters, the array will be empty. */
    adapters: Bluetooth2Bluetooth2AdapterStatus[];
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.operationDescriptionPairs a specific remote Bluetooth device with a specific Bluetooth adapter. The caller must subscribe to this method.Only one pairing request, either incoming or outgoing, can be active for an adapter at a given time.An outgoing pairing request is active until the service ends the subscription to this method by sending a subscription response containing request:endPairing.An incoming pairing request is active once a subscription response to adapter/awaitPairingRequests contains request:displayPinCode, request:displayPasskey, request:confirmPasskey, request:enterPinCode, or request:enterPinCode.An incoming pairing becomes inactive when a subscription response contains request:endPairing. If the client calls LSCallCancel(), the pairing is canceled the same way as if adapter/cancelPairing had been called.Note: A remote device can only be paired to a single adapter.Parameters */
export interface Bluetooth2AdapterPairParameters {
    /** Indicates the address (bdaddr) of the remote device with which pairing is being attempted. */
    address: string;
    /** Indicates if subscribed to get a notification when there is a change in the pairing status.Possible values are:true: Subscribed for notificationsfalse: Not subscribed.Note: Set subscribe to true. The caller must subscribe to this method. */
    subscribe: boolean;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.operationDescriptionPairs a specific remote Bluetooth device with a specific Bluetooth adapter. The caller must subscribe to this method.Only one pairing request, either incoming or outgoing, can be active for an adapter at a given time.An outgoing pairing request is active until the service ends the subscription to this method by sending a subscription response containing request:endPairing.An incoming pairing request is active once a subscription response to adapter/awaitPairingRequests contains request:displayPinCode, request:displayPasskey, request:confirmPasskey, request:enterPinCode, or request:enterPinCode.An incoming pairing becomes inactive when a subscription response contains request:endPairing. If the client calls LSCallCancel(), the pairing is canceled the same way as if adapter/cancelPairing had been called.Note: A remote device can only be paired to a single adapter.ParametersNameRequiredTypeDescriptionaddressRequiredStringIndicates the address (bdaddr) of the remote device with which pairing is being attempted.subscribeRequiredBooleanIndicates if subscribed to get a notification when there is a change in the pairing status.Possible values are:true: Subscribed for notificationsfalse: Not subscribed.Note: Set subscribe to true. The caller must subscribe to this method.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call Returns */
export interface Bluetooth2AdapterPairCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.operationDescriptionPairs a specific remote Bluetooth device with a specific Bluetooth adapter. The caller must subscribe to this method.Only one pairing request, either incoming or outgoing, can be active for an adapter at a given time.An outgoing pairing request is active until the service ends the subscription to this method by sending a subscription response containing request:endPairing.An incoming pairing request is active once a subscription response to adapter/awaitPairingRequests contains request:displayPinCode, request:displayPasskey, request:confirmPasskey, request:enterPinCode, or request:enterPinCode.An incoming pairing becomes inactive when a subscription response contains request:endPairing. If the client calls LSCallCancel(), the pairing is canceled the same way as if adapter/cancelPairing had been called.Note: A remote device can only be paired to a single adapter.ParametersNameRequiredTypeDescriptionaddressRequiredStringIndicates the address (bdaddr) of the remote device with which pairing is being attempted.subscribeRequiredBooleanIndicates if subscribed to get a notification when there is a change in the pairing status.Possible values are:true: Subscribed for notificationsfalse: Not subscribed.Note: Set subscribe to true. The caller must subscribe to this method.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details.Subscription Returns */
export interface Bluetooth2AdapterPairSubscription {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Note: subscribed will contain true until the request:endPairing response is sent by the service. */
    subscribed: boolean;
    /** Indicates the address (bdaddr) of the paired remote Bluetooth device. */
    address?: string;
    /** Indicates the type of return.Possible values are: displayPinCode: Displays pinCode until the endPairing response is sent by the service.displayPasskey: Displays passkey until the endPairing response is sent by the service.confirmPasskey: Requests the user to confirm passkey; only used with devices supporting Simple Secure Pairing (SSP) and Bluetooth version 2.1 or later.enterPinCode: Requests the user to enter a PIN code.enterPasskey: Requests the user to enter a passkey.continuePairing: Requests to cancel pairing from adapter/cancelPairing failed.endPairing - Indicates that the pairing process is complete; subscribed will contain false and returnValue indicates whether pairing succeeded; errorCode and errorText will explain the failure. */
    request?: string;
    /** Indicates the passkey for request:displayPasskey or request:confirmPasskey. */
    passkey?: number;
    /** Indicates the PIN code for request:displayPinCode. */
    pinCode?: string;
}

/** ACG: bluetooth.operationDescriptionReturns the information on the Bluetooth adapters currently available in the system. The caller subscribes to this method to get informed of added/removed adapters (e.g., Bluetooth dongles) dynamically.Note: The information returned for an adapter doesn't change while it is available.Parameters */
export interface Bluetooth2AdapterQueryAvailableParameters {
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: false */
    subscribe?: boolean;
}

/** Contains the Bluetooth service class information. */
export interface Bluetooth2Bluetooth2ServiceClass {
    /** Indicates a mnemonic for the UUID of the service class.Note:It is formed by taking the (upper or mixed case) official abbreviation for the profile from left-most column on https://www.bluetooth.com/specifications/profiles-overview/.When there are different UUIDs for a profile, append the profile abbreviation with the role, separated by a hyphen. */
    mnemonic: string;
    /** Indicates the LS2 category methods that can access the service class.Note:This is the lower-cased official abbreviation for the profile to which the service class is associated.The values are taken from https://www.bluetooth.com/specifications/profiles-overview/. */
    category: string;
}

/** An object containing constant information about the adapter. */
export interface Bluetooth2Bluetooth2Adapter {
    /** The address (bdaddr) of the adapter. */
    adapterAddress: string;
    /** If true, this is the default adapter and adapter/ methods called without an adapterAddress parameter will operate on it.Note that default (like all of the other values in this object) will not change while the adapter is present. This means if the default adapter is dynamic and is removed, there will no longer be an adapter with default set to true. */
    default: boolean;
    /** Class of the Bluetooth adapter. Values are taken from https://www.bluetooth.com/specifications/assigned-numbers/baseband/. */
    classofDevice: number;
    /** The name of the SIL (Stack Interface Layer) that wraps the Bluetooth stack used by this adapter. */
    stackName: string;
    /** Version of the Bluetooth stack that the adapter's SIL (Stack Interface Layer) wraps (not the version of the SIL itself). */
    stackVersion: string;
    /** Version of the firmware used by the adapter's hardware. */
    firmwareVersion: string;
    /** The Bluetooth Service Classes implemented for this adapter. */
    serviceClasses: Bluetooth2Bluetooth2ServiceClass[];
}

/** ACG: bluetooth.operationDescriptionReturns the information on the Bluetooth adapters currently available in the system. The caller subscribes to this method to get informed of added/removed adapters (e.g., Bluetooth dongles) dynamically.Note: The information returned for an adapter doesn't change while it is available.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: falseCall Returns */
export interface Bluetooth2AdapterQueryAvailableCallReturn {
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed: boolean;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.Note: returnValue will always contain true unless the request for subscription fails. */
    returnValue: boolean;
    /** Contains information of all the adapters currently available in the system.Note:The information of the adapter does not change by the user or by any operations.The information returned for an adapter does not change while it is available. If there are no available adapters, the array will be empty. */
    adapters: Bluetooth2Bluetooth2Adapter[];
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.operationDescriptionReturns the information on the Bluetooth adapters currently available in the system. The caller subscribes to this method to get informed of added/removed adapters (e.g., Bluetooth dongles) dynamically.Note: The information returned for an adapter doesn't change while it is available.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: falseCall ReturnsNameRequiredTypeDescriptionsubscribedRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.returnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.Note: returnValue will always contain true unless the request for subscription fails. adaptersRequiredObject array: bluetooth2AdapterContains information of all the adapters currently available in the system.Note:The information of the adapter does not change by the user or by any operations.The information returned for an adapter does not change while it is available. If there are no available adapters, the array will be empty.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details.Subscription Returns */
export interface Bluetooth2AdapterQueryAvailableSubscription {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.Note: returnValue will always contain true unless the request for subscription fails. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications. false: Not subscribed.Note: subscribed will contain true until the final response is sent by the service before stopping. */
    subscribed: boolean;
    /** Contains information of all the adapters currently available in the system.Note:The information of the adapter does not change by the user or by any operations.The information returned for an adapter does not change while it is available. If there are no available adapters, the array will be empty. */
    adapters: Bluetooth2Bluetooth2AdapterStatus[];
    /** The error code for the failed operation. */
    errorCode?: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.managementDescriptionSets the state of the specified Bluetooth adapter.Parameters */
export interface Bluetooth2AdapterSetStateParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the friendly name of the adapter. */
    name?: string;
    /** Indicates the power status of the adapter radio.Possible values are:true: Power ON false: Power OFF */
    powered?: boolean;
    /** Indicates the discovery timeout in seconds.Note:After discoveryTimeout seconds, the adapter will stop discovering remote Bluetooth devices.A value of 0 means that the timeout is disabled and the adapter will run the discovery process until the adapter/cancelDiscovery method is called.Negative values are not valid. */
    discoveryTimeout?: number;
    /** Indicates whether the adapter can be discovered by remote devices.Possible values are:true: Can be discoveredfalse: Cannot be discoveredDefault: falseNote: If discoverableTimeout is set to a non-zero value, discoverable will be set back to false when the timer expires. */
    discoverable?: boolean;
    /** Indicates the discoverable timeout in seconds.Note:A value of 0 means that the timeout is disabled and the adapter will stay in discoverable mode until discoverable is set to false.Negative values are not valid. */
    discoverableTimeout?: number;
    /** Indicates whether to enable the adapter to be paired to a remote device.Possible values are:true: Adapter can be pairedfalse: Adapter cannot be pairedDefault: true */
    pairable?: boolean;
    /** Indicates the pairable timeout in seconds.Note: After pairableTimeout seconds, the adapter is no longer pairable, and false is returned for pairable. */
    pairableTimeout?: number;
}

/** ACG: bluetooth.managementDescriptionSets the state of the specified Bluetooth adapter.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.nameOptionalStringIndicates the friendly name of the adapter.poweredOptionalBooleanIndicates the power status of the adapter radio.Possible values are:true: Power ON false: Power OFFdiscoveryTimeoutOptionalNumberIndicates the discovery timeout in seconds.Note:After discoveryTimeout seconds, the adapter will stop discovering remote Bluetooth devices.A value of 0 means that the timeout is disabled and the adapter will run the discovery process until the adapter/cancelDiscovery method is called.Negative values are not valid.discoverableOptionalBooleanIndicates whether the adapter can be discovered by remote devices.Possible values are:true: Can be discoveredfalse: Cannot be discoveredDefault: falseNote: If discoverableTimeout is set to a non-zero value, discoverable will be set back to false when the timer expires.discoverableTimeoutOptionalNumberIndicates the discoverable timeout in seconds.Note:A value of 0 means that the timeout is disabled and the adapter will stay in discoverable mode until discoverable is set to false.Negative values are not valid.pairableOptionalBooleanIndicates whether to enable the adapter to be paired to a remote device.Possible values are:true: Adapter can be pairedfalse: Adapter cannot be pairedDefault: truepairableTimeoutOptionalNumberIndicates the pairable timeout in seconds.Note: After pairableTimeout seconds, the adapter is no longer pairable, and false is returned for pairable.Call Returns */
export interface Bluetooth2AdapterSetStateCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.operationDescriptionStarts discovering the remote Bluetooth devices. Note:Discovery continues until adapter/cancelDiscovery is called or for bluetooth2AdapterStatus.discoveryTimeout seconds (if non-zero).The Discovery of a specific Adapter can be invoked by passing the adapter address.To get the list of devices found, subscribe to device/getStatus.Parameters */
export interface Bluetooth2AdapterStartDiscoveryParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.operationDescriptionStarts discovering the remote Bluetooth devices. Note:Discovery continues until adapter/cancelDiscovery is called or for bluetooth2AdapterStatus.discoveryTimeout seconds (if non-zero).The Discovery of a specific Adapter can be invoked by passing the adapter address.To get the list of devices found, subscribe to device/getStatus.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call Returns */
export interface Bluetooth2AdapterStartDiscoveryCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.operationDescriptionSupplies the user-entered passkey.Note: The passkey is entered when adapter/pair sends a subscription response containing request:enterPasskey.Parameters */
export interface Bluetooth2AdapterSupplyPasskeyParameters {
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates the passkey entered by the user. */
    passkey: number;
}

/** ACG: bluetooth.operationDescriptionSupplies the user-entered passkey.Note: The passkey is entered when adapter/pair sends a subscription response containing request:enterPasskey.ParametersNameRequiredTypeDescriptionaddressRequiredStringIndicates the address (bdaddr) of the remote device.passkeyRequiredNumberIndicates the passkey entered by the user.Call Returns */
export interface Bluetooth2AdapterSupplyPasskeyCallReturn {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.operationDescriptionSupplies the user's confirmation for the passkey.Note: The user confirms the passkey when adapter/pair sends a subscription response containing request:confirmPasskey.Parameters */
export interface Bluetooth2AdapterSupplyPasskeyConfirmationParameters {
    /** Indicates the address (bdaddr) of the remote device with which pairing is being attempted. */
    address: string;
    /** Indicates if the user has confirmed the passkey.Possible values are: true: User confirmed the passkey.false: User did not confirm the passkey. */
    accept: boolean;
}

/** ACG: bluetooth.operationDescriptionSupplies the user's confirmation for the passkey.Note: The user confirms the passkey when adapter/pair sends a subscription response containing request:confirmPasskey.ParametersNameRequiredTypeDescriptionaddressRequiredStringIndicates the address (bdaddr) of the remote device with which pairing is being attempted.acceptRequiredBooleanIndicates if the user has confirmed the passkey.Possible values are: true: User confirmed the passkey.false: User did not confirm the passkey.Call Returns */
export interface Bluetooth2AdapterSupplyPasskeyConfirmationCallReturn {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.Note: If accept is false, the adapter/pair method will send a final subscription response containing returnValue:false indicating that the pairing has failed. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.operationDescriptionSupplies the user-entered PIN code.Note: The PIN code is entered when adapter/pair sends a subscription response containing request:enterPinCode.Parameters */
export interface Bluetooth2AdapterSupplyPinCodeParameters {
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates the PIN code entered by the user. */
    pin: string;
}

/** ACG: bluetooth.operationDescriptionSupplies the user-entered PIN code.Note: The PIN code is entered when adapter/pair sends a subscription response containing request:enterPinCode.ParametersNameRequiredTypeDescriptionaddressRequiredStringIndicates the address (bdaddr) of the remote device.pinRequiredStringIndicates the PIN code entered by the user.Call Returns */
export interface Bluetooth2AdapterSupplyPinCodeCallReturn {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.Note: If the pin is incorrect, the adapter/pair method will send a final subscription response containing returnValue:false indicating that the pairing has failed. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.operationDescriptionDisconnects from the paired remote device.Note: All pairing information about the remote device will be removed and any open connections will be closed. However, the remote device is still discoverable.Parameters */
export interface Bluetooth2AdapterUnpairParameters {
    /** Indicates the address (bdaddr) of the remote device to unpair. */
    address: string;
}

/** ACG: bluetooth.operationDescriptionDisconnects from the paired remote device.Note: All pairing information about the remote device will be removed and any open connections will be closed. However, the remote device is still discoverable.ParametersNameRequiredTypeDescriptionaddressRequiredStringIndicates the address (bdaddr) of the remote device to unpair.Call Returns */
export interface Bluetooth2AdapterUnpairCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}
