export interface Bluetooth2AdapterAwaitPairingRequestsParameters {
    subscribe: boolean;
}

export interface Bluetooth2AdapterAwaitPairingRequestsCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AdapterAwaitPairingRequestsSubscription {
    returnValue: boolean;
    subscribed: boolean;
    address: string;
    request: string;
    passkey?: string;
    pinCode?: string;
    name: string;
}

export interface Bluetooth2AdapterCancelDiscoveryParameters {
    adapterAddress?: string;
}

export interface Bluetooth2AdapterCancelDiscoveryCallReturn {
    adapterAddress: string;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AdapterCancelPairingParameters {
    address: string;
    adapterAddress?: string;
}

export interface Bluetooth2AdapterCancelPairingCallReturn {
    returnValue: boolean;
    subscribed: boolean;
    adapterAddress: string;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AdapterGetStatusParameters {
    subscribe?: boolean;
}

export interface Bluetooth2Bluetooth2AdapterStatus {
    adapterAddress: string;
    name: string;
    powered: boolean;
    discovering: boolean;
    discoveryTimeout: number;
    pairing: boolean;
    discoverable: boolean;
    discoverableTimeout: number;
    pairable: boolean;
    pairableTimeout: number;
    interfaceName: string;
}

export interface Bluetooth2AdapterGetStatusCallReturn {
    subscribed: boolean;
    returnValue: boolean;
    adapters: Bluetooth2Bluetooth2AdapterStatus[];
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AdapterGetStatusSubscription {
    returnValue: boolean;
    subscribed: boolean;
    adapters: Bluetooth2Bluetooth2AdapterStatus[];
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AdapterPairParameters {
    address: string;
    subscribe: boolean;
    adapterAddress?: string;
}

export interface Bluetooth2AdapterPairCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AdapterPairSubscription {
    returnValue: boolean;
    subscribed: boolean;
    address?: string;
    request?: string;
    passkey?: number;
    pinCode?: string;
}

export interface Bluetooth2AdapterQueryAvailableParameters {
    subscribe?: boolean;
}

export interface Bluetooth2Bluetooth2ServiceClass {
    mnemonic: string;
    category: string;
}

export interface Bluetooth2Bluetooth2Adapter {
    adapterAddress: string;
    default: boolean;
    classofDevice: number;
    stackName: string;
    stackVersion: string;
    firmwareVersion: string;
    serviceClasses: Bluetooth2Bluetooth2ServiceClass[];
}

export interface Bluetooth2AdapterQueryAvailableCallReturn {
    subscribed: boolean;
    returnValue: boolean;
    adapters: Bluetooth2Bluetooth2Adapter[];
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AdapterQueryAvailableSubscription {
    returnValue: boolean;
    subscribed: boolean;
    adapters: Bluetooth2Bluetooth2AdapterStatus[];
    errorCode?: string;
    errorText?: string;
}

export interface Bluetooth2AdapterSetStateParameters {
    adapterAddress?: string;
    name?: string;
    powered?: boolean;
    discoveryTimeout?: number;
    discoverable?: boolean;
    discoverableTimeout?: number;
    pairable?: boolean;
    pairableTimeout?: number;
}

export interface Bluetooth2AdapterSetStateCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AdapterStartDiscoveryParameters {
    adapterAddress?: string;
}

export interface Bluetooth2AdapterStartDiscoveryCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AdapterSupplyPasskeyParameters {
    address: string;
    passkey: number;
}

export interface Bluetooth2AdapterSupplyPasskeyCallReturn {
    adapterAddress: string;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AdapterSupplyPasskeyConfirmationParameters {
    address: string;
    accept: boolean;
}

export interface Bluetooth2AdapterSupplyPasskeyConfirmationCallReturn {
    adapterAddress: string;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AdapterSupplyPinCodeParameters {
    address: string;
    pin: string;
}

export interface Bluetooth2AdapterSupplyPinCodeCallReturn {
    adapterAddress: string;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AdapterUnpairParameters {
    address: string;
}

export interface Bluetooth2AdapterUnpairCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    errorCode?: number;
    errorText?: string;
}
