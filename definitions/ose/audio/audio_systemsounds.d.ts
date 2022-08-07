/** ACG: audio.managementDescriptionPlays the various system alert sounds based on the name passed to it.Parameters */
export interface AudioSystemsoundsPlayFeedbackParameters {
    /** Name of the system sound. */
    name?: string;
    /** Sink to use to play sound (default: pfeedback). */
    sink?: string;
    /** To preload and play the file, set play to true.To preload but not to play the file, set play to false.The default value of play is true. */
    play?: boolean;
}

/** ACG: audio.managementDescriptionPlays the various system alert sounds based on the name passed to it.ParametersNameRequiredTypeDescriptionnameOptionalStringName of the system sound.sinkOptionalStringSink to use to play sound (default: pfeedback).playOptionalBooleanTo preload and play the file, set play to true.To preload but not to play the file, set play to false.The default value of play is true.Call Returns */
export interface AudioSystemsoundsPlayFeedbackCallReturn {
    /** If the method succeeds, returnValue will contain true.If the method fails, returnValue will contain false. */
    returnValue: boolean;
}
