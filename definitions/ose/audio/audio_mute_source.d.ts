export interface AudioMuteSourceParameters {
    sourceType: string;
    mute: boolean;
}

export interface AudioMuteSourceCallReturn {
    sourceType?: string;
    returnValue: boolean;
    mute?: boolean;
    errorText?: string;
    errorCode?: number;
}
