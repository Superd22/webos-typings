/** luna://com.webos.service.settings */
interface Settings {
}

export interface SettingsDimension {
    input?: string;
    _3dPattern?: string;
    _3dStatus?: string;
    pictureMode?: string;
    _3dMode?: string;
}

export interface SettingsDeleteSystemSettingsParameters {
    category?: string;
    dimension?: SettingsDimension;
    keys: string[];
    app_id?: string;
}

export interface SettingsDeleteSystemSettingsCallReturn {
    method: string;
    returnValue: boolean;
    errorText?: string;
}

export interface SettingsGetCurrentSettingsParameters {
    category?: string;
    dimension?: SettingsDimension;
    keys: [];
    subscribe?: boolean;
}

export interface SettingsGetCurrentSettingsCallReturn {
    settings: any;
    category: string;
    dimension: SettingsDimension;
    method: string;
    app_id: string;
    subscribed?: boolean;
    returnValue: boolean;
    errorText?: string;
}

export interface SettingsGetCurrentSettingsSubscription {
    settings: any;
    category: string;
    dimension?: SettingsDimension;
    method: string;
    app_id: string;
    returnValue: boolean;
    errorText?: string;
}

export interface SettingsGetSystemSettingDescParameters {
    category?: string;
    keys?: [];
    key?: string;
    app_id?: string;
    current_app?: boolean;
    subscribe?: boolean;
}

export interface SettingsUi {
    active: boolean;
    visible: boolean;
    displayName: string;
    widget: string;
}

export interface SettingsArrayExt {
    active: boolean;
    visible: boolean;
    value: string;
}

export interface SettingsRange {
    interval: number;
    min: number;
    max: number;
}

export interface SettingsValues {
    array?: string[];
    arrayExt?: SettingsArrayExt[];
    range?: SettingsRange;
    callback?: any;
    date?: any;
    file?: string;
}

export interface SettingsGetSystemSettingDescCallReturn {
    category: string;
    dbtype: string;
    dimension: SettingsDimension;
    key: string;
    valueCheck: boolean;
    volatile: boolean;
    ui: SettingsUi;
    vtype: string;
    values: SettingsValues;
    app_id?: string;
    returnValue: boolean;
    errorText?: string;
    subscribed?: boolean;
}

export interface SettingsGetSystemSettingDescSubscription {
    category: string;
    dbtype: string;
    dimension: SettingsDimension;
    key: string;
    valueCheck: boolean;
    volatile: boolean;
    ui: SettingsUi;
    vtype: string;
    values: SettingsValues;
    errorText?: string;
    returnValue: boolean;
}

export interface SettingsGetSystemSettingFactoryValueParameters {
    category?: string;
    dimension?: SettingsDimension;
    keys?: string[];
    key?: string;
    app_id?: string;
}

export interface SettingsGetSystemSettingFactoryValueCallReturn {
    returnValue: boolean;
    errorText?: string;
    method: string;
    dimension: SettingsDimension;
    category: string;
    settings: any;
}

export interface SettingsGetSystemSettingsParameters {
    category?: string;
    dimension?: SettingsDimension;
    keys?: [];
    key?: string;
    app_id?: string;
    current_app?: boolean;
    subscribe?: boolean;
}

export interface SettingsGetSystemSettingsCallReturn {
    settings: any;
    category: string;
    dimension: SettingsDimension;
    method: string;
    app_id?: string;
    subscribed?: boolean;
    returnValue: boolean;
    errorText?: string;
}

export interface SettingsGetSystemSettingsSubscription {
    settings: any;
    category: string;
    dimension: SettingsDimension;
    method: string;
    app_id?: string;
    returnValue?: string;
    errorText?: string;
}

export interface SettingsGetSystemSettingValuesParameters {
    category?: string;
    key: string;
    app_id?: string;
    subscribe?: boolean;
}

export interface SettingsGetSystemSettingValuesCallReturn {
    method: string;
    vtype: string;
    values: SettingsValues;
    returnValue: boolean;
    errorText?: string;
    subscribed: boolean;
}

export interface SettingsGetSystemSettingValuesSubscription {
    method: string;
    vtype: string;
    values: SettingsValues;
    returnValue: boolean;
    subscribed: boolean;
}

export interface SettingsSubscription {
    message: any;
    sender: string;
    method: string;
}

export interface SettingsInternalGetCurrentSubscriptionsCallReturn {
    returnValue: boolean;
    subscriptions: SettingsSubscription[];
    errorText?: string;
}

export interface SettingsInternalInstrumentParameters {
    control: string;
    params?: any;
}

export interface SettingsInternalInstrumentCallReturn {
    returnValue: boolean;
    instrumentStatus?: string;
    errorText?: string;
}

export interface SettingsResetSystemSettingDescParameters {
    category?: string;
    keys: [];
    app_id?: string;
}

export interface SettingsResetSystemSettingDescCallReturn {
    method: string;
    returnValue: boolean;
    errorText?: string;
}

export interface SettingsResetSystemSettingsParameters {
    category?: string;
    dimension?: SettingsDimension;
    keys: [];
    app_id?: string;
    resetAll?: boolean;
}

export interface SettingsResetSystemSettingsCallReturn {
    method: string;
    returnValue: boolean;
    errorText?: string;
}

export interface SettingsSetSystemSettingDescParameters {
    category?: string;
    key: string;
    app_id?: string;
    ui?: SettingsUi;
    vtype?: string;
    values?: SettingsValues;
    volatile?: boolean;
    valueCheck?: boolean;
    notifySelf?: boolean;
    ext?: any;
}

export interface SettingsSetSystemSettingDescCallReturn {
    method: string;
    returnValue: boolean;
    errorText?: string;
}

export interface SettingsSetSystemSettingFactoryDescParameters {
    category?: string;
    key: string;
    app_id?: string;
    ui?: SettingsUi[];
    vtype?: string;
    values?: SettingsValues;
    volatile?: boolean;
    valueCheck?: boolean;
    notifySelf?: boolean;
    ext?: any;
}

export interface SettingsSetSystemSettingFactoryDescCallReturn {
    method: string;
    returnValue: boolean;
    errorText?: string;
}

export interface SettingsSetSystemSettingFactoryValueParameters {
    category?: string;
    app_id?: string;
    dimension?: SettingsDimension;
    settings: any;
    setAll?: boolean;
    country?: string;
}

export interface SettingsSetSystemSettingFactoryValueCallReturn {
    method: string;
    returnValue: boolean;
    errorText?: string;
}

export interface SettingsSetSystemSettingsParameters {
    category?: string;
    dimension?: SettingsDimension;
    settings: any;
    app_id?: string;
    notifySelf?: boolean;
    current_app?: boolean;
    setAll?: boolean;
    notify?: boolean;
    store?: boolean;
}

export interface SettingsSetSystemSettingsCallReturn {
    method: string;
    returnValue: boolean;
    errorText?: string;
}

export interface SettingsSetSystemSettingValuesParameters {
    category?: string;
    key: string;
    values: SettingsValues;
    vtype: string;
    op: string;
}

export interface SettingsSetSystemSettingValuesCallReturn {
    method?: string;
    returnValue: boolean;
    errorText?: string;
}
