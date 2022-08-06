/** luna://com.webos.service.camera2 */
interface Camera2 {
}

export interface Camera2OpenParameters {
    id: string;
    mode?: string;
}

export interface Camera2OpenCallReturn {
    returnValue: boolean;
    handle?: number;
    errorCode?: number;
    errorText?: string;
}

export interface Camera2CameraMemorySource {
    type: string;
    source: string;
}

export interface Camera2StartPreviewParameters {
    handle: number;
    params: Camera2CameraMemorySource;
}

export interface Camera2StartPreviewCallReturn {
    key?: number;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface Camera2StopPreviewParameters {
    handle: number;
}

export interface Camera2StopPreviewCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface Camera2CameraCaptureFormat {
    width: number;
    height: number;
    format: string;
    nimage?: number;
    mode: string;
}

export interface Camera2StartCaptureParameters {
    handle: number;
    params: Camera2CameraCaptureFormat;
    path?: string;
}

export interface Camera2StartCaptureCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface Camera2StopCaptureParameters {
    handle: number;
}

export interface Camera2StopCaptureCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface Camera2CloseParameters {
    handle: number;
}

export interface Camera2CloseCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface Camera2GetInfoParameters {
    id: string;
}

export interface Camera2Video {
    maxWidth?: number;
    maxHeight?: number;
    format?: string;
    frameRate?: number;
}

export interface Camera2Picture {
    maxWidth?: number;
    maxHeight?: number;
    format?: string;
}

export interface Camera2Details {
    video?: Camera2Video;
    picture?: Camera2Picture;
}

export interface Camera2CaptureInfo {
    details?: Camera2Details;
    name?: string;
    type?: string;
    builtin?: boolean;
}

export interface Camera2GetInfoCallReturn {
    info?: Camera2CaptureInfo[];
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface Camera2GetPropertiesParameters {
    handle: number;
    params?: string[];
}

export interface Camera2CameraProperties {
    autoWhiteBalance?: number;
    backlightCompensation?: boolean;
    brightness?: number;
    contrast?: number;
    frequency?: number;
    gain?: number;
    gamma?: number;
    hue?: number;
    pan?: number;
    resolution?: any;
    saturation?: number;
    sharpness?: number;
    tilt?: number;
    whiteBalanceTemperature?: number;
}

export interface Camera2GetPropertiesCallReturn {
    params?: Camera2CameraProperties;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface Camera2SetPropertiesParameters {
    handle: number;
    params: Camera2CameraProperties;
}

export interface Camera2SetPropertiesCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface Camera2CameraFormat {
    width: number;
    height: number;
    format: string;
    fps: number;
}

export interface Camera2SetFormatParameters {
    handle: number;
    params: Camera2CameraFormat;
}

export interface Camera2SetFormatCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface Camera2GetEventNotificationParameters {
    subscribe: boolean;
}

export interface Camera2GetEventNotificationCallReturn {
    returnValue: boolean;
    id?: string;
    eventType?: string;
    propertiesInfo?: Camera2CameraProperties;
    formatInfo?: Camera2CameraFormat;
    errorCode?: number;
    errorText?: string;
}

export interface Camera2GetFdParameters {
    handle: number;
}

export interface Camera2GetFdCallReturn {
    returnValue?: boolean;
    errorCode?: number;
    errorText?: string;
}
