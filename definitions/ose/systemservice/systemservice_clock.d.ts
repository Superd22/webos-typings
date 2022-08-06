export interface SystemserviceTimestamp {
    source: string;
    sec: number;
    nsec: number;
}

export interface SystemserviceClockSetTimeParameters {
    utc: number;
    source?: string;
    available: boolean;
    timestamp?: SystemserviceTimestamp;
}

export interface SystemserviceClockSetTimeCallReturn {
    returnValue: boolean;
    errorText?: string;
    errorCode?: number;
}

export interface SystemserviceClockGetTimeParameters {
    source?: string;
    manualOverride?: boolean;
    fallback?: string;
}

export interface SystemserviceTimeSourceOffset {
    value: number;
    source: string;
}

export interface SystemserviceClockGetTimeCallReturn {
    returnValue: boolean;
    source: string;
    utc?: number;
    offset?: SystemserviceTimeSourceOffset;
    systemTimeSource?: string;
    priority?: number;
    timestamp?: SystemserviceTimestamp;
    errorCode?: number;
    errorText?: string;
}
