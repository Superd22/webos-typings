/** luna://com.webos.service.cec */
interface Cec {
}

export interface CecScanParameters {
    adapter?: string;
}

export interface CecDevices {
    name: string;
    address: string;
    activeSource: string;
    vendor: string;
    osd: string;
    cecVersion: string;
    powerStatus: string;
    language: string;
}

export interface CecScanCallReturn {
    returnValue: boolean;
    devices: CecDevices[];
    errorCode?: number;
    errorText?: string;
}

export interface CecArgs {
    argreport-power-statusreport-audio-statusset-volumeosd-displayactiveone-touch-playsystem-informationvendor-commands?: stringonstandbyoffonupdownstringnananarawdatainhex;
    ?;
    report-power-status?: onstandby;
    report-audio-status?: offon;
    set-volume?: updown;
    osd-display?: string;
    active?: na;
    one-touch-play?: na;
    system-information?: na;
    vendor-commands?: rawdatainhex;
    value?: string;

export interface CecCommand {
    name: string;
    args: CecArgs;
}

export interface CecSendCommandParameters {
    adapter?: string;
    destAddress: string;
    timeout?: number;
    command: CecCommand;
}

export interface CecSendCommandCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    payload?: any;
}

export interface CecGetConfigParameters {
    adapter?: string;
    key: string;
}

export interface CecGetConfigCallReturn {
    returnValue: boolean;
    key: string;
    value: string;
    errorCode?: number;
    errorText?: string;
}

export interface CecSetConfigParameters {
    adapter?: string;
    key: string;
    value: string;
}

export interface CecSetConfigCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

}
