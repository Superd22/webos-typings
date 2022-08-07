/** ACG: audio.operationDescriptionSets the sound output device.Parameters */
export interface AudioSetSoundOutputParameters {
    /** The audio output device. Possible values are: pcm_outputbluetooth_speaker0 */
    soundOutput: string;
}

/** ACG: audio.operationDescriptionSets the sound output device.ParametersNameRequiredTypeDescriptionsoundOutputRequiredStringThe audio output device. Possible values are: pcm_outputbluetooth_speaker0Call Returns */
export interface AudioSetSoundOutputCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "API Error Codes Reference" section for details. */
    returnValue: boolean;
    /** The reason for the failure of the operation. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The audio output device. */
    soundOutput: string;
}
