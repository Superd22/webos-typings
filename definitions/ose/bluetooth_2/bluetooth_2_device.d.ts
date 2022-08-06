export interface Bluetooth2DeviceGetStatusParameters {
    subscribe?: boolean;
    adapterAddress?: string;
}

export interface Bluetooth2Bluetooth2ServiceClass {
    mnemonic: string;
    category: string;
}

export interface Bluetooth2Bluetooth2DeviceStatus {
    address: string;
    name: string;
    classOfDevice: number;
    typeOfDevice: string;
    serviceClasses: Bluetooth2Bluetooth2ServiceClass[];
    pairing: boolean;
    paired: boolean;
    adapterAddress: string;
    connectedProfiles?: string[];
    trusted: boolean;
    blocked: boolean;
    rssi: number;
    txPower: number;
    scanRecord: number[];
    manufacturerData: number[];
}

export interface Bluetooth2DeviceGetStatusCallReturn {
    subscribed: boolean;
    returnValue: boolean;
    adapterAddress: string;
    devices: Bluetooth2Bluetooth2DeviceStatus[];
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2DeviceGetStatusSubscription {
    subscribed: boolean;
    returnValue: boolean;
    adapterAddress: string;
    devices: Bluetooth2Bluetooth2DeviceStatus[];
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2DeviceSetStateParameters {
    address: string;
    adapterAddress?: string;
    trusted?: boolean;
    blocked?: boolean;
}

export interface Bluetooth2DeviceSetStateCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2DeviceGetDiscoveredDeviceParameters {
    adapterAddress?: string;
    subscribe: boolean;
}

export interface Bluetooth2DeviceGetDiscoveredDeviceCallReturn {
    subscribed: boolean;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
    device: Bluetooth2Bluetooth2DeviceStatus;
}

export interface Bluetooth2DeviceGetDiscoveredDeviceSubscription {
    subscribed: boolean;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
    device: Bluetooth2Bluetooth2DeviceStatus;
}

export interface Bluetooth2DeviceGetPairedDevicesParameters {
    adapterAddress?: string;
    subscribe: string;
}

export interface Bluetooth2DeviceGetPairedDevicesCallReturn {
    subscribed: boolean;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
    devices: Bluetooth2Bluetooth2DeviceStatus[];
}

export interface Bluetooth2DeviceGetPairedDevicesSubscription {
    subscribed: boolean;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    adapterAddress: string;
    devices: Bluetooth2Bluetooth2DeviceStatus[];
}
