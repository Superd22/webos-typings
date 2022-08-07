/** ACG: audio.managementDescriptionPlays PCM audio files through PulseAudio sound server.Parameters */
export interface AudioPlaySoundParameters {
    /** Indicates the absolute path of the PCM file to be played. */
    fileName: string;
    /** Indicates the virtual PulseAudio sink used by the application.Possible values are:default1default2tts1tts2 */
    sink: string;
    /** Indicates the sample format to be set.Possible formats are:PA_SAMPLE_S16LEPA_SAMPLE_S24LEPA_SAMPLE_S32LE */
    format: string;
    /** Indicates the sample rate to be set.Possible rates are:44100480003200022500 */
    sampleRate: number;
    /** Indicates the number of audio channels to be used while playing the file.Possible values are:1 (mono)2 (stereo)3456 */
    channels: number;
}

/** ACG: audio.managementDescriptionPlays PCM audio files through PulseAudio sound server.ParametersNameRequiredTypeDescriptionfileNameRequiredStringIndicates the absolute path of the PCM file to be played.sinkRequiredStringIndicates the virtual PulseAudio sink used by the application.Possible values are:default1default2tts1tts2formatRequiredStringIndicates the sample format to be set.Possible formats are:PA_SAMPLE_S16LEPA_SAMPLE_S24LEPA_SAMPLE_S32LEsampleRateRequiredNumberIndicates the sample rate to be set.Possible rates are:44100480003200022500channelsRequiredNumberIndicates the number of audio channels to be used while playing the file.Possible values are:1 (mono)2 (stereo)3456Call Returns */
export interface AudioPlaySoundCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}
