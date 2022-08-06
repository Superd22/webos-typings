export interface AudioGetSoundOutputParameters {
    subscribe?: string;
    displayId?: number;
}

export interface AudioGetSoundOutputCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    soundOutput: string;
    subscribed?: boolean;
    displayId?: number;
}
