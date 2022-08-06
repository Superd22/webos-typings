/** luna://com.webos.service.tv.systemproperty */
interface TVDeviceInformation {
}

export interface TVDeviceInformationGetSystemInfoParameters {
    keys: stringarray;
    subscribe?: boolean;
}

export enum TVDeviceInformationGetSystemInfoError {
    INVALID_ARGUMENT = "ERROR_06",
    RESOURCE_TEMPORARILY_UNAVAILABLE = "ERROR_10",
    JSON_FORMAT_ERROR = "ERROR_99"
}

export interface TVDeviceInformationGetSystemInfoCallReturn {
    returnValue: boolean;
    errorCode?: string;
    errorText?: string;
    [keyname]*?: string;
}
