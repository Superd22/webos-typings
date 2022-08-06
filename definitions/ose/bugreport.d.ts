/** luna://com.webos.service.bugreport */
interface Bugreport {
}

export interface BugreportAccount {
    username: string;
    password: string;
}

export interface BugreportSetConfigParameters {
    account?: BugreportAccount;
}

export interface BugreportSetConfigCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
}

export interface BugreportCreateBugParameters {
    summary: string;
    description?: string;
    priority?: string;
    reproducibility?: string;
    screenshots?: string[];
}

export interface BugreportCreateBugCallReturn {
    returnValue: boolean;
    errorCode?: number;
    errorText?: string;
    key?: string;
}
