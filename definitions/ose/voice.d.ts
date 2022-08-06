/** luna://com.webos.service.ai.voice */
interface Voice {
}

export interface VoiceGetStateParameters {
    subscribe?: boolean;
}

export interface VoiceGetStateCallReturn {
    returnValue: string;
    subscribed?: boolean;
    state: string;
    errorCode?: number;
    errorText?: string;
}

export interface VoiceGetResponseParameters {
    subscribe: boolean;
}

export interface VoiceGetResponseCallReturn {
    returnValue: boolean;
    subscribed?: boolean;
}

export interface VoiceGetResponseSubscription {
    provider?: string;
    response?: string;
}

export interface VoiceStopCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}
