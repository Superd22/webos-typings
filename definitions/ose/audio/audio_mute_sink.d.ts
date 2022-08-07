/** ACG: audio.operationDescriptionMutes the sink volume.Parameters */
export interface AudioMuteSinkParameters {
    /** The sink to be muted. Possible values are:palertspfeedbackpringtonespmediapdefaultapppeffectspvoicerecognitionpttsdefault1default2tts1tts2 */
    streamType: string;
    /** Mute or unmute the sink.Possible values are:true: Mute the sink.false: Unmute the sink. */
    mute: boolean;
}

/** ACG: audio.operationDescriptionMutes the sink volume.ParametersNameRequiredTypeDescriptionstreamTypeRequiredStringThe sink to be muted. Possible values are:palertspfeedbackpringtonespmediapdefaultapppeffectspvoicerecognitionpttsdefault1default2tts1tts2muteRequiredBooleanMute or unmute the sink.Possible values are:true: Mute the sink.false: Unmute the sink.Call Returns */
export interface AudioMuteSinkCallReturn {
    /** The sink that is muted/unmuted. */
    streamType?: string;
    /** Indicates the status of the operation. Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details. */
    returnValue: boolean;
    /** Indicates the mute status of the sink. */
    mute?: boolean;
    /** The reason for the failure of the operation. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}
