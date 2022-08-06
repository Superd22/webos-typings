export interface AudioUdevEventParameters {
    event: string;
    soundcard_no?: number;
    device_no?: number;
}

export interface AudioUdevEventCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}
