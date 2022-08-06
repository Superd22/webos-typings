/** luna://com.palm.activitymanager */
interface ActivityManager {
}

export interface ActivityManagerAdoptParameters {
    activityId: number;
    activityName: string;
    wait: boolean;
    subscribe: boolean;
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
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    adopted?: boolean;
}

export interface ActivityManagerType {
    foreground?: boolean;
    background?: boolean;
    immediate?: boolean;
    priority?: string;
    userInitiated?: boolean;
    persist?: boolean;
    explicit?: boolean;
    continuous?: boolean;
    power?: boolean;
    powerDebounce?: boolean;
}

export interface ActivityManagerSchedule {
    precise: boolean;
    start: string;
    interval?: string;
    skip?: boolean;
    local?: boolean;
    end?: string;
    relative?: boolean;
    lastFinished?: boolean;
}

export interface ActivityManagerTrigger {
    method: string;
    params?: any;
    where?: any;
    compare?: any;
    key?: string;
}

export interface ActivityManagerCallback {
    method: string;
    params?: any;
}

export interface ActivityManagerParent {
    appId?: string;
    serviceId?: string;
}

export interface ActivityManagerActivity {
    name: string;
    description: string;
    type: ActivityManagerType;
    schedule?: ActivityManagerSchedule;
    trigger?: ActivityManagerTrigger;
    callback?: ActivityManagerCallback;
    metadata?: any;
    activityId?: number;
    creator?: any;
    parent?: ActivityManagerParent;
    adopters?: objectarray;
    state?: string;
    focused?: boolean;
}

export interface ActivityManagerAdoptSubscription {
    returnValue: boolean;
    activityId: number;
    event: string;
    $activity: ActivityManagerActivity;
}
