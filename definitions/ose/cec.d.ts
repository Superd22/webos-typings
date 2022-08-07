/** luna://com.webos.service.cec */
interface Cec {
}

/** ACG: cec.queryDescriptionScans the CEC bus and provides information of the connected HDMI CEC devices.Parameters */
export interface CecScanParameters {
    /** Input HDMI-CEC adapter.Default: cec0 */
    adapter?: string;
}

/** Contains information about connected HDMI CEC devices. */
export interface CecDevices {
    /** Indicates HDMI CEC device name. */
    name: string;
    /** Physical address of HDMI CEC device that identifies the device uniquely on CEC bus. */
    address: string;
    /** Indicates whether HDMI CEC device is currently active source or not. */
    activeSource: string;
    /** Vendor name of connected HDMI CEC device. */
    vendor: string;
    /** On-screen display (OSD) name of HDMI CEC device. */
    osd: string;
    /** CEC version of connected HDMI CEC device. */
    cecVersion: string;
    /** Power status of connected HDMI CEC device. */
    powerStatus: string;
    /** Language of HDMI CEC device. */
    language: string;
}

/** ACG: cec.queryDescriptionScans the CEC bus and provides information of the connected HDMI CEC devices.ParametersNameRequiredTypeDescriptionadapterOptionalStringInput HDMI-CEC adapter.Default: cec0Call Returns */
export interface CecScanCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Operation is successful.false: Operation has failed. Check the 'errorCode' and 'errorText' fields. */
    returnValue: boolean;
    /** Information about connected HDMI CEC devices. */
    devices: CecDevices[];
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The reason for the failure of the operation. See the 'API Error Codes Reference' section for details. */
    errorText?: string;
}

/** Contains list of arguments passed to command. */
export interface CecArgs {
    /** Indicates command argument. Below are supported "arg":Available commandnameargvaluereport-power-statuspwr-stateonstandbyreport-audio-statusaud-mute-statusoffonset-volumevolumeupdownosd-displayosdstringactiveset-active NAone-touch-playactive-source NAsystem-informationvendor-idversionnamelanguagepower-stateis-active NAvendor-commandspayloadraw data in hex (eg:20:36) */
    argreport-power-statusreport-audio-statusset-volumeosd-displayactiveone-touch-playsystem-informationvendor-commands?: stringonstandbyoffonupdownstringnananarawdatainhex;
    /** */
    ?;
    /** */
    report-power-status?: onstandby;
    /** */
    report-audio-status?: offon;
    /** */
    set-volume?: updown;
    /** */
    osd-display?: string;
    /** */
    active?: na;
    /** */
    one-touch-play?: na;
    /** */
    system-information?: na;
    /** */
    vendor-commands?: rawdatainhex;
    /** Value of command argument. */
    value?: string;

/** Command to execute on destination HDMI CEC device. */
export interface CecCommand {
    /** Indicates command to be executed.Possible values are:report-power-status: Control power of remote device.report-audio-status: Audio Status.set-volume: Control volume of device.osd-display: Display OSD string on device.active: Make the device as active source.one-touch-play: One Touch Play.system-information: Checks following information:Vendor ID of deviceCEC VersionOSD NameMenu LanguageCheck if device is active sourcevendor-commands: Vendor commands. */
    name: string;
    /** An array of objects that contains list of arguments passed to command. */
    args: CecArgs;
}

/** ACG: cec.operationDescriptionSends the input command to destination HDMI CEC devices connected on CEC bus.Parameters */
export interface CecSendCommandParameters {
    /** HDMI CEC device from which the command gets executed.Default: cec0 */
    adapter?: string;
    /** Physical or logical address of destination HDMI CEC device. */
    destAddress: string;
    /** Reply timeout, in milliseconds.Default: 1000 */
    timeout?: number;
    /** Command to execute on destination CEC device. */
    command: CecCommand;
}

/** ACG: cec.operationDescriptionSends the input command to destination HDMI CEC devices connected on CEC bus.ParametersNameRequiredTypeDescriptionadapterOptionalStringHDMI CEC device from which the command gets executed.Default: cec0destAddressRequiredStringPhysical or logical address of destination HDMI CEC device.timeoutOptionalNumberReply timeout, in milliseconds.Default: 1000commandRequiredObject: commandCommand to execute on destination CEC device.Call Returns */
export interface CecSendCommandCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Operation is successful.false: Operation has failed. Check the 'errorCode' and 'errorText' fields. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The reason for the failure of the operation. See the 'API Error Codes Reference' section for details. */
    errorText?: string;
    /** Response payload provides the array of return values for the requested parameters in key value form. Check examples below.Note: This parameter is only returned in cases where the arg value is not provided (this means the command is requesting for information). */
    payload?: any;
}

/** ACG: cec.queryDescriptionGets the value of the specified input configuration.Parameters */
export interface CecGetConfigParameters {
    /** Input HDMI-CEC adapter.Default: cec0 */
    adapter?: string;
    /** Key name to get configuration value.Possible values are:vendorId: Vendor ID of device.version: CEC Version of the device.osd: OSD name of the device.language: Menu language.powerState: Power status of the device.physicalAddress: Physical address of the device.logicalAddress: Logical address of the device.deviceType: Type of device (TV, recorder, playback). */
    key: string;
}

/** ACG: cec.queryDescriptionGets the value of the specified input configuration.ParametersNameRequiredTypeDescriptionadapterOptionalStringInput HDMI-CEC adapter.Default: cec0keyRequiredStringKey name to get configuration value.Possible values are:vendorId: Vendor ID of device.version: CEC Version of the device.osd: OSD name of the device.language: Menu language.powerState: Power status of the device.physicalAddress: Physical address of the device.logicalAddress: Logical address of the device.deviceType: Type of device (TV, recorder, playback).Call Returns */
export interface CecGetConfigCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Operation is successful.false: Operation has failed. Check the 'errorCode' and 'errorText' fields. */
    returnValue: boolean;
    /** Key name of input configuration. */
    key: string;
    /** Value of input configuration. */
    value: string;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The reason for the failure of the operation. See the 'API Error Codes Reference' section for details. */
    errorText?: string;
}

/** ACG: cec.operationDescriptionSets the input configuration.Parameters */
export interface CecSetConfigParameters {
    /** Input CEC adapter.Default: cec0 */
    adapter?: string;
    /** Key name to set configuration value.Possible values are:vendorId: Vendor ID of device.version: CEC Version of the device.osd: OSD name of the device.language: Menu language.powerState: Power status of the device.physicalAddress: Physical address of the device.logicalAddress: Logical address of the device.deviceType: Type of device (TV, recorder, playback). */
    key: string;
    /** Configuration value to be set for the specified key. */
    value: string;
}

/** ACG: cec.operationDescriptionSets the input configuration.ParametersNameRequiredTypeDescriptionadapterOptionalStringInput CEC adapter.Default: cec0keyRequiredStringKey name to set configuration value.Possible values are:vendorId: Vendor ID of device.version: CEC Version of the device.osd: OSD name of the device.language: Menu language.powerState: Power status of the device.physicalAddress: Physical address of the device.logicalAddress: Logical address of the device.deviceType: Type of device (TV, recorder, playback).valueRequiredStringConfiguration value to be set for the specified key.Call Returns */
export interface CecSetConfigCallReturn {
    /** Indicates the status of the operation.Possible values are:true: Operation is successful.false: Operation has failed. Check the 'errorCode' and 'errorText' fields. */
    returnValue: boolean;
    /** The error code for the failed operation. */
    errorCode?: number;
    /** The reason for the failure of the operation. See the 'API Error Codes Reference' section for details. */
    errorText?: string;
}

}
