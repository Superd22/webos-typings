/** ACG: systemsettings.managementDescriptionAdds a new ringtone on devices that use ringtones.Note: This method is public. It can be used both by the system and third-party applications.Parameters */
export interface SystemserviceRingtoneAddRingtoneParameters {
    /** Absolute path to the ringtone file.Note: The ringtone file needs to be copied manually to the target prior to using this API */
    filePath: string;
}

/** ACG: systemsettings.managementDescriptionAdds a new ringtone on devices that use ringtones.Note: This method is public. It can be used both by the system and third-party applications.ParametersNameRequiredTypeDescriptionfilePathRequiredStringAbsolute path to the ringtone file.Note: The ringtone file needs to be copied manually to the target prior to using this APICall Returns */
export interface SystemserviceRingtoneAddRingtoneCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check  "errorText" field for details */
    returnValue: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: systemsettings.managementDescriptionDeletes a ringtone. Note: This method is public. It can be used both by the system and third-party applications.Parameters */
export interface SystemserviceRingtoneDeleteRingtoneParameters {
    /** Absolute path to the ringtone file. The directory must be given only as "/media/internal/ringtones/"Note: The ringtone file needs to be added via addRingtone API prior to using this API. */
    filePath: string;
}

/** ACG: systemsettings.managementDescriptionDeletes a ringtone. Note: This method is public. It can be used both by the system and third-party applications.ParametersNameRequiredTypeDescriptionfilePathRequiredStringAbsolute path to the ringtone file. The directory must be given only as "/media/internal/ringtones/"Note: The ringtone file needs to be added via addRingtone API prior to using this API.Call Returns */
export interface SystemserviceRingtoneDeleteRingtoneCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check  "errorText" field for details */
    returnValue: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}
