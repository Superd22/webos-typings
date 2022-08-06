export interface Bluetooth2Bluetooth2LeServiceUuidObject {
    uuid: string;
    mask?: string;
}

export interface Bluetooth2Bluetooth2LeServiceDataObject {
    uuid: string;
    data: number[];
    mask?: number[];
}

export interface Bluetooth2Bluetooth2LeManufacturerData {
    id: number;
    data: number[];
    mask?: number[];
}

export interface Bluetooth2LeInternalStartScanParameters {
    address?: string;
    subscribe: boolean;
    name?: string;
    serviceUuid?: Bluetooth2Bluetooth2LeServiceUuidObject;
    serviceData?: Bluetooth2Bluetooth2LeServiceDataObject;
    manufacturerData?: Bluetooth2Bluetooth2LeManufacturerData;
    advertisingType?: number;
}

export interface Bluetooth2LeInternalStartScanCallReturn {
    subscribe: boolean;
    returnValue: boolean;
    adapterAddress: string;
    errorCode?: number;
    errorText?: string;
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

export interface Bluetooth2LeInternalStartScanSubscription {
    subscribe: boolean;
    returnValue: boolean;
    adapterAddress: string;
    device: Bluetooth2Bluetooth2DeviceStatus[];
    errorCode?: number;
    errorText?: string;
    device: Bluetooth2Bluetooth2DeviceStatus;
}

export interface Bluetooth2Bluetooth2AdvertiseSettings {
    connectable?: boolean;
    txPower?: number;
    timeout?: number;
}

export interface Bluetooth2Bluetooth2LeServiceObject {
    uuid: string;
    data?: number[];
}

export interface Bluetooth2Bluetooth2LeProprietaryDataObject {
    type: number;
    data: number[];
}

export interface Bluetooth2Bluetooth2AdvertiseData {
    includeTxPower?: boolean;
    includeName?: boolean;
    manufacturerData?: number[];
    services?: Bluetooth2Bluetooth2LeServiceObject[];
    proprietaryData?: Bluetooth2Bluetooth2LeProprietaryDataObject;
}

export interface Bluetooth2LeStartAdvertisingParameters {
    adapterAddress?: string;
    subscribe: boolean;
    settings?: Bluetooth2Bluetooth2AdvertiseSettings;
    advertiseData?: Bluetooth2Bluetooth2AdvertiseData;
    scanResponse?: Bluetooth2Bluetooth2AdvertiseData;
}

export interface Bluetooth2LeStartAdvertisingCallReturn {
    adapterAddress: string;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    advertiserId: number;
}

export interface Bluetooth2LeStartScanParameters {
    address?: string;
    subscribe: boolean;
    name?: string;
    serviceUuid?: Bluetooth2Bluetooth2LeServiceUuidObject;
    serviceData?: Bluetooth2Bluetooth2LeServiceDataObject;
    manufacturerData?: Bluetooth2Bluetooth2LeManufacturerData;
    adapterAddress?: string;
}

export interface Bluetooth2LeStartScanCallReturn {
    subscribed: boolean;
    returnValue: boolean;
    adapterAddress: string;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2LeStartScanSubscription {
    subscribed: boolean;
    returnValue: boolean;
    adapterAddress: string;
    devices: Bluetooth2Bluetooth2DeviceStatus[];
    errorCode?: number;
    errorText?: string;
    device: Bluetooth2Bluetooth2DeviceStatus;
}
