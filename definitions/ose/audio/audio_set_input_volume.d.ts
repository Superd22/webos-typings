export interface AudioSetInputVolumeParameters {
    streamType: string;
    volume: number;
    ramp?: boolean;
}

export interface AudioSetInputVolumeCallReturn {
    returnValue: boolean;
    volume?: number;
    streamType?: string;
    errorCode?: number;
    errorText?: string;
}
