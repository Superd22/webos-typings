export interface AudioSetTrackVolumeParameters {
    trackId: string;
    volume: number;
}

export interface AudioSetTrackVolumeCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    trackId?: string;
    volume?: number;
    streamType?: string;
}
