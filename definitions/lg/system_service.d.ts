/** luna://com.palm.systemservice */
interface SystemService {
}

export interface SystemServiceTimeGetSystemTimeParameters {
    subscribe?: boolean;
}

export interface SystemServiceTimeGetSystemTimeCallReturn {
    returnValue: boolean;
    subscribed?: boolean;
    utc: number;
    localtime: any;
    offset: number;
    timezone: string;
    TZ: string;
    timeZoneFile: string;
    NITZValid: string;
}
