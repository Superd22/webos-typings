export interface AudioRegisterTrackParameters {
    streamType: string;
}

export interface AudioRegisterTrackCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    trackId?: string;
    streamType?: string;
}
