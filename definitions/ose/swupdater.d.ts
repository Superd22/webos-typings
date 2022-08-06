/** luna://com.webos.service.swupdater */
interface Swupdater {
}

export interface SwupdaterGetStatusParameters {
    subscribe: boolean;
}

export interface SwupdaterArtifact {
    size: number;
    total: number;
    filename: string;
}

export interface SwupdaterSoftwareModule {
    type: string;
    name: string;
    version?: string;
    artifacts: SwupdaterArtifact[];
}

export interface SwupdaterGetStatusCallReturn {
    subscribed: boolean;
    status: string;
    softwareModules?: SwupdaterSoftwareModule[];
    id?: string;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface SwupdaterGetStatusSubscription {
    subscribed: boolean;
    status: string;
    softwareModules?: SwupdaterSoftwareModule[];
    id?: string;
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface SwupdaterCancelDownloadCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface SwupdaterPauseDownloadCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface SwupdaterResumeDownloadCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface SwupdaterStartInstallCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface SwupdaterCancelInstallCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}
