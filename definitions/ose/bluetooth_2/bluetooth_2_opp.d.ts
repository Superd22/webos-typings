export interface Bluetooth2OppAcceptTransferRequestParameters {
    requestId: string;
    adapaterAddress?: string;
}

export interface Bluetooth2OppAcceptTransferRequestCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2OppAwaitTransferRequestParameters {
    subscribe: boolean;
    adapterAddress?: string;
}

export interface Bluetooth2Bluetooth2PushRequest {
    requestId: string;
    address: string;
    name: string;
    fileName: string;
    fileSize: number;
    transferred?: number;
}

export interface Bluetooth2OppAwaitTransferRequestSubscription {
    returnValue: boolean;
    adapterAddress: string;
    subscribed: boolean;
    request?: Bluetooth2Bluetooth2PushRequest;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2OppCancelTransferParameters {
    requestId: string;
}

export interface Bluetooth2OppCancelTransferCallReturn {
    returnValue: boolean;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2OppConnectParameters {
    address: string;
    subscribe?: boolean;
}

export interface Bluetooth2OppConnectCallReturn {
    subscribed: boolean;
    returnValue: boolean;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2OppConnectSubscription {
    disconnectByRemote: string;
    errorCode?: number;
    errorText?: string;
    returnValue: boolean;
    subscribed: boolean;
}

export interface Bluetooth2OppDisconnectParameters {
    address: string;
}

export interface Bluetooth2OppDisconnectCallReturn {
    returnValue: boolean;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2OppGetStatusParameters {
    address: string;
    subscribe?: boolean;
}

export interface Bluetooth2OppGetStatusCallReturn {
    returnValue: boolean;
    connecting: boolean;
    connected: boolean;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2OppGetStatusSubscription {
    returnValue: boolean;
    subscribed: boolean;
    connecting: boolean;
    connected: boolean;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2OppMonitorTransferParameters {
    subscribe: boolean;
    adapterAddress?: string;
}

export interface Bluetooth2OppMonitorTransferSubscription {
    subscribed: boolean;
    returnValue: boolean;
    adapterAddress: string;
    transfers?: Bluetooth2Bluetooth2PushRequest[];
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2OppPushFileParameters {
    address: string;
    sourceFile: string;
    subscribe?: boolean;
    adapterAddress?: string;
}

export interface Bluetooth2OppPushFileCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    subscribed: boolean;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2OppPushFileSubscription {
    returnValue: boolean;
    adapterAddress: string;
    subscribed: boolean;
    transferred?: number;
    size?: number;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2OppRejectTransferRequestParameters {
    requestId: string;
    adapterAddress?: string;
}

export interface Bluetooth2OppRejectTransferRequestCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    errorText?: string;
    errorCode?: number;
}
