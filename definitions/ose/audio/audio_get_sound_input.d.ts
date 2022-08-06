export interface AudioGetSoundInputParameters {
    subscribe?: string;
    displayId?: number;
}

export interface AudioGetSoundInputCallReturn {
    soundInput?: string;
    returnValue: boolean;
    subscribed: boolean;
    displayId?: number;
    errorText?: string;
    errorCode?: number;
}

export interface AudioGetSoundInputSubscription {
    soundInput: string;
    returnValue?: boolean;
    displayId?: number;
}
