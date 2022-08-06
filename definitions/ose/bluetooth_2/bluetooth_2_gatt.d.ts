export interface Bluetooth2Bluetooth2GattValueInfo {
    string?: string;
    number?: number;
    bytes?: number[];
}

export interface Bluetooth2Bluetooth2GattPropertiesInfo {
    broadcast?: boolean;
    read?: boolean;
    writeWithoutResponse?: boolean;
    write?: boolean;
    notify?: boolean;
    indicate?: boolean;
    authenticatedSignedWrites?: boolean;
    extendedProperties?: boolean;
}

export interface Bluetooth2Bluetooth2GattPermissionsInfo {
    read?: boolean;
    readEncrypted?: boolean;
    readEncryptedMitm?: boolean;
    write?: boolean;
    writeEncrypted?: boolean;
    writeEncryptedMitm?: boolean;
    writeSigned?: boolean;
    writeSignedMitm?: boolean;
}

export interface Bluetooth2Bluetooth2GattDescriptorInfo {
    descriptor: string;
    value: Bluetooth2Bluetooth2GattValueInfo;
    instanceId?: string;
}

export interface Bluetooth2Bluetooth2GattCharacteristicInfo {
    characteristic: string;
    value: Bluetooth2Bluetooth2GattValueInfo;
    properties: Bluetooth2Bluetooth2GattPropertiesInfo;
    permissions: Bluetooth2Bluetooth2GattPermissionsInfo;
    descriptors: Bluetooth2Bluetooth2GattDescriptorInfo[];
    instanceId?: string;
}

export interface Bluetooth2GattAddServiceParameters {
    adapterAddress?: string;
    service: string;
    type: string;
    includes: string[];
    characteristics: Bluetooth2Bluetooth2GattCharacteristicInfo[];
    serverId?: string;
}

export interface Bluetooth2GattAddServiceCallReturn {
    adapterAddress: string;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    serverId: string;
}

export interface Bluetooth2GattCloseServerParameters {
    serverId: string;
    adapterAddress?: string;
}

export interface Bluetooth2GattCloseServerCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    errorCode?: string;
    errorText?: string;
}

export interface Bluetooth2GattConnectParameters {
    adapterAddress?: string;
    address: string;
    subscribe?: boolean;
    autoConnect?: boolean;
}

export interface Bluetooth2GattConnectCallReturn {
    returnValue: boolean;
    adapaterAddress: string;
    address: string;
    errorCode?: number;
    errorText?: string;
    clientId: string;
}

export interface Bluetooth2GattConnectSubscription {
    returnValue: boolean;
    adapaterAddress: string;
    address: string;
    subscribed: boolean;
    disconnectByRemote?: boolean;
}

export interface Bluetooth2GattDisconnectParameters {
    adapterAddress?: string;
    clientId: string;
}

export interface Bluetooth2GattDisconnectCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    address: string;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2GattDiscoverServicesParameters {
    adapterAddress?: string;
    address?: string;
}

export interface Bluetooth2GattDiscoverServicesCallReturn {
    adapterAddress: string;
    address?: string;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2GattGetServicesParameters {
    adapterAddress: string;
    address: string;
    subscribe?: boolean;
}

export interface Bluetooth2Bluetooth2GattServiceInfo {
    service: string;
    type: string;
    includes: string[];
    characteristics: Bluetooth2Bluetooth2GattCharacteristicInfo[];
    instanceId?: string;
}

export interface Bluetooth2GattGetServicesCallReturn {
    adapterAddress: string;
    address: string;
    services: Bluetooth2Bluetooth2GattServiceInfo[];
    returnValue: boolean;
    subscribed?: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2GattGetServicesSubscription {
    adapterAddress: string;
    address: string;
    services: Bluetooth2Bluetooth2GattServiceInfo;
    returnValue: boolean;
    subscribed?: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2GattGetStatusParameters {
    adapterAddress?: string;
    address: string;
    subscribe?: boolean;
}

export interface Bluetooth2GattGetStatusCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    address: string;
    connecting: boolean;
    connected: boolean;
    discoveringServices: boolean;
    errorCode?: number;
    errorText?: string;
    subscribed: boolean;
}

export interface Bluetooth2GattGetStatusSubscription {
    returnValue: boolean;
    adapterAddress: string;
    address: string;
    connecting: string;
    connected: boolean;
    discoveringServices: boolean;
    errorCode?: number;
    errorText?: string;
    subscribed: boolean;
}

export interface Bluetooth2GattMonitorCharacteristicParameters {
    adapterAddress?: string;
    service?: string;
    characteristic?: string;
    InstanceId?: string;
    serverId?: string;
    clientId?: string;
    subscribe?: boolean;
}

export interface Bluetooth2GattMonitorCharacteristicCallReturn {
    adapterAddress: string;
    address?: string;
    subscribed?: boolean;
    returnValue: boolean;
    errorCode?: string;
    errorText?: string;
}

export interface Bluetooth2Bluetooth2GattCharacteristicValueInfo {
    characteristic: string;
    value: number[];
}

export interface Bluetooth2GattMonitorCharacteristicSubscription {
    returnValue: boolean;
    subscribed: boolean;
    adapterAddress: string;
    address?: string;
    changed: Bluetooth2Bluetooth2GattCharacteristicValueInfo;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2GattMonitorCharacteristicsParameters {
    adapterAddress?: string;
    service: string;
    characteristics: string[];
    subscribe: boolean;
    serverId?: string;
    clientId?: string;
}

export interface Bluetooth2GattMonitorCharacteristicsCallReturn {
    adapterAddress: string;
    address?: string;
    subscribed: boolean;
    returnValue: string;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2GattMonitorCharacteristicsSubscription {
    returnValue: boolean;
    subscribed: boolean;
    adapterAddress: string;
    address?: string;
    adapterAddress: string;
    changed: Bluetooth2Bluetooth2GattCharacteristicValueInfo;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2GattOpenServerParameters {
    adapterAddress?: string;
}

export interface Bluetooth2GattOpenServerCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    serverId: string;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2GattReadCharacteristicValueParameters {
    adapterAddress?: string;
    service?: string;
    characteristic?: string;
    instanceId?: string;
    serverId?: string;
    clientId?: string;
}

export interface Bluetooth2GattReadCharacteristicValueCallReturn {
    adapterAddress: string;
    returnValue: boolean;
    address?: string;
    service: string;
    value: Bluetooth2Bluetooth2GattCharacteristicInfo;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2GattReadCharacteristicValuesParameters {
    adapterAddress?: string;
    service: string;
    characteristics: string[];
    serverId?: string;
    clientId?: string;
}

export interface Bluetooth2GattReadCharacteristicValuesCallReturn {
    adapterAddress: string;
    address?: string;
    service?: string;
    values?: Bluetooth2Bluetooth2GattCharacteristicInfo;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2GattReadDescriptorValueParameters {
    adapterAddress?: string;
    service?: string;
    characteristic?: string;
    descriptor?: string;
    instanceId?: string;
    serverId?: string;
    clientId?: string;
}

export interface Bluetooth2GattReadDescriptorValueCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    address?: string;
    service: string;
    characteristic: string;
    value: Bluetooth2Bluetooth2GattDescriptorInfo;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2GattReadDescriptorValuesParameters {
    adapterAddress?: string;
    service: string;
    characteristic: string;
    descriptors: string[];
    serverId?: string;
    clientId?: string;
}

export interface Bluetooth2GattReadDescriptorValuesCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    address?: string;
    service: string;
    characteristic: string;
    values: Bluetooth2Bluetooth2GattDescriptorInfo[];
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2GattRemoveServiceParameters {
    adapterAddress?: string;
    service: string;
    serverId?: string;
}

export interface Bluetooth2GattRemoveServiceCallReturn {
    adapterAddress: string;
    returnValue: boolean;
    errorCode?: boolean;
    errorText?: string;
}

export interface Bluetooth2GattWriteCharacteristicValueParameters {
    adapterAddress?: string;
    service?: string;
    characteristic?: string;
    instanceId?: string;
    value: Bluetooth2Bluetooth2GattValueInfo;
    serverId?: string;
    clientId?: string;
    writeType?: string;
}

export interface Bluetooth2GattWriteCharacteristicValueCallReturn {
    adapterAddress: string;
    address?: string;
    returnValue?: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2GattWriteDescriptorValueParameters {
    adapterAddress?: string;
    service?: string;
    characteristic?: string;
    descriptor?: string;
    instanceId?: string;
    value: Bluetooth2Bluetooth2GattValueInfo;
    serverId?: string;
    clientId?: string;
}

export interface Bluetooth2GattWriteDescriptorValueCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    address?: string;
    errorCode?: number;
    errorText?: string;
}
