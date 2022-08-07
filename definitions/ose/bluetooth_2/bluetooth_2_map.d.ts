/** ACG: bluetooth.managementDescriptionConnects to the MAS Instance of the specified remote device.Note: The method is available only for MCE.Parameters */
export interface Bluetooth2MapConnectParameters {
    /** Indicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the address of the remote device (MSE). */
    address: string;
    /** Indicates the specific MAS instance of the MSE required for the connection to be initiated.Note:If the instanceName is not passed and server supports multiple instances, then the first available MAS instance of MSE is connected.The client can get available instance name by calling map/getMASInstances */
    instanceName?: string;
    /** Indicates if subscribed to get the notifications.Possible values are:true: Subscribe to get notifications.false: Not subscribed. */
    subscribe?: boolean;
}

/** ACG: bluetooth.managementDescriptionConnects to the MAS Instance of the specified remote device.Note: The method is available only for MCE.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device (MSE).instanceNameOptionalStringIndicates the specific MAS instance of the MSE required for the connection to be initiated.Note:If the instanceName is not passed and server supports multiple instances, then the first available MAS instance of MSE is connected.The client can get available instance name by calling map/getMASInstancessubscribeOptionalBooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribe to get notifications.false: Not subscribed.Call Returns */
export interface Bluetooth2MapConnectCallReturn {
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** Indicates if subscribed to get the notifications.Possible values are:true: Subscribe to get notifications.false: Not subscribed. */
    subscribed: boolean;
    /** Indicates the address of the remote device (MSE). */
    address: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the specific MAS instance name of the MSE to which it is connected. */
    instanceName: string;
    /** Indicates the allocated Obex sessionId, which shall be used for further API call.Note:sessionId will be unique for each connected MAS instance sessionsessionId will not be returned if the connection has failed */
    sessionId?: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: bluetooth.managementDescriptionConnects to the MAS Instance of the specified remote device.Note: The method is available only for MCE.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device (MSE).instanceNameOptionalStringIndicates the specific MAS instance of the MSE required for the connection to be initiated.Note:If the instanceName is not passed and server supports multiple instances, then the first available MAS instance of MSE is connected.The client can get available instance name by calling map/getMASInstancessubscribeOptionalBooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribe to get notifications.false: Not subscribed.Call ReturnsNameRequiredTypeDescriptionerrorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details.subscribedRequiredBooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribe to get notifications.false: Not subscribed.addressRequiredStringIndicates the address of the remote device (MSE).adapterAddressRequiredStringIndicates the address of the adapter.instanceNameRequiredStringIndicates the specific MAS instance name of the MSE to which it is connected.sessionIdOptionalStringIndicates the allocated Obex sessionId, which shall be used for further API call.Note:sessionId will be unique for each connected MAS instance sessionsessionId will not be returned if the connection has failedreturnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.Subscription Returns */
export interface Bluetooth2MapConnectSubscription {
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed: boolean;
    /** Indicates if the remote device or the local user has initiated the disconnect.Possible values are:true: Remote device initiated the disconnectfalse: Local user initiated the disconnect */
    disconnectByRemote: boolean;
    /** Indicates the address of the remote device (MSE). */
    address: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the specific MAS instance name of the MSE. */
    instanceName: string;
    /** Indicates the allocated Obex sessionId, which shall be used for further API call.Note:sessionId will be unique for each connected MAS instance sessionsessionId will not be returned if the connection has failed */
    sessionId: string;
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: bluetooth.managementDescriptionDisconnects from the MAS Instance on the specified remote device.Note: The method is available only for MCE.Parameters */
export interface Bluetooth2MapDisconnectParameters {
    /** Indicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates the unique identifier of the session which was received as a connection response from the map/connect. */
    sessionId: string;
}

/** ACG: bluetooth.managementDescriptionDisconnects from the MAS Instance on the specified remote device.Note: The method is available only for MCE.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device.sessionIdRequiredStringIndicates the unique identifier of the session which was received as a connection response from the map/connect.Call Returns */
export interface Bluetooth2MapDisconnectCallReturn {
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the specific MAS instance name of the MSE. */
    instanceName: string;
    /** Indicates the unique identifier of the session which was received as a connection response from the map/connect. */
    sessionId: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: bluetooth.queryDescriptionReturns the status of the MAS connection with a remote device.Note: The method is available only for MCE.Parameters */
export interface Bluetooth2MapGetStatusParameters {
    /** Indicates the address of the adapter.Note: If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates a specific MAS instance name.Note: If not provided, all MAS instances details will be provided */
    instanceName?: string;
    /** Indicates if subscribed to get the notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribe?: boolean;
}

/** Contains an array of the MAS instances with the connection details. */
export interface Bluetooth2Bluetooth2MasInstancesStatus {
    /** Indicates the name of the MAS instance. */
    instanceName: string;
    /** Indicates the assigned Obex Session Id for the instance , only available when instance is connected. */
    sessionId?: string;
    /** Indicates if the connection request is currently being processed.Possible values are:true: The connection request is currently being processed.false: Otherwise. Example: The Bluetooth stack is no longer processing the connection request. */
    Connecting: boolean;
    /** Indicates if the connection is open.Possible values are:true: The connection is openfalse: Otherwise */
    Connected: boolean;
}

/** ACG: bluetooth.queryDescriptionReturns the status of the MAS connection with a remote device.Note: The method is available only for MCE.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note: If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device.instanceNameOptionalStringIndicates a specific MAS instance name.Note: If not provided, all MAS instances details will be providedsubscribeOptionalBooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Call Returns */
export interface Bluetooth2MapGetStatusCallReturn {
    /** Indicates if subscribed to get the notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed: boolean;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address (bdaddr) of the remote device */
    address: string;
    /** Indicates an array of MAS instances with connection details. */
    status: Bluetooth2Bluetooth2MasInstancesStatus[];
}

/** ACG: bluetooth.queryDescriptionReturns the status of the MAS connection with a remote device.Note: The method is available only for MCE.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note: If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device.instanceNameOptionalStringIndicates a specific MAS instance name.Note: If not provided, all MAS instances details will be providedsubscribeOptionalBooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Call ReturnsNameRequiredTypeDescriptionsubscribedRequiredBooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.returnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details.adapterAddressRequiredStringIndicates the address of the adapter.addressRequiredStringIndicates the address (bdaddr) of the remote devicestatusRequiredObject array: bluetooth2MasInstancesStatusIndicates an array of MAS instances with connection details.Subscription Returns */
export interface Bluetooth2MapGetStatusSubscription {
    /** Indicates if subscribed to get the notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed: boolean;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address (bdaddr) of the remote device */
    address: string;
    /** Indicates the array of MAS instances with connection details. */
    status: Bluetooth2Bluetooth2MasInstancesStatus[];
}

/** ACG: bluetooth.queryDescriptionRetrieves the MAS instance details of a MSE device. MAP MSE devices may present one or several MAS Instances to the MCE, each providing the overall MAP MSE server functionality.Note: The method is available only for MCE.Parameters */
export interface Bluetooth2MapGetMASInstancesParameters {
    /** Indicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the address of the remote Bluetooth device address(MSE). */
    address: string;
}

/** Contains the list of supported MAS instances. */
export interface Bluetooth2Bluetooth2MasInstances {
    /** Indicates the name of the MAS instance available in MSE. */
    instanceName?: string;
    /** Indicates the list of supported message types.(SMS_GSM, EMAIL, MMS, SMS_CDMA) */
    supportedMessageTypes?: string[];
}

/** ACG: bluetooth.queryDescriptionRetrieves the MAS instance details of a MSE device. MAP MSE devices may present one or several MAS Instances to the MCE, each providing the overall MAP MSE server functionality.Note: The method is available only for MCE.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote Bluetooth device address(MSE).Call Returns */
export interface Bluetooth2MapGetMASInstancesCallReturn {
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** Indicates the address of the remote Bluetooth device (MSE). */
    address: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the list of the supported MAS instances. */
    masInstances: Bluetooth2Bluetooth2MasInstances[];
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: bluetooth.managementDescriptionLists the available folders of the connected MAS instance of the MSE device.Note: This method is available only for MCE.Parameters */
export interface Bluetooth2MapGetFolderListParameters {
    /** Indicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the remote Bluetooth device address(MSE). */
    address: string;
    /** Indicates the unique identifier of the session which was received as a connection response from map/connect. */
    sessionId: string;
    /** Indicates the Offset of the first item.Default: 0 */
    startOffset?: number;
    /** Indicates the maximum number of items.Default: 1024 */
    maxListCount?: number;
}

/** ACG: bluetooth.managementDescriptionLists the available folders of the connected MAS instance of the MSE device.Note: This method is available only for MCE.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the remote Bluetooth device address(MSE).sessionIdRequiredStringIndicates the unique identifier of the session which was received as a connection response from map/connect.startOffsetOptionalNumberIndicates the Offset of the first item.Default: 0maxListCountOptionalNumberIndicates the maximum number of items.Default: 1024Call Returns */
export interface Bluetooth2MapGetFolderListCallReturn {
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** Indicates the remote Bluetooth device address(MSE). */
    address: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the list of the available folder names for the current directory. */
    folders?: string[];
    /** Indicates the name of the MAS instance for the requested getFolderList. */
    instanceName?: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: bluetooth.managementDescriptionReturns to the child folder of the current directory of the connected MAS instance of the MSE device.Parameters */
export interface Bluetooth2MapSetFolderParameters {
    /** Indicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the remote Bluetooth device address(MSE). */
    address: string;
    /** Indicates the unique identifier of the session which was received as a connection response from the map/connect. */
    sessionId: string;
    /** Indicates the name or the absolute path of the child folder.Possible inputs:Get the supported folder list using map/getFolderlist */
    folder: string;
}

/** ACG: bluetooth.managementDescriptionReturns to the child folder of the current directory of the connected MAS instance of the MSE device.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the remote Bluetooth device address(MSE).sessionIdRequiredStringIndicates the unique identifier of the session which was received as a connection response from the map/connect.folderRequiredStringIndicates the name or the absolute path of the child folder.Possible inputs:Get the supported folder list using map/getFolderlistCall Returns */
export interface Bluetooth2MapSetFolderCallReturn {
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** Indicates the remote Bluetooth device address(MSE). */
    address: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the name of the MAS instance for the requested setFolder. */
    instanceName?: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: bluetooth.managementDescriptionReturns all the available fields that can be used in the fields filter of the getMessageList.Parameters */
export interface Bluetooth2MapGetMessageFiltersParameters {
    /** Indicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the remote Bluetooth device address(MSE). */
    address: string;
    /** Indicates the unique identifier of the session which was received as a connection response from the map/connect. */
    sessionId: string;
}

/** ACG: bluetooth.managementDescriptionReturns all the available fields that can be used in the fields filter of the getMessageList.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the remote Bluetooth device address(MSE).sessionIdRequiredStringIndicates the unique identifier of the session which was received as a connection response from the map/connect.Call Returns */
export interface Bluetooth2MapGetMessageFiltersCallReturn {
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** Indicates the remote bluetooth device address(MSE). */
    address: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the list of all the available filter fields supported by the Bluetooth stack. */
    filters?: string[];
    /** Indicates the name of the MAS instance for the requested getFolderList. */
    instanceName?: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** Indicates the list of filters. */
export interface Bluetooth2Bluetooth2MessageFilters {
    /** Indicates the Offset of the first item.Default: 0 */
    startOffset?: number;
    /** Indicates the maximum number of items.Default: 1024 */
    maxCount?: number;
    /** Indicates the maximum length of the subject property in the message */
    subjectLength?: number;
    /** Indicates the required message fields.Default: All values.Note:Possible values can be retrieved from map/getMessageFilter */
    fields?: string[];
    /** Indicates the type of the filter messages.Possible values:smsemailmmsDefault: All values */
    messageTypes?: string[];
    /** Indicates the starting period of the filter messages.Possible value: Date in "YYYYMMDDTHHMMSS" format. */
    periodBegin?: string;
    /** Indicates the ending period of the filter messages.Possible values: Date in "YYYYMMDDTHHMMSS" format. */
    periodEnd?: string;
    /** Filters messages based on the read flag.Possible values are:true: readfalse: unread */
    read?: boolean;
    /** Filters messages by the recipient address. */
    recipient?: string;
    /** Filter messages by the sender address. */
    sender?: string;
    /** Filters messages based on the priority flag.Possible values are:true: high priorityfalse: non-high priority */
    priority?: string;
}

/** ACG: bluetooth.managementDescriptionGets the message list of the specific folder of the connected MAS instance of the MSE device.Parameters */
export interface Bluetooth2MapGetMessageListParameters {
    /** Indicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the remote Bluetooth device address(MSE). */
    address: string;
    /** Indicates the unique identifier of the session which was received as a connection response from the map/connect. */
    sessionId: string;
    /** Indicates the name of the sub folder for the API service to be executed.Note: If empty the API service will be executed for current folder. */
    folder?: string;
    /** Indicates the list of the filters which can be used for the API. */
    filters?: Bluetooth2Bluetooth2MessageFilters;
}

/** Contains the list of supported Message properties. */
export interface Bluetooth2Bluetooth2MessageProperties {
    /** Indicates the folder path for the given message handle. */
    folder: string;
    /** Indicates the subject of the message. */
    subject: string;
    /** Indicates the timestamp of the message in the format "YYYYMMDDTHHMMSS". */
    dateTime: string;
    /** Indicates the name of the sender for the given message. */
    senderName: string;
    /** Indicates the address of the sender. */
    senderAddress: string;
    /** Indicates the name of the recipient for the given message. */
    recipientName: string;
    /** Indicates the address of the recipient for the given message. */
    recipientAddress: string;
    /** Indicates the type of the message. */
    type: string;
    /** Indicates the message reception status.Possible values are:completefractionednotification */
    status: string;
    /** Indicates that the message is of high priority or Not */
    priority: boolean;
    /** Indicates that the message has already been read on the MSE or Not */
    read: boolean;
    /** Indicates that the message has already been sent to the recipient or Not */
    sent: boolean;
    /** Indicates that the message or a part of the message (e.g. attachment)is protected by a DRM scheme or Not */
    protected: boolean;
    /** Indicates the original message or – in case of multipart-messages– a part of the message includes textual content, "false" indicates that the message hasno textual but only binary content. */
    textType: boolean;
}

/** Indicates the message list. */
export interface Bluetooth2Bluetooth2MessageList {
    /** Indicates the message handle. */
    handle: string;
    /** Indicates the message properties. */
    properties: Bluetooth2Bluetooth2MessageProperties;
}

/** ACG: bluetooth.managementDescriptionGets the message list of the specific folder of the connected MAS instance of the MSE device.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the remote Bluetooth device address(MSE).sessionIdRequiredStringIndicates the unique identifier of the session which was received as a connection response from the map/connect.folderOptionalStringIndicates the name of the sub folder for the API service to be executed.Note: If empty the API service will be executed for current folder.filtersOptionalObject: bluetooth2MessageFiltersIndicates the list of the filters which can be used for the API.Call Returns */
export interface Bluetooth2MapGetMessageListCallReturn {
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** Indicates the remote Bluetooth device address(MSE). */
    address: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the name of the MAS instance for the requested getFolderList. */
    instanceName?: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Returns the messages with the handle and the properties from the selected folder. */
    messages?: Bluetooth2Bluetooth2MessageList[];
}

/** ACG: bluetooth.managementDescriptionDownloads the specific message based on the message handle.Note: This method is available only for MCE.Parameters */
export interface Bluetooth2MapGetMessageParameters {
    /** Indicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the remote Bluetooth device address(MSE). */
    address: string;
    /** Indicates the message handle. */
    handle: string;
    /** Indicates the name of the destination file.Note: If not provided, it will be set as per the message handle. */
    destinationFile?: string;
    /** Indicates if attachments are included in the bMessage object returned by the MSE.Possible values are:false: Indicates that the no attachments included in the bMessage objecttrue: Indicates that the attachments included in the bMessage objectDefault: false */
    attachment?: boolean;
    /** Indicates the unique identifier of the session which was received as a connection response from the map/connect. */
    sessionId: string;
}

/** ACG: bluetooth.managementDescriptionDownloads the specific message based on the message handle.Note: This method is available only for MCE.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the remote Bluetooth device address(MSE).handleRequiredStringIndicates the message handle.destinationFileOptionalStringIndicates the name of the destination file.Note: If not provided, it will be set as per the message handle.attachmentOptionalBooleanIndicates if attachments are included in the bMessage object returned by the MSE.Possible values are:false: Indicates that the no attachments included in the bMessage objecttrue: Indicates that the attachments included in the bMessage objectDefault: falsesessionIdRequiredStringIndicates the unique identifier of the session which was received as a connection response from the map/connect.Call Returns */
export interface Bluetooth2MapGetMessageCallReturn {
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** Indicates the remote Bluetooth device address(MSE). */
    address: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Returns the absolute path of the destination file rooted at /media/internal/map.Note: This must be a path to a file and not a directory.Example: /media/internal/map/<device-address>/<messageHandle> */
    destinationFile?: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: bluetooth.managementDescriptionModifies the status of a message on the MSE.Note: This method is available only for MCEParameters */
export interface Bluetooth2MapSetMessageStatusParameters {
    /** Indicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the remote Bluetooth device address(MSE). */
    address: string;
    /** Indicates the unique identifier of the session which was received as a connection response from the map/connect. */
    sessionId: string;
    /** Indicates the message handle.The handle shall be represented by a null-terminated unicode text string with 16 hexadecimal digits. */
    handle: string;
    /** Indicates the status of the information to be modified.Possible values are:read: Read statusdeleted: Deleted status */
    statusIndicator: string;
    /** Indicates the status value.For the "readStatus" indicator. Possible values are:true: readfalse: unreadFor the "deletedStatus" indicator. Possible values are:true: deletedfalse: undeleted */
    statusValue: boolean;
}

/** ACG: bluetooth.managementDescriptionModifies the status of a message on the MSE.Note: This method is available only for MCEParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the remote Bluetooth device address(MSE).sessionIdRequiredStringIndicates the unique identifier of the session which was received as a connection response from the map/connect.handleRequiredStringIndicates the message handle.The handle shall be represented by a null-terminated unicode text string with 16 hexadecimal digits.statusIndicatorRequiredStringIndicates the status of the information to be modified.Possible values are:read: Read statusdeleted: Deleted statusstatusValueRequiredBooleanIndicates the status value.For the "readStatus" indicator. Possible values are:true: readfalse: unreadFor the "deletedStatus" indicator. Possible values are:true: deletedfalse: undeletedCall Returns */
export interface Bluetooth2MapSetMessageStatusCallReturn {
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** Indicates the remote Bluetooth device address(MSE). */
    address: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: bluetooth.managementDescriptionSends the message.Example: Sending an SMS.Note: The API is designed based on MAP 1.0 specification.Parameters */
export interface Bluetooth2MapPushMessageParameters {
    /** Indicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the remote Bluetooth device address(MSE). */
    address: string;
    /** Indicates the unique identifier of the session which was received as a connection response from the map/connect. */
    sessionId: string;
    /** Indicates the location of the file containing message body in the bMessage format.Note: Get sample file using map/getMessage API. */
    sourceFile: string;
    /** Indicates the folder name with the absolute path.Possible inputs : Get the supported folder list using the map/getFolderlist API. */
    folder: string;
    /** Indicates to the MSE that no copy of the message shall be kept in the 'sent' folder after the message was sent.Default: false */
    transparent?: boolean;
    /** Indicates if successive attempts at sending the message shall be carried out in case of the cellular network.Default: true */
    retry?: boolean;
    /** Indicates the type of content delivered in the iMessagePossible values are:native: Only applicable for SMS messages, when the bMessage content is a SMS_Deliver PDU which can be sent by the MSE without trans-codingutf8: If the message text shall is coded in UTF-8 which may (Email/MMS) or shall be trans-coded into SMS by the MSE before sending. */
    charset?: string;
}

/** ACG: bluetooth.managementDescriptionSends the message.Example: Sending an SMS.Note: The API is designed based on MAP 1.0 specification.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the remote Bluetooth device address(MSE).sessionIdRequiredStringIndicates the unique identifier of the session which was received as a connection response from the map/connect.sourceFileRequiredStringIndicates the location of the file containing message body in the bMessage format.Note: Get sample file using map/getMessage API.folderRequiredStringIndicates the folder name with the absolute path.Possible inputs : Get the supported folder list using the map/getFolderlist API.transparentOptionalBooleanIndicates to the MSE that no copy of the message shall be kept in the 'sent' folder after the message was sent.Default: falseretryOptionalBooleanIndicates if successive attempts at sending the message shall be carried out in case of the cellular network.Default: truecharsetOptionalStringIndicates the type of content delivered in the iMessagePossible values are:native: Only applicable for SMS messages, when the bMessage content is a SMS_Deliver PDU which can be sent by the MSE without trans-codingutf8: If the message text shall is coded in UTF-8 which may (Email/MMS) or shall be trans-coded into SMS by the MSE before sending.Call Returns */
export interface Bluetooth2MapPushMessageCallReturn {
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** Indicates the remote Bluetooth device address(MSE). */
    address: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the message handle.Note: map/getMessageNotificationEvent API will use this return parameter to know the status change for a specific message handle. */
    handle?: string;
}

/** ACG: bluetooth.managementDescriptionReceives the message notification from the MSE device.Note: This method is available only for MCE.Parameters */
export interface Bluetooth2MapGetMessageNotificationParameters {
    /** Indicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the remote Bluetooth device address(MSE). */
    address: string;
    /** Indicates the unique identifier of the session which was received as a connection response from the map/connect. */
    sessionId: string;
    /** Indicates if subscribed to get the notifications on the message event from the MSE.Possible values are:true: Subscribe to get the notificationsfalse: Not subscribed */
    subscribe: boolean;
}

/** ACG: bluetooth.managementDescriptionReceives the message notification from the MSE device.Note: This method is available only for MCE.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the remote Bluetooth device address(MSE).sessionIdRequiredStringIndicates the unique identifier of the session which was received as a connection response from the map/connect.subscribeRequiredBooleanIndicates if subscribed to get the notifications on the message event from the MSE.Possible values are:true: Subscribe to get the notificationsfalse: Not subscribedCall Returns */
export interface Bluetooth2MapGetMessageNotificationCallReturn {
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** Indicates the remote Bluetooth device address(MSE). */
    address: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get the notifications on the message event from the MSE.Possible values are:true: Subscribe to get the notificationsfalse: Not subscribed */
    subscribed: boolean;
    /** Indicates the unique identifier of the session which was received as a connection response from the map/connect. */
    sessionId: string;
}

/** Indicates the properties of the new message. */
export interface Bluetooth2Bluetooth2NewMessageProperties {
    /** Indicates the subject of the message. */
    subject: string;
    /** Indicates the timestamp of the message in the format "YYYYMMDDTHHMMSS". */
    dateTime: string;
    /** Indicates the name of the message sender. */
    senderName: string;
    /** Indicates the message priority flag. */
    priority: boolean;
}

/** Indicates the message notification properties. */
export interface Bluetooth2Bluetooth2MessageNotificationProperties {
    /** Indicates the folder path for the given message handle. */
    folder: string;
    /** Indicates the previous folder path for the given message handle.Note: This is only available for the MessageShift event. */
    oldFolder?: string;
    /** Indicates the type of the message. */
    type: string;
    /** Indicates the properties of the new message. */
    newMessageProperties?: Bluetooth2Bluetooth2NewMessageProperties;
}

/** Indicates the description of the message. */
export interface Bluetooth2Bluetooth2Message {
    /** Indicates the message handle. */
    handle: string;
    /** Indicates the message notification properties. */
    properties: Bluetooth2Bluetooth2MessageNotificationProperties;
}

/** ACG: bluetooth.managementDescriptionReceives the message notification from the MSE device.Note: This method is available only for MCE.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the remote Bluetooth device address(MSE).sessionIdRequiredStringIndicates the unique identifier of the session which was received as a connection response from the map/connect.subscribeRequiredBooleanIndicates if subscribed to get the notifications on the message event from the MSE.Possible values are:true: Subscribe to get the notificationsfalse: Not subscribedCall ReturnsNameRequiredTypeDescriptionerrorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes" section of this method for details.addressRequiredStringIndicates the remote Bluetooth device address(MSE).adapterAddressRequiredStringIndicates the address of the adapter.returnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.subscribedRequiredBooleanIndicates if subscribed to get the notifications on the message event from the MSE.Possible values are:true: Subscribe to get the notificationsfalse: Not subscribedsessionIdRequiredStringIndicates the unique identifier of the session which was received as a connection response from the map/connect.Subscription Returns */
export interface Bluetooth2MapGetMessageNotificationSubscription {
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the remote Bluetooth device address(MSE). */
    address: string;
    /** Indicates if subscribed to get the notifications on the message event from the MSE.Possible values are:true: Subscribe to get the notificationsfalse: Not subscribed */
    subscribed: boolean;
    /** Indicates the unique identifier of the session which was received as a connection response from the map/connect. */
    sessionId: string;
    /** Indicates the type of the message notification.Possible values are:NewMessage: Indicates that a new message has been received by the MSE device.This event type shall also be used if a new message replaces an old one on the MSE.DeliverySuccess: Indicates that a message has been successfully delivered to its intended recipient.SendingSuccess: Indicates that a message has been successfully sent to a remote network.DeliveryFailure: Indicates that the delivery of a message to its intended recipient failed.This event type shall not be applied for emails.SendingFailure: Indicates that sending to a remote network failed.MessageDeleted: Indicates that a message has been deleted from the reported folder on the MSE and has therefore been shifted to the 'Deleted' folder.MessageShift: Indicates that a message has been shifted on the MSE from one folder to another folder. */
    notificationType?: string;
    /** Returns the message with the handle and properties. */
    message?: Bluetooth2Bluetooth2Message;
}
