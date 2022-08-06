export interface PeripheralmanagerSpiListCallReturn {
    errorText?: string;
    errorCode?: number;
    list?: string[];
    returnValue: boolean;
}

export interface PeripheralmanagerSpiOpenParameters {
    name: string;
}

export interface PeripheralmanagerSpiOpenCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
}

export interface PeripheralmanagerSpiSetModeParameters {
    name: string;
    mode: number;
}

export interface PeripheralmanagerSpiSetModeCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
}

export interface PeripheralmanagerSpiWriteByteParameters {
    data: number;
    name: string;
}

export interface PeripheralmanagerSpiWriteByteCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
}

export interface PeripheralmanagerSpiWriteBufferParameters {
    name: string;
    data: any[];
    size: number;
}

export interface PeripheralmanagerSpiWriteBufferCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
    size?: number;
}

export interface PeripheralmanagerSpiTransferParameters {
    name: string;
    data?: any[];
    size: number;
}

export interface PeripheralmanagerSpiTransferCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
    tx_size?: number;
    rx_size?: number;
    rx_data?: any[];
}

export interface PeripheralmanagerSpiSetFrequencyParameters {
    name: string;
    frequency: number;
}

export interface PeripheralmanagerSpiSetFrequencyCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
}

export interface PeripheralmanagerSpiSetBitJustificationParameters {
    name: string;
    lsb_first: boolean;
}

export interface PeripheralmanagerSpiSetBitJustificationCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
}

export interface PeripheralmanagerSpiSetBitsPerWordParameters {
    name: string;
    nbits: number;
}

export interface PeripheralmanagerSpiSetBitsPerWordCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
}

export interface PeripheralmanagerSpiSetDelayParameters {
    name: string;
    delay_usecs: number;
}

export interface PeripheralmanagerSpiSetDelayCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
}

export interface PeripheralmanagerSpiCloseCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
}
