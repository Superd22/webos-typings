/** ACG: bluetooth.operationDescriptionOpen a SPP connection to a remote Bluetooth device.Parameters */
export interface Bluetooth2SppConnectParameters {
    /** The address (bdaddr) of the remote device. */
    address: string;
    /** The UUID used when the server application opens its SPP channel. */
    uuid: string;
    /** To be notified when the connection is closed, set subscribe to true.Otherwise, set subscribe to false.The default value of subscribe is false. */
    subscribe?: boolean;
    /** The address of the adapter executing this method call.If not specified, the default adapter will be used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.operationDescriptionOpen a SPP connection to a remote Bluetooth device.ParametersNameRequiredTypeDescriptionaddressRequiredStringThe address (bdaddr) of the remote device.uuidRequiredStringThe UUID used when the server application opens its SPP channel.subscribeOptionalBooleanTo be notified when the connection is closed, set subscribe to true.Otherwise, set subscribe to false.The default value of subscribe is false.adapterAddressOptionalStringThe address of the adapter executing this method call.If not specified, the default adapter will be used.Call Returns */
export interface Bluetooth2SppConnectCallReturn {
    /** If the method succeeds, returnValue will contain true.If the method fails, returnValue will contain false. */
    returnValue: boolean;
    /** The address of the adapter the operation was performed on.If adapterAddress input parameter was not specified, the address of the default adapter will be returned. */
    adapterAddress: string;
    /** If it is subscribed, subscribed will contain true.If it is not subscribed, subscribed will contain false. */
    subscribed: boolean;
    /** The address (bdaddr) of the remote device. */
    address: string;
    /** Unique ID of a SPP channel, which has the following format: "nnn", 3 digit number increasing sequentially. */
    channelId?: string;
    /** errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. */
    errorText?: string;
    /** errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. */
    errorCode?: number;
}

/** ACG: bluetooth.operationDescriptionOpen a SPP connection to a remote Bluetooth device.ParametersNameRequiredTypeDescriptionaddressRequiredStringThe address (bdaddr) of the remote device.uuidRequiredStringThe UUID used when the server application opens its SPP channel.subscribeOptionalBooleanTo be notified when the connection is closed, set subscribe to true.Otherwise, set subscribe to false.The default value of subscribe is false.adapterAddressOptionalStringThe address of the adapter executing this method call.If not specified, the default adapter will be used.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIf the method succeeds, returnValue will contain true.If the method fails, returnValue will contain false.adapterAddressRequiredStringThe address of the adapter the operation was performed on.If adapterAddress input parameter was not specified, the address of the default adapter will be returned.subscribedRequiredBooleanIf it is subscribed, subscribed will contain true.If it is not subscribed, subscribed will contain false.addressRequiredStringThe address (bdaddr) of the remote device.channelIdOptionalStringUnique ID of a SPP channel, which has the following format: "nnn", 3 digit number increasing sequentially.errorTextOptionalStringerrorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details.errorCodeOptionalNumbererrorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details.Subscription Returns */
export interface Bluetooth2SppConnectSubscription {
    /** If the method succeeds, returnValue will contain true.If the method fails, returnValue will contain false. */
    returnValue: boolean;
    /** If it is subscribed, subscribed will contain true until the final response is sent by the service before stopping.If it is not subscribed, subscribed will contain false. */
    subscribed: boolean;
    /** The address of the adapter the operation was performed on.If adapterAddress input parameter was not specified, the address of the default adapter will be returned. */
    adapterAddress: string;
    /** If the remote device initiated the disconnect, disconnectByRemote will contain true.If the local user initiated the disconnect, disconnectByRemote will contain false. */
    disconnectByRemote: boolean;
    /** The address (bdaddr) of the remote device. */
    address?: string;
    /** The unique ID of a SPP channel, which has the following format: "nnn", 3 digit number increasing sequentially. */
    channelId?: string;
    /** errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. */
    errorText?: string;
    /** errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. */
    errorCode?: number;
}

/** ACG: bluetooth.operationDescriptionRegister a service record in the device service record database with the specified UUID and name. The channel can be removed through LSCallCancel().Parameters */
export interface Bluetooth2SppCreateChannelParameters {
    /** An identifiable name of a SPP service in the server, which the system will automatically write to a new Service Discovery Protocol (SDP) database entry on the device (the name is arbitrary and can simply be your application name). */
    name: string;
    /** The UUID is also included in the SDP entry and will be the basis for the connection agreement with the client device. That is, when the client attempts to connect with this device, it will carry a UUID that uniquely identifies the service with which it wants to connect. These UUIDs must match in order for the connection to be accepted. */
    uuid: string;
    /** Must set subscribe to true to be notified of changes to the channel (e.g., connection of client, removal of the channel). */
    subscribe: boolean;
    /** The address of the adapter executing this method. If not specified, the default adapter will be used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.operationDescriptionRegister a service record in the device service record database with the specified UUID and name. The channel can be removed through LSCallCancel().ParametersNameRequiredTypeDescriptionnameRequiredStringAn identifiable name of a SPP service in the server, which the system will automatically write to a new Service Discovery Protocol (SDP) database entry on the device (the name is arbitrary and can simply be your application name).uuidRequiredStringThe UUID is also included in the SDP entry and will be the basis for the connection agreement with the client device. That is, when the client attempts to connect with this device, it will carry a UUID that uniquely identifies the service with which it wants to connect. These UUIDs must match in order for the connection to be accepted.subscribeRequiredBooleanMust set subscribe to true to be notified of changes to the channel (e.g., connection of client, removal of the channel).adapterAddressOptionalStringThe address of the adapter executing this method. If not specified, the default adapter will be used.Call Returns */
export interface Bluetooth2SppCreateChannelCallReturn {
    /** If the method succeeds, returnValue will contain true.If the method fails, returnValue will contain false. */
    returnValue: boolean;
    /** The address of the adapter the operation was performed on.If adapterAddress input parameter was not specified, the address of the default adapter will be returned. */
    adapterAddress: string;
    /** subscribe will always contain true. */
    subscribed: boolean;
    /** errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. */
    errorText?: string;
    /** errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. */
    errorCode?: number;
}

/** ACG: bluetooth.operationDescriptionRegister a service record in the device service record database with the specified UUID and name. The channel can be removed through LSCallCancel().ParametersNameRequiredTypeDescriptionnameRequiredStringAn identifiable name of a SPP service in the server, which the system will automatically write to a new Service Discovery Protocol (SDP) database entry on the device (the name is arbitrary and can simply be your application name).uuidRequiredStringThe UUID is also included in the SDP entry and will be the basis for the connection agreement with the client device. That is, when the client attempts to connect with this device, it will carry a UUID that uniquely identifies the service with which it wants to connect. These UUIDs must match in order for the connection to be accepted.subscribeRequiredBooleanMust set subscribe to true to be notified of changes to the channel (e.g., connection of client, removal of the channel).adapterAddressOptionalStringThe address of the adapter executing this method. If not specified, the default adapter will be used.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIf the method succeeds, returnValue will contain true.If the method fails, returnValue will contain false.adapterAddressRequiredStringThe address of the adapter the operation was performed on.If adapterAddress input parameter was not specified, the address of the default adapter will be returned.subscribedRequiredBooleansubscribe will always contain true.errorTextOptionalStringerrorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details.errorCodeOptionalNumbererrorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details.Subscription Returns */
export interface Bluetooth2SppCreateChannelSubscription {
    /** If the channel is successfully created, returnValue will contain true.Otherwise, returnValue will contain false. */
    returnValue: boolean;
    /** If the subscription request succeeds, subscribed will contain true while the channel is alive.If the channel is removed, subscribed will contain false. */
    subscribed: boolean;
    /** The address of the adapter the operation was performed on.If adapterAddress input parameter was not specified, the address of the default adapter will be returned. */
    adapterAddress: string;
    /** Unique ID of a SPP channel, which has the following format: "nnn", 3 digit number increasing sequentially. */
    channelId: string;
    /** If the connection is open, connected will contain true.Otherwise, connected will contain false. */
    connected: boolean;
    /** The address (bdaddr) of the device. */
    address?: string;
    /** errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. */
    errorText?: string;
    /** errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. */
    errorCode?: number;
}

/** ACG: bluetooth.operationDescriptionDrop the connection to the given remote device on SPP profile.Parameters */
export interface Bluetooth2SppDisconnectParameters {
    /** Unique ID of a SPP channel, which has the following format: "nnn", 3 digit number increasing sequentially. */
    channelId: string;
    /** The address of the adapter executing this method. If not specified, the default adapter will be used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.operationDescriptionDrop the connection to the given remote device on SPP profile.ParametersNameRequiredTypeDescriptionchannelIdRequiredStringUnique ID of a SPP channel, which has the following format: "nnn", 3 digit number increasing sequentially.adapterAddressOptionalStringThe address of the adapter executing this method. If not specified, the default adapter will be used.Call Returns */
export interface Bluetooth2SppDisconnectCallReturn {
    /** If the method succeeds, returnValue will contain true.If the method fails, returnValue will contain false. */
    returnValue: boolean;
    /** The address of the adapter the operation was performed on.If adapterAddress input parameter was not specified, the address of the default adapter will be returned. */
    adapterAddress: string;
    /** errorText contains the error text if the method fails.The method will return errorText only if it fails.See the Error Codes Reference of this method for more details. */
    errorText?: string;
    /** errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. */
    errorCode?: number;
}

/** ACG: bluetooth.queryDescriptionReturn the status of a SPP connection to a remote device.Parameters */
export interface Bluetooth2SppGetStatusParameters {
    /** The address (bdaddr) of the remote device. */
    address: string;
    /** To be notified of changes to the connection, set subscribe to true.Otherwise, set subscribe to false.The default value of subscribe is false. */
    subscribe?: boolean;
    /** The address of the adapter executing this method call. When the field is not set, the default adapter is used for it. */
    adapterAddress?: string;
}

/** ACG: bluetooth.queryDescriptionReturn the status of a SPP connection to a remote device.ParametersNameRequiredTypeDescriptionaddressRequiredStringThe address (bdaddr) of the remote device.subscribeOptionalBooleanTo be notified of changes to the connection, set subscribe to true.Otherwise, set subscribe to false.The default value of subscribe is false. adapterAddressOptionalStringThe address of the adapter executing this method call. When the field is not set, the default adapter is used for it.Call Returns */
export interface Bluetooth2SppGetStatusCallReturn {
    /** If the method succeeds, returnValue will contain true.If the method fails, returnValue will contain false. */
    returnValue: boolean;
    /** If the connection request is currently being processed, connecting will contain true.Otherwise, connecting will contain false. For example, the Bluetooth stack is no longer processing the connection request. */
    connecting: boolean;
    /** If the connection is open, connected will contain true.Otherwise, connected will contain false. */
    connected: boolean;
    /** The address of the adapter the operation was performed on.If adapterAddress input parameter was not specified, the address of the default adapter will be returned. */
    adapterAddress: string;
    /** Array of channel IDs which are connected currently. */
    connectedChannels: string[];
    /** If it is subscribed, subscribed will contain true.If it is not subscribed, subscribed will contain false. */
    subscribed: boolean;
    /** errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. */
    errorText?: string;
    /** errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. */
    errorCode?: number;
}

/** ACG: bluetooth.queryDescriptionReturn the status of a SPP connection to a remote device.ParametersNameRequiredTypeDescriptionaddressRequiredStringThe address (bdaddr) of the remote device.subscribeOptionalBooleanTo be notified of changes to the connection, set subscribe to true.Otherwise, set subscribe to false.The default value of subscribe is false. adapterAddressOptionalStringThe address of the adapter executing this method call. When the field is not set, the default adapter is used for it.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIf the method succeeds, returnValue will contain true.If the method fails, returnValue will contain false.connectingRequiredBooleanIf the connection request is currently being processed, connecting will contain true.Otherwise, connecting will contain false. For example, the Bluetooth stack is no longer processing the connection request.connectedRequiredBooleanIf the connection is open, connected will contain true.Otherwise, connected will contain false.adapterAddressRequiredStringThe address of the adapter the operation was performed on.If adapterAddress input parameter was not specified, the address of the default adapter will be returned.connectedChannelsRequiredString arrayArray of channel IDs which are connected currently.subscribedRequiredBooleanIf it is subscribed, subscribed will contain true.If it is not subscribed, subscribed will contain false. errorTextOptionalStringerrorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details.errorCodeOptionalNumbererrorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details.Subscription Returns */
export interface Bluetooth2SppGetStatusSubscription {
    /** If the method succeeds, returnValue will contain true.If the method fails, returnValue will contain false. */
    returnValue: boolean;
    /** If it is subscribed, subscribed will contain true until the final response is sent by the service before stopping.If it is not subscribed, subscribed will contain false. */
    subscribed?: boolean;
    /** If the connection request is currently being processed, connecting will contain true.Otherwise, connecting will contain false. For example, the Bluetooth stack is no longer processing the connection request. */
    connecting: boolean;
    /** If the connection is open, connected will contain true.Otherwise, connected will contain false. */
    connected: boolean;
    /** The address of the adapter the operation was performed on.If adapterAddress input parameter was not specified, the address of the default adapter will be returned. */
    adapterAddress: string;
    /** Array of channel IDs which are connected currently. */
    connectedChannels: string[];
    /** errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. */
    errorText?: string;
    /** errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. */
    errorCode?: number;
}

/** ACG: bluetooth.operationDescriptionReceive data from the connected remote device. Parameters */
export interface Bluetooth2SppReadDataParameters {
    /** Unique ID of a SPP channel.If channelId is not specified, all connected channel IDs from which the caller received data will be returned. */
    channelId?: string;
    /** To read the data continuously, set subscribe to true.Otherwise, set subscribe to false.The default value of subscribe is true. */
    subscribe?: boolean;
    /** The receive timeout in seconds.It is available only when subscribe is set to true. After timeout seconds, the subscription is canceled. A value of 0 means that the timeout is disabled. */
    timeout?: number;
    /** The address of the adapter executing this method.If not specified, the default adapter will be used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.operationDescriptionReceive data from the connected remote device. ParametersNameRequiredTypeDescriptionchannelIdOptionalStringUnique ID of a SPP channel.If channelId is not specified, all connected channel IDs from which the caller received data will be returned. subscribeOptionalBooleanTo read the data continuously, set subscribe to true.Otherwise, set subscribe to false.The default value of subscribe is true.timeoutOptionalNumberThe receive timeout in seconds.It is available only when subscribe is set to true. After timeout seconds, the subscription is canceled. A value of 0 means that the timeout is disabled.adapterAddressOptionalStringThe address of the adapter executing this method.If not specified, the default adapter will be used.Call Returns */
export interface Bluetooth2SppReadDataCallReturn {
    /** If the method succeeds, returnValue will contain true.If the method fails, returnValue will contain false. */
    returnValue: boolean;
    /** The address of the adapter the operation was performed on.If adapterAddress input parameter was not specified, the address of the default adapter will be returned. */
    adapterAddress: string;
    /** If it is subscribed, subscribed will contain true.If it is not subscribed, subscribed will contain false. */
    subscribed: boolean;
    /** Unique ID of a SPP channel. */
    channelId: string;
    /** BASE64-encoded string data received from the remote device. Before using the data, BASE64 decoding is needed. */
    data?: string;
    /** errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. */
    errorText?: string;
    /** errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. */
    errorCode?: number;
}

/** ACG: bluetooth.operationDescriptionReceive data from the connected remote device. ParametersNameRequiredTypeDescriptionchannelIdOptionalStringUnique ID of a SPP channel.If channelId is not specified, all connected channel IDs from which the caller received data will be returned. subscribeOptionalBooleanTo read the data continuously, set subscribe to true.Otherwise, set subscribe to false.The default value of subscribe is true.timeoutOptionalNumberThe receive timeout in seconds.It is available only when subscribe is set to true. After timeout seconds, the subscription is canceled. A value of 0 means that the timeout is disabled.adapterAddressOptionalStringThe address of the adapter executing this method.If not specified, the default adapter will be used.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIf the method succeeds, returnValue will contain true.If the method fails, returnValue will contain false.adapterAddressRequiredStringThe address of the adapter the operation was performed on.If adapterAddress input parameter was not specified, the address of the default adapter will be returned.subscribedRequiredBooleanIf it is subscribed, subscribed will contain true.If it is not subscribed, subscribed will contain false.channelIdRequiredStringUnique ID of a SPP channel.dataOptionalStringBASE64-encoded string data received from the remote device. Before using the data, BASE64 decoding is needed.errorTextOptionalStringerrorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details.errorCodeOptionalNumbererrorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details.Subscription Returns */
export interface Bluetooth2SppReadDataSubscription {
    /** If the method succeeds, returnValue will contain true.If the method fails, returnValue will contain false. */
    returnValue: boolean;
    /** If it is subscribed, subscribed will contain true until the final response is sent by the service before stopping.If it is not subscribed, subscribed will contain false. */
    subscribed: boolean;
    /** The address of the adapter the operation was performed on.If adapterAddress input parameter was not specified, the address of the default adapter will be returned. */
    adapterAddress: string;
    /** Unique ID of a SPP channel. */
    channelId: string;
    /** BASE64-encoded string data received from the remote device. Before using the data, BASE64 decoding is needed. */
    data?: string;
    /** errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. */
    errorText?: string;
    /** errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. */
    errorCode?: number;
}

/** ACG: bluetooth.operationDescriptionTransfer data to the connected remote device. Parameters */
export interface Bluetooth2SppWriteDataParameters {
    /** Unique ID of a SPP channel. */
    channelId: string;
    /** Data to send. This string data should be encoded to BASE64. */
    data: string;
    /** The address of the adapter executing this method. If not specified, the default adapter will be used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.operationDescriptionTransfer data to the connected remote device. ParametersNameRequiredTypeDescriptionchannelIdRequiredStringUnique ID of a SPP channel.dataRequiredStringData to send. This string data should be encoded to BASE64.adapterAddressOptionalStringThe address of the adapter executing this method. If not specified, the default adapter will be used.Call Returns */
export interface Bluetooth2SppWriteDataCallReturn {
    /** If the method succeeds, returnValue will contain true.If the method fails, returnValue will contain false. */
    returnValue: boolean;
    /** The address of the adapter the operation was performed on.If adapterAddress input parameter was not specified, the address of the default adapter will be returned. */
    adapterAddress: string;
    /** errorText contains the error text if the method fails. The method will return errorText only if it fails. See the Error Codes Reference of this method for more details. */
    errorText?: string;
    /** errorCode contains the error code if the method fails. The method will return errorCode only if it fails. See the Error Codes Reference of this method for more details. */
    errorCode?: number;
}
