export interface AudioGetSourceInputVolumeParameters {
    sourceType: string;
    subscribe?: boolean;
}

export interface AudioGetSourceInputVolumeCallReturn {
    subscribed?: boolean;
    sourceType?: string;
    returnValue: boolean;
    volume?: number;
    errorText?: string;
    errorCode?: number;
}

export interface AudioGetSourceInputVolumeSubscription {
    subscribed: boolean;
    sourceType: string;
    returnValue: boolean;
    volume: number;
}
