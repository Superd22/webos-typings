/** ACG: audio.queryDescriptionGets the current active sound input device.Parameters */
export interface AudioGetSoundInputParameters {
    /** Subscribe for notifications on changes in the sound input device.Possible values are:true: Subscribed.false: Not subscribed. */
    subscribe?: string;
    /** The display ID with which the sound input device is associated.Possible values are: 0, 1. */
    displayId?: number;
}

/** ACG: audio.queryDescriptionGets the current active sound input device.ParametersNameRequiredTypeDescriptionsubscribeOptionalStringSubscribe for notifications on changes in the sound input device.Possible values are:true: Subscribed.false: Not subscribed.displayIdOptionalNumberThe display ID with which the sound input device is associated.Possible values are: 0, 1.Call Returns */
export interface AudioGetSoundInputCallReturn {
    /** The active sound input device. */
    soundInput?: string;
    /** Indicates the status of the operation. Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications. */
    subscribed: boolean;
    /** The display ID with which the sound input device is associated. */
    displayId?: number;
    /** The reason for the failure of the operation. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}

/** ACG: audio.queryDescriptionGets the current active sound input device.ParametersNameRequiredTypeDescriptionsubscribeOptionalStringSubscribe for notifications on changes in the sound input device.Possible values are:true: Subscribed.false: Not subscribed.displayIdOptionalNumberThe display ID with which the sound input device is associated.Possible values are: 0, 1.Call ReturnsNameRequiredTypeDescriptionsoundInputOptionalStringThe active sound input device.returnValueRequiredBooleanIndicates the status of the operation. Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details.subscribedRequiredBooleanIndicates if subscribed to get notifications.displayIdOptionalNumberThe display ID with which the sound input device is associated.errorTextOptionalStringThe reason for the failure of the operation.errorCodeOptionalNumberThe error code for the failed operation.Subscription Returns */
export interface AudioGetSoundInputSubscription {
    /** The active sound input device. */
    soundInput: string;
    /** Indicates the status of the operation. */
    returnValue?: boolean;
    /** The display ID with which the sound input device is associated. */
    displayId?: number;
}
