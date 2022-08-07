/** ACG: bluetooth.managementDescriptionAccept a Bluetooth object push request. This method is available only for a push server.Parameters */
export interface Bluetooth2OppAcceptTransferRequestParameters {
    /** The unique ID of a request. */
    requestId: string;
    /** The address of the adapter executing this method.If not specified, the default adapter will be used. */
    adapaterAddress?: string;
}

/** ACG: bluetooth.managementDescriptionAccept a Bluetooth object push request. This method is available only for a push server.ParametersNameRequiredTypeDescriptionrequestIdRequiredStringThe unique ID of a request.adapaterAddressOptionalStringThe address of the adapter executing this method.If not specified, the default adapter will be used.Call Returns */
export interface Bluetooth2OppAcceptTransferRequestCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The address of the adapter the operation was performed on.If adapterAddress input parameter was not specified, the address of the default adapter will be returned. */
    adapterAddress: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}

/** ACG: bluetooth.managementDescriptionAwait incoming transfer requests from push clients. This method is available only for a push server.Parameters */
export interface Bluetooth2OppAwaitTransferRequestParameters {
    /** Subscribe and get notifications. Possible values are:true - Subscribed for changes.false - Not subscribed.Note: The caller MUST subscribe to this method. */
    subscribe: boolean;
    /** The address of the adapter executing this method.If not specified, the default adapter will be used. */
    adapterAddress?: string;
}

/** Object containing information about an OPP push request */
export interface Bluetooth2Bluetooth2PushRequest {
    /** Unique ID of a request, which has the following format: "nnn", 3 digit number increasing sequentially from the formerly highest requestId. The logs for 999 numbers of requests are maintained in a system. If a user does not delete the logs of some requests manually, the logs will be deleted (oldest first). */
    requestId: string;
    /** The address (bdaddr) of the device where the file came. */
    address: string;
    /** The name of the device where the file came. */
    name: string;
    /** The name of the file received from a remote device. */
    fileName: string;
    /** The file size in bytes. */
    fileSize: number;
    /** Number of bytes transferred so far. */
    transferred?: number;
}

/** ACG: bluetooth.managementDescriptionAwait incoming transfer requests from push clients. This method is available only for a push server.ParametersNameRequiredTypeDescriptionsubscribeRequiredBooleanSubscribe and get notifications. Possible values are:true - Subscribed for changes.false - Not subscribed.Note: The caller MUST subscribe to this method.adapterAddressOptionalStringThe address of the adapter executing this method.If not specified, the default adapter will be used.Subscription Returns */
export interface Bluetooth2OppAwaitTransferRequestSubscription {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The address of the adapter the operation was performed on.If adapterAddress input parameter was not specified, the address of the default adapter will be returned. */
    adapterAddress: string;
    /** Indicates if subscribed to get notifications. Possible values are:true - Subscribed for changes.false - Not subscribed.Since subscription ends only when the client chooses to close it, subscribed will always contain true. */
    subscribed: boolean;
    /** A request information including request ID, client name, client address, file name, and file size. */
    request?: Bluetooth2Bluetooth2PushRequest;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}

/** ACG: bluetooth.managementDescriptionCancel an ongoing file transfer. This method is available only for a push server. In a client side, LSCallCancel() is used to cancel the transfer.Parameters */
export interface Bluetooth2OppCancelTransferParameters {
    /** The unique ID of a request. */
    requestId: string;
}

/** ACG: bluetooth.managementDescriptionCancel an ongoing file transfer. This method is available only for a push server. In a client side, LSCallCancel() is used to cancel the transfer.ParametersNameRequiredTypeDescriptionrequestIdRequiredStringThe unique ID of a request.Call Returns */
export interface Bluetooth2OppCancelTransferCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}

/** ACG: bluetooth.managementDescriptionOpen (or initialize) an OPP connection to a remote Bluetooth device.In some cases of such as using BSA stack, only initialization of OPP capability is done by this method and the actual Bluetooth connection is created through the opp/pushFile method.If the client calls LSCallCancel(), the connection is closed and OPP setup is deinitialized (the opp/disconnect method also can be used for the disconnection). This method is available only for a push client.Parameters */
export interface Bluetooth2OppConnectParameters {
    /** The address (bdaddr) of the remote device. */
    address: string;
    /** Subscribe and get notified when connection is closed. Possible values are:true - Subscribed for changes.false - Not subscribed.Default value: false */
    subscribe?: boolean;
}

/** ACG: bluetooth.managementDescriptionOpen (or initialize) an OPP connection to a remote Bluetooth device.In some cases of such as using BSA stack, only initialization of OPP capability is done by this method and the actual Bluetooth connection is created through the opp/pushFile method.If the client calls LSCallCancel(), the connection is closed and OPP setup is deinitialized (the opp/disconnect method also can be used for the disconnection). This method is available only for a push client.ParametersNameRequiredTypeDescriptionaddressRequiredStringThe address (bdaddr) of the remote device.subscribeOptionalBooleanSubscribe and get notified when connection is closed. Possible values are:true - Subscribed for changes.false - Not subscribed.Default value: falseCall Returns */
export interface Bluetooth2OppConnectCallReturn {
    /** Indicates if subscribed to get notifications. Possible values are:true - Subscribed for changes.false - Not subscribed. */
    subscribed: boolean;
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}

/** ACG: bluetooth.managementDescriptionOpen (or initialize) an OPP connection to a remote Bluetooth device.In some cases of such as using BSA stack, only initialization of OPP capability is done by this method and the actual Bluetooth connection is created through the opp/pushFile method.If the client calls LSCallCancel(), the connection is closed and OPP setup is deinitialized (the opp/disconnect method also can be used for the disconnection). This method is available only for a push client.ParametersNameRequiredTypeDescriptionaddressRequiredStringThe address (bdaddr) of the remote device.subscribeOptionalBooleanSubscribe and get notified when connection is closed. Possible values are:true - Subscribed for changes.false - Not subscribed.Default value: falseCall ReturnsNameRequiredTypeDescriptionsubscribedRequiredBooleanIndicates if subscribed to get notifications. Possible values are:true - Subscribed for changes.false - Not subscribed.returnValueRequiredBooleanIndicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details.errorCodeOptionalNumberThe error code for the failed operation.Subscription Returns */
export interface Bluetooth2OppConnectSubscription {
    /** Indicates whether the remote device or local user initiated the disconnect. Possible values are:true - Disconnect initiated by remote device.false - Disconnect initiated by local user. */
    disconnectByRemote: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** If the connection was successfully open (or initialized), returnValue will contain true.Otherwise, returnValue will contain false. */
    returnValue: boolean;
    /** If it is subscribed, subscribed will contain true until the final response sent by the service before stopping.If it is not subscribed, subscribed will contain false. */
    subscribed: boolean;
}

/** ACG: bluetooth.managementDescriptionClose (or deinitialize) the connection to the given remote device on OPP profile.In some cases of such as using BSA stack, this method performs only deinitialization of the OPP-related setup and the actual Bluetooth connection is dropped after finishing file transfer. This method is available only for a push client.Parameters */
export interface Bluetooth2OppDisconnectParameters {
    /** The address (bdaddr) of the remote device. */
    address: string;
}

/** ACG: bluetooth.managementDescriptionClose (or deinitialize) the connection to the given remote device on OPP profile.In some cases of such as using BSA stack, this method performs only deinitialization of the OPP-related setup and the actual Bluetooth connection is dropped after finishing file transfer. This method is available only for a push client.ParametersNameRequiredTypeDescriptionaddressRequiredStringThe address (bdaddr) of the remote device.Call Returns */
export interface Bluetooth2OppDisconnectCallReturn {
    /** If the connection is successfully closed (or deinitialized), returnValue will contain true.Otherwise, returnValue will contain false. */
    returnValue: boolean;
    /** errorText contains the error text if the method fails. The method will return errorText only if it fails.See the Error Codes Reference of this method for more details. */
    errorText?: string;
    /** errorCode contains the error code if the method fails. The method will return errorCode only if it fails.See the Error Codes Reference of this method for more details. */
    errorCode?: number;
}

/** ACG: bluetooth.queryDescriptionReturn the status of an OPP connection to a remote Bluetooth device. This method is available for both of client and server.Parameters */
export interface Bluetooth2OppGetStatusParameters {
    /** The address (bdaddr) of the remote device. */
    address: string;
    /** To be notified of changes to the connection, set subscribe to true.Otherwise, set subscribe to false. */
    subscribe?: boolean;
}

/** ACG: bluetooth.queryDescriptionReturn the status of an OPP connection to a remote Bluetooth device. This method is available for both of client and server.ParametersNameRequiredTypeDescriptionaddressRequiredStringThe address (bdaddr) of the remote device.subscribeOptionalBooleanTo be notified of changes to the connection, set subscribe to true.Otherwise, set subscribe to false.Call Returns */
export interface Bluetooth2OppGetStatusCallReturn {
    /** If the status is successfully returned, returnValue will contain true.Otherwise, returnValue will contain false. */
    returnValue: boolean;
    /** If the connection (or push) request is currently being processed, connecting will contain true.Otherwise, connecting will contain false. For example, the Bluetooth stack is no longer processing the connection request. */
    connecting: boolean;
    /** If the connection is open, connected will contain true.Otherwise, connected will contain false. */
    connected: boolean;
    /** errorText contains the error text if the method fails. The method will return errorText only if it fails.See the Error Codes Reference of this method for more details. */
    errorText?: string;
    /** errorCode contains the error code if the method fails. The method will return errorCode only if it fails.See the Error Codes Reference of this method for more details. */
    errorCode?: number;
}

/** ACG: bluetooth.queryDescriptionReturn the status of an OPP connection to a remote Bluetooth device. This method is available for both of client and server.ParametersNameRequiredTypeDescriptionaddressRequiredStringThe address (bdaddr) of the remote device.subscribeOptionalBooleanTo be notified of changes to the connection, set subscribe to true.Otherwise, set subscribe to false.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIf the status is successfully returned, returnValue will contain true.Otherwise, returnValue will contain false.connectingRequiredBooleanIf the connection (or push) request is currently being processed, connecting will contain true.Otherwise, connecting will contain false. For example, the Bluetooth stack is no longer processing the connection request.connectedRequiredBooleanIf the connection is open, connected will contain true.Otherwise, connected will contain false.errorTextOptionalStringerrorText contains the error text if the method fails. The method will return errorText only if it fails.See the Error Codes Reference of this method for more details.errorCodeOptionalNumbererrorCode contains the error code if the method fails. The method will return errorCode only if it fails.See the Error Codes Reference of this method for more details.Subscription Returns */
export interface Bluetooth2OppGetStatusSubscription {
    /** If the status is successfully returned, returnValue will contain true.Otherwise, returnValue will contain false. */
    returnValue: boolean;
    /** If the method is subscribed, subscribed will contain true until the final response is sent by the service before stopping. If the method is not subscribed, subscribed will contain false. */
    subscribed: boolean;
    /** If the connection (or push) request is currently being processed, connecting will contain true.Otherwise, connecting will contain false. For example, the Bluetooth stack is no longer processing the connection request. */
    connecting: boolean;
    /** If the connection is open, connected will contain true.Otherwise, connected will contain false. */
    connected: boolean;
    /** errorText contains the error text if the method fails. The method will return errorText only if it fails.See the Error Codes Reference of this method for more details. */
    errorText?: string;
    /** errorCode contains the error code if the method fails. The method will return errorCode only if it fails.See the Error Codes Reference of this method for more details. */
    errorCode?: number;
}

/** ACG: bluetooth.managementDescriptionReturn the status of ongoing file transfer requests. This method is only available for server.Parameters */
export interface Bluetooth2OppMonitorTransferParameters {
    /** Must set subscribe to true. */
    subscribe: boolean;
    /** The address of the adapter executing this method call.If not specified, the default adapter will be used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.managementDescriptionReturn the status of ongoing file transfer requests. This method is only available for server.ParametersNameRequiredTypeDescriptionsubscribeRequiredBooleanMust set subscribe to true.adapterAddressOptionalStringThe address of the adapter executing this method call.If not specified, the default adapter will be used.Subscription Returns */
export interface Bluetooth2OppMonitorTransferSubscription {
    /** subscribed will always contain true since subscription ends only when the client chooses to close it. */
    subscribed: boolean;
    /** If the status is successfully returned, returnValue will contain true.Otherwise, returnValue will contain false. */
    returnValue: boolean;
    /** The address of the adapter the operation was performed on.If adapterAddress input parameter was not specified, the address of the default adapter will be returned. */
    adapterAddress: string;
    /** Request information including data size transferred so far. */
    transfers?: Bluetooth2Bluetooth2PushRequest[];
    /** errorText contains the error text if the method fails. The method will return errorText only if it fails.See the Error Codes Reference of this method for more details. */
    errorText?: string;
    /** errorCode contains the error code if the method fails. The method will return errorCode only if it fails.See the Error Codes Reference of this method for more details */
    errorCode?: number;
}

/** ACG: bluetooth.managementDescriptionPush a file to a remote Bluetooth device. This method is available only for push client. If the client calls LSCallCancel(), the file transfer is cancelled.Parameters */
export interface Bluetooth2OppPushFileParameters {
    /** The address (bdaddr) of the remote device. */
    address: string;
    /** Absolute path of the source file, rooted at /media/internal. */
    sourceFile: string;
    /** To monitor the progress of the transfer, set subscribe to true.Otherwise, set subscribe to false.The default value of subscribed is false. */
    subscribe?: boolean;
    /** The address of the adapter executing this method.If not specified, the default adapter will be used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.managementDescriptionPush a file to a remote Bluetooth device. This method is available only for push client. If the client calls LSCallCancel(), the file transfer is cancelled.ParametersNameRequiredTypeDescriptionaddressRequiredStringThe address (bdaddr) of the remote device.sourceFileRequiredStringAbsolute path of the source file, rooted at /media/internal.subscribeOptionalBooleanTo monitor the progress of the transfer, set subscribe to true.Otherwise, set subscribe to false.The default value of subscribed is false.adapterAddressOptionalStringThe address of the adapter executing this method.If not specified, the default adapter will be used.Call Returns */
export interface Bluetooth2OppPushFileCallReturn {
    /** If the file transfer succeeds, returnValue will contain true.Otherwise, returnValue will contain false. (The non-subscription response is only sent after the transfer has completed.) */
    returnValue: boolean;
    /** The address of the adapter the operation was performed on.If adapterAddress input parameter was not specified, the address of the default adapter will be returned. */
    adapterAddress: string;
    /** If it is subscribed, subscribed will contain true.If it is not subscribed, subscribed will contain false. */
    subscribed: boolean;
    /** errorText contains the error text if the method fails. The method will return errorText only if it fails.See the Error Codes Reference of this method for more details. */
    errorText?: string;
    /** errorCode contains the error code if the method fails. The method will return errorCode only if it fails.See the Error Codes Reference of this method for more details */
    errorCode?: number;
}

/** ACG: bluetooth.managementDescriptionPush a file to a remote Bluetooth device. This method is available only for push client. If the client calls LSCallCancel(), the file transfer is cancelled.ParametersNameRequiredTypeDescriptionaddressRequiredStringThe address (bdaddr) of the remote device.sourceFileRequiredStringAbsolute path of the source file, rooted at /media/internal.subscribeOptionalBooleanTo monitor the progress of the transfer, set subscribe to true.Otherwise, set subscribe to false.The default value of subscribed is false.adapterAddressOptionalStringThe address of the adapter executing this method.If not specified, the default adapter will be used.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIf the file transfer succeeds, returnValue will contain true.Otherwise, returnValue will contain false. (The non-subscription response is only sent after the transfer has completed.)adapterAddressRequiredStringThe address of the adapter the operation was performed on.If adapterAddress input parameter was not specified, the address of the default adapter will be returned.subscribedRequiredBooleanIf it is subscribed, subscribed will contain true.If it is not subscribed, subscribed will contain false. errorTextOptionalStringerrorText contains the error text if the method fails. The method will return errorText only if it fails.See the Error Codes Reference of this method for more details.errorCodeOptionalNumbererrorCode contains the error code if the method fails. The method will return errorCode only if it fails.See the Error Codes Reference of this method for more detailsSubscription Returns */
export interface Bluetooth2OppPushFileSubscription {
    /** In case subscribed contains true, returnValue will always contain true.In case subscribed contains false (indicating the final response from the service),If the file transfer succeeds, returnValue will contain true.Otherwise, returnValue will contain false. */
    returnValue: boolean;
    /** The address of the adapter the operation was performed on.If adapterAddress input parameter was not specified, the address of the default adapter will be returned. */
    adapterAddress: string;
    /** If it is subscribed, subscribed will contain true until the final response is sent by the service before stopping.If it is not subscribed, subscribed will contain false. */
    subscribed: boolean;
    /** Number of bytes transferred so far. */
    transferred?: number;
    /** Size in bytes of the source file. */
    size?: number;
    /** errorText contains the error text if the method fails. The method will return errorText only if it fails.See the Error Codes Reference of this method for more details. */
    errorText?: string;
    /** errorCode contains the error code if the method fails. The method will return errorCode only if it fails.See the Error Codes Reference of this method for more details. */
    errorCode?: number;
}

/** ACG: bluetooth.managementDescriptionReject a Bluetooth object push request. This method is available only for a push server.Parameters */
export interface Bluetooth2OppRejectTransferRequestParameters {
    /** The unique ID of a request. */
    requestId: string;
    /** The address of the adapter executing this method.If not specified, the default adapter will be used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.managementDescriptionReject a Bluetooth object push request. This method is available only for a push server.ParametersNameRequiredTypeDescriptionrequestIdRequiredStringThe unique ID of a request.adapterAddressOptionalStringThe address of the adapter executing this method.If not specified, the default adapter will be used.Call Returns */
export interface Bluetooth2OppRejectTransferRequestCallReturn {
    /** If the method succeeds, returnValue will contain true.If the method fails, returnValue will contain false. */
    returnValue: boolean;
    /** The address of the adapter the operation was performed on.If adapterAddress input parameter was not specified, the address of the default adapter will be returned. */
    adapterAddress: string;
    /** errorText contains the error text if the method fails. The method will return errorText only if it fails.See the Error Codes Reference of this method for more details. */
    errorText?: string;
    /** errorCode contains the error code if the method fails. The method will return errorCode only if it fails.See the Error Codes Reference of this method for more details. */
    errorCode?: number;
}
