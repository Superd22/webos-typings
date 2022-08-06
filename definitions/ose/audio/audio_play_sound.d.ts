export interface AudioPlaySoundParameters {
    fileName: string;
    sink: string;
    format: string;
    sampleRate: number;
    channels: number;
}

export interface AudioPlaySoundCallReturn {
    returnValue: boolean;
    errorText?: string;
    errorCode?: number;
}
