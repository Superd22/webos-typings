/** luna://com.webos.applicationManager */
interface ApplicationManager {
}

export interface ApplicationManagerLaunchParameters {
    /** The ID of the app to launch. */
    id: string;
    /** The object that contains the parameters for the target application. */
    params?: any;
}

export enum ApplicationManagerLaunchError {
    GENERAL_ERRORS = "-1",
    FAIL_TO_READ_SCHEMA = "-2",
    NO_FREE_MEMORY = "-3",
    FAILED_TO_ALLOCATE_MEMORY_WHILE_LAUNCHING_AN_APP = "-4",
    FILE_DOWNLOAD_IS_NOT_SUPPORTED = "-5",
    NO_HANDLER_FOR_TARGET_URI = "-6",
    THE_APP_WAS_NOT_FOUND = "-101",
    THE_APP_HAS_BEEN_LOCKED = "-102",
    SECURITY_CHECKS_VERIFIED_FAILED = "-103",
    CANNOT_LAUNCH_A_PRIVILEGED_APP_ON_DEVELOPMENT_MODE_FROM_DEVELOPER_APPS_PATH = "-104",
    INVALID_ID_IS_SPECIFIED = "-105",
    UNSUPPORTED_APP_TYPE = "-106",
    CANNOT_LAUNCH_THE_LAST_APP_BY_KILLING_A_FOREGROUND_APP_WHEN_ANOTHER_APP_IS_LAUNCHED = "-107",
    WAITING_FOR_A_NATIVE_APP = "-201",
    FAILED_TO_NATIVE_APP_LAUNCH_PROCESS = "-202",
    THE_NATIVE_APP_IS_ALREADY_LAUNCHING = "-203",
    GENERAL_CALLCHAIN_ERRORS = "-300",
    FAILED_TO_DOWNLOAD_RO_RIGHT_OBJECTS = "-301",
    FAILED_TO_CHECK_DRM = "-302",
    FAILED_TO_CHECK_APP_SIGNING = "-303",
    FAILED_TO_GET_SETTING_VALUE = "-304",
    FAILED_TO_MATCH_PINCODE = "-305",
    PIN_IS_NOT_MATCHED = "-306",
    FAILED_TO_SEND_LAUNCH_EVENT = "-307",
    FAILED_TO_FIND_LAUNCH_POINT = "-308",
    FAILED_TO_REGISTER_KIND_TO_DB = "-309",
    FAILED_TO_REGISTER_PERMISSION = "-310",
    EULA_ERRORS = "-311"
}

export interface ApplicationManagerLaunchCallReturn {
    /** The flag that indicates the success/failure of the request. */
    /** true: Success */
    /** false: Failure */
    returnValue: boolean;
    /** errorCode contains the error code if the method fails. The method returns errorCode only if it fails. */
    /** See the Error Codes Reference of this method for more details. */
    errorCode?: number;
    /** errorText contains the error text if the method fails. The method returns errorText only if it fails. */
    /** See the Error Codes Reference of this method for more details. */
    errorText?: string;
}
