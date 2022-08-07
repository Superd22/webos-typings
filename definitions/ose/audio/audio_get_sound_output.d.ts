/** ACG: audio.queryDescriptionGets the current active sound output device.Parameters */
export interface AudioGetSoundOutputParameters {
    /** Subscribe for notifications on changes in the sound output device.Possible values are:true: Subscribed.false: Not subscribed. */
    subscribe?: string;
    /** The display ID with which the sound output device is associated.Possible values are 0, 1. */
    displayId?: number;
}

/** ACG: audio.queryDescriptionGets the current active sound output device.ParametersNameRequiredTypeDescriptionsubscribeOptionalStringSubscribe for notifications on changes in the sound output device.Possible values are:true: Subscribed.false: Not subscribed.displayIdOptionalNumberThe display ID with which the sound output device is associated.Possible values are 0, 1.Call Returns */
export interface AudioGetSoundOutputCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The reason for the failure of the operation. */
    errorText?: string;
    /** The audio output device. */
    soundOutput: string;
    /** Indicates if subscribed to get the notifications. */
    subscribed?: boolean;
    /** The display ID with which the sound output device is associated. */
    displayId?: number;
}
