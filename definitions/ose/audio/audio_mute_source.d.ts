/** ACG: audio.operationDescriptionMutes the source volume.Parameters */
export interface AudioMuteSourceParameters {
    /** The source to be muted.Possible values are:recordbtcallsourcealexawebcallvoiceassistance */
    sourceType: string;
    /** Mute or unmute the source.Possible values are:true: Mute the source.false: Unmute the source. */
    mute: boolean;
}

/** ACG: audio.operationDescriptionMutes the source volume.ParametersNameRequiredTypeDescriptionsourceTypeRequiredStringThe source to be muted.Possible values are:recordbtcallsourcealexawebcallvoiceassistancemuteRequiredBooleanMute or unmute the source.Possible values are:true: Mute the source.false: Unmute the source.Call Returns */
export interface AudioMuteSourceCallReturn {
    /** The source that is muted/unmuted. */
    sourceType?: string;
    /** Indicates the status of the operation. Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details. */
    returnValue: boolean;
    /** Indicates the mute status of the source. */
    mute?: boolean;
    /** The reason for the failure of the operation. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}
