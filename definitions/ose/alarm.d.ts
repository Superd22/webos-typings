/** luna://com.webos.service.alarm */
interface Alarm {
}

export interface AlarmClearParameters {
    key: string;
}

export interface AlarmClearCallReturn {
    key?: string;
    returnValue: boolean;
    errorText?: string;
}
