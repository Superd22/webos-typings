/** ACG: systemsettings.managementDescriptionThe setPreferences method sets preference keys to specified values. The values are specified by pair: key - value in JSON format. See the example below.Note: This method is public. It can be used both by the system and third-party applications.Parameters */
export interface SystemserviceSetPreferencesParameters {
    /** Each such param represents a key-value pair of preference name and its value.Existing key values are:localeregionringtoneuseNetworkTimeuseNetworkTimeZonetimeZonetimeFormattimeDriftPeriodHrwallpaperNew key will be created if any other key is specified. */
    param208?: any;
}

/** ACG: systemsettings.managementDescriptionThe setPreferences method sets preference keys to specified values. The values are specified by pair: key - value in JSON format. See the example below.Note: This method is public. It can be used both by the system and third-party applications.ParametersNameRequiredTypeDescriptionparam208OptionalObjectEach such param represents a key-value pair of preference name and its value.Existing key values are:localeregionringtoneuseNetworkTimeuseNetworkTimeZonetimeZonetimeFormattimeDriftPeriodHrwallpaperNew key will be created if any other key is specified.Call Returns */
export interface SystemserviceSetPreferencesCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check  "errorText" field for details */
    returnValue: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}
