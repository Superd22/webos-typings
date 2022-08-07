/** luna://com.webos.service.ai.voice */
interface Voice {
}

/** ACG: ai.voiceDescriptionGets the current state of the service. It can have the following states:idle: Before start.waitActivation: Wait for keyword activation.recording: Uploading audio to the server for speech recognition.thinking: Waiting for results from server.answering: Answering to the request through the speaker. Parameters */
export interface VoiceGetStateParameters {
    /** Subscribe for notifications. Possible values are:true - Get notifications.false - Notifications are not required.Default value: false */
    subscribe?: boolean;
}

/** ACG: ai.voiceDescriptionGets the current state of the service. It can have the following states:idle: Before start.waitActivation: Wait for keyword activation.recording: Uploading audio to the server for speech recognition.thinking: Waiting for results from server.answering: Answering to the request through the speaker. ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanSubscribe for notifications. Possible values are:true - Get notifications.false - Notifications are not required.Default value: falseCall Returns */
export interface VoiceGetStateCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: string;
    /** Indicates if subscribed to get notified. Possible values are:true - Get notificationsfalse - Notifications are not required */
    subscribed?: boolean;
    /** Indicates the running state of the service. Possible values are:idlewaitActivationrecordingthinkinganswering */
    state: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
}

/** ACG: ai.voiceDescriptionReturns speech recognition results. This method is asynchronous.Parameters */
export interface VoiceGetResponseParameters {
    /** Subscribe for notifications. Possible values are:true - Get notifications.false - Notifications are not required.Default value: false */
    subscribe: boolean;
}

/** ACG: ai.voiceDescriptionReturns speech recognition results. This method is asynchronous.ParametersNameRequiredTypeDescriptionsubscribeRequiredBooleanSubscribe for notifications. Possible values are:true - Get notifications.false - Notifications are not required.Default value: falseCall Returns */
export interface VoiceGetResponseCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notified. Possible values are:true - Get notifications.false - Notifications are not required. */
    subscribed?: boolean;
}

/** ACG: ai.voiceDescriptionReturns speech recognition results. This method is asynchronous.ParametersNameRequiredTypeDescriptionsubscribeRequiredBooleanSubscribe for notifications. Possible values are:true - Get notifications.false - Notifications are not required.Default value: falseCall ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.subscribedOptionalBooleanIndicates if subscribed to get notified. Possible values are:true - Get notifications.false - Notifications are not required.Subscription Returns */
export interface VoiceGetResponseSubscription {
    /** Specifies the AI service provider that returns the results of speech recognition.In this case, it will always return "googleassistant". */
    provider?: string;
    /** The results of speech recognition.Different providers will provide results in different format. */
    response?: string;
}

/** ACG: ai.managementDescriptionStops the service. Make sure to call this method before starting another engine.Note: This method is only for allowed clients.ParametersNoneCall Returns */
export interface VoiceStopCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
}
