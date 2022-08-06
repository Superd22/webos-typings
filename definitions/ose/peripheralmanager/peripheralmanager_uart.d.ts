export interface PeripheralmanagerUartListParameters {
    subscribe?: boolean;
}

export interface PeripheralmanagerUartList {
    status: string;
    interfaceId: string;
}

export interface PeripheralmanagerUartListCallReturn {
    errorText?: string;
    errorCode?: number;
    subscribed?: string;
    uartList?: PeripheralmanagerUartList[];
    returnValue: boolean;
}

export interface PeripheralmanagerConfig {
    canonical?: boolean;
}

export interface PeripheralmanagerUartOpenParameters {
    interfaceId: string;
    config?: PeripheralmanagerConfig;
}

export interface PeripheralmanagerUartOpenCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
}

export interface PeripheralmanagerUartGetBaudrateParameters {
    interfaceId: string;
}

export interface PeripheralmanagerUartGetBaudrateCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
    baudrate?: number;
}

export interface PeripheralmanagerUartSetBaudrateParameters {
    interfaceId: string;
    baudrate: number;
}

export interface PeripheralmanagerUartSetBaudrateCallReturn {
    errorText?: string;
    errorCode?: string;
    returnValue: string;
}

export interface PeripheralmanagerUartGetPollingFdParameters {
    id: string;
}

export interface PeripheralmanagerUartGetPollingFdCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
    fd?: string;
}

export interface PeripheralmanagerUartReadParameters {
    interfaceId: string;
    dataType?: string;
    size?: number;
}

export interface PeripheralmanagerUartReadCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
    data?: string;
    dataType?: string;
}

export interface PeripheralmanagerUartWriteParameters {
    interfaceId: string;
    data: string;
    dataType: string;
    size: string;
}

export interface PeripheralmanagerUartWriteCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
    size?: number;
}

export interface PeripheralmanagerUartCloseParameters {
    interfaceId: string;
}

export interface PeripheralmanagerUartCloseCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
}
