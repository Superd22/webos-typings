/** luna://com.webos.service.settings */
interface Settings {
}

/** Settings Service can set many different values under the same setting according to dimension. */
export interface SettingsDimension {
    /** You can use the following values:av1, av2, pictest, comp1, comp2, comp3,  rgb, hdmi1, hdmi2, hdmi3, hdmi4,  hdmi1_pc, hdmi2_pc, hdmi3_pc, hdmi4_pc, movie, photo, default, scart */
    input?: string;
    /** You can use the following values:2dto3d, 3d */
    _3dPattern?: string;
    /** You can use the following values:2d, 3d */
    _3dStatus?: string;
    /** You can use the following values:vivid, normal, eco, cinema, game, sports, expert1, expert2 */
    pictureMode?: string;
    /** You can use the following values:standard, sports, cinema, extreme, manual, auto */
    _3dMode?: string;
}

/** ACG: settings.managementDescriptionDeletes settings item(s). Factory default value is also deleted.RemarksIn case there is a subscriber for the deleted item, error text will be sent.ExceptionErrors occur when using undefined dimension.Parameters */
export interface SettingsDeleteSystemSettingsParameters {
    /** Category of settings */
    category?: string;
    /** Dimension information. It is used when setting by input, video mode, 3D mode. */
    dimension?: SettingsDimension;
    /** Keys to be deleted */
    keys: string[];
    /** App ID. In case of app specific setting, app ID should be specified. */
    app_id?: string;
}

/** ACG: settings.managementDescriptionDeletes settings item(s). Factory default value is also deleted.RemarksIn case there is a subscriber for the deleted item, error text will be sent.ExceptionErrors occur when using undefined dimension.ParametersNameRequiredTypeDescriptioncategoryOptionalstringCategory of settingsdimensionOptionalObject: dimensionDimension information. It is used when setting by input, video mode, 3D mode.keysRequiredString arrayKeys to be deletedapp_idOptionalstringApp ID. In case of app specific setting, app ID should be specified.Call Returns */
export interface SettingsDeleteSystemSettingsCallReturn {
    /** Method name. It is used to clarify which method is called from the many responses returned from batch. */
    method: string;
    /** Indicates whether the execution succeeded.true: Successfalse: Failure */
    returnValue: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: settings.queryDescriptionLooks up the settings item, and returns the settings for the current foreground app only unlike the setSystemSettings method.RemarksEven though the foreground app is converted, the subscription message for the changed app settings will not be sent.ExceptionErrors occur when using undefined dimensions.Parameters */
export interface SettingsGetCurrentSettingsParameters {
    /** Category of settings. If omitted, it means the group that doesn't have category name. */
    category?: string;
    /** Dimension information. It is used when changing settings for a specific dimension. If omitted, the currently used dimension is used. */
    dimension?: SettingsDimension;
    /** Keys to be retrieved */
    keys: [];
    /** Indicates whether to subscribe for related events.true: Subscribefalse: Do not subscribe (false) */
    subscribe?: boolean;
}

/** ACG: settings.queryDescriptionLooks up the settings item, and returns the settings for the current foreground app only unlike the setSystemSettings method.RemarksEven though the foreground app is converted, the subscription message for the changed app settings will not be sent.ExceptionErrors occur when using undefined dimensions.ParametersNameRequiredTypeDescriptioncategoryOptionalstringCategory of settings. If omitted, it means the group that doesn't have category name.dimensionOptionalObject: dimensionDimension information. It is used when changing settings for a specific dimension. If omitted, the currently used dimension is used.keysRequiredarrayKeys to be retrievedsubscribeOptionalbooleanIndicates whether to subscribe for related events.true: Subscribefalse: Do not subscribe (false)Call Returns */
export interface SettingsGetCurrentSettingsCallReturn {
    /** Objects that holds setting values. */
    settings: any;
    /** Category of settings. It is same with the value specified in category input parameter. */
    category: string;
    /** In case there is a dimension property in settings category, it returns the corresponding value. */
    dimension: SettingsDimension;
    /** Method name. It is used to clarify which method is called from the many responses returned from batch. */
    method: string;
    /** Current foreground app ID */
    app_id: string;
    /** Indicates the current subscription status. */
    subscribed?: boolean;
    /** Indicates whether the execution succeeded.true: Successfalse: Failure */
    returnValue: boolean;
    /** Describes the error. The method will return errorText only if it fails. See the Error Codes Reference for more details. */
    errorText?: string;
}

/** ACG: settings.queryDescriptionLooks up the settings item, and returns the settings for the current foreground app only unlike the setSystemSettings method.RemarksEven though the foreground app is converted, the subscription message for the changed app settings will not be sent.ExceptionErrors occur when using undefined dimensions.ParametersNameRequiredTypeDescriptioncategoryOptionalstringCategory of settings. If omitted, it means the group that doesn't have category name.dimensionOptionalObject: dimensionDimension information. It is used when changing settings for a specific dimension. If omitted, the currently used dimension is used.keysRequiredarrayKeys to be retrievedsubscribeOptionalbooleanIndicates whether to subscribe for related events.true: Subscribefalse: Do not subscribe (false)Call ReturnsNameRequiredTypeDescriptionsettingsRequiredObject: settingsObjects that holds setting values.categoryRequiredstringCategory of settings. It is same with the value specified in category input parameter.dimensionRequiredObject: dimensionIn case there is a dimension property in settings category, it returns the corresponding value.methodRequiredstringMethod name. It is used to clarify which method is called from the many responses returned from batch.app_idRequiredstringCurrent foreground app IDsubscribedOptionalbooleanIndicates the current subscription status.returnValueRequiredbooleanIndicates whether the execution succeeded.true: Successfalse: FailureerrorTextOptionalstringDescribes the error. The method will return errorText only if it fails. See the Error Codes Reference for more details.Subscription Returns */
export interface SettingsGetCurrentSettingsSubscription {
    /** Objects that holds setting values. */
    settings: any;
    /** Category of settings. It is same with the value specified in category input parameter. */
    category: string;
    /** In case there is a dimension property in settings category, it returns the corresponding value. */
    dimension?: SettingsDimension;
    /** Method name. It is used to clarify which method is called from the many responses returned from batch. */
    method: string;
    /** In case of settings by app, it returns App ID. */
    app_id: string;
    /** Indicates whether the execution succeeded. */
    returnValue: boolean;
    /** Describes the error. The method will return errorText only if it fails. See the Error Codes Reference for more details. */
    errorText?: string;
}

/** ACG: settings.queryDescriptionRetrieves detailed information on the settings.ExceptionThe request for nonexistent keys will be processed as an error.Parameters */
export interface SettingsGetSystemSettingDescParameters {
    /** Category of settings */
    category?: string;
    /** Keys for retrieving setting values. One of the keys and key should be specified. */
    keys?: [];
    /** A key for retrieving setting value. One of keys and key should be specified. */
    key?: string;
    /** App ID. If target key is app specific setting, app ID should be specified. */
    app_id?: string;
    /** If app ID isn't specified, use current foreground app ID. If app ID is explicitly given, this parameter is ignored.true: Use current foreground app IDfalse: Don't use app IDdefault value: false */
    current_app?: boolean;
    /** Indicates whether to subscribe for related events.true: Subscribefalse: Do not subscribe (false) */
    subscribe?: boolean;
}

/** It is the object to be referred to when creating user UI like Settings App. */
export interface SettingsUi {
    /** If it's True, users can make a change. */
    active: boolean;
    /** If it's true, the menu that users can select is displayed. */
    visible: boolean;
    /** The name of Settings menu that is displayed to users. */
    displayName: string;
    /** UI Component information like Combo Box and List. (currently not in use) */
    widget: string;
}

/** This object describes the strings among the selectable value type. */
export interface SettingsArrayExt {
    /** If it's True, it means it is the value that users can select. */
    active: boolean;
    /** Only if it's True, it is displayed to the user as a selectable item. */
    visible: boolean;
    /** Defines the value that is stored when the user makes a selection. */
    value: string;
}

/** It is used when describing the user-configurable data in the integer range. */
export interface SettingsRange {
    /** Interval between the values that the user can select in the integer range. */
    interval: number;
    /** Minimum value among the integer values that the user can select */
    min: number;
    /** Maximum value among the integer values that the user can select */
    max: number;
}

/** Specify the properties of the values object according to vtype. It is the information that is used for the validation of configurable values.The format for the value of each vtype is:array{  array: [ string, string, ...]}arrayExt{  arrayExt: [ object, object, ...]}Object Syntax:{   visible: boolean   active: boolean   value: string}range{  range: {    max: integer    min: integer    interval: integer  }} */
export interface SettingsValues {
    /** Array of configurable strings */
    array?: string[];
    /** Array of extended information of the configurable strings */
    arrayExt?: SettingsArrayExt[];
    /** Valid range in integer */
    range?: SettingsRange;
    /** Validation check for external callback */
    callback?: any;
    /** Format of date and time */
    date?: any;
    /** Describes valid data on the external file */
    file?: string;
}

/** ACG: settings.queryDescriptionRetrieves detailed information on the settings.ExceptionThe request for nonexistent keys will be processed as an error.ParametersNameRequiredTypeDescriptioncategoryOptionalstringCategory of settingskeysOptionalarrayKeys for retrieving setting values. One of the keys and key should be specified.keyOptionalstringA key for retrieving setting value. One of keys and key should be specified.app_idOptionalStringApp ID. If target key is app specific setting, app ID should be specified.current_appOptionalBooleanIf app ID isn't specified, use current foreground app ID. If app ID is explicitly given, this parameter is ignored.true: Use current foreground app IDfalse: Don't use app IDdefault value: falsesubscribeOptionalbooleanIndicates whether to subscribe for related events.true: Subscribefalse: Do not subscribe (false)Call Returns */
export interface SettingsGetSystemSettingDescCallReturn {
    /** Category of settings. It is same with the value specified in category input parameter. */
    category: string;
    /** Database type. One of the following values will be returned."G" : Global type"S" : PerApp type"M" : Mixed type"E" : ExceptionApp type */
    dbtype: string;
    /** In case there is a dimension property in settings category, it returns the corresponding value. */
    dimension: SettingsDimension;
    /** Requested key */
    key: string;
    /** Indicates whether the validation check for the settings values is performed.true: The validation check is performedfalse: The validation check is not performed */
    valueCheck: boolean;
    /** Indicates whether to initialize with the factory default value when resetting the system (device is rebooted).true: Initialized with the factory default valuefalse: Not initialized with the factory default value */
    volatile: boolean;
    /** Object for UI information containing active and visible flags as property. */
    ui: SettingsUi;
    /** Type of values object. One of the following value will be returned: array, arrayExt, range, callback, file */
    vtype: string;
    /** The valid range of the setting value. The properties of the values are determined according to vtype. */
    values: SettingsValues;
    /** If the result setting is app specific value, app ID will be returned. */
    app_id?: string;
    /** Indicates whether the execution succeeded.true: Successfalse: Failure */
    returnValue: boolean;
    /** Describes the error. The method will return errorText only if it fails. See the Error Codes Reference for more details. */
    errorText?: string;
    /** Indicates the current subscription status. */
    subscribed?: boolean;
}

/** ACG: settings.queryDescriptionRetrieves detailed information on the settings.ExceptionThe request for nonexistent keys will be processed as an error.ParametersNameRequiredTypeDescriptioncategoryOptionalstringCategory of settingskeysOptionalarrayKeys for retrieving setting values. One of the keys and key should be specified.keyOptionalstringA key for retrieving setting value. One of keys and key should be specified.app_idOptionalStringApp ID. If target key is app specific setting, app ID should be specified.current_appOptionalBooleanIf app ID isn't specified, use current foreground app ID. If app ID is explicitly given, this parameter is ignored.true: Use current foreground app IDfalse: Don't use app IDdefault value: falsesubscribeOptionalbooleanIndicates whether to subscribe for related events.true: Subscribefalse: Do not subscribe (false)Call ReturnsNameRequiredTypeDescriptioncategoryRequiredStringCategory of settings. It is same with the value specified in category input parameter.dbtypeRequiredStringDatabase type. One of the following values will be returned."G" : Global type"S" : PerApp type"M" : Mixed type"E" : ExceptionApp typedimensionRequiredObject: dimensionIn case there is a dimension property in settings category, it returns the corresponding value.keyRequiredStringRequested keyvalueCheckRequiredbooleanIndicates whether the validation check for the settings values is performed.true: The validation check is performedfalse: The validation check is not performedvolatileRequiredbooleanIndicates whether to initialize with the factory default value when resetting the system (device is rebooted).true: Initialized with the factory default valuefalse: Not initialized with the factory default valueuiRequiredObject: uiObject for UI information containing active and visible flags as property.vtypeRequiredStringType of values object. One of the following value will be returned: array, arrayExt, range, callback, filevaluesRequiredObject: valuesThe valid range of the setting value. The properties of the values are determined according to vtype.app_idOptionalStringIf the result setting is app specific value, app ID will be returned.returnValueRequiredBooleanIndicates whether the execution succeeded.true: Successfalse: FailureerrorTextOptionalStringDescribes the error. The method will return errorText only if it fails. See the Error Codes Reference for more details.subscribedOptionalBooleanIndicates the current subscription status.Subscription Returns */
export interface SettingsGetSystemSettingDescSubscription {
    /** Category of settings. It is same with the value specified in category input parameter. */
    category: string;
    /** Database type. One of the following values will be returned."G" : Global type"S" : PerApp type"M" : Mixed type"E" : ExceptionApp type */
    dbtype: string;
    /** In case there is a dimension property in settings category, it returns the corresponding value. */
    dimension: SettingsDimension;
    /** Requested key */
    key: string;
    /** Indicates whether the validation check for the settings values is performed.true: The validation check is performedfalse: The validation check is not performed */
    valueCheck: boolean;
    /** Indicates whether to initialize with the factory default value when resetting the system (device is rebooted).true: Initialized with the factory default valuefalse: Not initialized with the factory default value */
    volatile: boolean;
    /** Object for UI information containing active and visible flags as property. */
    ui: SettingsUi;
    /** Type of values object. One of the following value will be returned: array, arrayExt, range, callback, file */
    vtype: string;
    /** The valid range of the setting value. The properties of the values are determined according to vtype. */
    values: SettingsValues;
    /** Describes the error. The method will return errorText only if it fails. See the Error Codes Reference for more details. */
    errorText?: string;
    /** Indicates whether the execution succeeded. */
    returnValue: boolean;
}

/** ACG: settings.queryDescriptionRetrieves the factory default value of the setting item. Method of use is the same as getSystemSettings.RemarksDimension is applied in the same way as getSystemSettings.Subscription is not supported.ExceptionIf undefined dimension is used, errors will occur.Parameters */
export interface SettingsGetSystemSettingFactoryValueParameters {
    /** Category of settings */
    category?: string;
    /** Dimension information. It is used when setting by input, video mode, 3D mode. */
    dimension?: SettingsDimension;
    /** Keys to be retrieved. One of keys and key should be specified. */
    keys?: string[];
    /** A key to be retrieved. In case there is one key to be retrieved, directly input the strings. One of keys and key should be specified. */
    key?: string;
    /** App ID. In case of app specific setting, app ID should be specified. */
    app_id?: string;
}

/** ACG: settings.queryDescriptionRetrieves the factory default value of the setting item. Method of use is the same as getSystemSettings.RemarksDimension is applied in the same way as getSystemSettings.Subscription is not supported.ExceptionIf undefined dimension is used, errors will occur.ParametersNameRequiredTypeDescriptioncategoryOptionalStringCategory of settingsdimensionOptionalObject: dimensionDimension information. It is used when setting by input, video mode, 3D mode.keysOptionalString arrayKeys to be retrieved. One of keys and key should be specified.keyOptionalStringA key to be retrieved. In case there is one key to be retrieved, directly input the strings. One of keys and key should be specified.app_idOptionalStringApp ID. In case of app specific setting, app ID should be specified.Call Returns */
export interface SettingsGetSystemSettingFactoryValueCallReturn {
    /** Indicates whether the execution succeeded.true: Successfalse: Failure */
    returnValue: boolean;
    /** Describes the error. The method will return errorText only if it fails. See the Error Codes Reference for more details. */
    errorText?: string;
    /** Method name. It is used to clarify which method is called from the many responses returned from batch. */
    method: string;
    /** In case there is a dimension property in settings category, it returns the corresponding value. */
    dimension: SettingsDimension;
    /** Settings category name */
    category: string;
    /** Object that holds setting values. */
    settings: any;
}

/** ACG: settings.queryDescriptionRetrieves values from system settings with keys or category which are specified in array as parameter. Following keys are available in public bus.CategoryKeyRemarksN/AlocaleInfoLocale info such as Menu, Audio N/AeulaStatusEnd-User License AgreementcaptioncaptionEnableCaption settings optioncountryCountry settings (ISO 3166-1 alpha-3) optionsmartServiceCountryCode2Service country settings  (ISO 3166-1 alpha-2) optionsmartServiceCountryCode3Service country settings (ISO 3166-1 alpha-3)RemarksThere is additional feature named 'Dimension'. We can store different settings values with a KEY using different dimension. Imagine array. Using dimension, we can keep different settings values simultaneously, and categorize settings into some groups. Dimension is index by other keys settingsservice has. For example, Brightness key has 3 dimensions, input, 3dmode, and pictureMode. You can store different brightness value according to 3 different settings, input, 3dmode, and pictureMode.ExceptionIf getSystemSettings is called with undefined category and key, it will return error.Parameters */
export interface SettingsGetSystemSettingsParameters {
    /** Category of settingsIf the specified keys (key) has a category, you must specify this property.If you only use this property without keys or key, this method will return all values which are in the specified category. */
    category?: string;
    /** Specify dimension information for special key (e.g. brightness has 3 dimensions, input, _3dMode, pictureMode). Current dimensions is applied if dimension is not specified. */
    dimension?: SettingsDimension;
    /** Keys for retrieving setting values. One of keys and key should be specified. */
    keys?: [];
    /** A key for retrieving setting value. One of keys and key should be specified. */
    key?: string;
    /** App ID. If target key is app specific setting, app ID should be specified. */
    app_id?: string;
    /** Indicates whether to use current foreground app ID instead of specific app ID.true: Use current foreground app IDfalse: Use specific app ID default value: false */
    current_app?: boolean;
    /** Indicates whether to subscribe for related events.true: Subscribefalse: Do not subscribe */
    subscribe?: boolean;
}

/** ACG: settings.queryDescriptionRetrieves values from system settings with keys or category which are specified in array as parameter. Following keys are available in public bus.CategoryKeyRemarksN/AlocaleInfoLocale info such as Menu, Audio N/AeulaStatusEnd-User License AgreementcaptioncaptionEnableCaption settings optioncountryCountry settings (ISO 3166-1 alpha-3) optionsmartServiceCountryCode2Service country settings  (ISO 3166-1 alpha-2) optionsmartServiceCountryCode3Service country settings (ISO 3166-1 alpha-3)RemarksThere is additional feature named 'Dimension'. We can store different settings values with a KEY using different dimension. Imagine array. Using dimension, we can keep different settings values simultaneously, and categorize settings into some groups. Dimension is index by other keys settingsservice has. For example, Brightness key has 3 dimensions, input, 3dmode, and pictureMode. You can store different brightness value according to 3 different settings, input, 3dmode, and pictureMode.ExceptionIf getSystemSettings is called with undefined category and key, it will return error.ParametersNameRequiredTypeDescriptioncategoryOptionalstringCategory of settingsIf the specified keys (key) has a category, you must specify this property.If you only use this property without keys or key, this method will return all values which are in the specified category.dimensionOptionalObject: dimensionSpecify dimension information for special key (e.g. brightness has 3 dimensions, input, _3dMode, pictureMode). Current dimensions is applied if dimension is not specified.keysOptionalarrayKeys for retrieving setting values. One of keys and key should be specified.keyOptionalstringA key for retrieving setting value. One of keys and key should be specified.app_idOptionalstringApp ID. If target key is app specific setting, app ID should be specified.current_appOptionalbooleanIndicates whether to use current foreground app ID instead of specific app ID.true: Use current foreground app IDfalse: Use specific app ID default value: falsesubscribeOptionalbooleanIndicates whether to subscribe for related events.true: Subscribefalse: Do not subscribeCall Returns */
export interface SettingsGetSystemSettingsCallReturn {
    /** Objects that holds result setting values. */
    settings: any;
    /** Category name of the result settings. It is same with category parameter in method call. */
    category: string;
    /** Dimension information of the result settings. In case the setting category has a dimension, it returns its value. */
    dimension: SettingsDimension;
    /** Method name that is used for clarify which method is called in subscription messages. */
    method: string;
    /** If the result setting is app specific value, app ID will be returned. */
    app_id?: string;
    /** Indicates the current subscription status. */
    subscribed?: boolean;
    /** Indicates whether the execution succeeded.true: Successfalse: Failure */
    returnValue: boolean;
    /** Describes the error. The method will return errorText only if it fails. See the Error Codes Reference for more details. */
    errorText?: string;
}

/** ACG: settings.queryDescriptionRetrieves values from system settings with keys or category which are specified in array as parameter. Following keys are available in public bus.CategoryKeyRemarksN/AlocaleInfoLocale info such as Menu, Audio N/AeulaStatusEnd-User License AgreementcaptioncaptionEnableCaption settings optioncountryCountry settings (ISO 3166-1 alpha-3) optionsmartServiceCountryCode2Service country settings  (ISO 3166-1 alpha-2) optionsmartServiceCountryCode3Service country settings (ISO 3166-1 alpha-3)RemarksThere is additional feature named 'Dimension'. We can store different settings values with a KEY using different dimension. Imagine array. Using dimension, we can keep different settings values simultaneously, and categorize settings into some groups. Dimension is index by other keys settingsservice has. For example, Brightness key has 3 dimensions, input, 3dmode, and pictureMode. You can store different brightness value according to 3 different settings, input, 3dmode, and pictureMode.ExceptionIf getSystemSettings is called with undefined category and key, it will return error.ParametersNameRequiredTypeDescriptioncategoryOptionalstringCategory of settingsIf the specified keys (key) has a category, you must specify this property.If you only use this property without keys or key, this method will return all values which are in the specified category.dimensionOptionalObject: dimensionSpecify dimension information for special key (e.g. brightness has 3 dimensions, input, _3dMode, pictureMode). Current dimensions is applied if dimension is not specified.keysOptionalarrayKeys for retrieving setting values. One of keys and key should be specified.keyOptionalstringA key for retrieving setting value. One of keys and key should be specified.app_idOptionalstringApp ID. If target key is app specific setting, app ID should be specified.current_appOptionalbooleanIndicates whether to use current foreground app ID instead of specific app ID.true: Use current foreground app IDfalse: Use specific app ID default value: falsesubscribeOptionalbooleanIndicates whether to subscribe for related events.true: Subscribefalse: Do not subscribeCall ReturnsNameRequiredTypeDescriptionsettingsRequiredObject: settingsObjects that holds result setting values.categoryRequiredstringCategory name of the result settings. It is same with category parameter in method call.dimensionRequiredObject: dimensionDimension information of the result settings. In case the setting category has a dimension, it returns its value.methodRequiredstringMethod name that is used for clarify which method is called in subscription messages.app_idOptionalstringIf the result setting is app specific value, app ID will be returned.subscribedOptionalbooleanIndicates the current subscription status.returnValueRequiredbooleanIndicates whether the execution succeeded.true: Successfalse: FailureerrorTextOptionalstringDescribes the error. The method will return errorText only if it fails. See the Error Codes Reference for more details.Subscription Returns */
export interface SettingsGetSystemSettingsSubscription {
    /** Objects that holds result setting values. */
    settings: any;
    /** Category name of the result settings. It is same with category parameter in method call. */
    category: string;
    /** Dimension information of the result settings. In case the setting category has a dimension, it returns its value. */
    dimension: SettingsDimension;
    /** Method name that is used for clarify which method is called in subscription messages. */
    method: string;
    /** If the result setting is app specific value, app ID will be returned. */
    app_id?: string;
    /** Indicates whether the execution succeeded. */
    returnValue?: string;
    /** Describes the error. The method will return errorText only if it fails. See the Error Codes Reference for more details. */
    errorText?: string;
}

/** ACG: settings.queryDescriptionRetrives possible items to be setRemarksThe return type varies depending on the keys.Use getSystemSettingDesc method for the retrieval of additional info other than configurable valid conditionsExceptionErrors will occur when retrieving the undefined keys.Parameters */
export interface SettingsGetSystemSettingValuesParameters {
    /** Category of settings */
    category?: string;
    /** A key to be retrieved */
    key: string;
    /** In case of setting by app, app ID needs to be specified. */
    app_id?: string;
    /** Indicates whether to subscribe for related events.true: Subscribefalse: Do not subscribe (default) */
    subscribe?: boolean;
}

/** ACG: settings.queryDescriptionRetrives possible items to be setRemarksThe return type varies depending on the keys.Use getSystemSettingDesc method for the retrieval of additional info other than configurable valid conditionsExceptionErrors will occur when retrieving the undefined keys.ParametersNameRequiredTypeDescriptioncategoryOptionalStringCategory of settingskeyRequiredStringA key to be retrievedapp_idOptionalStringIn case of setting by app, app ID needs to be specified.subscribeOptionalbooleanIndicates whether to subscribe for related events.true: Subscribefalse: Do not subscribe (default)Call Returns */
export interface SettingsGetSystemSettingValuesCallReturn {
    /** Method name. It is used to clarify which method is called from the many responses returned from batch. */
    method: string;
    /** Type of values object. */
    vtype: string;
    /** The valid range of the setting value. The properties of the values are determined according to vtype. */
    values: SettingsValues;
    /** Indicates whether the execution succeeded.true: Successfalse: Failure */
    returnValue: boolean;
    /** Describes the error. The method will return errorText only if it fails. See the Error Codes Reference for more details. */
    errorText?: string;
    /** Indicates the current subscription status. */
    subscribed: boolean;
}

/** ACG: settings.queryDescriptionRetrives possible items to be setRemarksThe return type varies depending on the keys.Use getSystemSettingDesc method for the retrieval of additional info other than configurable valid conditionsExceptionErrors will occur when retrieving the undefined keys.ParametersNameRequiredTypeDescriptioncategoryOptionalStringCategory of settingskeyRequiredStringA key to be retrievedapp_idOptionalStringIn case of setting by app, app ID needs to be specified.subscribeOptionalbooleanIndicates whether to subscribe for related events.true: Subscribefalse: Do not subscribe (default)Call ReturnsNameRequiredTypeDescriptionmethodRequiredStringMethod name. It is used to clarify which method is called from the many responses returned from batch.vtypeRequiredStringType of values object.valuesRequiredObject: valuesThe valid range of the setting value. The properties of the values are determined according to vtype.returnValueRequiredbooleanIndicates whether the execution succeeded.true: Successfalse: FailureerrorTextOptionalstringDescribes the error. The method will return errorText only if it fails. See the Error Codes Reference for more details.subscribedRequiredBooleanIndicates the current subscription status.Subscription Returns */
export interface SettingsGetSystemSettingValuesSubscription {
    /** Method name. It is used to clarify which method is called from the many responses returned from batch. */
    method: string;
    /** Type of values object. */
    vtype: string;
    /** The valid range of the setting value. The properties of the values are determined according to vtype. */
    values: SettingsValues;
    /** Indicates whether the execution succeeded. */
    returnValue: boolean;
    /** Indicates the current subscription status. */
    subscribed: boolean;
}

/** This object describes an active subscription to the settings service. */
export interface SettingsSubscription {
    /** The original payload of the subscription request. */
    message: any;
    /** Service name of the subscriber */
    sender: string;
    /** Method name that subscriber called to create the subscription. */
    method: string;
}

/** ACG: settings.devutilityDescriptionReturns the information of the services which currently subscribe to the Settings Service. ParametersNoneCall Returns */
export interface SettingsInternalGetCurrentSubscriptionsCallReturn {
    /** Indicates whether the execution succeeded.true: Successfalse: Failure */
    returnValue: boolean;
    /** The list of the services (e.g., message, sender, method) which are currently subscribing to the Settings Service. */
    subscriptions: SettingsSubscription[];
    /** Describes the error. The method will return errorText only if it fails. See the Error Codes Reference for more details. */
    errorText?: string;
}

/** ACG: settings.devutilityDescriptionGenerates log for debug and changes current app.RemarksGenerates logs for every luna callChanges current app idParameters */
export interface SettingsInternalInstrumentParameters {
    /** Information on internal method settings */
    control: string;
    /** The current app ID to be changed */
    params?: any;
}

/** ACG: settings.devutilityDescriptionGenerates log for debug and changes current app.RemarksGenerates logs for every luna callChanges current app idParametersNameRequiredTypeDescriptioncontrolRequiredStringInformation on internal method settingsparamsOptionalObjectThe current app ID to be changedCall Returns */
export interface SettingsInternalInstrumentCallReturn {
    /** Indicates whether the execution succeeded.true: Successfalse: Failure */
    returnValue: boolean;
    /** Instrument setting status */
    instrumentStatus?: string;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: settings.managementDescriptionInitializes the settings item information to the factory default value.ExceptionError occurs when requesting to delete nonexistent keys.Parameters */
export interface SettingsResetSystemSettingDescParameters {
    /** Category of settings */
    category?: string;
    /** Keys to be reset to the factory default value */
    keys: [];
    /** App ID. If target key is app specific setting, app ID should be specified. */
    app_id?: string;
}

/** ACG: settings.managementDescriptionInitializes the settings item information to the factory default value.ExceptionError occurs when requesting to delete nonexistent keys.ParametersNameRequiredTypeDescriptioncategoryOptionalstringCategory of settingskeysRequiredarrayKeys to be reset to the factory default valueapp_idOptionalStringApp ID. If target key is app specific setting, app ID should be specified.Call Returns */
export interface SettingsResetSystemSettingDescCallReturn {
    /** Method name. It is used to clarify which method is called from the many responses returned from batch. */
    method: string;
    /** Indicates whether the execution succeeded.true: Successfalse: Failure */
    returnValue: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: settings.managementDescription Initializes the setting items to the factory default values.RemarksFor the given category, when changing setting items, other items can be initialized according to the dimension.For the key with 'E' dbtype, the values of ExceptionApp list will be equally changed.ExceptionError occurs when using undefined dimension.Parameters */
export interface SettingsResetSystemSettingsParameters {
    /** Category of settings */
    category?: string;
    /** Dimension information. It is used when setting by input, video mode, 3D mode. */
    dimension?: SettingsDimension;
    /** Keys to be reset to the factory default value */
    keys: [];
    /** App ID. If target key is app specific setting, app ID should be specified. */
    app_id?: string;
    /** Indicates whether to reset the settings for all dimensions.true: Resetfalse: Do not reset (default) */
    resetAll?: boolean;
}

/** ACG: settings.managementDescription Initializes the setting items to the factory default values.RemarksFor the given category, when changing setting items, other items can be initialized according to the dimension.For the key with 'E' dbtype, the values of ExceptionApp list will be equally changed.ExceptionError occurs when using undefined dimension.ParametersNameRequiredTypeDescriptioncategoryOptionalstringCategory of settingsdimensionOptionalObject: dimensionDimension information. It is used when setting by input, video mode, 3D mode.keysRequiredarrayKeys to be reset to the factory default valueapp_idOptionalstringApp ID. If target key is app specific setting, app ID should be specified.resetAllOptionalbooleanIndicates whether to reset the settings for all dimensions.true: Resetfalse: Do not reset (default)Call Returns */
export interface SettingsResetSystemSettingsCallReturn {
    /** Method name that is used for clarify which method is called in subscription messages. */
    method: string;
    /** Indicates whether the execution succeeded.true: Successfalse: Failure */
    returnValue: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: settings.managementDescriptionChanges detailed information of the settings.ExceptionCategory, key, dimension, dbtype, volatile attributes cannot be changed during runtime.Parameters */
export interface SettingsSetSystemSettingDescParameters {
    /** Category of settings */
    category?: string;
    /** A key to be set */
    key: string;
    /** App ID. In case of app specific setting, app ID should be specified. */
    app_id?: string;
    /** Object for UI information containing active and visible flags as property. */
    ui?: SettingsUi;
    /** Type of values object. Possible values: array, arrayExt, range, callback, file. */
    vtype?: string;
    /** Specify the properties of the values object according to vtype. */
    values?: SettingsValues;
    /** Indicates whether to initialize the setting when resetting the system.true: Initialized false: Not initialized */
    volatile?: boolean;
    /** Indicates whether to perform the validation check on the set values.true: Do not performfalse: Perform */
    valueCheck?: boolean;
    /** Indicates whether to receive the subscription message.true: The subscribe message will be sent to selffalse: The subscribe message will not be sent to self */
    notifySelf?: boolean;
    /** reserved property */
    ext?: any;
}

/** ACG: settings.managementDescriptionChanges detailed information of the settings.ExceptionCategory, key, dimension, dbtype, volatile attributes cannot be changed during runtime.ParametersNameRequiredTypeDescriptioncategoryOptionalstringCategory of settingskeyRequiredstringA key to be setapp_idOptionalStringApp ID. In case of app specific setting, app ID should be specified.uiOptionalObject: uiObject for UI information containing active and visible flags as property.vtypeOptionalstringType of values object. Possible values: array, arrayExt, range, callback, file.valuesOptionalObject: valuesSpecify the properties of the values object according to vtype.volatileOptionalbooleanIndicates whether to initialize the setting when resetting the system.true: Initialized false: Not initializedvalueCheckOptionalbooleanIndicates whether to perform the validation check on the set values.true: Do not performfalse: PerformnotifySelfOptionalbooleanIndicates whether to receive the subscription message.true: The subscribe message will be sent to selffalse: The subscribe message will not be sent to selfextOptionalObject: extreserved propertyCall Returns */
export interface SettingsSetSystemSettingDescCallReturn {
    /** Method name that is used for clarify which method is called in subscription messages. */
    method: string;
    /** Indicates whether the execution succeeded.true: Successfalse: Failure */
    returnValue: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: settings.managementDescriptionSets the default value when reset by resetSystemSettingDesc.It is the same type as setSystemSettingDesc method, and it can change the factory default values of the settings info.RemarksSettings item info is in JSON type, and includes the following.ExceptionCategory, key, dimension, dbtype, volatile attributes cannot be changed during runtime.Parameters */
export interface SettingsSetSystemSettingFactoryDescParameters {
    /** Category of settings */
    category?: string;
    /** Setting key */
    key: string;
    /** App ID. In case of app specific setting, app ID should be specified. */
    app_id?: string;
    /** Object for UI information containing active and visible flags as property. */
    ui?: SettingsUi[];
    /** Type of values object. */
    vtype?: string;
    /** Specify the properties of the values object according to vtype. */
    values?: SettingsValues;
    /** Indicates whether to initialize the setting when resetting the system.true: Initialized false: Not initialized */
    volatile?: boolean;
    /** Indicates whether to perform the validation check on the set values.true: Do not performfalse: Perform */
    valueCheck?: boolean;
    /** Indicates whether to receive the subscription message.true: The subscribe message will be sent to selffalse: The subscribe message will not be sent to self */
    notifySelf?: boolean;
    /** reserved property */
    ext?: any;
}

/** ACG: settings.managementDescriptionSets the default value when reset by resetSystemSettingDesc.It is the same type as setSystemSettingDesc method, and it can change the factory default values of the settings info.RemarksSettings item info is in JSON type, and includes the following.ExceptionCategory, key, dimension, dbtype, volatile attributes cannot be changed during runtime.ParametersNameRequiredTypeDescriptioncategoryOptionalstringCategory of settingskeyRequiredstringSetting keyapp_idOptionalStringApp ID. In case of app specific setting, app ID should be specified.uiOptionalObject array: uiObject for UI information containing active and visible flags as property.vtypeOptionalstringType of values object. valuesOptionalObject: valuesSpecify the properties of the values object according to vtype.volatileOptionalbooleanIndicates whether to initialize the setting when resetting the system.true: Initialized false: Not initializedvalueCheckOptionalbooleanIndicates whether to perform the validation check on the set values.true: Do not performfalse: PerformnotifySelfOptionalbooleanIndicates whether to receive the subscription message.true: The subscribe message will be sent to selffalse: The subscribe message will not be sent to selfextOptionalObject: extreserved propertyCall Returns */
export interface SettingsSetSystemSettingFactoryDescCallReturn {
    /** Method name that is used for clarify which method is called in subscription messages. */
    method: string;
    /** Indicates whether the execution succeeded.true: Successfalse: Failure */
    returnValue: boolean;
    /** Describes the error. The method will return errorText only if it fails. See the Error Codes Reference for more details. */
    errorText?: string;
}

/** ACG: settings.managementDescriptionChanges the factory default of the setting item. The using method is same as setSystemSettings method.It can set the default value when resetSystemSettings method is called.RemarksIn case of the following specific categories, when changing settings, it can store different values according to conditions such as dimension.ExceptionWhen using undefined dimension, errors will occur.Parameters */
export interface SettingsSetSystemSettingFactoryValueParameters {
    /** Category of settings */
    category?: string;
    /** App ID. In case of app specific setting, app ID should be specified. */
    app_id?: string;
    /** Dimension information. It is used when setting by input, video mode, 3D mode. */
    dimension?: SettingsDimension;
    /** Settings to be saved */
    settings: any;
    /** Indicates whether to set the settings for all dimensions. Either dimension or setAll can be specified.true: Set the settings for all dimensionsfalse: Set the settings for the given dimension onlydefault value: false */
    setAll?: boolean;
    /** Set to change settings of a specific country only */
    country?: string;
}

/** ACG: settings.managementDescriptionChanges the factory default of the setting item. The using method is same as setSystemSettings method.It can set the default value when resetSystemSettings method is called.RemarksIn case of the following specific categories, when changing settings, it can store different values according to conditions such as dimension.ExceptionWhen using undefined dimension, errors will occur.ParametersNameRequiredTypeDescriptioncategoryOptionalstringCategory of settingsapp_idOptionalStringApp ID. In case of app specific setting, app ID should be specified.dimensionOptionalObject: dimensionDimension information. It is used when setting by input, video mode, 3D mode.settingsRequiredObject: settingsSettings to be savedsetAllOptionalbooleanIndicates whether to set the settings for all dimensions. Either dimension or setAll can be specified.true: Set the settings for all dimensionsfalse: Set the settings for the given dimension onlydefault value: falsecountryOptionalstringSet to change settings of a specific country onlyCall Returns */
export interface SettingsSetSystemSettingFactoryValueCallReturn {
    /** Method name that is used for clarify which method is called in subscription messages. */
    method: string;
    /** Indicates whether the execution succeeded.true: Successfalse: Failure */
    returnValue: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: settings.managementDescriptionChanges settings. It is available only for the keys open to public when called through Public Luna bus. The permission setting is as follow.CategoryKeyRemarkscaptioncaptionEnableCaption settingRemarksIn case of the following specific categories, when changing settings, it can store different values according to the dimension.For the keys with 'E' dbtype, the values of ExceptionApp list will be equally changed.ExceptionWhen an undefined dimension is used, errors will occur. Parameters */
export interface SettingsSetSystemSettingsParameters {
    /** Category of settings */
    category?: string;
    /** It is used when setting by input, video mode, 3D mode. */
    dimension?: SettingsDimension;
    /** Settings to be saved */
    settings: any;
    /** App ID. In case of app specific setting, app ID should be specified. */
    app_id?: string;
    /** Indicates whether to receive the subscription message.true: The subscribe message will be sent to selffalse: The subscribe message will not be sent to self */
    notifySelf?: boolean;
    /** Indicates whether to return the settings of the current foreground apptrue: the settings of the current foreground app gets returnedfalse: use app ID specified in the perameter app_iddefault value: false */
    current_app?: boolean;
    /** Indicates whether to set the settings of all dimensions.true: Set the settings for all dimensionsfalse: Set the settings for the dimension specified in the parameter dimensiondefault value: false */
    setAll?: boolean;
    /** Indicates whether to receive the subscription message.true: The subscribe message will be sentfalse: The subscribe message will not be sent */
    notify?: boolean;
    /** Indicates whether to store the subscription message in DBtrue: Store in DBfalse: Do not tore in DB. Only subscription message will be sent.default value: true */
    store?: boolean;
}

/** ACG: settings.managementDescriptionChanges settings. It is available only for the keys open to public when called through Public Luna bus. The permission setting is as follow.CategoryKeyRemarkscaptioncaptionEnableCaption settingRemarksIn case of the following specific categories, when changing settings, it can store different values according to the dimension.For the keys with 'E' dbtype, the values of ExceptionApp list will be equally changed.ExceptionWhen an undefined dimension is used, errors will occur. ParametersNameRequiredTypeDescriptioncategoryOptionalstringCategory of settingsdimensionOptionalObject: dimensionIt is used when setting by input, video mode, 3D mode.settingsRequiredObject: settingsSettings to be savedapp_idOptionalstringApp ID. In case of app specific setting, app ID should be specified.notifySelfOptionalbooleanIndicates whether to receive the subscription message.true: The subscribe message will be sent to selffalse: The subscribe message will not be sent to selfcurrent_appOptionalbooleanIndicates whether to return the settings of the current foreground apptrue: the settings of the current foreground app gets returnedfalse: use app ID specified in the perameter app_iddefault value: falsesetAllOptionalbooleanIndicates whether to set the settings of all dimensions.true: Set the settings for all dimensionsfalse: Set the settings for the dimension specified in the parameter dimensiondefault value: falsenotifyOptionalbooleanIndicates whether to receive the subscription message.true: The subscribe message will be sentfalse: The subscribe message will not be sentstoreOptionalbooleanIndicates whether to store the subscription message in DBtrue: Store in DBfalse: Do not tore in DB. Only subscription message will be sent.default value: trueCall Returns */
export interface SettingsSetSystemSettingsCallReturn {
    /** Method name that is used for clarify which method is called in subscription messages. */
    method: string;
    /** Indicates whether the execution succeeded.true: Successfalse: Failure */
    returnValue: boolean;
    /** Indicates the reason for the failure of the operation. See the "Error Codes" section of this method for details. */
    errorText?: string;
}

/** ACG: settings.managementDescriptionChanges the formats of the configurable values. It can change detailed information using setSystemSettingDesc method.ExceptionWhen undefined keys are requested to change settings, errors will occur.Parameters */
export interface SettingsSetSystemSettingValuesParameters {
    /** Category of settings */
    category?: string;
    /** Setting key */
    key: string;
    /** Specify the properties of the values object according to vtype. */
    values: SettingsValues;
    /** Type of values object. One of the following value will be returned: Array, ArrayExt, Range, Callback, File, Date */
    vtype: string;
    /** Method of settings. One of the following values can be set: set, add, remove, update. */
    op: string;
}

/** ACG: settings.managementDescriptionChanges the formats of the configurable values. It can change detailed information using setSystemSettingDesc method.ExceptionWhen undefined keys are requested to change settings, errors will occur.ParametersNameRequiredTypeDescriptioncategoryOptionalstringCategory of settingskeyRequiredstringSetting keyvaluesRequiredObject: valuesSpecify the properties of the values object according to vtype.vtypeRequiredstringType of values object. One of the following value will be returned: Array, ArrayExt, Range, Callback, File, DateopRequiredstringMethod of settings. One of the following values can be set: set, add, remove, update.Call Returns */
export interface SettingsSetSystemSettingValuesCallReturn {
    /** Method name that is used for clarify which method is called in subscription messages. */
    method?: string;
    /** Indicates whether the execution succeeded.true: Successfalse: Failure */
    returnValue: boolean;
    /** Describes the error. The method will return errorText only if it fails. See the Error Codes Reference for more details. */
    errorText?: string;
}
