/** ACG: audio.queryDescriptionGets the status and information of the active stream.Parameters */
export interface AudioGetStreamStatusParameters {
    /** Indicates if subscribed to get the notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed .Default: false */
    subscribe?: boolean;
    /** Indicates the type of the stream.Note: If not specified, all active stream details are provided. */
    streamType?: string;
}

/** Contains the list of active connections. */
export interface AudioStreamObject {
    /** Indicates whether the stream is active.Possible values are:true: Stream is active.false: Streams is not active. */
    activeStatus: boolean;
    /** Indicates the input volume of the stream.Possible range: 0~100 */
    inputVolume: number;
    /** Indicates if the audio is muted.Possible values are:true: The volume is muted.false: The volume is not muted. */
    muteStatus: boolean;
    /** Indicates if the policy for the streams is in progress.Possible values are:true: The policy is in progress.false: The policy is not in progress. */
    policyStatus: boolean;
    /** Indicates the audio sink ( MAIN, SUB and ALSA). */
    sink?: string;
    /** Indicates the audio source ( ADEC, AMIXER). */
    source?: string;
    /** Indicates the active stream namesPossible values are:palertspfeedbackpringtonespmediapdefaultapppeffectspvoicerecognitionpttsdefault1default2tts1tts2 */
    streamType: string;
}

/** ACG: audio.queryDescriptionGets the status and information of the active stream.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed .Default: falsestreamTypeOptionalStringIndicates the type of the stream.Note: If not specified, all active stream details are provided.Call Returns */
export interface AudioGetStreamStatusCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get the notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed?: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
    /** Indicates the list of active connections. */
    streamObject?: AudioStreamObject[];
}

/** ACG: audio.queryDescriptionGets the status and information of the active stream.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed .Default: falsestreamTypeOptionalStringIndicates the type of the stream.Note: If not specified, all active stream details are provided.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.subscribedOptionalBooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details.streamObjectOptionalObject array: streamObjectIndicates the list of active connections.Subscription Returns */
export interface AudioGetStreamStatusSubscription {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get the notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Note: Always returns true */
    subscribed: boolean;
    /** Indicates the list of active connections. */
    streamObject: AudioStreamObject[];
}
