/** luna://com.webos.service.audiofocusmanager */
interface Audiofocusmanager {
}

export interface AudiofocusmanagerReleaseFocusParameters {
    displayId: number;
    streamType: string;
}

export interface AudiofocusmanagerReleaseFocusCallReturn {
    returnValue: boolean;
    result?: string;
    errorCode?: number;
    errorText?: string;
}

export interface AudiofocusmanagerGetStatusParameters {
    subscribe?: boolean;
    displayId: number;
}

export interface AudiofocusmanagerPausedRequests {
    appId?: string;
    requestType?: string;
}

export interface AudiofocusmanagerActiveRequests {
    appId?: string;
    requestType?: string;
}

export interface AudiofocusmanagerAudioFocusStatus {
    displayId: string;
    pausedRequests: AudiofocusmanagerPausedRequests;
    activeRequests: AudiofocusmanagerActiveRequests;
}

export interface AudiofocusmanagerGetStatusCallReturn {
    returnValue?: boolean;
    subscribed?: boolean;
    errorCode?: number;
    errorText?: string;
    audioFocusStatus?: AudiofocusmanagerAudioFocusStatus[];
}

export interface AudiofocusmanagerGetStatusSubscription {
    returnValue: boolean;
    subscribed?: boolean;
    audioFocusStatus?: AudiofocusmanagerAudioFocusStatus[];
}
