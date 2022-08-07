/** ACG: peripheralmanager.queryDescriptionProvides the list of available UART interfaces in the target hardware.Parameters */
export interface PeripheralmanagerUartListParameters {
    /** Indicates if subscribed to get notified when there is a change in available interfaces. Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: false */
    subscribe?: boolean;
}

/** Provide List of UART interfaces along with the status */
export interface PeripheralmanagerUartList {
    /** Status of the interface.Possible values are:used - The interface is currently being used.available - The interface is available for the app to use */
    status: string;
    /** Interface ID as maintained by the service. */
    interfaceId: string;
}

/** ACG: peripheralmanager.queryDescriptionProvides the list of available UART interfaces in the target hardware.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIndicates if subscribed to get notified when there is a change in available interfaces. Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: falseCall Returns */
export interface PeripheralmanagerUartListCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates if subscribed to get notifications. Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed?: string;
    /** List of available UART interfaces. */
    uartList?: PeripheralmanagerUartList[];
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** Configurations to be set for the opened UART Interface. */
export interface PeripheralmanagerConfig {
    /** Enable or disable canonical mode for the opened UART interface. */
    canonical?: boolean;
}

/** ACG: peripheralmanager.uart.operationDescriptionOpens the UART interface, if not already opened by other applications.Parameters */
export interface PeripheralmanagerUartOpenParameters {
    /** ID of the UART interface. */
    interfaceId: string;
    /** The configurations to be set for the opened UART Interface. */
    config?: PeripheralmanagerConfig;
}

/** ACG: peripheralmanager.uart.operationDescriptionOpens the UART interface, if not already opened by other applications.ParametersNameRequiredTypeDescriptioninterfaceIdRequiredStringID of the UART interface.configOptionalObject: configThe configurations to be set for the opened UART Interface.Call Returns */
export interface PeripheralmanagerUartOpenCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: peripheralmanager.queryDescriptionReads the baud rate of the opened UART device.Parameters */
export interface PeripheralmanagerUartGetBaudrateParameters {
    /** ID of the UART interface. */
    interfaceId: string;
}

/** ACG: peripheralmanager.queryDescriptionReads the baud rate of the opened UART device.ParametersNameRequiredTypeDescriptioninterfaceIdRequiredStringID of the UART interface.Call Returns */
export interface PeripheralmanagerUartGetBaudrateCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Value of the baud rate. */
    baudrate?: number;
}

/** ACG: peripheralmanager.uart.operationDescriptionSets the baud rate of the opened UART device to the required value.Parameters */
export interface PeripheralmanagerUartSetBaudrateParameters {
    /** ID of the UART interface. */
    interfaceId: string;
    /** Value of the baud rate. */
    baudrate: number;
}

/** ACG: peripheralmanager.uart.operationDescriptionSets the baud rate of the opened UART device to the required value.ParametersNameRequiredTypeDescriptioninterfaceIdRequiredStringID of the UART interface.baudrateRequiredNumberValue of the baud rate.Call Returns */
export interface PeripheralmanagerUartSetBaudrateCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: string;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: string;
}

/** ACG: peripheralmanager.uart.operationDescriptionReturns the file descriptor for the UART interface specified in the input.Parameters */
export interface PeripheralmanagerUartGetPollingFdParameters {
    /** ID of the UART interface. */
    id: string;
}

/** ACG: peripheralmanager.uart.operationDescriptionReturns the file descriptor for the UART interface specified in the input.ParametersNameRequiredTypeDescriptionidRequiredStringID of the UART interface.Call Returns */
export interface PeripheralmanagerUartGetPollingFdCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** File descriptor of the interface. */
    fd?: string;
}

/** ACG: peripheralmanager.uart.operationDescriptionReads the data from the opened UART device.Parameters */
export interface PeripheralmanagerUartReadParameters {
    /** ID of the UART interface. */
    interfaceId: string;
    /** The format of data to be returned. */
    dataType?: string;
    /** Size of the data to be read. If not specified, all available data is read. */
    size?: number;
}

/** ACG: peripheralmanager.uart.operationDescriptionReads the data from the opened UART device.ParametersNameRequiredTypeDescriptioninterfaceIdRequiredStringID of the UART interface.dataTypeOptionalStringThe format of data to be returned.sizeOptionalNumberSize of the data to be read. If not specified, all available data is read.Call Returns */
export interface PeripheralmanagerUartReadCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Value read from the opened UART interface. */
    data?: string;
    /** Type of data in the data field. */
    dataType?: string;
}

/** ACG: peripheralmanager.uart.operationDescriptionWrites the data to the opened UART device.Parameters */
export interface PeripheralmanagerUartWriteParameters {
    /** ID of the UART interface. */
    interfaceId: string;
    /** Data to write into the UART device. */
    data: string;
    /** Type of data in the data field. */
    dataType: string;
    /** Size of the data passed to be written. */
    size: string;
}

/** ACG: peripheralmanager.uart.operationDescriptionWrites the data to the opened UART device.ParametersNameRequiredTypeDescriptioninterfaceIdRequiredStringID of the UART interface.dataRequiredStringData to write into the UART device.dataTypeRequiredStringType of data in the data field.sizeRequiredStringSize of the data passed to be written.Call Returns */
export interface PeripheralmanagerUartWriteCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Size of the data written to the device. */
    size?: number;
}

/** ACG: peripheralmanager.uart.operationDescriptionCloses the opened UART device so that the interface is available for other apps to use.Parameters */
export interface PeripheralmanagerUartCloseParameters {
    /** ID of the UART interface. */
    interfaceId: string;
}

/** ACG: peripheralmanager.uart.operationDescriptionCloses the opened UART device so that the interface is available for other apps to use.ParametersNameRequiredTypeDescriptioninterfaceIdRequiredStringID of the UART interface.Call Returns */
export interface PeripheralmanagerUartCloseCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}
