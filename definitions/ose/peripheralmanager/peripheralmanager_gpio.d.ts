export interface PeripheralmanagerGpioOpenParameters {
    pin: string;
}

export interface PeripheralmanagerGpioOpenCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
}

export interface PeripheralmanagerGpioGetDirectionParameters {
    pin: string;
}

export interface PeripheralmanagerGpioGetDirectionCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
    direction?: string;
}

export interface PeripheralmanagerGpioSetDirectionParameters {
    pin: string;
    direction: string;
}

export interface PeripheralmanagerGpioSetDirectionCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
}

export interface PeripheralmanagerGpioGetPollingFdParameters {
    id: string;
}

export interface PeripheralmanagerGpioGetPollingFdCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
    fd?: string;
}

export interface PeripheralmanagerGpioGetValueParameters {
    pin: string;
    subscribe?: boolean;
}

export interface PeripheralmanagerGpioGetValueCallReturn {
    errorText?: string;
    errorCode?: number;
    subscribed?: boolean;
    value?: string;
    returnValue: boolean;
}

export interface PeripheralmanagerGpioSetValueParameters {
    pin: string;
    value: string;
}

export interface PeripheralmanagerGpioSetValueCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
}

export interface PeripheralmanagerGpioCloseParameters {
    pin: string;
}

export interface PeripheralmanagerGpioCloseCallReturn {
    errorText?: string;
    errorCode?: number;
    returnValue: boolean;
}
