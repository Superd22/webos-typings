/** luna://com.palm.connectionmanager */
interface ConnectionManager {
}

export interface ConnectionManagerGetStatusParameters {
    subscribe?: boolean;
}

export enum ConnectionManagerGetStatusError {
    THE_CONNECTION_MANAGER_CONNMAN_PROCESS_IS_NOT_RUNNING_AND_THE_NETWORK_STATUS_IS_NOT_AVAILABLE_AT_THIS_TIME = "Connmanmanagerisnotavailable"
}

export interface ConnectionManagerGetStatusCallReturn {
    returnValue: boolean;
    errorText?: string;
    subscribed?: boolean;
    isInternetConnectionAvailable: boolean;
    wired: any;
    wifi: any;
    wifiDirect: any;
}
