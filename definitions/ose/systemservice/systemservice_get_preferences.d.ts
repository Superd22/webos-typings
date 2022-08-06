export interface SystemserviceGetPreferencesParameters {
    subscribe?: boolean;
    keys: string[];
}

export interface SystemserviceGetPreferencesCallReturn {
    subscribed?: boolean;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}
