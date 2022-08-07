/** luna://com.webos.service.mrcu */
interface MagicRemote {
}

export interface MagicRemoteEnableDualPairingParameters {
    /** Flag that decides whether to enable or disable the Dual Pairing mode. */
    /** To enable Dual Pairing mode, set this parameter to true. */
    /** To disable Dual Pairing mode, set this parameter to false. */
    /** The default value is false. */
    enable: boolean;
}

export enum MagicRemoteEnableDualPairingError {
    UNDEFINED_PARAMETER = "1001",
    MISSING_REQUIRED_PARAMETER = "1002"
}

export interface MagicRemoteEnableDualPairingCallReturn {
    /** Flag that indicates success/failure of the request. */
    /** true: Success */
    /** false: Failure */
    returnValue: boolean;
    /** errorCode contains the error code if the method fails. The method will return errorCode only if it fails. */
    /** See the Error Codes Reference of this method for more details. */
    errorCode?: number;
    /** errorText contains the error text if the method fails. The method will return errorText only if it fails. */
    /** See the Error Codes Reference of this method for more details. */
    errorText?: string;
}
