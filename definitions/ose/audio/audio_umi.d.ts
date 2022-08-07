/** ACG: audio.operationDescriptionEstablishes connection for the audio resource.Parameters */
export interface AudioUMIConnectParameters {
    /** Indicates the audio output device.Possible values are:alsa */
    outputMode: string;
    /** Indicates the type of the audio stream.Possible values are:umimedia */
    audioType: string;
    /** Indicates the audio sink.Possible values are:ALSA */
    sink: string;
    /** Indicates the audio source.Possible values are:AMIXER */
    source: string;
    /** Audio source port.Possible values are:0~7 for AMIXER source */
    sourcePort: number;
    /** Indicates the audio pipeline ID. */
    context?: string;
}

/** ACG: audio.operationDescriptionEstablishes connection for the audio resource.ParametersNameRequiredTypeDescriptionoutputModeRequiredStringIndicates the audio output device.Possible values are:alsaaudioTypeRequiredStringIndicates the type of the audio stream.Possible values are:umimediasinkRequiredStringIndicates the audio sink.Possible values are:ALSAsourceRequiredStringIndicates the audio source.Possible values are:AMIXERsourcePortRequiredNumberAudio source port.Possible values are:0~7 for AMIXER sourcecontextOptionalStringIndicates the audio pipeline ID.Call Returns */
export interface AudioUMIConnectCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
    /** Indicates the audio source. */
    source: string;
    /** Indicates the audio sink. */
    sink: string;
}

/** ACG: audio.operationDescriptionDisconnects the connection. Parameters */
export interface AudioUMIDisconnectParameters {
    /** Indicates the audio sink.Possible values are:ALSA */
    sink: string;
    /** Indicates the audio source.Possible values are:AMIXER */
    source: string;
    /** Audio source port.Possible values are:0~7 for AMIXER source */
    sourcePort: number;
    /** Indicates the audio stream type.Possible values are:umimedia */
    audioType: string;
    /** Indicates the audio pipeline ID. */
    context?: string;
}

/** ACG: audio.operationDescriptionDisconnects the connection. ParametersNameRequiredTypeDescriptionsinkRequiredStringIndicates the audio sink.Possible values are:ALSAsourceRequiredStringIndicates the audio source.Possible values are:AMIXERsourcePortRequiredNumberAudio source port.Possible values are:0~7 for AMIXER sourceaudioTypeRequiredStringIndicates the audio stream type.Possible values are:umimediacontextOptionalStringIndicates the audio pipeline ID.Call Returns */
export interface AudioUMIDisconnectCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
    /** Indicates the audio source. */
    source: string;
    /** Indicates the audio sink. */
    sink: string;
}

/** Object returned by the UMI/getStatus. */
export interface AudioAudio {
    /** Indicates the audio source.Possible values are:AMIXER */
    source: string;
    /** Indicates the audio sink.Possible values are:ALSA */
    sink: string;
    /** Indicates if the audio is muted.Possible values are:true: If the audio is muted.false: If the audio is not muted. */
    muted: boolean;
    /** Indicates the audio output device.Possible values are:ALSA */
    outputMode: string;
}

/** ACG: mediaDescriptionShows the connection status of audio resources. ParametersNoneCall Returns */
export interface AudioUMIGetStatusCallReturn {
    /** Audio connection details. */
    audio: AudioAudio[];
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
}

/** ACG: mediaDescriptionMutes or unmutes the input volume of the requested connection.Note: This method is added for future-use. It does not have any impact on the audio setting.Parameters */
export interface AudioUMIMuteParameters {
    /** Audio sink.Possible values are:ALSA */
    sink: string;
    /** Audio source.Possible values are:AMIXER */
    source: string;
    /** Audio source port */
    sourcePort: number;
    /** Indicates if the input volume is to be muted. Possible values are: true - If the input volume is to be muted.false - If the input volume is not to be muted. */
    mute: boolean;
}

/** ACG: mediaDescriptionMutes or unmutes the input volume of the requested connection.Note: This method is added for future-use. It does not have any impact on the audio setting.ParametersNameRequiredTypeDescriptionsinkRequiredStringAudio sink.Possible values are:ALSAsourceRequiredStringAudio source.Possible values are:AMIXERsourcePortRequiredNumberAudio source portmuteRequiredBooleanIndicates if the input volume is to be muted. Possible values are: true - If the input volume is to be muted.false - If the input volume is not to be muted. Call Returns */
export interface AudioUMIMuteCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
}
