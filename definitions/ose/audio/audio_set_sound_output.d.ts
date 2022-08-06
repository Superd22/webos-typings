export interface AudioSetSoundOutputParameters {
    soundOutput: string;
}

export interface AudioSetSoundOutputCallReturn {
    returnValue: boolean;
    errorText?: string;
    errorCode?: number;
    soundOutput: string;
}
