export interface AudioUMIConnectParameters {
    outputMode: string;
    audioType: string;
    sink: string;
    source: string;
    sourcePort: number;
    context?: string;
}

export interface AudioUMIConnectCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    source: string;
    sink: string;
}

export interface AudioUMIDisconnectParameters {
    sink: string;
    source: string;
    sourcePort: number;
    audioType: string;
    context?: string;
}

export interface AudioUMIDisconnectCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    source: string;
    sink: string;
}

export interface AudioAudio {
    source: string;
    sink: string;
    muted: boolean;
    outputMode: string;
}

export interface AudioUMIGetStatusCallReturn {
    audio: AudioAudio[];
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface AudioUMIMuteParameters {
    sink: string;
    source: string;
    sourcePort: number;
    mute: boolean;
}

export interface AudioUMIMuteCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}
