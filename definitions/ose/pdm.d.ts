/** luna://com.webos.service.pdm */
interface Pdm {
}

export interface PdmFormatParameters {
    driveName: string;
    fsType?: string;
    volumeLabel?: string;
}

export interface PdmFormatCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface PdmFsckParameters {
    driveName: string;
}

export interface PdmFsckCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface PdmGetAttachedNonStorageDeviceListParameters {
    subscribe: boolean;
    category?: string;
    groupSubDevices?: boolean;
}

export interface PdmNonStorageDeviceList {
    usbPortNum: number;
    serialNumber: string;
    isPowerOnConnect: boolean;
    deviceNum: number;
    deviceSubtype: string;
    vendorName: string;
    deviceType: string;
    productName: string;
    devSpeed: string;
}

export interface PdmSubDeviceList {
    productName: string;
    capabilities: string;
    version: string;
    devPath: string;
}

export interface PdmVideoDeviceList {
    productName: string;
    devSpeed: string;
    deviceType: string;
    vendorName: string;
    subDeviceList?: PdmSubDeviceList[];
    SUBSYSTEM?: string;
    KERNEL?: string;
}

export interface PdmAudioDeviceList {
    cardNumber: number;
    cardName: string;
    cardId: string;
    usbPortNum: number;
    devSpeed: string;
}

export interface PdmNetDeviceList {
    operstate: string;
    ifindex: string;
    linkmode: string;
    duplex: string;
    address: string;
    vendorName: string;
    productName: string;
    devSpeed: string;
}

export interface PdmGetAttachedNonStorageDeviceListCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    powerStatus: string;
    nonStorageDeviceList?: PdmNonStorageDeviceList;
    videoDeviceList?: PdmVideoDeviceList;
    audioDeviceList?: PdmAudioDeviceList;
    netDeviceList?: PdmNetDeviceList;
}

export interface PdmGetAttachedNonStorageDeviceListSubscription {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    powerStatus: string;
    nonStorageDeviceList?: PdmNonStorageDeviceList;
    videoDeviceList?: PdmVideoDeviceList;
    audioDeviceList?: PdmAudioDeviceList;
    netDeviceList?: PdmNetDeviceList;
}

export interface PdmGetAttachedDeviceStatusParameters {
    subscribe: boolean;
}

export interface PdmDriveStatusList {
    driveName: string;
    driveStatus: string;
}

export interface PdmDeviceStatusList {
    deviceNum: number;
    deviceStatus: string;
    driveStatusList?: PdmDriveStatusList;
}

export interface PdmGetAttachedDeviceStatusCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    deviceStatusList: PdmDeviceStatusList;
}

export interface PdmGetAttachedDeviceStatusSubscription {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    deviceStatusList: PdmDeviceStatusList;
}

export interface PdmGetAttachedStorageDeviceListParameters {
    subscribe: boolean;
}

export interface PdmStorageDriveList {
    isMounted: boolean;
    volumeLabel: string;
    uuid: string;
    driveName: string;
    driveSize: number;
    fsType: string;
    mountName: string;
}

export interface PdmStorageDeviceList {
    usbPortNum: number;
    rootPath: string;
    storageDriveList: PdmStorageDriveList;
    serialNumber: string;
    isPowerOnConnect: boolean;
    deviceNum: number;
    vendorName: string;
    storageType: string;
    deviceType: string;
    productName: string;
    devSpeed: string;
    errorReason: string;
}

export interface PdmGetAttachedStorageDeviceListCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    powerStatus: string;
    storageDeviceList: PdmStorageDeviceList;
}

export interface PdmGetAttachedStorageDeviceListSubscription {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    powerStatus: string;
    storageDeviceList: PdmStorageDeviceList;
}

export interface PdmGetSpaceInfoParameters {
    driveName: string;
    directCheck?: boolean;
}

export interface PdmSpaceInfo {
    totalSize: number;
    usedSize: number;
    freeSize: number;
    usedRate: number;
}

export interface PdmGetSpaceInfoCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    spaceInfo: PdmSpaceInfo;
}

export interface PdmIsWritableDriveParameters {
    driveName: string;
}

export interface PdmIsWritableDriveCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    isWritable: boolean;
}

export interface PdmSetVolumeLabelParameters {
    driveName: string;
    volumeLabel: string;
}

export interface PdmSetVolumeLabelCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface PdmUmountAllDriveCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}
