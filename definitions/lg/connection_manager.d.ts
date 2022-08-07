/** luna://com.palm.connectionmanager */
interface ConnectionManager {
}

export interface ConnectionManagerGetStatusParameters {
    /** Flag that decides whether to subscribe or not. */
    /** true: Subscribe. */
    /** false: Do not subscribe. Call the method only once. (Default) */
    subscribe?: boolean;
}

export enum ConnectionManagerGetStatusError {
    THE_CONNECTION_MANAGER_CONNMAN_PROCESS_IS_NOT_RUNNING_AND_THE_NETWORK_STATUS_IS_NOT_AVAILABLE_AT_THIS_TIME = "Connmanmanagerisnotavailable"
}

export interface ConnectionManagerGetStatusCallReturn {
    /** Flag that indicates success/failure of the request. */
    /** true: Success */
    /** false: Failure */
    returnValue: boolean;
    /** errorText contains the error text if the method fails. The method will return errorText only if it fails. */
    /** See the Error Codes Reference of this method for more details. */
    errorText?: string;
    /** Flag that indicates whether the subscription is enabled or not. */
    /** true: Enabled */
    /** false: Not enabled. */
    subscribed?: boolean;
    /** Flag that indicates whether internet connection is available or not. */
    /** true: Any internet connection is available. */
    /** false: No internet connections are available. */
    isInternetConnectionAvailable: boolean;
    /** Object that contains information about the state of the wired connection. */
    wired: any;
    /** Object that contains information about the state of the Wi-Fi connection. */
    wifi: any;
    /** Object that contains information about the state of the Wi-Fi direct connection. */
    wifiDirect: any;
}
