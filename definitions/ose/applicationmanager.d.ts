/** luna://com.webos.service.applicationmanager */
interface Applicationmanager {
}

/** ACG: application.launcherDescriptionPauses an application.Note: At least one parameter is required. ('id', 'launchPointId', 'instanceId')Parameters */
export interface ApplicationmanagerPauseParameters {
    /** Indicates the id of the application. */
    id?: string;
    /** Indicates the launchPointId of the application. */
    launchPointId?: string;
    /** Indicates the instanceId of the application. */
    instanceId?: string;
    /** If params is used, it should contain information on the target application. */
    params?: any;
}

/** ACG: application.launcherDescriptionPauses an application.Note: At least one parameter is required. ('id', 'launchPointId', 'instanceId')ParametersNameRequiredTypeDescriptionidOptionalStringIndicates the id of the application.launchPointIdOptionalStringIndicates the launchPointId of the application.instanceIdOptionalStringIndicates the instanceId of the application.paramsOptionalObjectIf params is used, it should contain information on the target application.Call Returns */
export interface ApplicationmanagerPauseCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
    /** Indicates the instanceId of the running application. */
    instanceId?: string;
    /** Indicates the launchPointId of the running application. */
    launchPointId?: string;
    /** Indicates the appId of the running application. */
    appId?: string;
    /** Indicates the displayId of the running application. */
    displayId?: number;
}

/** ACG: application.launcherDescriptionCloses an application.Note A: At least one parameter is required. ('id', 'launchPointId', 'instanceId')Note B: Don't use this API in TV and signage. The API is deprecated in the platforms.Parameters */
export interface ApplicationmanagerCloseParameters {
    /** Indicates the id of the application. */
    id?: string;
    /** Indicates the launchPointId of the application. */
    launchPointId?: string;
    /** Indicates the instanceId of the application. */
    instanceId?: string;
}

/** ACG: application.launcherDescriptionCloses an application.Note A: At least one parameter is required. ('id', 'launchPointId', 'instanceId')Note B: Don't use this API in TV and signage. The API is deprecated in the platforms.ParametersNameRequiredTypeDescriptionidOptionalStringIndicates the id of the application.launchPointIdOptionalStringIndicates the launchPointId of the application.instanceIdOptionalStringIndicates the instanceId of the application.Call Returns */
export interface ApplicationmanagerCloseCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the processId of the closed application. */
    processId?: string;
    /** Indicates the instanceId of the running application. */
    instanceId?: string;
    /** Indicates the launchPointId of the running application. */
    launchPointId?: string;
    /** Indicates the appId of the running application. */
    appId?: string;
    /** Indicates the displayId of running application. */
    displayId?: number;
}

/** ACG: application.launcherDescriptionCloses an application by appId in the system manager.Parameters */
export interface ApplicationmanagerCloseByAppIdParameters {
    /** Indicates the id of the application. */
    id?: string;
    /** Indicates the reason of why the app was closed. Subscribers who are watching app status will get the reason.Note: This parameter is only for reserved caller such as surfacemanager. Other services or apps should not use this parameter. */
    reason?: string;
}

/** ACG: application.launcherDescriptionCloses an application by appId in the system manager.ParametersNameRequiredTypeDescriptionidOptionalStringIndicates the id of the application.reasonOptionalStringIndicates the reason of why the app was closed. Subscribers who are watching app status will get the reason.Note: This parameter is only for reserved caller such as surfacemanager. Other services or apps should not use this parameter.Call Returns */
export interface ApplicationmanagerCloseByAppIdCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check "errorText" field for details. */
    returnValue: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** Indicates the instanceId of the running application. */
    instanceId?: string;
    /** Indicates the launchPointId of the running application. */
    launchPointId?: string;
    /** Indicates the displayId of the running application. */
    displayId?: string;
}

/** ACG: application.operationDescriptionLists all of the registered applications.Note: Client can get all installed application information using this API.Parameters */
export interface ApplicationmanagerListAppsParameters {
    /** Indicates if subscribe to get notifications.Possible values are:true: Subscribe for notificationsfalse: Not subscribedDefault: false */
    subscribe?: boolean;
    /** Indicates the value to be extracted from appinfo.json file. */
    properties?: string[];
}

/** Contains the information about the application. */
export interface ApplicationmanagerAppInfo {
    /** Indicates the application ID.Example: \"com.newco.app.myApp\"Note:Every application has a unique ID, created from reverse DNS naming conventions.The launcher uses the ID to uniquely identify application and displays it with the title above.The application ID is unique,can only be set once, and cannot be changed after publishing the application. */
    id: string;
    /** Indicates the launchpoint of the application.Note: This is a file path relative to the appinfo.json file and needs to point to an HTML file. */
    main: string;
    /** Indicates the application title as it is shown in the launcher and in the application window.Note: The application title is unique, set once. */
    title: string;
    /** Indicates the path of the icon image displayed for the application.Note: The file path is relative to the appinfo.json file. The default is \"icon.png\" */
    icon: string;
    /** The path of the large icon (130x130 pixels) displayed in the top left corner of the screen, when the user hovers over an application tile in the Launcher. This file path is relative to the appinfo.json file. */
    largeIcon?: string;
    /** The application type; web or pdk. */
    type: string;
    /** The background image to be shown while application is loading, e.g., splash-background.png. */
    splashBackground?: string;
    /** The application owner used in the launcher and deviceinfo dialogs. */
    vendor?: string;
    /** This indicates whether the web application's background is transparent or not. */
    transparent?: boolean;
    /** The application version number, in the dot-notation format, e.g., 3.0.2500. */
    version?: string;
    /** This indicates whether the application is relaunched or not when a user executes application that is already running. */
    handlesRelaunch?: boolean;
    /** The memory consumption is increasing quickly while launching. OOM can occur before system (Memory Manager) try to acquire adequate memory for the application. The requiredMemory describes the maximum usage of memory, in megabytes, while an application is launching. This is not same as the maximum memory usage while the application is running. */
    requiredMemory?: number;
    /** The background color for the application tile. The application tile is displayed in the Home, the Launcher, and the Recent screen. */
    iconColor?: string;
    /** A short description for the application. The appDescription cannot exceed 60 characters. */
    appDescription?: string;
}

/** ACG: application.operationDescriptionLists all of the registered applications.Note: Client can get all installed application information using this API.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIndicates if subscribe to get notifications.Possible values are:true: Subscribe for notificationsfalse: Not subscribedDefault: falsepropertiesOptionalString arrayIndicates the value to be extracted from appinfo.json file.Call Returns */
export interface ApplicationmanagerListAppsCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed.Default: true */
    returnValue: boolean;
    /** If the listApps method succeeds, the array of the applications will be returned. */
    apps: ApplicationmanagerAppInfo[];
    /** Indicates if subscribe to get notifications.Possible values are:true: Subscribe for notificationsfalse: Not subscribed */
    subscribed?: boolean;
}

/** ACG: application.operationDescriptionLists all of the registered applications.Note: Client can get all installed application information using this API.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIndicates if subscribe to get notifications.Possible values are:true: Subscribe for notificationsfalse: Not subscribedDefault: falsepropertiesOptionalString arrayIndicates the value to be extracted from appinfo.json file.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed.Default: trueappsRequiredObject array: appInfoIf the listApps method succeeds, the array of the applications will be returned.subscribedOptionalBooleanIndicates if subscribe to get notifications.Possible values are:true: Subscribe for notificationsfalse: Not subscribedSubscription Returns */
export interface ApplicationmanagerListAppsSubscription {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. */
    returnValue: boolean;
    /** Either this, or app is required.apps is returned when all apps' information has been changed by language change. */
    apps: ApplicationmanagerAppInfo[];
    /** Either this, or apps is required.app is returned the information of an app which has been installed/updated/removed. */
    app: ApplicationmanagerAppInfo[];
    /** Indicates if subscribe to get notifications.Possible values are:true: Subscribe for notificationsfalse: Not subscribedDefault: true */
    subscribed: boolean;
    /** Indicates the reason why the app’s information has been changed.Possible values are:“added”“updated”“removed” */
    change?: string;
    /** Indicates the reason behind the target app being added/removed. */
    changeReason?: string;
}

/** ACG: application.launcherDescriptionLists the background/foreground applications and their process IDs that are running on webOS platform.Note: This API is one of key methods of applicationmanager.Parameters */
export interface ApplicationmanagerRunningParameters {
    /** Indicates if subscribed to get notifications. Possible values are:true: Subscribe to get notificationsfalse: Not subscribedDefault: false */
    subscribe?: boolean;
}

/** ACG: application.launcherDescriptionLists the background/foreground applications and their process IDs that are running on webOS platform.Note: This API is one of key methods of applicationmanager.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIndicates if subscribed to get notifications. Possible values are:true: Subscribe to get notificationsfalse: Not subscribedDefault: falseCall Returns */
export interface ApplicationmanagerRunningCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed.Default: true */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications. Possible values are:true: Subscribe to get notificationsfalse: Not subscribed */
    subscribed?: boolean;
    /** If the running method succeeds, the array of the running applications will be returned. */
    running: any[];
}

/** ACG: application.launcherDescriptionLists the background/foreground applications and their process IDs that are running on webOS platform.Note: This API is one of key methods of applicationmanager.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIndicates if subscribed to get notifications. Possible values are:true: Subscribe to get notificationsfalse: Not subscribedDefault: falseCall ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed.Default: truesubscribedOptionalBooleanIndicates if subscribed to get notifications. Possible values are:true: Subscribe to get notificationsfalse: Not subscribedrunningRequiredObject array: runningIf the running method succeeds, the array of the running applications will be returned.Subscription Returns */
export interface ApplicationmanagerRunningSubscription {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed.Default: true */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications. Possible values are:true: Subscribe to get notificationsfalse: Not subscribed */
    subscribed?: boolean;
    /** If the running method succeeds, the array of the running applications will be returned. */
    running: any[];
}

/** ACG: application.devmodeDescriptionCloses an application by the application id.Note: Available only in developer mode (devmode). To enable devmode, call 'com.webos.service.devmode' ('setDevMode') with value 'true'. Parameters */
export interface ApplicationmanagerDevCloseByAppIdParameters {
    /** Indicates the application id to be closed. */
    id: string;
}

/** ACG: application.devmodeDescriptionCloses an application by the application id.Note: Available only in developer mode (devmode). To enable devmode, call 'com.webos.service.devmode' ('setDevMode') with value 'true'. ParametersNameRequiredTypeDescriptionidRequiredStringIndicates the application id to be closed.Call Returns */
export interface ApplicationmanagerDevCloseByAppIdCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed.  See the "Error Codes" section of this method for details. */
    returnValue: boolean;
    /** Indicates the instanceId of running application. */
    instanceId?: string;
    /** Indicates the launchPointId of running application. */
    launchPointId?: string;
    /** Indicates the displayId of the running application. */
    displayId?: number;
}

/** ACG: application.devmodeDescriptionLists all of the registered applications.Note: Available only in developer mode (devmode). To enable devmode, call 'com.webos.service.devmode' ('setDevMode') with value 'true'. Works for devmode app type.Parameters */
export interface ApplicationmanagerDevListAppsParameters {
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribe to get notificationsfalse: Do not subscribeDefault: false */
    subscribe?: string;
    /** Indicates the name of properties to be extracted from appinfo.json file. */
    properties?: string[];
}

/** ACG: application.devmodeDescriptionLists all of the registered applications.Note: Available only in developer mode (devmode). To enable devmode, call 'com.webos.service.devmode' ('setDevMode') with value 'true'. Works for devmode app type.ParametersNameRequiredTypeDescriptionsubscribeOptionalStringIndicates if subscribed to get notifications.Possible values are:true: Subscribe to get notificationsfalse: Do not subscribeDefault: falsepropertiesOptionalString arrayIndicates the name of properties to be extracted from appinfo.json file.Call Returns */
export interface ApplicationmanagerDevListAppsCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. See the "API Error Codes Reference" for more information. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed to get notificationsfalse: Not subscribed */
    subscribed?: boolean;
    /** If the dev/listApps method succeeds, the array of the applications will be returned. */
    apps: ApplicationmanagerAppInfo[];
}

/** ACG: application.devmodeDescriptionLists all of the registered applications.Note: Available only in developer mode (devmode). To enable devmode, call 'com.webos.service.devmode' ('setDevMode') with value 'true'. Works for devmode app type.ParametersNameRequiredTypeDescriptionsubscribeOptionalStringIndicates if subscribed to get notifications.Possible values are:true: Subscribe to get notificationsfalse: Do not subscribeDefault: falsepropertiesOptionalString arrayIndicates the name of properties to be extracted from appinfo.json file.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. See the "API Error Codes Reference" for more information.subscribedOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed to get notificationsfalse: Not subscribedappsRequiredObject array: appInfoIf the dev/listApps method succeeds, the array of the applications will be returned.Subscription Returns */
export interface ApplicationmanagerDevListAppsSubscription {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. See the "API Error Codes Reference" for more information. */
    returnValue: boolean;
    /** Either this, or app will be returned.apps is returned when all apps' information has been changed by language change. */
    apps: ApplicationmanagerAppInfo[];
    /** Either this, or apps will be required.app is returned the information of an app which has been installed/updated/removed. */
    app: ApplicationmanagerAppInfo[];
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed to get notificationsfalse: Not subscribedDefault: true */
    subscribed: boolean;
    /** Indicates the reason for the change in the app information.Possible values are:addedupdatedremoved */
    change?: string;
    /** Indicates the reason why the target app is added/removed. */
    changeReason?: string;
}

/** ACG: application.devmodeDescriptionLists the background/foreground applications and their process IDs that are running on the webOS platform.Note: Available only in developer mode (devmode). To enable devmode, call 'com.webos.service.devmode' ('setDevMode') with value 'true'. Works for devmode app type.Parameters */
export interface ApplicationmanagerDevRunningParameters {
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribe to get notificationsfalse: Not subscribedDefault: false */
    subscribe?: boolean;
}

/** ACG: application.devmodeDescriptionLists the background/foreground applications and their process IDs that are running on the webOS platform.Note: Available only in developer mode (devmode). To enable devmode, call 'com.webos.service.devmode' ('setDevMode') with value 'true'. Works for devmode app type.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribe to get notificationsfalse: Not subscribedDefault: falseCall Returns */
export interface ApplicationmanagerDevRunningCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Note: returnValue will always contain true. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribe to get notificationsfalse: Not subscribed */
    subscribed?: boolean;
    /** If the dev/running method succeeds, the array of the running applications will be returned. */
    running: any[];
}

/** ACG: application.devmodeDescriptionLists the background/foreground applications and their process IDs that are running on the webOS platform.Note: Available only in developer mode (devmode). To enable devmode, call 'com.webos.service.devmode' ('setDevMode') with value 'true'. Works for devmode app type.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribe to get notificationsfalse: Not subscribedDefault: falseCall ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Note: returnValue will always contain true.subscribedOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribe to get notificationsfalse: Not subscribedrunningRequiredObject array: runningIf the dev/running method succeeds, the array of the running applications will be returned.Subscription Returns */
export interface ApplicationmanagerDevRunningSubscription {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. See the API Error Codes Reference for more information.Note: returnValue will always contain true. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribe to get notificationsfalse: Not subscribed */
    subscribed?: boolean;
    /** If the dev/running method succeeds, the array of the running applications will be returned */
    running: any[];
}

/** ACG: application.operationDescriptionGets the information on the foreground application.Note: The information comes from LSM. Please use extraInfo parameter to get raw responsePayload from LSM.Parameters */
export interface ApplicationmanagerGetForegroundAppInfoParameters {
    /** Indicates if enabled, the method returns an array of foreground applications.true: Enable.false: Disable.Default: false. */
    extraInfo?: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed to get notificationsfalse: Not subscribedDefault: false */
    subscribe?: boolean;
}

/** The object contains sorted foreground applications in ascending order. */
export interface ApplicationmanagerForegroundAppInfo {
    /** InstanceId of running application. */
    instanceId?: string;
    /** The application ID. */
    appId: string;
    /** The window ID of the application running in the foreground. */
    windowId: string;
    /** The process ID of the application running in the foreground. */
    processId: string;
    /** The display ID of application. */
    displayId?: number;
}

/** ACG: application.operationDescriptionGets the information on the foreground application.Note: The information comes from LSM. Please use extraInfo parameter to get raw responsePayload from LSM.ParametersNameRequiredTypeDescriptionextraInfoOptionalBooleanIndicates if enabled, the method returns an array of foreground applications.true: Enable.false: Disable.Default: false.subscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed to get notificationsfalse: Not subscribedDefault: falseCall Returns */
export interface ApplicationmanagerGetForegroundAppInfoCallReturn {
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed to get notificationsfalse: Not subscribed */
    subscribed?: boolean;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Default: true */
    returnValue: boolean;
    /** Indicates the appId running in the foreground. */
    appId: string;
    /** Indicates the launchPointId of the application. */
    launchPointId?: string;
    /** Indicates the instanceId of the application. */
    instanceId?: string;
    /** Indicates the displayId of the application. */
    displayId?: number;
    /** Indicates the windowId of the application running in the foreground. */
    windowId: string;
    /** Indicates the processId of the application running in the foreground. */
    processId: string;
    /** Indicates an array of the foreground application. */
    foregroundAppInfo?: ApplicationmanagerForegroundAppInfo[];
}

/** ACG: application.operationDescriptionGets the information on the foreground application.Note: The information comes from LSM. Please use extraInfo parameter to get raw responsePayload from LSM.ParametersNameRequiredTypeDescriptionextraInfoOptionalBooleanIndicates if enabled, the method returns an array of foreground applications.true: Enable.false: Disable.Default: false.subscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed to get notificationsfalse: Not subscribedDefault: falseCall ReturnsNameRequiredTypeDescriptionsubscribedOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed to get notificationsfalse: Not subscribedreturnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Default: trueappIdRequiredStringIndicates the appId running in the foreground.launchPointIdOptionalStringIndicates the launchPointId of the application.instanceIdOptionalStringIndicates the instanceId of the application.displayIdOptionalNumberIndicates the displayId of the application.windowIdRequiredStringIndicates the windowId of the application running in the foreground. processIdRequiredStringIndicates the processId of the application running in the foreground.foregroundAppInfoOptionalObject array: foregroundAppInfoIndicates an array of the foreground application.Subscription Returns */
export interface ApplicationmanagerGetForegroundAppInfoSubscription {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Default: true */
    returnValue: boolean;
    /** Indicates if subscribed to get the notifications.Possible values are:true: Subscribed to get the notificationsfalse: Not subscribedDefault: true */
    subscribed: boolean;
    /** Indicates the application ID of the application running in the foreground. */
    appId: string;
    /** Indicates the launchPointId of the application. */
    launchPointId?: string;
    /** Indicates the instanceId of the application. */
    instanceId?: string;
    /** Indicates the displayId of the application. */
    displayId?: number;
    /** Indicates the windowId of the application running in the foreground. */
    windowId: string;
    /** Indicates the processId of the application running in the foreground. */
    processId: string;
    /** Indicates an array of the foreground application. */
    foregroundAppInfo?: ApplicationmanagerForegroundAppInfo[];
}

/** ACG: application.operationDescriptionProvides the application's life cycle status.Note: This API is useful to do something based on application's life cycle status.Parameters */
export interface ApplicationmanagerGetAppLifeStatusParameters {
    /** Indicates if subscribed to get the notifications.Possible values are:true: Subscribe to get notificationsfalse: Not subscribed.Default: false */
    subscribe: boolean;
}

/** ACG: application.operationDescriptionProvides the application's life cycle status.Note: This API is useful to do something based on application's life cycle status.ParametersNameRequiredTypeDescriptionsubscribeRequiredBooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribe to get notificationsfalse: Not subscribed.Default: falseCall Returns */
export interface ApplicationmanagerGetAppLifeStatusCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check "errorText" field for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get the notifications.Possible values are:true: Subscribe to get notificationsfalse: Not subscribed. */
    subscribed: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: application.operationDescriptionProvides the application's life cycle status.Note: This API is useful to do something based on application's life cycle status.ParametersNameRequiredTypeDescriptionsubscribeRequiredBooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribe to get notificationsfalse: Not subscribed.Default: falseCall ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check "errorText" field for details.subscribedRequiredBooleanIndicates if subscribed to get the notifications.Possible values are:true: Subscribe to get notificationsfalse: Not subscribed.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "Error Codes" section of this method for details.Subscription Returns */
export interface ApplicationmanagerGetAppLifeStatusSubscription {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check "errorText" field for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribed */
    subscribed: string;
    /** Indicates the appId whose status has been changed. */
    appId?: string;
    /** Indicates the launchPointId of the application. */
    launchPointId?: string;
    /** Indicates the instanceId of the application. */
    instanceId?: string;
    /** Indicates the status of the application.Possible values are:stoplaunchingrelaunchingforegroundbackgroundclosing */
    status?: string;
    /** Indicates the application type.Possible values are:webnative */
    type?: string;
    /** Indicates the processId of the application. */
    processId?: string;
    /** Indicates the displayId of the application. */
    displayId?: number;
    /** In LAUNCHING/RELAUNCHING status, indicates the reason for the launching the target app.In CLOSING/STOP status, indicates the reason for closing the target app. */
    reason?: string;
    /** Indicates the windowType of the application.Note: This reason is replied only in FOREGROUND status. */
    windowType?: string;
    /** Indicates that the app has window group or not.Note: This reason is replied only in FOREGROUND status. */
    windowGroup?: boolean;
    /** Indicates that the app is window group owner or not.Note: This reason is replied only in FOREGROUND status. */
    windowGroupOwner?: boolean;
    /** Indicates the window group owner of the app.Note: This reason is replied only in FOREGROUND status. */
    windowGroupOwnerId?: string;
    /** Indicates whether the app is preloaded or not.Note: This reason is replied only in BACKGROUND status. */
    backgroundStatus?: string;
}

/** ACG: application.operationDescriptionProvides the application's event status in its life cycle.Parameters */
export interface ApplicationmanagerGetAppLifeEventsParameters {
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedDefault: false */
    subscribe: boolean;
}

/** ACG: application.operationDescriptionProvides the application's event status in its life cycle.ParametersNameRequiredTypeDescriptionsubscribeRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedDefault: falseCall Returns */
export interface ApplicationmanagerGetAppLifeEventsCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.true: Subscribe for notificationsfalse: Not subscribed */
    subscribed: boolean;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}

/** ACG: application.operationDescriptionProvides the application's event status in its life cycle.ParametersNameRequiredTypeDescriptionsubscribeRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedDefault: falseCall ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.subscribedRequiredBooleanIndicates if subscribed to get notifications.true: Subscribe for notificationsfalse: Not subscribederrorTextOptionalStringIndicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details.errorCodeOptionalNumber (int8_t)The error code for the failed operation.Subscription Returns */
export interface ApplicationmanagerGetAppLifeEventsSubscription {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.true: Subscribe for notificationsfalse: Not subscribed */
    subscribed: boolean;
    /** Indicates the appId whose event has been changed. */
    appId: string;
    /** Indicates the launchPointId of the app. */
    launchPointId?: string;
    /** Indicates the instanceId of the app. */
    instanceId?: string;
    /** Indicates the displayId of the app. */
    displayId?: number;
    /** Indicates the application's status.Possible values are:splashpreloadlaunchforegroundbackgroundpauseclosestop */
    event: string;
    /** Indicates the application title as it is shown in the launcher and in the application window.Note: It is included only when event type is "splash". */
    title?: string;
    /** Indicates if splash image is shown. This value is set during app scanning.Possible values are:true: Splash image is shown. false: Splash image is not shown. Note: It is included only when event type is "splash". */
    showSplash?: boolean;
    /** Indicates if the spinner is shown. The value is set during app scanning.Possible values are:true: Spinner is shown. false: Spinner is not shown. Note: It is included only when event type is "splash". */
    showSpinner?: boolean;
    /** Indicates the background image to be shown while the application is loading.Example: splash-background.png.Note: It is included only when the event type is "splash". */
    splashBackground?: string;
    /** Indicates the current preload status.Possible values are:fullsemi-fullpartialminimalNote: It is included only when the event type is "preload". */
    preload?: boolean;
    /** Indicates the reason behind the launching/closing of the target app.Note: It is included only when event type is "launch/close/stop". */
    reason?: string;
    /** Indicates the windowType of the application.Note: It is included only when event type is "foreground". */
    windowType?: string;
    /** Indicates if the application has windowGroup or not.Note: It is included only when event type is "foreground". */
    windowGroup?: string;
    /** Indicates that the application has WindowGroupOwner or not.Note: It is included only when event type is "foreground". */
    windowGroupOwner?: string;
    /** Indicates the windowGroupOwner of the application.Note: It is included only when event type is "foreground". */
    windowGroupOwnerId?: string;
    /** Indicates the current background status.Possible values are:preloadnormalNote: It is included only when event type is "background". */
    status?: string;
}

/** ACG: application.operationDescriptionGets the path of the application.Note: This API is useful to get base directory path of installed application.Parameters */
export interface ApplicationmanagerGetAppBasePathParameters {
    /** Indicates the appId. */
    appId: string;
}

/** ACG: application.operationDescriptionGets the path of the application.Note: This API is useful to get base directory path of installed application.ParametersNameRequiredTypeDescriptionappIdRequiredStringIndicates the appId.Call Returns */
export interface ApplicationmanagerGetAppBasePathCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check "errorText" field for details. */
    returnValue: boolean;
    /** Indicates the appId. */
    appId?: string;
    /** Indicates the application path. */
    basePath?: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}

/** ACG: application.operationDescriptionGets the application information.Note: The information is generated from appinfo.json file.Parameters */
export interface ApplicationmanagerGetAppInfoParameters {
    /** Indicates the id of the application. */
    id: string;
    /** Indicates the value to be extracted from appinfo.json file. */
    properties?: string[];
}

/** ACG: application.operationDescriptionGets the application information.Note: The information is generated from appinfo.json file.ParametersNameRequiredTypeDescriptionidRequiredStringIndicates the id of the application.propertiesOptionalString arrayIndicates the value to be extracted from appinfo.json file.Call Returns */
export interface ApplicationmanagerGetAppInfoCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check "errorText" field for details. */
    returnValue: boolean;
    /** Indicates the appld. */
    appId?: string;
    /** If the getAppinfo method succeeds, the appInfo object contains information about the application. */
    appInfo?: ApplicationmanagerAppInfo;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}

/** ACG: application.operationDescriptionGets the application status and information.Parameters */
export interface ApplicationmanagerGetAppStatusParameters {
    /** Indicates the appld. */
    appId: string;
    /** Indicates the information of the application. */
    appInfo?: ApplicationmanagerAppInfo;
}

/** ACG: application.operationDescriptionGets the application status and information.ParametersNameRequiredTypeDescriptionappIdRequiredStringIndicates the appld.appInfoOptionalObject: appInfoIndicates the information of the application.Call Returns */
export interface ApplicationmanagerGetAppStatusCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the target appld. */
    appId: string;
    /** Indicates event according to the target app status. */
    event: string;
    /** Indicates the current app status. */
    status: string;
    /** Indicates if target app is present on the device.Possible values are:true: Target app exists on the device. false: Target app does not exist on the device. */
    exist: boolean;
    /** Indicates whether the target app could be launched or not.Possible values are:true: Target app could be launched. false: Target app could not be launched. */
    launchable: boolean;
    /** If the getAppStatus method succeeds and the parameter "appInfo" is true, the appInfo object contains information about the application. */
    appInfo?: ApplicationmanagerAppInfo;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details. */
    errorText?: string;
}

/** ACG: application.operationDescriptionGets the application status and information.ParametersNameRequiredTypeDescriptionappIdRequiredStringIndicates the appld.appInfoOptionalObject: appInfoIndicates the information of the application.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details.appIdRequiredStringIndicates the target appld.eventRequiredStringIndicates event according to the target app status.statusRequiredStringIndicates the current app status. existRequiredBooleanIndicates if target app is present on the device.Possible values are:true: Target app exists on the device. false: Target app does not exist on the device. launchableRequiredBooleanIndicates whether the target app could be launched or not.Possible values are:true: Target app could be launched. false: Target app could not be launched. appInfoOptionalObject: appInfoIf the getAppStatus method succeeds and the parameter "appInfo" is true, the appInfo object contains information about the application.errorCodeOptionalNumber (int8_t)The error code for the failed operation.errorTextOptionalStringIndicates the reason for the failure of the operation. See the "API Error Codes Reference" section for details.Subscription Returns */
export interface ApplicationmanagerGetAppStatusSubscription {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. */
    returnValue: boolean;
    /** Indicates the target appld. */
    appId: string;
    /** Indicates the event according to the target app status. */
    event: string;
    /** Indicates the current app status. */
    status: string;
    /** Indicates if target app is present on the device.Possible values are:true: Target app exists on the device. false: Target app does not exist on the device. */
    exist: boolean;
    /** Indicates whether the target app could be launched or not. Possible values are:true: Target app could be launched. false: Target app could not be launched. */
    launchable: boolean;
    /** If the getAppStatus method succeeds and the parameter "appInfo" is true, the appInfo object contains information about the application. */
    appInfo?: ApplicationmanagerAppInfo[];
}

/** ACG: application.operationDescriptionGets all of the launchpoints.Note: LaunchPoint is the virtual instance of an application. The webOS provides shortcut based on launchPoint.Parameters */
export interface ApplicationmanagerListLaunchPointsParameters {
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedDefault: false */
    subscribe?: boolean;
}

/** Contains the array of launchpoints. */
export interface ApplicationmanagerLaunchPoints {
    /** The launchpoint type: default, bookmark, group. */
    lptype: string;
    /** The application ID of the launchpoint. */
    id: string;
    /** The unique launchpoint ID. */
    launchPointId: string;
    /** This indicates whether the application is removable or not. */
    removable: boolean;
    /** The application title as it is shown in the Launcher and in the application window. The application title is unique, set once. */
    title: string;
    /** The image displayed for the application. */
    icon: string;
    /** The background color for the application tile. The application tile is displayed in the Home, the Launcher, and the Recent screen. */
    iconColor: string;
    /** The path of the large icon (130x130 pixels) displayed in the top left corner of the screen, when the user hovers over an application tile in the Launcher. This file path is relative to the appinfo.json file. */
    largeIcon: string;
    /** A short description for the application. The appDescription cannot exceed 60 characters. */
    appDescription: string;
    /** The params object contains information on the target application. You should specify correct parameters for each application. */
    params?: any;
    /** The additional data that may be used for analytical purposes. The userData will simply be logged when the user interacts with it in Launcher. */
    userData?: string;
}

/** ACG: application.operationDescriptionGets all of the launchpoints.Note: LaunchPoint is the virtual instance of an application. The webOS provides shortcut based on launchPoint.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedDefault: falseCall Returns */
export interface ApplicationmanagerListLaunchPointsCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Note: returnValue will always contain true. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribed */
    subscribed: boolean;
    /** If the listLaunchPoints method succeeds, the array of the launchpoints will be returned. */
    launchPoints: ApplicationmanagerLaunchPoints[];
}

/** ACG: application.operationDescriptionGets all of the launchpoints.Note: LaunchPoint is the virtual instance of an application. The webOS provides shortcut based on launchPoint.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedDefault: falseCall ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Note: returnValue will always contain true.subscribedRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedlaunchPointsRequiredObject array: launchPointsIf the listLaunchPoints method succeeds, the array of the launchpoints will be returned.Subscription Returns */
export interface ApplicationmanagerListLaunchPointsSubscription {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates if subscribed to get the notifications.Possible values are:true: Subscribed for notificationsfalse: Not subscribedDefault: true */
    subscribed: string;
    /** Returned if only one app's launchPoint is changed by updating/removing/installing. */
    launchPoint?: any;
    /** Indicates the change in the status of the launch point.Possible values are:addedupdatedremoved */
    change?: string;
    /** Favorite icon image displayed for the website. */
    favicon?: string;
}

/** ACG: application.launcherDescriptionAdds a dynamic launchpoint. According to the information on launchpoint, application is displayed in the Launcher.If a parameter is not defined, SAM set the LP's parameter value same as appInfo's value.Parameters */
export interface ApplicationmanagerAddLaunchPointParameters {
    /** Indicates the application ID to be added. */
    id: string;
    /** Indicates the launchpoint ID to be added. */
    launchPointId?: string;
    /** Indicates the launchpoint title. */
    title?: string;
    /** Indicates the path of the icon image displayed for the launchpoint. */
    icon?: string;
    /** Indicates the path of the background image displayed to the user when the user hovers over the launchpoint. */
    bgImage?: string;
    /** Indicates the background color for the launchpoint. It will be displayed when the bgImage is not provided or unable to display. A color can be specified as a hex value or as a HTML color name. Format: color hex code (ex. #000000(black)) http://www.color-hex.com/ */
    bgColor?: string;
    /** Indicates the path of the image displayed in the "Recents" tile. */
    imageForRecents?: string;
    /** Indicates the background color for the application tile. The application tile is displayed in the Home, the Launcher, and the Recent screen.Format: color hex code (ex. #000000(black)) http://www.color-hex.com/ */
    iconColor?: string;
    /** Indicates the path of the large icon (130x130 pixels) displayed in the top left corner of the screen, when the user hovers over an application tile in the Launcher.Note: This file path is relative to the appinfo.json file. */
    largeIcon?: string;
    /** Indicates a brief description for the launchpoint.Note: The appDescription cannot exceed 60 characters. */
    appDescription?: string;
    /** If params is used, it should contain information on the launchpoint. */
    params?: any;
    /** Indicates the paths of the background images displayed to the user when the user hovers over the launchpoint. */
    bgImages?: string[];
    /** Indicates the tile size on UI.Possible values arenormallarge. Default: normalNote:The large tile hints that UI should make this tile larger than normal (2x).Usually, large size may be used for promotional application. */
    tileSize?: string;
    /** Indicates if the launchpoint position is movable or not.Possible values are:true: The launchpoint position cannot be moved by the user.false: the launchpoint position can be moved by the user.Default: false */
    unmovable?: boolean;
    /** Indicates the additional data that may be used for analytical purposes. The userData will be logged when the user interacts with it in Launcher. */
    userData?: string;
    /** Indicates the category(group) of the launch point. The value should be the one of below mapping table.*$RESERVED_VALUE is for special callers to be controlled by LPM.defaultAny9*$RESERVED_VALUE$RESERVED_LP$RESERVED_POSITIONValueLaunch Point Typeposition */
    policyCategorydefault*$RESERVED_VALUE?: string9$reserved_position;
    /** */
    default?: 9;
    /** */
    *$RESERVED_VALUE?: $reserved_position;
    /** */
    ?;
    /** If "supportI18nTitle" is set to true, i18n will be supported for title when any information of this launch point is changed.If "supportI18nTitle" is set to false, i18n will be supported for title when any information of this launch point is changed.The default value of supportI18nTitle is true */
    supportI18nTitle?: boolean;
    /** Indicates the paths of the favorite icon for the launchpoint. */
    favicon?: string;
    /** If it is set to true, the app will be fresh-launched(re-randering) whenever user clicks the launchpoint.Note: This parameter is deprecated in IvyLeague. */
    relaunch?: boolean;

/** ACG: application.launcherDescriptionAdds a dynamic launchpoint. According to the information on launchpoint, application is displayed in the Launcher.If a parameter is not defined, SAM set the LP's parameter value same as appInfo's value.ParametersNameRequiredTypeDescriptionidRequiredStringIndicates the application ID to be added.launchPointIdOptionalStringIndicates the launchpoint ID to be added.titleOptionalStringIndicates the launchpoint title.iconOptionalStringIndicates the path of the icon image displayed for the launchpoint.bgImageOptionalStringIndicates the path of the background image displayed to the user when the user hovers over the launchpoint.bgColorOptionalStringIndicates the background color for the launchpoint. It will be displayed when the bgImage is not provided or unable to display. A color can be specified as a hex value or as a HTML color name. Format: color hex code (ex. #000000(black)) http://www.color-hex.com/imageForRecentsOptionalStringIndicates the path of the image displayed in the "Recents" tile.iconColorOptionalStringIndicates the background color for the application tile. The application tile is displayed in the Home, the Launcher, and the Recent screen.Format: color hex code (ex. #000000(black)) http://www.color-hex.com/largeIconOptionalStringIndicates the path of the large icon (130x130 pixels) displayed in the top left corner of the screen, when the user hovers over an application tile in the Launcher.Note: This file path is relative to the appinfo.json file.appDescriptionOptionalStringIndicates a brief description for the launchpoint.Note: The appDescription cannot exceed 60 characters.paramsOptionalObject: paramsIf params is used, it should contain information on the launchpoint.bgImagesOptionalString arrayIndicates the paths of the background images displayed to the user when the user hovers over the launchpoint.tileSizeOptionalStringIndicates the tile size on UI.Possible values arenormallarge. Default: normalNote:The large tile hints that UI should make this tile larger than normal (2x).Usually, large size may be used for promotional application. unmovableOptionalBooleanIndicates if the launchpoint position is movable or not.Possible values are:true: The launchpoint position cannot be moved by the user.false: the launchpoint position can be moved by the user.Default: falseuserDataOptionalStringIndicates the additional data that may be used for analytical purposes. The userData will be logged when the user interacts with it in Launcher.policyCategoryOptionalStringIndicates the category(group) of the launch point. The value should be the one of below mapping table.*$RESERVED_VALUE is for special callers to be controlled by LPM.defaultAny9*$RESERVED_VALUE$RESERVED_LP$RESERVED_POSITIONValueLaunch Point TypepositionsupportI18nTitleOptionalBooleanIf "supportI18nTitle" is set to true, i18n will be supported for title when any information of this launch point is changed.If "supportI18nTitle" is set to false, i18n will be supported for title when any information of this launch point is changed.The default value of supportI18nTitle is truefaviconOptionalStringIndicates the paths of the favorite icon for the launchpoint.relaunchOptionalBooleanIf it is set to true, the app will be fresh-launched(re-randering) whenever user clicks the launchpoint.Note: This parameter is deprecated in IvyLeague.Call Returns */
export interface ApplicationmanagerAddLaunchPointCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** Indicates the launchpoint ID to be added. */
    launchPointId?: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** The error code for the failed operation. */
    errorCode?: number;
}

/** ACG: application.launcherDescriptionUpdates a dynamic launchpoint.Note: If a user changes the HDMI application icon to another icon like a game icon using Input Manager on a TV, the HDMI application icon is dynamically           changed to the new icon on the launcher.Parameters */
export interface ApplicationmanagerUpdateLaunchPointParameters {
    /** Indicates the launchpoint ID to be updated.Note: Both launchPointId and one or more parameters (title, icon, etc) need to be passed from service user. */
    launchPointId: string;
    /** Indicates the launchpoint title. */
    title?: string;
    /** Indicates the path of the icon image displayed for the launchpoint. */
    icon?: string;
    /** Indicates the path of the background image displayed to the user when the user hovers over the launchpoint.Format: color hex code (ex. #000000(black)) http://www.color-hex.com/ */
    bgImage?: string;
    /** Indicates the background color for the launchpoint. It will be displayed when the bgImage is not provided or unable to display. A color can be specified as a hex value or as a HTML color name. */
    bgColor?: string;
    /** Indicates the path of the image displayed in the Recents tile. */
    imageForRecents?: string;
    /** Indicates the background color for the application tile. The application tile is displayed in the Home, the Launcher, and the Recent screen.Format: color hex code (ex. #000000(black)) http://www.color-hex.com/ */
    iconColor?: string;
    /** Indicates the path of the large icon (130x130 pixels) displayed in the top left corner of the screen, when the user hovers over an application tile in the Launcher.Note: This file path is relative to the appinfo.json file. */
    largeIcon?: string;
    /** Indicates a brief description for the launchpoint.Note: The appDescription cannot exceed 60 characters. */
    appDescription?: string;
    /** If params is used, it should contain information on the launchpoint which will be passed to the application. */
    params?: any;
    /** Indicates the paths of the background images displayed to the user when the user hovers over the launchpoint. */
    bgImages?: string[];
    /** Indicates the tile size on UI.Possible values arenormallarge. Default: normalNote:The large tile hints that UI should make this tile larger than normal (2x).Usually, large size may be used for promotional application. */
    tileSize?: string;
    /** Indicates if the launchpoint position is movable or not.Possible values are:true: The launchpoint position cannot be moved by the user.false: the launchpoint position can be moved by the user.Default: false */
    unmovable?: boolean;
    /** Indicates the additional data that may be used for analytical purposes.Note: The userData will simply be logged when the user interacts with it in Launcher. */
    userData?: string;
    /** Indicates the list of icon images.Note: The icons will be shown in the launch point alternately. */
    icons?: any[];
    /** Indicates the favorite icon image displayed for the website. */
    favicon?: string;
    /** Indicate a category(group) of the launch point. The value should be the one of below mapping table.*$RESERVED_VALUE is for special callers to be controlled by LPM.ValueLaunch Point TypepositiondefaultAny9*$RESERVED_VALUE$RESERVED_LP$RESERVED_POSITION */
    policyCategorydefault*$RESERVED_VALUE?: string9$reserved_position;
    /** */
    ?;
    /** */
    default?: 9;
    /** */
    *$RESERVED_VALUE?: $reserved_position;
    /** Indicates if the target app is re-launched whenever the launch point is clicked. (Not fast-switching)Note: This parameter is deprecated in IvyLeague. */
    relaunch?: boolean;

/** ACG: application.launcherDescriptionUpdates a dynamic launchpoint.Note: If a user changes the HDMI application icon to another icon like a game icon using Input Manager on a TV, the HDMI application icon is dynamically           changed to the new icon on the launcher.ParametersNameRequiredTypeDescriptionlaunchPointIdRequiredStringIndicates the launchpoint ID to be updated.Note: Both launchPointId and one or more parameters (title, icon, etc) need to be passed from service user.titleOptionalStringIndicates the launchpoint title.iconOptionalStringIndicates the path of the icon image displayed for the launchpoint.bgImageOptionalStringIndicates the path of the background image displayed to the user when the user hovers over the launchpoint.Format: color hex code (ex. #000000(black)) http://www.color-hex.com/bgColorOptionalStringIndicates the background color for the launchpoint. It will be displayed when the bgImage is not provided or unable to display. A color can be specified as a hex value or as a HTML color name.imageForRecentsOptionalStringIndicates the path of the image displayed in the Recents tile.iconColorOptionalStringIndicates the background color for the application tile. The application tile is displayed in the Home, the Launcher, and the Recent screen.Format: color hex code (ex. #000000(black)) http://www.color-hex.com/largeIconOptionalStringIndicates the path of the large icon (130x130 pixels) displayed in the top left corner of the screen, when the user hovers over an application tile in the Launcher.Note: This file path is relative to the appinfo.json file.appDescriptionOptionalStringIndicates a brief description for the launchpoint.Note: The appDescription cannot exceed 60 characters.paramsOptionalObject: paramsIf params is used, it should contain information on the launchpoint which will be passed to the application.bgImagesOptionalString arrayIndicates the paths of the background images displayed to the user when the user hovers over the launchpoint.tileSizeOptionalStringIndicates the tile size on UI.Possible values arenormallarge. Default: normalNote:The large tile hints that UI should make this tile larger than normal (2x).Usually, large size may be used for promotional application.unmovableOptionalBooleanIndicates if the launchpoint position is movable or not.Possible values are:true: The launchpoint position cannot be moved by the user.false: the launchpoint position can be moved by the user.Default: falseuserDataOptionalStringIndicates the additional data that may be used for analytical purposes.Note: The userData will simply be logged when the user interacts with it in Launcher.iconsOptionalObject arrayIndicates the list of icon images.Note: The icons will be shown in the launch point alternately.faviconOptionalStringIndicates the favorite icon image displayed for the website.policyCategoryOptionalStringIndicate a category(group) of the launch point. The value should be the one of below mapping table.*$RESERVED_VALUE is for special callers to be controlled by LPM.ValueLaunch Point TypepositiondefaultAny9*$RESERVED_VALUE$RESERVED_LP$RESERVED_POSITIONrelaunchOptionalBooleanIndicates if the target app is re-launched whenever the launch point is clicked. (Not fast-switching)Note: This parameter is deprecated in IvyLeague.Call Returns */
export interface ApplicationmanagerUpdateLaunchPointCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for more details. */
    errorText?: string;
}

/** ACG: application.launcherDescriptionRemoves a dynamic launchpoint.Note: It can cause application uninstall.Parameters */
export interface ApplicationmanagerRemoveLaunchPointParameters {
    /** Indicates the launchpoint ID to be removed. */
    launchPointId: string;
}

/** ACG: application.launcherDescriptionRemoves a dynamic launchpoint.Note: It can cause application uninstall.ParametersNameRequiredTypeDescriptionlaunchPointIdRequiredStringIndicates the launchpoint ID to be removed.Call Returns */
export interface ApplicationmanagerRemoveLaunchPointCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "API Error Codes Reference" section for more details. */
    errorText?: string;
}

/** ACG: application.operationDescriptionRegisters a native application.Note:This method should be called by launched native application to indicate if it is ready to receive several events.Each event is communicated via the ls message connection and the reply will be delivered only to the app that is performing the action.ParametersNoneCall Returns */
export interface ApplicationmanagerRegisterAppCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. */
    returnValue: boolean;
    /** If a native application is successfully registered, event will contain registered. */
    event: string;
}

/** ACG: application.operationDescriptionRegisters a native application.Note:This method should be called by launched native application to indicate if it is ready to receive several events.Each event is communicated via the ls message connection and the reply will be delivered only to the app that is performing the action.ParametersNoneCall ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed.eventRequiredStringIf a native application is successfully registered, event will contain registered.Subscription Returns */
export interface ApplicationmanagerRegisterAppSubscription {
    /** It indicates one of events the app should handle. */
    event: string;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. */
    returnValue: boolean;
    /** Indicates the information to be delivered to the registered app. */
    parameters?: any;
    /** Indicates the reason for the app to be launched/closed. */
    reason?: string;
    /** Indicates the ID of the registered app. */
    appId?: string;
}

/** ACG: application.launcherDescriptionLocks an application. Note: Once it is locked, the application cannot be launched.This method is only called by appinstalld. Do not use this method in your application.Parameters */
export interface ApplicationmanagerLockAppParameters {
    /** The application ID to be locked. */
    id: string;
    /** Indicates if the application is locked.Possible values are:true: The application is locked, set lock to true. If set to true, the application cannot be launched.false: The application is unlocked. */
    lock: boolean;
}

/** ACG: application.launcherDescriptionLocks an application. Note: Once it is locked, the application cannot be launched.This method is only called by appinstalld. Do not use this method in your application.ParametersNameRequiredTypeDescriptionidRequiredStringThe application ID to be locked.lockRequiredBooleanIndicates if the application is locked.Possible values are:true: The application is locked, set lock to true. If set to true, the application cannot be launched.false: The application is unlocked.Call Returns */
export interface ApplicationmanagerLockAppCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check "errorText" field for details. */
    returnValue: boolean;
    /** Indicates if the application is locked or unlocked.Possible values are:true: The application is lockedfalse: The application is unlocked */
    locked: boolean;
    /** Indicates the application ID which is locked or unlocked. */
    id: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

}

}
