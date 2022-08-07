/** ACG: audio.operationDescriptionSets the volume for a specific playback that is identified by the track ID (obtained by using registerTrack()).The effective playback volume is calculated as a percentage of the stream volume of the corresponding track.Example 1: Stream volume: 100Track (playback) volume set using setTrackVolume(): 100Effective volume of the track: 100 * 100/100 = 100Example 2: Stream volume: 80Track (playback) volume set using setTrackVolume(): 100Effective volume of the track: 80 * 100/100 = 80Example 3:Stream Volume: 40Track (playback) volume set using setTrackVolume(): 50Effective volume of the playback: 40 * 50/100 = 20Parameters */
export interface AudioSetTrackVolumeParameters {
    /** Track ID of the registered playback. */
    trackId: string;
    /** Volume level to be set. The valid volume range is 0-100 */
    volume: number;
}

/** ACG: audio.operationDescriptionSets the volume for a specific playback that is identified by the track ID (obtained by using registerTrack()).The effective playback volume is calculated as a percentage of the stream volume of the corresponding track.Example 1: Stream volume: 100Track (playback) volume set using setTrackVolume(): 100Effective volume of the track: 100 * 100/100 = 100Example 2: Stream volume: 80Track (playback) volume set using setTrackVolume(): 100Effective volume of the track: 80 * 100/100 = 80Example 3:Stream Volume: 40Track (playback) volume set using setTrackVolume(): 50Effective volume of the playback: 40 * 50/100 = 20ParametersNameRequiredTypeDescriptiontrackIdRequiredStringTrack ID of the registered playback.volumeRequiredNumberVolume level to be set. The valid volume range is 0-100Call Returns */
export interface AudioSetTrackVolumeCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Operation is successful.false: Operation has failed. Check the 'errorCode' and 'errorText' fields. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The reason for the failure of the operation. See the 'API Error Codes Reference' section for details. */
    errorText?: string;
    /** Track ID for which the volume is set. */
    trackId?: string;
    /** Volume level that is set. */
    volume?: number;
    /** Type of audio stream. */
    streamType?: string;
}
