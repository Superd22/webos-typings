export interface AudioGetStreamStatusParameters {
    subscribe?: boolean;
    streamType?: string;
}

export interface AudioStreamObject {
    activeStatus: boolean;
    inputVolume: number;
    muteStatus: boolean;
    policyStatus: boolean;
    sink?: string;
    source?: string;
    streamType: string;
}

export interface AudioGetStreamStatusCallReturn {
    returnValue: boolean;
    subscribed?: boolean;
    errorCode?: number;
    errorText?: string;
    streamObject?: AudioStreamObject[];
}

export interface AudioGetStreamStatusSubscription {
    returnValue: boolean;
    subscribed: boolean;
    streamObject: AudioStreamObject[];
}
