export interface SystemserviceTimeConvertDateParameters {
    date: string;
    source_tz: string;
    dest_tz: string;
}

export interface SystemserviceTimeConvertDateCallReturn {
    date: string;
    returnValue: boolean;
    errorText?: string;
}

export interface SystemserviceLocalTime {
    year: number;
    month: number;
    dayOfWeek?: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
}

export interface SystemserviceTimestamp {
    source: string;
    sec: number;
    nsec: number;
}

export interface SystemserviceTimeGetBroadcastTimeCallReturn {
    utc: number;
    local?: number;
    localtime?: SystemserviceLocalTime;
    timestamp?: SystemserviceTimestamp;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface SystemserviceTimeGetEffectiveBroadcastTimeParameters {
    subscribe?: boolean;
}

export interface SystemserviceTimeGetEffectiveBroadcastTimeCallReturn {
    subscribed?: boolean;
    adjustedUtc: number;
    local: number;
    localtime?: SystemserviceLocalTime;
    timestamp?: SystemserviceTimestamp;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface SystemserviceTimeGetNTPTimeCallReturn {
    utc?: number;
    subscribed: boolean;
    returnValue: boolean;
    errorText?: string;
}

export interface SystemserviceTimeGetSystemTimeParameters {
    subscribe?: boolean;
}

export interface SystemserviceTimeGetSystemTimeCallReturn {
    errorCode?: number;
    errorText?: string;
    isDST?: boolean;
    localtime: SystemserviceLocalTime;
    offset: number;
    returnValue: boolean;
    subscribed?: boolean;
    timestamp?: SystemserviceTimestamp;
    timezone: string;
    timeZoneFile: string;
    TZ: string;
    utc: number;
    systemTimeSource: string;
}

export interface SystemserviceTimeGetSystemTimeSubscription {
    utc: number;
    localtime: SystemserviceLocalTime;
    offset: number;
    timezone: string;
    TZ: string;
    timeZoneFile: string;
    NITZValidTime?: boolean;
    NITZValidZone?: boolean;
    isDST?: boolean;
    systemTimeSource: string;
}

export interface SystemserviceTimeGetSystemTimezoneFileCallReturn {
    subscribed: string;
    timeZoneFile: string;
}

export interface SystemserviceTimeGetSystemUptimeCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    uptime?: number;
}

export interface SystemserviceTimeLaunchTimeChangeAppsCallReturn {
    subscribed: string;
    returnValue: boolean;
}

export interface SystemserviceTimeSetBroadcastTimeParameters {
    utc: number;
    local: number;
    timestamp?: SystemserviceTimestamp;
}

export interface SystemserviceTimeSetBroadcastTimeCallReturn {
    returnValue: number;
    errorCode?: number;
    errorText?: string;
}

export interface SystemserviceTimeSetSystemNetworkTimeParameters {
    sec: string;
    min: string;
    hour: string;
    mday: string;
    mon: string;
    year: string;
    offset: string;
    mcc: string;
    mnc: string;
    tzvalid: boolean;
    timevalid: boolean;
    dstvalid: boolean;
    dst: number;
    timestamp: string;
    tilIgnore: boolean;
}

export interface SystemserviceTimeSetSystemNetworkTimeCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface SystemserviceTimeSetSystemTimeParameters {
    utc: number;
    timestamp?: SystemserviceTimestamp;
}

export interface SystemserviceTimeSetSystemTimeCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface SystemserviceTimeSetTimeChangeLaunchParameters {
    appId: string;
    active: boolean;
    parameters: any;
}

export interface SystemserviceTimeSetTimeChangeLaunchCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface SystemserviceTimeSetTimeWithNTPCallReturn {
    returnValue: boolean;
}

export interface SystemserviceTimeGetCurrentTimeZoneByLocaleParameters {
    locale: string;
}

export interface SystemserviceTimeGetCurrentTimeZoneByLocaleCallReturn {
    timeZone?: string;
    returnValue: boolean;
    errorText?: string;
}
