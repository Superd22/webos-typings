/** ACG: systemsettings.managementDescriptionThe preBackup method creates dump files containing platform-specific environment settings. Call this method before executing the backup procedure in order to save these settings.The dump files are saved into the directory specified by the temp_dir parameter or '${localstatedir}/preferences'.The list of the platform-specific settings that are saved in the dump file is specified in the sysservice-backupkeys.json file. Below is an example of this file:[    "useNetworkTime",    "useNetworkTimeZone",    "timeZone",    "timeChangeLaunch",    "showcontactmatch",    "x_webos_virtualkeyboard_prefs"]If any of the method parameters is not specified or specified incorrectly, the method will use the default values.This method is internal, only system applications can use it. It is not available to third-party applications.Parameters */
export interface SystemserviceBackupPreBackupParameters {
    /** This is used primarily for mojodb, backup service will handle other incremental backups. */
    incrementalKey?: any;
    /** The allowed size of upload. It is currently set at 10MB. */
    maxTempBytes?: number;
    /** Directory to store temporarily generated files. */
    tempDir?: string;
}

/** ACG: systemsettings.managementDescriptionThe preBackup method creates dump files containing platform-specific environment settings. Call this method before executing the backup procedure in order to save these settings.The dump files are saved into the directory specified by the temp_dir parameter or '${localstatedir}/preferences'.The list of the platform-specific settings that are saved in the dump file is specified in the sysservice-backupkeys.json file. Below is an example of this file:[    "useNetworkTime",    "useNetworkTimeZone",    "timeZone",    "timeChangeLaunch",    "showcontactmatch",    "x_webos_virtualkeyboard_prefs"]If any of the method parameters is not specified or specified incorrectly, the method will use the default values.This method is internal, only system applications can use it. It is not available to third-party applications.ParametersNameRequiredTypeDescriptionincrementalKeyOptionalobjectThis is used primarily for mojodb, backup service will handle other incremental backups.maxTempBytesOptionalnumberThe allowed size of upload. It is currently set at 10MB.tempDirOptionalstringDirectory to store temporarily generated files.Call Returns */
export interface SystemserviceBackupPreBackupCallReturn {
    /** Describes the backup. */
    description: string;
    /** Version of the backup. */
    version: string;
    /** List of files included in the backup. */
    files: string[];
}
