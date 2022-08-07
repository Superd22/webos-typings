/** luna://com.webos.service.audiofocusmanager */
interface Audiofocusmanager {
}

/** ACG: audiofocus.operationDescriptionReleases the audio resource.Parameters */
export interface AudiofocusmanagerReleaseFocusParameters {
    /** Indicates the display ID from which the application is releasing the focus. */
    displayId: number;
    /** Indicates what is the stream played by application once it gets the focus.Possible values are:palertspfeedbackpringtonespmediapdefaultapppeffectspvoicerecognitionpttsdefault1default2tts1tts2 */
    streamType: string;
}

/** ACG: audiofocus.operationDescriptionReleases the audio resource.ParametersNameRequiredTypeDescriptiondisplayIdRequiredNumberIndicates the display ID from which the application is releasing the focus.streamTypeRequiredStringIndicates what is the stream played by application once it gets the focus.Possible values are:palertspfeedbackpringtonespmediapdefaultapppeffectspvoicerecognitionpttsdefault1default2tts1tts2Call Returns */
export interface AudiofocusmanagerReleaseFocusCallReturn {
    /** Indicates the status of the operation.true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorText" field for details. */
    returnValue: boolean;
    /** Indicates the result.Possible values are:AF_SUCCESSFULLY_RELEASED - This means the application has released the audio resource, unsubscribed with the audiofocusmanager service and will not receive any further events from audiofocusmanager. */
    result?: string;
    /** Indicates the error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the API Error Codes Reference section for details. */
    errorText?: string;
}

/** ACG: audiofocus.queryDescriptionQueries the current status of the audiofocusmanager.Parameters */
export interface AudiofocusmanagerGetStatusParameters {
    /** Indicates if subscribed to get the notifications.Possible values are:true: Subscribe for notifications.false: Not subscribed. */
    subscribe?: boolean;
    /** Indicates the audio focus information of mentioned display ID. */
    displayId: number;
}

/** Provides information of all paused requests. */
export interface AudiofocusmanagerPausedRequests {
    /** Indicates the application ID which acquire the audio resource. */
    appId?: string;
    /** Indicates the request type. Possible values are: AFREQUEST_TRANSIENT:, Alarm,  systemAFREQUEST_GAIN: Music, radioAFREQUEST_RECORD: RecordingAFREQUEST_TRANSIENT_MAY_DUCK: tts, Notifications, SMS, CalendarAFREQUEST_CALL: Call (Only call application should use this request type) */
    requestType?: string;
}

/** Provides information of all active requests. */
export interface AudiofocusmanagerActiveRequests {
    /** Indicates the application ID which acquired the audio resource. */
    appId?: string;
    /** Indicates the request type. Possible values are; AFREQUEST_TRANSIENT: Alarm, systemAFREQUEST_GAIN: Music, radioAFREQUEST_RECORD: RecordingAFREQUEST_TRANSIENT_MAY_DUCK: tts, Notifications, SMS, CalendarAFREQUEST_CALL: Call (Only call application should use this request type) */
    requestType?: string;
}

/** Provides information of all granted request types per session in their request types (paused and active). */
export interface AudiofocusmanagerAudioFocusStatus {
    /** Indicates the audio focus information of mentioned display ID */
    displayId: string;
    /** Provides information of all paused requests. */
    pausedRequests: AudiofocusmanagerPausedRequests;
    /** Provides information of all active requests. */
    activeRequests: AudiofocusmanagerActiveRequests;
}

/** ACG: audiofocus.queryDescriptionQueries the current status of the audiofocusmanager.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribe for notifications.false: Not subscribed.displayIdRequiredNumberIndicates the audio focus information of mentioned display ID.Call Returns */
export interface AudiofocusmanagerGetStatusCallReturn {
    /** Indicates the status of the operation.true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorText" field for details. */
    returnValue?: boolean;
    /** Indicates if subscribed to get the notifications.Possible values are:true: Subscribe for notificationsfalse: Do not subscribe */
    subscribed?: boolean;
    /** Indicates the error code for the failed operation. */
    errorCode?: number;
    /** Describes the error. Returned only in case of execution failure. */
    errorText?: string;
    /** Contains the information of all granted request types per session in their request types (paused and active). */
    audioFocusStatus?: AudiofocusmanagerAudioFocusStatus[];
}

/** ACG: audiofocus.queryDescriptionQueries the current status of the audiofocusmanager.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribe for notifications.false: Not subscribed.displayIdRequiredNumberIndicates the audio focus information of mentioned display ID.Call ReturnsNameRequiredTypeDescriptionreturnValueOptionalBooleanIndicates the status of the operation.true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorText" field for details.subscribedOptionalBooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribe for notificationsfalse: Do not subscribeerrorCodeOptionalNumberIndicates the error code for the failed operation.errorTextOptionalStringDescribes the error. Returned only in case of execution failure.audioFocusStatusOptionalObject array: audioFocusStatusContains the information of all granted request types per session in their request types (paused and active).Subscription Returns */
export interface AudiofocusmanagerGetStatusSubscription {
    /** Indicates the status of the operation.true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorText" field for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get the notifications.Possible values are:true: Subscribe for notificationsfalse: Do not subscribe */
    subscribed?: boolean;
    /** Contains information of all granted request types per session in their request types (paused and active). */
    audioFocusStatus?: AudiofocusmanagerAudioFocusStatus[];
}
