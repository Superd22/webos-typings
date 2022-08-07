/** ACG: systemsettings.queryDescriptionThe getPreferences method retrieves the values for keys specified in a passed array. If subscribe is set to true, then getPreferences sends an update if the key values change. This method queries system preference values and custom user values.Parameters */
export interface SystemserviceGetPreferencesParameters {
    /** If subscribe is set to true, then getPreferences sends an update if the key values have changed. */
    subscribe?: boolean;
    /** An array of key names. A key is a system preference or custom user key (see overview of this API for details).Accepted key names:localeregionringtoneuseNetworkTimeuseNetworkTimeZonetimeZonetimeFormattimeChangeLaunchtimeDriftPeriodHrwallpaper */
    keys: string[];
}

/** ACG: systemsettings.queryDescriptionThe getPreferences method retrieves the values for keys specified in a passed array. If subscribe is set to true, then getPreferences sends an update if the key values change. This method queries system preference values and custom user values.ParametersNameRequiredTypeDescriptionsubscribeOptionalbooleanIf subscribe is set to true, then getPreferences sends an update if the key values have changed.keysRequiredstring arrayAn array of key names. A key is a system preference or custom user key (see overview of this API for details).Accepted key names:localeregionringtoneuseNetworkTimeuseNetworkTimeZonetimeZonetimeFormattimeChangeLaunchtimeDriftPeriodHrwallpaperCall Returns */
export interface SystemserviceGetPreferencesCallReturn {
    /** True if the subscription was successful */
    subscribed?: boolean;
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}
