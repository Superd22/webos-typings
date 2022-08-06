/** luna://com.webos.settingsservice */
interface SettingsService {
}

export interface SettingsServiceGetSystemSettingsParameters {
    category?: string;
    keys?: stringarray;
    key?: string;
    subscribe?: boolean;
}

export enum SettingsServiceGetSystemSettingsError {
    IF_THE_REQUESTED_KEY_IS_UNDEFINED_API_RETURNS_AN_ERROR = "ThereisnomatchedresultfromDB."
}

export interface SettingsServiceSettings {
    localeInfo?: any;
    smartServicecountryCode2?: string;
    country?: string;
    audioGuidance?: string;
    captionEnable?: string;
}

export interface SettingsServiceGetSystemSettingsCallReturn {
    returnValue: boolean;
    errorCode?: string;
    errorText?: string;
    category?: string;
    method: string;
    settings: SettingsServiceSettings;
    subscribed?: boolean;
}

export interface SettingsServiceGetSystemSettingsSubscription {
    returnValue: boolean;
    category?: string;
    method: string;
    settings: SettingsServiceSettings;
}
