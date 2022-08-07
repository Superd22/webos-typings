/** luna://com.webos.service.alarm */
interface Alarm {
}

/** ACG: alarm.operationDescriptionDeletes an existing alarm. Apps or daemons can identify their alarm to be deleted by specifying its key.Parameters */
export interface AlarmClearParameters {
    /** key of the alarm that you wish to delete. This is the same key that was specified when the alarm was created the set method. */
    key: string;
}

/** ACG: alarm.operationDescriptionDeletes an existing alarm. Apps or daemons can identify their alarm to be deleted by specifying its key.ParametersNameRequiredTypeDescriptionkeyRequiredStringkey of the alarm that you wish to delete. This is the same key that was specified when the alarm was created the set method.Call Returns */
export interface AlarmClearCallReturn {
    /** The same unique identifier is returned if the alarm was deleted successfully. */
    key?: string;
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorText" field for details */
    returnValue: boolean;
    /** Indicates the reason for the failure of the operation. See the Error Codes Reference and API Error Codes Reference of this method for more details. */
    errorText?: string;
}
