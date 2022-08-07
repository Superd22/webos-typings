/** ACG: audio.operationDescriptionSets the sound input device for recording.Parameters */
export interface AudioSetSoundInputParameters {
    /** The sound input device. Possible values are:pcm_input */
    soundInput: string;
}

/** ACG: audio.operationDescriptionSets the sound input device for recording.ParametersNameRequiredTypeDescriptionsoundInputRequiredStringThe sound input device. Possible values are:pcm_inputCall Returns */
export interface AudioSetSoundInputCallReturn {
    /** The sound input device that is set. */
    soundInput?: string;
    /** Indicates the status of the operation.Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details. */
    returnValue: boolean;
    /** The reason for the failure of the operation. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}
