export interface AudioUnregisterTrackParameters {
    trackId: string;
}

export interface AudioUnregisterTrackCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    trackId?: string;
}
