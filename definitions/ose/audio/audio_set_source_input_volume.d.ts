/** ACG: audio.operationDescriptionSets input volume of the source.Parameters */
export interface AudioSetSourceInputVolumeParameters {
    /** The source to which volume must be applied.Possible values are:recordbtcallsourcealexawebcallvoiceassistance */
    sourceType: string;
    /** The volume level to be applied to the sourcePossible range: 0-100 */
    volume: number;
    /** Indicates if the volume is to be applied in steps.Possible values are:true:  Applied in steps.false: Not applied in steps (default). */
    ramp?: boolean;
}

/** ACG: audio.operationDescriptionSets input volume of the source.ParametersNameRequiredTypeDescriptionsourceTypeRequiredStringThe source to which volume must be applied.Possible values are:recordbtcallsourcealexawebcallvoiceassistancevolumeRequiredNumberThe volume level to be applied to the sourcePossible range: 0-100rampOptionalBooleanIndicates if the volume is to be applied in steps.Possible values are:true:  Applied in steps.false: Not applied in steps (default).Call Returns */
export interface AudioSetSourceInputVolumeCallReturn {
    /** The updated volume level. */
    volume?: number;
    /** The source to which the volume is set. */
    sourceType?: string;
    /** Indicates the status of the operation. Possible values are:true: Operation is successful.false: Operation has failed. Check the "errorCode" and "errorText" fields for details. See the "Error Codes" section of this method for details. */
    returnValue: boolean;
    /** The reason for the failure of the operation. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}
