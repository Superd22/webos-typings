export interface SystemserviceGetPreferenceValuesParameters {
    key: string;
}

export interface SystemserviceGetPreferenceValuesCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    [keyname]?: any[];
    syszones?: any[];
    mccInfo?: any[];
}
