/** luna://com.webos.media */
interface Media {
}

export interface MediaUnloadParameters {
    mediaId: string;
}

export interface MediaUnloadCallReturn {
    returnValue: boolean;
    errorCode: string;
    errorText: string;
    mediaId?: string;
}

export interface MediaNotifyForegroundParameters {
    connectionId: string;
}

export interface MediaNotifyForegroundCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface MediaNotifyBackgroundParameters {
    connectionId: string;
}

export interface MediaNotifyBackgroundCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface MediaSubscribeParameters {
    mediaId: string;
}

export interface MediaSubscribeCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    mediaId?: string;
    subscription?: string;
}

export interface MediaAttachParameters {
    mediaId: string;
}

export interface MediaAttachCallReturn {
    returnValue: boolean;
    errorCode: number;
    errorText: string;
    mediaId?: string;
}

export interface MediaPlayParameters {
    mediaId: string;
}

export interface MediaPlayCallReturn {
    returnValue: boolean;
    errorCode: number;
    errorText: string;
    mediaId?: string;
}

export interface MediaPauseParameters {
    mediaId: string;
}

export interface MediaPauseCallReturn {
    returnValue: boolean;
    errorCode: number;
    errorText: string;
    mediaId?: string;
}

export interface MediaSeekParameters {
    position: number;
    mediaId: string;
}

export interface MediaSeekCallReturn {
    returnValue: boolean;
    errorCode: number;
    errorText: string;
    mediaId?: string;
}

export interface MediaRegisterPipelineParameters {
    type: string;
    appId?: string;
}

export interface MediaRegisterPipelineCallReturn {
    connectionId: string;
    returnValue?: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface MediaUnregisterPipelineParameters {
    connectionId: string;
}

export interface MediaUnregisterPipelineCallReturn {
    returnValue: boolean;
    errorCode: number;
    errorText: string;
    mediaId?: string;
}

export interface MediaResources {
    resource: string;
    qty?: number;
    index?: number;
}

export interface MediaAcquireParameters {
    resources: MediaResources;
    connectionId: string;
}

export interface MediaAcquireCallReturn {
    returnValue: string;
    errorCode?: number;
    errorText?: string;
}

export interface MediaTryAcquireParameters {
    resources: MediaResources;
    connectionId: string;
}

export interface MediaTryAcquireCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface MediaReleaseParameters {
    resources: MediaResources;
    connectionId: string;
}

export interface MediaReleaseCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface MediaNotifyActivityParameters {
    connectionId: string;
}

export interface MediaNotifyActivityCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface MediaMediaPipelines {
    appId: string;
    pid: number;
}

export interface MediaTrackAppProcessesCallReturn {
    subscribed: boolean;
    returnValue: boolean;
    mediaPipelines: MediaMediaPipelines[];
    subscription: boolean;
}

export interface MediaProcUpdate {
    appId: string;
    pid: number;
    exec: boolean;
}

export interface MediaTrackAppProcessesSubscription {
    procUpdate: MediaProcUpdate;
}

export interface MediaUnsubscribeParameters {
    mediaId?: string;
}

export interface MediaUnsubscribeCallReturn {
    returnValue: boolean;
    errorCode: number;
    errorText: string;
    mediaId?: string;
}

export interface MediaGetActivePipelinesParameters {
    mediaId?: string;
}

export interface MediaGetActivePipelinesCallReturn {
    Id?: string;
    type?: string;
    pid?: number;
    is_managed?: boolean;
    is_foreground?: boolean;
    mediaState?: string;
    policy_state?: boolean;
    uri?: string;
    appId?: string;
    processState?: string;
    is_focus?: string;
    timestamp?: string;
    resources: MediaResources[];
    mediaId?: string;
    errorCode?: number;
    errorText?: string;
    returnValue?: boolean;
}

export interface MediaSetVolumeParameters {
    mediaId: string;
    volume: number;
}

export interface MediaSetVolumeCallReturn {
    returnValue: boolean;
    errorCode: number;
    errorText: string;
    mediaId?: string;
}

export interface MediaAcbs {
    pipelineId: string;
    playStateNow: string;
    playStateNext: string;
    isFullScreen: boolean;
    positionX: number;
    positionY: number;
    width: number;
    height: number;
}

export interface MediaGetForegroundAppInfoCallReturn {
    returnValue: boolean;
    appId: string;
    acbs: MediaAcbs[];
}

export interface MediaSetPlayRateParameters {
    playRate: number;
    mediaId: string;
    audioOutput: boolean;
}

export interface MediaSetPlayRateCallReturn {
    returnValue: boolean;
    errorCode: number;
    errorText: string;
    mediaId?: string;
}

export interface MediaStartCameraRecordParameters {
    location: string;
    format: string;
    mediaId: string;
    audio: boolean;
    audioSrc: string;
}

export interface MediaStartCameraRecordCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    mediaId: string;
}

export interface MediaStopCameraRecordParameters {
    mediaId: string;
}

export interface MediaStopCameraRecordCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    mediaId: string;
}

export interface MediaTakeCameraSnapshotParameters {
    mediaId: string;
    location: string;
    format: string;
    width: number;
    height: number;
    pictureQuality: number;
}

export interface MediaTakeCameraSnapshotCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    mediaId: string;
}
