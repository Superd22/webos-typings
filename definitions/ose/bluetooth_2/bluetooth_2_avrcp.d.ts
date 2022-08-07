/** ACG: bluetooth.managementDescriptionAwaits incoming media metadata requests from remote devices. This method is available only for TG (Target).The method just listens the requests from CT (Controller) and lets the caller of the method in TG know the requests.We assume that the caller already knows the media or playback status information or can get it from the other services such as media or music service.The caller in TG is expected to send proper information by using the avrcp/supplyMediaMetaData method to CT after receiving the request returned from the avrcp/awaitMediaMetaDataRequest method.In AVRCP, metadata attributes for the currently playing media element can be retrieved by the CT by using the GetElementAttributes command. This allows the CT to request a specific set, or all attributes from the TG. These attributes include such as title and artist. The CT also might be interested to know the current status of a media track or when media track is changed, so that new media information can be displayed on the controller’s display.The CT could do one of:i) Querying for play status orii) Registering with the TG to receive play status notifications.The TG then sends a notification PDU when a status is changed if the CT had registered for that change.Note: Currently, this method is focusing on only TG operations which are triggered by CT requests or queries. The CT operations and TG notification by registration of CT will be added later in the same category.Parameters */
export interface Bluetooth2AvrcpAwaitMediaMetaDataRequestParameters {
    /** Indicates if subscribed for notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Note: The caller must subscribe to this method. */
    subscribe: boolean;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.managementDescriptionAwaits incoming media metadata requests from remote devices. This method is available only for TG (Target).The method just listens the requests from CT (Controller) and lets the caller of the method in TG know the requests.We assume that the caller already knows the media or playback status information or can get it from the other services such as media or music service.The caller in TG is expected to send proper information by using the avrcp/supplyMediaMetaData method to CT after receiving the request returned from the avrcp/awaitMediaMetaDataRequest method.In AVRCP, metadata attributes for the currently playing media element can be retrieved by the CT by using the GetElementAttributes command. This allows the CT to request a specific set, or all attributes from the TG. These attributes include such as title and artist. The CT also might be interested to know the current status of a media track or when media track is changed, so that new media information can be displayed on the controller’s display.The CT could do one of:i) Querying for play status orii) Registering with the TG to receive play status notifications.The TG then sends a notification PDU when a status is changed if the CT had registered for that change.Note: Currently, this method is focusing on only TG operations which are triggered by CT requests or queries. The CT operations and TG notification by registration of CT will be added later in the same category.ParametersNameRequiredTypeDescriptionsubscribeRequiredBooleanIndicates if subscribed for notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Note: The caller must subscribe to this method.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call Returns */
export interface Bluetooth2AvrcpAwaitMediaMetaDataRequestCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Note: subscribed will always contain true since subscription ends only when the client chooses to close it. */
    subscribed: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}

/** ACG: bluetooth.managementDescriptionAwaits incoming media metadata requests from remote devices. This method is available only for TG (Target).The method just listens the requests from CT (Controller) and lets the caller of the method in TG know the requests.We assume that the caller already knows the media or playback status information or can get it from the other services such as media or music service.The caller in TG is expected to send proper information by using the avrcp/supplyMediaMetaData method to CT after receiving the request returned from the avrcp/awaitMediaMetaDataRequest method.In AVRCP, metadata attributes for the currently playing media element can be retrieved by the CT by using the GetElementAttributes command. This allows the CT to request a specific set, or all attributes from the TG. These attributes include such as title and artist. The CT also might be interested to know the current status of a media track or when media track is changed, so that new media information can be displayed on the controller’s display.The CT could do one of:i) Querying for play status orii) Registering with the TG to receive play status notifications.The TG then sends a notification PDU when a status is changed if the CT had registered for that change.Note: Currently, this method is focusing on only TG operations which are triggered by CT requests or queries. The CT operations and TG notification by registration of CT will be added later in the same category.ParametersNameRequiredTypeDescriptionsubscribeRequiredBooleanIndicates if subscribed for notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Note: The caller must subscribe to this method.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.adapterAddressRequiredStringIndicates the address of the adapter.subscribedRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Note: subscribed will always contain true since subscription ends only when the client chooses to close it.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details.errorCodeOptionalNumberThe error code for the failed operation.Subscription Returns */
export interface Bluetooth2AvrcpAwaitMediaMetaDataRequestSubscription {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedNote: subscribed will always contain true since subscription ends only when the client chooses to close it. */
    subscribed: boolean;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the unique ID of a request.Note: The format of requestId is "nnn", 3 digit number. */
    requestId: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}

/** ACG: bluetooth.managementDescriptionAwaits the incoming media play status requests from remote devices. This method is available only for the  TG (Target).The avrcp/awaitMediaPlayStatusRequest method used for the TG just listens to the requests from CT (Controller) and lets the caller of the method in TG know the requests.We assume that the caller already knows the media or playback status information or can get it from the other services such as media or music service.The caller in TG is expected to send the proper information by using avrcp/supplyMediaPlayStatus method to CT after receiving the request returned from the avrcp/awaitMediaPlayStatusRequest method.Parameters */
export interface Bluetooth2AvrcpAwaitMediaPlayStatusRequestParameters {
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Note: The caller must subscribe to this method. */
    subscribe: boolean;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.managementDescriptionAwaits the incoming media play status requests from remote devices. This method is available only for the  TG (Target).The avrcp/awaitMediaPlayStatusRequest method used for the TG just listens to the requests from CT (Controller) and lets the caller of the method in TG know the requests.We assume that the caller already knows the media or playback status information or can get it from the other services such as media or music service.The caller in TG is expected to send the proper information by using avrcp/supplyMediaPlayStatus method to CT after receiving the request returned from the avrcp/awaitMediaPlayStatusRequest method.ParametersNameRequiredTypeDescriptionsubscribeRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Note: The caller must subscribe to this method.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call Returns */
export interface Bluetooth2AvrcpAwaitMediaPlayStatusRequestCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Note: subscribed will always contain true since subscription ends only when the client chooses to close it. */
    subscribed: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}

/** ACG: bluetooth.managementDescriptionAwaits the incoming media play status requests from remote devices. This method is available only for the  TG (Target).The avrcp/awaitMediaPlayStatusRequest method used for the TG just listens to the requests from CT (Controller) and lets the caller of the method in TG know the requests.We assume that the caller already knows the media or playback status information or can get it from the other services such as media or music service.The caller in TG is expected to send the proper information by using avrcp/supplyMediaPlayStatus method to CT after receiving the request returned from the avrcp/awaitMediaPlayStatusRequest method.ParametersNameRequiredTypeDescriptionsubscribeRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Note: The caller must subscribe to this method.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.adapterAddressRequiredStringIndicates the address of the adapter.subscribedRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Note: subscribed will always contain true since subscription ends only when the client chooses to close it.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details.errorCodeOptionalNumberThe error code for the failed operation.Subscription Returns */
export interface Bluetooth2AvrcpAwaitMediaPlayStatusRequestSubscription {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedNote: subscribed will always contain true since subscription ends only when the client chooses to close it. */
    subscribed: boolean;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the unique ID of a request.Note: The format of requestId is "nnn", 3 digit number. */
    requestId: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}

/** ACG: bluetooth.managementDescriptionOpens an AVRCP connection to a remote Bluetooth device.Parameters */
export interface Bluetooth2AvrcpConnectParameters {
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribe?: boolean;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.managementDescriptionOpens an AVRCP connection to a remote Bluetooth device.ParametersNameRequiredTypeDescriptionaddressRequiredStringIndicates the address (bdaddr) of the remote device.subscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call Returns */
export interface Bluetooth2AvrcpConnectCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications (will be true until the final response is sent by the service before stopping.)false: Not subscribed. */
    subscribed: boolean;
}

/** ACG: bluetooth.managementDescriptionOpens an AVRCP connection to a remote Bluetooth device.ParametersNameRequiredTypeDescriptionaddressRequiredStringIndicates the address (bdaddr) of the remote device.subscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.adapterAddressRequiredStringIndicates the address of the adapter.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes" section of this method for details.errorCodeOptionalNumberThe error code for the failed operation.subscribedRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications (will be true until the final response is sent by the service before stopping.)false: Not subscribed.Subscription Returns */
export interface Bluetooth2AvrcpConnectSubscription {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed: boolean;
    /** Indicates whether the remote device or the local user initiated the disconnection.Possible values are:true: Remote device initiated the disconnection.false: Local user initiated the disconnection. */
    disconnectByRemote: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}

/** ACG: bluetooth.managementDescriptionDrops the connection to the given remote device on the AVRCP profile.Parameters */
export interface Bluetooth2AvrcpDisconnectParameters {
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.managementDescriptionDrops the connection to the given remote device on the AVRCP profile.ParametersNameRequiredTypeDescriptionaddressRequiredStringIndicates the address (bdaddr) of the remote device.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call Returns */
export interface Bluetooth2AvrcpDisconnectCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}

/** ACG: bluetooth.managementDescriptionGets media metadata of the target from remote devices connected via AVRCP 1.3 profile.Parameters */
export interface Bluetooth2AvrcpGetMediaMetaDataParameters {
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedNote: The caller must subscribe to this method. */
    subscribe: boolean;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.managementDescriptionGets media metadata of the target from remote devices connected via AVRCP 1.3 profile.ParametersNameRequiredTypeDescriptionsubscribeRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedNote: The caller must subscribe to this method.addressRequiredStringIndicates the address (bdaddr) of the remote device.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call Returns */
export interface Bluetooth2AvrcpGetMediaMetaDataCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed */
    subscribed: boolean;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** Contains information about a media metadata value. */
export interface Bluetooth2Bluetooth2MediaMetaData {
    /** Indicates the title of the media. */
    title?: string;
    /** Indicates the name of the artist. */
    artist?: string;
    /** Indicates the name of album. */
    album?: string;
    /** Indicates the genre of the media. */
    genre?: string;
    /** Indicates the track number of the media. */
    trackNumber?: number;
    /** Indicates the total number of tracks in the album. */
    trackCount?: number;
    /** Indicates the playing time of the media in milliseconds. */
    duration?: number;
}

/** ACG: bluetooth.managementDescriptionGets media metadata of the target from remote devices connected via AVRCP 1.3 profile.ParametersNameRequiredTypeDescriptionsubscribeRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedNote: The caller must subscribe to this method.addressRequiredStringIndicates the address (bdaddr) of the remote device.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.subscribedRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribedaddressRequiredStringIndicates the address (bdaddr) of the remote device.adapterAddressRequiredStringIndicates the address of the adapter.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes" section of this method for details.Subscription Returns */
export interface Bluetooth2AvrcpGetMediaMetaDataSubscription {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed: boolean;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the metaData of the media. */
    metaData: Bluetooth2Bluetooth2MediaMetaData;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.managementDescriptionGets the media metadata of the target from remote devices connected via AVRCP 1.3 profile.Parameters */
export interface Bluetooth2AvrcpGetMediaPlayStatusParameters {
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Note: The caller must subscribe to this method. */
    subscribe: boolean;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.managementDescriptionGets the media metadata of the target from remote devices connected via AVRCP 1.3 profile.ParametersNameRequiredTypeDescriptionsubscribeRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Note: The caller must subscribe to this method.addressRequiredStringIndicates the address (bdaddr) of the remote device.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call Returns */
export interface Bluetooth2AvrcpGetMediaPlayStatusCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed: boolean;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** Contains the information about the media playstatus value. */
export interface Bluetooth2Bluetooth2PlayStatus {
    /** Indicates the number representing the current track length in milliseconds. */
    duration?: number;
    /** Indicates the number representing the current playing time in milliseconds. */
    position?: number;
    /** Indicates the string representing the play status.Possible values are:stoppedplayingpausedfwd_seekrev_seek, error. */
    status?: string;
}

/** ACG: bluetooth.managementDescriptionGets the media metadata of the target from remote devices connected via AVRCP 1.3 profile.ParametersNameRequiredTypeDescriptionsubscribeRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Note: The caller must subscribe to this method.addressRequiredStringIndicates the address (bdaddr) of the remote device.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.subscribedRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.addressRequiredStringIndicates the address (bdaddr) of the remote device.adapterAddressRequiredStringIndicates the address of the adapter.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes" section of this method for details.Subscription Returns */
export interface Bluetooth2AvrcpGetMediaPlayStatusSubscription {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed: boolean;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the information about the playbackStatus of the media. */
    playbackStatus: Bluetooth2Bluetooth2PlayStatus;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.managementDescriptionGets the player application settings value.Parameters */
export interface Bluetooth2AvrcpGetPlayerApplicationSettingsParameters {
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribe: boolean;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.managementDescriptionGets the player application settings value.ParametersNameRequiredTypeDescriptionsubscribeRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.addressRequiredStringIndicates the address (bdaddr) of the remote device.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call Returns */
export interface Bluetooth2AvrcpGetPlayerApplicationSettingsCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed: boolean;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** The error code for the failed operation. */
    errorCode?: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.managementDescriptionGets the player application settings value.ParametersNameRequiredTypeDescriptionsubscribeRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.addressRequiredStringIndicates the address (bdaddr) of the remote device.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.subscribedRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.addressRequiredStringIndicates the address (bdaddr) of the remote device.adapterAddressRequiredStringIndicates the address of the adapter.errorCodeOptionalStringThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes" section of this method for details.Subscription Returns */
export interface Bluetooth2AvrcpGetPlayerApplicationSettingsSubscription {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed: boolean;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the status of the equalizer.Possible values are:offon */
    equalizer: string;
    /** Indicates the status of the repeat mode.Possible values are:offsingletrackalltracksgroup */
    repeat: string;
    /** Indicates the status of the shuffle.Possible values are:offalltracksgroup */
    shuffle: string;
    /** Indicates the status of the scan.Possible values are:offalltracksgroup */
    scan: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.managementDescriptionReturns the information of the media players available that is received from AVRCP TG (AVRCP Target). Subscription response will be received by the application whenever a new media player is added or a media player is removed from the media player list received from AVRCP TG.Parameters */
export interface Bluetooth2AvrcpGetPlayerInfoParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: false */
    subscribe: boolean;
}

/** Represents the media player information as received from AVRCP target. */
export interface Bluetooth2Bluetooth2AvrcpPlayerInfo {
    /** Indicates the name of the media player. */
    name: string;
    /** Indicates the type of the media player type.Possible values are:AudioVideoAudio BroadcastingVideo Broadcasting */
    type: string;
    /** Indicates if the player is addressed.Possible values are:true: The player is addressedfalse: The player is not addressed */
    addressed: boolean;
    /** Indicates if the player supports media content browsing.Possible values are:true: The player supports browsingfalse: The player does not support browsingNote: Browsing APIs will be success and return expected result only if the addressed player is browsable i.e. if both "addressed" and "browsable" is true. */
    browsable: boolean;
    /** Indicates if the player supports media content searching.Possible values are:true: The player supports searchingfalse: The player does not support searchingNote: The search API succeeds only if player supports search functionality. */
    searchable: boolean;
    /** Indicates the path to the current playing list. */
    playlistPath: string;
}

/** ACG: bluetooth.managementDescriptionReturns the information of the media players available that is received from AVRCP TG (AVRCP Target). Subscription response will be received by the application whenever a new media player is added or a media player is removed from the media player list received from AVRCP TG.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device.subscribeRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: falseCall Returns */
export interface Bluetooth2AvrcpGetPlayerInfoCallReturn {
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for changes.false: Not subscribed. */
    subscribed: boolean;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** Indicates the player information. */
    playerInfo?: Bluetooth2Bluetooth2AvrcpPlayerInfo[];
}

/** ACG: bluetooth.managementDescriptionReturns the information of the media players available that is received from AVRCP TG (AVRCP Target). Subscription response will be received by the application whenever a new media player is added or a media player is removed from the media player list received from AVRCP TG.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device.subscribeRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: falseCall ReturnsNameRequiredTypeDescriptionadapterAddressRequiredStringIndicates the address of the adapter.addressRequiredStringIndicates the address of the remote device.subscribedRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for changes.false: Not subscribed.returnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for detailserrorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details.playerInfoOptionalObject array: bluetooth2AvrcpPlayerInfoIndicates the player information.Subscription Returns */
export interface Bluetooth2AvrcpGetPlayerInfoSubscription {
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** Indicates the player information. */
    playerInfo?: Bluetooth2Bluetooth2AvrcpPlayerInfo[];
}

/** ACG: bluetooth.managementDescriptionGets the volume of the remote device.Note: The method supports 'Volume Changed Notification' only.Parameters */
export interface Bluetooth2AvrcpGetRemoteVolumeParameters {
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Note: The caller must subscribe to this method. */
    subscribe: boolean;
    /** Indicates the address (bdaddr) of the remote device.Note: If not specified, returns all requested volume info from the all connected devices. */
    address?: string;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.managementDescriptionGets the volume of the remote device.Note: The method supports 'Volume Changed Notification' only.ParametersNameRequiredTypeDescriptionsubscribeRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Note: The caller must subscribe to this method.addressOptionalStringIndicates the address (bdaddr) of the remote device.Note: If not specified, returns all requested volume info from the all connected devices.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call Returns */
export interface Bluetooth2AvrcpGetRemoteVolumeCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedNote: subscribed will always contain true since subscription ends only when the client chooses to close it. */
    subscribed: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address (bdaddr) of the remote device. */
    address?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.managementDescriptionGets the volume of the remote device.Note: The method supports 'Volume Changed Notification' only.ParametersNameRequiredTypeDescriptionsubscribeRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Note: The caller must subscribe to this method.addressOptionalStringIndicates the address (bdaddr) of the remote device.Note: If not specified, returns all requested volume info from the all connected devices.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredStringIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.subscribedRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedNote: subscribed will always contain true since subscription ends only when the client chooses to close it.adapterAddressRequiredStringIndicates the address of the adapter.addressOptionalStringIndicates the address (bdaddr) of the remote device.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes" section of this method for details.Subscription Returns */
export interface Bluetooth2AvrcpGetRemoteVolumeSubscription {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribed */
    subscribed: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address (bdaddr) of the remote device. */
    address?: string;
    /** Indicates the requested volume level in percentage.Possible range: 0 ~ 100. */
    volume: number;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.queryDescriptionReturns the status of an AVRCP connection to a remote Bluetooth device.Parameters */
export interface Bluetooth2AvrcpGetStatusParameters {
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribe?: boolean;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.queryDescriptionReturns the status of an AVRCP connection to a remote Bluetooth device.ParametersNameRequiredTypeDescriptionaddressRequiredStringIndicates the address (bdaddr) of the remote device.subscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call Returns */
export interface Bluetooth2AvrcpGetStatusCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates whether the connection request is currently being processed.Possible values are:true: Request is being processed.false: Not being processed. For example, if the Bluetooth stack is no longer processing the connection request. */
    connecting: boolean;
    /** Indicates if the connection is open.Possible values are:true: Connection is open.false: Connection is not open. */
    connected: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}

/** ACG: bluetooth.queryDescriptionReturns the status of an AVRCP connection to a remote Bluetooth device.ParametersNameRequiredTypeDescriptionaddressRequiredStringIndicates the address (bdaddr) of the remote device.subscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.connectingRequiredBooleanIndicates whether the connection request is currently being processed.Possible values are:true: Request is being processed.false: Not being processed. For example, if the Bluetooth stack is no longer processing the connection request.connectedRequiredBooleanIndicates if the connection is open.Possible values are:true: Connection is open.false: Connection is not open.adapterAddressRequiredStringIndicates the address of the adapter.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes" section of this method for details.errorCodeOptionalNumberThe error code for the failed operation.Subscription Returns */
export interface Bluetooth2AvrcpGetStatusSubscription {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribed */
    subscribed: boolean;
    /** Indicates whether the connection request is currently being processed.Possible values are:true: Request is being processed.false: Not being processed. For example, if the Bluetooth stack is no longer processing the connection request. */
    connecting: boolean;
    /** Indicates if the connection is open.Possible values are:true: Connection is open.false: Connection is not open. */
    connected: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}

/** ACG: bluetooth.devutilityDescriptionDisables the profile and role of AVRCP.Parameters */
export interface Bluetooth2AvrcpInternalDisableParameters {
    /** Indicates the type of AVRCP role to be disabled.Possible values are:AVRCP-TGAVRCP-CTNote: If not specified, the role which is possible is disabled. */
    role?: string;
    /** Indicates the address of the adapter.Note: If not specified, the default adapter will be used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.devutilityDescriptionDisables the profile and role of AVRCP.ParametersNameRequiredTypeDescriptionroleOptionalStringIndicates the type of AVRCP role to be disabled.Possible values are:AVRCP-TGAVRCP-CTNote: If not specified, the role which is possible is disabled.adapterAddressOptionalStringIndicates the address of the adapter.Note: If not specified, the default adapter will be used.Call Returns */
export interface Bluetooth2AvrcpInternalDisableCallReturn {
    /** Indicates the address of the adapter.Note: If not specified, the default adapter will be used. */
    adapterAddress: string;
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.devutilityDescriptionEnables the profile and the role of AVRCP.Parameters */
export interface Bluetooth2AvrcpInternalEnableParameters {
    /** Indicates the AVRCP role to be enabled.Possible values are:AVRCP-TGAVRCP-CTNote: If not specified, the role which is possible is enabled. */
    role?: string;
    /** Indicates the address of the adapter.Note: If not specified, the default adapter will be used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.devutilityDescriptionEnables the profile and the role of AVRCP.ParametersNameRequiredTypeDescriptionroleOptionalStringIndicates the AVRCP role to be enabled.Possible values are:AVRCP-TGAVRCP-CTNote: If not specified, the role which is possible is enabled.adapterAddressOptionalStringIndicates the address of the adapter.Note: If not specified, the default adapter will be used.Call Returns */
export interface Bluetooth2AvrcpInternalEnableCallReturn {
    /** Indicates the address of the adapter.Note: If not specified, the default adapter will be used. */
    adapterAddress: string;
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.devutilityDescriptionGets the remote AVRCP's features.Parameters */
export interface Bluetooth2AvrcpInternalGetRemoteFeaturesParameters {
    /** Indicates the address of the adapter.Note: If not specified, the default adapter will be used.If the application/service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
}

/** Object containing information about avrcp remote features */
export interface Bluetooth2Bluetooth2AvrcpRemoteFeatureInfo {
    /** Indicates the role of AVRCP.Possible values are:"CT""TG"Note: "TG" stands for Target and "CT" stands for controller. */
    role: string;
    /** Indicates the remote avrcp's features.Possible values are:"none""metaData""absoluteVolume""browse"Note:"none":   AVRCP 1.0"metaData":  AVRCP 1.3"absoluteVolume":  AVRCP 1.3 + supports TG role and volume sync"browse":  AVRCP 1.4 and up, with browsing support */
    remoteFeature: string;
}

/** ACG: bluetooth.devutilityDescriptionGets the remote AVRCP's features.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note: If not specified, the default adapter will be used.If the application/service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address (bdaddr) of the remote device.Call Returns */
export interface Bluetooth2AvrcpInternalGetRemoteFeaturesCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** Indicates the address of the adapter.Note: If not specified, the default adapter will be used. */
    adapterAddress: string;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates an array of the remote features. */
    remoteFeatures: Bluetooth2Bluetooth2AvrcpRemoteFeatureInfo[];
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.devutilityDescriptionGets the remote AVRCP's supported notification events.Parameters */
export interface Bluetooth2AvrcpInternalGetSupportedNotificationEventsParameters {
    /** Indicates the address of the adapter executing this method.Note: If not specified, the default adapter will be used.If the application/service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedNote: The caller must subscribe to this method. */
    subscribe: boolean;
}

/** ACG: bluetooth.devutilityDescriptionGets the remote AVRCP's supported notification events.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter executing this method.Note: If not specified, the default adapter will be used.If the application/service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address (bdaddr) of the remote device.subscribeRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedNote: The caller must subscribe to this method.Call Returns */
export interface Bluetooth2AvrcpInternalGetSupportedNotificationEventsCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedNote: subscribed will always contain true since subscription ends only when the client chooses to close it. */
    subscribed: boolean;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.devutilityDescriptionGets the remote AVRCP's supported notification events.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter executing this method.Note: If not specified, the default adapter will be used.If the application/service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address (bdaddr) of the remote device.subscribeRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedNote: The caller must subscribe to this method.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for detailsadapterAddressRequiredStringIndicates the address of the adapter.subscribedRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedNote: subscribed will always contain true since subscription ends only when the client chooses to close it.addressRequiredStringIndicates the address (bdaddr) of the remote device.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes" section of this method for details.Subscription Returns */
export interface Bluetooth2AvrcpInternalGetSupportedNotificationEventsSubscription {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notified when a connection is closed.true: Subscribed for notificationsfalse: Not subscribed */
    subscribed: boolean;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates the address of the adapter.Note: If not specified, the default adapter will be used. */
    adapterAddress: string;
    /** Indicates the list of remote avrcp's supported notification events.Possible values are:1 : Playback status changed2 : Track changed3 : Track reached end4 : Track reached start5 : Playback position changed6 : Battery status changed7 : System status changed8 : Player application setting changed9 : Now playing changed10 : Available players changed11 : Addressed players changed12 : UIDs changed13 : Volume changed */
    supportedNotificationEvents: number[];
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.managementDescriptionReceives PATH THROUGH command from CT to TG.Note: The PASS THROUGH command is used to transfer user operation information from a CT (Controller) to Panel sub-unit on TG (Target).Parameters */
export interface Bluetooth2AvrcpReceivePassThroughCommandParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedNote: The caller must subscribe to this method. */
    subscribe: boolean;
}

/** ACG: bluetooth.managementDescriptionReceives PATH THROUGH command from CT to TG.Note: The PASS THROUGH command is used to transfer user operation information from a CT (Controller) to Panel sub-unit on TG (Target).ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address (bdaddr) of the remote device.subscribeRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedNote: The caller must subscribe to this method.Call Returns */
export interface Bluetooth2AvrcpReceivePassThroughCommandCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedNote: subscribed will always contain true since subscription ends only when the client chooses to close it. */
    subscribed: boolean;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** The error code for the failed operation. */
    errorCode?: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.managementDescriptionReceives PATH THROUGH command from CT to TG.Note: The PASS THROUGH command is used to transfer user operation information from a CT (Controller) to Panel sub-unit on TG (Target).ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address (bdaddr) of the remote device.subscribeRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedNote: The caller must subscribe to this method.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for detailsadapterAddressRequiredStringIndicates the address of the adapter.subscribedRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedNote: subscribed will always contain true since subscription ends only when the client chooses to close it.addressRequiredStringIndicates the address (bdaddr) of the remote device.errorCodeOptionalBooleanThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details.Subscription Returns */
export interface Bluetooth2AvrcpReceivePassThroughCommandSubscription {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notified when a connection is closed.true: Subscribed for notificationsfalse: Not subscribed */
    subscribed: boolean;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** The key code which is operated.Possible values are:playpausemutestopnextpreviousfastForwardrewindvolumeUpvolumeDown */
    keyCode: string;
    /** Indicates the key status.Possible values are:pressedreleased */
    keyStatus: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.managementDescriptionSends PASS THROUGH command from CT (Controller) to TG (Target).Note: The PASS THROUGH command is used to transfer user operation information from the CT to the panel sub-unit on the TG.Parameters */
export interface Bluetooth2AvrcpSendPassThroughCommandParameters {
    /** The key code which is operated.Possible values are:playpausemutestopnextpreviousfastForwardrewindvolumeUpvolumeDown */
    keyCode: string;
    /** The key status.Possible values are:pressedreleased */
    keyStatus: string;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.managementDescriptionSends PASS THROUGH command from CT (Controller) to TG (Target).Note: The PASS THROUGH command is used to transfer user operation information from the CT to the panel sub-unit on the TG.ParametersNameRequiredTypeDescriptionkeyCodeRequiredStringThe key code which is operated.Possible values are:playpausemutestopnextpreviousfastForwardrewindvolumeUpvolumeDownkeyStatusRequiredStringThe key status.Possible values are:pressedreleasedaddressRequiredStringIndicates the address (bdaddr) of the remote device.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call Returns */
export interface Bluetooth2AvrcpSendPassThroughCommandCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.managementDescriptionSets the absolute volume on the target device.Parameters */
export interface Bluetooth2AvrcpSetAbsoluteVolumeParameters {
    /** Indicates the requested volume level in percentage.Possible range: 0 ~ 100. */
    volume: number;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.managementDescriptionSets the absolute volume on the target device.ParametersNameRequiredTypeDescriptionvolumeRequiredNumberIndicates the requested volume level in percentage.Possible range: 0 ~ 100.addressRequiredStringIndicates the address (bdaddr) of the remote device.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call Returns */
export interface Bluetooth2AvrcpSetAbsoluteVolumeCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** The error code for the failed operation. */
    errorCode?: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.managementDescriptionSets the player application settings value.Parameters */
export interface Bluetooth2AvrcpSetPlayerApplicationSettingsParameters {
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the status of the equalizer.Possible values are:offon */
    equalizer?: string;
    /** Indicates the status of repeat mode.Possible values are:offsingletrackalltracksgroup */
    repeat?: string;
    /** Indicates the status of shuffle.Possible values are:offalltracksgroup */
    shuffle?: string;
    /** Indicates the status of scan.Possible values are:offalltracksgroup */
    scan?: string;
}

/** ACG: bluetooth.managementDescriptionSets the player application settings value.ParametersNameRequiredTypeDescriptionaddressRequiredStringIndicates the address (bdaddr) of the remote device.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.equalizerOptionalStringIndicates the status of the equalizer.Possible values are:offonrepeatOptionalStringIndicates the status of repeat mode.Possible values are:offsingletrackalltracksgroupshuffleOptionalStringIndicates the status of shuffle.Possible values are:offalltracksgroupscanOptionalStringIndicates the status of scan.Possible values are:offalltracksgroupCall Returns */
export interface Bluetooth2AvrcpSetPlayerApplicationSettingsCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address (bdaddr) of the remote device. */
    address: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.managementDescriptionSupplies media metadata of the target to remote devices connected via AVRCP 1.3 profile.Parameters */
export interface Bluetooth2AvrcpSupplyMediaMetaDataParameters {
    /** Indicates the unique ID of a request.Note: The format of requestId is "nnn", a three-digit number. */
    requestId: string;
    /** Indicates the metaData of the media. */
    metaData: Bluetooth2Bluetooth2MediaMetaData;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.managementDescriptionSupplies media metadata of the target to remote devices connected via AVRCP 1.3 profile.ParametersNameRequiredTypeDescriptionrequestIdRequiredStringIndicates the unique ID of a request.Note: The format of requestId is "nnn", a three-digit number.metaDataRequiredObject: bluetooth2MediaMetaDataIndicates the metaData of the media.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call Returns */
export interface Bluetooth2AvrcpSupplyMediaMetaDataCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the unique ID of a request.Note: The format of requestId is "nnn", a three-digit number. */
    requestId: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}

/** ACG: bluetooth.managementDescriptionSupplies media play status of the target to remote devices connected via AVRCP 1.3 profile.Parameters */
export interface Bluetooth2AvrcpSupplyMediaPlayStatusParameters {
    /** The unique ID of a request. The format of requestId is "nnn", a three-digit number. */
    requestId: string;
    /** The information about play status of the media. */
    playbackStatus: Bluetooth2Bluetooth2PlayStatus;
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
}

/** ACG: bluetooth.managementDescriptionSupplies media play status of the target to remote devices connected via AVRCP 1.3 profile.ParametersNameRequiredTypeDescriptionrequestIdRequiredStringThe unique ID of a request. The format of requestId is "nnn", a three-digit number.playbackStatusRequiredObject: bluetooth2PlayStatusThe information about play status of the media.adapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.Call Returns */
export interface Bluetooth2AvrcpSupplyMediaPlayStatusCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** The unique ID of a request. The format of requestId is "nnn", a three-digit number. */
    requestId: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}

/** ACG: bluetooth.managementDescriptionGets the current folder in the media player's virtual filesystem presented by AVRCP TG which can be browsed for the media content.Example: As the user navigates to a sub folder or a parent folder, browsing folder changes. The information (i.e. the new current folder) is provided as subscription response of this API.Parameters */
export interface Bluetooth2AvrcpBrowseGetCurrentFolderParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: false */
    subscribe?: boolean;
}

/** ACG: bluetooth.managementDescriptionGets the current folder in the media player's virtual filesystem presented by AVRCP TG which can be browsed for the media content.Example: As the user navigates to a sub folder or a parent folder, browsing folder changes. The information (i.e. the new current folder) is provided as subscription response of this API.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device.subscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: falseCall Returns */
export interface Bluetooth2AvrcpBrowseGetCurrentFolderCallReturn {
    /** Indicates the address of the adapter. */
    adapterAddress?: string;
    /** Indicates the address of the remote device. */
    address?: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed: boolean;
    /** Indicates the current folder name browsed by the user.Note: Folder name can be empty if current folder information is not received yet from the device for current addressed player or if the current addressed player does not support browsing. */
    folderName?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.managementDescriptionGets the current folder in the media player's virtual filesystem presented by AVRCP TG which can be browsed for the media content.Example: As the user navigates to a sub folder or a parent folder, browsing folder changes. The information (i.e. the new current folder) is provided as subscription response of this API.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device.subscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.Default: falseCall ReturnsNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.addressOptionalStringIndicates the address of the remote device.returnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.subscribedRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed.folderNameOptionalStringIndicates the current folder name browsed by the user.Note: Folder name can be empty if current folder information is not received yet from the device for current addressed player or if the current addressed player does not support browsing.errorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details.Subscription Returns */
export interface Bluetooth2AvrcpBrowseGetCurrentFolderSubscription {
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribed. */
    subscribed: boolean;
    /** Indicates the current folder name browsed by the user.Note: Folder name can be empty if current folder information is not received yet from the device for current addressed player or if the current addressed player does not support browsing. */
    folderName?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.managementDescriptionRetrieves the total number of items in the current folder of the media player's virtual file system presented by the AVRCP TG.Parameters */
export interface Bluetooth2AvrcpBrowseGetNumberOfItemsParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the address of the remote device. */
    address: string;
}

/** ACG: bluetooth.managementDescriptionRetrieves the total number of items in the current folder of the media player's virtual file system presented by the AVRCP TG.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device.Call Returns */
export interface Bluetooth2AvrcpBrowseGetNumberOfItemsCallReturn {
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the total number of items in the current folder. */
    numberOfItems?: number;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.managementDescriptionGets the items in the current folder of the media player's virtual filesystem presented by AVRCP TG. It takes startIndex and endIndex as argument and gets the items within this range.It is recommended to fetch a part of the list at a time and update it as user scrolls the display to avoid any delay in fetching the items from AVRCP_TG and displaying the items. This can be done by specifying the range using startIndex and endIndex. endIndex should be less than total number of items received using getNumberOfItems API. Application should not call getFolderItems API if the folder is empty.Parameters */
export interface Bluetooth2AvrcpBrowseGetFolderItemsParameters {
    /** Indicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates the offset within the listing of the item, which should be the first returned item. The first element in the listing is at offset 0. */
    startIndex: number;
    /** Indicates the offset within the listing of the item, which should be the final returned item.Note: endIndex should be greater than or equal to startIndex ( endIndex = startIndex means you are requesting one item that is at index endIndex/startIndex) and less than total number of items in the current folder. */
    endIndex: number;
}

/** Describes an item in the folder. */
export interface Bluetooth2Bluetooth2AvrcpFolderItem {
    /** Indicates the name to be displayed. */
    name: string;
    /** Indicates the item path. */
    path: string;
    /** Indicates the Item type.Possible values are:AudioVideoFolder */
    type: string;
    /** Indicates if the item is playable or not.Possible values are:true: Item is playablefalse: Item is not playable */
    playable: boolean;
    /** Indicates the metadata of the item.Note: Available if the item type is either "Audio" or "Video". */
    metaData: Bluetooth2Bluetooth2MediaMetaData;
}

/** ACG: bluetooth.managementDescriptionGets the items in the current folder of the media player's virtual filesystem presented by AVRCP TG. It takes startIndex and endIndex as argument and gets the items within this range.It is recommended to fetch a part of the list at a time and update it as user scrolls the display to avoid any delay in fetching the items from AVRCP_TG and displaying the items. This can be done by specifying the range using startIndex and endIndex. endIndex should be less than total number of items received using getNumberOfItems API. Application should not call getFolderItems API if the folder is empty.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the address of the default adapter will be used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device.startIndexRequiredNumberIndicates the offset within the listing of the item, which should be the first returned item. The first element in the listing is at offset 0.endIndexRequiredNumberIndicates the offset within the listing of the item, which should be the final returned item.Note: endIndex should be greater than or equal to startIndex ( endIndex = startIndex means you are requesting one item that is at index endIndex/startIndex) and less than total number of items in the current folder.Call Returns */
export interface Bluetooth2AvrcpBrowseGetFolderItemsCallReturn {
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** Indicates an array of items in the folder. */
    folderItems?: Bluetooth2Bluetooth2AvrcpFolderItem[];
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.managementDescriptionSearches an item in the current browsing folder (and its sub folders) using a search string.Note:The API succeeds only if the player is searchable.The "searchable" field of bluetooth2AvrcpPlayerInfo object for the addressed player received in the getPlayerInfo response indicates if the player supports search feature.Parameters */
export interface Bluetooth2AvrcpBrowseSearchParameters {
    /** Indicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates the string to search. */
    searchString: string;
}

/** ACG: bluetooth.managementDescriptionSearches an item in the current browsing folder (and its sub folders) using a search string.Note:The API succeeds only if the player is searchable.The "searchable" field of bluetooth2AvrcpPlayerInfo object for the addressed player received in the getPlayerInfo response indicates if the player supports search feature.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device.searchStringRequiredStringIndicates the string to search.Call Returns */
export interface Bluetooth2AvrcpBrowseSearchCallReturn {
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed.Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** Indicates the path to the search list.Note: The application can changeFolder to this path and browse the search list */
    searchResult?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.managementDescriptionPlays the browsed item.Note:When user selects a playable item (playable is set to true for the item in the getFolderItems response) among the items listedThe application can call the API with the path received in the bluetooth2AvrcpFolderItem object of getFolderItems response to play the selected item.Parameters */
export interface Bluetooth2AvrcpBrowsePlayItemParameters {
    /** Indicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates the path to the playable item in the current folder to be played.Note: Item path is received in the bluetooth2AvrcpFolderItem object of the getFolderItems API response. */
    itemPath: string;
}

/** ACG: bluetooth.managementDescriptionPlays the browsed item.Note:When user selects a playable item (playable is set to true for the item in the getFolderItems response) among the items listedThe application can call the API with the path received in the bluetooth2AvrcpFolderItem object of getFolderItems response to play the selected item.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device.itemPathRequiredStringIndicates the path to the playable item in the current folder to be played.Note: Item path is received in the bluetooth2AvrcpFolderItem object of the getFolderItems API response.Call Returns */
export interface Bluetooth2AvrcpBrowsePlayItemCallReturn {
    /** Indicates the address of the adapter. */
    adapterAddress?: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed.Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: bluetooth.managementDescriptionAdds the browsed item to the current playing list.Note:When user selects a playable item (playable is set to true for the item in the getFolderItems response) among the items listed, the application can call this API with the path received in the bluetooth2FolderItem object of the getFolderItems response to add the item to the now playing list.The application can call addToNowPlaying with the path to the folder, if the folder is playable.Parameters */
export interface Bluetooth2AvrcpBrowseAddToNowPlayingParameters {
    /** Indicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates the path to the item in the current folder to be added to the current playing list.Note: Item path is received in the bluetooth2FolderItem object of the getFolderItems API response. */
    itemPath: string;
}

/** ACG: bluetooth.managementDescriptionAdds the browsed item to the current playing list.Note:When user selects a playable item (playable is set to true for the item in the getFolderItems response) among the items listed, the application can call this API with the path received in the bluetooth2FolderItem object of the getFolderItems response to add the item to the now playing list.The application can call addToNowPlaying with the path to the folder, if the folder is playable.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device.itemPathRequiredStringIndicates the path to the item in the current folder to be added to the current playing list.Note: Item path is received in the bluetooth2FolderItem object of the getFolderItems API response.Call Returns */
export interface Bluetooth2AvrcpBrowseAddToNowPlayingCallReturn {
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed.Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. */
    errorText?: string;
}

/** ACG: bluetooth.managementDescriptionNavigates the virtual filesystem presented by the remote media player. This API can be called to change to a specific folder for browsing. "type" field of bluetooth2FolderItem received as response to getFolderITems indicates if the item is audio/video or folder. If the item is "folder" then the API can be called with corresponding path to browse the folder.Browsing folder can be changed to a folder that is one level up or down to the current folder in hierarchy.Example: Folder cannot be changed directly from media/album/album1/ to /media/artist/artist1.We need to move first from /media/album/album1 ==> to /media/album/ ==> then to /media/ ==> then to /media/artist/ ==> and then to /media/artist/artist1.Note that for going back to a parent folder also the API needs to be called with the parent folder path.When the API succeeds, the current browsing folder changes, hence the application will receive the subscription response to the getCurrentFolder API.Parameters */
export interface Bluetooth2AvrcpBrowseChangePathParameters {
    /** Indicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used. */
    adapterAddress?: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates the path to the folder item to change to.Note: Item path is received in the bluetooth2FolderItem object of the getFolderItems API response. */
    itemPath: string;
}

/** ACG: bluetooth.managementDescriptionNavigates the virtual filesystem presented by the remote media player. This API can be called to change to a specific folder for browsing. "type" field of bluetooth2FolderItem received as response to getFolderITems indicates if the item is audio/video or folder. If the item is "folder" then the API can be called with corresponding path to browse the folder.Browsing folder can be changed to a folder that is one level up or down to the current folder in hierarchy.Example: Folder cannot be changed directly from media/album/album1/ to /media/artist/artist1.We need to move first from /media/album/album1 ==> to /media/album/ ==> then to /media/ ==> then to /media/artist/ ==> and then to /media/artist/artist1.Note that for going back to a parent folder also the API needs to be called with the parent folder path.When the API succeeds, the current browsing folder changes, hence the application will receive the subscription response to the getCurrentFolder API.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note:If not specified, the default adapter is used.If the service is part of a container session, do not specify adapterAddress. Based on the session, by default, a pre-selected adapterAddress is used.addressRequiredStringIndicates the address of the remote device.itemPathRequiredStringIndicates the path to the folder item to change to.Note: Item path is received in the bluetooth2FolderItem object of the getFolderItems API response.Call Returns */
export interface Bluetooth2AvrcpBrowseChangePathCallReturn {
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. */
    errorText?: string;
}

/** ACG: bluetooth.managementDescriptionEnables the AVRCP target to inform the AVRCP controller about the change in media play status or position without controller requesting for the same.Parameters */
export interface Bluetooth2AvrcpNotifyMediaPlayStatusParameters {
    /** Indicates the address of the adapter.Note: If not specified, the default adapter is used */
    adapterAddress?: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates the information about the play status of the media. */
    playbackStatus: Bluetooth2Bluetooth2PlayStatus;
}

/** ACG: bluetooth.managementDescriptionEnables the AVRCP target to inform the AVRCP controller about the change in media play status or position without controller requesting for the same.ParametersNameRequiredTypeDescriptionadapterAddressOptionalStringIndicates the address of the adapter.Note: If not specified, the default adapter is usedaddressRequiredStringIndicates the address of the remote device.playbackStatusRequiredObject: bluetooth2PlayStatusIndicates the information about the play status of the media.Call Returns */
export interface Bluetooth2AvrcpNotifyMediaPlayStatusCallReturn {
    /** Indicates the address of the adapter. */
    adapterAddress: string;
    /** Indicates the address of the remote device. */
    address: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}
