/** ACG: audio.operationDescriptionRegisters a playback by an application/service and returns a track ID.The track ID must be used to control the volume of that particular playback by using setTrackVolume().Parameters */
export interface AudioRegisterTrackParameters {
    /** Type of the audio stream. Possible values are:palertspfeedbackpringtonespmediapdefaultapppeffectspvoicerecognitionpttsdefault1default2tts1tts2 */
    streamType: string;
}

/** ACG: audio.operationDescriptionRegisters a playback by an application/service and returns a track ID.The track ID must be used to control the volume of that particular playback by using setTrackVolume().ParametersNameRequiredTypeDescriptionstreamTypeRequiredStringType of the audio stream. Possible values are:palertspfeedbackpringtonespmediapdefaultapppeffectspvoicerecognitionpttsdefault1default2tts1tts2Call Returns */
export interface AudioRegisterTrackCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Operation is successful.false: Operation has failed. Check the 'errorCode' and 'errorText' fields. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The reason for the failure of the operation. See the 'API Error Codes Reference' section for details. */
    errorText?: string;
    /** Track ID of the registered playback. */
    trackId?: string;
    /** Type of the audio stream. */
    streamType?: string;
}
