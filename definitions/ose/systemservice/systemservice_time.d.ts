/** ACG: time.managementDescriptionThe convertDate method converts the given date from one timezone to another.Parameters */
export interface SystemserviceTimeConvertDateParameters {
    /** Date to convert as a string in format: "Y-m-d H:M:S". */
    date: string;
    /** Source timezone. */
    source_tz: string;
    /** Destination timezone. */
    dest_tz: string;
}

/** ACG: time.managementDescriptionThe convertDate method converts the given date from one timezone to another.ParametersNameRequiredTypeDescriptiondateRequiredStringDate to convert as a string in format: "Y-m-d H:M:S".source_tzRequiredStringSource timezone.dest_tzRequiredStringDestination timezone.Call Returns */
export interface SystemserviceTimeConvertDateCallReturn {
    /** The date in the destination timezone if the call was successful. */
    date: string;
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorText" field for details */
    returnValue: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** This object provides details of the current system time.Example:"localtime": {"month": 12,"day": 16,"hour": 11,"minute": 0,"year": 2014,"second": 38} */
export interface SystemserviceLocalTime {
    /** The year. */
    year: number;
    /** The month (1-12). */
    month: number;
    /** Day of the week (0 - 6). */
    dayOfWeek?: number;
    /** The day (1 - 31). */
    day: number;
    /** The hour (0 - 23). */
    hour: number;
    /** The minute (0 - 59). */
    minute: number;
    /** The second (0 - 59 or 60 for leap seconds). */
    second: number;
}

/** Contains details of the timestamp. */
export interface SystemserviceTimestamp {
    /** Source of the timestamp. For example monotonic, etc.Note: currently only monotonic is used. */
    source: string;
    /** Seconds for the timestamp */
    sec: number;
    /** Nanoseconds for the timestamp */
    nsec: number;
}

/** ACG: time.queryDescriptionThe getBroadcastTime method returns the broadcast time.ParametersNoneCall Returns */
export interface SystemserviceTimeGetBroadcastTimeCallReturn {
    /** Seconds since epoch for UTC time-zone */
    utc: number;
    /** Seconds since epoch with offset according to broadcast regional offsets table */
    local?: number;
    /** Calendar representation of local time */
    localtime?: SystemserviceLocalTime;
    /** Monotonic timestamp. */
    timestamp?: SystemserviceTimestamp;
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: time.queryDescriptionThe getEffectiveBroadcastTime method returns the effective broadcast time. If no broadcast time info update has been received since boot, the Linux system-wide time is returned.Parameters */
export interface SystemserviceTimeGetEffectiveBroadcastTimeParameters {
    /** Subscribe for notifications. Possible values are:true - Get notificationsfalse - Notifications are not required​Default value: false */
    subscribe?: boolean;
}

/** ACG: time.queryDescriptionThe getEffectiveBroadcastTime method returns the effective broadcast time. If no broadcast time info update has been received since boot, the Linux system-wide time is returned.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanSubscribe for notifications. Possible values are:true - Get notificationsfalse - Notifications are not required​Default value: falseCall Returns */
export interface SystemserviceTimeGetEffectiveBroadcastTimeCallReturn {
    /** True if the subscription was successful. */
    subscribed?: boolean;
    /** Seconds since epoch suitable for converting from UTC to local time which corresponds with appropriate broadcast regional offset table entry */
    adjustedUtc: number;
    /** Seconds since epoch with offset according to broadcast regional offsets table */
    local: number;
    /** Calendar representation of local time. */
    localtime?: SystemserviceLocalTime;
    /** Monotonic timestamp */
    timestamp?: SystemserviceTimestamp;
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: time.queryDescriptionThe getNTPTime returns the fresh NTP time (the time data transferred by the Network Time Protocol).ParametersNoneCall Returns */
export interface SystemserviceTimeGetNTPTimeCallReturn {
    /** Seconds since epoch for UTC time-zone */
    utc?: number;
    /** subscribed will always contain false. */
    subscribed: boolean;
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: time.queryDescriptionThe time/getSystemTime method gets the system time and time zone information. Apps can susbcribe to this method and receive notifications when the time zone changes and/or the system time changes by a significant amount (currently 5 min.).This method does not generate errors, however if the LSSubscriptionAdd method, which is used inside the getSystemTime method, returns an error, this error is reported.Parameters */
export interface SystemserviceTimeGetSystemTimeParameters {
    /** If the app wants to receive notifications when the time zone changes and/or the system time changes by a system-defined threshold, it should set subscribe to true. The current system-defined threshold is 5 minutes. If the app does not wish to receive notifications of change in time zone and/or the system time changes, it should set subscribe ​ to false. */
    subscribe?: boolean;
}

/** ACG: time.queryDescriptionThe time/getSystemTime method gets the system time and time zone information. Apps can susbcribe to this method and receive notifications when the time zone changes and/or the system time changes by a significant amount (currently 5 min.).This method does not generate errors, however if the LSSubscriptionAdd method, which is used inside the getSystemTime method, returns an error, this error is reported.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIf the app wants to receive notifications when the time zone changes and/or the system time changes by a system-defined threshold, it should set subscribe to true. The current system-defined threshold is 5 minutes. If the app does not wish to receive notifications of change in time zone and/or the system time changes, it should set subscribe ​ to false.Call Returns */
export interface SystemserviceTimeGetSystemTimeCallReturn {
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** Indicates whether the system is currently using Daylight Saving Time (DST). The possible values:True - System is using DSTFalse - System is not using DSTNote: This field is not provided if the DST information is not available. */
    isDST?: boolean;
    /** The object that contains information about the current system time. */
    localtime: SystemserviceLocalTime;
    /** The number of minutes from UTC. This can be negative for time zones west of UTC, and positive for time zones east of UTC. */
    offset: number;
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** Indicates if subscribed to get notified.true - Subscribed for changesfalse - Not subscribed */
    subscribed?: boolean;
    /** Monotonic timestamp */
    timestamp?: SystemserviceTimestamp;
    /** The current system time zone. It has the same format as the TZ  environment variable. For information, see http://www.gnu.org/software/libc/manual/html_node/TZ-Variable.html */
    timezone: string;
    /** Linux zone information file for the currently set zone. For more information, see: http://linux.die.net/man/5/tzfile */
    timeZoneFile: string;
    /** Contains the time zone abbreviation in the standard Unix format, for example PDT (which stands for Pacific Daylight Time). The time zone corresponds to the current time zone of the system. */
    TZ: string;
    /** The number of milliseconds since Epoch (midnight of January 1, 1970 UTC), also know as the Unix time. */
    utc: number;
    /** It will denote the time source used for system time synchronization. */
    systemTimeSource: string;
}

/** ACG: time.queryDescriptionThe time/getSystemTime method gets the system time and time zone information. Apps can susbcribe to this method and receive notifications when the time zone changes and/or the system time changes by a significant amount (currently 5 min.).This method does not generate errors, however if the LSSubscriptionAdd method, which is used inside the getSystemTime method, returns an error, this error is reported.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIf the app wants to receive notifications when the time zone changes and/or the system time changes by a system-defined threshold, it should set subscribe to true. The current system-defined threshold is 5 minutes. If the app does not wish to receive notifications of change in time zone and/or the system time changes, it should set subscribe ​ to false.Call ReturnsNameRequiredTypeDescriptionerrorCodeOptionalNumberThe error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details.isDSTOptionalBooleanIndicates whether the system is currently using Daylight Saving Time (DST). The possible values:True - System is using DSTFalse - System is not using DSTNote: This field is not provided if the DST information is not available.localtimeRequiredObject: LocalTimeThe object that contains information about the current system time.offsetRequiredNumberThe number of minutes from UTC. This can be negative for time zones west of UTC, and positive for time zones east of UTC.returnValueRequiredBooleanIndicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for detailssubscribedOptionalBooleanIndicates if subscribed to get notified.true - Subscribed for changesfalse - Not subscribedtimestampOptionalObject: TimestampMonotonic timestamptimezoneRequiredString The current system time zone. It has the same format as the TZ  environment variable. For information, see http://www.gnu.org/software/libc/manual/html_node/TZ-Variable.html timeZoneFileRequiredStringLinux zone information file for the currently set zone. For more information, see: http://linux.die.net/man/5/tzfileTZRequiredString Contains the time zone abbreviation in the standard Unix format, for example PDT (which stands for Pacific Daylight Time). The time zone corresponds to the current time zone of the system.utcRequiredNumberThe number of milliseconds since Epoch (midnight of January 1, 1970 UTC), also know as the Unix time.systemTimeSourceRequiredString It will denote the time source used for system time synchronization.Subscription Returns */
export interface SystemserviceTimeGetSystemTimeSubscription {
    /** The number of milliseconds since Epoch (midnight of January 1, 1970 UTC), also know as the Unix time. */
    utc: number;
    /** The object that contains information about the current system time. */
    localtime: SystemserviceLocalTime;
    /** The number of minutes from UTC. This can be negative for time zones west of UTC, and positive for time zones east of UTC. */
    offset: number;
    /** The current system time zone. It has the same format as the TZ  environment variable. For information, see http://www.gnu.org/software/libc/manual/html_node/TZ-Variable.html */
    timezone: string;
    /** Contains the time zone abbreviation in the standard Unix format, for example PDT (which stands for Pacific Daylight Time). The time zone corresponds to the current time zone of the system. */
    TZ: string;
    /** Linux zone information file for the currently set zone. For more information, see: http://linux.die.net/man/5/tzfile */
    timeZoneFile: string;
    /** The NITZValidTime property indicaltes that a valid time was correctly set using NITZ. This value is needed because sometimes the time-zone may be received ahead of the time. */
    NITZValidTime?: boolean;
    /** The NITZValidZone property indicates that a valid time-zone was correctly set using NITZ. This value is needed because sometimes the time may be received ahead of the time-zone. */
    NITZValidZone?: boolean;
    /** A flag that indicates whether daylight saving time (DST) is in effect at the time described. The value is true if DST is in effect, false if it is not, and absent if the information is not available. */
    isDST?: boolean;
    /** It will denote the time source used for system time synchronization. */
    systemTimeSource: string;
}

/** ACG: time.queryDescriptionReturns the path to Linux time-zone information file for the currently set zone. This file contains the list of rules that define switching to and from daylight saving time. In particular, the time-zone information file defines when the time shift occurs in each particular year.Note: A call to this method always succeeds. This method does not return returnValue.ParametersNoneCall Returns */
export interface SystemserviceTimeGetSystemTimezoneFileCallReturn {
    /** subscribed will always contain false. */
    subscribed: string;
    /** Path to the system timezone file. */
    timeZoneFile: string;
}

/** ACG: time.queryDescriptionReturns the number of seconds since the last system boot. This method uses the Linux-specific sysinfo function.ParametersNoneCall Returns */
export interface SystemserviceTimeGetSystemUptimeCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** The error code for the failed operation.It contains the POSIX errno value. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** Number of seconds since last system boot. */
    uptime?: number;
}

/** ACG: time.managementDescriptionExecutes all methods listed in the timeChangeLaunch list (value of the timeChangeLaunch preference).The timeChangeLaunch list contains all applications that must be executed when the switching to/from the daylight saving time occurs. These applications are executed automatically, you should not call the launchTimeChangeApps method. However, if for some reason you need to execute these applications apart from the schedule, you can call the the launchTimeChangeApps method.Note: This method call always succeeds.ParametersNoneCall Returns */
export interface SystemserviceTimeLaunchTimeChangeAppsCallReturn {
    /** Always returns false. */
    subscribed: string;
    /** Always returns true. */
    returnValue: boolean;
}

/** ACG: time.managementDescriptionSets the broadcast time which is in the broadcast signal. The system service will be notified that the broadcast time must be changed.Parameters */
export interface SystemserviceTimeSetBroadcastTimeParameters {
    /** UTC time in seconds since epoch. */
    utc: number;
    /** Seconds since epoch with local time offset (according to broadcast regional offsets table). */
    local: number;
    /** Monotonic timestamp. If set, will be used to calculate a delay between sending and receipt of this request over luna-bus and add that to utc field. */
    timestamp?: SystemserviceTimestamp;
}

/** ACG: time.managementDescriptionSets the broadcast time which is in the broadcast signal. The system service will be notified that the broadcast time must be changed.ParametersNameRequiredTypeDescriptionutcRequiredNumberUTC time in seconds since epoch.localRequiredNumberSeconds since epoch with local time offset (according to broadcast regional offsets table).timestampOptionalObject: TimestampMonotonic timestamp. If set, will be used to calculate a delay between sending and receipt of this request over luna-bus and add that to utc field.Call Returns */
export interface SystemserviceTimeSetBroadcastTimeCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: number;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: time.managementDescriptionThe setSystemNetworkTime method is used to send a NITZ messages to Luna System Service. A NITZ message contains the local time and date, time zone and DST offset, as well as network provider identity. NITZ can be used to update the system clock of network devices.This method is called by the service, which receives the time data from the service provider.Parameters */
export interface SystemserviceTimeSetSystemNetworkTimeParameters {
    /** GMT second. */
    sec: string;
    /** GMT minute. */
    min: string;
    /** GMT hour. */
    hour: string;
    /** Day of the month. */
    mday: string;
    /** Month of the year, 0 - 11. */
    mon: string;
    /** Year calculated from 1900, for example 2012 - 1900 = 112. */
    year: string;
    /** Offset from GMT time in minutes. */
    offset: string;
    /** Country code. */
    mcc: string;
    /** Network code assign to carrier within a country */
    mnc: string;
    /** Is set to true of if timezone is valid. If false, mcc and offset are used to calculate time. */
    tzvalid: boolean;
    /** Is time valid. */
    timevalid: boolean;
    /** Is daylight saving time in use. */
    dstvalid: boolean;
    /** If this is 1, month needs to be set within the timeframe of DaylightSavingTime (~April - ~Septermber). If this is 0, months needs to be specified outside of DaylightSavingTime ( ~November - February). */
    dst: number;
    /** Timestamp of current time. Can be number of ticks from system boot. The number is used to calculate delay of message delivery */
    timestamp: string;
    /** Set as true if you wish to test this service with a fake NITZ message. */
    tilIgnore: boolean;
}

/** ACG: time.managementDescriptionThe setSystemNetworkTime method is used to send a NITZ messages to Luna System Service. A NITZ message contains the local time and date, time zone and DST offset, as well as network provider identity. NITZ can be used to update the system clock of network devices.This method is called by the service, which receives the time data from the service provider.ParametersNameRequiredTypeDescriptionsecRequiredStringGMT second.minRequiredStringGMT minute.hourRequiredStringGMT hour.mdayRequiredStringDay of the month.monRequiredStringMonth of the year, 0 - 11.yearRequiredStringYear calculated from 1900, for example 2012 - 1900 = 112.offsetRequiredStringOffset from GMT time in minutes.mccRequiredStringCountry code.mncRequiredStringNetwork code assign to carrier within a countrytzvalidRequiredBooleanIs set to true of if timezone is valid. If false, mcc and offset are used to calculate time.timevalidRequiredBooleanIs time valid.dstvalidRequiredBooleanIs daylight saving time in use.dstRequiredNumber (int32_t)If this is 1, month needs to be set within the timeframe of DaylightSavingTime (~April - ~Septermber). If this is 0, months needs to be specified outside of DaylightSavingTime ( ~November - February).timestampRequiredStringTimestamp of current time. Can be number of ticks from system boot. The number is used to calculate delay of message deliverytilIgnoreRequiredBooleanSet as true if you wish to test this service with a fake NITZ message.Call Returns */
export interface SystemserviceTimeSetSystemNetworkTimeCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: time.managementDescriptionThe setSystemTime method sets the Linux system-wide time effectively overriding any previous synchronization with any time source.Note: this API might not change system time returned by getSystemTime. It depends on manualOverride and useNetworkTime preferences.Parameters */
export interface SystemserviceTimeSetSystemTimeParameters {
    /** The number of milliseconds since Epoch (midnight of January 1, 1970 UTC), aka - Unix time. */
    utc: number;
    /** Monotonic timestamp. If set, will be used to calculate a delay between sending and receipt of this request over luna-bus and add that to the utc field. */
    timestamp?: SystemserviceTimestamp;
}

/** ACG: time.managementDescriptionThe setSystemTime method sets the Linux system-wide time effectively overriding any previous synchronization with any time source.Note: this API might not change system time returned by getSystemTime. It depends on manualOverride and useNetworkTime preferences.ParametersNameRequiredTypeDescriptionutcRequiredNumberThe number of milliseconds since Epoch (midnight of January 1, 1970 UTC), aka - Unix time.timestampOptionalObject: TimestampMonotonic timestamp. If set, will be used to calculate a delay between sending and receipt of this request over luna-bus and add that to the utc field.Call Returns */
export interface SystemserviceTimeSetSystemTimeCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: time.managementDescriptionThe setTimeChangeLaunch method adds an application to, or removes it from the timeChangeLaunch list.The timeChangeLaunch list contains the applications that are automatically executed by the system when the switch to or from the daylight saving time occurs.Parameters */
export interface SystemserviceTimeSetTimeChangeLaunchParameters {
    /** Application ID. */
    appId: string;
    /** If true, adds the application to the launch list. If false, the application is removed. */
    active: boolean;
    /** Launch parameters for the application. */
    parameters: any;
}

/** ACG: time.managementDescriptionThe setTimeChangeLaunch method adds an application to, or removes it from the timeChangeLaunch list.The timeChangeLaunch list contains the applications that are automatically executed by the system when the switch to or from the daylight saving time occurs.ParametersNameRequiredTypeDescriptionappIdRequiredStringApplication ID.activeRequiredBooleanIf true, adds the application to the launch list. If false, the application is removed.parametersRequiredObjectLaunch parameters for the application.Call Returns */
export interface SystemserviceTimeSetTimeChangeLaunchCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: time.managementDescriptionThe setTimeWithNTP methods synchronizes the system time with the NTP.Note: This method call always succeeds.ParametersNoneCall Returns */
export interface SystemserviceTimeSetTimeWithNTPCallReturn {
    /** Always true */
    returnValue: boolean;
}

/** ACG: NoneDescriptionReturns the locale info matching the requested locale settings. In particular, the name of the city is returned on the language for which the code is specified in the locale request parameter.Parameters */
export interface SystemserviceTimeGetCurrentTimeZoneByLocaleParameters {
    /** The requested locale code. For example: "en" - English, "de" - German, "ko" - Korean.If the wrong locale code is specified, the method will return the default time zone locale data. */
    locale: string;
}

/** ACG: NoneDescriptionReturns the locale info matching the requested locale settings. In particular, the name of the city is returned on the language for which the code is specified in the locale request parameter.ParametersNameRequiredTypeDescriptionlocaleRequiredStringThe requested locale code. For example: "en" - English, "de" - German, "ko" - Korean.If the wrong locale code is specified, the method will return the default time zone locale data.Call Returns */
export interface SystemserviceTimeGetCurrentTimeZoneByLocaleCallReturn {
    /** The timezone matching the given parameters. */
    timeZone?: string;
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorText" field for details */
    returnValue: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}
