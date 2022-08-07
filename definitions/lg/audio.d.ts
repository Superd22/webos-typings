/** luna://com.webos.audio */
interface Audio {
}

export interface AudioSetMutedParameters {
    /** The flag that indicates whether to mute the volume or unmute the volume. */
    /** true: mute the volume */
    /** false: unmute the volume */
    muted: boolean;
}

export enum AudioSetMutedError {
    NOT_A_VALID_JSON_MESSAGE = "1"
}

export interface AudioSetMutedCallReturn {
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
