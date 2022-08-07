/** ACG: systemsettings.queryDescriptionThe query method returns operating system information. This method may be used to display the operating system version, API version, build name and date and so on.This method is available for both internal and third-party applications.Parameters */
export interface SystemserviceOsInfoQueryParameters {
    /** List of requested parameters. If not specified, all available parameters will be returned.The available parameters are those listed under the Name column under the Return section below (with the exception of errorCode and errorText). */
    parameters?: string[];
}

/** ACG: systemsettings.queryDescriptionThe query method returns operating system information. This method may be used to display the operating system version, API version, build name and date and so on.This method is available for both internal and third-party applications.ParametersNameRequiredTypeDescriptionparametersOptionalString arrayList of requested parameters. If not specified, all available parameters will be returned.The available parameters are those listed under the Name column under the Return section below (with the exception of errorCode and errorText).Call Returns */
export interface SystemserviceOsInfoQueryCallReturn {
    /** Core OS kernel version info */
    core_os_kernel_version?: string;
    /** Core OS name */
    core_os_name?: string;
    /** Core OS release info */
    core_os_release?: string;
    /** Core OS release codename */
    core_os_release_codename?: string;
    /** The UTC timestamp reflecting when the current image was built. The string is in the format "YYYYMMDDhhmmss". */
    webos_build_datetime?: string;
    /** webOS build ID */
    webos_build_id?: string;
    /** webOS imagename */
    webos_imagename?: string;
    /** webOS name */
    webos_name?: string;
    /** webOS prerelease info */
    webos_prerelease?: string;
    /** webOS release info */
    webos_release?: string;
    /** webOS release codename */
    webos_release_codename?: string;
    /** webOS manufacting version */
    webos_manufacturing_version?: string;
    /** Encryption key type */
    encryption_key_type?: string;
    /** Indicates the status of operation. Possible values are:true - Indicates that the operation was successful.false - Indicates that the operation failed. Check the "errorCode" and "errorText" fields for details */
    returnValue: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}
