export interface SystemserviceDeviceInfoQueryParameters {
    parameters?: string[];
}

export interface SystemserviceDeviceInfoQueryCallReturn {
    battery_challange?: string;
    keyboard_type?: string;
    board_type?: string;
    product_id?: string;
    serial_number?: string;
    installer?: string;
    storage_size?: string;
    modem_present?: string;
    hardware_id?: string;
    ram_size?: string;
    hardware_revision?: string;
    wired_addr?: string;
    wifi_addr?: string;
    returnValue: boolean;
    last_reset_type?: string;
    radio_type?: string;
    storage_free?: string;
    battery_response?: string;
    device_name?: string;
    nduid?: string;
    bt_addr?: string;
    device_id?: string;
    errorCode?: number;
    errorText?: string;
}
