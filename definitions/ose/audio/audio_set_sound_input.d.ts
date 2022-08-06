export interface AudioSetSoundInputParameters {
    soundInput: string;
}

export interface AudioSetSoundInputCallReturn {
    soundInput?: string;
    returnValue: boolean;
    errorText?: string;
    errorCode?: number;
}
