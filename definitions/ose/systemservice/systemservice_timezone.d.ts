/** This object provides details of the EAS time structure.Example:"standardDate": {"month": 12,"day": 3,"dayOfWeek": 2,"hour": 11,"minute": 0,"year": 2014,"second": 38} */
export interface SystemserviceEasLocalTime {
    /** The year. Default value is current year */
    year?: number;
    /** The month (1-12). */
    month: number;
    /** Day of the week (0 - 6). 0 is for Sunday, 1 - for Monday and so on to 6 - for Saturday */
    dayOfWeek: number;
    /** Occurrence of the day of the week within the month (1 - 5). */
    day: number;
    /** The hour (0 - 23). */
    hour: number;
    /** The minute (0 - 59). Default value is 0 */
    minute?: number;
    /** The second (0 - 59). Default value is 0 */
    second?: number;
}

/** ACG: time.queryDescriptionGets the time-zone that matches the provided EAS data. This method enables you to determine the time zone by the specified time stamp.Parameters */
export interface SystemserviceTimezoneGetTimeZoneFromEasDataParameters {
    /** Number of minutes that a time zone is offset from Coordinated Universal Time (UTC). */
    bias: number;
    /** Object containing date and time information in standard time. If any of the fields for EasLocalTime structure are missing or out of range, this field is ignored as not specified. This field should be specified in combination with daylightDate. If either standardDate or daylightDate is not specified, both fields are ignored as not specified. */
    standardDate?: SystemserviceEasLocalTime;
    /** The standardBias is the bias value to be used for local time translations that occur during standard time. This value is added to the value of the bias member to form the bias used during standard time. In most time zones, the value is zero. This field is not used in calculations for the moment. */
    standardBias?: number;
    /** The daylightDate is an object containing the date and time information in daylight saving time. If any of the fields for EasLocalTime structure are missing or out of range, this field is ignored as not specified. This field should be specified in combination with standardDate. If either standardDate or daylightDate is not specified, both are ignored as not specified. */
    daylightDate?: SystemserviceEasLocalTime;
    /** The dayLightBias is the bias value to be used for local time translations that occur during daylight saving time. This value is added to the value of the bias member to form the bias used during daylight saving time. In most time zones, the value is –60. This field is not used in calculations for the moment. */
    daylightBias?: number;
}

/** ACG: time.queryDescriptionGets the time-zone that matches the provided EAS data. This method enables you to determine the time zone by the specified time stamp.ParametersNameRequiredTypeDescriptionbiasRequiredNumberNumber of minutes that a time zone is offset from Coordinated Universal Time (UTC).standardDateOptionalObject: EasLocalTimeObject containing date and time information in standard time. If any of the fields for EasLocalTime structure are missing or out of range, this field is ignored as not specified. This field should be specified in combination with daylightDate. If either standardDate or daylightDate is not specified, both fields are ignored as not specified.standardBiasOptionalNumberThe standardBias is the bias value to be used for local time translations that occur during standard time. This value is added to the value of the bias member to form the bias used during standard time. In most time zones, the value is zero. This field is not used in calculations for the moment.daylightDateOptionalObject: EasLocalTimeThe daylightDate is an object containing the date and time information in daylight saving time. If any of the fields for EasLocalTime structure are missing or out of range, this field is ignored as not specified. This field should be specified in combination with standardDate. If either standardDate or daylightDate is not specified, both are ignored as not specified.daylightBiasOptionalNumberThe dayLightBias is the bias value to be used for local time translations that occur during daylight saving time. This value is added to the value of the bias member to form the bias used during daylight saving time. In most time zones, the value is –60. This field is not used in calculations for the moment.Call Returns */
export interface SystemserviceTimezoneGetTimeZoneFromEasDataCallReturn {
    /** The timezone matching the given parameters.Note: When there are multiple locations that match the specified "bias", the entry that first appears in the preferences is returned. For example, Gibraltar and Brussles, both have offset from UTC as 60. So, if bias is given as "-60", the API returns timezone as "Gibraltar" since it appears before "Brussels". This order can be checked in the output of the following command:# luna-send -n 1 -f luna://com.webos.service.systemservice/getPreferenceValues '{"key": "timeZone" }' */
    timeZone?: string;
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: time.queryDescriptionThe getTimeZoneRules method requests rules for specific time-zone for the specified years. By calling this method you can get the rules of when and how the daylight time switching occurs at the specified year.Parameters */
export interface SystemserviceTimezoneGetTimeZoneRulesParameters {
    /** The timezone for which to get information. */
    tz: string;
    /** Array of years for which to get information. If not specified, information for the current year is returned. */
    years?: number[];
}

/** Contains the rule to be used when DST(daylight saving time) is enabled for a particular zone.Example:{"tz": "Europe/Helsinki","dstOffset": 10800,"dstStart": 1332637200,"dstEnd": 1351386000,"utcOffset": 7200,"year": 2012,"hasDstChange": true} */
export interface SystemserviceTimeZoneRule {
    /** The timezone. */
    tz?: string;
    /** The year. */
    year?: number;
    /** True if daylight saving time is in use in this timezone. */
    hasDstChange?: boolean;
    /** Time difference from UTC time in seconds. */
    utcOffset: number;
    /** Time difference from UTC time in seconds during daylight saving time. */
    dstOffset?: number;
    /** The time when daylight saving time starts during the year, presented in Unix time. */
    dstStart?: number;
    /** The time when daylight saving time ends during the year, presented in Unix time. */
    dstEnd?: number;
}

/** ACG: time.queryDescriptionThe getTimeZoneRules method requests rules for specific time-zone for the specified years. By calling this method you can get the rules of when and how the daylight time switching occurs at the specified year.ParametersNameRequiredTypeDescriptiontzRequiredStringThe timezone for which to get information.yearsOptionalNumber arrayArray of years for which to get information. If not specified, information for the current year is returned.Call Returns */
export interface SystemserviceTimezoneGetTimeZoneRulesCallReturn {
    /** Object array for the results. */
    results?: SystemserviceTimeZoneRule[];
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check  "errorText" field for details */
    returnValue: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** Provides details of structure for creating a timezone rule.Example:{"year": 2016,"month": 10,"dayOfWeek": 0,"week": 3,"hour": 2} */
export interface SystemserviceTimeZoneEasRule {
    /** The year */
    year?: number;
    /** The month. Possible values are 1 - 12. */
    month: number;
    /** Day of week. Possible values are 0 - 6, where 0 is Sunday and 6 is Saturday. */
    dayOfWeek: number;
    /** Week of the month. Possible values are 1 - 5, where 1 is the 1st week and 5 is the last or 5th week of month. */
    week: number;
    /** The hour. Possible values are 0 - 23. */
    hour: number;
    /** The minute (0-59) */
    minute?: number;
    /** The second (0-59). Default value is 0 */
    second?: number;
}

/** ACG: time.management, systemsettings.managementDescriptionCreate a manual timezone named "Etc/Manual" and specify details of this timezone.After creating the timezone, enable it by using the following command: luna-send -n 1 -f luna://com.webos.service.systemservice/setPreferences '{"timeZone": {"ZoneID": "Etc/Manual"}}'Parameters */
export interface SystemserviceTimezoneCreateTimeZoneFromEasDataParameters {
    /** Number of minutes that the manual timezone is offset from Coordinated Universal Time (UTC). */
    bias?: number;
    /** Date and local time when Daylight Saving Time (DST) transitions to standard time.Note: This field must be specified in combination with the daylightDate parameter. If either of these parameters is not specified, both the fields are ignored. */
    standardDate?: SystemserviceTimeZoneEasRule;
    /** The bias value to be used during local time translations that occur during standard time. This value is added to the value of the bias parameter to form the bias used during standard time.Default value: 0 (in most time zones this value is 0)Note: This parameter is ignored if the standardDate parameter is not specified. */
    standardBias?: number;
    /** Date and local time when standard time transitions to Daylight Saving Time (DST).Note: This field must be specified in combination with the standardDate parameter. If either of these parameters is not specified, both fields are ignored. */
    daylightDate?: SystemserviceTimeZoneEasRule;
    /** The bias value to be used during local time translations that occur during daylight saving time. This value is added to the value of the bias parameter to form the bias used during daylight saving time.Default value: -60 (in most time zones this value is -60)Note: This parameter is ignored if the daylightDate parameter is not specified. */
    daylightBias?: number;
}

/** ACG: time.management, systemsettings.managementDescriptionCreate a manual timezone named "Etc/Manual" and specify details of this timezone.After creating the timezone, enable it by using the following command: luna-send -n 1 -f luna://com.webos.service.systemservice/setPreferences '{"timeZone": {"ZoneID": "Etc/Manual"}}'ParametersNameRequiredTypeDescriptionbiasOptionalNumberNumber of minutes that the manual timezone is offset from Coordinated Universal Time (UTC).standardDateOptionalObject: TimeZoneEasRuleDate and local time when Daylight Saving Time (DST) transitions to standard time.Note: This field must be specified in combination with the daylightDate parameter. If either of these parameters is not specified, both the fields are ignored.standardBiasOptionalNumberThe bias value to be used during local time translations that occur during standard time. This value is added to the value of the bias parameter to form the bias used during standard time.Default value: 0 (in most time zones this value is 0)Note: This parameter is ignored if the standardDate parameter is not specified.daylightDateOptionalObject: TimeZoneEasRuleDate and local time when standard time transitions to Daylight Saving Time (DST).Note: This field must be specified in combination with the standardDate parameter. If either of these parameters is not specified, both fields are ignored.daylightBiasOptionalNumberThe bias value to be used during local time translations that occur during daylight saving time. This value is added to the value of the bias parameter to form the bias used during daylight saving time.Default value: -60 (in most time zones this value is -60)Note: This parameter is ignored if the daylightDate parameter is not specified.Call Returns */
export interface SystemserviceTimezoneCreateTimeZoneFromEasDataCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}
