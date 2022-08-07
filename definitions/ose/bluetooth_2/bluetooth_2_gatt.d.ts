/** Object contains information about a GATT value.As a GATT characteristic can be extended with a descriptor which describes the type of the stored value we have three different representations of a value currently:stringnumberArray of numbersThe last one is only used when not value type descriptor is present. */
export interface Bluetooth2Bluetooth2GattValueInfo {
    /** Present when the value is from type string. Not present otherwise. */
    string?: string;
    /** Present when the value is from type number. Not present otherwise. */
    number?: number;
    /** If the type of the value is not specified then the value is returned as a sequence of bytes. */
    bytes?: number[];
}

/** Object containing information about the set properties of a characteristic.All properties are defined in Bluetooth Core Specification 4.1 vol. 4 Part G chapter 3.3.1.1. */
export interface Bluetooth2Bluetooth2GattPropertiesInfo {
    /** If set, permits broadcasts of the Characteristic Value using Server Characteristic Configuration Descriptor.If set, the Server Characteristic Configuration Descriptor shall exist. */
    broadcast?: boolean;
    /** If set, permits reads of the Characteristic Value. */
    read?: boolean;
    /** If set, permit writes of the Characteristic Value without response. */
    writeWithoutResponse?: boolean;
    /** If set, permits writes of the Characteristic Value with response */
    write?: boolean;
    /** If set, permits notifications of a Characteristic Value without acknowledgement.If set, the Client Characteristic Configuration Descriptor shall exist. */
    notify?: boolean;
    /** If set, permits indications of a Characteristic Value with acknowledgement. */
    indicate?: boolean;
    /** If set, permits signed writes to the Characteristic Value */
    authenticatedSignedWrites?: boolean;
    /** If set, additional characteristic properties are defined in the Characteristic Extended Properties Descriptor.If set, the Characteristic Extended Properties Descriptor shall exist. */
    extendedProperties?: boolean;
}

/** Object containing information about the permissions allowed for a client to use a particular characteristic value.All properties are defined in Bluetooth Core Specification 4.1 vol. 4 Part G chapter 3.3.1.1. */
export interface Bluetooth2Bluetooth2GattPermissionsInfo {
    /** If set, clients are allowed to read the characteristic value. */
    read?: boolean;
    /** If set, allows encrypted read operations. */
    readEncrypted?: boolean;
    /** If set, allows reading with man-in-the-middle protection. */
    readEncryptedMitm?: boolean;
    /** If set, clients are allowed to write the characteristic value. */
    write?: boolean;
    /** If set, allows encrypted writes. */
    writeEncrypted?: boolean;
    /** If set, allows encrypted writes with man-in-the-middle protection. */
    writeEncryptedMitm?: boolean;
    /** If set, allows signed write operations. */
    writeSigned?: boolean;
    /** If set, allows signed write operations with man-in-the-middle protection. */
    writeSignedMitm?: boolean;
}

/** Object containing information about a GATT descriptor. */
export interface Bluetooth2Bluetooth2GattDescriptorInfo {
    /** Unique identifier of the descriptor */
    descriptor: string;
    /** Value of the descriptor */
    value: Bluetooth2Bluetooth2GattValueInfo;
    /** Unique identifier of the descriptor */
    instanceId?: string;
}

/** Object containing information about a GATT characteristic. */
export interface Bluetooth2Bluetooth2GattCharacteristicInfo {
    /** UUID of the characteristic. */
    characteristic: string;
    /** Value of the characteristic. */
    value: Bluetooth2Bluetooth2GattValueInfo;
    /** Configured properties for the characteristic. */
    properties: Bluetooth2Bluetooth2GattPropertiesInfo;
    /** Configured permissions for the characteristic. */
    permissions: Bluetooth2Bluetooth2GattPermissionsInfo;
    /** List of descriptors for the characteristic. */
    descriptors: Bluetooth2Bluetooth2GattDescriptorInfo[];
    /** Unique identifier of the characteristic */
    instanceId?: string;
}

/** ACG: bluetooth.operationDescriptionAdds a new service definition to the local database.Note: The new service will be directly exposed to clients which are discovering available services.Parameters */
export interface Bluetooth2GattAddServiceParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the unique identifier of the service. */
    service: string;
    /** Indicates the type of the service.Possible values are:primarysecondary */
    type: string;
    /** Indicates an array that contains a list of UUIDs the service includes. */
    includes: string[];
    /** Indicates the information about GATT characteristics of the service. */
    characteristics: Bluetooth2Bluetooth2GattCharacteristicInfo[];
    /** Indicates the server identifier to add the service to.Note: If not specified, the default value of serverId is used automatically. */
    serverId?: string;
}

/** ACG: bluetooth.operationDescriptionAdds a new service definition to the local database.Note: The new service will be directly exposed to clients which are discovering available services.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.serviceRequiredStringIndicates the unique identifier of the service.typeRequiredStringIndicates the type of the service.Possible values are:primarysecondaryincludesRequiredString arrayIndicates an array that contains a list of UUIDs the service includes.characteristicsRequiredObject array: bluetooth2GattCharacteristicInfoIndicates the information about GATT characteristics of the service.serverIdOptionalStringIndicates the server identifier to add the service to.Note: If not specified, the default value of serverId is used automatically.Call Returns */
export interface Bluetooth2GattAddServiceCallReturn {
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** Indicates the server identifier to add the service. */
    serverId: string;
}

/** ACG: bluetooth.operationDescriptionCloses the BluetoothGattServer.Parameters */
export interface Bluetooth2GattCloseServerParameters {
    /** Indicates the unique identifier of a server to remove on the stack. */
    serverId: string;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.operationDescriptionCloses the BluetoothGattServer.ParametersNameRequiredTypeDescriptionserverIdRequiredStringIndicates the unique identifier of a server to remove on the stack.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call Returns */
export interface Bluetooth2GattCloseServerCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** Indicates the address of the adapter.Note: If not specified, the address of the default adapter will be used. */
    adapterAddress: string;
    /** The error code for the failed operation. */
    errorCode?: string;
    /** Indicates the reason for the failure of the operation. */
    errorText?: string;
}

/** ACG: bluetooth.operationDescriptionConnects to the GATT profile on the specified remote device.Parameters */
export interface Bluetooth2GattConnectParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates if subscribed to get the notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: falseNote: Disconnection can also happen when local adapter calls the gatt/disconnect method (initiated by the local user) */
    subscribe?: boolean;
    /** Indicates if the remote device is automatically connected.Possible values are:true: Automatically connects as soon as the remote device becomes available.false: Manually connect to the remote device.Default: false */
    autoConnect?: boolean;
}

/** ACG: bluetooth.operationDescriptionConnects to the GATT profile on the specified remote device.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device.subscribeOptionalBooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: falseNote: Disconnection can also happen when local adapter calls the gatt/disconnect method (initiated by the local user)autoConnectOptionalBooleanIndicates if the remote device is automatically connected.Possible values are:true: Automatically connects as soon as the remote device becomes available.false: Manually connect to the remote device.Default: falseCall Returns */
export interface Bluetooth2GattConnectCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the address of the adapter. */
    adapaterAddress: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** Indicates the unique ID of a remote device, which has the following format: "nnn", 3 digit number increasing sequentially. */
    clientId: string;
}

/** ACG: bluetooth.operationDescriptionConnects to the GATT profile on the specified remote device.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device.subscribeOptionalBooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: falseNote: Disconnection can also happen when local adapter calls the gatt/disconnect method (initiated by the local user)autoConnectOptionalBooleanIndicates if the remote device is automatically connected.Possible values are:true: Automatically connects as soon as the remote device becomes available.false: Manually connect to the remote device.Default: falseCall ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.adapaterAddressRequiredStringIndicates the address of the adapter.addressRequiredStringIndicates the address of the remote device.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details.clientIdRequiredStringIndicates the unique ID of a remote device, which has the following format: "nnn", 3 digit number increasing sequentially.Subscription Returns */
export interface Bluetooth2GattConnectSubscription {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.Note: returnValue will always contain false, indicating that the remote device has closed the connection. */
    returnValue: boolean;
    /** Indicates the address of the adapter. */
    adapaterAddress: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Note: subscribed will always contain false, indicating that the service will not send any further subscription responses. */
    subscribed: boolean;
    /** Indicates if the remote device or the local user initiated the disconnect.Possible values are:true: Disconnect initiated by remote device.false: Disconnect initiated by local user. */
    disconnectByRemote?: boolean;
}

/** ACG: bluetooth.operationDescriptionDrops the connection to the given remote device on GATT profile.Parameters */
export interface Bluetooth2GattDisconnectParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the unique identifier of the remote device.Format: "nnn", 3 digit number increasing sequentially. */
    clientId: string;
}

/** ACG: bluetooth.operationDescriptionDrops the connection to the given remote device on GATT profile.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.clientIdRequiredStringIndicates the unique identifier of the remote device.Format: "nnn", 3 digit number increasing sequentially.Call Returns */
export interface Bluetooth2GattDisconnectCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.operationDescriptionDiscovers available services for the given remote device.Pre-requisite:The given remote device should be connected through gatt/connect method. Otherwise, the method will fail.Note:When a discovery process is already running, any further call to this method will succeed but will not restart the discovery.Current discovery state is notified through gatt/getStatus method.Discovered services are notified through gatt/getServices method. Parameters */
export interface Bluetooth2GattDiscoverServicesParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the address of the remote device. */
    address?: string;
}

/** ACG: bluetooth.operationDescriptionDiscovers available services for the given remote device.Pre-requisite:The given remote device should be connected through gatt/connect method. Otherwise, the method will fail.Note:When a discovery process is already running, any further call to this method will succeed but will not restart the discovery.Current discovery state is notified through gatt/getStatus method.Discovered services are notified through gatt/getServices method. ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressOptionalStringIndicates the address of the remote device.Call Returns */
export interface Bluetooth2GattDiscoverServicesCallReturn {
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address?: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.operationDescriptionGets available services for either the given local Bluetooth adapter or remote device.Note:Depending on the passed parameter, a list of services is returned:If adapterAddress is passed, a list of services for the given adapter will be returned.If address is passed, a list of services for the given remote device will be returned.If both address and adapterAddress are passed, the method will return an error.If none of both is passed, the method will return an error.Parameters */
export interface Bluetooth2GattGetServicesParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: false */
    subscribe?: boolean;
}

/** Object containing the GATT service configuration. */
export interface Bluetooth2Bluetooth2GattServiceInfo {
    /** UUID of the service */
    service: string;
    /** UUID which describes the type of the service.The following types are defined:primary (UUID 0x2800)secondary (UUID 0x2801) */
    type: string;
    /** List of service UUIDs this services includes in its definition. */
    includes: string[];
    /** List of characteristics which are part of the service */
    characteristics: Bluetooth2Bluetooth2GattCharacteristicInfo[];
    /** Unique identifier of the service. */
    instanceId?: string;
}

/** ACG: bluetooth.operationDescriptionGets available services for either the given local Bluetooth adapter or remote device.Note:Depending on the passed parameter, a list of services is returned:If adapterAddress is passed, a list of services for the given adapter will be returned.If address is passed, a list of services for the given remote device will be returned.If both address and adapterAddress are passed, the method will return an error.If none of both is passed, the method will return an error.ParametersNameRequiredTypeDescriptionadapterAddressRequiredStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device.subscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: falseCall Returns */
export interface Bluetooth2GattGetServicesCallReturn {
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates the list of the available services. */
    services: Bluetooth2Bluetooth2GattServiceInfo[];
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get the notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribed */
    subscribed?: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.operationDescriptionGets available services for either the given local Bluetooth adapter or remote device.Note:Depending on the passed parameter, a list of services is returned:If adapterAddress is passed, a list of services for the given adapter will be returned.If address is passed, a list of services for the given remote device will be returned.If both address and adapterAddress are passed, the method will return an error.If none of both is passed, the method will return an error.ParametersNameRequiredTypeDescriptionadapterAddressRequiredStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device.subscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: falseCall ReturnsNameRequiredTypeDescriptionadapterAddressRequiredStringIndicates the address of the adapter.addressRequiredStringIndicates the address of the remote device.servicesRequiredObject array: bluetooth2GattServiceInfoIndicates the list of the available services.returnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.subscribedOptionalBooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribederrorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details.Subscription Returns */
export interface Bluetooth2GattGetServicesSubscription {
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates the list of the available services. */
    services: Bluetooth2Bluetooth2GattServiceInfo;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribed */
    subscribed?: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.queryDescriptionReturns the status of GATT connection to the given remote device.Parameters */
export interface Bluetooth2GattGetStatusParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates if subscribed to get the notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedDefault: false */
    subscribe?: boolean;
}

/** ACG: bluetooth.queryDescriptionReturns the status of GATT connection to the given remote device.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device.subscribeOptionalBooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedDefault: falseCall Returns */
export interface Bluetooth2GattGetStatusCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates if the connection request is currently being processed.Possible values are:true: Request is being processed.false: Not being processed. For example, if the Bluetooth stack is no longer processing the connection request. */
    connecting: boolean;
    /** Indicates if the connection is open.Possible values are:true: Connection is open.false: Connection is not open. */
    connected: boolean;
    /** Indicates if the discovery service request is currently being processed for the given remote device.Possible values are:true: Currently being processed.false: Not processed. */
    discoveringServices: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** Indicates if subscribed to get the notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed: boolean;
}

/** ACG: bluetooth.queryDescriptionReturns the status of GATT connection to the given remote device.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device.subscribeOptionalBooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedDefault: falseCall ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.adapterAddressRequiredStringIndicates the address of the adapter.addressRequiredStringIndicates the address of the remote device.connectingRequiredBooleanIndicates if the connection request is currently being processed.Possible values are:true: Request is being processed.false: Not being processed. For example, if the Bluetooth stack is no longer processing the connection request.connectedRequiredBooleanIndicates if the connection is open.Possible values are:true: Connection is open.false: Connection is not open.discoveringServicesRequiredBooleanIndicates if the discovery service request is currently being processed for the given remote device.Possible values are:true: Currently being processed.false: Not processed.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details.subscribedRequiredBooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Subscription Returns */
export interface Bluetooth2GattGetStatusSubscription {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.Note: returnValue will contain true until the final response is sent by the service before stopping. */
    returnValue: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates if the connection request is currently being processed.Possible values are:true: Request is being processed.false: Not being processed. For example, if the Bluetooth stack is no longer processing the connection request. */
    connecting: string;
    /** Indicates if the connection is open.Possible values are:true: Connection is open.false: Connection is not open. */
    connected: boolean;
    /** Indicates if the discovery service request is currently being processed for the given remote device.Possible values are:true: Currently being processedfalse: Not processed */
    discoveringServices: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** Indicates if subscribed to get the notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribed */
    subscribed: boolean;
}

/** ACG: bluetooth.operationDescriptionMonitors specific characteristic value changes.Note:If the characteristic is not marked as being notifiable, the method will fail.If the address is not set, monitors specific characteristics of the local service for value changes.If the address is set, monitors specific characteristics of the given remote device for characteristic value changes.Parameters */
export interface Bluetooth2GattMonitorCharacteristicParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the UUID of the service the characteristic belongs to.Note: Either this and characteristic, or instanceId is required. */
    service?: string;
    /** Indicates the UUID of the characteristic to be monitored.Note: Either this and service, or instanceId is required. */
    characteristic?: string;
    /** Indicates the unique identifier of a characteristic to monitored, which has the following format: "nnn".Note: Either this, or service and characteristic are required. */
    InstanceId?: string;
    /** Indicates the identifier of server to get the characteristic from.To read the value of characteristic, set serverId to specific server identifier.Or to read in remote device, set clientId to specific remote device identifier.If both serverId and clientId not specified, find characteristic in the webOS device. */
    serverId?: string;
    /** Indicates the identifier of the remote device (client) to get the characteristic from.To read the value of characteristics, set serverId to specific server identifier.Or to read in remote device, set clientId to specific remote device identifier.If both serverId and clientId not specified, find characteristics in the webOS device. */
    clientId?: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedNote: Must set subscribe to true. */
    subscribe?: boolean;
}

/** ACG: bluetooth.operationDescriptionMonitors specific characteristic value changes.Note:If the characteristic is not marked as being notifiable, the method will fail.If the address is not set, monitors specific characteristics of the local service for value changes.If the address is set, monitors specific characteristics of the given remote device for characteristic value changes.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.serviceOptionalStringIndicates the UUID of the service the characteristic belongs to.Note: Either this and characteristic, or instanceId is required.characteristicOptionalStringIndicates the UUID of the characteristic to be monitored.Note: Either this and service, or instanceId is required.InstanceIdOptionalStringIndicates the unique identifier of a characteristic to monitored, which has the following format: "nnn".Note: Either this, or service and characteristic are required.serverIdOptionalStringIndicates the identifier of server to get the characteristic from.To read the value of characteristic, set serverId to specific server identifier.Or to read in remote device, set clientId to specific remote device identifier.If both serverId and clientId not specified, find characteristic in the webOS device.clientIdOptionalStringIndicates the identifier of the remote device (client) to get the characteristic from.To read the value of characteristics, set serverId to specific server identifier.Or to read in remote device, set clientId to specific remote device identifier.If both serverId and clientId not specified, find characteristics in the webOS device.subscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedNote: Must set subscribe to true.Call Returns */
export interface Bluetooth2GattMonitorCharacteristicCallReturn {
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote. */
    address?: string;
    /** Indicates if subscribed to get the notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribed */
    subscribed?: boolean;
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** Object containing information about the characteristic uuid and values. */
export interface Bluetooth2Bluetooth2GattCharacteristicValueInfo {
    /** Characteristic uuid */
    characteristic: string;
    /** Byte sequence of characteristic data. */
    value: number[];
}

/** ACG: bluetooth.operationDescriptionMonitors specific characteristic value changes.Note:If the characteristic is not marked as being notifiable, the method will fail.If the address is not set, monitors specific characteristics of the local service for value changes.If the address is set, monitors specific characteristics of the given remote device for characteristic value changes.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.serviceOptionalStringIndicates the UUID of the service the characteristic belongs to.Note: Either this and characteristic, or instanceId is required.characteristicOptionalStringIndicates the UUID of the characteristic to be monitored.Note: Either this and service, or instanceId is required.InstanceIdOptionalStringIndicates the unique identifier of a characteristic to monitored, which has the following format: "nnn".Note: Either this, or service and characteristic are required.serverIdOptionalStringIndicates the identifier of server to get the characteristic from.To read the value of characteristic, set serverId to specific server identifier.Or to read in remote device, set clientId to specific remote device identifier.If both serverId and clientId not specified, find characteristic in the webOS device.clientIdOptionalStringIndicates the identifier of the remote device (client) to get the characteristic from.To read the value of characteristics, set serverId to specific server identifier.Or to read in remote device, set clientId to specific remote device identifier.If both serverId and clientId not specified, find characteristics in the webOS device.subscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedNote: Must set subscribe to true.Call ReturnsNameRequiredTypeDescriptionadapterAddressRequiredStringIndicates the address of the adapter.addressOptionalStringIndicates the address of the remote.subscribedOptionalBooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedreturnValueRequiredBooleanIndicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.errorCodeOptionalStringThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details.Subscription Returns */
export interface Bluetooth2GattMonitorCharacteristicSubscription {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** Indicates if subscribed to get the notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribed */
    subscribed: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address?: string;
    /** Indicates the object containing the information about the characteristic uuid and value. */
    changed: Bluetooth2Bluetooth2GattCharacteristicValueInfo;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.operationDescriptionMonitors specific characteristic value changes.If the characteristic is not marked as being notifiable, the method will fail.If the address is not set, monitors specific characteristics of the local service for value changes.If the address is set, monitors specific characteristics of the given remote device for characteristic value changes.Parameters */
export interface Bluetooth2GattMonitorCharacteristicsParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the UUID of the service to which the characteristic belongs to. */
    service: string;
    /** Indicates an array of strings where each string is a UUID of a characteristic to be monitored. */
    characteristics: string[];
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribed */
    subscribe: boolean;
    /** Indicates the identifier of the server to get the characteristic from.Note:To be informed of changes to the value of characteristics, set serverId to specific server identifier.Or to be informed in remote device, set clientId to specific remote device identifier.If both serverId and clientId not specified, find characteristics in the webOS device. */
    serverId?: string;
    /** Indicates the identifier of the remote device (client) to get the characteristics from.Note:To be informed of changes to the value of characteristics, set serverId to specific server identifier.Or to be informed in remote device, set clientId to specific remote device identifier.If both serverId and clientId not specified, find characteristics in the webOS device. */
    clientId?: string;
}

/** ACG: bluetooth.operationDescriptionMonitors specific characteristic value changes.If the characteristic is not marked as being notifiable, the method will fail.If the address is not set, monitors specific characteristics of the local service for value changes.If the address is set, monitors specific characteristics of the given remote device for characteristic value changes.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.serviceRequiredStringIndicates the UUID of the service to which the characteristic belongs to.characteristicsRequiredString arrayIndicates an array of strings where each string is a UUID of a characteristic to be monitored.subscribeRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedserverIdOptionalStringIndicates the identifier of the server to get the characteristic from.Note:To be informed of changes to the value of characteristics, set serverId to specific server identifier.Or to be informed in remote device, set clientId to specific remote device identifier.If both serverId and clientId not specified, find characteristics in the webOS device.clientIdOptionalStringIndicates the identifier of the remote device (client) to get the characteristics from.Note:To be informed of changes to the value of characteristics, set serverId to specific server identifier.Or to be informed in remote device, set clientId to specific remote device identifier.If both serverId and clientId not specified, find characteristics in the webOS device.Call Returns */
export interface Bluetooth2GattMonitorCharacteristicsCallReturn {
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address?: string;
    /** Indicates if subscribed to get the notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribed */
    subscribed: boolean;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.operationDescriptionMonitors specific characteristic value changes.If the characteristic is not marked as being notifiable, the method will fail.If the address is not set, monitors specific characteristics of the local service for value changes.If the address is set, monitors specific characteristics of the given remote device for characteristic value changes.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.serviceRequiredStringIndicates the UUID of the service to which the characteristic belongs to.characteristicsRequiredString arrayIndicates an array of strings where each string is a UUID of a characteristic to be monitored.subscribeRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedserverIdOptionalStringIndicates the identifier of the server to get the characteristic from.Note:To be informed of changes to the value of characteristics, set serverId to specific server identifier.Or to be informed in remote device, set clientId to specific remote device identifier.If both serverId and clientId not specified, find characteristics in the webOS device.clientIdOptionalStringIndicates the identifier of the remote device (client) to get the characteristics from.Note:To be informed of changes to the value of characteristics, set serverId to specific server identifier.Or to be informed in remote device, set clientId to specific remote device identifier.If both serverId and clientId not specified, find characteristics in the webOS device.Call ReturnsNameRequiredTypeDescriptionadapterAddressRequiredStringIndicates the address of the adapter.addressOptionalStringIndicates the address of the remote device.subscribedRequiredBooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedreturnValueRequiredStringIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details.Subscription Returns */
export interface Bluetooth2GattMonitorCharacteristicsSubscription {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** Indicates if subscribed to get the notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribed */
    subscribed: boolean;
    /** Indicates the address of the adapter the operation was performed on. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address?: string;
    /** The address of the adapter the operation was performed on.Note: If adapterAddress input parameter was not specified, the address of the default adapter will be returned. */
    adapterAddress: string;
    /** Object containing information about the characteristic uuid and values. */
    changed: Bluetooth2Bluetooth2GattCharacteristicValueInfo;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.operationDescriptionOpens the BluetoothGattServer managing services.Parameters */
export interface Bluetooth2GattOpenServerParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.operationDescriptionOpens the BluetoothGattServer managing services.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call Returns */
export interface Bluetooth2GattOpenServerCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the unique identifier of a server, which has the following format: "nnn", 3 digit number increasing sequentially. */
    serverId: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.operationDescriptionReads the value of a specific characteristic. Note: When called from client side, the method actively reads and retrieves the latest value from the remote device rather than returning the value from the local cache.When called from server side, the method just returns stored value from the local database.Parameters */
export interface Bluetooth2GattReadCharacteristicValueParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the unique identifier of the service the characteristic belongs to.Note: Either this and characteristic, or instanceId is required. */
    service?: string;
    /** Indicates the unique identifier of the characteristic to read.Note: Either this and service, or instanceId is required. */
    characteristic?: string;
    /** Indicates the unique ID of the characteristic to read, which has the following format: "nnn".Note: Either this, or service and characteristic are required. */
    instanceId?: string;
    /** Indicates the identifier of server to get the characteristic from.To read the value of characteristics, set serverId to specific server identifier.Or to read in remote device, set clientId to specific remote device identifier.If both serverId and clientId not specified, find characteristics in the webOS device. */
    serverId?: string;
    /** Indicates the identifier of the remote device (client) to get the characteristic from.To read the value of characteristics, set serverId to specific server identifier.Or to read in remote device, set clientId to specific remote device identifier.If both serverId and clientId not specified, find characteristics in the webOS device. */
    clientId?: string;
}

/** ACG: bluetooth.operationDescriptionReads the value of a specific characteristic. Note: When called from client side, the method actively reads and retrieves the latest value from the remote device rather than returning the value from the local cache.When called from server side, the method just returns stored value from the local database.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.serviceOptionalStringIndicates the unique identifier of the service the characteristic belongs to.Note: Either this and characteristic, or instanceId is required.characteristicOptionalStringIndicates the unique identifier of the characteristic to read.Note: Either this and service, or instanceId is required.instanceIdOptionalStringIndicates the unique ID of the characteristic to read, which has the following format: "nnn".Note: Either this, or service and characteristic are required.serverIdOptionalStringIndicates the identifier of server to get the characteristic from.To read the value of characteristics, set serverId to specific server identifier.Or to read in remote device, set clientId to specific remote device identifier.If both serverId and clientId not specified, find characteristics in the webOS device.clientIdOptionalStringIndicates the identifier of the remote device (client) to get the characteristic from.To read the value of characteristics, set serverId to specific server identifier.Or to read in remote device, set clientId to specific remote device identifier.If both serverId and clientId not specified, find characteristics in the webOS device.Call Returns */
export interface Bluetooth2GattReadCharacteristicValueCallReturn {
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** Indicates the address of the remote device. */
    address?: string;
    /** Indicates the unique identifier of the service the characteristic belongs to. */
    service: string;
    /** Indicates the value for requested characteristic. */
    value: Bluetooth2Bluetooth2GattCharacteristicInfo;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.operationDescriptionReads the value of a specific characteristic. When called from client side, the method actively reads and retrieves the latest value from the remote device rather than returning the value from the local cache.When called from server side, the method just returns stored value from the local database.Parameters */
export interface Bluetooth2GattReadCharacteristicValuesParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used */
    adapterAddress?: string;
    /** Indicates the unique identifier of the service the characteristic belongs to. */
    service: string;
    /** Indicates the unique identifiers of the characteristics to read. */
    characteristics: string[];
    /** Indicates the identifier of server to get the characteristic from.Note:To read the value of characteristics, set serverId to specific server identifier.Or to read in remote device, set clientId to specific remote device identifier.If both serverId and clientId not specified, find characteristics in the webOS device. */
    serverId?: string;
    /** Indicates the identifier of the remote device (client) to get the characteristic from.Note:To read the value of characteristics, set serverId to specific server identifier.Or to read in remote device, set clientId to specific remote device identifier.If both serverId and clientId not specified, find characteristics in the webOS device. */
    clientId?: string;
}

/** ACG: bluetooth.operationDescriptionReads the value of a specific characteristic. When called from client side, the method actively reads and retrieves the latest value from the remote device rather than returning the value from the local cache.When called from server side, the method just returns stored value from the local database.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is usedserviceRequiredStringIndicates the unique identifier of the service the characteristic belongs to.characteristicsRequiredString arrayIndicates the unique identifiers of the characteristics to read.serverIdOptionalStringIndicates the identifier of server to get the characteristic from.Note:To read the value of characteristics, set serverId to specific server identifier.Or to read in remote device, set clientId to specific remote device identifier.If both serverId and clientId not specified, find characteristics in the webOS device.clientIdOptionalStringIndicates the identifier of the remote device (client) to get the characteristic from.Note:To read the value of characteristics, set serverId to specific server identifier.Or to read in remote device, set clientId to specific remote device identifier.If both serverId and clientId not specified, find characteristics in the webOS device.Call Returns */
export interface Bluetooth2GattReadCharacteristicValuesCallReturn {
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address?: string;
    /** Indicates the unique identifier of the service the characteristic belongs to. */
    service?: string;
    /** Indicates the values of the characteristic. */
    values?: Bluetooth2Bluetooth2GattCharacteristicInfo;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.operationDescriptionReads the value of descriptor of a service characteristic either in the local adapter or the remote device. When called from client side, the method actively reads and retrieves the latest value from the remote device rather than returning the value from the local cache.When called from server side, the method just returns stored value from the local database.Parameters */
export interface Bluetooth2GattReadDescriptorValueParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be usedIf the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used */
    adapterAddress?: string;
    /** Indicates the unique identifier of the service the characteristic belongs to.Note: Either this and characteristic and descriptor, or instanceId is required. */
    service?: string;
    /** Indicates the unique identifier of the characteristic the descriptor belongs to.Note: Either this and service and descriptor, or instanceId is required. */
    characteristic?: string;
    /** Indicates the Uuid of descriptor.Note: Either this and service and characteristic, or instanceId is required. */
    descriptor?: string;
    /** Unique identifier of the descriptor to read, which has the following format: "nnn". Either this, or service and characteristic, descriptor are required. */
    instanceId?: string;
    /** Indicates the identifier of server to get the descriptors from.Note:To read the value of descriptors, set serverId to specific server identifier.Or to read in remote device, set clientId to specific remote device identifier.If both serverId and clientId not specified, find descriptors in the webOS device. */
    serverId?: string;
    /** Indicates the identifier of remote device (client) to get the descriptors from.Note:To read the value of descriptors, set serverId to specific server identifier.Otherwise, set clientId to specific remote device identifier.if both serverId and clientId not specified, find descriptors in the webOS device. */
    clientId?: string;
}

/** ACG: bluetooth.operationDescriptionReads the value of descriptor of a service characteristic either in the local adapter or the remote device. When called from client side, the method actively reads and retrieves the latest value from the remote device rather than returning the value from the local cache.When called from server side, the method just returns stored value from the local database.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be usedIf the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is usedserviceOptionalStringIndicates the unique identifier of the service the characteristic belongs to.Note: Either this and characteristic and descriptor, or instanceId is required.characteristicOptionalStringIndicates the unique identifier of the characteristic the descriptor belongs to.Note: Either this and service and descriptor, or instanceId is required.descriptorOptionalStringIndicates the Uuid of descriptor.Note: Either this and service and characteristic, or instanceId is required.instanceIdOptionalStringUnique identifier of the descriptor to read, which has the following format: "nnn". Either this, or service and characteristic, descriptor are required.serverIdOptionalStringIndicates the identifier of server to get the descriptors from.Note:To read the value of descriptors, set serverId to specific server identifier.Or to read in remote device, set clientId to specific remote device identifier.If both serverId and clientId not specified, find descriptors in the webOS device.clientIdOptionalStringIndicates the identifier of remote device (client) to get the descriptors from.Note:To read the value of descriptors, set serverId to specific server identifier.Otherwise, set clientId to specific remote device identifier.if both serverId and clientId not specified, find descriptors in the webOS device.Call Returns */
export interface Bluetooth2GattReadDescriptorValueCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address?: string;
    /** Indicates the unique identifier of the service the descriptor belongs to. */
    service: string;
    /** Indicates the unique identifier of the characteristic the descriptor belongs to. */
    characteristic: string;
    /** Indicates the value for the requested descriptor. */
    value: Bluetooth2Bluetooth2GattDescriptorInfo;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.operationDescriptionRead the value of descriptor(s) of a service characteristic either in the local adapter or the remote device. When called from client side, the method actively reads and retrieves the latest value from the remote device rather than returning the value from the local cache.When called from server side, the method just returns stored value from the local database. Parameters */
export interface Bluetooth2GattReadDescriptorValuesParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be usedIf the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used */
    adapterAddress?: string;
    /** Indicates the unique identifier of the service the descriptor belongs to. */
    service: string;
    /** Indicates the unique identifier of the characteristic the descriptor belongs to. */
    characteristic: string;
    /** Indicates the array of descriptors UUIDs. */
    descriptors: string[];
    /** Indicates the identifier of server to get the descriptors from.Note:To read the value of descriptors, set serverId to specific server identifier.Or to read in remote device, set clientId to specific remote device identifier.If both serverId and clientId not specified, find descriptors in the webOS device. */
    serverId?: string;
    /** Indicates the identifier of the remote device (client) to get the descriptors from.Note:To read the value of descriptors, set serverId to specific server identifier.Otherwise, set clientId to specific remote device identifier.if both serverId and clientId not specified, find descriptors in the webOS device. */
    clientId?: string;
}

/** ACG: bluetooth.operationDescriptionRead the value of descriptor(s) of a service characteristic either in the local adapter or the remote device. When called from client side, the method actively reads and retrieves the latest value from the remote device rather than returning the value from the local cache.When called from server side, the method just returns stored value from the local database. ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be usedIf the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is usedserviceRequiredStringIndicates the unique identifier of the service the descriptor belongs to.characteristicRequiredStringIndicates the unique identifier of the characteristic the descriptor belongs to.descriptorsRequiredString arrayIndicates the array of descriptors UUIDs.serverIdOptionalStringIndicates the identifier of server to get the descriptors from.Note:To read the value of descriptors, set serverId to specific server identifier.Or to read in remote device, set clientId to specific remote device identifier.If both serverId and clientId not specified, find descriptors in the webOS device.clientIdOptionalStringIndicates the identifier of the remote device (client) to get the descriptors from.Note:To read the value of descriptors, set serverId to specific server identifier.Otherwise, set clientId to specific remote device identifier.if both serverId and clientId not specified, find descriptors in the webOS device.Call Returns */
export interface Bluetooth2GattReadDescriptorValuesCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address?: string;
    /** Indicates the unique identifier of the service the descriptor belongs to. */
    service: string;
    /** Indicates the unique identifier of the characteristic the descriptor belongs to. */
    characteristic: string;
    /** Indicates the values for requested descriptors. */
    values: Bluetooth2Bluetooth2GattDescriptorInfo[];
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.operationDescriptionRemove a service definition from the local database. All characteristics which belong to the service will be also removed.If the given service is included by another service, the method will fail.Parameters */
export interface Bluetooth2GattRemoveServiceParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be usedIf the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used */
    adapterAddress?: string;
    /** Indicates the unique identifier of the service. */
    service: string;
    /** Indicates the identifier of server to remove the service from.Note:To remove the service, set serverId to specific server identifier.If not specified, find service with uuid in the webOS device. */
    serverId?: string;
}

/** ACG: bluetooth.operationDescriptionRemove a service definition from the local database. All characteristics which belong to the service will be also removed.If the given service is included by another service, the method will fail.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be usedIf the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is usedserviceRequiredStringIndicates the unique identifier of the service.serverIdOptionalStringIndicates the identifier of server to remove the service from.Note:To remove the service, set serverId to specific server identifier.If not specified, find service with uuid in the webOS device.Call Returns */
export interface Bluetooth2GattRemoveServiceCallReturn {
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.operationDescriptionWrites the value for a local or remote characteristic.Parameters */
export interface Bluetooth2GattWriteCharacteristicValueParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be usedIf the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used */
    adapterAddress?: string;
    /** Indicates the UUID of the service the characteristic belongs to.Note: Either this and service, or instanceId is required. */
    service?: string;
    /** Indicates the UUID (unique identifier) of the characteristic.Note: Either this and service, or instanceId is required. */
    characteristic?: string;
    /** Indicates the unique identifier of the descriptors to read, which has the following format: "nnn".Note: Either this, or service and characteristic are required. */
    instanceId?: string;
    /** Indicates the value of the characteristic.Note: A value can only have one type and depending on this type one of the fields "string", "number" or "bytes" should be passed. If multiple fields are passed, the method will fail. */
    value: Bluetooth2Bluetooth2GattValueInfo;
    /** Indicates the identifier of server to get the characteristic from.Note:To write the value of characteristic, set serverId to specific server identifier.Or to write in remote device, set clientId to specific remote device identifier.If both serverId and clientId not specified, find characteristic in the webOS device. */
    serverId?: string;
    /** Indicates the identifier of the remote device (client) to get the characteristic from.Note:To write the value of characteristic, set serverId to specific server identifier.Or to write in remote device, set clientId to specific remote device identifier.If both serverId and clientId not specified, find characteristic in the webOS device. */
    clientId?: string;
    /** Indicates the writeType of the characteristic.Possible values are:defaultnoresponsesigned */
    writeType?: string;
}

/** ACG: bluetooth.operationDescriptionWrites the value for a local or remote characteristic.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be usedIf the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is usedserviceOptionalStringIndicates the UUID of the service the characteristic belongs to.Note: Either this and service, or instanceId is required.characteristicOptionalStringIndicates the UUID (unique identifier) of the characteristic.Note: Either this and service, or instanceId is required.instanceIdOptionalStringIndicates the unique identifier of the descriptors to read, which has the following format: "nnn".Note: Either this, or service and characteristic are required.valueRequiredObject: bluetooth2GattValueInfoIndicates the value of the characteristic.Note: A value can only have one type and depending on this type one of the fields "string", "number" or "bytes" should be passed. If multiple fields are passed, the method will fail.serverIdOptionalStringIndicates the identifier of server to get the characteristic from.Note:To write the value of characteristic, set serverId to specific server identifier.Or to write in remote device, set clientId to specific remote device identifier.If both serverId and clientId not specified, find characteristic in the webOS device.clientIdOptionalStringIndicates the identifier of the remote device (client) to get the characteristic from.Note:To write the value of characteristic, set serverId to specific server identifier.Or to write in remote device, set clientId to specific remote device identifier.If both serverId and clientId not specified, find characteristic in the webOS device.writeTypeOptionalStringIndicates the writeType of the characteristic.Possible values are:defaultnoresponsesignedCall Returns */
export interface Bluetooth2GattWriteCharacteristicValueCallReturn {
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address?: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue?: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.operationDescriptionWrites the value of a specific descriptor of a service characteristic either in the local adapter or the remote device.Parameters */
export interface Bluetooth2GattWriteDescriptorValueParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be usedIf the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used */
    adapterAddress?: string;
    /** Indicates the unique identifier of the service the descriptor belongs to.Note: Either this and characteristic and descriptor, or instanceId is required. */
    service?: string;
    /** Indicates the unique identifier of the characteristic the descriptor belongs to.Note: Either this and service and descriptor, or instanceId is required. */
    characteristic?: string;
    /** Indicates the unique identifier of the descriptor.Note: Either this and service and characteristic, or instanceId is required. */
    descriptor?: string;
    /** Indicates the unique identifier of the descriptors to read, which has the following format: "nnn".Note: Either this, or service and characteristic are required. */
    instanceId?: string;
    /** Indicates the value of the descriptor.Note:A value can only have one type. Depending on this type, one of the fields "string", "number" or "bytes" is passed. If multiple fields are passed, the method will fail. */
    value: Bluetooth2Bluetooth2GattValueInfo;
    /** Indicates the identifier of server to get the descriptor from.Note:To write the value of descriptor, set serverId to specific server identifier.Or to write in remote device, set clientId to specific remote device identifier.if both serverId and clientId not specified, find descriptor in the webOS device. */
    serverId?: string;
    /** Indicates the identifier of the remote device (client) to get the descriptor from.Note:To write the value of descriptor, set serverId to specific server identifier.Or to write in remote device, set clientId to specific remote device identifier.if both serverId and clientId not specified, find descriptor in the webOS device. */
    clientId?: string;
}

/** ACG: bluetooth.operationDescriptionWrites the value of a specific descriptor of a service characteristic either in the local adapter or the remote device.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be usedIf the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is usedserviceOptionalStringIndicates the unique identifier of the service the descriptor belongs to.Note: Either this and characteristic and descriptor, or instanceId is required.characteristicOptionalStringIndicates the unique identifier of the characteristic the descriptor belongs to.Note: Either this and service and descriptor, or instanceId is required.descriptorOptionalStringIndicates the unique identifier of the descriptor.Note: Either this and service and characteristic, or instanceId is required.instanceIdOptionalStringIndicates the unique identifier of the descriptors to read, which has the following format: "nnn".Note: Either this, or service and characteristic are required.valueRequiredObject: bluetooth2GattValueInfoIndicates the value of the descriptor.Note:A value can only have one type. Depending on this type, one of the fields "string", "number" or "bytes" is passed. If multiple fields are passed, the method will fail.serverIdOptionalStringIndicates the identifier of server to get the descriptor from.Note:To write the value of descriptor, set serverId to specific server identifier.Or to write in remote device, set clientId to specific remote device identifier.if both serverId and clientId not specified, find descriptor in the webOS device.clientIdOptionalStringIndicates the identifier of the remote device (client) to get the descriptor from.Note:To write the value of descriptor, set serverId to specific server identifier.Or to write in remote device, set clientId to specific remote device identifier.if both serverId and clientId not specified, find descriptor in the webOS device.Call Returns */
export interface Bluetooth2GattWriteDescriptorValueCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}
