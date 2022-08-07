/** luna://com.palm.activitymanager */
interface ActivityManager {
}

export interface ActivityManagerAdoptParameters {
    /** Activity ID. Either this or "activityName" is required. */
    activityId: number;
    /** Activity name. Either this or "activityId" is required. */
    activityName: string;
    /** The flag to wait for Activity to be released. */
    wait: boolean;
    /** The flag that decides whether to subscribe or not. */
    /** true: Subscribe. */
    /** false: Do not subscribe. Call the method only once. (Default) */
    subscribe: boolean;
    /** The flag to have the Activity Manager generate update events when the state of an Activity's requirement changes. */
    detailedEvents?: boolean;
}

export enum ActivityManagerAdoptError {
    NO_SUCH_FILE_OR_DIRECTORY = "2",
    OPERATION_BLOCKED = "11",
    OUT_OF_MEMORY = "12",
    PERMISSION_DENIED = "13",
    FILE_ALREADY_EXISTS = "17",
    INVALID_ARGUMENT = "22",
    FUNCTION_NOT_IMPLEMENTED = "38",
    INTERNAL_ERROR = "-1000"
}

export interface ActivityManagerAdoptCallReturn {
    /** The flag that indicates the success/failure of the request. */
    /** true: Success */
    /** false: Failure */
    returnValue: boolean;
    /** errorCode contains the error code if the method fails. The method returns errorCode only if it fails. */
    /** See the Error Codes Reference of this method for more details. */
    errorCode?: number;
    /** errorText contains the error text if the method fails. The method returns errorText only if it fails. */
    /** See the Error Codes Reference of this method for more details. */
    errorText?: string;
    /** True if the Activity was adopted. */
    adopted?: boolean;
}

export interface ActivityManagerType {
    /** Activity runs in the foreground and starts running when its prerequisites are met. Set either this or background or immediate and priority. */
    foreground?: boolean;
    /** Activity runs in the background. When its prerequisites are met it's placed into a ready queue and runs as system resources allow. Set either this or foreground, or immediate and priority. */
    background?: boolean;
    /** Activity should run immediately. Set either this and priority, or background or foreground. */
    immediate?: boolean;
    /** Indicates Activity's priority. Must be one of the following: "highest", "high", "normal", "low", or "lowest". Set either this and immediate, or background or foreground. */
    priority?: string;
    /** Not currently used. */
    userInitiated?: boolean;
    /** Stores Activity state in DB so it can span reboots, loss of service, or updates. */
    persist?: boolean;
    /** Activity is restarted unless terminated with complete, stop, or cancel. */
    explicit?: boolean;
    /** Activity does not have a well-defined ending point and could run indefinitely. */
    continuous?: boolean;
    /** Activity requires device remain powered while it is running. */
    power?: boolean;
    /** Events associated with this Activity are due to complete shortly. Set this flag to keep the device from having to suspend/restart in the meantime. */
    powerDebounce?: boolean;
}

export interface ActivityManagerSchedule {
    /** Indicates the interval occurs at the precisely specified start time, and every given interval thereafter. */
    precise: boolean;
    /** Launch time. The time format is a subset of ISO 8601 "YYYY-MM-DD HH:MM:SS"(for local) or "YYYY-MM-DD HH:MM:SSZ" for UTC. This field is required for basic scheduled items, and optional for intervals. */
    start: string;
    /** Specifies the number of days, hours, minutes, and seconds-"##d##h##m##s"-between Activity execution. If set, then after an Activity is marked Complete, it is re-queued with a new start time. Days, hours, minutes and seconds must be specified in the order, but any can be left out. */
    interval?: string;
    /** If an interval Activity is not able to run, i.e., the device was off when scheduled to start, it runs(by default) at the first opportunity. However, if the skip is true, it waits for the next scheduled interval time to occur before running. */
    skip?: boolean;
    /** Indicates that a date/time NOT ending in 'Z' is local. This becomes unnecessary once times not ending in 'Z' are interpreted as local by default. */
    local?: boolean;
    /** End date/time for the interval. */
    end?: string;
    /** Indicates the interval occurs at the finished time of the last activity. The finished time of the last activity is set as the base time for the interval. Start time is needed for initialization. Therefore this property is available when the precise property is true. */
    relative?: boolean;
    /** Last finished time. The time format is a subset of ISO 8601 "YYYY-MM-DD HH:MM:SS"(for local) or "YYYY-MM-DD HH:MM:SSZ" for UTC. */
    lastFinished?: boolean;
}

export interface ActivityManagerTrigger {
    /** Name of the callback method. */
    method: string;
    /** Parameters for subscription or watch. */
    params?: any;
    /** Single db8 where clause or array of db8 where clauses. */
    where?: any;
    /** The object that holds key and value properties. The trigger query with the key and compare the old value with the specified value. */
    compare?: any;
    /** Key property name. Activity Manager looks for this field in callback response, i.e., "fired" from db8 watch where query results have changed. */
    key?: string;
}

export interface ActivityManagerCallback {
    /** Callback URI. */
    method: string;
    /** Any parameters to pass to the callback. */
    params?: any;
}

export interface ActivityManagerParent {
    /** Application ID. Either this or serviceId must be specified. */
    appId?: string;
    /** Service ID. Either this or appId must be specified. */
    serviceId?: string;
}

export interface ActivityManagerActivity {
    /** Activity name. It must be unique for a creator. Applies to both persistent and non-persistent Activities. The create call fails if this field is not unique unless the "replace" field is true. */
    name: string;
    /** Activity description. */
    description: string;
    /** Indicates how the Activity is handled. Principally, it is used to denote the Activity as either foreground or background, and whether it can be paused or canceled. */
    type: ActivityManagerType;
    /** Time-based requirements for Activity. */
    schedule?: ActivityManagerSchedule;
    /** The event that must occur for Activity to run. */
    trigger?: ActivityManagerTrigger;
    /** Call to invoke when Activity runs. This object should be defined when Activity is needed to start immediately. */
    callback?: ActivityManagerCallback;
    /** Opaque object the Activity Manager stores and returns in the callback parameters. */
    metadata?: any;
    /** Activity ID */
    activityId?: number;
    /** Activity creator (parent object) */
    creator?: any;
    /** Activity parent */
    parent?: ActivityManagerParent;
    /** Activity adopters (parent object array) */
    adopters?: objectarray;
    /** Activity state. Property that represents the current activity state with the following strings: */
    /** init: Activity has been created and is waiting for Activity's associations and initial app and service subscriptions to be in place. */
    /** waiting: Activity is waiting for a trigger to fire or its scheduled time to begin running. */
    /** blocked: Activity is waiting for its specified Requirements to be met. */
    /** queued: The Activity is queued and ready to run. */
    /** running: The Activity is running. */
    /** pause: The Activity is paused. */
    /** canceling: The Activity has been canceled and waiting for potential adopters to take over as the parent. */
    /** canceled: The Activity is canceled. */
    /** stopping: The Activity is in the process of stopping. */
    /** stopped: The Activity has been stopped. */
    /** complete: The Activity is complete and has stopped. */
    state?: string;
    /** The flag that indicates whether Activity has focused or not. */
    focused?: boolean;
}

export interface ActivityManagerAdoptSubscription {
    /** The flag that indicates the success/failure of the request. */
    /** true: Success */
    /** false: Failure */
    returnValue: boolean;
    /** Created Activity ID. You could get a subscription when there are status updates. */
    activityId: number;
    /** What this activity did. The Activity Manager generates either a start event if the requirements are met, and then return this result to subscribes. It is the same when the activity is canceled or stopped as "cancel" or "stop." */
    /** Example: */
    /** { */
    /** "activityId": 10813, */
    /** "event": "start", */
    /** "returnValue": true */
    /** } */
    event: string;
    /** Acitivity object. */
    $activity: ActivityManagerActivity;
}
