export interface SystemserviceSoftwareInfoQueryParameters {
    parameters?: string[];
}

export interface SystemserviceSoftwareInfoQueryCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    nodejs_versions?: string[];
}
