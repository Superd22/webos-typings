/** luna://com.webos.notification */
interface Notification {
}

export interface NotificationGetAlertNotificationParameters {
    subscribe?: boolean;
}

export interface NotificationGetAlertNotificationCallReturn {
    returnValue: boolean;
    subscribed?: boolean;
}

export interface NotificationOnFailAction {
    serviceURI: string;
    serviceMethod: string;
    launchParams: any;
}

export interface NotificationGetAlertNotificationSubscription {
    alertInfo: any;
    timestamp: string;
    returnValue: boolean;
    alertAction: string;
    onFailAction?: NotificationOnFailAction;
}

export interface NotificationCloseAlertParameters {
    alertId: string;
}

export interface NotificationCloseAlertCallReturn {
    returnValue: boolean;
    errorText?: string;
}

export interface NotificationCloseAllAlertsCallReturn {
    returnValue: boolean;
    errorText?: string;
}

export interface NotificationRemoveAllNotificationParameters {
    displayId?: number;
}

export interface NotificationRemoveAllNotificationCallReturn {
    returnValue: boolean;
    removeAllNotiId: boolean;
    errorText?: string;
    displayId: number;
}

export interface NotificationOnclick {
    appId?: string;
    params?: any;
}

export interface NotificationSchedule {
    expire?: number;
}

export interface NotificationImage {
    uri?: string;
}

export interface NotificationCreateToastParameters {
    sourceId?: string;
    iconUrl?: string;
    message: string;
    onclick?: NotificationOnclick;
    noaction?: boolean;
    stale?: boolean;
    persistent?: boolean;
    isSysReq?: boolean;
    schedule?: NotificationSchedule;
    type?: string;
    extra?: NotificationImage[];
    onlyToast?: boolean;
}

export interface NotificationCreateToastCallReturn {
    returnValue: boolean;
    toastId?: string;
    errorText?: string;
}

export interface NotificationGetToastNotificationParameters {
    subscribe?: boolean;
}

export interface NotificationGetToastNotificationCallReturn {
    subscribed?: boolean;
    returnValue: boolean;
}

export interface NotificationAction {
    launchParams: any;
    serviceMethod: string;
    serviceURI: string;
}

export interface NotificationGetToastNotificationSubscription {
    returnValue: boolean;
    message: string;
    type?: string;
    title?: string;
    isCradleReq?: boolean;
    sourceId: string;
    timestamp: string;
    isSysReq: boolean;
    iconUrl: string;
    action?: NotificationAction;
    schedule?: NotificationSchedule;
    iconPath: string;
    user?: string;
    _kind?: string;
    onlyToast: boolean;
}

export interface NotificationGetToastListParameters {
    displayId?: number;
}

export interface NotificationToastInfo {
    displayId: number;
    sourceId: string;
    toastId: string;
    timestamp: string;
    iconUrl: string;
    iconPath: string;
    title: string;
    message: string;
    isSysReq: boolean;
    schedule: NotificationSchedule;
    type: string;
    readStatus: boolean;
    action: NotificationAction;
}

export interface NotificationGetToastListCallReturn {
    returnValue: boolean;
    toastInfo: NotificationToastInfo[];
    errorText?: string;
}

export interface NotificationSetToastStatusParameters {
    toastId: string;
    readStatus: boolean;
}

export interface NotificationSetToastStatusCallReturn {
    returnValue: boolean;
    toastId?: string;
    readStatus?: boolean;
    errorText?: string;
}

export interface NotificationGetToastCountParameters {
    subscribe?: boolean;
    displayId?: number;
}

export interface NotificationGetToastCountCallReturn {
    returnValue: boolean;
    subscribed: boolean;
}

export interface NotificationGetToastCountSubscription {
    readCount: number;
    unreadCount: number;
    totalCount: number;
    returnValue: boolean;
}

export interface NotificationCloseToastParameters {
    toastId?: string;
    sourceId?: string;
}

export interface NotificationCloseToastCallReturn {
    returnValue: boolean;
    errorText?: string;
}
