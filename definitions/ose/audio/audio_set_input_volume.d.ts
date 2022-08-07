/** ACG: audio.operationDescriptionSets the input volume for audio streams.Parameters */
export interface AudioSetInputVolumeParameters {
    /** Indicates the stream name of the input volume to be applied.Possible values are:palertspfeedbackpringtonespmediapdefaultapppeffectspvoicerecognitionpttsdefault1default2tts1tts2 */
    streamType: string;
    /** Indicates the volume to be applied.Possible range: 0-100 */
    volume: number;
    /** Indicates if the volume is to be applied in steps.Possible values are:true: Volume is applied in steps.false: Volume is not applied in steps.Default: false */
    ramp?: boolean;
}

/** ACG: audio.operationDescriptionSets the input volume for audio streams.ParametersNameRequiredTypeDescriptionstreamTypeRequiredStringIndicates the stream name of the input volume to be applied.Possible values are:palertspfeedbackpringtonespmediapdefaultapppeffectspvoicerecognitionpttsdefault1default2tts1tts2volumeRequiredNumberIndicates the volume to be applied.Possible range: 0-100rampOptionalBooleanIndicates if the volume is to be applied in steps.Possible values are:true: Volume is applied in steps.false: Volume is not applied in steps.Default: falseCall Returns */
export interface AudioSetInputVolumeCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Returns the value of applied volume in case of success.Possible range: 0-100 */
    volume?: number;
    /** Returns the stream name of the volume applied. */
    streamType?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
}
