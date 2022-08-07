/** luna://com.webos.media */
interface Media {
}

/** ACG: media.operationDescriptionUnloads the pipeline and releases all AV resources.Parameters */
export interface MediaUnloadParameters {
    /** Indicates the unique identifier of the loaded media/camera pipeline. */
    mediaId: string;
}

/** ACG: media.operationDescriptionUnloads the pipeline and releases all AV resources.ParametersNameRequiredTypeDescriptionmediaIdRequiredStringIndicates the unique identifier of the loaded media/camera pipeline.Call Returns */
export interface MediaUnloadCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. */
    returnValue: boolean;
    /** The error code for the operation.Note: Currently, it returns 0 even when the returnValue is true and returns -1 if JSON parsing fails. */
    errorCode: string;
    /** Indicates the reason for the failure of the operation.Note: Currently, it returns "No Error" even when the returnValue is true. If JSON parsing fails, then errorText is updated accordingly. */
    errorText: string;
    /** Indicates the unique identifier of the loaded media/camera pipeline which is requested to unload. */
    mediaId?: string;
}

/** ACG: media.operationDescriptionMarks a pipeline as foreground. This API is called when the media object in question is un-carded and made visible.Note: Foreground pipeline video content is currently visible on the display surface.Parameters */
export interface MediaNotifyForegroundParameters {
    /** Indicates the unique identifier of the registered pipeline. */
    connectionId: string;
}

/** ACG: media.operationDescriptionMarks a pipeline as foreground. This API is called when the media object in question is un-carded and made visible.Note: Foreground pipeline video content is currently visible on the display surface.ParametersNameRequiredTypeDescriptionconnectionIdRequiredStringIndicates the unique identifier of the registered pipeline.Call Returns */
export interface MediaNotifyForegroundCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed.Note: The notifyForeground method may fail because of:Command sent with wrong JSON format.Missing connectionId (required field).Unexisting connectionId. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. */
    errorText?: string;
}

/** ACG: media.operationDescriptionMarks a pipeline as background. This API is called when the media object in question is carded, deleted, or otherwise removed from view. Note: Background video content is not currently visible on the display surface.Parameters */
export interface MediaNotifyBackgroundParameters {
    /** Indicates the unique identifier of the registered pipeline. */
    connectionId: string;
}

/** ACG: media.operationDescriptionMarks a pipeline as background. This API is called when the media object in question is carded, deleted, or otherwise removed from view. Note: Background video content is not currently visible on the display surface.ParametersNameRequiredTypeDescriptionconnectionIdRequiredStringIndicates the unique identifier of the registered pipeline.Call Returns */
export interface MediaNotifyBackgroundCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed.Note: The notifyBackground method may fail because of:Command sent with wrong JSON format.missing connectionId (required field).Unexisting connectionId. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. */
    errorText?: string;
}

/** ACG: media.operationDescriptionSubscribes the media client to receive events from a media pipeline. These events, described in the tables above, allow the media client (generally an app or test tool) to monitor pipeline status (including playback position) and adjust their internal state appropriately.Parameters */
export interface MediaSubscribeParameters {
    /** Indicates the unique identifier of the loaded media/camera pipeline. */
    mediaId: string;
}

/** ACG: media.operationDescriptionSubscribes the media client to receive events from a media pipeline. These events, described in the tables above, allow the media client (generally an app or test tool) to monitor pipeline status (including playback position) and adjust their internal state appropriately.ParametersNameRequiredTypeDescriptionmediaIdRequiredStringIndicates the unique identifier of the loaded media/camera pipeline.Call Returns */
export interface MediaSubscribeCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. */
    returnValue: boolean;
    /** The error code for the operationNote: Currently, it returns 0 even when the returnValue is true and returns -1 if JSON parsing fails. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation.Note: Currently, it returns "No Error" even when the returnValue is true. If JSON parsing fails, then errorText is updated accordingly. */
    errorText?: string;
    /** Indicates the unique identifier of the loaded media pipeline which is requested to subscribe. */
    mediaId?: string;
    /** Indicates the current subscription status.Possible values are:true: Subscription is ONfalse: Subscription is OFF */
    subscription?: string;
}

/** ACG: media.operationDescriptionAllows to transfer the control of a pipeline to be handed over to a different client. When this occurs, the original client gets notified that it got detached from the pipeline and can no longer control the pipeline.Note: This method was added to address a specific early boot situation where the pipeline was initially created by one client process and then another client process takes over control of the pipeline.Parameters */
export interface MediaAttachParameters {
    /** Indicates the unique identifier of the loaded media/camera pipeline. */
    mediaId: string;
}

/** ACG: media.operationDescriptionAllows to transfer the control of a pipeline to be handed over to a different client. When this occurs, the original client gets notified that it got detached from the pipeline and can no longer control the pipeline.Note: This method was added to address a specific early boot situation where the pipeline was initially created by one client process and then another client process takes over control of the pipeline.ParametersNameRequiredTypeDescriptionmediaIdRequiredStringIndicates the unique identifier of the loaded media/camera pipeline.Call Returns */
export interface MediaAttachCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. */
    returnValue: boolean;
    /** The error code for the operationNote: Currently, it returns 0 even when the returnValue is true and returns -1 if JSON parsing fails. */
    errorCode: number;
    /** Indicates the reason for the failure of the operation.Note: Currently, it returns "No Error" even when the returnValue is true. If JSON parsing fails, then errorText is updated accordingly. */
    errorText: string;
    /** Indicates the unique identifier of the loaded media pipeline which is requested to subscribe. */
    mediaId?: string;
}

/** ACG: media.operationDescriptionRequests the media server to play the media object.Parameters */
export interface MediaPlayParameters {
    /** Indicates the unique identifier of the loaded media/camera pipeline. */
    mediaId: string;
}

/** ACG: media.operationDescriptionRequests the media server to play the media object.ParametersNameRequiredTypeDescriptionmediaIdRequiredStringIndicates the unique identifier of the loaded media/camera pipeline.Call Returns */
export interface MediaPlayCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. */
    returnValue: boolean;
    /** The error code for the operation.Note: Currently, it returns 0 even when the returnValue is true and returns -1 if JSON parsing fails. */
    errorCode: number;
    /** Indicates the reason for the failure of the operation.Note: Currently, it returns "No Error" even when the returnValue is true. If JSON parsing fails, then errorText is updated accordingly. */
    errorText: string;
    /** Indicates the unique identifier of the loaded media/camera pipeline which is requested to play. */
    mediaId?: string;
}

/** ACG: mediaDescriptionRequests the media server to pause the media object.Parameters */
export interface MediaPauseParameters {
    /** Indicates the unique identifier of the loaded media/camera pipeline. */
    mediaId: string;
}

/** ACG: mediaDescriptionRequests the media server to pause the media object.ParametersNameRequiredTypeDescriptionmediaIdRequiredStringIndicates the unique identifier of the loaded media/camera pipeline.Call Returns */
export interface MediaPauseCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. */
    returnValue: boolean;
    /** The error code for the operationNote: Currently, it returns 0 even when the returnValue is true and returns -1 if JSON parsing fails. */
    errorCode: number;
    /** Indicates the reason for the failure of the operation.Note: Currently, it returns "No Error" even when the returnValue is true. If JSON parsing fails, then errorText is updated accordingly. */
    errorText: string;
    /** Indicates the unique identifier of the loaded media/camera pipeline which is requested to pause. */
    mediaId?: string;
}

/** ACG: media.operationDescriptionSeeks the media object to a specified time position.Parameters */
export interface MediaSeekParameters {
    /** Indicates the position (in milliseconds) from the start position to seek position. */
    position: number;
    /** Indicates the unique identifier of the loaded media/camera pipeline. */
    mediaId: string;
}

/** ACG: media.operationDescriptionSeeks the media object to a specified time position.ParametersNameRequiredTypeDescriptionpositionRequiredNumberIndicates the position (in milliseconds) from the start position to seek position.mediaIdRequiredStringIndicates the unique identifier of the loaded media/camera pipeline.Call Returns */
export interface MediaSeekCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. */
    returnValue: boolean;
    /** The error code for the operation.Note: Currently, it returns 0 even when the returnValue is true and returns -1 if JSON parsing fails. */
    errorCode: number;
    /** Indicates the reason for the failure of the operation.Note: Currently, it returns "No Error" even when the returnValue is true. If JSON parsing fails, then errorText is updated accordingly. */
    errorText: string;
    /** Indicates the unique identifier of the loaded media pipeline which is requested to seek. */
    mediaId?: string;
}

/** ACG: media.operationDescriptionRegisters with the Resource Manager. Session is persistent across all start/end transaction and acquire/release cycles. Registered clients and their current resource requirements will be tracked by Resource Manager. Param type as specified in Resource Manager configuration file pipeline settings.Note: This method is applicable for unmanaged pipelines only. For managed pipelines, this is taken care of internally by the mediaserver.Parameters */
export interface MediaRegisterPipelineParameters {
    /** Indicates the type of pipeline to register.Possible values are:"ref""media""sim" */
    type: string;
    /** Application ID */
    appId?: string;
}

/** ACG: media.operationDescriptionRegisters with the Resource Manager. Session is persistent across all start/end transaction and acquire/release cycles. Registered clients and their current resource requirements will be tracked by Resource Manager. Param type as specified in Resource Manager configuration file pipeline settings.Note: This method is applicable for unmanaged pipelines only. For managed pipelines, this is taken care of internally by the mediaserver.ParametersNameRequiredTypeDescriptiontypeRequiredStringIndicates the type of pipeline to register.Possible values are:"ref""media""sim"appIdOptionalStringApplication IDCall Returns */
export interface MediaRegisterPipelineCallReturn {
    /** Indicates the unique identifier of the registered pipeline. */
    connectionId: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. */
    returnValue?: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. */
    errorText?: string;
}

/** ACG: media.operationDescriptionUnregisters pipeline with Resource Manager.Note: This method is applicable to unmanaged pipelines only.Parameters */
export interface MediaUnregisterPipelineParameters {
    /** Indicates the unique identifier of the pipeline to unregister. */
    connectionId: string;
}

/** ACG: media.operationDescriptionUnregisters pipeline with Resource Manager.Note: This method is applicable to unmanaged pipelines only.ParametersNameRequiredTypeDescriptionconnectionIdRequiredStringIndicates the unique identifier of the pipeline to unregister.Call Returns */
export interface MediaUnregisterPipelineCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. */
    returnValue: boolean;
    /** The error code for the operation.Note: Currently, it returns 0 even when the returnValue is true and returns -1 if JSON parsing fails. */
    errorCode: number;
    /** Indicates the reason for the failure of the operation.Note: Currently, it returns "No Error" even when the returnValue is true. If JSON parsing fails, then errorText is updated accordingly. */
    errorText: string;
    /** Indicates the unique identifier of the loaded media pipeline which is requested. */
    mediaId?: string;
}

/** Object of resource name, quantity, and index.Resources can hold more than one set of resource, quantity, and index.Example:{    "resources": " [{            "resource": "DISP0",            "qty": 1,            "index": 3,        },        {            "resource": "VDEC",            "qty": 1,            "index": 3        },        {            "resource": "ADEC",            "qty": 1,            "index": 3        }    ]} */
export interface MediaResources {
    /** Name of resource to acquire.Possible values are:VDEC: It describes source of video decoderADEC: It describes source of audio decoderDISPX: It describes display resource. X represents a number corresponds to display starting with 0. If a device has more than one display, there can be multiple DISP resources(e.g., DISP0, DISP1). It only applied to Open. */
    resource: string;
    /** Quantity of resource to acquire. */
    qty?: number;
    /** Specific index of resource to acquire. */
    index?: number;
}

/** ACG: media.operationDescriptionRequests resources from the mediaserver. Typical usage is to request the number of audio and video decoders or other hardware components used by the pipeline. Acquire calls can be used to dynamically add more resources to the pipeline. This allows the pipeline to dynamically grow or shrink without monopolizing the resources from startup. Each time a resource is acquired, the indexes of the newly acquired resources are included in the acquireComplete event.Note:The types and quantities of resources available to be managed are specified in the file umediaserver_resource_config.txt.in file.This file is customized for each hardware platform.If required to satisfy the acquisition of requested resources, a policyAction may be issued to other pipelines, forcing them to release their resources.For format and list of acquired resources see acquireComplete event.Parameters */
export interface MediaAcquireParameters {
    /** See "resources" object. */
    resources: MediaResources;
    /** Indicates the unique identifier of the pipeline to acquire resources. */
    connectionId: string;
}

/** ACG: media.operationDescriptionRequests resources from the mediaserver. Typical usage is to request the number of audio and video decoders or other hardware components used by the pipeline. Acquire calls can be used to dynamically add more resources to the pipeline. This allows the pipeline to dynamically grow or shrink without monopolizing the resources from startup. Each time a resource is acquired, the indexes of the newly acquired resources are included in the acquireComplete event.Note:The types and quantities of resources available to be managed are specified in the file umediaserver_resource_config.txt.in file.This file is customized for each hardware platform.If required to satisfy the acquisition of requested resources, a policyAction may be issued to other pipelines, forcing them to release their resources.For format and list of acquired resources see acquireComplete event.ParametersNameRequiredTypeDescriptionresourcesRequiredObject: resourcesSee "resources" object.connectionIdRequiredStringIndicates the unique identifier of the pipeline to acquire resources.Call Returns */
export interface MediaAcquireCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. */
    returnValue: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. */
    errorText?: string;
}

/** ACG: media.operationDescriptionTries to acquire resources from mediaserver.Note:This API will not issue policyAction to other pipelines in order to force them to release resources.If there are insufficient resources to honor the request without issuing a policyAction, the request will fail.Parameters */
export interface MediaTryAcquireParameters {
    /** See "resources" object. */
    resources: MediaResources;
    /** Indicates the unique identifier of the pipeline to acquire resources. */
    connectionId: string;
}

/** ACG: media.operationDescriptionTries to acquire resources from mediaserver.Note:This API will not issue policyAction to other pipelines in order to force them to release resources.If there are insufficient resources to honor the request without issuing a policyAction, the request will fail.ParametersNameRequiredTypeDescriptionresourcesRequiredObject: resourcesSee "resources" object.connectionIdRequiredStringIndicates the unique identifier of the pipeline to acquire resources.Call Returns */
export interface MediaTryAcquireCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. */
    errorText?: string;
}

/** ACG: media.operationDescriptionInforms media server the resources are released correctly and are not being used anymore.Note: This method is applicable for unmanaged pipelines only.Parameters */
export interface MediaReleaseParameters {
    /** See "resources" object. */
    resources: MediaResources;
    /** Indicates the unique identifier of the pipeline to release resources. */
    connectionId: string;
}

/** ACG: media.operationDescriptionInforms media server the resources are released correctly and are not being used anymore.Note: This method is applicable for unmanaged pipelines only.ParametersNameRequiredTypeDescriptionresourcesRequiredObject: resourcesSee "resources" object.connectionIdRequiredStringIndicates the unique identifier of the pipeline to release resources.Call Returns */
export interface MediaReleaseCallReturn {
    /** Indicates the status of operation. Possible values are:true: For released resources.false: For malformed request. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. */
    errorText?: string;
}

/** ACG: media.operationDescriptionNotifies the media server that the specific pipeline is currently in use. This command raises the timestamp record of the corresponding pipeline to lessen the chance to be picked as the target for a policyAction, which would require the pipeline to release its resources.Parameters */
export interface MediaNotifyActivityParameters {
    /** Indicates the unique identifier of the registered pipeline. */
    connectionId: string;
}

/** ACG: media.operationDescriptionNotifies the media server that the specific pipeline is currently in use. This command raises the timestamp record of the corresponding pipeline to lessen the chance to be picked as the target for a policyAction, which would require the pipeline to release its resources.ParametersNameRequiredTypeDescriptionconnectionIdRequiredStringIndicates the unique identifier of the registered pipeline.Call Returns */
export interface MediaNotifyActivityCallReturn {
    /** Indicates the status of the operation.Possible values are:true: For released resources.false: For malformed request. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. */
    errorText?: string;
}

/** Contains the AppID-PID mapping of the currently running pipelines. Returns an empty array if no pipelines associated with any applications.Each array element is an object of type {"appId": string, "pid": number}. If the appId string is empty it means the pipeline was loaded without an application ID being provided. */
export interface MediaMediaPipelines {
    /** Indicates application id */
    appId: string;
    /** Indicates process id of pipeline */
    pid: number;
}

/** ACG: media.devutilityDescriptionSubscribes to messages containing the mapping of application ID (appID) and pipeline process ID (PID), i.e. it returns information about which application each managed pipeline belongs to.The subscription messages contain information about changes to these mappings, i.e. new mappings when a pipeline is associated with an application or destroyed mappings when a pipeline exits.Note: The return value of the method contains an array of the PIDs of all currently existing pipelines mapped to the corresponding appIDs.ParametersNoneCall Returns */
export interface MediaTrackAppProcessesCallReturn {
    /** Returns true if the subscriber was successfully added. */
    subscribed: boolean;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. */
    returnValue: boolean;
    /** See "mediaPipelines" object. */
    mediaPipelines: MediaMediaPipelines[];
    /** Indicates the current subscription status.Possible values are:true: Subscription is ONfalse: Subscription is OFF */
    subscription: boolean;
}

/** The procUpdate object value is an object of type: {"appId" : string, "exec" : bool, "pid" : number}where exec is true when a pipeline appid mapping is added and false when it is destroyed.If the appId string is empty it means the pipeline was loaded without an application ID being provided. */
export interface MediaProcUpdate {
    /** Indicates application ID. */
    appId: string;
    /** Indicates process ID of pipeline. */
    pid: number;
    /** Provides information on the mapping status of app ID and a pipeline. Possible values are:true: when a pipeline app ID mapping is addedfalse: when a pipeline app ID mapping is destroyed. */
    exec: boolean;
}

/** ACG: media.devutilityDescriptionSubscribes to messages containing the mapping of application ID (appID) and pipeline process ID (PID), i.e. it returns information about which application each managed pipeline belongs to.The subscription messages contain information about changes to these mappings, i.e. new mappings when a pipeline is associated with an application or destroyed mappings when a pipeline exits.Note: The return value of the method contains an array of the PIDs of all currently existing pipelines mapped to the corresponding appIDs.ParametersNoneCall ReturnsNameRequiredTypeDescriptionsubscribedRequiredBooleanReturns true if the subscriber was successfully added.returnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed.mediaPipelinesRequiredObject array: mediaPipelinesSee "mediaPipelines" object.subscriptionRequiredBooleanIndicates the current subscription status.Possible values are:true: Subscription is ONfalse: Subscription is OFFSubscription Returns */
export interface MediaTrackAppProcessesSubscription {
    /** See "procUpdate" object. */
    procUpdate: MediaProcUpdate;
}

/** ACG: media.operationDescriptionUnsubscribes from media pipeline related events.Parameters */
export interface MediaUnsubscribeParameters {
    /** Indicates the unique identifier of the media object to unsubscribe. */
    mediaId?: string;
}

/** ACG: media.operationDescriptionUnsubscribes from media pipeline related events.ParametersNameRequiredTypeDescriptionmediaIdOptionalStringIndicates the unique identifier of the media object to unsubscribe.Call Returns */
export interface MediaUnsubscribeCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. */
    returnValue: boolean;
    /** The error code for the operation.Note: Currently, it returns 0 even when the returnValue is true and returns -1 if JSON parsing fails. */
    errorCode: number;
    /** Indicates the reason for the failure of the operation.Note: Currently, it returns "No Error" even when the returnValue is true. If JSON parsing fails, then errorText is updated accordingly. */
    errorText: string;
    /** Indicates the unique identifier of the loaded media pipeline requested to unsubscribe. */
    mediaId?: string;
}

/** ACG: media.queryDescriptionGets JSON formatted output of currently active media pipelines.Parameters */
export interface MediaGetActivePipelinesParameters {
    /** Indicates unique identifier of the media object. */
    mediaId?: string;
}

/** ACG: media.queryDescriptionGets JSON formatted output of currently active media pipelines.ParametersNameRequiredTypeDescriptionmediaIdOptionalStringIndicates unique identifier of the media object.Call Returns */
export interface MediaGetActivePipelinesCallReturn {
    /** Indicates unique identifier of the media object. */
    Id?: string;
    /** Indicates the type of media. */
    type?: string;
    /** Indicates the process id of media content provider. */
    pid?: number;
    /** Indicates whether media Content Provider is a managed pipeline or not.true: Managedfalse: Not managed */
    is_managed?: boolean;
    /** Indicates whether media object is currently in the foreground or nottrue: Media object is currently in the foregroundfalse: Media object is currently in the background */
    is_foreground?: boolean;
    /** Indicates the current state of Media Content Provider.Possible values are:MEDIA_LOAD: Media is loaded and ready to play.MEDIA_UNLOAD: Media is unloaded.MEDIA_PLAY: Media is currently in play state.MEDIA_PAUSE: Media is in pause state.MEDIA_STOP: Media is in stop state. */
    mediaState?: string;
    /** Media is currently selected for Resource Management Policy Action and is in suspended state */
    policy_state?: boolean;
    /** Indicate the uri of media object. */
    uri?: string;
    /** Indicates the application id of application using media object. */
    appId?: string;
    /** Indicates the status of the media content provider process.Possible values are:PIPELINE_STARTING: Media pipeline is starting but currently unable to process or respond to commands.PIPELINE_RESTARTING: Media pipeline is being restarted due to crash recovery or resume from Resource Manager Policy ActionPIPELINE_RUNNING: Media pipeline is running and able to process and respond to commands.PIPELINE_MEDIA_LOADED: Media pipeline has loaded and valid media content.PIPELINE_SUSPENDED: Media pipeline has been suspended due to Resource Manager Policy Action. */
    processState?: string;
    /** Indicates that the media object is currently selected for focus.Note: Focus is not the same thing as "visible". */
    is_focus?: string;
    /** Indicates the timestamp of the last activity on Media Content Provider pipeline. Pipeline activity is used to adjust the Resource Manager Policy Action Candidate Selection Policy.Events which update pipeline activity are: PLAYSEEKLOADnotifyForegroundnotifyActivity */
    timestamp?: string;
    /** See "resources" object. */
    resources: MediaResources[];
    /** Indicates mediaId of the object. */
    mediaId?: string;
    /** The error code for the operation.Note: Currently, it returns 0 even when the returnValue is true and returns -1 if JSON parsing fails. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation.Note: Currently, it returns "No Error" even when the returnValue is true. If JSON parsing fails, then errorText is updated accordingly. */
    errorText?: string;
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. */
    returnValue?: boolean;
}

/** ACG: media.operationDescriptionSets the volume for the specified media object. Additionally, it specifies the ease (fade-in and fade-out) properties for the media object.Parameters */
export interface MediaSetVolumeParameters {
    /** Unique identifier of the media object. */
    mediaId: string;
    /** The volume to be set. Can be set to any value between 0 and 100. */
    volume: number;
}

/** ACG: media.operationDescriptionSets the volume for the specified media object. Additionally, it specifies the ease (fade-in and fade-out) properties for the media object.ParametersNameRequiredTypeDescriptionmediaIdRequiredStringUnique identifier of the media object.volumeRequiredNumberThe volume to be set. Can be set to any value between 0 and 100.Call Returns */
export interface MediaSetVolumeCallReturn {
    /** Indicates the status of the operation.true: Indicates success of the operation.false: Indicates failure in the operation. Errors with the arguments will be provided in the logs. */
    returnValue: boolean;
    /** The error code for the operation.Note: Currently, it returns 0 even when the returnValue is true and returns -1 if JSON parsing fails. */
    errorCode: number;
    /** Indicates the reason for the failure of the operation.Note: Currently, it returns "No Error" even when the returnValue is true. If JSON parsing fails, then errorText is updated accordingly. */
    errorText: string;
    /** Unique identifier of the media object. */
    mediaId?: string;
}

/** Array of objects that gives details of media for foreground application (such as pipeline Id, playstate, position, etc.) */
export interface MediaAcbs {
    /** Pipeline id */
    pipelineId: string;
    /** Current playback status */
    playStateNow: string;
    /** Next playback status */
    playStateNext: string;
    /** Specifies if the app is in full screen mode. */
    isFullScreen: boolean;
    /** X Position of window */
    positionX: number;
    /** Y Position of window */
    positionY: number;
    /** Width of the app window. */
    width: number;
    /** Height of the app window. */
    height: number;
}

/** ACG: media.queryDescriptionProvides the application's foreground information.ParametersNoneCall Returns */
export interface MediaGetForegroundAppInfoCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. */
    returnValue: boolean;
    /** Indicates the application ID (appId). */
    appId: string;
    /** Contains an array of objects that gives details of the media. (pipeline ID, playstate, position and so on) */
    acbs: MediaAcbs[];
}

/** ACG: media.operationDescriptionSets the pipeline media play rate.Parameters */
export interface MediaSetPlayRateParameters {
    /** Indicates the play back rate for the media. */
    playRate: number;
    /** Indicates the unique identifier for the requested loaded media pipeline. */
    mediaId: string;
    /** Determine to mute audio */
    audioOutput: boolean;
}

/** ACG: media.operationDescriptionSets the pipeline media play rate.ParametersNameRequiredTypeDescriptionplayRateRequiredNumber (double)Indicates the play back rate for the media.mediaIdRequiredStringIndicates the unique identifier for the requested loaded media pipeline.audioOutputRequiredBooleanDetermine to mute audioCall Returns */
export interface MediaSetPlayRateCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. */
    returnValue: boolean;
    /** The error code for the operation.Note: Currently, it returns 0 even when the returnValue is true and returns -1 if JSON parsing fails. */
    errorCode: number;
    /** Indicates the reason for the failure of the operation.Note: Currently, it returns "No Error" even when the returnValue is true. If JSON parsing fails, then errorText is updated accordingly. */
    errorText: string;
    /** Indicates the unique identifier of the media object. */
    mediaId?: string;
}

/** ACG: media.operationDescriptionStarts camera recording. Camera pipeline stores streamed data from the camera and microphone (if required) at the specified location. Parameters */
export interface MediaStartCameraRecordParameters {
    /** Indicates the path for storing the recorded file. */
    location: string;
    /** Indicates the format in which data is stored.Possible values are:MP4 - file format MP4 ( .mp4) file gets generated */
    format: string;
    /** Indicates the unique identifier of the camera pipeline obtained using the load() API. */
    mediaId: string;
    /** Indicates whether the audio data from the microphone also has to be recorded along with video.Possible values are:true: Include audio data along with videofalse: Does not include audio data along with video */
    audio: boolean;
    /** Indicates the name of the microphone device from which the audio data has to be captured.Note: Supports only one audio source (pcm_input). */
    audioSrc: string;
}

/** ACG: media.operationDescriptionStarts camera recording. Camera pipeline stores streamed data from the camera and microphone (if required) at the specified location. ParametersNameRequiredTypeDescriptionlocationRequiredStringIndicates the path for storing the recorded file.formatRequiredStringIndicates the format in which data is stored.Possible values are:MP4 - file format MP4 ( .mp4) file gets generatedmediaIdRequiredStringIndicates the unique identifier of the camera pipeline obtained using the load() API.audioRequiredBooleanIndicates whether the audio data from the microphone also has to be recorded along with video.Possible values are:true: Include audio data along with videofalse: Does not include audio data along with videoaudioSrcRequiredStringIndicates the name of the microphone device from which the audio data has to be captured.Note: Supports only one audio source (pcm_input).Call Returns */
export interface MediaStartCameraRecordCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation.Note: errorCode always defaults to 0. Details of the error will be available in the logs. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation.Note: errorText is always empty. Details of the error will be available in the logs. */
    errorText?: string;
    /** Indicates the unique identifier of the camera pipeline. */
    mediaId: string;
}

/** ACG: media.operationDescriptionRequests media server to stop camera recording and change to the preview state.Parameters */
export interface MediaStopCameraRecordParameters {
    /** Indicates the unique identifier of the camera pipeline obtained using the load() API. */
    mediaId: string;
}

/** ACG: media.operationDescriptionRequests media server to stop camera recording and change to the preview state.ParametersNameRequiredTypeDescriptionmediaIdRequiredStringIndicates the unique identifier of the camera pipeline obtained using the load() API.Call Returns */
export interface MediaStopCameraRecordCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation.Note: errorCode always defaults to 0. Details of the error will be available in the logs. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation.Note: errorText is always empty. Details of the error will be available in the logs. */
    errorText?: string;
    /** Indicates the unique identifier of the camera pipeline. */
    mediaId: string;
}

/** ACG: media.operationDescriptionCaptures a frame from the camera preview.Parameters */
export interface MediaTakeCameraSnapshotParameters {
    /** Indicates the unique identifier of the camera pipeline which is obtained using the load() API. */
    mediaId: string;
    /** Indicates the path of the captured image to be stored. */
    location: string;
    /** Indicates the format of the frame is to be captured.Possible values are:jpg */
    format: string;
    /** Indicates the width of the captured image in pixels.Note: Width should be within the range supported by the camera hardware. */
    width: number;
    /** Indicates the height of the captured image in pixels.Note: Height should be within the range supported by the camera hardware. */
    height: number;
    /** Indicates the percentage of the picture quality.Possible values are:0-100 */
    pictureQuality: number;
}

/** ACG: media.operationDescriptionCaptures a frame from the camera preview.ParametersNameRequiredTypeDescriptionmediaIdRequiredStringIndicates the unique identifier of the camera pipeline which is obtained using the load() API.locationRequiredStringIndicates the path of the captured image to be stored.formatRequiredStringIndicates the format of the frame is to be captured.Possible values are:jpgwidthRequiredNumberIndicates the width of the captured image in pixels.Note: Width should be within the range supported by the camera hardware.heightRequiredNumberIndicates the height of the captured image in pixels.Note: Height should be within the range supported by the camera hardware.pictureQualityRequiredNumberIndicates the percentage of the picture quality.Possible values are:0-100Call Returns */
export interface MediaTakeCameraSnapshotCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation.Note: errorCode always defaults to 0. Details of the error will be available in the logs. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation.Note: errorText is always empty. Details of the error will be available in the logs. */
    errorText?: string;
    /** Indicates the unique identifier the camera pipeline. */
    mediaId: string;
}
