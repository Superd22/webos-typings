/** luna://com.webos.service.camera */
interface Camera {
}

export interface CameraGetInfoParameters {
    uri: string;
}

export enum CameraGetInfoError {
    CAN_NOT_CLOSE = "1",
    CAN_NOT_OPEN = "2",
    CAN_NOT_SET = "3",
    CAN_NOT_START = "4",
    CAN_NOT_STOP = "5",
    THE_CAMERA_DEVICE_IS_ALREADY_CLOSED = "6",
    THE_CAMERA_DEVICE_IS_ALREADY_OPENED = "7",
    THE_CAMERA_DEVICE_IS_ALREADY_STARTED = "8",
    THE_CAMERA_DEVICE_IS_ALREADY_STOPPED = "9",
    THE_CAMERA_DEVICE_IS_BEING_UPDATED = "10",
    THE_CAMERA_DEVICE_IS_BUSY = "11",
    THE_CAMERA_DEVICE_IS_NOT_OPENED = "12",
    THE_CAMERA_DEVICE_IS_NOT_STARTED = "13",
    THERE_IS_NO_DEVICE = "14",
    NO_RESPONSE_FROM_THE_DEVICE = "15",
    PARSING_ERROR = "16",
    OUT_OF_MEMORY = "17",
    OUT_OF_PARAMETER_RANGE = "18",
    PARAMETER_IS_MISSING = "19",
    SERVICE_IS_NOT_READY = "20",
    SOME_PARAMETERS_ARE_NOT_SET = "21",
    TOO_MANY_REQUESTS = "22",
    REQUEST_TIMEOUT = "23",
    UNKNOWN_SERVICE = "24",
    UNSUPPORTED_DEVICE = "25",
    UNSUPPORTED_FORMAT = "26",
    UNSUPPORTED_SAMPLING_RATE = "27",
    UNSUPPORTED_VIDEO_SIZE = "28",
    CAMERA_FIRMWARE_IS_BEING_UPDATED = "29",
    WRONG_DEVICE_NUMBER = "30",
    SESSION_ID_ERROR = "31",
    WRONG_PARAMETER = "32",
    WRONG_TYPE = "33",
    ALREADY_ACQUIRED = "34",
    UNKNOWN_ERROR = "35",
    FAIL_TO_SPECIAL_EFFECT = "36",
    FAIL_TO_PHOTO_VIEW_EFFECT = "37",
    FAIL_TO_OPEN_FILE = "38",
    FAIL_TO_REMOVE_THE_FILE = "39",
    FAIL_TO_CREATE_THE_DIRECTORY = "40",
    LACK_OF_STORAGE = "41",
    ALREADY_EXISTS_FILE = "42"
}

export interface CameraInfo {
    name: string;
    type: string;
    builtin: boolean;
    details: any;
}

export interface CameraGetInfoCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    info?: CameraInfo;
}
