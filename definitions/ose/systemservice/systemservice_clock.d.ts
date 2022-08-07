/** Contains details of the timestamp. */
export interface SystemserviceTimestamp {
    /** Source of the timestamp. For example monotonic, etc.Note: currently only monotonic is used. */
    source: string;
    /** Seconds for the timestamp */
    sec: number;
    /** Nanoseconds for the timestamp */
    nsec: number;
}

/** ACG: time.management, systemsettings.managementDescriptionThe setTime method is used to set the time. By calling this method you can update any time data source, including Linux system time, network-broadcasted time, user time and others.Any application can use this method.After this method is called, the system services receives a notification about the time update.Parameters */
export interface SystemserviceClockSetTimeParameters {
    /** Seconds since epoch in UTC time-zone. Note: Either utc field or available field is mandatory. */
    utc: number;
    /** Time source associated with time info update (default "manual").Only those sources that are listed in the timeSources Preference key can be set. */
    source?: string;
    /** Availability flag. Set to false to specify that source is not available.Note: Either available field or utc field is mandatory. */
    available: boolean;
    /** Monotonic timestamp. If set, will be used to calculate a delay between sending and receipt of this request over luna-bus and add that to utc field. */
    timestamp?: SystemserviceTimestamp;
}

/** ACG: time.management, systemsettings.managementDescriptionThe setTime method is used to set the time. By calling this method you can update any time data source, including Linux system time, network-broadcasted time, user time and others.Any application can use this method.After this method is called, the system services receives a notification about the time update.ParametersNameRequiredTypeDescriptionutcRequiredNumberSeconds since epoch in UTC time-zone. Note: Either utc field or available field is mandatory.sourceOptionalStringTime source associated with time info update (default "manual").Only those sources that are listed in the timeSources Preference key can be set. availableRequiredBooleanAvailability flag. Set to false to specify that source is not available.Note: Either available field or utc field is mandatory.timestampOptionalObject: TimestampMonotonic timestamp. If set, will be used to calculate a delay between sending and receipt of this request over luna-bus and add that to utc field.Call Returns */
export interface SystemserviceClockSetTimeCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check  "errorText" field for details. The clock/setTime method may fail because:Requested clock is not registered. */
    returnValue: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** Error Code Number */
    errorCode?: number;
}

/** ACG: time.queryDescriptionThe getTime method gets the current time for a specific time source.There are several time data sources on the system: Linux system time, user time, network-broadcast time and more. When calling this method, you can specify the desired time data source in the source parameter. The complete list of the data sources is listed in the source parameter description below. Any application can use this method.Parameters */
export interface SystemserviceClockGetTimeParameters {
    /** Time-source to access (default "system")Supported sources:system - Linux system-wide time (always available)manual - Last time set manually by usersdp - time received with session initialization to server (ex. device membership registration)ntp - time periodically or by request received from NTP (Network Time Protocol) servicenitz - time received over NITZ (Network Identity and Time Zone) from cellular network provider (ex. GSM operator) (Not Available in Auto)broadcast - time received through broadcast signalbroadcast-adjusted - same as broadcast but adjusted in a way to represent time with offset from broadcast regional offset table after applying Linux system-wide time-zoneNote: Some platforms may have different subsets of mentioned time sources according to the value of preference timeSources */
    source?: string;
    /** If manualOverride set to false means that source shouldn't be overriden by manual time when useNetworkTime is turned to false (use the time user specified manually).If useNetworkTime is set to false and manualOverride is set to true, get time specified in source parameter.If useNetworkTime is set to false and manualOverride is set to false, ignore the time in the source parameter and get the time from manual time.The default value of manualOverride is true and gets the time from the source parameter system.Note: useNetworkTime is a preference that is set by the setPreferences, getPreferences, and getPreferenceValues methods. The values for these preferences depend on the app or product that is being used. */
    manualOverride?: boolean;
    /** Fall-back time source to use when requested one is missing. If not set and time-source specified in "source" is missing request will fail (unless overridden by manual time). */
    fallback?: string;
}

/** Details about the offset from one of the time-sources.Example: "offset": {"source": "system","value": 0} */
export interface SystemserviceTimeSourceOffset {
    /** Offset in seconds from the time-source. */
    value: number;
    /** Time source identifier (for example system, manual, etc). Only system is returned for the moment. */
    source: string;
}

/** ACG: time.queryDescriptionThe getTime method gets the current time for a specific time source.There are several time data sources on the system: Linux system time, user time, network-broadcast time and more. When calling this method, you can specify the desired time data source in the source parameter. The complete list of the data sources is listed in the source parameter description below. Any application can use this method.ParametersNameRequiredTypeDescriptionsourceOptionalStringTime-source to access (default "system")Supported sources:system - Linux system-wide time (always available)manual - Last time set manually by usersdp - time received with session initialization to server (ex. device membership registration)ntp - time periodically or by request received from NTP (Network Time Protocol) servicenitz - time received over NITZ (Network Identity and Time Zone) from cellular network provider (ex. GSM operator) (Not Available in Auto)broadcast - time received through broadcast signalbroadcast-adjusted - same as broadcast but adjusted in a way to represent time with offset from broadcast regional offset table after applying Linux system-wide time-zoneNote: Some platforms may have different subsets of mentioned time sources according to the value of preference timeSourcesmanualOverrideOptionalBooleanIf manualOverride set to false means that source shouldn't be overriden by manual time when useNetworkTime is turned to false (use the time user specified manually).If useNetworkTime is set to false and manualOverride is set to true, get time specified in source parameter.If useNetworkTime is set to false and manualOverride is set to false, ignore the time in the source parameter and get the time from manual time.The default value of manualOverride is true and gets the time from the source parameter system.Note: useNetworkTime is a preference that is set by the setPreferences, getPreferences, and getPreferenceValues methods. The values for these preferences depend on the app or product that is being used.fallbackOptionalStringFall-back time source to use when requested one is missing. If not set and time-source specified in "source" is missing request will fail (unless overridden by manual time).Call Returns */
export interface SystemserviceClockGetTimeCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** Actual time source associated with result (either one specified in source or in fallback or manual if overridden). */
    source: string;
    /** Seconds since epoch for UTC. */
    utc?: number;
    /** Offset from some other time source (usually from system). */
    offset?: SystemserviceTimeSourceOffset;
    /** If system-wide system time is returned and this field is present, it will denote last time source used for system time synchronization. */
    systemTimeSource?: string;
    /** Priority of returned time source (with higher level overrides one with lower). */
    priority?: number;
    /** Monotonic timestamp. */
    timestamp?: SystemserviceTimestamp;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}
