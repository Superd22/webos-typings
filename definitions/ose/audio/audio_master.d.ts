/** ACG: audio.queryDescriptionGives the current master volume of the audio output device. Parameters */
export interface AudioMasterGetVolumeParameters {
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribed */
    subscribe?: boolean;
}

/** Provides the volume details of the target sound output device. */
export interface AudioVolumeStatus {
    /** Indicates if the audio is on mute or not.Possible values are:true: Audio is on mute.false: Audio is not on mute. */
    muted: boolean;
    /** Indicates the current volume level.Note: Returns a value only if the audio is not on mute. */
    volume: number;
    /** Indicates the target sound output device.Possible value: alsa */
    soundOutput: string;
    /** Indicates the volume status of the targeted display/session.Possible values are:01 */
    sessionId: number;
}

/** ACG: audio.queryDescriptionGives the current master volume of the audio output device. ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedCall Returns */
export interface AudioMasterGetVolumeCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
    /** Indicates the status of volume for different audio output devices. */
    volumeStatus?: AudioVolumeStatus[];
    /** Indicates the luna service name of the calling application. */
    callerId?: string;
}

/** ACG: audio.operationDescriptionSets the master volume of the audio output device.Parameters */
export interface AudioMasterSetVolumeParameters {
    /** Indicates the display/session applicable to the operation.Possible values are:01Note: If not provided, the operation is applied to session 0. */
    sessionId?: number;
    /** Indicates the target sound output device.Possible value: "alsa" */
    soundOutput: string;
    /** Indicates the volume level to be set.Possible range: 0-100 */
    volume: number;
}

/** ACG: audio.operationDescriptionSets the master volume of the audio output device.ParametersNameRequiredTypeDescriptionsessionIdOptionalNumberIndicates the display/session applicable to the operation.Possible values are:01Note: If not provided, the operation is applied to session 0.soundOutputRequiredStringIndicates the target sound output device.Possible value: "alsa"volumeRequiredNumberIndicates the volume level to be set.Possible range: 0-100 Call Returns */
export interface AudioMasterSetVolumeCallReturn {
    /** Indicates the current volume level.Possible range: 0-100 */
    volume: number;
    /** Indicates the target sound output device.Possible value: "alsa" */
    soundOutput: string;
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}

/** ACG: audio.operationDescriptionIncreases the master volume of the device. Parameters */
export interface AudioMasterVolumeUpParameters {
    /** Indicates the display/session applicable to the operation.Possible values are:01Note: If not provided, the operation is applied to session 0. */
    sessionId?: number;
    /** Indicates the audio output device.Possible values are:alsa */
    soundOutput: string;
}

/** ACG: audio.operationDescriptionIncreases the master volume of the device. ParametersNameRequiredTypeDescriptionsessionIdOptionalNumberIndicates the display/session applicable to the operation.Possible values are:01Note: If not provided, the operation is applied to session 0.soundOutputRequiredStringIndicates the audio output device.Possible values are:alsaCall Returns */
export interface AudioMasterVolumeUpCallReturn {
    /** Indicates the current level of volume.Possible range: 0-100 */
    volume: number;
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
    /** Indicates the audio output device. */
    soundOutput: string;
}

/** ACG: audio.operationDescriptionReduces the master volume of the device. Parameters */
export interface AudioMasterVolumeDownParameters {
    /** Indicates the audio output device.Possible value are:alsa */
    soundOutput: string;
    /** Indicates the display/session applicable to the operation.Possible values are:01Note: If not provided, the operation is applied to session 0. */
    sessionId?: number;
}

/** ACG: audio.operationDescriptionReduces the master volume of the device. ParametersNameRequiredTypeDescriptionsoundOutputRequiredStringIndicates the audio output device.Possible value are:alsasessionIdOptionalNumberIndicates the display/session applicable to the operation.Possible values are:01Note: If not provided, the operation is applied to session 0.Call Returns */
export interface AudioMasterVolumeDownCallReturn {
    /** Indicates the current level of volume.Possible range: 0-100 */
    volume: number;
    /** Indicates the status of operation.Possible values are: true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
    /** Indicates the audio sound output device. */
    soundOutput: string;
}

/** ACG: audio.operationDescriptionMutes or unmutes the master volume of the audio output device. Parameters */
export interface AudioMasterMuteVolumeParameters {
    /** Indicates if the master volume is to be muted.Possible values are: true: Master volume to be muted.false: Master volume not to be muted. */
    mute: boolean;
    /** Indicates the display/session applicable to the operation.Possible values are:01Note: If not provided, the operation is applied to the audio device connected to both the displays/sessions. */
    sessionId?: number;
    /** Indicates the audio output device.Possible values are:alsa */
    soundOutput: string;
}

/** ACG: audio.operationDescriptionMutes or unmutes the master volume of the audio output device. ParametersNameRequiredTypeDescriptionmuteRequiredBooleanIndicates if the master volume is to be muted.Possible values are: true: Master volume to be muted.false: Master volume not to be muted.sessionIdOptionalNumberIndicates the display/session applicable to the operation.Possible values are:01Note: If not provided, the operation is applied to the audio device connected to both the displays/sessions.soundOutputRequiredStringIndicates the audio output device.Possible values are:alsaCall Returns */
export interface AudioMasterMuteVolumeCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
    /** Indicates if the master volume is on mute or not.Possible values are:true: Master volume is on mute. false: Master volume is not on mute. */
    mute: boolean;
    /** Indicates the audio output device. */
    soundOutput: string;
    /** Description here */
    return1905?: string;
}
