/** luna://com.webos.service.camera2 */
interface Camera2 {
}

/** ACG: camera.operationDescriptionEstablishes a connection between a camera and the webOS device. Returns the device handle for this connection instance. Parameters */
export interface Camera2OpenParameters {
    /** Indicates the unique identifier of the camera obtained using the getCameraList() API. */
    id: string;
    /** Indicates whether the calling app can update the camera settings.Possible values are:primary: Calling app can update the camera settings.secondary: Calling app cannot update the camera settings.Note:If no mode is selected, then the first call to open the camera gets primary access, and others are given secondary access.If there are multiple calls with the mode set as primary, then only the first call gets primary access. */
    mode?: string;
}

/** ACG: camera.operationDescriptionEstablishes a connection between a camera and the webOS device. Returns the device handle for this connection instance. ParametersNameRequiredTypeDescriptionidRequiredStringIndicates the unique identifier of the camera obtained using the getCameraList() API.modeOptionalStringIndicates whether the calling app can update the camera settings.Possible values are:primary: Calling app can update the camera settings.secondary: Calling app cannot update the camera settings.Note:If no mode is selected, then the first call to open the camera gets primary access, and others are given secondary access.If there are multiple calls with the mode set as primary, then only the first call gets primary access.Call Returns */
export interface Camera2OpenCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the unique identifier for each connection instance. */
    handle?: number;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
}

/** Indicates the type of the memory for the preview data to be written. */
export interface Camera2CameraMemorySource {
    /** Indicates the type of the memory.Possible options: sharedmemory - For System V shared memory.posixshm - For posix shared memoryNote: Currently supports only shared memory. */
    type: string;
    /** Indicates the ID of memory source, if the client has created the memory and wants data to be written at that specific address. */
    source: string;
}

/** ACG: camera.operationDescriptionStarts the preview stream on the camera and writes live data to the shared memory (SystemV or POSIX).The method returns a key for accessing the shared memory, which is required for applications to access data from the shared memory.Note: Use the setFormat() method to set the size and format of the preview stream. Parameters */
export interface Camera2StartPreviewParameters {
    /** Indicates the handle for the device obtained using the open() API. */
    handle: number;
    /** Defines the type and source of the memory. */
    params: Camera2CameraMemorySource;
}

/** ACG: camera.operationDescriptionStarts the preview stream on the camera and writes live data to the shared memory (SystemV or POSIX).The method returns a key for accessing the shared memory, which is required for applications to access data from the shared memory.Note: Use the setFormat() method to set the size and format of the preview stream. ParametersNameRequiredTypeDescriptionhandleRequiredNumberIndicates the handle for the device obtained using the open() API. paramsRequiredObject: camera_memory_sourceDefines the type and source of the memory.Call Returns */
export interface Camera2StartPreviewCallReturn {
    /** Indicates the key for memory access.For System V, key can be accessed directly for camera device buffersFor Posix, shared memory fd has to be shared over getFd API for accessing the camera device buffers */
    key?: number;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
}

/** ACG: camera.operationDescriptionStops the preview stream.Parameters */
export interface Camera2StopPreviewParameters {
    /** Indicates the handle for the device obtained using the open() API. */
    handle: number;
}

/** ACG: camera.operationDescriptionStops the preview stream.ParametersNameRequiredTypeDescriptionhandleRequiredNumberIndicates the handle for the device obtained using the open() API.Call Returns */
export interface Camera2StopPreviewCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
}

/** Indicates the size and the format in which images are to be captured. */
export interface Camera2CameraCaptureFormat {
    /** Indicates the width of the image to be captured.Default width: 640 pixels */
    width: number;
    /** Indicates the height of the image to be captured.Default value: 480 pixels */
    height: number;
    /** Indicates the format of the image.Possible values are:JPEGYUVDefault: YUV */
    format: string;
    /** Indicates the number of images to be captured.Note: The field is required for capturing images in burst mode. */
    nimage?: number;
    /** Indicates the mode in which the image is to be captured.Possible values are:MODE_ONESHOT: For one-shot modeMODE_BURST: For burst modeMODE_CONTINUOUS: For continuous mode */
    mode: string;
}

/** ACG: camera.operationDescriptionStarts capturing images using the camera. The captured images are stored as separate files at the location given by the "path" parameter.The default file name is of the format PictureDDMMYYYY-HHMMSS, where DDMMYYYY-HHMMSS is current date and time.Example: /tmp/Picture11022019-204128.jpegBy default, captured images are saved in the /tmp/ folder.Parameters */
export interface Camera2StartCaptureParameters {
    /** Indicates the handle for the device obtained using the open() API. */
    handle: number;
    /** Indicates the size and format of the images to be captured. */
    params: Camera2CameraCaptureFormat;
    /** Indicates the location where the captured images are to be saved.Note: The API returns an error (error code 45) if the path specified is read-only. */
    path?: string;
}

/** ACG: camera.operationDescriptionStarts capturing images using the camera. The captured images are stored as separate files at the location given by the "path" parameter.The default file name is of the format PictureDDMMYYYY-HHMMSS, where DDMMYYYY-HHMMSS is current date and time.Example: /tmp/Picture11022019-204128.jpegBy default, captured images are saved in the /tmp/ folder.ParametersNameRequiredTypeDescriptionhandleRequiredNumberIndicates the handle for the device obtained using the open() API. paramsRequiredObject: camera_capture_formatIndicates the size and format of the images to be captured. pathOptionalStringIndicates the location where the captured images are to be saved.Note: The API returns an error (error code 45) if the path specified is read-only.Call Returns */
export interface Camera2StartCaptureCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
}

/** ACG: camera.operationDescriptionStops camera from capturing images in the continuous mode. Continuous mode captures frames in succession till the stopCapture() method is called. Parameters */
export interface Camera2StopCaptureParameters {
    /** Indicates the handle for the device obtained using the open() API. */
    handle: number;
}

/** ACG: camera.operationDescriptionStops camera from capturing images in the continuous mode. Continuous mode captures frames in succession till the stopCapture() method is called. ParametersNameRequiredTypeDescriptionhandleRequiredNumberIndicates the handle for the device obtained using the open() API.Call Returns */
export interface Camera2StopCaptureCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
}

/** ACG: camera.operationDescriptionCloses the connection between the camera and the webOS device.Parameters */
export interface Camera2CloseParameters {
    /** Indicates the handle for the device obtained using the open() API. */
    handle: number;
}

/** ACG: camera.operationDescriptionCloses the connection between the camera and the webOS device.ParametersNameRequiredTypeDescriptionhandleRequiredNumberIndicates the handle for the device obtained using the open() API. Call Returns */
export interface Camera2CloseCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
}

/** ACG: camera.queryDescriptionGets information about a camera that is connected to the webOS device. Parameters */
export interface Camera2GetInfoParameters {
    /** Indicates id of the camera obtained using the getCameraList() API. */
    id: string;
}

/** Indicates the video size and the video format. */
export interface Camera2Video {
    /** Indicates the width value. */
    maxWidth?: number;
    /** Indicates the height value. */
    maxHeight?: number;
    /** Gives the supported format for video. */
    format?: string;
    /** Indicates the video frame rate. */
    frameRate?: number;
}

/** Indicates the image size and image format. */
export interface Camera2Picture {
    /** Width value */
    maxWidth?: number;
    /** Height value */
    maxHeight?: number;
    /** Supported formats */
    format?: string;
}

/** Indicates the picture and the video details of the camera device. */
export interface Camera2Details {
    /** Indicates the video information. */
    video?: Camera2Video;
    /** Indicates the image information. */
    picture?: Camera2Picture;
}

/** Indicates the information about the camera. */
export interface Camera2CaptureInfo {
    /** Indicates the video and the picture details. */
    details?: Camera2Details;
    /** Indicates the name of the camera. */
    name?: string;
    /** Indicates the type of the device.Possible values are:camera */
    type?: string;
    /** Indicates if the camera is built-in or not. */
    builtin?: boolean;
}

/** ACG: camera.queryDescriptionGets information about a camera that is connected to the webOS device. ParametersNameRequiredTypeDescriptionidRequiredStringIndicates id of the camera obtained using the getCameraList() API.Call Returns */
export interface Camera2GetInfoCallReturn {
    /** Returns information about the camera. */
    info?: Camera2CaptureInfo[];
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
}

/** ACG: camera.operationDescriptionGets the current settings of the connected camera device.Parameters */
export interface Camera2GetPropertiesParameters {
    /** Indicates the handle for the device obtained using the open() API. */
    handle: number;
    /** Indicates the list of specific properties for which settings are returned. */
    params?: string[];
}

/** Contains the properties of the camera. */
export interface Camera2CameraProperties {
    /** Indicates the camera auto white balance on/off (true/false) */
    autoWhiteBalance?: number;
    /** Indicates the camera backlight compensation valuePossible values:truefalse */
    backlightCompensation?: boolean;
    /** Indicates the camera brightness (0-255) */
    brightness?: number;
    /** Indicates the camera contrast (0-255) */
    contrast?: number;
    /** Indicates the camera power line frequency (0-2) */
    frequency?: number;
    /** Indicates the camera gain (0-255) */
    gain?: number;
    /** Camera gamma (1-255) */
    gamma?: number;
    /** Indicates the camera hue (-180 ~ 180) */
    hue?: number;
    /** Indicates the pan value(0-255) */
    pan?: number;
    /** Indicates the supported format resolutions in string array format. */
    resolution?: any;
    /** Indicates the camera saturation (0-255) */
    saturation?: number;
    /** Indicates the camera sharpness (0-255) */
    sharpness?: number;
    /** Indicates the tilt value */
    tilt?: number;
    /** Indicates the white balance temperature (0-10000) */
    whiteBalanceTemperature?: number;
}

/** ACG: camera.operationDescriptionGets the current settings of the connected camera device.ParametersNameRequiredTypeDescriptionhandleRequiredNumberIndicates the handle for the device obtained using the open() API.paramsOptionalString arrayIndicates the list of specific properties for which settings are returned.Call Returns */
export interface Camera2GetPropertiesCallReturn {
    /** Indicates the current properties of the camera. */
    params?: Camera2CameraProperties;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
}

/** ACG: camera.operationDescriptionSets the properties of the connected camera device.Parameters */
export interface Camera2SetPropertiesParameters {
    /** Indicates the handle for the device obtained using the open() API. */
    handle: number;
    /** Indicates an object containing properties of the camera.Note: Even though the API succeeds when an empty params object is provided, we recommend that at least one value must be included. */
    params: Camera2CameraProperties;
}

/** ACG: camera.operationDescriptionSets the properties of the connected camera device.ParametersNameRequiredTypeDescriptionhandleRequiredNumberIndicates the handle for the device obtained using the open() API. paramsRequiredObject: camera_propertiesIndicates an object containing properties of the camera.Note: Even though the API succeeds when an empty params object is provided, we recommend that at least one value must be included.Call Returns */
export interface Camera2SetPropertiesCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
}

/** Indicates the size and format for the preview stream and images. */
export interface Camera2CameraFormat {
    /** Indicates the width of the image to be captured.Default: 640 pixels */
    width: number;
    /** Indicates the height of the image to be captured.Default: 480 pixels */
    height: number;
    /** Indicates the format of the image.Possible values are:JPEGYUVDefault: YUV */
    format: string;
    /** Indicates the frames per second. */
    fps: number;
}

/** ACG: camera.operationDescriptionSets the size and format of the preview stream. This includes the height and width of the frame and the format in which data is to be written to the shared buffer.Parameters */
export interface Camera2SetFormatParameters {
    /** Indicates the camera handle obtained using the open() API. */
    handle: number;
    /** Indicates the size and format of the preview stream. */
    params: Camera2CameraFormat;
}

/** ACG: camera.operationDescriptionSets the size and format of the preview stream. This includes the height and width of the frame and the format in which data is to be written to the shared buffer.ParametersNameRequiredTypeDescriptionhandleRequiredNumberIndicates the camera handle obtained using the open() API.paramsRequiredObject: camera_formatIndicates the size and format of the preview stream.Call Returns */
export interface Camera2SetFormatCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
}

/** ACG: camera.operationDescriptionGets a notification when there is a change in any of the camera properties and formats.Parameters */
export interface Camera2GetEventNotificationParameters {
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribed */
    subscribe: boolean;
}

/** ACG: camera.operationDescriptionGets a notification when there is a change in any of the camera properties and formats.ParametersNameRequiredTypeDescriptionsubscribeRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedCall Returns */
export interface Camera2GetEventNotificationCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the id of the camera. */
    id?: string;
    /** Indicates whether there is a change in camera format or properties.Possible values are:format: If there is a change in camera format. properties: If there is a change in camera properties. */
    eventType?: string;
    /** Indicates the details of camera properties when eventType is properties. */
    propertiesInfo?: Camera2CameraProperties;
    /** Returns the details of the camera format when eventType is format.Note: It may not return all the values mentioned in the formatInfo object. */
    formatInfo?: Camera2CameraFormat;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
}

/** ACG: camera.operationDescriptionProvides the FD (File Descriptor) for the POSIX shared memory.Note: It returns the FD d by attaching it using LS2 attach fd interface to the client.Parameters */
export interface Camera2GetFdParameters {
    /** Indicates the handle for the device obtained using the open() API. */
    handle: number;
}

/** ACG: camera.operationDescriptionProvides the FD (File Descriptor) for the POSIX shared memory.Note: It returns the FD d by attaching it using LS2 attach fd interface to the client.ParametersNameRequiredTypeDescriptionhandleRequiredNumberIndicates the handle for the device obtained using the open() API. Call Returns */
export interface Camera2GetFdCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue?: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
}
