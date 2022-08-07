/** luna://com.webos.service.storageaccess */
interface Storageaccess {
}

/** ACG: storageaccess.operationDescriptionEjects the storage device. In case of "cloud" storage type, it acts as a logout operation.Note: This operation is not applicable for "internal" storage type.Parameters */
export interface StorageaccessDeviceEjectParameters {
    /** Indicates the storage provider. Possible values are:cloudusbinternalnetworkNote: This method is not supported for UPnPmediaserver. */
    storageType: string;
    /** Indicates the drive ID.Note: The drive ID can be found by using the listStorageProviders method. */
    driveId: string;
}

/** ACG: storageaccess.operationDescriptionEjects the storage device. In case of "cloud" storage type, it acts as a logout operation.Note: This operation is not applicable for "internal" storage type.ParametersNameRequiredTypeDescriptionstorageTypeRequiredStringIndicates the storage provider. Possible values are:cloudusbinternalnetworkNote: This method is not supported for UPnPmediaserver.driveIdRequiredStringIndicates the drive ID.Note: The drive ID can be found by using the listStorageProviders method.Call Returns */
export interface StorageaccessDeviceEjectCallReturn {
    /** Indicates the status of the operation.true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the error code for the failed operation. */
    errorCode?: string;
    /** Indicates the reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
}

/** ACG: storageaccess.operationDescriptionGets properties of the given storage provider or the specified file or directory.Parameters */
export interface StorageaccessDeviceGetPropertiesParameters {
    /** Indicates the storage provider. Possible values are:cloudusbinternalnetwork */
    storageType: string;
    /** Indicates the drive ID.Note: The drive ID can be found by using the listStorageProviders method. */
    driveId: string;
    /** Indicates the path of the file or directory. */
    path?: string;
}

/** ACG: storageaccess.operationDescriptionGets properties of the given storage provider or the specified file or directory.ParametersNameRequiredTypeDescriptionstorageTypeRequiredStringIndicates the storage provider. Possible values are:cloudusbinternalnetworkdriveIdRequiredStringIndicates the drive ID.Note: The drive ID can be found by using the listStorageProviders method.pathOptionalStringIndicates the path of the file or directory.Call Returns */
export interface StorageaccessDeviceGetPropertiesCallReturn {
    /** Indicates the status of the operation.true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the type of storage provider. */
    storageType?: string;
    /** True if the device is writable. */
    writable?: boolean;
    /** True if the device is deletable. */
    deletable?: boolean;
    /** Total storage space */
    totalSpace?: number;
    /** Available free space */
    freeSpace?: number;
    /** Array of key value pair.Example: {"noatime": true}Note: These is just an example format. It may vary depending on the file system. */
    attributes?: any[];
    /** Array of key value pair.Example: {"user.comment": "saf comment"}Note: These is just an example format. It may vary depending on the file system. */
    extAttributes?: any[];
    /** Indicates the error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
}

/** Provides details of the operation. */
export interface StorageaccessOperation {
    /** Indicates the type of operation.Possible values are:loginauthenticatetokenmountSambaServerdiscoverUPnPMediaServer */
    type: string;
    /** Details of the operation. The payload depends on the type specified.For types:login, authenticate, and token - Check the related example of the "handleExtraCommand" command.mountSambaServer - Check the Payload object below.discoverUPnPMediaServer - No payload required. */
    payload: any;
}

/** ACG: storageaccess.operationDescriptionHandles addtional operation related to various providers.Parameters */
export interface StorageaccessDeviceHandleExtraCommandParameters {
    /** Indicates the source storage provider. Possible values are:cloudusbinternalnetwork */
    storageType: string;
    /** Indicates the drive ID.Note: The drive ID can be found by using the listStorageProviders method. */
    driveId?: string;
    /** Object consisting of details of the operation. */
    operation: StorageaccessOperation;
}

/** ACG: storageaccess.operationDescriptionHandles addtional operation related to various providers.ParametersNameRequiredTypeDescriptionstorageTypeRequiredStringIndicates the source storage provider. Possible values are:cloudusbinternalnetworkdriveIdOptionalStringIndicates the drive ID.Note: The drive ID can be found by using the listStorageProviders method.operationRequiredObject: operationObject consisting of details of the operation.Call Returns */
export interface StorageaccessDeviceHandleExtraCommandCallReturn {
    /** Indicates the status of the operation.true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Response from the storage provider. */
    responsePayload?: any[];
    /** Indicates the error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
}

/** ACG: storageaccess.operationDescriptionLists contents of the specified directory.Parameters */
export interface StorageaccessDeviceListParameters {
    /** Indicates the source storage provider. Possible values are:cloudusbinternalnetwork */
    storageType: string;
    /** Indicates the drive ID.Note: The drive ID can be found by using the listStorageProviders method. */
    driveId: string;
    /** Indicates the path of the directory. */
    path: string;
    /** Indicates the index/offset from where to list the files or directories. */
    offset: number;
    /** Indicates the count of entries to be listed (1 - 100). */
    limit: number;
}

/** Provides information of the file or directory. */
export interface StorageaccessFiles {
    /** Indicates the file name. */
    name: string;
    /** Indicates the type of file.Possible values are:directoryregularlinkfileunknownand so on */
    type: string;
    /** Inidcates the path of the file or directory. */
    path: string;
    /** Indicates the size in bytes. */
    size: string;
    /** Indicates the mime type of the file. */
    mimeType?: string;
}

/** ACG: storageaccess.operationDescriptionLists contents of the specified directory.ParametersNameRequiredTypeDescriptionstorageTypeRequiredStringIndicates the source storage provider. Possible values are:cloudusbinternalnetworkdriveIdRequiredStringIndicates the drive ID.Note: The drive ID can be found by using the listStorageProviders method.pathRequiredStringIndicates the path of the directory.offsetRequiredNumberIndicates the index/offset from where to list the files or directories.limitRequiredNumberIndicates the count of entries to be listed (1 - 100).Call Returns */
export interface StorageaccessDeviceListCallReturn {
    /** Indicates the status of the operation.true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Provides information of the files or directories. */
    files?: StorageaccessFiles[];
    /** Total number of files or directories in the given path. */
    totalCount?: number;
    /** Full path of this file or directory. */
    fullPath?: string;
    /** Indicates the error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
}

/** ACG: storageaccess.operationDescriptionMoves a file or directory from the source location to the destination.Parameters */
export interface StorageaccessDeviceMoveParameters {
    /** Indicates the source storage provider. Possible values are:cloudusbinternalnetworkNote: This method is not supported for UPnPmediaserver. */
    srcStorageType: string;
    /** Indicates the source drive ID.Note: The drive ID can be found by using the listStorageProviders method. */
    srcDriveId: string;
    /** Indicates the destination storage provider. Possible values are:cloudusbinternalnetworkNote: This method is not supported for UPnPmediaserver. */
    destStorageType: string;
    /** Indicates the destination drive ID.Note: The drive ID can be found by using the listStorageProviders method. */
    destDriveId: string;
    /** Indicates the path of the source file or directory. */
    srcPath: string;
    /** Indicates the path of the destination directory. */
    destPath: string;
    /** Indicates if destination file must be overwritten, if it already exists.Possible values are:true: Overwrite existing copy.false: Do not overwrite exisitng copy. */
    overwrite?: boolean;
    /** Subscribe to get notified on the progress of the copy operation.Possible values are:true - Subscribed for notificationsfalse - Not subscribed */
    subscribe?: boolean;
}

/** ACG: storageaccess.operationDescriptionMoves a file or directory from the source location to the destination.ParametersNameRequiredTypeDescriptionsrcStorageTypeRequiredStringIndicates the source storage provider. Possible values are:cloudusbinternalnetworkNote: This method is not supported for UPnPmediaserver.srcDriveIdRequiredStringIndicates the source drive ID.Note: The drive ID can be found by using the listStorageProviders method.destStorageTypeRequiredStringIndicates the destination storage provider. Possible values are:cloudusbinternalnetworkNote: This method is not supported for UPnPmediaserver.destDriveIdRequiredStringIndicates the destination drive ID.Note: The drive ID can be found by using the listStorageProviders method.srcPathRequiredStringIndicates the path of the source file or directory.destPathRequiredStringIndicates the path of the destination directory.overwriteOptionalBooleanIndicates if destination file must be overwritten, if it already exists.Possible values are:true: Overwrite existing copy.false: Do not overwrite exisitng copy.subscribeOptionalBooleanSubscribe to get notified on the progress of the copy operation.Possible values are:true - Subscribed for notificationsfalse - Not subscribedCall Returns */
export interface StorageaccessDeviceMoveCallReturn {
    /** Indicates the status of the operation.true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the error code for the failed operation */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
}

/** ACG: storageaccess.operationDescriptionMoves a file or directory from the source location to the destination.ParametersNameRequiredTypeDescriptionsrcStorageTypeRequiredStringIndicates the source storage provider. Possible values are:cloudusbinternalnetworkNote: This method is not supported for UPnPmediaserver.srcDriveIdRequiredStringIndicates the source drive ID.Note: The drive ID can be found by using the listStorageProviders method.destStorageTypeRequiredStringIndicates the destination storage provider. Possible values are:cloudusbinternalnetworkNote: This method is not supported for UPnPmediaserver.destDriveIdRequiredStringIndicates the destination drive ID.Note: The drive ID can be found by using the listStorageProviders method.srcPathRequiredStringIndicates the path of the source file or directory.destPathRequiredStringIndicates the path of the destination directory.overwriteOptionalBooleanIndicates if destination file must be overwritten, if it already exists.Possible values are:true: Overwrite existing copy.false: Do not overwrite exisitng copy.subscribeOptionalBooleanSubscribe to get notified on the progress of the copy operation.Possible values are:true - Subscribed for notificationsfalse - Not subscribedCall ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of the operation.true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.errorCodeOptionalNumberIndicates the error code for the failed operationerrorTextOptionalStringIndicates the reason for the failure of the operation. See the API Error Codes Reference section for details.Subscription Returns */
export interface StorageaccessDeviceMoveSubscription {
    /** Indicates the status of the operation. */
    returnValue: boolean;
    /** Indicates the progress of the copy operation in percentage. */
    progress?: number;
}

/** ACG: storageaccess.operationDescriptionDeletes the specified file or directory.Parameters */
export interface StorageaccessDeviceRemoveParameters {
    /** Indicates the storage provider. Possible values are:cloudusbinternalnetworkNote: This method is not supported for UPnPmediaserver. */
    storageType: string;
    /** Indicates the drive ID.Note: The drive ID can be found by using the listStorageProviders method. */
    driveId: string;
    /** Inddicates the path of the file or directory. */
    path: string;
}

/** ACG: storageaccess.operationDescriptionDeletes the specified file or directory.ParametersNameRequiredTypeDescriptionstorageTypeRequiredStringIndicates the storage provider. Possible values are:cloudusbinternalnetworkNote: This method is not supported for UPnPmediaserver.driveIdRequiredStringIndicates the drive ID.Note: The drive ID can be found by using the listStorageProviders method.pathRequiredStringInddicates the path of the file or directory.Call Returns */
export interface StorageaccessDeviceRemoveCallReturn {
    /** Indicates the status of the operation.true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the error code for the failed operation. */
    errorCode?: string;
    /** Indicates the reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
}

/** ACG: storageaccess.operationDescriptionRenames the specified file or directory.Parameters */
export interface StorageaccessDeviceRenameParameters {
    /** Indicates the storage provider. Possible values are:cloudusbinternalnetworkNote: This method is not supported for UPnPmediaserver. */
    storageType: string;
    /** Indicates the drive ID.Note: The drive ID can be found by using the listStorageProviders method. */
    driveId: string;
    /** Indicates the path of the file or directory. */
    path: string;
    /** Indicates the new name. */
    newName: string;
}

/** ACG: storageaccess.operationDescriptionRenames the specified file or directory.ParametersNameRequiredTypeDescriptionstorageTypeRequiredStringIndicates the storage provider. Possible values are:cloudusbinternalnetworkNote: This method is not supported for UPnPmediaserver.driveIdRequiredStringIndicates the drive ID.Note: The drive ID can be found by using the listStorageProviders method.pathRequiredStringIndicates the path of the file or directory.newNameRequiredStringIndicates the new name.Call Returns */
export interface StorageaccessDeviceRenameCallReturn {
    /** Indicates the status of the operation.true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the error code for the failed operation */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
}

/** ACG: storageaccess.operationDescriptionProvides a list of storages providers and the corresponding drive information.Parameters */
export interface StorageaccessListStorageProvidersParameters {
    /** Subscribe to get notifications.Possible values are:true - Subscribed for notificationsfalse - Not subscribed */
    subscribe?: boolean;
}

/** Provides information about the storage provider. */
export interface StorageaccessStorageProviders {
    /** Indicates the drive ID.Note: For internal storage the ID is INTERNAL_STORAGE. */
    driveId: string;
    /** Indicates the drive name.Note: For internal storage the name is INTERNAL and for cloud currently only GDRIVE (Google Drive) is supported. */
    driveName: string;
    /** Indicates the path of the drive. */
    path: string;
    /** Indicates the file system type (only in case of USB). */
    fileSystem?: string;
}

/** ACG: storageaccess.operationDescriptionProvides a list of storages providers and the corresponding drive information.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanSubscribe to get notifications.Possible values are:true - Subscribed for notificationsfalse - Not subscribedCall Returns */
export interface StorageaccessListStorageProvidersCallReturn {
    /** Indicates the status of the operation.true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications. */
    subscribe?: boolean;
    /** Provides information of the storage providers. */
    storageProviders?: StorageaccessStorageProviders[];
    /** Indicates the error code for the failed operation */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
}
