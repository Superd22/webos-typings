/** ACG: audio.managementDescriptionSets the audio output device. Parameters */
export interface AudioSoundSettingsSetSoundOutParameters {
    /** Indicates the audio output device.Possible values are:alsa */
    soundOut: string;
}

/** ACG: audio.managementDescriptionSets the audio output device. ParametersNameRequiredTypeDescriptionsoundOutRequiredStringIndicates the audio output device.Possible values are:alsaCall Returns */
export interface AudioSoundSettingsSetSoundOutCallReturn {
    /** Indicates the audio output device.Possible values are:alsa */
    soundOut: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
}
