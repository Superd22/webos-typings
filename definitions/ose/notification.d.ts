/** luna://com.webos.notification */
interface Notification {
}

/** ACG: notification.managementDescriptionSubscribe to create alert notifications.Note: This method should only be used by the Surface Manager.Parameters */
export interface NotificationGetAlertNotificationParameters {
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribedDefault: false */
    subscribe?: boolean;
}

/** ACG: notification.managementDescriptionSubscribe to create alert notifications.Note: This method should only be used by the Surface Manager.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribedDefault: falseCall Returns */
export interface NotificationGetAlertNotificationCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed.Note: This method always returns returnValue as true. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribedNote: No explicit error message will be sent out when the subscription fails because this method is intended for one specific client that is the Surface Manager. */
    subscribed?: boolean;
}

/** Action to be performed on failure to create alert. */
export interface NotificationOnFailAction {
    /** URI to be called on failure to create alert. */
    serviceURI: string;
    /** Method to be called on failure to create alert. */
    serviceMethod: string;
    /** Parameters to be passed when URI (specified above) is called. */
    launchParams: any;
}

/** ACG: notification.managementDescriptionSubscribe to create alert notifications.Note: This method should only be used by the Surface Manager.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribedDefault: falseCall ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed.Note: This method always returns returnValue as true.subscribedOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribed for notifications.false: Not subscribedNote: No explicit error message will be sent out when the subscription fails because this method is intended for one specific client that is the Surface Manager.Subscription Returns */
export interface NotificationGetAlertNotificationSubscription {
    /** Contains alert info. */
    alertInfo: any;
    /** Indicates the timestamp string.Note: It indicates epoch time as milliseconds. */
    timestamp: string;
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed.Note: This method always returns returnValue as true. */
    returnValue: boolean;
    /** Indicates the action that the subscriber should take.Possible alert types are:open: Indicates that the SystemUI should show the alert.close: Indicates that the SystemUI should close the currently open alert. */
    alertAction: string;
    /** Indicates the action to be performed on failure to create an alert. */
    onFailAction?: NotificationOnFailAction;
}

/** ACG: notification.managementDescriptionCloses the currently displayed alert notification.Parameters */
export interface NotificationCloseAlertParameters {
    /** The ID of the alert notification to close. */
    alertId: string;
}

/** ACG: notification.managementDescriptionCloses the currently displayed alert notification.ParametersNameRequiredTypeDescriptionalertIdRequiredStringThe ID of the alert notification to close.Call Returns */
export interface NotificationCloseAlertCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorText" field for details. */
    returnValue: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: notification.managementDescriptionCloses all the open alerts.Note: This method is only used by com.webos.service.battest during BAT test. If the caller is not com.webos.service.battest, the method will fail.ParametersNoneCall Returns */
export interface NotificationCloseAllAlertsCallReturn {
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorText" field for details. */
    returnValue: boolean;
    /** Indicates the reason for the failure of the operation. See the Error Codes Reference of this method for more details. */
    errorText?: string;
}

/** ACG: notification.managementDescriptionRemoves all notifications that are currently being displayed.Parameters */
export interface NotificationRemoveAllNotificationParameters {
    /** Identifier of the display where the notification is to be displayed. Possible values are 0 and 1. */
    displayId?: number;
}

/** ACG: notification.managementDescriptionRemoves all notifications that are currently being displayed.ParametersNameRequiredTypeDescriptiondisplayIdOptionalNumberIdentifier of the display where the notification is to be displayed. Possible values are 0 and 1.Call Returns */
export interface NotificationRemoveAllNotificationCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorText" field for details. */
    returnValue: boolean;
    /** Indicates whether all notifications were removed successfully.Possible values are: true: Notifications were removed successfully.false: Notification removal failed. */
    removeAllNotiId: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
    /** Identifier of the display where the notification is to be displayed. Possible values are 0 and 1. */
    displayId: number;
}

/** Contains action information when a user clicks the toast */
export interface NotificationOnclick {
    /** Application Id to be launched */
    appId?: string;
    /** Contains parameters when appId is launched. */
    params?: any;
}

/** Creates a toast notification as a persistent message and define its schedule. */
export interface NotificationSchedule {
    /** If this field is set, the created persistent message will be automatically removed after the specified amount of time has passed.The value should be the number of seconds that have elapsed since 00:00:00 UTC, 1 Jan 1970. */
    expire?: number;
}

/** Defines extra toast image. */
export interface NotificationImage {
    /** Image resource URI. */
    uri?: string;
}

/** ACG: notification.operationDescriptionCreates a toast notification.Parameters */
export interface NotificationCreateToastParameters {
    /** The ID of the application or service that creates the toast notification. */
    sourceId?: string;
    /** The file path of the alert icon. The file path must be local to the device.NOTE: The icon must be 80 x 80 and in PNG format. */
    iconUrl?: string;
    /** The detailed message to be displayed as part of the toast notification. The message can be up to 60 characters long. */
    message: string;
    /** Defines the toast action. An example is: {"appId":"com.webos.app.test"} */
    onclick?: NotificationOnclick;
    /** Indicates no action is required. Possible values are:true: If no action is requiredfalse: If action is defined.Note: The default value is false. */
    noaction?: boolean;
    /** Possible values are:true: To indicate the toast notification is old and does not need to be displayed.false: If the toast notification is current and should be displayed.Note: The default value is false. */
    stale?: boolean;
    /** Indicates whether the toast message should be saved in the database. If persistent is set to true, the toast message will be saved in the database. */
    persistent?: boolean;
    /** Defines notification comes from app or systemtrue : notification comes from systemfalse : notification comes from app */
    isSysReq?: boolean;
    /** Creates a toast notification as a persistent message and defines its schedule. */
    schedule?: NotificationSchedule;
    /** Defines the toast type. */
    type?: string;
    /** Defines extra toast resource. */
    extra?: NotificationImage[];
    /** Indicates if notification to be created is just a simple toast.Possible values are:true: Shows simple informationfalse: Calls createNotification API and notiInfo is added in notification listDefault: true */
    onlyToast?: boolean;
}

/** ACG: notification.operationDescriptionCreates a toast notification.ParametersNameRequiredTypeDescriptionsourceIdOptionalStringThe ID of the application or service that creates the toast notification.iconUrlOptionalStringThe file path of the alert icon. The file path must be local to the device.NOTE: The icon must be 80 x 80 and in PNG format.messageRequiredStringThe detailed message to be displayed as part of the toast notification. The message can be up to 60 characters long.onclickOptionalObject: onclickDefines the toast action. An example is: {"appId":"com.webos.app.test"}noactionOptionalBooleanIndicates no action is required. Possible values are:true: If no action is requiredfalse: If action is defined.Note: The default value is false.staleOptionalBooleanPossible values are:true: To indicate the toast notification is old and does not need to be displayed.false: If the toast notification is current and should be displayed.Note: The default value is false.persistentOptionalBooleanIndicates whether the toast message should be saved in the database. If persistent is set to true, the toast message will be saved in the database.isSysReqOptionalBooleanDefines notification comes from app or systemtrue : notification comes from systemfalse : notification comes from appscheduleOptionalObject: scheduleCreates a toast notification as a persistent message and defines its schedule.typeOptionalStringDefines the toast type.extraOptionalObject array: imageDefines extra toast resource.onlyToastOptionalBooleanIndicates if notification to be created is just a simple toast.Possible values are:true: Shows simple informationfalse: Calls createNotification API and notiInfo is added in notification listDefault: trueCall Returns */
export interface NotificationCreateToastCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. */
    returnValue: boolean;
    /** The id of the created toast notification. This would be sourceId + "-" + Timestamp. */
    toastId?: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: notification.managementDescriptionSubscribe to created toast notification. Note: This method should only be used by Surface Manager only.Parameters */
export interface NotificationGetToastNotificationParameters {
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribe for notificationsfalse: Not subscribedDefault: false */
    subscribe?: boolean;
}

/** ACG: notification.managementDescriptionSubscribe to created toast notification. Note: This method should only be used by Surface Manager only.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribe for notificationsfalse: Not subscribedDefault: falseCall Returns */
export interface NotificationGetToastNotificationCallReturn {
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribe for notificationsfalse: Not subscribedNote: No explicit error message will be sent out when subscription fails because this method is intended for one speicific client that is the Surface Manager. */
    subscribed?: boolean;
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed.Note: This method always returns returnValue as true. */
    returnValue: boolean;
}

/** Describes the action parameter for the toast. */
export interface NotificationAction {
    /** launchParams must be passed in the format below where "appid" is a string that contains the id of the app to be launched. {"id": "appid"} */
    launchParams: any;
    /** Contains the LS2 service method name. */
    serviceMethod: string;
    /** Contains LS2 Service URI. */
    serviceURI: string;
}

/** ACG: notification.managementDescriptionSubscribe to created toast notification. Note: This method should only be used by Surface Manager only.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribe for notificationsfalse: Not subscribedDefault: falseCall ReturnsNameRequiredTypeDescriptionsubscribedOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribe for notificationsfalse: Not subscribedNote: No explicit error message will be sent out when subscription fails because this method is intended for one speicific client that is the Surface Manager.returnValueRequiredBooleanIndicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed.Note: This method always returns returnValue as true.Subscription Returns */
export interface NotificationGetToastNotificationSubscription {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed.Note: This method always returns returnValue as true. */
    returnValue: boolean;
    /** Contains the message to be displayed. */
    message: string;
    /** Indicates the type of the toast message.Note: This is optional parameter and currently not used. This is reserved for future purpose. */
    type?: string;
    /** Contains the title information to be displayed for the toast. */
    title?: string;
    /** Indicates if this is a Cradle Request or not. Cradle Request is used for Battery Notifications only. So, it will be set to false for all other cases.Note:A Cradle is used for charging the watch wirelessly. When a watch is put on an inductive charger, it sends a notification indicating the current battery level.A Cradle Request is used for showing that notification. */
    isCradleReq?: boolean;
    /** Contains the source Id of the requester. */
    sourceId: string;
    /** Indicates the time stamp string. It indicates epoch time as milliseconds. */
    timestamp: string;
    /** Indicates if the notification comes from an app or system.Possible values are:true: Notification comes from system.false: Notification comes from app. */
    isSysReq: boolean;
    /** Contains the file path to icon to be displayed. */
    iconUrl: string;
    /** Contains the action parameter. */
    action?: NotificationAction;
    /** Describes the toast schedule. */
    schedule?: NotificationSchedule;
    /** Specifies the path of the icon. It should be absolute local file system path. */
    iconPath: string;
    /** Indicates the names of the user logged in to the corresponding session. If the user is logged in as guest user, the value will be "guest". */
    user?: string;
    /** Displays the db kind in which the toast is stored.Note: It is an internal parameter. */
    _kind?: string;
    /** Indicates if notification is created as a simple toast.Note: It is set when creating the toast. */
    onlyToast: boolean;
}

/** ACG: notification.managementDescriptionLists the toasts created for the app/client based on the user logged into the particular session.Parameters */
export interface NotificationGetToastListParameters {
    /** Identifier of the display where the notification is to be displayed. Possible values are 0 and 1. */
    displayId?: number;
}

/** Contains information about the stored toasts */
export interface NotificationToastInfo {
    /** Identifier of the display where the notification is displayed. Possible values are 0 and 1 */
    displayId: number;
    /** Contains the source Id of the requester */
    sourceId: string;
    /** Contains the unique ID of the toast created */
    toastId: string;
    /** Time stamp string. It indicates epoch time as milliseconds */
    timestamp: string;
    /** Contains the file path to icon to be displayed */
    iconUrl: string;
    /** Describe icon path. It should be absoulte local file system path */
    iconPath: string;
    /** Contains the title information to be displayed for the toast */
    title: string;
    /** Indicates the toast message. */
    message: string;
    /** Indicates whether the notification comes from an app or systemtrue: notification from systemfalse: notification from app */
    isSysReq: boolean;
    /** Describe toast schedule. */
    schedule: NotificationSchedule;
    /** Indicates the type of the toast message */
    type: string;
    /** Indicates whether the toast is read by the user or still unreadtrue: toast is readfalse: toast is unread */
    readStatus: boolean;
    /** Contains the on-click action parameter. */
    action: NotificationAction;
}

/** ACG: notification.managementDescriptionLists the toasts created for the app/client based on the user logged into the particular session.ParametersNameRequiredTypeDescriptiondisplayIdOptionalNumberIdentifier of the display where the notification is to be displayed. Possible values are 0 and 1.Call Returns */
export interface NotificationGetToastListCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. */
    returnValue: boolean;
    /** Contains information of the stored toasts. */
    toastInfo: NotificationToastInfo[];
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: notification.managementDescriptionSpecifies whether the toast is to be marked as read or unread.Parameters */
export interface NotificationSetToastStatusParameters {
    /** Indicates the unique ID of the toast created. */
    toastId: string;
    /** Indicates the status of a toast to be set by the user.Possible values are: true: toast is read.false: toast is unread. */
    readStatus: boolean;
}

/** ACG: notification.managementDescriptionSpecifies whether the toast is to be marked as read or unread.ParametersNameRequiredTypeDescriptiontoastIdRequiredStringIndicates the unique ID of the toast created.readStatusRequiredBooleanIndicates the status of a toast to be set by the user.Possible values are: true: toast is read.false: toast is unread.Call Returns */
export interface NotificationSetToastStatusCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. */
    returnValue: boolean;
    /** Contains the unique ID of the toast created. */
    toastId?: string;
    /** Indicates the status of a toast set by the user.Possible values are:true: toast is read.false: toast is unread. */
    readStatus?: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}

/** ACG: notification.managementDescriptionQueries the toast notification details of the stored messages and provides the read/unread count of the toast notifications.Note: Only "com.webos.surfacemanager" and "com.webos.app.notification" have permission to monitor the notification status change.Parameters */
export interface NotificationGetToastCountParameters {
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribe for notificationsfalse: Not subscribed */
    subscribe?: boolean;
    /** Identifier of the display where the notification is to be displayed. Possible values are 0 and 1. */
    displayId?: number;
}

/** ACG: notification.managementDescriptionQueries the toast notification details of the stored messages and provides the read/unread count of the toast notifications.Note: Only "com.webos.surfacemanager" and "com.webos.app.notification" have permission to monitor the notification status change.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribe for notificationsfalse: Not subscribeddisplayIdOptionalNumberIdentifier of the display where the notification is to be displayed. Possible values are 0 and 1.Call Returns */
export interface NotificationGetToastCountCallReturn {
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. */
    returnValue: boolean;
    /** Indicates if subscribed to get notifications.Possible values are:true: Subscribe for notificationsfalse: Not subscribed */
    subscribed: boolean;
}

/** ACG: notification.managementDescriptionQueries the toast notification details of the stored messages and provides the read/unread count of the toast notifications.Note: Only "com.webos.surfacemanager" and "com.webos.app.notification" have permission to monitor the notification status change.ParametersNameRequiredTypeDescriptionsubscribeOptionalBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribe for notificationsfalse: Not subscribeddisplayIdOptionalNumberIdentifier of the display where the notification is to be displayed. Possible values are 0 and 1.Call ReturnsNameRequiredTypeDescriptionreturnValueRequiredBooleanIndicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed.subscribedRequiredBooleanIndicates if subscribed to get notifications.Possible values are:true: Subscribe for notificationsfalse: Not subscribedSubscription Returns */
export interface NotificationGetToastCountSubscription {
    /** Indicates the count of toast notifications read by a specific user. */
    readCount: number;
    /** Indicates the count of toast notifications unread by the user. */
    unreadCount: number;
    /** Indicates the total count of toast notifications respective to a user. */
    totalCount: number;
    /** Indicates the status of operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. */
    returnValue: boolean;
}

/** ACG: notification.managementDescriptionRemoves a toast notification from the database.Parameters */
export interface NotificationCloseToastParameters {
    /** ID of the toast notification to remove from the database. Note: Either toastId or sourceId is required. */
    toastId?: string;
    /** ID of the app/service to remove from the database.Note: Either toastId or sourceId is required. */
    sourceId?: string;
}

/** ACG: notification.managementDescriptionRemoves a toast notification from the database.ParametersNameRequiredTypeDescriptiontoastIdOptionalStringID of the toast notification to remove from the database. Note: Either toastId or sourceId is required.sourceIdOptionalStringID of the app/service to remove from the database.Note: Either toastId or sourceId is required.Call Returns */
export interface NotificationCloseToastCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Indicates that the operation was successful.false: Indicates that the operation failed. Check the "errorText" field for details. */
    returnValue: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes Reference" section of this method for details. */
    errorText?: string;
}
