/** luna://com.webos.service.swupdater */
interface Swupdater {
}

/** ACG: softwareupdate.operationDescriptionNotifies when there is a change in the state of the software updater service. It adds the caller to the subscriber list.Parameters */
export interface SwupdaterGetStatusParameters {
    /** Subscribe to get notified when the state changes. Possible values are:true - Subscribe for changes.false - Not subscribed. */
    subscribe: boolean;
}

/** Contains filename and size of artifacts of the software module. */
export interface SwupdaterArtifact {
    /** Downloaded size. */
    size: number;
    /** File size. */
    total: number;
    /** File name. */
    filename: string;
}

/** Contains the type, name, version, and artifacts of the software module. */
export interface SwupdaterSoftwareModule {
    /** Type of software module. Possible values are:osapplication */
    type: string;
    /** Name of software module. */
    name: string;
    /** Version of software module. */
    version?: string;
    /** List of artifacts contained in the software module. */
    artifacts: SwupdaterArtifact[];
}

/** ACG: softwareupdate.operationDescriptionNotifies when there is a change in the state of the software updater service. It adds the caller to the subscriber list.ParametersNameRequiredTypeDescriptionsubscribeRequiredBooleanSubscribe to get notified when the state changes. Possible values are:true - Subscribe for changes.false - Not subscribed.Call Returns */
export interface SwupdaterGetStatusCallReturn {
    /** Indicates if subscribed to get notifications. Possible values are:true - Subscribed for changes.false - Not subscribed. */
    subscribed: boolean;
    /** State of the software updater service. Possible values are:idle - Service is in an idle statedownloadReady - Download availabledownloadStarted - Download starteddownloadPaused - Download pausedinstallReady - Ready for installationinstallStarted - Installation startedinstallCompleted - Installation completedfailed - Either download or installation failedNote: When the state reaches installCompleted or failed state, it will go to idle state automatically. */
    status: string;
    /** List of software modules present in the update. */
    softwareModules?: SwupdaterSoftwareModule[];
    /** The deployment action ID */
    id?: string;
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. */
    errorText?: string;
}

/** ACG: softwareupdate.operationDescriptionNotifies when there is a change in the state of the software updater service. It adds the caller to the subscriber list.ParametersNameRequiredTypeDescriptionsubscribeRequiredBooleanSubscribe to get notified when the state changes. Possible values are:true - Subscribe for changes.false - Not subscribed.Call ReturnsNameRequiredTypeDescriptionsubscribedRequiredBooleanIndicates if subscribed to get notifications. Possible values are:true - Subscribed for changes.false - Not subscribed.statusRequiredStringState of the software updater service. Possible values are:idle - Service is in an idle statedownloadReady - Download availabledownloadStarted - Download starteddownloadPaused - Download pausedinstallReady - Ready for installationinstallStarted - Installation startedinstallCompleted - Installation completedfailed - Either download or installation failedNote: When the state reaches installCompleted or failed state, it will go to idle state automatically.softwareModulesOptionalObject array: softwareModuleList of software modules present in the update.idOptionalStringThe deployment action IDreturnValueRequiredBooleanIndicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation.Subscription Returns */
export interface SwupdaterGetStatusSubscription {
    /** Indicates if subscribed to get notifications. Possible values are:true - Subscribed for changes.false - Not subscribed. */
    subscribed: boolean;
    /** State of the update service. Possible values are:idle - Service is in an idle statedownloadReady - Download availabledownloadStarted - Download starteddownloadPaused - Download pausedinstallReady - Ready for installationinstallStarted - Installation startedinstallCompleted - Installation completedfailed - Either download or installation failedNote: When the state reaches installCompleted or failed state, it will go to idle state automatically. */
    status: string;
    /** List of software modules present in the update. */
    softwareModules?: SwupdaterSoftwareModule[];
    /** The deployment action ID */
    id?: string;
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. */
    errorText?: string;
}

/** ACG: softwareupdate.operationDescriptionCancels the download which is currently in progress. ParametersNoneCall Returns */
export interface SwupdaterCancelDownloadCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. */
    errorText?: string;
}

/** ACG: softwareupdate.operationDescriptionPauses the download which is currently in progress. ParametersNoneCall Returns */
export interface SwupdaterPauseDownloadCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. */
    errorText?: string;
}

/** ACG: softwareupdate.operationDescriptionResumes the download that is paused. ParametersNoneCall Returns */
export interface SwupdaterResumeDownloadCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. */
    errorText?: string;
}

/** ACG: softwareupdate.operationDescriptionInstalls the downloaded software modules.ParametersNoneCall Returns */
export interface SwupdaterStartInstallCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. */
    errorText?: string;
}

/** ACG: softwareupdate.operationDescriptionCancels the installation which is in progress. ParametersNoneCall Returns */
export interface SwupdaterCancelInstallCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. */
    errorText?: string;
}
