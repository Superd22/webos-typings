/** ACG: peripheralmanager.queryDescriptionProvides the list of available I2C buses.Parameters */
export interface PeripheralmanagerI2cListParameters {
    /** Provide a list of I2C buses with slaveAddress and more details. */
    verbose?: boolean;
}

/** ACG: peripheralmanager.queryDescriptionProvides the list of available I2C buses.ParametersNameRequiredTypeDescriptionverboseOptionalBooleanProvide a list of I2C buses with slaveAddress and more details.Call Returns */
export interface PeripheralmanagerI2cListCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** List of I2C buses.If verbose input parameter is set, also returns the slave address. */
    i2cList?: string[];
}

/** ACG: peripheralmanager.i2c.operationDescriptionOpens the device connected to I2C bus.Parameters */
export interface PeripheralmanagerI2cOpenParameters {
    /** Name of the I2C interface. */
    name: string;
    /** Address of the I2C device to be opened, which is connected to the I2C bus */
    address: number;
}

/** ACG: peripheralmanager.i2c.operationDescriptionOpens the device connected to I2C bus.ParametersNameRequiredTypeDescriptionnameRequiredStringName of the I2C interface.addressRequiredNumberAddress of the I2C device to be opened, which is connected to the I2C busCall Returns */
export interface PeripheralmanagerI2cOpenCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: peripheralmanager.i2c.operationDescriptionReads data from the I2C device.Parameters */
export interface PeripheralmanagerI2cReadParameters {
    /** Name of the I2C device. */
    name: string;
    /** Address of the device that is being used. */
    address: string;
}

/** ACG: peripheralmanager.i2c.operationDescriptionReads data from the I2C device.ParametersNameRequiredTypeDescriptionnameRequiredStringName of the I2C device.addressRequiredStringAddress of the device that is being used.Call Returns */
export interface PeripheralmanagerI2cReadCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Size of the data read. */
    size?: number;
    /** Data read from the device. */
    data?: any[];
}

/** ACG: peripheralmanager.i2c.operationDescriptionReads a byte from a given register of the I2C device.Parameters */
export interface PeripheralmanagerI2cReadRegByteParameters {
    /** Name of the I2C interface. */
    name: string;
    /** Address of the I2C device connected to the interface. */
    address: number;
    /** Register address. */
    reg: number;
}

/** ACG: peripheralmanager.i2c.operationDescriptionReads a byte from a given register of the I2C device.ParametersNameRequiredTypeDescriptionnameRequiredStringName of the I2C interface.addressRequiredNumberAddress of the I2C device connected to the interface.regRequiredNumberRegister address.Call Returns */
export interface PeripheralmanagerI2cReadRegByteCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Read value from the register. */
    data?: number;
}

/** ACG: peripheralmanager.i2c.operationDescriptionReads a word from the register of the i2c device.Parameters */
export interface PeripheralmanagerI2cReadRegWordParameters {
    /** Name of the I2C interface. */
    name: string;
    /** Address of the I2C device connected to the interface. */
    address: number;
    /** Register address. */
    reg: number;
}

/** ACG: peripheralmanager.i2c.operationDescriptionReads a word from the register of the i2c device.ParametersNameRequiredTypeDescriptionnameRequiredStringName of the I2C interface.addressRequiredNumberAddress of the I2C device connected to the interface.regRequiredNumberRegister address.Call Returns */
export interface PeripheralmanagerI2cReadRegWordCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Read value from the register. */
    data?: number;
}

/** ACG: peripheralmanager.i2c.operationDescriptionReads a value from the register buffer.Parameters */
export interface PeripheralmanagerI2cReadRegBufferParameters {
    /** Name of the I2C interface. */
    name: string;
    /** Address of the I2C device connected to the interface. */
    address: number;
    /** Register address. */
    reg: number;
}

/** ACG: peripheralmanager.i2c.operationDescriptionReads a value from the register buffer.ParametersNameRequiredTypeDescriptionnameRequiredStringName of the I2C interface.addressRequiredNumberAddress of the I2C device connected to the interface.regRequiredNumberRegister address.Call Returns */
export interface PeripheralmanagerI2cReadRegBufferCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Data read. */
    data?: any[];
}

/** ACG: peripheralmanager.i2c.operationDescriptionWrites the data to the opened I2C device.Parameters */
export interface PeripheralmanagerI2cWriteParameters {
    /** Name of the I2C interface. */
    name: string;
    /** Address of the I2C device connected to the interface. */
    address: number;
    /** Data to be written. */
    data: any[];
    /** Size of data to be written. */
    size?: number;
}

/** ACG: peripheralmanager.i2c.operationDescriptionWrites the data to the opened I2C device.ParametersNameRequiredTypeDescriptionnameRequiredStringName of the I2C interface.addressRequiredNumberAddress of the I2C device connected to the interface.dataRequiredObject arrayData to be written.sizeOptionalNumberSize of data to be written.Call Returns */
export interface PeripheralmanagerI2cWriteCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Bytes written. */
    size?: number;
}

/** ACG: peripheralmanager.i2c.operationDescriptionWrites a byte from a given register.Parameters */
export interface PeripheralmanagerI2cWriteRegByteParameters {
    /** Name of the I2C interface. */
    name: string;
    /** Address of the I2C device connected to the interface. */
    address: number;
    /** Register address. */
    reg: number;
    /** Data to write into register. */
    data: number;
}

/** ACG: peripheralmanager.i2c.operationDescriptionWrites a byte from a given register.ParametersNameRequiredTypeDescriptionnameRequiredStringName of the I2C interface.addressRequiredNumberAddress of the I2C device connected to the interface.regRequiredNumberRegister address.dataRequiredNumberData to write into register.Call Returns */
export interface PeripheralmanagerI2cWriteRegByteCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: number;
}

/** ACG: peripheralmanager.i2c.operationDescriptionWrites a word to the register of the I2C device.Parameters */
export interface PeripheralmanagerI2cWriteRegWordParameters {
    /** Name of the I2C interface. */
    name: string;
    /** Address of the I2C device connected to the interface. */
    address: number;
    /** Register address. */
    reg: number;
    /** Data to write into register. */
    data: number;
}

/** ACG: peripheralmanager.i2c.operationDescriptionWrites a word to the register of the I2C device.ParametersNameRequiredTypeDescriptionnameRequiredStringName of the I2C interface.addressRequiredNumberAddress of the I2C device connected to the interface.regRequiredNumberRegister address.dataRequiredNumberData to write into register.Call Returns */
export interface PeripheralmanagerI2cWriteRegWordCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: peripheralmanager.i2c.operationDescriptionWrites data to the register buffer of the connected I2C device.Parameters */
export interface PeripheralmanagerI2cWriteRegBufferParameters {
    /** Name of the I2C interface. */
    name: string;
    /** Address of the I2C device connected to the interface. */
    address: number;
    /** Register address. */
    reg: number;
    /** Data that needs to be written. */
    data: any[];
    /** Size of the data. */
    size: number;
}

/** ACG: peripheralmanager.i2c.operationDescriptionWrites data to the register buffer of the connected I2C device.ParametersNameRequiredTypeDescriptionnameRequiredStringName of the I2C interface.addressRequiredNumberAddress of the I2C device connected to the interface.regRequiredNumberRegister address.dataRequiredObject arrayData that needs to be written.sizeRequiredNumberSize of the data.Call Returns */
export interface PeripheralmanagerI2cWriteRegBufferCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Bytes to be written into register. */
    size: number;
}

/** ACG: NoneDescriptionReturns the file descriptor for the I2c if specified in the input.Parameters */
export interface PeripheralmanagerI2cGetPollingFdParameters {
    /** Name of the I2C pin. */
    name: string;
    /** Address of the I2C device connected to the interface. */
    address: number;
}

/** ACG: NoneDescriptionReturns the file descriptor for the I2c if specified in the input.ParametersNameRequiredTypeDescriptionnameRequiredStringName of the I2C pin.addressRequiredNumberAddress of the I2C device connected to the interface.Call Returns */
export interface PeripheralmanagerI2cGetPollingFdCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the status of operation.Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. */
    returnValue: boolean;
    /** File descriptor of the interface. */
    fd?: string;
}

/** ACG: peripheralmanager.i2c.operationDescriptionCloses the opened I2C device connected to the bus.Parameters */
export interface PeripheralmanagerI2cCloseParameters {
    /** Name of the I2C interface. */
    name: string;
    /** Address of the I2C device to be closed, which is connected to the I2C bus. */
    address: number;
}

/** ACG: peripheralmanager.i2c.operationDescriptionCloses the opened I2C device connected to the bus.ParametersNameRequiredTypeDescriptionnameRequiredStringName of the I2C interface.addressRequiredNumberAddress of the I2C device to be closed, which is connected to the I2C bus.Call Returns */
export interface PeripheralmanagerI2cCloseCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}
