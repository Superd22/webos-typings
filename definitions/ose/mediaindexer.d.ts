/** luna://com.webos.service.mediaindexer */
interface Mediaindexer {
}

/** ACG: mediaindexer.operationDescriptionGets the available audio file list included in attached devices.Note: If the uri is specified, the audio file list for specified uri is provided. Else the audio file list for all attached devices is provided.Parameters */
export interface MediaindexerGetAudioListParameters {
    /** Indicates the uri of the device mounted on the target that contains the source path of the audio files.The format is given as: <protocol name>://<device uuid>Example: msc://D94A-BE4D */
    uri?: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedDefault: falseNote: Notifications are not provided when an entry is removed from the list (physical devices are detached). In this case, the user is notified from other external service such as physical device manager. */
    subscribe?: boolean;
    /** Limits the number of entries in the returned audio file list.Default: 500 */
    count?: number;
}

/** Includes information about the uri of the devices, total number of audio files inside and requested result of audio files. */
export interface MediaindexerAudioList {
    /** Indicates the uri of the device mounted on the target. */
    uri?: string;
    /** Indicates the number of audio files included in the specified device. */
    count?: number;
    /** Contains the information of each audio file provided as an array format. */
    results?: MediaindexerAudioList[];
}

/** ACG: mediaindexer.operationDescriptionGets the available audio file list included in attached devices.Note: If the uri is specified, the audio file list for specified uri is provided. Else the audio file list for all attached devices is provided.ParametersNameRequiredTypeDescriptionuriOptionalStringIndicates the uri of the device mounted on the target that contains the source path of the audio files.The format is given as: <protocol name>://<device uuid>Example: msc://D94A-BE4DsubscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedDefault: falseNote: Notifications are not provided when an entry is removed from the list (physical devices are detached). In this case, the user is notified from other external service such as physical device manager.countOptionalNumberLimits the number of entries in the returned audio file list.Default: 500Call Returns */
export interface MediaindexerGetAudioListCallReturn {
    /** Indicates the supported device types. */
    audioList?: MediaindexerAudioList;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the operation. Note: Currently, it returns 0 even when the returnValue is true and returns -1 if JSON parsing fails. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation.Note: Currently, it returns "No Error" even when the returnValue is true. If JSON parsing fails, then errorText is updated accordingly. */
    errorText?: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed?: boolean;
}

/** ACG: mediaindexer.operationDescriptionGets the available audio file list included in attached devices.Note: If the uri is specified, the audio file list for specified uri is provided. Else the audio file list for all attached devices is provided.ParametersNameRequiredTypeDescriptionuriOptionalStringIndicates the uri of the device mounted on the target that contains the source path of the audio files.The format is given as: <protocol name>://<device uuid>Example: msc://D94A-BE4DsubscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedDefault: falseNote: Notifications are not provided when an entry is removed from the list (physical devices are detached). In this case, the user is notified from other external service such as physical device manager.countOptionalNumberLimits the number of entries in the returned audio file list.Default: 500Call ReturnsNameRequiredTypeDescriptionaudioListOptionalObject: audioListIndicates the supported device types.returnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.errorCodeOptionalNumberThe error code for the operation. Note: Currently, it returns 0 even when the returnValue is true and returns -1 if JSON parsing fails.errorTextOptionalStringIndicates the reason for the failure of the operation.Note: Currently, it returns "No Error" even when the returnValue is true. If JSON parsing fails, then errorText is updated accordingly.subscribedOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Subscription Returns */
export interface MediaindexerGetAudioListSubscription {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the reason for the failure of the operation.Note: Currently, it returns "No Error" even when the returnValue is true. If JSON parsing fails, then errorText is updated accordingly. */
    errorText?: string;
    /** The error code for the operation.Note: Currently, it returns 0 even when the returnValue is true and returns -1 if JSON parsing fails. */
    errorCode?: number;
    /** Specifies supported device types. */
    audioList?: MediaindexerAudioList;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed?: boolean;
}

/** ACG: mediaindexer.operationDescriptionGets the detailed meta data information of the specified uri for the given audio file.Parameters */
export interface MediaindexerGetAudioMetadataParameters {
    /** Indicates the uri of the audio file.Example: msc://D94A-BE4D/tmp/usb/sdg/sdg1/SampleAudio.mp3 */
    uri: string;
}

/** Contains the information about the AudioList, and also provides detailed information that are not included in AudioList. */
export interface MediaindexerAudioMetadata {
    /** Indicates the uri of the audio file. */
    uri?: string;
    /** Indicates the type of the file.Possible values are :audiovideoimage */
    type?: string;
    /** Contains the last file modification date information. */
    last_modified_date?: string;
    /** Indicates the file size in bytes. */
    file_size?: number;
    /** Indicates the accessible uri of the audio file (for playback usage). */
    file_path?: string;
    /** Indicates the title information of audio file. */
    title?: string;
    /** Indicates the duration of the given video file (unit : second). */
    duration?: number;
    /** Contains the thumbnail path information of the corresponding audio file. */
    thumbnail?: string;
    /** Indicates the mime type information of the audio file. */
    mime?: string;
    /** Contains the information of the recording date for the specified audio file. */
    date_of_creation?: string;
    /** Indicates the genre of the specified audio file. */
    genre?: string;
    /** Contains the album information for the specific audio file. */
    album?: string;
    /** Contains the artist information for the specified audio file. */
    artist?: string;
    /** Contains the album artist information for the specified audio file.Note: Distinct from artists for the tracks that constitute a release. Example: Various Artists */
    album_artist?: string;
    /** Contains the number information for the specified audio file. */
    track?: string;
    /** Indicates the total tracks of a release that belong to the specified audio file. */
    total_track?: string;
    /** Contains the sampling rate information of the audio file. */
    sample_rate?: number;
    /** Indicates the number of bits of information in each sample for the specified audio file. */
    bit_per_sample?: string;
    /** Contains the information of the number of channels for a specified audio file. */
    channel?: number;
    /** Contains the lyric information for the specified audio file. */
    lyric?: string;
    /** Contains the bitrate information for the specified audio file. */
    bit_rate?: number;
    /** Indicates the value that specifies if an audio file has been modified or not.Note: The property is intended for internal usage only. */
    hash?: string;
    /** Indicates if the device includes audio files.Possible values are:true: detachedfalse: attachedNote: The property is intended for internal usage only. */
    dirty?: boolean;
}

/** ACG: mediaindexer.operationDescriptionGets the detailed meta data information of the specified uri for the given audio file.ParametersNameRequiredTypeDescriptionuriRequiredStringIndicates the uri of the audio file.Example: msc://D94A-BE4D/tmp/usb/sdg/sdg1/SampleAudio.mp3Call Returns */
export interface MediaindexerGetAudioMetadataCallReturn {
    /** Indicates the meta data information of specified audio file. */
    metadata?: MediaindexerAudioMetadata[];
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the operation.Note: Currently, it returns 0 even when the returnValue is true and returns -1 if JSON parsing fails. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation.Note: Currently, it returns "No Error" even when the returnValue is true. If JSON parsing fails, then errorText is updated accordingly. */
    errorText?: string;
}

/** ACG: mediaindexer.operationDescriptionGets the available video files list included in the attached devices.Note: If the uri is specified, the video file list for specified uri is provided. Else the video file list for all attached devices is provided.Parameters */
export interface MediaindexerGetVideoListParameters {
    /** Specifies uri of device mounted on target that provided video files belongs to.Format: <protocol name>://<device uuid>.Example: msc://D94A-BE4D */
    uri?: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedDefault: falseNote: Notifications are not provided when an entry is removed from the list (physical devices are detached). In this case, the user is notified from other external service such as physical device manager. */
    subscribe?: boolean;
    /** Limits the number of entries in the returned video file list.Default: 500 */
    count?: number;
}

/** Includes information about the uri of devices, total number of video files inside and requested result of the video files. */
export interface MediaindexerVideoList {
    /** Indicates the uri of the device mounted on the target. */
    uri?: string;
    /** Indicates the number of video files included in the specified device. */
    count?: number;
    /** Contains the information of each audio file provided in an array format. */
    results?: string;
}

/** ACG: mediaindexer.operationDescriptionGets the available video files list included in the attached devices.Note: If the uri is specified, the video file list for specified uri is provided. Else the video file list for all attached devices is provided.ParametersNameRequiredTypeDescriptionuriOptionalStringSpecifies uri of device mounted on target that provided video files belongs to.Format: <protocol name>://<device uuid>.Example: msc://D94A-BE4DsubscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedDefault: falseNote: Notifications are not provided when an entry is removed from the list (physical devices are detached). In this case, the user is notified from other external service such as physical device manager.countOptionalNumberLimits the number of entries in the returned video file list.Default: 500Call Returns */
export interface MediaindexerGetVideoListCallReturn {
    /** Indicates the supported device types. */
    videoList?: MediaindexerVideoList;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the operation.Note: Currently, it returns 0 even when the returnValue is true and returns -1 if JSON parsing fails. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation.Note: Currently, it returns "No Error" even when the returnValue is true. If JSON parsing fails, then errorText is updated accordingly. */
    errorText?: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed?: boolean;
}

/** ACG: mediaindexer.operationDescriptionGets the available video files list included in the attached devices.Note: If the uri is specified, the video file list for specified uri is provided. Else the video file list for all attached devices is provided.ParametersNameRequiredTypeDescriptionuriOptionalStringSpecifies uri of device mounted on target that provided video files belongs to.Format: <protocol name>://<device uuid>.Example: msc://D94A-BE4DsubscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedDefault: falseNote: Notifications are not provided when an entry is removed from the list (physical devices are detached). In this case, the user is notified from other external service such as physical device manager.countOptionalNumberLimits the number of entries in the returned video file list.Default: 500Call ReturnsNameRequiredTypeDescriptionvideoListOptionalObject: videoListIndicates the supported device types.returnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.errorCodeOptionalNumberThe error code for the operation.Note: Currently, it returns 0 even when the returnValue is true and returns -1 if JSON parsing fails.errorTextOptionalStringIndicates the reason for the failure of the operation.Note: Currently, it returns "No Error" even when the returnValue is true. If JSON parsing fails, then errorText is updated accordingly.subscribedOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Subscription Returns */
export interface MediaindexerGetVideoListSubscription {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed?: boolean;
    /** Indicates the reason for the failure of the operation.Note: Currently, it returns "No Error" even when the returnValue is true. If JSON parsing fails, then errorText is updated accordingly. */
    errorText?: string;
    /** The error code for the operation.Note: Currently, it returns 0 even when the returnValue is true and returns -1 if JSON parsing fails. */
    errorCode?: number;
    /** Indicates the supported device types. */
    videoList?: MediaindexerVideoList;
}

/** ACG: mediaindexer.operationDescriptionGets the detailed meta data information for the specified uri of the video file.Parameters */
export interface MediaindexerGetVideoMetadataParameters {
    /** Indicates the uri of the video file.Example: msc://D94A-BE4D/tmp/usb/sdg/sdg1/SampleVideo.mp4 */
    uri: string;
}

/** Contains the information about the VideoList, provides information about the video files that are not included in the VideoList. */
export interface MediaindexerVideoMetadata {
    /** Indicates the uri of the given video file. */
    uri?: string;
    /** Indicates the title of the given video file. */
    title?: string;
    /** Indicates the type of the file.Possible values are :audiovideoimage */
    type?: string;
    /** Contains the last file modification date information. */
    last_modified_date?: string;
    /** Indicates the file size in bytes. */
    file_size?: number;
    /** Indicates the accessible uri of the video file (for playback usage). */
    file_path?: string;
    /** Indicates the duration information of the video file (unit : second). */
    duration?: number;
    /** Contains the thumbnail path information of the corresponding video file. */
    thumbnail?: string;
    /** Indicates the mime type information of the given video file. */
    mime?: string;
    /** Indicates the date of creation for the given image file. */
    date_of_creation?: string;
    /** Indicates the width of the given video file. */
    width?: number;
    /** Indicates the height of the given video file. */
    height?: number;
    /** Indicates the frame rate information of the given video file. */
    frame_rate?: number;
    /** Indicates the video codec information. */
    video_codec?: string;
    /** Indicates the audio codec information. */
    audio_codec?: string;
    /** Indicates the value that specifies if an audio file has been modified or not.Note: The property is intended for internal usage only. */
    hash?: string;
    /** Indicates if the device includes audio files.Possible values are:true: detachedfalse: attachedNote: The property is intended for internal usage only. */
    dirty?: boolean;
}

/** ACG: mediaindexer.operationDescriptionGets the detailed meta data information for the specified uri of the video file.ParametersNameRequiredTypeDescriptionuriRequiredStringIndicates the uri of the video file.Example: msc://D94A-BE4D/tmp/usb/sdg/sdg1/SampleVideo.mp4Call Returns */
export interface MediaindexerGetVideoMetadataCallReturn {
    /** Indicates the meta data information of specified video file. */
    metadata?: MediaindexerVideoMetadata[];
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the operation.Note: Currently, it returns 0 even when the returnValue is true and returns -1 if JSON parsing fails. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation.Note: Currently, it returns "No Error" even when the returnValue is true. If JSON parsing fails, then errorText is updated accordingly. */
    errorText?: string;
}

/** ACG: mediaindexer.operationDescriptionGets all the available image file list included in the attached devices.Note: If the uri is specified, the image file list for specified uri is provided. Else the image file list for all attached devices is provided.Parameters */
export interface MediaindexerGetImageListParameters {
    /** Indicates the uri of the device mounted on the target that contains the source path of the image files.Format: <protocol name>://<device uuid>.Example: msc://D94A-BE4D */
    uri?: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedDefault: falseNote: Notifications are not provided when an entry is removed from the list (physical devices are detached). In this case, the user is notified from other external service such as physical device manager. */
    subscribe?: boolean;
    /** Limits the number of entries in the returned image file list.Default: 500 */
    count?: number;
}

/** Includes information about uri of the devices, total number of image files inside and requested result of the image files. */
export interface MediaindexerImageList {
    /** Indicates the uri of the device mounted on the target. */
    uri?: string;
    /** Indicates the number of audio files included in the specified device. */
    count?: number;
    /** Contains the information of each audio file provided in an array format. */
    results?: MediaindexerImageList[];
}

/** ACG: mediaindexer.operationDescriptionGets all the available image file list included in the attached devices.Note: If the uri is specified, the image file list for specified uri is provided. Else the image file list for all attached devices is provided.ParametersNameRequiredTypeDescriptionuriOptionalStringIndicates the uri of the device mounted on the target that contains the source path of the image files.Format: <protocol name>://<device uuid>.Example: msc://D94A-BE4DsubscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedDefault: falseNote: Notifications are not provided when an entry is removed from the list (physical devices are detached). In this case, the user is notified from other external service such as physical device manager.countOptionalNumberLimits the number of entries in the returned image file list.Default: 500Call Returns */
export interface MediaindexerGetImageListCallReturn {
    /** Specifies the supported device types. See imageList for details. */
    imageList?: MediaindexerImageList;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the operation.Note: Currently, it returns 0 even when the returnValue is true and returns -1 if JSON parsing fails. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation.Note: Currently, it returns "No Error" even when the returnValue is true. If JSON parsing fails, then errorText is updated accordingly. */
    errorText?: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed?: boolean;
}

/** ACG: mediaindexer.operationDescriptionGets all the available image file list included in the attached devices.Note: If the uri is specified, the image file list for specified uri is provided. Else the image file list for all attached devices is provided.ParametersNameRequiredTypeDescriptionuriOptionalStringIndicates the uri of the device mounted on the target that contains the source path of the image files.Format: <protocol name>://<device uuid>.Example: msc://D94A-BE4DsubscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedDefault: falseNote: Notifications are not provided when an entry is removed from the list (physical devices are detached). In this case, the user is notified from other external service such as physical device manager.countOptionalNumberLimits the number of entries in the returned image file list.Default: 500Call ReturnsNameRequiredTypeDescriptionimageListOptionalObject: imageListSpecifies the supported device types. See imageList for details.returnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.errorCodeOptionalNumberThe error code for the operation.Note: Currently, it returns 0 even when the returnValue is true and returns -1 if JSON parsing fails.errorTextOptionalStringIndicates the reason for the failure of the operation.Note: Currently, it returns "No Error" even when the returnValue is true. If JSON parsing fails, then errorText is updated accordingly.subscribedOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Subscription Returns */
export interface MediaindexerGetImageListSubscription {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed?: boolean;
    /** Indicates the reason for the failure of the operation.Note: Currently, it returns "No Error" even when the returnValue is true. If JSON parsing fails, then errorText is updated accordingly. */
    errorText?: string;
    /** The error code for the operation.Note: Currently, it returns 0 even when the returnValue is true and returns -1 if JSON parsing fails. */
    errorCode?: number;
    /** Indicates the supported device types. See imageList for details. */
    imageList?: MediaindexerImageList;
}

/** ACG: mediaindexer.operationDescriptionGets the detailed meta data information of specified uri of the image file.Parameters */
export interface MediaindexerGetImageMetadataParameters {
    /** Indicates the uri of the audio file.Example: msc://D94A-BE4D/tmp/usb/sdg/sdg1/SampleImage.jpg */
    uri: string;
}

/** ACG: mediaindexer.operationDescriptionGets the detailed meta data information of specified uri of the image file.ParametersNameRequiredTypeDescriptionuriRequiredStringIndicates the uri of the audio file.Example: msc://D94A-BE4D/tmp/usb/sdg/sdg1/SampleImage.jpgCall Returns */
export interface MediaindexerGetImageMetadataCallReturn {
    /** Indicates the metadata information of specified audio file. */
    metadata?: MediaindexerImageList[];
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the operation.Note: Currently, it returns 0 even when the returnValue is true and returns -1 if JSON parsing fails. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation.Note: Currently, it returns "No Error" even when the returnValue is true. If JSON parsing fails, then errorText is updated accordingly. */
    errorText?: string;
}

/** ACG: mediaindexer.operationDescriptionEnables the external services or applications to acquire, access permission of the DB managed by the media indexer service.Parameters */
export interface MediaindexerGetMediaDbPermissionParameters {
    /** Indicates the name of the external services or the applications to access the DB of the media indexer service. */
    serviceName: string;
}

/** ACG: mediaindexer.operationDescriptionEnables the external services or applications to acquire, access permission of the DB managed by the media indexer service.ParametersNameRequiredTypeDescriptionserviceNameRequiredStringIndicates the name of the external services or the applications to access the DB of the media indexer service.Call Returns */
export interface MediaindexerGetMediaDbPermissionCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. */
    errorText?: string;
}
