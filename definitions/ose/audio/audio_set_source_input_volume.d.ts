export interface AudioSetSourceInputVolumeParameters {
    sourceType: string;
    volume: number;
    ramp?: boolean;
}

export interface AudioSetSourceInputVolumeCallReturn {
    volume?: number;
    sourceType?: string;
    returnValue: boolean;
    errorText?: string;
    errorCode?: number;
}
