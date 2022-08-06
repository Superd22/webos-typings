/** luna://com.webos.service.mediaindexer */
interface Mediaindexer {
}

export interface MediaindexerGetAudioListParameters {
    uri?: string;
    subscribe?: boolean;
    count?: number;
}

export interface MediaindexerAudioList {
    uri?: string;
    count?: number;
    results?: MediaindexerAudioList[];
}

export interface MediaindexerGetAudioListCallReturn {
    audioList?: MediaindexerAudioList;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    subscribed?: boolean;
}

export interface MediaindexerGetAudioListSubscription {
    returnValue: boolean;
    errorText?: string;
    errorCode?: number;
    audioList?: MediaindexerAudioList;
    subscribed?: boolean;
}

export interface MediaindexerGetAudioMetadataParameters {
    uri: string;
}

export interface MediaindexerAudioMetadata {
    uri?: string;
    type?: string;
    last_modified_date?: string;
    file_size?: number;
    file_path?: string;
    title?: string;
    duration?: number;
    thumbnail?: string;
    mime?: string;
    date_of_creation?: string;
    genre?: string;
    album?: string;
    artist?: string;
    album_artist?: string;
    track?: string;
    total_track?: string;
    sample_rate?: number;
    bit_per_sample?: string;
    channel?: number;
    lyric?: string;
    bit_rate?: number;
    hash?: string;
    dirty?: boolean;
}

export interface MediaindexerGetAudioMetadataCallReturn {
    metadata?: MediaindexerAudioMetadata[];
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface MediaindexerGetVideoListParameters {
    uri?: string;
    subscribe?: boolean;
    count?: number;
}

export interface MediaindexerVideoList {
    uri?: string;
    count?: number;
    results?: string;
}

export interface MediaindexerGetVideoListCallReturn {
    videoList?: MediaindexerVideoList;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    subscribed?: boolean;
}

export interface MediaindexerGetVideoListSubscription {
    returnValue: boolean;
    subscribed?: boolean;
    errorText?: string;
    errorCode?: number;
    videoList?: MediaindexerVideoList;
}

export interface MediaindexerGetVideoMetadataParameters {
    uri: string;
}

export interface MediaindexerVideoMetadata {
    uri?: string;
    title?: string;
    type?: string;
    last_modified_date?: string;
    file_size?: number;
    file_path?: string;
    duration?: number;
    thumbnail?: string;
    mime?: string;
    date_of_creation?: string;
    width?: number;
    height?: number;
    frame_rate?: number;
    video_codec?: string;
    audio_codec?: string;
    hash?: string;
    dirty?: boolean;
}

export interface MediaindexerGetVideoMetadataCallReturn {
    metadata?: MediaindexerVideoMetadata[];
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface MediaindexerGetImageListParameters {
    uri?: string;
    subscribe?: boolean;
    count?: number;
}

export interface MediaindexerImageList {
    uri?: string;
    count?: number;
    results?: MediaindexerImageList[];
}

export interface MediaindexerGetImageListCallReturn {
    imageList?: MediaindexerImageList;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    subscribed?: boolean;
}

export interface MediaindexerGetImageListSubscription {
    returnValue: boolean;
    subscribed?: boolean;
    errorText?: string;
    errorCode?: number;
    imageList?: MediaindexerImageList;
}

export interface MediaindexerGetImageMetadataParameters {
    uri: string;
}

export interface MediaindexerGetImageMetadataCallReturn {
    metadata?: MediaindexerImageList[];
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface MediaindexerGetMediaDbPermissionParameters {
    serviceName: string;
}

export interface MediaindexerGetMediaDbPermissionCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}
