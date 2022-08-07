/** luna://com.webos.service.drm */
interface DRM {
}

export interface DRMLoadParameters {
    /** DRM type */
    /** PlayReady: "playready" */
    /** Widevine: "widevine" */
    drmType: string;
    /** Unique ID of the application using DRM client */
    appId?: string;
}

export enum DRMLoadError {
    VENDOR_MANAGED_ERROR = "500",
    THIS_API_IS_NOT_SUPPORTED_IN_THE_ACTIVATED_DRM = "501",
    THERE_IS_NO_PROCESS_MATCHING_TO_INPUT_CLIENT_ID = "502",
    IT_CANNOT_FIND_A_KEY_FILE_IN_THE_DRM_STORE = "503",
    A_PART_OF_WHOLE_PARAMETERS_IS_NOT_VALID_DATA_OR_FORMAT = "504",
    ITS_NOT_SUPPORTING_DRM_TYPE = "505",
    THE_KEY_FILE_IS_NOT_A_VALID_FORMAT = "506",
    IT_CANNOT_GET_THE_VALID_TIME_INFORMATION = "507",
    ITS_AN_UNKNOWN_ERROR = "599"
}

export interface DRMLoadCallReturn {
    /** Flag that indicates success/failure of the request. */
    /** true: Success */
    /** false: Failure */
    returnValue: boolean;
    /** Unique ID of DRM client instance */
    clientId?: string;
    /** errorCode contains the error code if the method fails. The method will return errorCode only if it fails. */
    /** See the Error Codes Reference of this method for more details. */
    errorCode?: number;
    /** errorText contains the error text if the method fails. The method will return errorText only if it fails. */
    /** See the Error Codes Reference of this method for more details. */
    errorText?: string;
}
