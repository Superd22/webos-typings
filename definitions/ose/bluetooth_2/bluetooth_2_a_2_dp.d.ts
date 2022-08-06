export interface Bluetooth2A2dpDisableDelayReportingParameters {
    adapterAddress?: string;
}

export interface Bluetooth2A2dpDisableDelayReportingCallReturn {
    adapterAddress: string;
    errorCode: number;
    errorText?: string;
    returnValue?: boolean;
}

export interface Bluetooth2A2dpDisconnectParameters {
    address: string;
    adapterAddress?: string;
}

export interface Bluetooth2A2dpDisconnectCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2A2dpEnableDelayReportingParameters {
    adapterAddress?: string;
}

export interface Bluetooth2A2dpEnableDelayReportingCallReturn {
    adapterAddress: string;
    errorCode?: number;
    errorText?: string;
    returnValue: boolean;
}

export interface Bluetooth2A2dpGetDelayReportingTimeParameters {
    adapterAddress?: string;
    address?: string;
    subscribe?: boolean;
}

export interface Bluetooth2A2dpGetDelayReportingTimeCallReturn {
    delay: number;
    adapterAddress: string;
    address: string;
    errorCode?: number;
    errorText: string;
    returnValue: boolean;
}

export interface Bluetooth2A2dpGetStatusParameters {
    address: string;
    subscribe?: boolean;
    adapterAddress?: string;
}

export interface Bluetooth2A2dpGetStatusCallReturn {
    returnValue: boolean;
    subscribed: boolean;
    connecting: boolean;
    connected: boolean;
    playing: boolean;
    adapterAddress: string;
    address?: string;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2A2dpGetStatusSubscription {
    returnValue: boolean;
    subscribed: boolean;
    connecting: boolean;
    connected: boolean;
    playing: boolean;
    adapterAddress: string;
    address?: string;
    errorText?: string;
    errorCode?: number;
}
