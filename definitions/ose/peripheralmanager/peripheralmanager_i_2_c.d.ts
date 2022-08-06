export interface PeripheralmanagerI2cListParameters {
    verbose?: boolean;
}

export interface PeripheralmanagerI2cListCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
    i2cList?: string[];
}

export interface PeripheralmanagerI2cOpenParameters {
    name: string;
    address: number;
}

export interface PeripheralmanagerI2cOpenCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
}

export interface PeripheralmanagerI2cReadParameters {
    name: string;
    address: string;
}

export interface PeripheralmanagerI2cReadCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
    size?: number;
    data?: any[];
}

export interface PeripheralmanagerI2cReadRegByteParameters {
    name: string;
    address: number;
    reg: number;
}

export interface PeripheralmanagerI2cReadRegByteCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
    data?: number;
}

export interface PeripheralmanagerI2cReadRegWordParameters {
    name: string;
    address: number;
    reg: number;
}

export interface PeripheralmanagerI2cReadRegWordCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
    data?: number;
}

export interface PeripheralmanagerI2cReadRegBufferParameters {
    name: string;
    address: number;
    reg: number;
}

export interface PeripheralmanagerI2cReadRegBufferCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
    data?: any[];
}

export interface PeripheralmanagerI2cWriteParameters {
    name: string;
    address: number;
    data: any[];
    size?: number;
}

export interface PeripheralmanagerI2cWriteCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
    size?: number;
}

export interface PeripheralmanagerI2cWriteRegByteParameters {
    name: string;
    address: number;
    reg: number;
    data: number;
}

export interface PeripheralmanagerI2cWriteRegByteCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: number;
}

export interface PeripheralmanagerI2cWriteRegWordParameters {
    name: string;
    address: number;
    reg: number;
    data: number;
}

export interface PeripheralmanagerI2cWriteRegWordCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
}

export interface PeripheralmanagerI2cWriteRegBufferParameters {
    name: string;
    address: number;
    reg: number;
    data: any[];
    size: number;
}

export interface PeripheralmanagerI2cWriteRegBufferCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
    size: number;
}

export interface PeripheralmanagerI2cGetPollingFdParameters {
    name: string;
    address: number;
}

export interface PeripheralmanagerI2cGetPollingFdCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
    fd?: string;
}

export interface PeripheralmanagerI2cCloseParameters {
    name: string;
    address: number;
}

export interface PeripheralmanagerI2cCloseCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
}
