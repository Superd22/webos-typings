/** luna://com.webos.service.applicationmanager */
interface Applicationmanager {
}

export interface ApplicationmanagerPauseParameters {
    id?: string;
    launchPointId?: string;
    instanceId?: string;
    params?: any;
}

export interface ApplicationmanagerPauseCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    instanceId?: string;
    launchPointId?: string;
    appId?: string;
    displayId?: number;
}

export interface ApplicationmanagerCloseParameters {
    id?: string;
    launchPointId?: string;
    instanceId?: string;
}

export interface ApplicationmanagerCloseCallReturn {
    returnValue: boolean;
    errorText?: string;
    errorCode?: number;
    processId?: string;
    instanceId?: string;
    launchPointId?: string;
    appId?: string;
    displayId?: number;
}

export interface ApplicationmanagerCloseByAppIdParameters {
    id?: string;
    reason?: string;
}

export interface ApplicationmanagerCloseByAppIdCallReturn {
    returnValue: boolean;
    errorText?: string;
    instanceId?: string;
    launchPointId?: string;
    displayId?: string;
}

export interface ApplicationmanagerListAppsParameters {
    subscribe?: boolean;
    properties?: string[];
}

export interface ApplicationmanagerAppInfo {
    id: string;
    main: string;
    title: string;
    icon: string;
    largeIcon?: string;
    type: string;
    splashBackground?: string;
    vendor?: string;
    transparent?: boolean;
    version?: string;
    handlesRelaunch?: boolean;
    requiredMemory?: number;
    iconColor?: string;
    appDescription?: string;
}

export interface ApplicationmanagerListAppsCallReturn {
    returnValue: boolean;
    apps: ApplicationmanagerAppInfo[];
    subscribed?: boolean;
}

export interface ApplicationmanagerListAppsSubscription {
    returnValue: boolean;
    apps: ApplicationmanagerAppInfo[];
    app: ApplicationmanagerAppInfo[];
    subscribed: boolean;
    change?: string;
    changeReason?: string;
}

export interface ApplicationmanagerRunningParameters {
    subscribe?: boolean;
}

export interface ApplicationmanagerRunningCallReturn {
    returnValue: boolean;
    subscribed?: boolean;
    running: any[];
}

export interface ApplicationmanagerRunningSubscription {
    returnValue: boolean;
    subscribed?: boolean;
    running: any[];
}

export interface ApplicationmanagerDevCloseByAppIdParameters {
    id: string;
}

export interface ApplicationmanagerDevCloseByAppIdCallReturn {
    returnValue: boolean;
    instanceId?: string;
    launchPointId?: string;
    displayId?: number;
}

export interface ApplicationmanagerDevListAppsParameters {
    subscribe?: string;
    properties?: string[];
}

export interface ApplicationmanagerDevListAppsCallReturn {
    returnValue: boolean;
    subscribed?: boolean;
    apps: ApplicationmanagerAppInfo[];
}

export interface ApplicationmanagerDevListAppsSubscription {
    returnValue: boolean;
    apps: ApplicationmanagerAppInfo[];
    app: ApplicationmanagerAppInfo[];
    subscribed: boolean;
    change?: string;
    changeReason?: string;
}

export interface ApplicationmanagerDevRunningParameters {
    subscribe?: boolean;
}

export interface ApplicationmanagerDevRunningCallReturn {
    returnValue: boolean;
    subscribed?: boolean;
    running: any[];
}

export interface ApplicationmanagerDevRunningSubscription {
    returnValue: boolean;
    subscribed?: boolean;
    running: any[];
}

export interface ApplicationmanagerGetForegroundAppInfoParameters {
    extraInfo?: boolean;
    subscribe?: boolean;
}

export interface ApplicationmanagerForegroundAppInfo {
    instanceId?: string;
    appId: string;
    windowId: string;
    processId: string;
    displayId?: number;
}

export interface ApplicationmanagerGetForegroundAppInfoCallReturn {
    subscribed?: boolean;
    returnValue: boolean;
    appId: string;
    launchPointId?: string;
    instanceId?: string;
    displayId?: number;
    windowId: string;
    processId: string;
    foregroundAppInfo?: ApplicationmanagerForegroundAppInfo[];
}

export interface ApplicationmanagerGetForegroundAppInfoSubscription {
    returnValue: boolean;
    subscribed: boolean;
    appId: string;
    launchPointId?: string;
    instanceId?: string;
    displayId?: number;
    windowId: string;
    processId: string;
    foregroundAppInfo?: ApplicationmanagerForegroundAppInfo[];
}

export interface ApplicationmanagerGetAppLifeStatusParameters {
    subscribe: boolean;
}

export interface ApplicationmanagerGetAppLifeStatusCallReturn {
    returnValue: boolean;
    subscribed: boolean;
    errorText?: string;
}

export interface ApplicationmanagerGetAppLifeStatusSubscription {
    returnValue: boolean;
    subscribed: string;
    appId?: string;
    launchPointId?: string;
    instanceId?: string;
    status?: string;
    type?: string;
    processId?: string;
    displayId?: number;
    reason?: string;
    windowType?: string;
    windowGroup?: boolean;
    windowGroupOwner?: boolean;
    windowGroupOwnerId?: string;
    backgroundStatus?: string;
}

export interface ApplicationmanagerGetAppLifeEventsParameters {
    subscribe: boolean;
}

export interface ApplicationmanagerGetAppLifeEventsCallReturn {
    returnValue: boolean;
    subscribed: boolean;
    errorText?: string;
    errorCode?: number;
}

export interface ApplicationmanagerGetAppLifeEventsSubscription {
    returnValue: boolean;
    subscribed: boolean;
    appId: string;
    launchPointId?: string;
    instanceId?: string;
    displayId?: number;
    event: string;
    title?: string;
    showSplash?: boolean;
    showSpinner?: boolean;
    splashBackground?: string;
    preload?: boolean;
    reason?: string;
    windowType?: string;
    windowGroup?: string;
    windowGroupOwner?: string;
    windowGroupOwnerId?: string;
    status?: string;
}

export interface ApplicationmanagerGetAppBasePathParameters {
    appId: string;
}

export interface ApplicationmanagerGetAppBasePathCallReturn {
    returnValue: boolean;
    appId?: string;
    basePath?: string;
    errorText?: string;
    errorCode?: number;
}

export interface ApplicationmanagerGetAppInfoParameters {
    id: string;
    properties?: string[];
}

export interface ApplicationmanagerGetAppInfoCallReturn {
    returnValue: boolean;
    appId?: string;
    appInfo?: ApplicationmanagerAppInfo;
    errorText?: string;
    errorCode?: number;
}

export interface ApplicationmanagerGetAppStatusParameters {
    appId: string;
    appInfo?: ApplicationmanagerAppInfo;
}

export interface ApplicationmanagerGetAppStatusCallReturn {
    returnValue: boolean;
    appId: string;
    event: string;
    status: string;
    exist: boolean;
    launchable: boolean;
    appInfo?: ApplicationmanagerAppInfo;
    errorCode?: number;
    errorText?: string;
}

export interface ApplicationmanagerGetAppStatusSubscription {
    returnValue: boolean;
    appId: string;
    event: string;
    status: string;
    exist: boolean;
    launchable: boolean;
    appInfo?: ApplicationmanagerAppInfo[];
}

export interface ApplicationmanagerListLaunchPointsParameters {
    subscribe?: boolean;
}

export interface ApplicationmanagerLaunchPoints {
    lptype: string;
    id: string;
    launchPointId: string;
    removable: boolean;
    title: string;
    icon: string;
    iconColor: string;
    largeIcon: string;
    appDescription: string;
    params?: any;
    userData?: string;
}

export interface ApplicationmanagerListLaunchPointsCallReturn {
    returnValue: boolean;
    subscribed: boolean;
    launchPoints: ApplicationmanagerLaunchPoints[];
}

export interface ApplicationmanagerListLaunchPointsSubscription {
    returnValue: boolean;
    subscribed: string;
    launchPoint?: any;
    change?: string;
    favicon?: string;
}

export interface ApplicationmanagerAddLaunchPointParameters {
    id: string;
    launchPointId?: string;
    title?: string;
    icon?: string;
    bgImage?: string;
    bgColor?: string;
    imageForRecents?: string;
    iconColor?: string;
    largeIcon?: string;
    appDescription?: string;
    params?: any;
    bgImages?: string[];
    tileSize?: string;
    unmovable?: boolean;
    userData?: string;
    policyCategorydefault*$RESERVED_VALUE?: string9$reserved_position;
    default?: 9;
    *$RESERVED_VALUE?: $reserved_position;
    ?;
    supportI18nTitle?: boolean;
    favicon?: string;
    relaunch?: boolean;

export interface ApplicationmanagerAddLaunchPointCallReturn {
    returnValue: boolean;
    launchPointId?: string;
    errorText?: string;
    errorCode?: number;
}

export interface ApplicationmanagerUpdateLaunchPointParameters {
    launchPointId: string;
    title?: string;
    icon?: string;
    bgImage?: string;
    bgColor?: string;
    imageForRecents?: string;
    iconColor?: string;
    largeIcon?: string;
    appDescription?: string;
    params?: any;
    bgImages?: string[];
    tileSize?: string;
    unmovable?: boolean;
    userData?: string;
    icons?: any[];
    favicon?: string;
    policyCategorydefault*$RESERVED_VALUE?: string9$reserved_position;
    ?;
    default?: 9;
    *$RESERVED_VALUE?: $reserved_position;
    relaunch?: boolean;

export interface ApplicationmanagerUpdateLaunchPointCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface ApplicationmanagerRemoveLaunchPointParameters {
    launchPointId: string;
}

export interface ApplicationmanagerRemoveLaunchPointCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface ApplicationmanagerRegisterAppCallReturn {
    returnValue: boolean;
    event: string;
}

export interface ApplicationmanagerRegisterAppSubscription {
    event: string;
    returnValue: boolean;
    parameters?: any;
    reason?: string;
    appId?: string;
}

export interface ApplicationmanagerLockAppParameters {
    id: string;
    lock: boolean;
}

export interface ApplicationmanagerLockAppCallReturn {
    returnValue: boolean;
    locked: boolean;
    id: string;
    errorText?: string;
}

}

}
