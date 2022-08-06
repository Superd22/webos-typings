export interface AudioGetInputVolumeParameters {
    subscribe?: boolean;
    streamType: string;
}

export interface AudioGetInputVolumeCallReturn {
    returnValue: boolean;
    subscribed?: boolean;
    streamType?: string;
    volume?: number;
    errorCode?: number;
    errorText?: string;
}

export interface AudioGetInputVolumeSubscription {
    subscribed: boolean;
    returnValue: boolean;
    streamType: string;
    volume: number;
}
