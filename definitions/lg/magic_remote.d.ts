/** luna://com.webos.service.mrcu */
interface MagicRemote {
}

export interface MagicRemoteEnableDualPairingParameters {
    enable: boolean;
}

export enum MagicRemoteEnableDualPairingError {
    UNDEFINED_PARAMETER = "1001",
    MISSING_REQUIRED_PARAMETER = "1002"
}

export interface MagicRemoteEnableDualPairingCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}
