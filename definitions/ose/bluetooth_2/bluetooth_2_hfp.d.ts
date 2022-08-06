export interface Bluetooth2HfpConnectParameters {
    address: string;
    subscribe?: boolean;
    adapterAddress?: string;
}

export interface Bluetooth2HfpConnectCallReturn {
    returnValue: boolean;
    subscribed: boolean;
    adapterAddress: string;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2HfpConnectSubscription {
    returnValue: string;
    subscribed: boolean;
    disconnectByRemote: boolean;
    adapterAddress: string;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2HfpDisconnectParameters {
    address: string;
    adapterAddress?: string;
}

export interface Bluetooth2HfpDisconnectCallReturn {
    returnValues: boolean;
    adapterAddress: string;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2HfpGetStatusParameters {
    address: string;
    subscribe?: boolean;
    adapterAddress?: string;
}

export interface Bluetooth2HfpGetStatusCallReturn {
    returnValue: boolean;
    subscribed: boolean;
    connecting: boolean;
    connected: boolean;
    sco: boolean;
    adapterAddress: string;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2HfpGetStatusSubscription {
    returnValue: boolean;
    subscribed: boolean;
    connecting: boolean;
    connected: boolean;
    sco: boolean;
    adapterAddress: string;
    errorText?: string;
    errorCode?: number;
}
