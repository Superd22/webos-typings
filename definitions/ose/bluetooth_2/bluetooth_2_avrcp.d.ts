export interface Bluetooth2AvrcpAwaitMediaMetaDataRequestParameters {
    subscribe: boolean;
    adapterAddress?: string;
}

export interface Bluetooth2AvrcpAwaitMediaMetaDataRequestCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    subscribed: boolean;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2AvrcpAwaitMediaMetaDataRequestSubscription {
    returnValue: boolean;
    subscribed: boolean;
    address: string;
    adapterAddress: string;
    requestId: string;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2AvrcpAwaitMediaPlayStatusRequestParameters {
    subscribe: boolean;
    adapterAddress?: string;
}

export interface Bluetooth2AvrcpAwaitMediaPlayStatusRequestCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    subscribed: boolean;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2AvrcpAwaitMediaPlayStatusRequestSubscription {
    returnValue: boolean;
    subscribed: boolean;
    address: string;
    adapterAddress: string;
    requestId: string;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2AvrcpConnectParameters {
    address: string;
    subscribe?: boolean;
    adapterAddress?: string;
}

export interface Bluetooth2AvrcpConnectCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    errorText?: string;
    errorCode?: number;
    subscribed: boolean;
}

export interface Bluetooth2AvrcpConnectSubscription {
    returnValue: boolean;
    subscribed: boolean;
    disconnectByRemote: string;
    adapterAddress: string;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2AvrcpDisconnectParameters {
    address: string;
    adapterAddress?: string;
}

export interface Bluetooth2AvrcpDisconnectCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2AvrcpGetMediaMetaDataParameters {
    subscribe: boolean;
    address: string;
    adapterAddress?: string;
}

export interface Bluetooth2AvrcpGetMediaMetaDataCallReturn {
    returnValue: boolean;
    subscribed: boolean;
    address: string;
    adapterAddress: string;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2Bluetooth2MediaMetaData {
    title?: string;
    artist?: string;
    album?: string;
    genre?: string;
    trackNumber?: number;
    trackCount?: number;
    duration?: number;
}

export interface Bluetooth2AvrcpGetMediaMetaDataSubscription {
    returnValue: boolean;
    subscribed: boolean;
    address: string;
    adapterAddress: string;
    metaData: Bluetooth2Bluetooth2MediaMetaData;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AvrcpGetMediaPlayStatusParameters {
    subscribe: boolean;
    address: string;
    adapterAddress?: string;
}

export interface Bluetooth2AvrcpGetMediaPlayStatusCallReturn {
    returnValue: boolean;
    subscribed: boolean;
    address: string;
    adapterAddress: string;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2Bluetooth2PlayStatus {
    duration?: number;
    position?: number;
    status?: string;
}

export interface Bluetooth2AvrcpGetMediaPlayStatusSubscription {
    returnValue: boolean;
    subscribed: boolean;
    address: string;
    adapterAddress: string;
    playbackStatus: Bluetooth2Bluetooth2PlayStatus;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AvrcpGetPlayerApplicationSettingsParameters {
    subscribe: boolean;
    address: string;
    adapterAddress?: string;
}

export interface Bluetooth2AvrcpGetPlayerApplicationSettingsCallReturn {
    returnValue: boolean;
    subscribed: boolean;
    address: string;
    adapterAddress: string;
    errorCode?: string;
    errorText?: string;
}

export interface Bluetooth2AvrcpGetPlayerApplicationSettingsSubscription {
    returnValue: boolean;
    subscribed: boolean;
    address: string;
    adapterAddress: string;
    equalizer: string;
    repeat: string;
    shuffle: string;
    scan: string;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AvrcpGetPlayerInfoParameters {
    adapterAddress?: string;
    address: string;
    subscribe: boolean;
}

export interface Bluetooth2Bluetooth2AvrcpPlayerInfo {
    name: string;
    type: string;
    addressed: boolean;
    browsable: boolean;
    searchable: boolean;
    playlistPath: string;
}

export interface Bluetooth2AvrcpGetPlayerInfoCallReturn {
    adapterAddress: string;
    address: string;
    subscribed: boolean;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    playerInfo?: Bluetooth2Bluetooth2AvrcpPlayerInfo[];
}

export interface Bluetooth2AvrcpGetPlayerInfoSubscription {
    adapterAddress: string;
    address: string;
    returnValue: boolean;
    subscribed: boolean;
    errorCode?: number;
    errorText?: string;
    playerInfo?: Bluetooth2Bluetooth2AvrcpPlayerInfo[];
}

export interface Bluetooth2AvrcpGetRemoteVolumeParameters {
    subscribe: boolean;
    address?: string;
    adapterAddress?: string;
}

export interface Bluetooth2AvrcpGetRemoteVolumeCallReturn {
    returnValue: string;
    subscribed: boolean;
    adapterAddress: string;
    address?: string;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AvrcpGetRemoteVolumeSubscription {
    returnValue: boolean;
    subscribed: boolean;
    adapterAddress: string;
    address?: string;
    volume: number;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AvrcpGetStatusParameters {
    address: string;
    subscribe?: boolean;
    adapterAddress?: string;
}

export interface Bluetooth2AvrcpGetStatusCallReturn {
    returnValue: boolean;
    connecting: boolean;
    connected: boolean;
    adapterAddress: string;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2AvrcpGetStatusSubscription {
    returnValue: boolean;
    subscribed: boolean;
    connecting: boolean;
    connected: boolean;
    adapterAddress: string;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2AvrcpInternalDisableParameters {
    role?: string;
    adapterAddress?: string;
}

export interface Bluetooth2AvrcpInternalDisableCallReturn {
    adapterAddress: string;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AvrcpInternalEnableParameters {
    role?: string;
    adapterAddress?: string;
}

export interface Bluetooth2AvrcpInternalEnableCallReturn {
    adapterAddress: string;
    returnValue: boolean;
    errorCode?: boolean;
    errorText?: string;
}

export interface Bluetooth2AvrcpInternalGetRemoteFeaturesParameters {
    adapterAddress?: string;
    address: string;
}

export interface Bluetooth2Bluetooth2AvrcpRemoteFeatureInfo {
    role: string;
    remoteFeature: string;
}

export interface Bluetooth2AvrcpInternalGetRemoteFeaturesCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    address: string;
    remoteFeatures: Bluetooth2Bluetooth2AvrcpRemoteFeatureInfo[];
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AvrcpInternalGetSupportedNotificationEventsParameters {
    adapterAddress?: string;
    address: string;
    subscribe: boolean;
}

export interface Bluetooth2AvrcpInternalGetSupportedNotificationEventsCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    subscribed: boolean;
    address: string;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AvrcpInternalGetSupportedNotificationEventsSubscription {
    returnValue: boolean;
    subscribed: boolean;
    address: string;
    adapterAddress: string;
    supportedNotificationEvents: number[];
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AvrcpReceivePassThroughCommandParameters {
    adapterAddress?: string;
    address: string;
    subscribe: boolean;
}

export interface Bluetooth2AvrcpReceivePassThroughCommandCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    subscribed: boolean;
    address: string;
    errorCode?: boolean;
    errorText?: string;
}

export interface Bluetooth2AvrcpReceivePassThroughCommandSubscription {
    returnValue: boolean;
    subscribed: boolean;
    address: string;
    adapterAddress: string;
    keyCode: string;
    keyStatus: string;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AvrcpSendPassThroughCommandParameters {
    keyCode: string;
    keyStatus: string;
    address: string;
    adapterAddress?: string;
}

export interface Bluetooth2AvrcpSendPassThroughCommandCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    address: string;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AvrcpSetAbsoluteVolumeParameters {
    volume: number;
    address: string;
    adapterAddress?: string;
}

export interface Bluetooth2AvrcpSetAbsoluteVolumeCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    address: string;
    errorCode?: string;
    errorText?: string;
}

export interface Bluetooth2AvrcpSetPlayerApplicationSettingsParameters {
    address: string;
    adapterAddress?: string;
    equalizer?: string;
    repeat?: string;
    shuffle?: string;
    scan?: string;
}

export interface Bluetooth2AvrcpSetPlayerApplicationSettingsCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    address: string;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AvrcpSupplyMediaMetaDataParameters {
    requestId: string;
    metaData: Bluetooth2Bluetooth2MediaMetaData;
    adapterAddress?: string;
}

export interface Bluetooth2AvrcpSupplyMediaMetaDataCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    requestId: string;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2AvrcpSupplyMediaPlayStatusParameters {
    requestId: string;
    playbackStatus: Bluetooth2Bluetooth2PlayStatus;
    adapterAddress?: string;
}

export interface Bluetooth2AvrcpSupplyMediaPlayStatusCallReturn {
    returnValue: boolean;
    adapterAddress: string;
    requestId: string;
    errorText?: string;
    errorCode?: number;
}

export interface Bluetooth2AvrcpBrowseGetCurrentFolderParameters {
    adapterAddress?: string;
    address: string;
    subscribe?: boolean;
}

export interface Bluetooth2AvrcpBrowseGetCurrentFolderCallReturn {
    adapterAddress?: string;
    address?: string;
    returnValue: boolean;
    subscribed: boolean;
    folderName?: string;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AvrcpBrowseGetCurrentFolderSubscription {
    adapterAddress: string;
    address: string;
    returnValue: boolean;
    subscribed: boolean;
    folderName?: string;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AvrcpBrowseGetNumberOfItemsParameters {
    adapterAddress?: string;
    address: string;
}

export interface Bluetooth2AvrcpBrowseGetNumberOfItemsCallReturn {
    adapterAddress: string;
    address: string;
    returnValue: boolean;
    numberOfItems?: number;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AvrcpBrowseGetFolderItemsParameters {
    adapterAddress?: string;
    address: string;
    startIndex: number;
    endIndex: number;
}

export interface Bluetooth2Bluetooth2AvrcpFolderItem {
    name: string;
    path: string;
    type: string;
    playable: boolean;
    metaData: Bluetooth2Bluetooth2MediaMetaData;
}

export interface Bluetooth2AvrcpBrowseGetFolderItemsCallReturn {
    adapterAddress: string;
    address: string;
    returnValue: boolean;
    folderItems?: Bluetooth2Bluetooth2AvrcpFolderItem[];
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AvrcpBrowseSearchParameters {
    adapterAddress?: string;
    address: string;
    searchString: string;
}

export interface Bluetooth2AvrcpBrowseSearchCallReturn {
    adapterAddress: string;
    address: string;
    returnValue: boolean;
    searchResult?: string;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AvrcpBrowsePlayItemParameters {
    adapterAddress?: string;
    address: string;
    itemPath: string;
}

export interface Bluetooth2AvrcpBrowsePlayItemCallReturn {
    adapterAddress?: string;
    address: string;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AvrcpBrowseAddToNowPlayingParameters {
    adapterAddress?: string;
    address: string;
    itemPath: string;
}

export interface Bluetooth2AvrcpBrowseAddToNowPlayingCallReturn {
    adapterAddress: string;
    address: string;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AvrcpBrowseChangePathParameters {
    adapterAddress?: string;
    address: string;
    itemPath: string;
}

export interface Bluetooth2AvrcpBrowseChangePathCallReturn {
    adapterAddress: string;
    address: string;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface Bluetooth2AvrcpNotifyMediaPlayStatusParameters {
    adapterAddress?: string;
    address: string;
    playbackStatus: Bluetooth2Bluetooth2PlayStatus;
}

export interface Bluetooth2AvrcpNotifyMediaPlayStatusCallReturn {
    adapterAddress: string;
    address: string;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}
