export interface AudioGetSourceStatusParameters {
    sourceType?: string;
    subscribe?: boolean;
}

export interface AudioSourceObject {
    activeStatus: boolean;
    inputVolume: number;
    muteStatus: boolean;
    policyStatus: string;
    sink: string;
    source: string;
    sourceType: string;
}

export interface AudioGetSourceStatusCallReturn {
    subscribed?: boolean;
    returnValue: boolean;
    errorText?: string;
    errorCode?: number;
    sourceObject?: AudioSourceObject[];
}

export interface AudioGetSourceStatusSubscription {
    subscribed: boolean;
    sourceObject: AudioSourceObject[];
    returnValue: boolean;
}
