export interface AudioMuteSinkParameters {
    streamType: string;
    mute: boolean;
}

export interface AudioMuteSinkCallReturn {
    streamType?: string;
    returnValue: boolean;
    mute?: boolean;
    errorText?: string;
    errorCode?: number;
}
