export interface Bluetooth2SppConnectParameters {
    address: string;
    uuid: string;
    subscribe?: boolean;
    adapterAddress?: string;
}

export interface Bluetooth2SppConnectCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    subscribed: boolean;
    address: string;
    channelId?: string;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2SppConnectSubscription {
    returnValue: boolean;
    subscribed: boolean;
    adapterAddress: string;
    disconnectByRemote: boolean;
    address?: string;
    channelId?: string;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2SppCreateChannelParameters {
    name: string;
    uuid: string;
    subscribe: boolean;
    adapterAddress?: string;
}

export interface Bluetooth2SppCreateChannelCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    subscribed: boolean;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2SppCreateChannelSubscription {
    returnValue: boolean;
    subscribed: boolean;
    adapterAddress: string;
    channelId: string;
    connected: boolean;
    address?: string;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2SppDisconnectParameters {
    channelId: string;
    adapterAddress?: string;
}

export interface Bluetooth2SppDisconnectCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2SppGetStatusParameters {
    address: string;
    subscribe?: boolean;
    adapterAddress?: string;
}

export interface Bluetooth2SppGetStatusCallReturn {
    returnValue: boolean;
    connecting: boolean;
    connected: boolean;
    adapterAddress: string;
    connectedChannels: string[];
    subscribed: boolean;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2SppGetStatusSubscription {
    returnValue: boolean;
    subscribed?: boolean;
    connecting: boolean;
    connected: boolean;
    adapterAddress: string;
    connectedChannels: string[];
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2SppReadDataParameters {
    channelId?: string;
    subscribe?: boolean;
    timeout?: number;
    adapterAddress?: string;
}

export interface Bluetooth2SppReadDataCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    subscribed: boolean;
    channelId: string;
    data?: string;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2SppReadDataSubscription {
    returnValue: boolean;
    subscribed: boolean;
    adapterAddress: string;
    channelId: string;
    data?: string;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2SppWriteDataParameters {
    channelId: string;
    data: string;
    adapterAddress?: string;
}

export interface Bluetooth2SppWriteDataCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    errorText?: string;
    errorCode?: number;
}
