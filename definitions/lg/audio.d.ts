/** luna://com.webos.audio */
interface Audio {
}

export interface AudioSetMutedParameters {
    muted: boolean;
}

export enum AudioSetMutedError {
    NOT_A_VALID_JSON_MESSAGE = "1"
}

export interface AudioSetMutedCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}
