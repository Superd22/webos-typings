/** luna://com.webos.service.pdm */
interface Pdm {
}

/** ACG: physicaldevice.managementDescriptionFormats the connected drive.Parameters */
export interface PdmFormatParameters {
    /** Indicates the information that can identify the drive.Example: sda1 */
    driveName: string;
    /** Indicates the file system type.Possible values are:fatntfsDefault: fat */
    fsType?: string;
    /** Indicates the volume label for the drive.Default: volumeLabel not set */
    volumeLabel?: string;
}

/** ACG: physicaldevice.managementDescriptionFormats the connected drive.ParametersNameRequiredTypeDescriptiondriveName RequiredstringIndicates the information that can identify the drive.Example: sda1fsType OptionalstringIndicates the file system type.Possible values are:fatntfsDefault: fatvolumeLabelOptionalstringIndicates the volume label for the drive.Default: volumeLabel not setCall Returns */
export interface PdmFormatCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
}

/** ACG: physicaldevice.managementDescriptionChecks the file system by performing fsck (File System Check) of the corresponding connected drive.Note: On connecting a USB device with a large number of files, the PDM service prompts for “Check & Repair” and “Open Now”. The fsck() API will do the file system checking when “Check & Repair” is selected.Parameters */
export interface PdmFsckParameters {
    /** Indicates the information that can identify the drive.Example: sda1 */
    driveName: string;
}

/** ACG: physicaldevice.managementDescriptionChecks the file system by performing fsck (File System Check) of the corresponding connected drive.Note: On connecting a USB device with a large number of files, the PDM service prompts for “Check & Repair” and “Open Now”. The fsck() API will do the file system checking when “Check & Repair” is selected.ParametersNameRequiredTypeDescriptiondriveName RequiredstringIndicates the information that can identify the drive.Example: sda1Call Returns */
export interface PdmFsckCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
}

/** ACG: physicaldevice.queryDescriptionGets the status information of connected non-storage device(s).Parameters */
export interface PdmGetAttachedNonStorageDeviceListParameters {
    /** Subscribe to get notified when a device is connected and the list of non-storage device changes. Possible values are:true - Subscribe for changes.false - Not subscribed. */
    subscribe: boolean;
    /** Category of non-storage device. Possible values are:AudioVideoNet */
    category?: string;
    /** Indicates grouping of sub devices. Possible values are:true - Groups sub-devices into subDeviceList which is part of videoDeviceList.false (default) - Provides videoDeviceList without subDeviceList (backward compatible). */
    groupSubDevices?: boolean;
}

/** List of information about the non-storage devices that are currently connected. */
export interface PdmNonStorageDeviceList {
    /** Port number to which the device is connected */
    usbPortNum: number;
    /** Serial number of the device product */
    serialNumber: string;
    /** Indicates whether the device was connected during power on. Possible values are:true - Connected during power onfalse - Connected after powering on */
    isPowerOnConnect: boolean;
    /** Number assigned to the connected device */
    deviceNum: number;
    /** Sub-type of the device connected.For example: If deviceType is "usb", then deviceSubtype can be "usbhid" etc. */
    deviceSubtype: string;
    /** Name of the device vendor */
    vendorName: string;
    /** Type of the device */
    deviceType: string;
    /** Name of the device product */
    productName: string;
    /** Speed of the device. Possible values are:LOWHIGHSUPER */
    devSpeed: string;
}

/** Contains info of sub-devicesNote: Sub-devices are multiple camera devices inside single camera. */
export interface PdmSubDeviceList {
    /** Name of the product */
    productName: string;
    /** Device capability attribute */
    capabilities: string;
    /** Version of the product */
    version: string;
    /** Path of the device */
    devPath: string;
}

/** List of video device(s) connected. */
export interface PdmVideoDeviceList {
    /** Name of the product */
    productName: string;
    /** Speed of the device */
    devSpeed: string;
    /** Type of the USB device */
    deviceType: string;
    /** Name of the vendor */
    vendorName: string;
    /** Contains info of sub-devicesNote: Sub-devices are multiple camera devices inside single camera. */
    subDeviceList?: PdmSubDeviceList[];
    /** Indicates SUBSYSTEM of device. */
    SUBSYSTEM?: string;
    /** Indicates KERNEL of the device. */
    KERNEL?: string;
}

/** List of audio device(s) connected. */
export interface PdmAudioDeviceList {
    /** Card number of the audio device */
    cardNumber: number;
    /** Name of the audio device card */
    cardName: string;
    /** Type of the audio device card */
    cardId: string;
    /** Port number where the sound device is connected */
    usbPortNum: number;
    /** Speed of the sound device. Possible values are:LOWHIGHSUPER */
    devSpeed: string;
}

/** List of Communication Device Class (CDC) device(s) connected. */
export interface PdmNetDeviceList {
    /** State of the device operation */
    operstate: string;
    /** Network interface index */
    ifindex: string;
    /** Tells whether specified interface is managed and configured by systemd network manager. Possible values are:0 - LINK_AUTO1 - LINK_MANUAL2 - LINK_MODE_UNKNOWN */
    linkmode: string;
    /** Bandwidth of the device. Possible values are:uni-directionalbi-directional */
    duplex: string;
    /** Ethernet address of the device connected */
    address: string;
    /** Name of the vendor */
    vendorName: string;
    /** Name of the product */
    productName: string;
    /** Speed of the device. Possible values are:LOWHIGHSUPER */
    devSpeed: string;
}

/** ACG: physicaldevice.queryDescriptionGets the status information of connected non-storage device(s).ParametersNameRequiredTypeDescriptionsubscribeRequiredbooleanSubscribe to get notified when a device is connected and the list of non-storage device changes. Possible values are:true - Subscribe for changes.false - Not subscribed.categoryOptionalStringCategory of non-storage device. Possible values are:AudioVideoNetgroupSubDevicesOptionalBooleanIndicates grouping of sub devices. Possible values are:true - Groups sub-devices into subDeviceList which is part of videoDeviceList.false (default) - Provides videoDeviceList without subDeviceList (backward compatible).Call Returns */
export interface PdmGetAttachedNonStorageDeviceListCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
    /** Power-on status of the device.Note: This value always defaults to "normal". */
    powerStatus: string;
    /** An array containing the information about the non-storage device that is currently connected. */
    nonStorageDeviceList?: PdmNonStorageDeviceList;
    /** An array of video device lists connected.Note: Returned only when "category" is "Video". */
    videoDeviceList?: PdmVideoDeviceList;
    /** An array of audio device list connected.Note: Returned only when "category" is "Audio". */
    audioDeviceList?: PdmAudioDeviceList;
    /** An array of net device list connected.Note: Returned only when "category" is "Net". */
    netDeviceList?: PdmNetDeviceList;
}

/** ACG: physicaldevice.queryDescriptionGets the status information of connected non-storage device(s).ParametersNameRequiredTypeDescriptionsubscribeRequiredbooleanSubscribe to get notified when a device is connected and the list of non-storage device changes. Possible values are:true - Subscribe for changes.false - Not subscribed.categoryOptionalStringCategory of non-storage device. Possible values are:AudioVideoNetgroupSubDevicesOptionalBooleanIndicates grouping of sub devices. Possible values are:true - Groups sub-devices into subDeviceList which is part of videoDeviceList.false (default) - Provides videoDeviceList without subDeviceList (backward compatible).Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredbooleanIndicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalstringIndicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details.powerStatusRequiredStringPower-on status of the device.Note: This value always defaults to "normal".nonStorageDeviceListOptionalObject: nonStorageDeviceListAn array containing the information about the non-storage device that is currently connected.videoDeviceListOptionalObject: videoDeviceListAn array of video device lists connected.Note: Returned only when "category" is "Video".audioDeviceListOptionalObject: audioDeviceListAn array of audio device list connected.Note: Returned only when "category" is "Audio".netDeviceListOptionalObject: netDeviceListAn array of net device list connected.Note: Returned only when "category" is "Net".Subscription Returns */
export interface PdmGetAttachedNonStorageDeviceListSubscription {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
    /** Power-on status of the device.Note: This value always defaults to "normal". */
    powerStatus: string;
    /** An array containing the information about the non-storage device that is currently connected. */
    nonStorageDeviceList?: PdmNonStorageDeviceList;
    /** An array of video devices connected.Note: Returned only when "category" is "Video". */
    videoDeviceList?: PdmVideoDeviceList;
    /** An array of audio devices connected.Note: Returned only when "category" is "Audio". */
    audioDeviceList?: PdmAudioDeviceList;
    /** An array of net devices connected.Note: Returned only when "category" is "Net". */
    netDeviceList?: PdmNetDeviceList;
}

/** ACG: physicaldevice.queryDescriptionGets the status information of connected device(s).Parameters */
export interface PdmGetAttachedDeviceStatusParameters {
    /** Subscribe to get notified when the device status information changes. Possible values are:true - Subscribe for changes.false - Not subscribed. */
    subscribe: boolean;
}

/** List of the drives in the connected storage devices and their statuses. */
export interface PdmDriveStatusList {
    /** Name of the drive */
    driveName: string;
    /** Mount status of the drive */
    driveStatus: string;
}

/** List of the storage and non-storage devices connected and their statuses. */
export interface PdmDeviceStatusList {
    /** Device number */
    deviceNum: number;
    /** Status of the device */
    deviceStatus: string;
    /** List of statuses of the drives in the device */
    driveStatusList?: PdmDriveStatusList;
}

/** ACG: physicaldevice.queryDescriptionGets the status information of connected device(s).ParametersNameRequiredTypeDescriptionsubscribeRequiredbooleanSubscribe to get notified when the device status information changes. Possible values are:true - Subscribe for changes.false - Not subscribed.Call Returns */
export interface PdmGetAttachedDeviceStatusCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
    /** An array containing the status information of the device. */
    deviceStatusList: PdmDeviceStatusList;
}

/** ACG: physicaldevice.queryDescriptionGets the status information of connected device(s).ParametersNameRequiredTypeDescriptionsubscribeRequiredbooleanSubscribe to get notified when the device status information changes. Possible values are:true - Subscribe for changes.false - Not subscribed.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredbooleanIndicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalstringIndicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details.deviceStatusList RequiredObject: deviceStatusListAn array containing the status information of the device.Subscription Returns */
export interface PdmGetAttachedDeviceStatusSubscription {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
    /** An array containing the status information of the device. */
    deviceStatusList: PdmDeviceStatusList;
}

/** ACG: physicaldevice.queryDescriptionGets status information of connected storage device(s).Parameters */
export interface PdmGetAttachedStorageDeviceListParameters {
    /** Indicates if subscribed to get the notifications.Possible values are:true: Subscribe for notifications.false: Not subscribed. */
    subscribe: boolean;
}

/** List of the drives in storage devices connected. */
export interface PdmStorageDriveList {
    /** Indicates whether the device is mounted or not. Possible values are:true - Device is mountedfalse - Device is not mounted */
    isMounted: boolean;
    /** Label set for the drive in the device */
    volumeLabel: string;
    /** Unique SCSI device ID */
    uuid: string;
    /** Name of the drive where mounted */
    driveName: string;
    /** Size of the drive */
    driveSize: number;
    /** Type of the file system in the drive */
    fsType: string;
    /** Absolute path of the drive in the device where mounted */
    mountName: string;
}

/** List of information about the storage devices that are currently connected. */
export interface PdmStorageDeviceList {
    /** Port number to which the device is connected. */
    usbPortNum: number;
    /** Root directory path of the device. */
    rootPath: string;
    /** List of storage drives in the connected storage device. */
    storageDriveList: PdmStorageDriveList;
    /** Serial number of the device. */
    serialNumber: string;
    /** Indicates whether the device was connected during power on. Possible values are:true - Connected during power on.false - Connected after powering on. */
    isPowerOnConnect: boolean;
    /** Number assigned to the device. */
    deviceNum: number;
    /** Name of the vendor. */
    vendorName: string;
    /** Type of the storage device. */
    storageType: string;
    /** Type of the USB device. */
    deviceType: string;
    /** Name of the product. */
    productName: string;
    /** Speed of the device. */
    devSpeed: string;
    /** Describes the status of device mounting. Possible values are:NOTHING - Mount successfulNOMOUNTED - Mount unsuccessfulUNSUPPORT_FILESYSTEM - File system of the device is unsupportedEJECTED - Device ejectedNEED_FSCK -Device needs file system checking */
    errorReason: string;
}

/** ACG: physicaldevice.queryDescriptionGets status information of connected storage device(s).ParametersNameRequiredTypeDescriptionsubscribeRequiredbooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribe for notifications.false: Not subscribed.Call Returns */
export interface PdmGetAttachedStorageDeviceListCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
    /** Indicates the power-on status of the device.Note: This value always defaults to "normal". */
    powerStatus: string;
    /** Indicates an array containing information about the currently connected storage device(s). */
    storageDeviceList: PdmStorageDeviceList;
}

/** ACG: physicaldevice.queryDescriptionGets status information of connected storage device(s).ParametersNameRequiredTypeDescriptionsubscribeRequiredbooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribe for notifications.false: Not subscribed.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredbooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalstringIndicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details.powerStatusRequiredStringIndicates the power-on status of the device.Note: This value always defaults to "normal".storageDeviceListRequiredObject: storageDeviceListIndicates an array containing information about the currently connected storage device(s).Subscription Returns */
export interface PdmGetAttachedStorageDeviceListSubscription {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
    /** Power-on status of the device.Note: This value always defaults to "normal". */
    powerStatus: string;
    /** An array containing information about the currently connected storage device(s). */
    storageDeviceList: PdmStorageDeviceList;
}

/** ACG: physicaldevice.queryDescriptionGets the space information of the connected drive.Note: The drive must be mounted.Parameters */
export interface PdmGetSpaceInfoParameters {
    /** Information that can identify the drive (e.g. sda1) */
    driveName: string;
    /** Indicates if PDM needs to newly measure the drive space information at the time of API call. Possible values are:true - Newly measures the informationfalse - Returns periodically measured information */
    directCheck?: boolean;
}

/** Information about the drive space. */
export interface PdmSpaceInfo {
    /** Total Drive Size (KB) */
    totalSize: number;
    /** Drive size currently in use (KB) */
    usedSize: number;
    /** Currently Available Drive Size (KB) */
    freeSize: number;
    /** Current Drive Utilization (%) */
    usedRate: number;
}

/** ACG: physicaldevice.queryDescriptionGets the space information of the connected drive.Note: The drive must be mounted.ParametersNameRequiredTypeDescriptiondriveName RequiredstringInformation that can identify the drive (e.g. sda1)directCheckOptionalbooleanIndicates if PDM needs to newly measure the drive space information at the time of API call. Possible values are:true - Newly measures the informationfalse - Returns periodically measured informationCall Returns */
export interface PdmGetSpaceInfoCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
    /** Information about the drive space. */
    spaceInfo: PdmSpaceInfo;
}

/** ACG: physicaldevice.queryDescriptionChecks the file system attribute of the drive and returns whether it is writable. Parameters */
export interface PdmIsWritableDriveParameters {
    /** Information that can identify the drive (e.g. sda1) */
    driveName: string;
}

/** ACG: physicaldevice.queryDescriptionChecks the file system attribute of the drive and returns whether it is writable. ParametersNameRequiredTypeDescriptiondriveNameRequiredStringInformation that can identify the drive (e.g. sda1)Call Returns */
export interface PdmIsWritableDriveCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
    /** Indicates if data can be written on the drive. Possible values are: true - Writable drivefalse - Cannot be written */
    isWritable: boolean;
}

/** ACG: physicaldevice.managementDescriptionSets the volume label of the drive. It is supported only when file system type is FAT.Parameters */
export interface PdmSetVolumeLabelParameters {
    /** Information that can identify the drive (e.g. sda1) */
    driveName: string;
    /** Volume label for the drive. */
    volumeLabel: string;
}

/** ACG: physicaldevice.managementDescriptionSets the volume label of the drive. It is supported only when file system type is FAT.ParametersNameRequiredTypeDescriptiondriveName RequiredstringInformation that can identify the drive (e.g. sda1)volumeLabelRequiredstringVolume label for the drive.Call Returns */
export interface PdmSetVolumeLabelCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
}

/** ACG: physicaldevice.managementDescriptionUnmounts all drives. ParametersNoneCall Returns */
export interface PdmUmountAllDriveCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
}
