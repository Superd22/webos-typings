export interface AudioSoundSettingsSetSoundOutParameters {
    soundOut: string;
}

export interface AudioSoundSettingsSetSoundOutCallReturn {
    soundOut: string;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}
