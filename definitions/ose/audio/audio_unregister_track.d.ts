/** ACG: audio.operationDescriptionUnregisters a playback by an application/service.Parameters */
export interface AudioUnregisterTrackParameters {
    /** Track ID of the registered playback. */
    trackId: string;
}

/** ACG: audio.operationDescriptionUnregisters a playback by an application/service.ParametersNameRequiredTypeDescriptiontrackIdRequiredStringTrack ID of the registered playback.Call Returns */
export interface AudioUnregisterTrackCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Operation is successful.false: Operation has failed. Check the 'errorCode' and 'errorText' fields. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The reason for the failure of the operation. See the 'API Error Codes Reference' section for details. */
    errorText?: string;
    /** Track ID that is unregistered. */
    trackId?: string;
}
