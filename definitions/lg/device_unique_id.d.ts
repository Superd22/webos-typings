/** luna://com.webos.service.sm */
interface DeviceUniqueID {
}

export interface DeviceUniqueIDDeviceidGetIDsParameters {
    /** Array of id types. Currently, "LGUDID" is allowed. */
    /** Example: ["LGUDID"] */
    idType: stringarray;
}

export interface DeviceUniqueIDDeviceidGetIDsCallReturn {
    /** Array of device ID data (idType and idValue) */
    idList: objectarray;
}
