/** luna://com.webos.settingsservice */
interface SettingsService {
}

export interface SettingsServiceGetSystemSettingsParameters {
    /** Category of settings. */
    /** If the specified keys (key) has a category, you must specify this property. */
    category?: string;
    /** Keys for retrieving setting values. One of the keys and key property should be specified. */
    keys?: stringarray;
    /** A key for retrieving the setting value. One of the keys and key property should be specified. */
    key?: string;
    /** The flag that decides whether to subscribe or not. If you enable the subscription, you get an event when the value of the specified settings is changed. */
    /** true: Subscribe. */
    /** false: Do not subscribe. Call the method only once. (Default) */
    subscribe?: boolean;
}

export enum SettingsServiceGetSystemSettingsError {
    IF_THE_REQUESTED_KEY_IS_UNDEFINED_API_RETURNS_AN_ERROR = "ThereisnomatchedresultfromDB."
}

export interface SettingsServiceSettings {
    /** Object that holds locale setting values. */
    localeInfo?: any;
    /** Service country code (ISO 3166-1 alpha-2). */
    smartServicecountryCode2?: string;
    /** Country code (ISO 3166-1 alpha-3). */
    country?: string;
    /** Audio guidance setting value. */
    /** "on": The audio guidance is enabled. */
    /** "off": The audio guidance is disabled. */
    audioGuidance?: string;
    /** Closed caption setting value. */
    /** "on": The closed caption is enabled. */
    /** "off": The closed caption is disabled. */
    captionEnable?: string;
}

export interface SettingsServiceGetSystemSettingsCallReturn {
    /** The flag that indicates success/failure of the request. */
    /** true: Success */
    /** false: Failure */
    returnValue: boolean;
    /** errorCode contains the error code if the method fails. The method will return errorCode only if it fails. */
    /** See the Error Codes Reference of this method for more details. */
    errorCode?: string;
    /** errorText contains the error text if the method fails. The method will return errorText only if it fails. */
    /** See the Error Codes Reference of this method for more details. */
    errorText?: string;
    /** Category string of the result setting values. It is the same as the category parameter in the method call. */
    category?: string;
    /** Method name that clarifies which method is called in subscription messages. */
    method: string;
    /** Objects that hold result setting values. */
    settings: SettingsServiceSettings;
    /** The flag that decides whether to subscribe or not. */
    /** true: Subscribe */
    /** false: Do not subscribe. Call the method only once. (Default) */
    subscribed?: boolean;
}

export interface SettingsServiceGetSystemSettingsSubscription {
    /** The flag that indicates success/failure of the request. */
    /** true: Success */
    /** false: Failure */
    returnValue: boolean;
    /** Category string of the result setting values. It is the same as the category parameter in the method call. */
    category?: string;
    /** Method name that is used for clarifying which method is called in subscription messages. */
    method: string;
    /** Objects that hold the result setting values. */
    settings: SettingsServiceSettings;
}
