export interface SystemserviceEasLocalTime {
    year?: number;
    month: number;
    dayOfWeek: number;
    day: number;
    hour: number;
    minute?: number;
    second?: number;
}

export interface SystemserviceTimezoneGetTimeZoneFromEasDataParameters {
    bias: number;
    standardDate?: SystemserviceEasLocalTime;
    standardBias?: number;
    daylightDate?: SystemserviceEasLocalTime;
    daylightBias?: number;
}

export interface SystemserviceTimezoneGetTimeZoneFromEasDataCallReturn {
    timeZone?: string;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface SystemserviceTimezoneGetTimeZoneRulesParameters {
    tz: string;
    years?: number[];
}

export interface SystemserviceTimeZoneRule {
    tz?: string;
    year?: number;
    hasDstChange?: boolean;
    utcOffset: number;
    dstOffset?: number;
    dstStart?: number;
    dstEnd?: number;
}

export interface SystemserviceTimezoneGetTimeZoneRulesCallReturn {
    results?: SystemserviceTimeZoneRule[];
    returnValue: boolean;
    errorText?: string;
}

export interface SystemserviceTimeZoneEasRule {
    year?: number;
    month: number;
    dayOfWeek: number;
    week: number;
    hour: number;
    minute?: number;
    second?: number;
}

export interface SystemserviceTimezoneCreateTimeZoneFromEasDataParameters {
    bias?: number;
    standardDate?: SystemserviceTimeZoneEasRule;
    standardBias?: number;
    daylightDate?: SystemserviceTimeZoneEasRule;
    daylightBias?: number;
}

export interface SystemserviceTimezoneCreateTimeZoneFromEasDataCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}
