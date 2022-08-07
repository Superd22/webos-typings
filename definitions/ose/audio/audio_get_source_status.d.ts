/** ACG: audio.queryDescriptionGets the status of the source.Parameters */
export interface AudioGetSourceStatusParameters {
    /** Type of source. Possible values are:recordbtcallsourcealexawebcallvoiceassistanceNote: If not specified, all active source details are provided. */
    sourceType?: string;
    /** Subscribe for notifications on changes in the source.Possible values are:true: Subscribed.false: Not subscribed (default). */
    subscribe?: boolean;
}

/** Indicates the list of active source connection */
export interface AudioSourceObject {
    /** Indicates whether the source is active.Possible values are:true: Source is active.false: Source is not active. */
    activeStatus: boolean;
    /** Indicates the input volume of the source.Possible range: 0~100 */
    inputVolume: number;
    /** Indicates if the audio is muted.Possible values are:true: The volume is muted.false: The volume is not muted. */
    muteStatus: boolean;
    /** Indicates if the policy for the sources is in progress.Possible values are:true: The policy is in progress.false: The policy is not in progress. */
    policyStatus: string;
    /** Indicates the audio sink.Possible values are:MAINSUBALSA */
    sink: string;
    /** Indicates the audio source.Possible values are:ADECAMIXER */
    source: string;
    /** Indicates the active source connection.Possible values are:recordbtcallsourcealexawebcallvoiceassistance */
    sourceType: string;
}

/** ACG: audio.queryDescriptionGets the status of the source.ParametersNameRequiredTypeDescriptionsourceTypeOptionalStringType of source. Possible values are:recordbtcallsourcealexawebcallvoiceassistanceNote: If not specified, all active source details are provided.subscribeOptionalBooleanSubscribe for notifications on changes in the source.Possible values are:true: Subscribed.false: Not subscribed (default).Call Returns */
export interface AudioGetSourceStatusCallReturn {
    /** Indicates if subscribed to get notifications. */
    subscribed?: boolean;
    /** Indicates the status of the operation. Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details. */
    returnValue: boolean;
    /** The reason for the failure of the operation. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The list of active source connections. */
    sourceObject?: AudioSourceObject[];
}

/** ACG: audio.queryDescriptionGets the status of the source.ParametersNameRequiredTypeDescriptionsourceTypeOptionalStringType of source. Possible values are:recordbtcallsourcealexawebcallvoiceassistanceNote: If not specified, all active source details are provided.subscribeOptionalBooleanSubscribe for notifications on changes in the source.Possible values are:true: Subscribed.false: Not subscribed (default).Call ReturnsNameRequiredTypeDescriptionsubscribedOptionalBooleanIndicates if subscribed to get notifications.returnValueRequiredBooleanIndicates the status of the operation. Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details.errorTextOptionalStringThe reason for the failure of the operation. errorCodeOptionalNumberThe error code for the failed operation.sourceObjectOptionalObject array: sourceObjectThe list of active source connections.Subscription Returns */
export interface AudioGetSourceStatusSubscription {
    /** Indicates if subscribed to get notifications. */
    subscribed: boolean;
    /** The list of active source connections. */
    sourceObject: AudioSourceObject[];
    /** Indicates the status of the operation. */
    returnValue: boolean;
}
