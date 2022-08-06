export interface AudioMasterGetVolumeParameters {
    subscribe?: boolean;
}

export interface AudioVolumeStatus {
    muted: boolean;
    volume: number;
    soundOutput: string;
    sessionId: number;
}

export interface AudioMasterGetVolumeCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    volumeStatus?: AudioVolumeStatus[];
    callerId?: string;
}

export interface AudioMasterSetVolumeParameters {
    sessionId?: number;
    soundOutput: string;
    volume: number;
}

export interface AudioMasterSetVolumeCallReturn {
    volume: number;
    soundOutput: string;
    returnValue: boolean;
    errorText?: string;
    errorCode?: number;
}

export interface AudioMasterVolumeUpParameters {
    sessionId?: number;
    soundOutput: string;
}

export interface AudioMasterVolumeUpCallReturn {
    volume: number;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    soundOutput: string;
}

export interface AudioMasterVolumeDownParameters {
    soundOutput: string;
    sessionId?: number;
}

export interface AudioMasterVolumeDownCallReturn {
    volume: number;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    soundOutput: string;
}

export interface AudioMasterMuteVolumeParameters {
    mute: boolean;
    sessionId?: number;
    soundOutput: string;
}

export interface AudioMasterMuteVolumeCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    mute: boolean;
    soundOutput: string;
    return1905?: string;
}
