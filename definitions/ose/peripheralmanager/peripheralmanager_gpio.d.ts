/** ACG: peripheralmanager.gpio.operationDescriptionOpens the GPIO pin, if not already opened by other applications.Parameters */
export interface PeripheralmanagerGpioOpenParameters {
    /** ID of the pin. */
    pin: string;
}

/** ACG: peripheralmanager.gpio.operationDescriptionOpens the GPIO pin, if not already opened by other applications.ParametersNameRequiredTypeDescriptionpinRequiredStringID of the pin.Call Returns */
export interface PeripheralmanagerGpioOpenCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: peripheralmanager.queryDescriptionReturns the direction of the required GPIO pin.Parameters */
export interface PeripheralmanagerGpioGetDirectionParameters {
    /** ID of the pin. */
    pin: string;
}

/** ACG: peripheralmanager.queryDescriptionReturns the direction of the required GPIO pin.ParametersNameRequiredTypeDescriptionpinRequiredStringID of the pin.Call Returns */
export interface PeripheralmanagerGpioGetDirectionCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the direction of the pin. */
    direction?: string;
}

/** ACG: peripheralmanager.gpio.operationDescriptionSets the direction of the GPIO pin to input or outputParameters */
export interface PeripheralmanagerGpioSetDirectionParameters {
    /** ID of the pin. */
    pin: string;
    /** Direction of the pin. Possible values are: "in", "outLow", "outHigh" */
    direction: string;
}

/** ACG: peripheralmanager.gpio.operationDescriptionSets the direction of the GPIO pin to input or outputParametersNameRequiredTypeDescriptionpinRequiredStringID of the pin.directionRequiredStringDirection of the pin. Possible values are: "in", "outLow", "outHigh"Call Returns */
export interface PeripheralmanagerGpioSetDirectionCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: peripheralmanager.gpio.operationDescriptionReturns the file descriptor for the GPIO pin specified in the input.Parameters */
export interface PeripheralmanagerGpioGetPollingFdParameters {
    /** ID of the pin. */
    id: string;
}

/** ACG: peripheralmanager.gpio.operationDescriptionReturns the file descriptor for the GPIO pin specified in the input.ParametersNameRequiredTypeDescriptionidRequiredStringID of the pin.Call Returns */
export interface PeripheralmanagerGpioGetPollingFdCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** File descriptor of the interface. */
    fd?: string;
}

/** ACG: peripheralmanager.gpio.operationDescriptionReads the value of the opened input pinParameters */
export interface PeripheralmanagerGpioGetValueParameters {
    /** ID of the pin. */
    pin: string;
    /** Indicates if subscribed to get notified when there is a change in value. Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: false */
    subscribe?: boolean;
}

/** ACG: peripheralmanager.gpio.operationDescriptionReads the value of the opened input pinParametersNameRequiredTypeDescriptionpinRequiredStringID of the pin.subscribeOptionalBooleanIndicates if subscribed to get notified when there is a change in value. Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: falseCall Returns */
export interface PeripheralmanagerGpioGetValueCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates if subscribed to get notifications. Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed?: boolean;
    /** Indicates the value. Possible values are: "low" or "high". */
    value?: string;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: peripheralmanager.gpio.operationDescriptionSets the value of the opened output pin to "low" or "high"Parameters */
export interface PeripheralmanagerGpioSetValueParameters {
    /** ID of the pin. */
    pin: string;
    /** Value of the output pin. Possible values are: "low" or "high". */
    value: string;
}

/** ACG: peripheralmanager.gpio.operationDescriptionSets the value of the opened output pin to "low" or "high"ParametersNameRequiredTypeDescriptionpinRequiredStringID of the pin.valueRequiredStringValue of the output pin. Possible values are: "low" or "high".Call Returns */
export interface PeripheralmanagerGpioSetValueCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: peripheralmanager.gpio.operationDescriptionCloses the opened GPIO pin, so that the pin is available for other applications to use.Parameters */
export interface PeripheralmanagerGpioCloseParameters {
    /** ID of the pin. */
    pin: string;
}

/** ACG: peripheralmanager.gpio.operationDescriptionCloses the opened GPIO pin, so that the pin is available for other applications to use.ParametersNameRequiredTypeDescriptionpinRequiredStringID of the pin.Call Returns */
export interface PeripheralmanagerGpioCloseCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}
