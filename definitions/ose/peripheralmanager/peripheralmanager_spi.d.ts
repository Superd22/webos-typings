/** ACG: peripheralmanager.queryDescriptionProvides the list of available SPI buses in the target hardware.ParametersNoneCall Returns */
export interface PeripheralmanagerSpiListCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** List of available SPI buses. */
    list?: string[];
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: peripheralmanager.spi.operationDescriptionOpens the SPI bus, if not already opened by other applications.Parameters */
export interface PeripheralmanagerSpiOpenParameters {
    /** ID of the SPI bus interface. */
    name: string;
}

/** ACG: peripheralmanager.spi.operationDescriptionOpens the SPI bus, if not already opened by other applications.ParametersNameRequiredTypeDescriptionnameRequiredStringID of the SPI bus interface.Call Returns */
export interface PeripheralmanagerSpiOpenCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: peripheralmanager.spi.operationDescriptionSets modes that correspond to the possible clocking configurations.Parameters */
export interface PeripheralmanagerSpiSetModeParameters {
    /** ID of the SPI interface. */
    name: string;
    /** Mode to be set for the SPI device (possible values: 0 to 3). */
    mode: number;
}

/** ACG: peripheralmanager.spi.operationDescriptionSets modes that correspond to the possible clocking configurations.ParametersNameRequiredTypeDescriptionnameRequiredStringID of the SPI interface.modeRequiredNumberMode to be set for the SPI device (possible values: 0 to 3).Call Returns */
export interface PeripheralmanagerSpiSetModeCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: peripheralmanager.spi.operationDescriptionWrites a byte of data to the SPI device connected to the bus.Parameters */
export interface PeripheralmanagerSpiWriteByteParameters {
    /** Data to be written. */
    data: number;
    /** ID of the SPI interface. */
    name: string;
}

/** ACG: peripheralmanager.spi.operationDescriptionWrites a byte of data to the SPI device connected to the bus.ParametersNameRequiredTypeDescriptiondataRequiredNumberData to be written.nameRequiredStringID of the SPI interface.Call Returns */
export interface PeripheralmanagerSpiWriteByteCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: peripheralmanager.spi.operationDescriptionWrites a chunk of data to SPI device.Parameters */
export interface PeripheralmanagerSpiWriteBufferParameters {
    /** ID of the SPI interface. */
    name: string;
    /** Data to be written to the SPI device. */
    data: any[];
    /** Size of the data. */
    size: number;
}

/** ACG: peripheralmanager.spi.operationDescriptionWrites a chunk of data to SPI device.ParametersNameRequiredTypeDescriptionnameRequiredStringID of the SPI interface.dataRequiredObject arrayData to be written to the SPI device.sizeRequiredNumberSize of the data.Call Returns */
export interface PeripheralmanagerSpiWriteBufferCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Size of the data written to the device. */
    size?: number;
}

/** ACG: peripheralmanager.spi.operationDescriptionOpens a connection for receiving/transmitting data to/from a particular slave device.Parameters */
export interface PeripheralmanagerSpiTransferParameters {
    /** ID of the SPI interface. */
    name: string;
    /** Data to be transferred to the SPI device. */
    data?: any[];
    /** Size of the data to be written/read, if data field is not present. */
    size: number;
}

/** ACG: peripheralmanager.spi.operationDescriptionOpens a connection for receiving/transmitting data to/from a particular slave device.ParametersNameRequiredTypeDescriptionnameRequiredStringID of the SPI interface.dataOptionalObject arrayData to be transferred to the SPI device.sizeRequiredNumberSize of the data to be written/read, if data field is not present.Call Returns */
export interface PeripheralmanagerSpiTransferCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Size of the data transferred to the SPI device. */
    tx_size?: number;
    /** Size of the data read from the SPI device. */
    rx_size?: number;
    /** Receiving of the data from slave. */
    rx_data?: any[];
}

/** ACG: peripheralmanager.spi.operationDescriptionSets the rate of data transfer (Hz)Parameters */
export interface PeripheralmanagerSpiSetFrequencyParameters {
    /** ID of the SPI interface. */
    name: string;
    /** Setting the frequency of the bus upto value that is allowed based on the bus max speed */
    frequency: number;
}

/** ACG: peripheralmanager.spi.operationDescriptionSets the rate of data transfer (Hz)ParametersNameRequiredTypeDescriptionnameRequiredStringID of the SPI interface.frequencyRequiredNumberSetting the frequency of the bus upto value that is allowed based on the bus max speedCall Returns */
export interface PeripheralmanagerSpiSetFrequencyCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: peripheralmanager.spi.operationDescriptionSets bit justification of the data transferred in the SPI bus i.e MSB-first or LSB-firstParameters */
export interface PeripheralmanagerSpiSetBitJustificationParameters {
    /** ID of the SPI interface. */
    name: string;
    /** Bit Justification for the data transfer (true = LSB-first, false* = MSB-first) */
    lsb_first: boolean;
}

/** ACG: peripheralmanager.spi.operationDescriptionSets bit justification of the data transferred in the SPI bus i.e MSB-first or LSB-firstParametersNameRequiredTypeDescriptionnameRequiredStringID of the SPI interface.lsb_firstRequiredBooleanBit Justification for the data transfer (true = LSB-first, false* = MSB-first)Call Returns */
export interface PeripheralmanagerSpiSetBitJustificationCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: peripheralmanager.spi.operationDescriptionConfigures the number of bits in each SPI transfer word.Parameters */
export interface PeripheralmanagerSpiSetBitsPerWordParameters {
    /** ID of the SPI interface. */
    name: string;
    /** Setting up bit PerWord. */
    nbits: number;
}

/** ACG: peripheralmanager.spi.operationDescriptionConfigures the number of bits in each SPI transfer word.ParametersNameRequiredTypeDescriptionnameRequiredStringID of the SPI interface.nbitsRequiredNumberSetting up bit PerWord.Call Returns */
export interface PeripheralmanagerSpiSetBitsPerWordCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: peripheralmanager.spi.operationDescriptionSets the delay after a transfer before the chip select status is changed and the next transfer is triggered.Parameters */
export interface PeripheralmanagerSpiSetDelayParameters {
    /** ID of the SPI interface. */
    name: string;
    /** Delay time in micro seconds. */
    delay_usecs: number;
}

/** ACG: peripheralmanager.spi.operationDescriptionSets the delay after a transfer before the chip select status is changed and the next transfer is triggered.ParametersNameRequiredTypeDescriptionnameRequiredStringID of the SPI interface.delay_usecsRequiredNumberDelay time in micro seconds.Call Returns */
export interface PeripheralmanagerSpiSetDelayCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The status of the operation. Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
}

/** ACG: peripheralmanager.spi.operationDescriptionCloses the opened SPI bus, for other applications to use.ParametersNoneCall Returns */
export interface PeripheralmanagerSpiCloseCallReturn {
    /** The reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. */
    returnValue: boolean;
}
