/** luna://com.webos.service.storageaccess */
interface Storageaccess {
}

export interface StorageaccessDeviceEjectParameters {
    storageType: string;
    driveId: string;
}

export interface StorageaccessDeviceEjectCallReturn {
    returnValue: boolean;
    errorCode?: string;
    errorText?: string;
}

export interface StorageaccessDeviceGetPropertiesParameters {
    storageType: string;
    driveId: string;
    path?: string;
}

export interface StorageaccessDeviceGetPropertiesCallReturn {
    returnValue: boolean;
    storageType?: string;
    writable?: boolean;
    deletable?: boolean;
    totalSpace?: number;
    freeSpace?: number;
    attributes?: any[];
    extAttributes?: any[];
    errorCode?: number;
    errorText?: string;
}

export interface StorageaccessOperation {
    type: string;
    payload: any;
}

export interface StorageaccessDeviceHandleExtraCommandParameters {
    storageType: string;
    driveId?: string;
    operation: StorageaccessOperation;
}

export interface StorageaccessDeviceHandleExtraCommandCallReturn {
    returnValue: boolean;
    responsePayload?: any[];
    errorCode?: number;
    errorText?: string;
}

export interface StorageaccessDeviceListParameters {
    storageType: string;
    driveId: string;
    path: string;
    offset: number;
    limit: number;
}

export interface StorageaccessFiles {
    name: string;
    type: string;
    path: string;
    size: string;
    mimeType?: string;
}

export interface StorageaccessDeviceListCallReturn {
    returnValue: boolean;
    files?: StorageaccessFiles[];
    totalCount?: number;
    fullPath?: string;
    errorCode?: number;
    errorText?: string;
}

export interface StorageaccessDeviceMoveParameters {
    srcStorageType: string;
    srcDriveId: string;
    destStorageType: string;
    destDriveId: string;
    srcPath: string;
    destPath: string;
    overwrite?: boolean;
    subscribe?: boolean;
}

export interface StorageaccessDeviceMoveCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface StorageaccessDeviceMoveSubscription {
    returnValue: boolean;
    progress?: number;
}

export interface StorageaccessDeviceRemoveParameters {
    storageType: string;
    driveId: string;
    path: string;
}

export interface StorageaccessDeviceRemoveCallReturn {
    returnValue: boolean;
    errorCode?: string;
    errorText?: string;
}

export interface StorageaccessDeviceRenameParameters {
    storageType: string;
    driveId: string;
    path: string;
    newName: string;
}

export interface StorageaccessDeviceRenameCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface StorageaccessListStorageProvidersParameters {
    subscribe?: boolean;
}

export interface StorageaccessStorageProviders {
    driveId: string;
    driveName: string;
    path: string;
    fileSystem?: string;
}

export interface StorageaccessListStorageProvidersCallReturn {
    returnValue: boolean;
    subscribe?: boolean;
    storageProviders?: StorageaccessStorageProviders[];
    errorCode?: number;
    errorText?: string;
}
