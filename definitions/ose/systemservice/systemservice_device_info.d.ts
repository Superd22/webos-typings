/** ACG: systemsettings.queryDescriptionThe query method to get the device system information such as product Id, system number, hardware information, Wi-FI address, battery status and others. Please refer to the return values table below for a complete list of the system parameters.Note: This method must not be used by 3rd-party applications.Parameters */
export interface SystemserviceDeviceInfoQueryParameters {
    /** List of requested parameters. If not specified, all available parameters wiil be returned.Accepted parameters:battery_challangekeyboard_typeboard_typeproduct_idserial_numberinstallerstorage_sizemodem_presenthardware_idram_sizehardware_revisionwired_addrwifi_addrlast_reset_typeradio_typestorage_freebattery_responsedevice_namenduidbt_addrdevice_id */
    parameters?: string[];
}

/** ACG: systemsettings.queryDescriptionThe query method to get the device system information such as product Id, system number, hardware information, Wi-FI address, battery status and others. Please refer to the return values table below for a complete list of the system parameters.Note: This method must not be used by 3rd-party applications.ParametersNameRequiredTypeDescriptionparametersOptionalString arrayList of requested parameters. If not specified, all available parameters wiil be returned.Accepted parameters:battery_challangekeyboard_typeboard_typeproduct_idserial_numberinstallerstorage_sizemodem_presenthardware_idram_sizehardware_revisionwired_addrwifi_addrlast_reset_typeradio_typestorage_freebattery_responsedevice_namenduidbt_addrdevice_idCall Returns */
export interface SystemserviceDeviceInfoQueryCallReturn {
    /** Battery challenge.Currently, the "not supported" value is always returned.Note: There is a typo in the parameter name. Use the spelling as given in this table. */
    battery_challange?: string;
    /** Refers to the keyboard built into the device. Example: virtual */
    keyboard_type?: string;
    /** Board type. */
    board_type?: string;
    /** Product ID. */
    product_id?: string;
    /** Serial number. */
    serial_number?: string;
    /** Tool used to install the image.Currently, the "not supported" value is always returned. */
    installer?: string;
    /** Storage size. */
    storage_size?: string;
    /** Modem availability.Note: This parameter is "not supported", even though the response shows this value as "N" to indicate modem is not present. */
    modem_present?: string;
    /** Hardware ID. */
    hardware_id?: string;
    /** RAM size. */
    ram_size?: string;
    /** Hardware revision. */
    hardware_revision?: string;
    /** Wired/Ethernet MAC address. */
    wired_addr?: string;
    /** WiFi MAC address. */
    wifi_addr?: string;
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** Reason code for last reboot (may come from /proc/cmdline).Currently, the "not supported" value is always returned. */
    last_reset_type?: string;
    /** Internal ID code for the radio type.Currently, the "not supported" value is always returned. */
    radio_type?: string;
    /** Free storage size.Currently, the "not supported" value is always returned. */
    storage_free?: string;
    /** Battery response.Currently, the "not supported" value is always returned. */
    battery_response?: string;
    /** Device name. */
    device_name?: string;
    /** NDUID. */
    nduid?: string;
    /** Bluetooth address. */
    bt_addr?: string;
    /** ID for uniquely identifying the device */
    device_id?: string;
    /** The error code for the failed operation.Note:If the method fails, the errorText is always returned but the errorCode is returned only for specific errors.. */
    errorCode?: number;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}
