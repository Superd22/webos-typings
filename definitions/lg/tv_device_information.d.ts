/** luna://com.webos.service.tv.systemproperty */
interface TVDeviceInformation {
}

export interface TVDeviceInformationGetSystemInfoParameters {
    /** An array of key names for retrieving system information. */
    /** Example: ["boardType", "projectName"] */
    keys: stringarray;
    /** Flag that decides whether to subscribe or not. If you enabled the subscription, you will get an event when every system information you specified is changed. */
    /** true: Subscribe */
    /** false: Do not subscribe. Call the method only once. (Default) */
    subscribe?: boolean;
}

export enum TVDeviceInformationGetSystemInfoError {
    INVALID_ARGUMENT = "ERROR_06",
    RESOURCE_TEMPORARILY_UNAVAILABLE = "ERROR_10",
    JSON_FORMAT_ERROR = "ERROR_99"
}

export interface TVDeviceInformationGetSystemInfoCallReturn {
    /** Flag that indicates success/failure of the request. */
    /** true: Success */
    /** false: Failure */
    returnValue: boolean;
    /** errorCode contains the error code if the method fails. The method will return errorCode only if it fails. */
    /** See the Error Codes Reference of this method for more details. */
    errorCode?: string;
    /** errorText contains the error text if the method fails. The method will return errorText only if it fails. */
    /** See the Error Codes Reference of this method for more details. */
    errorText?: string;
    /** If getSystemInfo method succeeds, the paired key-value that you specified will be returned. */
    [keyname]*?: string;
}
