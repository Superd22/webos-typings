/** ACG: arescli.interfaceDescriptionReturns details of software deployed on the webOS device.Note: Currently, returns only the nodejs version.Parameters */
export interface SystemserviceSoftwareInfoQueryParameters {
    /** List of requested parameters.Possible values:nodejs_versionsNote: If no value is specified, all available parameters are returned: */
    parameters?: string[];
}

/** ACG: arescli.interfaceDescriptionReturns details of software deployed on the webOS device.Note: Currently, returns only the nodejs version.ParametersNameRequiredTypeDescriptionparametersOptionalString arrayList of requested parameters.Possible values:nodejs_versionsNote: If no value is specified, all available parameters are returned:Call Returns */
export interface SystemserviceSoftwareInfoQueryCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Operation is successful.false: Operation has failed. Check the 'errorCode' and 'errorText' fields. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The reason for the failure of the operation. See the 'Error Codes' section of this method for details. */
    errorText?: string;
    /** Versions of nodejs that are available on the webOS device. */
    nodejs_versions?: string[];
}
