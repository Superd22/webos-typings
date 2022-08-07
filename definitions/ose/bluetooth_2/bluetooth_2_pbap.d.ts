/** ACG: bluetooth.managementDescriptionConnects to the PBAP profile on the specified remote device.Note: This method is available only for PCE.Parameters */
export interface Bluetooth2PbapConnectParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribed.Default: false */
    subscribe?: boolean;
}

/** ACG: bluetooth.managementDescriptionConnects to the PBAP profile on the specified remote device.Note: This method is available only for PCE.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device.subscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribed.Default: falseCall Returns */
export interface Bluetooth2PbapConnectCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** Indicates the address of the remote device. */
    address: string;
}

/** ACG: bluetooth.managementDescriptionConnects to the PBAP profile on the specified remote device.Note: This method is available only for PCE.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device.subscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribed.Default: falseCall ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.subscribedRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.adapterAddressRequiredStringIndicates the address of the adapter.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details.addressRequiredStringIndicates the address of the remote device.Subscription Returns */
export interface Bluetooth2PbapConnectSubscription {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications (will be true until the final response is sent by the service before stopping.)false: Not subscribed */
    subscribed: boolean;
    /** Indicates whether the remote device or the local user initiated the disconnect.Possible values are:true: Remote device initiated the disconnect.false: Local user initiated the disconnect. */
    disconnectByRemote: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** Indicates the address of the remote device. */
    address: string;
}

/** ACG: bluetooth.managementDescriptionDisconnects from the PBAP profile on the specified remote device.Note: This method is available only for PCE.Parameters */
export interface Bluetooth2PbapDisconnectParameters {
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.managementDescriptionDisconnects from the PBAP profile on the specified remote device.Note: This method is available only for PCE.ParametersNameRequiredTypeDescriptionaddressRequiredStringIndicates the address (bdaddr) of the remote device.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call Returns */
export interface Bluetooth2PbapDisconnectCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
}

/** ACG: bluetooth.managementDescriptionGets the supported PBAP profile properties from PSE device.Note: This method is available only for PCE.Parameters */
export interface Bluetooth2PbapGetPhoneBookPropertiesParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates if subscribed to get notifications.Possible values  are:true: Subscribed for notificationsfalse: Not subscribedDefault: false */
    subscribe?: boolean;
}

/** Contains supported properties from PSE device. */
export interface Bluetooth2Bluetooth2PbapProperties {
    /** Indicates the current folder/repository path of the connected PSE device. */
    repository: string;
    /** Indicates the primary folder version counter that shall increment on completion of every change applied to any of the properties in the vCards as well as on insertion or removal of entries. */
    primaryVersionCounter: string;
    /** Indicates the secondary folder version counter shall only increment on completion of every change applied to the vCard’s N, FN, TEL, EMAIL, MAILER, ADR, X-BT-UCI properties as well as on insertion or removal of entries. */
    secondaryVersionCounter: string;
    /** Indicates that the PSE shall return the databaseIdentifier application parameter containing the unique database identifier of the PSE device. */
    databaseIdentifier: string;
    /** Indicates support for fixed image size. */
    fixedImageSize: boolean;
}

/** ACG: bluetooth.managementDescriptionGets the supported PBAP profile properties from PSE device.Note: This method is available only for PCE.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device.subscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values  are:true: Subscribed for notificationsfalse: Not subscribedDefault: falseCall Returns */
export interface Bluetooth2PbapGetPhoneBookPropertiesCallReturn {
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Returns the supported properties from the PSE device.Note: Properties will return only when the repository is selected else properties will be updated in subscription return. */
    properties: Bluetooth2Bluetooth2PbapProperties;
    /** Indicates if subscribed to get notifications.Possible values  are:true: Subscribed for notificationsfalse: Not subscribedDefault: false */
    subscribed: boolean;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: bluetooth.managementDescriptionGets the supported PBAP profile properties from PSE device.Note: This method is available only for PCE.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device.subscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values  are:true: Subscribed for notificationsfalse: Not subscribedDefault: falseCall ReturnsNameRequiredTypeDescriptionerrorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes" section of this method for details.addressRequiredStringIndicates the address of the remote device.adapterAddressRequiredStringIndicates the address of the adapter.propertiesRequiredObject: bluetooth2PbapPropertiesReturns the supported properties from the PSE device.Note: Properties will return only when the repository is selected else properties will be updated in subscription return.subscribedRequiredBooleanIndicates if subscribed to get notifications.Possible values  are:true: Subscribed for notificationsfalse: Not subscribedDefault: falsereturnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.Subscription Returns */
export interface Bluetooth2PbapGetPhoneBookPropertiesSubscription {
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** Returns supported properties from the PSE device. */
    properties?: Bluetooth2Bluetooth2PbapProperties;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for changes (will be true until the final response is sent by the service before stopping).false: Not subscribed. */
    subscribed: boolean;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: bluetooth.managementDescriptionGets the total number of vcf entries from the selected phonebook path.Note: This method is available only for PCE.Parameters */
export interface Bluetooth2PbapGetSizeParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the address of the remote device. */
    address: string;
}

/** ACG: bluetooth.managementDescriptionGets the total number of vcf entries from the selected phonebook path.Note: This method is available only for PCE.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device.Call Returns */
export interface Bluetooth2PbapGetSizeCallReturn {
    /** Indicates the error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** Indicates the total number of vcf entries in the selected phonebook path. */
    size: number;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: bluetooth.queryDescriptionReturns the status of a PBAP connection to a remote Bluetooth device.Note: The method is available for both client and server.Parameters */
export interface Bluetooth2PbapGetStatusParameters {
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates if subscribed to get the notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedDefault: false. */
    subscribe?: boolean;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.queryDescriptionReturns the status of a PBAP connection to a remote Bluetooth device.Note: The method is available for both client and server.ParametersNameRequiredTypeDescriptionaddressRequiredStringIndicates the address (bdaddr) of the remote device.subscribeOptionalBooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedDefault: false.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call Returns */
export interface Bluetooth2PbapGetStatusCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the status of connection.Possible values are:true: The connection request is currently being processed.false: Otherwise. Example: The Bluetooth stack is no longer processing the connection request. */
    connecting: boolean;
    /** Indicates if the connection is open.Possible values are:true: The connection is openfalse: Otherwise */
    connected: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates if subscribed to get the notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribed */
    subscribed: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** Indicates the error code for the failed operation. */
    errorCode?: number;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
}

/** ACG: bluetooth.queryDescriptionReturns the status of a PBAP connection to a remote Bluetooth device.Note: The method is available for both client and server.ParametersNameRequiredTypeDescriptionaddressRequiredStringIndicates the address (bdaddr) of the remote device.subscribeOptionalBooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedDefault: false.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.connectingRequiredBooleanIndicates the status of connection.Possible values are:true: The connection request is currently being processed.false: Otherwise. Example: The Bluetooth stack is no longer processing the connection request.connectedRequiredBooleanIndicates if the connection is open.Possible values are:true: The connection is openfalse: OtherwiseadapterAddressRequiredStringIndicates the address of the adapter.subscribedRequiredBooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribederrorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes" section of this method for details.errorCodeOptionalNumberIndicates the error code for the failed operation.addressRequiredStringIndicates the address (bdaddr) of the remote device.Subscription Returns */
export interface Bluetooth2PbapGetStatusSubscription {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get the notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribed */
    subscribed: boolean;
    /** Indicates the status of connection.Possible values are:true: The connection request is currently being processed.false: Otherwise. Example: The Bluetooth stack is no longer processing the connection request. */
    connecting: boolean;
    /** Indicates if the connection is open.Possible values are:true: The connection is openfalse: Otherwise */
    connected: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** Indicates the error code for the failed operation. */
    errorCode?: number;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
}

/** ACG: bluetooth.managementDescriptionDisplays all the available vcard filters supported by Bluetooth stack.Note: The method is available only for PCE.Parameters */
export interface Bluetooth2PbapGetvCardFiltersParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
}

/** ACG: bluetooth.managementDescriptionDisplays all the available vcard filters supported by Bluetooth stack.Note: The method is available only for PCE.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address (bdaddr) of the remote device.Call Returns */
export interface Bluetooth2PbapGetvCardFiltersCallReturn {
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Returns a list of supported vCard filters. */
    filters: string[];
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: bluetooth.managementDescriptionRetrieves all (given maxcount) the phonebook entries from a given startoffset and stores it in a local file.Parameters */
export interface Bluetooth2PbapPullPhoneBookParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates if the user is subscribed to get the notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedDefault: false */
    subscribe: boolean;
    /** Indicates the absolute path of the destination file rooted at /media/internal/pbap.Note: This must be a path to a file, not a directory.Example:  /media/internal/pbap/<device-address>/<foldername>/<vcf file name> */
    destinationFile: string;
    /** Indicates the Offset of the first item.Default: 0 */
    startOffset?: number;
    /** Indicates the maximum number of items.Default: unlimited (65535) */
    maxListCount?: number;
    /** Indicates the vCard format versions.Possible values are:2.13.0Default: 2.1 */
    vCardVersion?: string;
    /** Provide vCard with fields as specified in the filter.Mandatory properties for vCard 2.1 are VERSION, N, and TEL.Mandatory properties for vCard 3.0 are VERSION, N, FN, and TEL.Note:We can get the list of supported filters using pbap/getvCardFilters API.If not specified, all supported filters are used by default. */
    filterFields?: string[];
}

/** ACG: bluetooth.managementDescriptionRetrieves all (given maxcount) the phonebook entries from a given startoffset and stores it in a local file.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address (bdaddr) of the remote device.subscribeRequiredBooleanIndicates if the user is subscribed to get the notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedDefault: falsedestinationFileRequiredStringIndicates the absolute path of the destination file rooted at /media/internal/pbap.Note: This must be a path to a file, not a directory.Example:  /media/internal/pbap/<device-address>/<foldername>/<vcf file name>startOffsetOptionalNumberIndicates the Offset of the first item.Default: 0maxListCountOptionalNumberIndicates the maximum number of items.Default: unlimited (65535)vCardVersionOptionalStringIndicates the vCard format versions.Possible values are:2.13.0Default: 2.1filterFieldsOptionalString arrayProvide vCard with fields as specified in the filter.Mandatory properties for vCard 2.1 are VERSION, N, and TEL.Mandatory properties for vCard 3.0 are VERSION, N, FN, and TEL.Note:We can get the list of supported filters using pbap/getvCardFilters API.If not specified, all supported filters are used by default.Call Returns */
export interface Bluetooth2PbapPullPhoneBookCallReturn {
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the absolute path of the destination file rooted at /media/internal/pbap.Note: This must be a path to a file, not a directory.Example:  /media/internal/pbap/<device-address>/<foldername>/<vcf file name> */
    destinationFile: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed: boolean;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: bluetooth.managementDescriptionRetrieves all (given maxcount) the phonebook entries from a given startoffset and stores it in a local file.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address (bdaddr) of the remote device.subscribeRequiredBooleanIndicates if the user is subscribed to get the notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedDefault: falsedestinationFileRequiredStringIndicates the absolute path of the destination file rooted at /media/internal/pbap.Note: This must be a path to a file, not a directory.Example:  /media/internal/pbap/<device-address>/<foldername>/<vcf file name>startOffsetOptionalNumberIndicates the Offset of the first item.Default: 0maxListCountOptionalNumberIndicates the maximum number of items.Default: unlimited (65535)vCardVersionOptionalStringIndicates the vCard format versions.Possible values are:2.13.0Default: 2.1filterFieldsOptionalString arrayProvide vCard with fields as specified in the filter.Mandatory properties for vCard 2.1 are VERSION, N, and TEL.Mandatory properties for vCard 3.0 are VERSION, N, FN, and TEL.Note:We can get the list of supported filters using pbap/getvCardFilters API.If not specified, all supported filters are used by default.Call ReturnsNameRequiredTypeDescriptionerrorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes" section of this method for details.addressRequiredStringIndicates the address of the remote device.adapterAddressRequiredStringIndicates the address of the adapter.destinationFileRequiredStringIndicates the absolute path of the destination file rooted at /media/internal/pbap.Note: This must be a path to a file, not a directory.Example:  /media/internal/pbap/<device-address>/<foldername>/<vcf file name>subscribedRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. returnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.Subscription Returns */
export interface Bluetooth2PbapPullPhoneBookSubscription {
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote device for the requested operation. */
    address: string;
    /** Indicates the absolute path of the destination file rooted at /media/internal/pbap.Note: This must be a path to a file, not a directory.Example:  /media/internal/pbap/<device-address>/<foldername>/<vcf file name> */
    destinationFile: string;
    /** Indicates the status of the phonebook download.Possible values are :idle: Phonebook download not yet started , maybe queued in stackactive: Phonebook download started.completed: Phonebook download completed.error: Phonebook download failed. */
    status: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribed. */
    subscribed: boolean;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: number;
}

/** ACG: bluetooth.managementDescriptionGiven a vcard handle, retrieves the vcard in the current phonebook object and store it in a local file.Note: This method is available only for PCE.Parameters */
export interface Bluetooth2PbapPullvCardParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates destination file name.Note: If not provided, it will be set as vCardHandle. */
    destinationFile?: string;
    /** Indicates vCard handle for vcf file. */
    vCardHandle: string;
    /** Indicates vCard format version.Possible values are :2.13.0 Default: 2.1 */
    vCardVersion?: string;
    /** Provides vCard with fields as specified in the filter.Mandatory properties for vCard 2.1 are VERSION, N, and TEL.Mandatory properties for vCard 3.0 are VERSION, N, FN, and TEL.Note:We can get the list of supported filters using pbap/getvCardFilters API.If not specified, all supported filters are used by default. */
    filterFields?: string[];
}

/** ACG: bluetooth.managementDescriptionGiven a vcard handle, retrieves the vcard in the current phonebook object and store it in a local file.Note: This method is available only for PCE.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device.destinationFileOptionalStringIndicates destination file name.Note: If not provided, it will be set as vCardHandle.vCardHandleRequiredStringIndicates vCard handle for vcf file.vCardVersionOptionalStringIndicates vCard format version.Possible values are :2.13.0 Default: 2.1filterFieldsOptionalString arrayProvides vCard with fields as specified in the filter.Mandatory properties for vCard 2.1 are VERSION, N, and TEL.Mandatory properties for vCard 3.0 are VERSION, N, FN, and TEL.Note:We can get the list of supported filters using pbap/getvCardFilters API.If not specified, all supported filters are used by default.Call Returns */
export interface Bluetooth2PbapPullvCardCallReturn {
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates the absolute path of the destination file rooted at /media/internal/pbap.Note: This must be a path to a file and not a directory.Example: /media/internal/pbap/<device-address>/<repository>/<vcf file name>. */
    destinationFile: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** Filter with key & value pair to search the phonebook */
export interface Bluetooth2Bluetooth2PbapSearchFilter {
    /** Indicates the field in the vcard to search with.Possible values are:name: To search for matches with name of a phone book entry.number: To search for matches with number of a phone book entry.sound: To search for matches with sound in a phone book entry. */
    key: string;
    /** Indicates the value of the string to be searched. */
    value: string;
}

/** ACG: bluetooth.managementDescriptionSearches for entries matching the given condition and returns an object of vcard-listing data where every entry consists of a pair of strings containing the vcard handle and the contact name.Note: This method is available only for PCE.Parameters */
export interface Bluetooth2PbapSearchPhoneBookParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Displays the search results based on the given order.Possible values are:Indexed (default)AlphanumericPhonetic */
    order?: string;
    /** Filter with key & value pair to search the phonebook. */
    filter: Bluetooth2Bluetooth2PbapSearchFilter;
}

/** Contains information about vcf files entries with name and vcf handle from selected phonebook path. */
export interface Bluetooth2Bluetooth2PbapVcfHandles {
    /** Indicates object name. */
    Name: string;
    /** Indicates vcf file name. */
    Handle: string;
}

/** ACG: bluetooth.managementDescriptionSearches for entries matching the given condition and returns an object of vcard-listing data where every entry consists of a pair of strings containing the vcard handle and the contact name.Note: This method is available only for PCE.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device.orderOptionalStringDisplays the search results based on the given order.Possible values are:Indexed (default)AlphanumericPhoneticfilterRequiredObject: bluetooth2PbapSearchFilterFilter with key & value pair to search the phonebook.Call Returns */
export interface Bluetooth2PbapSearchPhoneBookCallReturn {
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Returns vcf files entries with name and vcf handle from selected phone-book path. */
    vcfHandles: Bluetooth2Bluetooth2PbapVcfHandles;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: bluetooth.managementDescriptionSets the phonebook object for other operations.Note: This method is available only for PCE.Parameters */
export interface Bluetooth2PbapSetPhoneBookParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the address of the remote device required for the connection. */
    address: string;
    /** Indicates the type of repository that stores the phonebook.Possible inputs :internal sim1Default: internal. */
    repository: string;
    /** Indicates the path of the phonebook object.Possible inputs :pb: phonebook for the saved contacts.ich: incoming call history.och: outgoing call history.mch: missing call history.cch: a combination of ich, och, mch. */
    object: string;
}

/** ACG: bluetooth.managementDescriptionSets the phonebook object for other operations.Note: This method is available only for PCE.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device required for the connection.repositoryRequiredStringIndicates the type of repository that stores the phonebook.Possible inputs :internal sim1Default: internal.objectRequiredStringIndicates the path of the phonebook object.Possible inputs :pb: phonebook for the saved contacts.ich: incoming call history.och: outgoing call history.mch: missing call history.cch: a combination of ich, och, mch.Call Returns */
export interface Bluetooth2PbapSetPhoneBookCallReturn {
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: bluetooth.managementDescriptionDisplays the total number of vcf file entries from the selected phonebook path.Note: This method is available only for PCE.Parameters */
export interface Bluetooth2PbapVCardListingParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the address of the remote device for the requested operation. */
    address: string;
}

/** ACG: bluetooth.managementDescriptionDisplays the total number of vcf file entries from the selected phonebook path.Note: This method is available only for PCE.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device for the requested operation.Call Returns */
export interface Bluetooth2PbapVCardListingCallReturn {
    /** Returns the error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** Returns vcf files entries with name and vcf handle from selected phonebook path. */
    vcfHandles: Bluetooth2Bluetooth2PbapVcfHandles[];
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. */
    returnValue: boolean;
}
