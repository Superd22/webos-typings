export interface SystemserviceOsInfoQueryParameters {
    parameters?: string[];
}

export interface SystemserviceOsInfoQueryCallReturn {
    core_os_kernel_version?: string;
    core_os_name?: string;
    core_os_release?: string;
    core_os_release_codename?: string;
    webos_build_datetime?: string;
    webos_build_id?: string;
    webos_imagename?: string;
    webos_name?: string;
    webos_prerelease?: string;
    webos_release?: string;
    webos_release_codename?: string;
    webos_manufacturing_version?: string;
    encryption_key_type?: string;
    returnValue: boolean;
    errorText?: string;
}
