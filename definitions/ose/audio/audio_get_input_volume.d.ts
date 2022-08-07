/** ACG: audio.queryDescriptionGets the input volume for audio streams.Parameters */
export interface AudioGetInputVolumeParameters {
    /** Indicates if subscribed to get the notifications.Possible values are:true: Subscribed to get notifications.false: Not subscribed (default). */
    subscribe?: boolean;
    /** Indicates the stream name of the input volume to be received.Possible values are:palertspfeedbackpringtonespmediapdefaultapppeffectspvoicerecognitionpttsdefault1default2tts1tts2 */
    streamType: string;
}

/** ACG: audio.queryDescriptionGets the input volume for audio streams.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribed to get notifications.false: Not subscribed (default).streamTypeRequiredStringIndicates the stream name of the input volume to be received.Possible values are:palertspfeedbackpringtonespmediapdefaultapppeffectspvoicerecognitionpttsdefault1default2tts1tts2Call Returns */
export interface AudioGetInputVolumeCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if the input volume is subscribed to get the notifications.Possible values are:true: Subscribed to get notifications.false: Not subscribed. */
    subscribed?: boolean;
    /** Indicates the stream name of the input volume to be applied. Check "Parameters" section for list of possible values. */
    streamType?: string;
    /** Returns the value of applied volume in case of success.Possible range: 0-100 */
    volume?: number;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
}

/** ACG: audio.queryDescriptionGets the input volume for audio streams.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribed to get notifications.false: Not subscribed (default).streamTypeRequiredStringIndicates the stream name of the input volume to be received.Possible values are:palertspfeedbackpringtonespmediapdefaultapppeffectspvoicerecognitionpttsdefault1default2tts1tts2Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.subscribedOptionalBooleanIndicates if the input volume is subscribed to get the notifications.Possible values are:true: Subscribed to get notifications.false: Not subscribed.streamTypeOptionalStringIndicates the stream name of the input volume to be applied. Check "Parameters" section for list of possible values.volumeOptionalNumberReturns the value of applied volume in case of success.Possible range: 0-100errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details.Subscription Returns */
export interface AudioGetInputVolumeSubscription {
    /** Indicates if the input volume is subscribed to get the notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Note: Always returns true. */
    subscribed: boolean;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.Note: Always returns value as true. */
    returnValue: boolean;
    /** Indicates the stream name of the input volume to be applied. Check "Parameters" section for list of possible values. */
    streamType: string;
    /** Returns the value of applied volume in case of success.Possible range: 0-100 */
    volume: number;
}
