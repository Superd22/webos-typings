/** ACG: systemsettings.queryDescriptionRetrieves a list of valid values for the specified key. If the key is of a type that takes one of a discrete set of valid values, it returns that set. Otherwise, it returns nothing for the key.Parameters */
export interface SystemserviceGetPreferenceValuesParameters {
    /** Key name to fetch preference values for.Accepted key names:localeregionringtoneuseNetworkTimeuseNetworkTimeZonetimeZonetimeFormatwallpaper */
    key: string;
}

/** ACG: systemsettings.queryDescriptionRetrieves a list of valid values for the specified key. If the key is of a type that takes one of a discrete set of valid values, it returns that set. Otherwise, it returns nothing for the key.ParametersNameRequiredTypeDescriptionkeyRequiredstringKey name to fetch preference values for.Accepted key names:localeregionringtoneuseNetworkTimeuseNetworkTimeZonetimeZonetimeFormatwallpaperCall Returns */
export interface SystemserviceGetPreferenceValuesCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. The method can fail if the "key is not specified or is invalid". */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** Contains the set returned for the specified key name in command parameters. */
    [keyname]?: any[];
    /** Provides ZoneID with the respective time offset for different time zones. */
    syszones?: any[];
    /** Provides a 3 digit mobile country code [mcc], which signifies details of the region. Example: "mcc" : 460. */
    mccInfo?: any[];
}
