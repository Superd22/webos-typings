/** ACG: audio.queryDescriptionGets input volume of the source.Parameters */
export interface AudioGetSourceInputVolumeParameters {
    /** The source for which volume is required. Possible values are:  recordbtcallsourcealexawebcallvoiceassistance */
    sourceType: string;
    /** Subscribe for notifications on changes in the source volume.Possible values are:true: Subscribed.false: Not subscribed (default). */
    subscribe?: boolean;
}

/** ACG: audio.queryDescriptionGets input volume of the source.ParametersNameRequiredTypeDescriptionsourceTypeRequiredStringThe source for which volume is required. Possible values are:  recordbtcallsourcealexawebcallvoiceassistancesubscribeOptionalBooleanSubscribe for notifications on changes in the source volume.Possible values are:true: Subscribed.false: Not subscribed (default).Call Returns */
export interface AudioGetSourceInputVolumeCallReturn {
    /** Indicates if subscribed to get notifications. */
    subscribed?: boolean;
    /** The source for the volume. */
    sourceType?: string;
    /** Indicates the status of the operation. Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details. */
    returnValue: boolean;
    /** The source volume. */
    volume?: number;
    /** The reason for the failure of the operation. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}

/** ACG: audio.queryDescriptionGets input volume of the source.ParametersNameRequiredTypeDescriptionsourceTypeRequiredStringThe source for which volume is required. Possible values are:  recordbtcallsourcealexawebcallvoiceassistancesubscribeOptionalBooleanSubscribe for notifications on changes in the source volume.Possible values are:true: Subscribed.false: Not subscribed (default).Call ReturnsNameRequiredTypeDescriptionsubscribedOptionalBooleanIndicates if subscribed to get notifications.sourceTypeOptionalStringThe source for the volume.returnValueRequiredBooleanIndicates the status of the operation. Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details.volumeOptionalNumberThe source volume.errorTextOptionalStringThe reason for the failure of the operation.errorCodeOptionalNumberThe error code for the failed operation.Subscription Returns */
export interface AudioGetSourceInputVolumeSubscription {
    /** Indicates if subscribed to get notifications. */
    subscribed: boolean;
    /** The source for the volume. */
    sourceType: string;
    /** Indicates the status of the operation. */
    returnValue: boolean;
    /** The source volume. */
    volume: number;
}
